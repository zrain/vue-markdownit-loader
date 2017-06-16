<template lang="md">
    <!-- <div class="markdown-body">
        <markdown></markdown>
        <div v-html="md"></div>
    </div> -->
    <div>

      <Markdown>
        ```html
          <div>
            <p>水平的顶部导航菜单。</p>
          </div>
        ```
      </Markdown>

      <Markdown>
        > This is test1.

        # Hello

        ## h2

        ### h3

        #### h4
        
        ##### h5

        `<span>{{sss}}</span>`

        > This is test.

        - How are you?
        - Fine, Thank you, and you?
        - I'm fine， too. Thank you.
        - 🌚

        ```javascript
        import Vue from 'vue'

        Vue.config.debug = true
        ```
        ```html
        <script>
          module.exports = {}
        </script>
        <script>
          module.exports = {}
        </script>
        <script>
          module.exports = {}
        </script>

        <template>
          <div></div>
        </template>
        ```
        sadfsfs

        大家哦哦好啊谁都发生地方上的冯绍峰s

        > sahhhh
        ```html
        <compo>{{model }}{{model }}{{model }}{{model }}{{ model }}</compo>
        ```
      </Markdown>
      <p @click="mode = !mode">
        {{mode}}
        <Markdown>
          > This is inner.
        </Markdown>
      </p>
    </div>
</template>

<script>
// import markdown from './markdown.vue'
// import markdown_file from './markdown-file.md'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
  // components: {
  //   markdown
  // },
  data: function() {
    return {
      // md: markdown_file,
      mode: false
    }
  }
}
</script>
<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
</style>
