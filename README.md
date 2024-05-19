# AI-Summary-Link

[管理后台](https://www.wangdu.site/wp-login.php?action=register)、[购买激活码](https://fk.wwkejishe.top/buy/16)

适用于绝大多数博客网站的文章摘要生成器

## 什么是 2wGPT

2w 为`文武`首字母缩写，2wGPT 是一个专门通过链接提取文字摘要生成工具，在 [WordPress AI文章摘要生成插件：AI-Article-Summary](https://www.wangdu.site/course/2075.html) 基础上又增加了 API 版本和管理后台(更加直观的管理AI摘要内容)

- 实时生成文章摘要
- 自动生成AI摘要，无需人工干预
- 一次生成AI摘要，再次生成无需消耗文字额度（可后台管理）
- 支持导出 csv 文件，数据备份更方便
- 配置简单，兼容性更强

## 如何部署 2wGPT

1. 你需要在博客后面位置引入js和css（**引入在网站的任意位置**）

   ```html
   <link rel="stylesheet" href="https://cdn1.tianli0.top/gh/dongyubin/AI-Summary-Link/2wGPT.css">
   <script>
   let wwGPT_Selector = '.post-content';
   let wwGPT_key = 'hPkCwC9wkWxN';
   </script>
   <script src="https://cdn1.tianli0.top/gh/dongyubin/AI-Summary-Link/2wGPT.js"></script>
   ```

2. 我们需要更改一些参数来让这个模型运作起来。

   `wwGPT_Selector` 、 `wwGPT_key`

### wwGPT_Selector

这个参数是填写你的博客文章所在的元素属性的选择器，在生成提交的文本时，只会将这个选择器对应的元素内的文本进行提交，并且在这个选择器对应的元素上放插入AI摘要。如果你使用的是Butterfly主题，那么为`.post-content`

其他博客主题选择器值，可以参考 [TianGPT文档](https://postsummary.zhheo.com/install.html)

### wwGPT_key

在 [发卡平台购买激活码](https://fk.wwkejishe.top/buy/16) ，10 万字符/19.9元，请求过得链接再次请求不会消耗字符额度，可以无限期使用。
