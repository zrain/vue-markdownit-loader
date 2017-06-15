<template lang="md">
    <!-- <div class="markdown-body">
        <markdown></markdown>
        <div v-html="md"></div>
    </div> -->
    <div>
      <balabala>
        > This is test.
      </balabala>
      <p @click="mode = !mode">
        {{mode}}
        <balabala>
          > This is inner.
        </balabala>
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
