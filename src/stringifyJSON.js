// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
  	return "".concat (obj);
  } 
  if (Array.isArray (obj)) {
  	var massiveString = "[";
  	for (var i = 0; i < obj.length; ++i) {
  	  if (i !== 0) {
  	    massiveString += ","; 
  	  }
  		massiveString += stringifyJSON(obj[i]); 
  	}
  	massiveString += "]"; 
  	return massiveString;
  }
  if (typeof obj === "object") {
    var massiveString = "{";
  	for (var key in obj) {
  	  if (massiveString !== "{") {
  	    massiveString += ","; 
  	  }
  	  var value = stringifyJSON(obj[key]);
  	  if (value !== "") massiveString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]); 
  	}
  	massiveString += "}"; 
  	return massiveString;
  }
  if (typeof obj === "") {
  	return "".concat("\"", obj, "\"");
  }
  if (obj === undefined || typeof obj === "function") {
  	return "";
  }
  if (typeof obj === "string") {
    return "\"" + obj + "\""
  }
  else {
  	return "".concat (obj);
  }
};