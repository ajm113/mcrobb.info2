(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../node_modules/css-loader/index.js??ref--7-2!../node_modules/postcss-loader/lib/index.js??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/repoList/style.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader??ref--7-2!../node_modules/postcss-loader/lib??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/repoList/style.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "._2QfMfmR40QemE5SbJZx5fz{font-size:1.3em}._3Oq9S02vdmK7n41UAtxt2W{font-size:.8em}", "", {"version":3,"sources":["/home/andrew/Documents/Projects/mcrobb.info2/src/components/repoList/style.scss"],"names":[],"mappings":"AAAA,yBACI,eAAgB,CACnB,AAED,yBAEI,cAAgB,CACnB","file":"style.scss","sourcesContent":[".title {\n    font-size: 1.3em;\n}\n\n.description\n{\n    font-size: 0.8em;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"title": "_2QfMfmR40QemE5SbJZx5fz",
	"description": "_3Oq9S02vdmK7n41UAtxt2W"
};

/***/ }),

/***/ "./components/repoList/index.jsx":
/*!***************************************!*\
  !*** ./components/repoList/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.esm.js");

var _style = __webpack_require__(/*! ./style.scss */ "./components/repoList/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SEARCH = '//api.github.com/users/ajm113/repos?sort=updated';

var Result = function Result(_ref) {
    var result = _ref.result;
    return (0, _preact.h)(
        'div',
        null,
        (0, _preact.h)(
            'a',
            { href: result.html_url, 'class': _style2.default.title, target: '_blank' },
            result.full_name
        ),
        '\uD83C\uDF1F',
        (0, _preact.h)(
            'strong',
            null,
            result.stargazers_count
        ),
        (0, _preact.h)(
            'p',
            { 'class': _style2.default.description },
            result.description
        )
    );
};

var RepoList = function (_Component) {
    _inherits(RepoList, _Component);

    function RepoList() {
        _classCallCheck(this, RepoList);

        return _possibleConstructorReturn(this, (RepoList.__proto__ || Object.getPrototypeOf(RepoList)).apply(this, arguments));
    }

    _createClass(RepoList, [{
        key: 'componentDidMount',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res, json, results, i;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch(SEARCH);

                            case 2:
                                res = _context.sent;
                                _context.next = 5;
                                return res.json();

                            case 5:
                                json = _context.sent;
                                results = [];
                                i = 0;

                            case 8:
                                if (!(i < json.length)) {
                                    _context.next = 15;
                                    break;
                                }

                                if (!(!json[i].stargazers_count > 0)) {
                                    _context.next = 11;
                                    break;
                                }

                                return _context.abrupt('continue', 12);

                            case 11:

                                results.push(json[i]);

                            case 12:
                                i++;
                                _context.next = 8;
                                break;

                            case 15:

                                this.setState({ results: results });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref2.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render(_ref3, _ref4) {
            var _ref4$results = _ref4.results,
                results = _ref4$results === undefined ? [] : _ref4$results;

            _objectDestructuringEmpty(_ref3);

            return (0, _preact.h)(
                'div',
                null,
                results.map(function (result) {
                    return (0, _preact.h)(Result, { result: result });
                })
            );
        }
    }]);

    return RepoList;
}(_preact.Component);

exports.default = RepoList;

/***/ }),

/***/ "./components/repoList/style.scss":
/*!****************************************!*\
  !*** ./components/repoList/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-2!../../../node_modules/postcss-loader/lib??ref--7-3!../../../node_modules/sass-loader/lib/loader.js??ref--7-4!./style.scss */ "../node_modules/css-loader/index.js??ref--7-2!../node_modules/postcss-loader/lib/index.js??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/repoList/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--7-2!../../../node_modules/postcss-loader/lib??ref--7-3!../../../node_modules/sass-loader/lib/loader.js??ref--7-4!./style.scss */ "../node_modules/css-loader/index.js??ref--7-2!../node_modules/postcss-loader/lib/index.js??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/repoList/style.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-2!../../../node_modules/postcss-loader/lib??ref--7-3!../../../node_modules/sass-loader/lib/loader.js??ref--7-4!./style.scss */ "../node_modules/css-loader/index.js??ref--7-2!../node_modules/postcss-loader/lib/index.js??ref--7-3!../node_modules/sass-loader/lib/loader.js??ref--7-4!./components/repoList/style.scss");

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

