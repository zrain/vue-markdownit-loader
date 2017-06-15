# vue-markdownit-loader

> Convert Markdown file to HTML using markdown-it.

> 支持在 vue template 模版中使用 markdown 语法

## Installation

```bash
npm i vue-markdownit-loader --save-dev
```

## Features
- Hot reload
- Code highlighting using highlight.js

## Usage
[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

`引入 github-markdown-css 样式并加载它`

```javascript
  import 'github-markdown-css'
```

`webpack.config.js` file (webpack 2.x):

```javascript
module.exports = {
  module: {
    rules: [
    	{
    		test: /\.vue$/,
    		loader: 'vue-loader',
    		options: {
    			loaders: {
    				md: path.resolve(__dirname, './index.js') + "?tag=balabala"
    			}
    		}
    	},
    	{
      		test: /\.md/,
      		loader: 'vue-markdownit-loader'
    	},

    ]
  }
};
```

Passing special TagName to `vue-loader.options.loaders.md` params. like `tag=balabala`. default is `tag=Markdown`

你可以传一个特殊的标签名字给 `vue-loader.options.loaders.md` 的params. 例子：`tag=balabala`。默认的是 `tag=Markdown`；
这个标签面子要唯一，不要跟HTML或者你的 vue component 组件名字冲突。

`file.vue`:

```html
<template lang="md">
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
</template>
```
or 

```html
<template lang="md">
	<balabala>
		markdown content
	</balabala>
	<VueComponent>
		<VueComponent>
		</VueComponent>
		<balabala>
			markdown content
		</balabala>
	</VueComponent>>
</template>
```
如果你要使用 highlight.js 高亮语法，记得引用它们的样式
```javascript
  import 'highlight.js/styles/github.css'
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

## License
MIT