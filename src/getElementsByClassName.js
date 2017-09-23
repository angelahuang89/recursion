// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  node = node || document.body;
  var output = [];
  for (var i = 0; i < node.length; i++) {
  	if (node[i].classList.contains(className)) {
  		output.push(node[i]);
  	}
  	if (node[i].childNodes) {
  		getElementsByClassName(className, node[i]);
  	}
  }
  return output;

};