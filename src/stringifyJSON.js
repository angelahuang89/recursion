// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // if (obj === null) {
  // 	//return "" + obj + "";
  //   return "null";
  // }
  if (Array.isArray (obj)) {
  	//var outputString = "[";
    var outputString = "";
  	for (var i = 0; i < obj.length; i++) {
  	  if (i !== 0) {
  	    outputString += ","; 
  	  }
  	    outputString += stringifyJSON(obj[i]); 
  	}
  	//outputString += "]"; 
    outputString = "[" + outputString + "]";
  	return outputString;
  }
  if (typeof obj === "object") {
    if (obj === null) {
      //return "" + obj + "";
      return "null";
    }
    outputString = "{";
  	for (var key in obj) {
  	  if (outputString !== "{") {
  	    outputString += ","; 
  	  }
  	  var value = stringifyJSON(obj[key]);
  	  if (value !== "") {
  	  	outputString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]); 
  	  }
  	}
  	outputString += "}"; 
  	return outputString;
  }
  if (obj === "" || typeof obj === "string") {
  	return "\"" + obj + "\"";
  }
  if (obj === undefined || typeof obj === "function") {
  	return "";
  }
  else {
  	return "" + obj + "";
  }
};