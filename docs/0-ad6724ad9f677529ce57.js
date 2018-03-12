(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../node_modules/css-loader/index.js??ref--7-2!../node_modules/postcss-loader/lib/index.js??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/contact/style.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader??ref--7-2!../node_modules/postcss-loader/lib??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/contact/style.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat);", ""]);

// module
exports.push([module.i, "._2y-dTE_emCjNAgTyz1Hbao input,._2y-dTE_emCjNAgTyz1Hbao textarea{border:none;border-bottom:1px solid gray;border-radius:2px;margin-bottom:10px;padding:4px;display:block;width:100%;background:#000;color:#fff}._2y-dTE_emCjNAgTyz1Hbao textarea{border-bottom:none;min-height:200px;max-width:100%;min-width:100%}._2y-dTE_emCjNAgTyz1Hbao button{background:#262626;border:none;border-radius:5px;padding:5px;min-width:200px;color:#fff}", "", {"version":3,"sources":["/home/andrew/Documents/Projects/mcrobb.info2/src/components/contact/style.scss","/home/andrew/Documents/Projects/mcrobb.info2/src/style/_variables.scss"],"names":[],"mappings":"AAEA,iEAGQ,YAAY,AACZ,6BAAiD,AACjD,kBAAkB,AAClB,mBAAmB,AACnB,YAAY,AAEZ,cAAc,AACd,WAAW,AACX,gBCPS,ADQT,UCVS,CDWZ,AAbL,kCAgBQ,mBAAmB,AACnB,iBAAiB,AACjB,eAAe,AACf,cAAe,CAClB,AApBL,gCAuBQ,mBAAqC,AACrC,YAAY,AACZ,kBAAkB,AAClB,YAAY,AACZ,gBAAgB,AAChB,UAAW,CACd","file":"style.scss","sourcesContent":["@import \"~style/variables\";\n\n.myform {\n    input,\n    textarea {\n        border: none;\n        border-bottom: 1px solid darken($text-color, 50%);\n        border-radius: 2px;\n        margin-bottom: 10px;\n        padding: 4px;\n\n        display: block;\n        width: 100%;\n        background: $background;\n        color: $text-color;\n    }\n\n    textarea {\n        border-bottom: none;\n        min-height: 200px;\n        max-width: 100%;\n        min-width: 100%;\n    }\n\n    button {\n        background: lighten($background, 15%);\n        border: none;\n        border-radius: 5px;\n        padding: 5px;\n        min-width: 200px;\n        color: #fff;\n    }\n}\n","@import url('https://fonts.googleapis.com/css?family=Montserrat');\n\n$montserrat-font: 'Montserrat', ariel, sans-serif;\n\n$text-color: #fff;\n$text-font: $montserrat-font;\n$background: #000;\n\n$screens-size-md: 768px;\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"myform": "_2y-dTE_emCjNAgTyz1Hbao"
};

/***/ }),

/***/ "./components/contact/index.jsx":
/*!**************************************!*\
  !*** ./components/contact/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preact = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.esm.js");

var _style = __webpack_require__(/*! ./style.scss */ "./components/contact/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return (0, _preact.h)(
        'div',
        null,
        (0, _preact.h)(
            'h1',
            null,
            'Contact McRobb'
        ),
        (0, _preact.h)(
            'p',
            null,
            (0, _preact.h)(
                'i',
                null,
                'Please use the contact form. -- I know it seems lazy, but I get enough spam.'
            )
        ),
        (0, _preact.h)(
            'form',
            { action: 'https://formspree.io/andrewmcrobb@gmail.com', method: 'POST', 'class': _style2.default.myform },
            (0, _preact.h)('input', { type: 'text', name: 'name', placeholder: 'Your name' }),
            (0, _preact.h)('textarea', { name: 'message', placeholder: 'Your message' }),
            (0, _preact.h)('input', { type: 'email', name: '_replyto', placeholder: 'Your email address' }),
            (0, _preact.h)(
                'button',
                { type: 'submit' },
                'Send'
            )
        )
    );
};

/***/ }),

/***/ "./components/contact/style.scss":
/*!***************************************!*\
  !*** ./components/contact/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-2!../../../node_modules/postcss-loader/lib??ref--7-3!../../../node_modules/sass-loader/lib/loader.js??ref--7-4!./style.scss */ "../node_modules/css-loader/index.js??ref--7-2!../node_modules/postcss-loader/lib/index.js??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/contact/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--7-2!../../../node_modules/postcss-loader/lib??ref--7-3!../../../node_modules/sass-loader/lib/loader.js??ref--7-4!./style.scss */ "../node_modules/css-loader/index.js??ref--7-2!../node_modules/postcss-loader/lib/index.js??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/contact/style.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-2!../../../node_modules/postcss-loader/lib??ref--7-3!../../../node_modules/sass-loader/lib/loader.js??ref--7-4!./style.scss */ "../node_modules/css-loader/index.js??ref--7-2!../node_modules/postcss-loader/lib/index.js??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/contact/style.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); });

	module.hot.dispose(function() { update(); });
}

/***/ })

}]);
//# sourceMappingURL=0-ad6724ad9f677529ce57.js.map