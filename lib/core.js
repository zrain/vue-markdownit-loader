var hljs = require('highlight.js')
var loaderUtils = require('loader-utils')
var markdown = require('markdown-it')

/**
 * `{{ }}` => `<span>{{</span> <span>}}</span>`
 * @param  {string} str
 * @return {string}
 */
var replaceDelimiters = function (str) {
  return str.replace(/({{|}})/g, '<span>$1</span>')
}

/**
 * renderHighlight
 * @param  {string} str
 * @param  {string} lang
 */
var renderHighlight = function (str, lang) {
  if (!(lang && hljs.getLanguage(lang))) {
    return ''
  }

  try {
    return replaceDelimiters(hljs.highlight(lang, str, true).value)
  } catch (err) {}
}

/**
 * [wrapperMarkdownBody description]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
var wrapperMarkdownBody = function( str ){
  return '<div class="markdown-body">' + str + '</div>'
}

/**
 * [getWaitHandleHtmlList description]
 * @param  {[type]} str     [description]
 * @param  {[type]} tagName [description]
 * @return {[type]}         [description]
 */
var getWaitHandleHtmlList = function( str, tagName ){
  var startTag = "<" + tagName + ">";
  var endTag = "</" + tagName + ">";
  var resultList = str.split(startTag);
  for (var i = resultList.length - 1; i >= 0; i--) {
   if( resultList[i].indexOf(endTag) == -1 ){
    resultList.splice(i,1);
   }else{
    var tempItem = resultList[i].split(endTag)[0];
    resultList.splice(i,1,tempItem);
   }
  }
  return resultList;
}

/**
 * [renderMarkdownBody description]
 * @param  {[type]} parser  [description]
 * @param  {[type]} source  [description]
 * @param  {[type]} tagName [description]
 * @return {[type]}         [description]
 */
var renderMarkdownBody = function( parser, source, tagName ){
  var resultContent;
  var html = String(source)
    .replace(/\r\n?|[\n\u2028\u2029]/g, '\n')
    .replace(/^\uFEFF/, '')
    .replace(/[\r\n]+/g, '\n')
    .replace(/^\n+|\s+$/mg, '');
  var scopeTagName = tagName;
  if( !scopeTagName ){
    scopeTagName = "Markdown"
  }
  var index = html.indexOf(scopeTagName);
  if( index == -1 ){
    resultContent = parser.render(html);
    resultContent = renderVueTemplate(resultContent);
    return resultContent;
  }
  var waitHandleHtmlList = getWaitHandleHtmlList( html, scopeTagName );
  var handledHtmlList = [];
  for (var i = 0; i < waitHandleHtmlList.length; i++) {
    var markdownParseItem = parser.render( waitHandleHtmlList[i] )
    var resultHtmlItem = wrapperMarkdownBody( markdownParseItem );
    handledHtmlList.push( resultHtmlItem )
  }
  for (var i = 0; i < waitHandleHtmlList.length; i++) {
    var waitReplaceItem = "<"+scopeTagName+">" +waitHandleHtmlList[i] + "</"+scopeTagName+">";
    html = html.replace(waitReplaceItem, handledHtmlList[i])
  }
  return html;
}

/**
 * html => vue file template
 * @param  {[type]} html [description]
 * @return {[type]}      [description]
 */
var renderVueTemplate = function (html) {
  return '<section>' + html + '</section>\n'
}

module.exports = function (source) {
  this.cacheable()
  var parser
  var params = loaderUtils.getOptions(this)
  var opts = Object.assign({}, params)
  if (typeof(opts.render) === 'function') {
    parser = opts
  } else {
    opts = Object.assign({
      preset: 'default',
      html: true,
      highlight: renderHighlight
    }, opts)

    var plugins = opts.use
    var preprocess = opts.preprocess

    delete opts.use
    delete opts.preprocess

    parser = markdown(opts.preset, opts)

    if (plugins) {
      plugins.forEach(function (plugin) {
        if (Array.isArray(plugin)) {
          parser.use.apply(parser, plugin)
        } else {
          parser.use(plugin)
        }
      })
    }
  }

  var codeInlineRender = parser.renderer.rules.code_inline;
  parser.renderer.rules.code_inline = function () {
    return replaceDelimiters(codeInlineRender.apply(this, arguments));
  }

  if (preprocess) {
    source = preprocess.call(this, parser, source)
  }

  var content = renderMarkdownBody(parser, source, params?params.tag : null);

  return content
}
