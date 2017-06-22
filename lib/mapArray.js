
function stringToObjectArray( source ) {
	let obj = {};
	source.split('').forEach((item, index) => {
		obj[index] = item;
	})
	return obj;
}

function objectToArray( obj ) {
	let array = [];
	for(var key in obj){
		array.push( obj[key] );
	}
	return array;
}


function MapArray( source ) {
	this.source = source;
	this.objectArray = stringToObjectArray( source );
}

MapArray.prototype.replace = function (index, endIndex, target){
	for(var key in this.objectArray){
		if(key >= index && key <= endIndex){
			delete this.objectArray[key]
		}
	}
	this.objectArray[index] = target;
	return this;
}

MapArray.prototype.toString = function(){
	var array = objectToArray(this.objectArray);
	return array.join('');
}

module.exports = MapArray;