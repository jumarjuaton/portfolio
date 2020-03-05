webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/react-carousel.js":
/*!**************************************!*\
  !*** ./components/react-carousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-responsive-modal */ "./node_modules/react-responsive-modal/lib/index.es.js");







var _jsxFileName = "/home/jumarjuaton/Documents/local-sandbox/portfolio/components/react-carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


var Carousel = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! @brainhubeu/react-carousel */ "./node_modules/@brainhubeu/react-carousel/lib/react-carousel.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @brainhubeu/react-carousel */ "./node_modules/@brainhubeu/react-carousel/lib/react-carousel.js")];
    },
    modules: ['@brainhubeu/react-carousel']
  }
});


var ReactCarousel = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ReactCarousel, _React$Component);

  function ReactCarousel() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReactCarousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ReactCarousel).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      _this.setState({
        isOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isOpen: false,
      images: [{
        id: 1,
        url: '/img/covers/01.erikssonfurunes.png',
        fullWidthImgURL: '/img/full/01.erikssonfurunes_full.jpeg',
        client: 'Eriksson Furunes',
        type: 'Wordpress Development'
      }, {
        id: 2,
        url: '/img/covers/02.bruce_fordyce_after_party.png',
        fullWidthImgURL: '/img/full/02.bruce_fordyce_after_party_full.jpg',
        client: 'Bruce Fordyce After Party',
        type: 'Facebook Cover Photo Design'
      }, {
        id: 3,
        url: '/img/covers/03.crmworks_asia.png',
        fullWidthImgURL: '/img/full/03.crmworks_asia_full.jpg',
        client: 'CRMWorks ASIA',
        type: 'Design & Joomla Development'
      }, {
        id: 4,
        url: '/img/covers/04.devtac.png',
        fullWidthImgURL: '/img/full/04.devtac_full.jpg',
        client: 'DEVTac',
        type: 'Logo Design'
      }, {
        id: 5,
        url: '/img/covers/05.direwolf.png',
        fullWidthImgURL: '/img/full/05.direwolf_full.jpg',
        client: 'Direwolf',
        type: 'Illustration'
      }, {
        id: 6,
        url: '/img/covers/06.intechsive_software_development.png',
        fullWidthImgURL: '/img/full/06.intechsive_software_development_full.png',
        client: 'Intechsive Software Development',
        type: 'Web Design'
      }, {
        id: 7,
        url: '/img/covers/07.talbase.png',
        fullWidthImgURL: '/img/full/07.talbase_dashboard_consultant_full.png',
        client: 'Talbase',
        type: 'UI Design'
      }]
    });

    _this.openModal = _this.openModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ReactCarousel, [{
    key: "openModal",
    value: function openModal(id) {
      this.setState({
        isOpen: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, id, true)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        className: "carousel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(Carousel, {
        slidesPerScroll: 1,
        slidesPerPage: 2,
        animationSpeed: 5000,
        arrowLeft: __jsx("i", {
          className: "fi-xwllxl-chevron-wide",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }),
        arrowLeftDisabled: __jsx("i", {
          className: "fi-xwllxl-chevron-wide disabled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }),
        arrowRight: __jsx("i", {
          className: "fi-xwlrxl-chevron-wide",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }),
        arrowRightDisabled: __jsx("i", {
          className: "fi-xwlrxl-chevron-wide disabled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }),
        addArrowClickHandler: true,
        keepDirectionWhenDragging: true,
        clickToChange: true,
        breakpoints: {
          1280: {
            slidesPerPage: 2,
            slidesPerScroll: 2
          },
          1024: {
            slidesPerPage: 1,
            slidesPerScroll: 1
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.state.images.map(function (_ref) {
        var id = _ref.id,
            url = _ref.url,
            fullWidthImgURL = _ref.fullWidthImgURL,
            client = _ref.client,
            type = _ref.type;
        return __jsx("div", {
          key: id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, __jsx("div", {
          className: "pr-0 pl-16",
          onClick: _this2.openModal.bind(_this2, id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, __jsx("img", {
          src: url,
          className: "coral-red-shadow",
          alt: client + " | " + type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), __jsx("h1", {
          className: "mt-6 client-heading fade-in",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, client), __jsx("p", {
          className: "fade-in",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, type)), __jsx(react_responsive_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
          open: _this2.state.isOpen[id],
          onClose: _this2.onCloseModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, __jsx("img", {
          src: fullWidthImgURL,
          alt: client + " | " + type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        })));
      }))));
    }
  }]);

  return ReactCarousel;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReactCarousel);

/***/ })

})
//# sourceMappingURL=index.js.b11b9aa56553153edc45.hot-update.js.map