let wwGPT_local = true;
let wwGPT_limit = 1000;

console.log("\n %c AI-Summary-Link 博客文章摘要AI生成工具 %c https://www.wangdu.site/course/2075.html \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;")

if (typeof wwGPT_Selector === "undefined") {
  console.warn("wwGPT_Selector 未定义，请检查。");
} else if (typeof wwGPT_key === "undefined") {
  console.warn("wwGPT_key 未定义，请检查。");
} else {
  insertSummary(wwGPT_Selector, wwGPT_key)
}
function insertSummary(seletor, key) {
  let ai_summary_html = `<div id="summary-container" class="summary-container"><div class="post-ai-summary"><div class="post-ai-summary_title"><span> 🤖 由 AI 生成的文章摘要</span></div>
<div class="post-ai-summary_content"><span id="summary"></span></div></div>
<div class="post-ai-summary_footer"><div class="ai-tips">此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结</div></div></div>`
  if (!wwGPT_Selector) {
    console.warn("wwGPT_Selector 未设置，请检查");
    return "";
  } else {
    document.querySelector(wwGPT_Selector).insertAdjacentHTML('afterbegin', ai_summary_html);
  }
  if (!wwGPT_key) {
    console.warn("wwGPT_key 未设置，请检查");
    return "";
  }
}

let content_tag = document.querySelector(wwGPT_Selector);
let content = "";
const api_url = 'https://www.wangdu.site/wp-json/ai/v1/aisummary';
const timeout = 20000;
if (!content_tag) {
  console.warn("wwGPT_Selector 所选取的元素未抓取到内容，请重新选择Selector，请检查。");
} else {
  content = extractPureTextFromContainer(content_tag);
}

// 实现超时功能
const fetchWithTimeout = (url, options, timeout = 7000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  return fetch(url, {
    ...options,
    signal: controller.signal
  })
    .finally(() => clearTimeout(id));
};

const updateSummary = async () => {
  try {
    const response = await fetchWithTimeout(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: content,
        key: wwGPT_key,
        url: window.location.href,
        title: document.title
      })
    }, timeout);

    // if (!response.ok) throw new Error('Network response was not ok.');
    if (response.status === 403) {
      return response.json().then(data => {
        if (data.err_code) {
          printSummary(`${data.err_msg}`);
        }
      });
    } else {
      const data = await response.json();
      let summary = data.summary;
      if (wwGPT_local) {
        localStorage.setItem(window.location.href, summary);
      }
      printSummary(summary);
    }

  } catch (error) {
    console.error('Failed to fetch summary:', error);
    // 处理错误或在UI上通知用户
  }
};

function printSummary(summary) {
  const chat = document.querySelector('#summary');
  setCursorStatus(chat, 'loading');
  printText(chat, summary);
}

function extractPureTextFromContainer(container) {
  // 定义不想要的标签或者class
  const unwantedTags = ['script', 'style', 'iframe', 'button', 'input', 'footer'];
  const unwantedClasses = ['ads', 'social-buttons', 'navigation', 'post-TianliGPT', 'summary-container'];

  // 使用函数来判断是否应该排除某个元素
  function shouldExcludeElement(element) {
    return unwantedTags.includes(element.tagName.toLowerCase()) ||
      unwantedClasses.some(cls => element.classList.contains(cls));
  }

  // 使用递归函数来获取所有文本，忽略不需要的元素
  function getText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.nodeValue;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (shouldExcludeElement(node)) {
        // 如果节点是不需要的标签或者有不需要的类，则返回空字符串
        return '';
      }
      let text = '';
      node.childNodes.forEach(child => {
        text += getText(child) + ' ';
      });
      return text;
    }
    return '';
  }

  let textContent = getText(container).trim();
  // 使用正则表达式去除所有多余的空行和连续空白字符
  textContent = textContent.replace(/\s+/g, ' '); // 将连续空白字符替换为单个空格
  textContent = textContent.replace(/(^\s*\n|\n\s*$)/g, ''); // 去除字符串开头和结尾的空行
  textContent = textContent.replace(/(\n\s*\n)/g, '\n'); // 合并连续的空行

  textContent = textContent.replace(/([\u2700-\u27bf]|[\u1f600-\u1f64f]|[\u1f300-\u1f5ff]|[\u1f680-\u1f6ff]|[\u1f700-\u1f77f]|[\u1f780-\u1f7ff]|[\u1f800-\u1f8ff]|[\u1f900-\u1f9ff]|[\u1fa00-\u1fa6f]|[\u1fa70-\u1faff]|[\u2600-\u26ff]|[\u2b00-\u2bff]|\u2300|[\u25a0-\u25ff])/g, ''); // 移除绝大多数emoji
  textContent = textContent.substring(0, wwGPT_limit);
  return textContent;
}

var ai_summary_conetnt = window.localStorage && window.localStorage.getItem(window.location.href);
if (ai_summary_conetnt) {
  printSummary(ai_summary_conetnt);
} else {
  updateSummary();
}



/**
 * @description:
 * @param {HTMLElement} dom - 打印内容的dom
 * @param {string} content - 打印文本内容
 * @param {number} speed - 打印速度
 * @return {void}
 */
function printText(dom, content, speed = 50) {
  let index = 0
  setCursorStatus(dom, 'typing')
  let printInterval = setInterval(() => {
    dom.innerText += content[index]
    index++
    if (index >= content.length) {
      setCursorStatus(dom, 'end')
      clearInterval(printInterval)
    }
  }, speed)
}

/**
 * @description: 设置dom的光标状态
 * @param {HTMLElement} dom - 打印内容的dom
 * @param {"loading"|"typing"|"end"} status - 打印状态
 * @return {void}
 */
function setCursorStatus(dom, status) {
  const classList = {
    loading: 'typing blinker',
    typing: 'typing',
    end: '',
  }
  dom.className = classList[status]
}