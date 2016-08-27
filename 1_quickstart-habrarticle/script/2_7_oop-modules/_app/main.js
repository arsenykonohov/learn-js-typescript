var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var zoo_1 = __webpack_require__(4);
	console.log(zoo_1.animals);
	console.log(zoo_1.animals.getZooInfo());


/***/ },
/* 1 */
/***/ function(module, exports) {

	///<reference path="./animal.d.ts" />
	"use strict";
	// BaseClasse:
	var Animal = (function () {
	    function Animal(name, danger) {
	        this.name = name;
	        this.danger = danger;
	    }
	    Animal.prototype.getInfo = function () {
	        return this.name + "; danger:" + this.danger;
	    };
	    return Animal;
	}());
	exports.Animal = Animal;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var animal_1 = __webpack_require__(1);
	var Tiger = (function (_super) {
	    __extends(Tiger, _super);
	    function Tiger(name, danger, tigerSubSpecies) {
	        _super.call(this, name, danger);
	        this.tigerSubSpecies = tigerSubSpecies;
	    }
	    return Tiger;
	}(animal_1.Animal));
	exports.Tiger = Tiger;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var animal_1 = __webpack_require__(1);
	var Seal = (function (_super) {
	    __extends(Seal, _super);
	    function Seal(name, danger, acuario) {
	        _super.call(this, name, danger);
	        this.acuario = acuario;
	    }
	    return Seal;
	}(animal_1.Animal));
	exports.Seal = Seal;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tiger_1 = __webpack_require__(2);
	var seal_1 = __webpack_require__(3);
	var Zoo = (function () {
	    function Zoo() {
	        var list = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            list[_i - 0] = arguments[_i];
	        }
	        this.animals = list;
	    }
	    Zoo.prototype.getZooInfo = function () {
	        return this.animals;
	    };
	    return Zoo;
	}());
	exports.Zoo = Zoo;
	var tiger = new tiger_1.Tiger("Tiger", 9, "Usuric");
	var seal = new seal_1.Seal("Seal", 2, true);
	console.log(tiger.getInfo());
	console.log(seal.getInfo());
	exports.animals = new Zoo(tiger, seal);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMGI0MjM5NjAwMGU2N2VmNjdiOCIsIndlYnBhY2s6Ly8vLi9fc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vX3NyYy9hbmltYWwvYW5pbWFsLnRzIiwid2VicGFjazovLy8uL19zcmMvem9vL3RpZ2VyL3RpZ2VyLnRzIiwid2VicGFjazovLy8uL19zcmMvem9vL3NlYWwvc2VhbC50cyIsIndlYnBhY2s6Ly8vLi9fc3JjL3pvby96b28udHMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkMGI0MjM5NjAwMGU2N2VmNjdiOFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgem9vXzEgPSByZXF1aXJlKFwiLi96b28vem9vXCIpO1xyXG5jb25zb2xlLmxvZyh6b29fMS5hbmltYWxzKTtcclxuY29uc29sZS5sb2coem9vXzEuYW5pbWFscy5nZXRab29JbmZvKCkpO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vX3NyYy9tYWluLnRzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi9hbmltYWwuZC50c1wiIC8+XHJcblwidXNlIHN0cmljdFwiO1xyXG4vLyBCYXNlQ2xhc3NlOlxyXG52YXIgQW5pbWFsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFuaW1hbChuYW1lLCBkYW5nZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGFuZ2VyID0gZGFuZ2VyO1xyXG4gICAgfVxyXG4gICAgQW5pbWFsLnByb3RvdHlwZS5nZXRJbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIjsgZGFuZ2VyOlwiICsgdGhpcy5kYW5nZXI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFuaW1hbDtcclxufSgpKTtcclxuZXhwb3J0cy5BbmltYWwgPSBBbmltYWw7XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9fc3JjL2FuaW1hbC9hbmltYWwudHNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufTtcclxudmFyIGFuaW1hbF8xID0gcmVxdWlyZShcIi4uLy4uL2FuaW1hbC9hbmltYWxcIik7XHJcbnZhciBUaWdlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGlnZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUaWdlcihuYW1lLCBkYW5nZXIsIHRpZ2VyU3ViU3BlY2llcykge1xyXG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIG5hbWUsIGRhbmdlcik7XHJcbiAgICAgICAgdGhpcy50aWdlclN1YlNwZWNpZXMgPSB0aWdlclN1YlNwZWNpZXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGlnZXI7XHJcbn0oYW5pbWFsXzEuQW5pbWFsKSk7XHJcbmV4cG9ydHMuVGlnZXIgPSBUaWdlcjtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL19zcmMvem9vL3RpZ2VyL3RpZ2VyLnRzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn07XHJcbnZhciBhbmltYWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9hbmltYWwvYW5pbWFsXCIpO1xyXG52YXIgU2VhbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2VhbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNlYWwobmFtZSwgZGFuZ2VyLCBhY3VhcmlvKSB7XHJcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgbmFtZSwgZGFuZ2VyKTtcclxuICAgICAgICB0aGlzLmFjdWFyaW8gPSBhY3VhcmlvO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNlYWw7XHJcbn0oYW5pbWFsXzEuQW5pbWFsKSk7XHJcbmV4cG9ydHMuU2VhbCA9IFNlYWw7XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9fc3JjL3pvby9zZWFsL3NlYWwudHNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIHRpZ2VyXzEgPSByZXF1aXJlKFwiLi90aWdlci90aWdlclwiKTtcclxudmFyIHNlYWxfMSA9IHJlcXVpcmUoXCIuL3NlYWwvc2VhbFwiKTtcclxudmFyIFpvbyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBab28oKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBsaXN0W19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hbHMgPSBsaXN0O1xyXG4gICAgfVxyXG4gICAgWm9vLnByb3RvdHlwZS5nZXRab29JbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hbHM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFpvbztcclxufSgpKTtcclxuZXhwb3J0cy5ab28gPSBab287XHJcbnZhciB0aWdlciA9IG5ldyB0aWdlcl8xLlRpZ2VyKFwiVGlnZXJcIiwgOSwgXCJVc3VyaWNcIik7XHJcbnZhciBzZWFsID0gbmV3IHNlYWxfMS5TZWFsKFwiU2VhbFwiLCAyLCB0cnVlKTtcclxuY29uc29sZS5sb2codGlnZXIuZ2V0SW5mbygpKTtcclxuY29uc29sZS5sb2coc2VhbC5nZXRJbmZvKCkpO1xyXG5leHBvcnRzLmFuaW1hbHMgPSBuZXcgWm9vKHRpZ2VyLCBzZWFsKTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL19zcmMvem9vL3pvby50c1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==