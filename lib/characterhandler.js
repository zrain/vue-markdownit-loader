/**
 * remove html comments
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
var removeHtmlComments = function( str ){
	return str.replace(/\<\!\-\-[\s\S]*?\-\-\>/g, '');
}

var normalize = function(){

}

var markdownObject = {
	startIndex: 0,
	endIndex: 0,
	children: []
}

var markdownList = [];

var extractHtml = function( str ){
	var resultList = [];

	var startTag = "<Markdown>";
	var endTag = "</Markdown>";

	var length = str.length;
	var index = str.search(startTag);
		str = substring(index,length-1);

	while( str.search(endTag) != -1 ){
		var sIndex = str.search(startTag);
		var eIndex = str.search(endTag);
		if( sIndex < eIndex ){
			markdownList.push({
				startIndex: index,
				endIndex: null,
				hasChildren: true,
				status: 0,
			})
		}else{
			markdownList.push({
				startIndex: index,
				endIndex: index + eIndex,
				status: 1,
			})
		}
		index = sIndex;
		str = substring(index, length-1);

	}

		



	// var startTagNumber = str.split('<Markdown>').length - 1;
	// var endTagNumber = str.split('</Markdown>').length - 1;

	// [start, end, start, start , end, end ]
}

var characterhandler = function( parser, source, params ){
	var str;
	console.info("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
	console.info('SourceStr')
	console.info([source])
	console.info("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
		str = removeHtmlComments(source);

		str = extractHtml(str)
	console.info("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
	console.info('extractHtml')
	console.info([str])
	console.info("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")

	return str
}

module.exports = characterhandler;