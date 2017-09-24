// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var output = [];
  node = node || document.body;
  if (node.classList && node.classList.contains(className)) {
  	output.push(node);
  }
  if (node.childNodes) {
    for (var i = 0; i < node.childNodes.length; i++) {
      output = output.concat(getElementsByClassName(className, node.childNodes[i]));
    }
  }
  return output;
};