/***/ }),

/***/ "./components/work/index.jsx":
/*!***********************************!*\
  !*** ./components/work/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.esm.js");

var _repoList = __webpack_require__(/*! ../repoList */ "./components/repoList/index.jsx");

var _repoList2 = _interopRequireDefault(_repoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _preact.h)(
    'div',
    null,
    (0, _preact.h)(
      'h1',
      null,
      'Commercial Projects / Employeers'
    ),
    (0, _preact.h)(
      'h3',
      null,
      'Axion Communications - Software Developer'
    ),
    (0, _preact.h)(
      'i',
      null,
      'October 2017 - Current'
    ),
    (0, _preact.h)(
      'ul',
      null,
      (0, _preact.h)(
        'li',
        null,
        'FreeSwitch, Nginx, MariaDB, Ejabberd'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Documentation and Technical Writing'
      ),
      (0, _preact.h)(
        'li',
        null,
        'C, Lua, PHP, Go, Erlang, JavaScript, Composer'
      ),
      (0, _preact.h)(
        'li',
        null,
        'jQuery, CSS, Sass, Webpack, Strophe.js, ES2015, Preact/React'
      ),
      (0, _preact.h)(
        'li',
        null,
        'CentOS 7, Debian, Docker, Vagrant, Virtualbox.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Source version control using Git and Bitbucket.'
      )
    ),
    (0, _preact.h)(
      'h3',
      null,
      'NextBee, Remote - Sr. Developer'
    ),
    (0, _preact.h)(
      'i',
      null,
      'June 2017 - September 2017'
    ),
    (0, _preact.h)(
      'ul',
      null,
      (0, _preact.h)(
        'li',
        null,
        'Customer / Client Service'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Training Clients of CMS.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Management of Teams'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Documentation and Technical Writing.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Code Analysis / Quality Assurance.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Source version control using CloudForge and SVN.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Cordova/Phonegap for Android and iOS using Node.js'
      ),
      (0, _preact.h)(
        'li',
        null,
        'PHP, Yii, jQuery, CSS, HTML, Framework7, AngularJS'
      )
    ),
    (0, _preact.h)(
      'h3',
      null,
      'Payroll Management - Web Developer'
    ),
    (0, _preact.h)(
      'i',
      null,
      'May 2015 - June 2017'
    ),
    (0, _preact.h)(
      'ul',
      null,
      (0, _preact.h)(
        'li',
        null,
        'Strong PHP usage using object oriented principles in an MVC framework using Laravel, and Lightvc.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Bootstrap, HTML, CSS, JavaScript / AJAX using jQuery, Video.js, React.js.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Source version control using Git and GitHub.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Documentation and Technical Writing.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Code Analysis / Quality Assurance.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Build automation using Node.JS; Grunt/Gulp; compiling Sass/Less files into CSS'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Nginx server configuration and small system administration tasks.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Photoshop and design skills.'
      )
    ),
    (0, _preact.h)(
      'h3',
      null,
      'Fabcom Marketing - Web Developer'
    ),
    (0, _preact.h)(
      'i',
      null,
      'November 2014 - May 2015'
    ),
    (0, _preact.h)(
      'ul',
      null,
      (0, _preact.h)(
        'li',
        null,
        'Strong PHP usage in WordPress, Expression Engine, and CodeIgniter.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Source version control using Git and GitHub.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Documentation and Technical Writing.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'API integration: Twitter, Facebook, LinkedIn, Google, Open Tilt, Spark Platform.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Bootstrap, HTML, CSS, JavaScript / AJAX using jQuery.'
      ),
      (0, _preact.h)(
        'li',
        null,
        'Photoshop and design skills.'
      )
    ),
    (0, _preact.h)(
      'h2',
      null,
      '... And many more!'
    ),
    (0, _preact.h)(
      'h1',
      null,
      'Open Source Projects'
    ),
    (0, _preact.h)(
      'p',
      null,
      (0, _preact.h)(
        'i',
        null,
        'Everything from small old pieces of code to larger newer projects!'
      )
    ),
    (0, _preact.h)(_repoList2.default, null)
  );
};

/***/ })

}]);
//# sourceMappingURL=1-ad6724ad9f677529ce57.js.map