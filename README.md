# vue-markdownit-loader

> 支持在 vue template 模版中使用 markdown 语法

## 安装

```bash
npm install vue-markdownit-loader --save-dev
```

## 特征
- Hot reload
- 使用 Hightlight 语法高亮
- 支持嵌套标签的方式使用

## 使用方式
[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

`安装并引入你喜欢的 markdown 样式文件，这里以 github-markdown-css 为例`

```bash
npm install github-markdown-css --save
```

```javascript
import 'github-markdown-css'
```

`如果你要使用 highlight.js 高亮语法，也要引入 highlight.js/styles/github.css`
[HightLight Styles](https://highlightjs.org/static/demo/)

`webpack.config.js` file (webpack 2.x):

```javascript
module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          md: "vue-markdownit-loader"
        }
      }
    },{
        test: /\.md/,
        loader: 'vue-markdownit-loader'
    }]
  }
};
```
`xxxx.vue`

```html
<template lang="md">
  <div class="wrapper">
    <Markdown>
      markdown text
    </Markdown>
    <VueComponent>
      <VueComponent>
      </VueComponent>
      <Markdown>
        markdown text
      </Markdown>
    </VueComponent>>
  </div>
</template>
```

### Passing options to vue-markdownit-loader

* 可以传 tagName 给 vue-markdownit-loader,它将解析 <tagName></tagName> 内的 markdown文本
  默认值：Markdown
* 可以传 tab=[number] 给 vue-markdownit-loader,它将所有缩进解析为指定的空格数量
  默认值：2

```javascript
module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          md: "vue-markdownit-loader?tagName=Markdown&tab=2"
        }
      }
    },{
        test: /\.md/,
        loader: 'vue-markdownit-loader'
    }]
  }
};
```

### Passing options to vue-markdown-it

See [markdown-it](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) for a complete list of possible options.

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.md/,
        use: [
          { loader: 'raw-loader' },
          {
            loader: 'vue-markdownit-loader',
            options: {
              // markdown-it config
              preset: 'default',
              breaks: true,

              preprocess: function(markdownIt, source) {
                // do any thing

                return source
              },

              use: [
                /* markdown-it plugin */
                require('markdown-it-xxx'),

                /* or */
                [require('markdown-it-xxx'), 'this is options']
              ]
            }
          }
        ]
      }
    ]
  }
};
```

Or you can customize markdown-it

```javascript
var markdown = require('vue-markdown-it')({
  html: true,
  breaks: true
})

markdown
  .use(plugin1)
  .use(plugin2, opts, ...)
  .use(plugin3);

module.exports = {
  module: {
    rules: [
      {
        test: /\.md/,
        use: [
          { loader: 'raw-loader' },
          {
            loader: 'vue-markdownit-loader',
            options: markdown
          }
        ]
      }
    ]
  }
};
```


## Thanks

@BlueOakJS https://github.com/BlueOakJS/markdownit-loader