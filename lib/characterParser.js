/**
 * 组装完整的开始标签
 * 
 * @param  {[type]} tagName [description]
 * @return {[type]}         [description]
 */
var getStartTag = function( tagName ){
	return '<' + tagName + '>';
}

/**
 * 组装完整的结束标签
 * 
 * @param  {[type]} tagName [description]
 * @return {[type]}         [description]
 */
var getCloseTag = function( tagName ){
	return '</' + tagName + '>';
}

/**
 * 获取 唯一的 guid
 * 
 * @return {[type]} [description]
 */
function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

/**
 * 解析html，获取注释的位置信息对象
 * 
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function htmlCommentsParser(source) {
	if( !source || typeof source != 'string' ){
		return;
	}
	var startString = '<!--';
	var closeString = '-->';
	return findPairedString(source, startString, closeString, true )
}

/**
 * 过滤掉HTML中的注释
 * 
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function filterComments(source) {

}

/**
 * 寻找出成对的字符串
 * 
 * @param  {[type]} source   [description]
 * @param  {[type]} startTag [description]
 * @param  {[type]} closeTag [description]
 * @param  {[type]} flag     [默认false, 是否忽略子集的标志，忽略子集则，第一个结束标签，总会闭合所有前方的开始标签]
 * @return {[type]}          [description]
 */
function findPairedString( source, startString, closeString, ignoreChildren ) {

	var resultList = [];

	var ignoreChildren = ignoreChildren || false;

	var startTag = startString;
	var closeTag = closeString;

	var startTagLen = startTag.length;
	var closeTagLen = closeTag.length;

	var pointer = 0;

	var waitHandleHtml = source;

	// 循环寻找 name = tagName 的标签对
	// 判断待处理的 HTML 代码段长度
	// > 0 继续寻找
	// <=0 停止寻找
	while( waitHandleHtml.length > 0 ){
		// 根据当前指针，获取剩余待处理的 html 代码段
		waitHandleHtml = source.slice(pointer);

		var pairedTagObject = findPairedTag();

		if( pairedTagObject ){
			resultList.push( pairedTagObject )
		}

		function findPairedTag( level ){
			var sIndex = waitHandleHtml.search(startTag);
			var eIndex = waitHandleHtml.lastIndexOf(closeTag);
			
			// 判断是否存在标签对
			if( (sIndex != -1 && eIndex != -1) && sIndex <= eIndex ){
				// 初始化标签对独享
				var pairedTagObject = {
					startIndex: pointer + sIndex,
					endIndex: null,
					children: [],
					outerHtml: '',
					innerHtml: '',
					level: level || 1,
					status: 0,
				}

				if( ignoreChildren ){
					delete pairedTagObject.children;
				}

				// 移动指针至开始标签后面
				pointer = pointer + sIndex + startTagLen;
				
				// 寻找结束标签
				// 循环检查当前对象的结束标签是否处理完毕
				// 如果遇到存在children元素在返回之后重新寻找结束标签
				// 在处理子标签的过程中，指针是不断向后移动的
				while( pairedTagObject.status != 1 ){
					waitHandleHtml = source.slice(pointer);
					var sIndex = waitHandleHtml.search(startTag);
					var eIndex = waitHandleHtml.search(closeTag);
					// 判断是否找到的结束标签
					// 存在结束标签，且比开始标签的位置靠前
					// 或者只存在结束标签
					if( eIndex != -1 && (eIndex <= sIndex || sIndex == -1 ) ){
						pairedTagObject.endIndex = pointer + eIndex + closeTagLen - 1;
						pairedTagObject.outerHtml = source.slice(pairedTagObject.startIndex, pairedTagObject.endIndex + 1);
						pairedTagObject.innerHtml = source.slice(pairedTagObject.startIndex + startTagLen, pairedTagObject.endIndex - closeTagLen + 1);
						pairedTagObject.status = 1;
						// 找到了当前对象的结束标签
						// 将指针移动到结束标签之后
						pointer = pairedTagObject.endIndex + 1;
					}
					// 判断是否存在新的开始标签
					if( sIndex != -1 && sIndex < eIndex ){
						if( ignoreChildren ){
							// 移动指针到开始之后
							// 继续寻找结束标签
							pointer = pointer + sIndex + startTagLen;
						}else{
							// 存在新的开始标签，开始递归处理子元素
							var children = findMarkdown( pairedTagObject.level + 1)
							// 获取 children 元素，添加到标签对对象的chilren属性中
							pairedTagObject.children.push( children );
						}
					}
				}
				// 跳出 while 循环代表找完了完整的标签对对象，并返回
				pairedTagObject._guid = guid();
				return pairedTagObject;

			}else{
				// 不存在标签对，则直接降指针指向字符串的最后
				pointer = source.length;
			}
		}
	}

	return resultList;
}

/**
 * 忽略在注释内的标签对
 * @param  {[type]} objectList  [description]
 * @param  {[type]} commentList [description]
 * @return {[type]}             [description]
 */
function ignoreObjectInComments(objectList, commentList ) {
	var resultList = [];
	for (var i = 0; i < objectList.length; i++) {
		if( objectList[i].children && objectList[i].children.length > 0 ){
			objectList[i].children = ignoreObjectInComments(objectList[i].children, commentList);
		}
		var flag = isInComment(objectList[i], commentList);
		if( !flag ){
			resultList.push( objectList[i] )
		}
	}
	return resultList;
}

/**
 * 当前标签对对象，是否在注释内
 * @param  {[type]}  object      [description]
 * @param  {[type]}  commentList [description]
 * @return {Boolean}             [description]
 */
function isInComment(object, commentList ) {
	for (var i = 0; i < commentList.length; i++) {
		if( object.startIndex > commentList[i].startIndex &&
			object.endIndex < commentList[i].endIndex ){
			return true;
		}
	}
	return false;
}

/**
 * 解析html，获取指定tagName的位置信息对象
 * 
 * @param  {[type]} source         [description]
 * @param  {[type]} tagName        [description]
 * @param  {[type]} ignoreComments [默尔false,是否忽略注释里的标签对]
 * @return {[type]}                [description]
 */
function htmlParser( source, tagName, ignoreComments ) {
	if( typeof source != 'string' || typeof tagName != 'string' || !tagName ){
		console.error('[vue-markdownit.htmlParser]: source/tagName must be a string.')
		return;
	}

	var startString = getStartTag( tagName );
	var closeString = getCloseTag( tagName );

	if( ignoreComments ){
		let tagObjectList = findPairedString(source, startString, closeString);
		let commentList = htmlCommentsParser(source);
		let resultList = ignoreObjectInComments(tagObjectList, commentList);
		return resultList;
	}

	return findPairedString(source, startString, closeString);
}

module.exports = {
	htmlParser: htmlParser,
	htmlCommentsParser: htmlCommentsParser,
	filterComments: filterComments
};
