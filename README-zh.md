![2WGPT AI博客文章摘要生成器](https://cdn.wwkejishe.top/wp-cdn-02/2024/202407041028545.webp)

# AI-SEO-Summary-Pro 文章摘要

[管理后台](https://www.wangdu.site/wp-login.php?action=register)、[购买 AI-SEO-Summary-Pro 激活码](https://fk.wwkjs.top/buy/16)（国外用户：[购买 AI-SEO-Summary-Pro 激活码](https://buymeacoffee.com/dongyubin/e/257941)）

适用于绝大多数博客网站的文章摘要生成器

## AI-SEO-Summary-Pro

AI摘要生成器（插件名称：AI SEO Summary Pro）是一款专为 WordPress 平台设计的工具，它利用先进的AI（人工智能）大模型技术，对发布的文章进行深入分析并生成精准的摘要。与传统的简单截取文章片段的方式相比，AI SEO Summary Pro插件能够更全面、更智能地提炼文章的核心内容，为用户提供更为丰富和深入的阅读体验。

## AI SEO Summary Pro 核心优势

| 功能          | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| 🎯 AI 精准总结 | 基于大模型，提炼文章核心，非简单截断                         |
| 🔍 SEO 友好    | 摘要+关键词自动布局，提升搜索引擎可见度                      |
| ⚡ 一键生成    | 发布/更新文章时自动触发，无需人工干预                        |
| 💰 一次买断    | 10 万字符额度 ¥19.9（上面价格为 WordPress 代码买断价），重复生成不再扣费 |
| 🛠 多主题支持  | 覆盖 20+ 热门 WordPress & 静态博客主题                       |
| 📤 数据可导出  | CSV 备份，迁移无忧                                           |

## 两种使用方式

### 1) WordPress 插件（最简单）

1. 在 WordPress 后台 → 插件 → 安装插件 → 上传 `AI-SEO-Summary-Pro.zip` 并启用
2. 设置 → AI SEO Summary Pro → 填写激活码即可

### 2) 前端 JS 版本（任意站点通用，2wGPT）

适合 Hexo / Hugo / Typecho / Halo 等非 WordPress 系统。

```html
<!-- 引入样式与脚本（放在 </body> 前即可） -->
<link rel="stylesheet" href="https://cdn1.tianli0.top/gh/dongyubin/AI-Summary-Link/2wGPT.css">
<script>
  window.wwGPT_Selector = '.post-content';   // 文章正文选择器
  window.wwGPT_key      = 'hPkCwC9wkWxN';    // 在管理后台获取
</script>
<script src="https://cdn1.tianli0.top/gh/dongyubin/AI-Summary-Link/2wGPT.js"></script>
```

## 什么是 2wGPT

2w 为`文武`首字母缩写，2wGPT 是一个专门通过链接提取文字摘要生成工具，在 [WordPress AI文章摘要生成插件：AI-SEO-Summary-Pro](https://www.wangdu.site/course/2075.html) 基础上又增加了 API 版本和管理后台(更加直观的管理AI摘要内容)

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

这个参数是填写你的博客文章所在的元素属性的选择器，在生成提交的文本时，只会将这个选择器对应的元素内的文本进行提交，并且在这个选择器对应的元素上放插入AI摘要。如果你使用的是Hexo Butterfly主题，那么为`.post-content`

其他博客主题选择器值，可以参考 [主题适配](#主题适配)

### wwGPT_key

先在 [管理后台](https://www.wangdu.site/wp-login.php?action=register) 注册账号，然后在 [发卡平台购买激活码](https://fk.wwkejishe.top/buy/16) ，10 万字符/19.9元，请求过得链接再次请求不会消耗字符额度，可以无限期使用。

## 主题适配

非常多的小伙伴提供了他们对应主题的安装教程，你可以更加轻松的去使用他们。

| 主题名称             | wwGPT_Selector                            |
| :------------------- | :---------------------------------------- |
| hexo-theme-butterfly | #post #article-container                  |
| hexo-theme-fluid     | #board .post-content                      |
| hexo-theme-next      | #posts .post-body                         |
| hexo-theme-redefine  | .article-content.markdown-body            |
| hexo-theme-stellar   | .md-text.content.post                     |
| hexo-theme-volantis  | #post #post-body                          |
| hexo-theme-solitude  | #post #post-body                          |
| hugo-theme-DoIt      | .page.single:not(.special) .content       |
| halo-theme-xue       | #container .article-content #lightGallery |
| wordpress: argon     | #post_content                             |
| wordpress: 7B2       | #primary-home .entry-content              |
| wordpress：pix       | .single-content                           |
| wordpress: Sakurairo | .post .entry-content                      |
| wordpress: 子比主题  | .single-post .wp-posts-content            |
| wordpress: CorePress | .post-content-content                     |
| wordpress: OneNav    | .post-template-default .panel-body        |
| wordpress: ripro     | .post-template-default .content-wrapper   |
| valaxy-theme-yun     | .content .markdown-body                   |
| typecho-bearsimple   | #post-content #bearsimple-images          |
| typecho-bearhoney    | .post-content-block .content              |
| typecho-handsome     | #postpage #md_handsome_origin             |
| typecho-joe          | .joe_post .joe_detail__article            |
| typecho-void         | .articleBody                              |

## 快速开始（3 步）

1. 注册[管理后台](https://www.wangdu.site/wp-login.php?action=register)
2. 购买激活码（10 万字符 ¥19.9，用完可再购）
3. 将激活码填入插件或 `wwGPT_key` 变量 → 完成！

## FAQ

- **额度如何计算？**
  同一 URL 再次生成不扣费；仅首次生成时按文章字数扣减。
- **支持多语言文章吗？**
  支持中、英、日、韩等多语种混合内容。
- **能否本地部署？**
  目前仅提供云端 API，后续将开放私有化版本，敬请期待。
