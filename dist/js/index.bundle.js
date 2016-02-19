/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var Slider = React.createClass({
	    displayName: "Slider",
	
	    getInitialState: function getInitialState() {
	        return {
	            nowLocal: 0
	        };
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            speed: 2,
	            delay: 2,
	            pause: true,
	            autoplay: true,
	            dots: true,
	            arrows: true
	        };
	    },
	    turn: function turn(n) {
	        var _n = this.state.nowLocal + n;
	        if (_n < 0) {
	            _n = _n + this.props.src.length;
	        }
	        if (_n >= this.props.src.length) {
	            _n = _n - this.props.src.length;
	        }
	        this.setState({ nowLocal: _n }, function () {
	            var SliderUl = this.refs.SliderUl.getDOMNode();
	            SliderUl.style.left = -100 * this.state.nowLocal + "%";
	        });
	    },
	    _style: {},
	    autoPlay: null,
	    goPlay: function goPlay() {
	        if (this.props.autoplay) {
	            var delay = this.props.delay * 1000;
	            this.autoPlay = setInterval(function () {
	                // alert('.');
	                this.turn(1);
	            }.bind(this), delay);
	        }
	    },
	    componentDidMount: function componentDidMount() {
	        this.goPlay();
	    },
	    pausePlay: function pausePlay() {
	        clearInterval(this.autoPlay);
	    },
	    render: function render() {
	        this._style.transitionDuration = this.props.speed + "s";
	        this._style.width = this.props.src.length * 100 + "%";
	        var itemKey = 0;
	        var itemNodes = this.props.src.map(function (src) {
	            return React.createElement(SliderItem, { src: src, count: this.props.src.length, key: itemKey++ });
	        }.bind(this));
	        var arrows = [];
	        arrows[0] = React.createElement(
	            SliderArrows,
	            { option: -1, click: this.turn },
	            "<"
	        );
	        arrows[1] = React.createElement(
	            SliderArrows,
	            { option: 1, click: this.turn },
	            ">"
	        );
	        var dots = [];
	        dots[0] = React.createElement(SliderDots, { click: this.turn, count: this.props.src.length, nowLocal: this.state.nowLocal });
	        return React.createElement(
	            "div",
	            { className: "Slider", onMouseOver: this.props.pause ? this.pausePlay : null, onMouseOut: this.props.pause ? this.goPlay : null },
	            React.createElement(
	                "ul",
	                { style: this._style, ref: "SliderUl" },
	                itemNodes
	            ),
	            this.props.arrows ? arrows : null,
	            this.props.dots ? dots : null
	        );
	    }
	});
	
	var SliderItem = React.createClass({
	    displayName: "SliderItem",
	
	    _style: {},
	    render: function render() {
	        var count = this.props.count;
	        this._style.width = 100 / count + "%";
	        return React.createElement(
	            "li",
	            { className: "SliderItem", style: this._style },
	            React.createElement("img", { src: this.props.src, alt: "pic" })
	        );
	    }
	});
	
	var SliderArrows = React.createClass({
	    displayName: "SliderArrows",
	
	    handleClick: function handleClick() {
	        this.props.click(this.props.option);
	    },
	    _style: {},
	    render: function render() {
	        this._style.right = this.props.option == 1 ? "0" : null;
	        this._style.left = this.props.option == 1 ? null : "0";
	        return React.createElement(
	            "span",
	            { className: "SliderArrows", style: this._style, onClick: this.handleClick },
	            this.props.children
	        );
	    }
	});
	
	var SliderDots = React.createClass({
	    displayName: "SliderDots",
	
	    _style: {},
	    handleClick: function handleClick(event) {
	        var len = event.target.className.substring(4, 6) - this.props.nowLocal;
	        this.props.click(len);
	    },
	    render: function render() {
	        var dotNodes = [];
	        for (var i = 0; i < this.props.count; i++) {
	            if (i == this.props.nowLocal) {
	                dotNodes[i] = React.createElement("span", { key: i, className: "dots" + i + " dotSlect", onClick: this.handleClick });
	            } else {
	                dotNodes[i] = React.createElement("span", { key: i, className: "dots" + i, onClick: this.handleClick });
	            }
	        }
	        return React.createElement(
	            "div",
	            { className: "DotsWrap" },
	            dotNodes
	        );
	    }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map