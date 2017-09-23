// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var output = [];
  if (node === undefined) {
  	node = document.body;
  }
  if (node.classList.contains(className)) {
  	output.push(node);
  }
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      output = output.concat(getElementsByClassName(className, node.children[i]));
    }
  }
  return output;
};