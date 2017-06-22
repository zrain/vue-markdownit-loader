var characterParser = require('./characterParser.js');
var mapArray = require('./mapArray.js');

var defaultOptions = {
	tagName: 'Markdown',
	source: '',
	tab: 2,
}

/**
 * 解析 markdwon object list
 * 
 * @param  {[type]} parser       [description]
 * @param  {[type]} markdownList [description]
 * @return {[type]}              [description]
 */
function parserMarkdownList(parser, markdownList) {
	if( !markdownList || markdownList.length <= 0 ){
		return;
	}
	for (var i = 0; i < markdownList.length; i++) {
		// 
		if( markdownList[i].children && markdownList[i].children.length > 0 ){
			parserMarkdownList(parser, markdownList[i].children);
		}
		//
		if( markdownList[i].children && markdownList[i].children.length > 0 ){
			replaceChildrenToParent(markdownList[i])
		}
		//
		markdownList[i].content = renderMakdown(parser, markdownList[i].innerHtml );
	}
}

/**
 * 将子元素的 content 替换至父元素的 outerHtml 和 innerHtml 中
 * 
 * @param  {[type]} parser         [description]
 * @param  {[type]} markdownObject [description]
 * @return {[type]}                [description]
 */
function replaceChildrenToParent(markdownObject){

	var parent = markdownObject;
	var children = markdownObject.children;

	var source = markdownObject.outerHtml;

	var sourceMapArray = new mapArray(source);

	for (var i = children.length - 1; i >= 0; i--) {
		var index = children[i].startIndex - parent.startIndex;
		var endIndex = children[i].endIndex - parent.startIndex;
		sourceMapArray.replace(index, endIndex, children[i].content )
	}

	markdownObject.outerHtml = sourceMapArray.toString();

	markdownObject.innerHtml = replaceTag(markdownObject.outerHtml);

	return source;
}

/**
 * 渲染 markdown 
 * 
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function renderMakdown(parser, source){
	source = normalize( source );
	// 找到markdown 标签内 第一行的前面空格数量作为多余空格的标准
	var publicTabs = source.match(/^(\$\_s)+/g) || source.match(/^\$\_n(\$\_s)+/g);
	var	spaceNumber = publicTabs[0].match(/\$\_s/g).length;
	if( spaceNumber ){
		var re = new RegExp("\\$\\_n(\\$\\_s){" + spaceNumber + "}", "g");
		source = source.replace(re, '$_n');
	}
	// 还原被normalize的代码
	source = reducer(source);
	// markdown渲染
	source = parser.render(source);
	source = wrapperMakdowBody(source);
	return source;
}

function wrapperMakdowBody( str ){
	return '<div class="markdown-body">' + str + '</div>'
}

/**
 * 还原normalize的内容
 * 
 * @return {[type]} [description]
 */
var reducer = function( str ){
	if( !str ){
		return str;
	}
	return str
	  .replace(/\$\_t/g,'\t')
	  .replace(/\$\_n/g,'\n')
	  .replace(/\$\_r/g,'\r')
	  .replace(/\$\_f/g,'\f')
	  .replace(/\$\_v/g,'\v')
	  .replace(/\$\_s/g,' ')
}

/**
 * 格式化
 * 将所有符号类的比如 \t 统计更换成 $_t 便于后面统一处理
 * 
 * @return {[type]} [description]
 */
function normalize( str ){
	if( !str ){
		return str;
	}
	str = str
	  .replace(/\t/g, '$_t')
	  .replace(/\n/g, '$_n')
	  .replace(/\r/g, '$_r')
	  .replace(/\f/g, '$_f')
	  .replace(/\v/g, '$_v')
	  .replace(/\s/g, '$_s')

	str = normalizeTab(str);
	return str;
}

/**
 * 标准化tab的空格长度
 * 此方法的参数必须先进行
 * 
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
var normalizeTab = function( str ){
	if( !str ){
		return str;
	}
	if( str.search(/\$\_t/g) == -1 ){
		return;
	}
	var tab = '';
	for (var i = 0; i < defaultOptions.tab; i++) {
		tab+='$_s'
	}
	return str
		.replace(/\$\_t/g, tab);
}

/**
 * 去除开始和结尾的标签
 * 
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function replaceTag( str ){
	return str.replace(/^\<.*\>|\<\/.*\>/i, "");
}

/**
 * 将 markdown object 还原到 source
 * 
 * @param  {[type]} source       [description]
 * @param  {[type]} markdownList [description]
 * @return {[type]}              [description]
 */
function replaceMarkdownToSource( source, markdownList ) {
	var sourceMapArray = new mapArray(source);

	for (var i = markdownList.length - 1; i >= 0; i--) {
		var index = markdownList[i].startIndex;
		var endIndex = markdownList[i].endIndex;
		var content = markdownList[i].content;
		sourceMapArray.replace(index, endIndex, content )
	}

	return sourceMapArray.toString();
}


function markdownParser(parser, source, params){

	defaultOptions.source = source;

	var tagName = defaultOptions.tagName;

	if( params && params.tagName ){
		tagName = params.tagName;
	}
	
	if( params && params.tab ){
		defaultOptions.tab = params.tab || 2;
	}

	var markdownList = characterParser.htmlParser(source, tagName, true);

	var commentsList = characterParser.htmlCommentsParser(source);

	parserMarkdownList(parser, markdownList);

	source = replaceMarkdownToSource(source, markdownList);

	return source;
}

module.exports = markdownParser;