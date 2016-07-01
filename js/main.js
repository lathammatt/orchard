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
};

Plant.prototype.decreaseHeight = function (growth) {
	this.height = growth;
};

Tree.prototype.grow = function (amount) {
	this.height = amount;
};

Tree.prototype.trim = function (amount) {
	this.branches = branches -= 1;

};