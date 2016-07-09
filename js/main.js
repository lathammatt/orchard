"use strict";

function Plant (){
	this.height = null;
}

function Tree (){
	this.branches = null;
}

Tree.prototype = new Plant();

Plant.prototype.increaseHeight = function (growth) {
	this.height += growth;
};

Plant.prototype.decreaseHeight = function (amount) {
	return this.height -= amount;
};

Tree.prototype.grow = function (amount) {
	return this.height += amount;
};

Tree.prototype.trim = function (amount) {
	return this.branches -= 1,
	this.height -= amount;
};

var PearTree = new Tree();

var OakTree = new Tree();

console.log("PearTree", PearTree);
console.log("OakTree", OakTree);





var domTree = document.getElementById("output");
// var counter = 0

function growTrees(){
	for (var counter = 0; counter < 30; counter++) {
		setTimeout(function(){
		PearTree.grow(5);
		OakTree.grow(7);
		console.log("check", counter, PearTree.height);
		if ((counter % 10) === 0){
			PearTree.trim(3);
			OakTree.trim(5);}
		var Pear = `<div>The pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches</div>`;
		var Oak = `<div>The oak Tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches</div>`;
		domTree.appendChild(Pear);
		domTree.appendChild(Oak);

	}, 1000);
		}
}




