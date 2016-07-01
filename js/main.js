"use strict";

function Plant (){
	this.height = null;
}

function Tree (){
	this.branches = null;
}

Plant.prototype = new Tree();

Plant.prototype.increaseHeight = function (growth) {
	this.height = growth;
	if ((this.height % 10) === 0){
			this.branches += 1;
		}
};

Plant.prototype.decreaseHeight = function (growth) {
	return this.height -= growth;
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
