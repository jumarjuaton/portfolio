webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/links.js":
/*!*****************************!*\
  !*** ./components/links.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jumarjuaton/Documents/local-sandbox/portfolio/components/links.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var links = [{
  id: 1,
  icon: __jsx("i", {
    className: "fi-xwsuxl-envelope-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }),
  url: 'https://jumarjuaton.typeform.com/to/Su4GfO',
  info: 'Let us collaborate!'
}, {
  id: 2,
  icon: __jsx("i", {
    className: "fi-swluxl-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }),
  url: 'https://ph.linkedin.com/in/jumarjuaton',
  info: 'Check out my Linkedin!'
}, {
  id: 3,
  icon: __jsx("i", {
    className: "fi-snsuxl-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }),
  url: 'https://github.com/jumarjuaton',
  info: 'Check out my GitHub!'
}, {
  id: 4,
  icon: __jsx("i", {
    className: "fi-xtluxl-file-pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }),
  url: '/files/pdf/CV-Jumar-James-Juaton.pdf',
  info: 'View my CV!'
}];

var Links = function Links() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("ul", {
    className: "links-wrap flex p-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, links.map(function (_ref) {
    var id = _ref.id,
        url = _ref.url,
        info = _ref.info,
        icon = _ref.icon;
    return __jsx("li", {
      key: id,
      className: "p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("a", {
      href: url,
      title: info,
      className: "link",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, icon));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Links);

/***/ })

})
//# sourceMappingURL=index.js.96f1479efff6b5e5e6d3.hot-update.js.map