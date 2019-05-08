(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  color: white;\n  max-width: 1280px;\n  min-height: 960px;\n  background-color: #313233;\n  margin: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.Search-Container {\n  display: flex;\n  justify-content: 'space-between';\n  align-items: center;\n}\n\n.Search-Filter {\n  display: flex;\n  align-items: left;\n  background-color: #222323;\n  margin-left: 500;\n}\n.killer .Select-control:before {\n  color: #aaa;\n  content: 'Flavors';\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n}\n\n.column-select{\n  color: white;\n}\n\n.selectRowProp {\n  color: white;\n  line-height: 1;\n  font-size: 1;\n}\n.my-custom-class {\n  line-height: 1;\n}\n\n.grid-icon {\n  color: white;\n  display: flex;\n  justify-content: right;\n  align-items: right;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

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
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_uab_Projects_sauce_ui_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap-table */ "./node_modules/react-bootstrap-table/lib/index.js");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Logo */ "./src/images/Logo.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/data */ "./src/data/data.js");

var _jsxFileName = "/home/uab/Projects/sauce-ui/src/App.js";







const styles = {
  table: {
    backgroundColor: "#222323"
  }
};
const colourStyles = {
  control: styles => Object(_home_uab_Projects_sauce_ui_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    backgroundColor: "#222323",
    fontSize: 12,
    width: 250,
    marginLeft: 20
  }),
  option: styles => {
    return Object(_home_uab_Projects_sauce_ui_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
      backgroundColor: '#222323',
      border: 0,
      fontSize: 12
    });
  },
  menuList: styles => Object(_home_uab_Projects_sauce_ui_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    backgroundColor: "#222323",
    height: '180'
  })
};

const SearchButton = ({
  variant,
  label
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: variant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, label);
};

class SearchBar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'lalalala'
    };

    this.handleChange = event => {
      this.setState({
        searchTerm: event.target.value
      });
    };
  }

  render() {
    const _this$props = this.props,
          placeholder = _this$props.placeholder,
          label = _this$props.label;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
      style: {
        width: 700,
        paddingLeft: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
      placeholder: placeholder,
      "aria-label": label,
      "aria-describedby": "basic-addon2",
      inputRef: input => this.textInput = input,
      onChange: this.handleChange,
      value: this.state.searchTerm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Append, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "outline-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fa fa-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }))));
  }

}

class FilterSelect extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      selected: null
    };

    this.handleChange = selected => {
      this.setState({
        selected
      });
    };
  }

  render() {
    const selected = this.state.selected;
    const label = this.props.label;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        height: 250,
        backgroundColor: "#222322"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        paddingLeft: 20,
        fontSize: 12
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      closeMenuOnSelect: true,
      defaultValue: '',
      isMulti: true,
      options: _data_data__WEBPACK_IMPORTED_MODULE_7__["colourOptions"],
      styles: colourStyles,
      placeholder: "select " + label + '...',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }));
  }

}

class ListTable extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    this.rowClassNameFormat = (row, rowIdx) => {
      return 'selectRowProp';
    };
  }

  render() {
    const selectRowProp = {
      color: 'white'
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4__["BootstrapTable"], {
      data: _data_data__WEBPACK_IMPORTED_MODULE_7__["assets"],
      containerStyle: {
        background: "#222322",
        maxHeight: '100%',
        overflowY: 'scroll',
        border: 0
      },
      trClassName: this.rowClassNameFormat,
      version: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4__["TableHeaderColumn"], {
      dataField: "thumbnail",
      className: "column-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "Thumbnail"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4__["TableHeaderColumn"], {
      isKey: true,
      dataSort: true,
      dataField: "name",
      className: "column-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Asset Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4__["TableHeaderColumn"], {
      dataField: "type",
      className: "column-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "Asset Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4__["TableHeaderColumn"], {
      dataField: "date",
      className: "column-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4__["TableHeaderColumn"], {
      dataField: "location",
      className: "column-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "Location"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_4__["TableHeaderColumn"], {
      dataField: "tags",
      className: "column-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "Tags"));
  }

}

class ListGrid extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: '90%',
        height: '90%',
        overflow: 'scroll'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["CardDeck"], {
      style: {
        display: 'flex',
        flexDirection: 'row'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, _data_data__WEBPACK_IMPORTED_MODULE_7__["assets"].map(asset => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        width: 400,
        height: 300,
        display: 'flex'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
      variant: "top",
      src: "holder.js/100px180",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, asset.name, "e"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, asset.tags))))));
  }

}

class Result extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
      isGrid: false
    };

    this.handleGridClick = event => {
      this.setState({
        isList: !this.state.isList
      });
    };

    this.handleGridClick.bind(this);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "secondary pull-right",
      onClick: () => this.handleGridClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, " List "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "secondary pull-right",
      onClick: () => this.handleGridClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, " Grid "), this.state.isList ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListTable, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListGrid, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }));
  }

}

class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      fluid: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 1,
      sm: 1,
      md: 2,
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_images_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 5,
      sm: 11,
      md: 10,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchButton, {
      variant: "secondary",
      label: "All",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchBar, {
      placeholder: "Search for assets",
      label: "search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: {
        height: '95%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 2,
      xsOffset: 6,
      sm: 2,
      md: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, "FILTER", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterSelect, {
      label: 'Department',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterSelect, {
      label: 'Location',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterSelect, {
      label: 'Resolution',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 4,
      sm: 9,
      md: 9,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, "RESULTS", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Result, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: colourOptions, assets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colourOptions", function() { return colourOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assets", function() { return assets; });
const colourOptions = [{
  value: 'ocean',
  label: 'Ocean',
  color: '#00B8D9',
  isFixed: true
}, {
  value: 'blue',
  label: 'Blue',
  color: '#0052CC',
  disabled: true
}, {
  value: 'purple',
  label: 'Purple',
  color: '#5243AA'
}, {
  value: 'red',
  label: 'Red',
  color: '#FF5630',
  isFixed: true
}, {
  value: 'orange',
  label: 'Orange',
  color: '#FF8B00'
}, {
  value: 'yellow',
  label: 'Yellow',
  color: '#FFC400'
}, {
  value: 'green',
  label: 'Green',
  color: '#36B37E'
}, {
  value: 'forest',
  label: 'Forest',
  color: '#00875A'
}, {
  value: 'slate',
  label: 'Slate',
  color: '#253858'
}, {
  value: 'silver',
  label: 'Silver',
  color: '#666666'
}];
const assets = [{
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal', 'pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}, {
  thumbnail: '',
  name: 'black cat',
  type: 'animal',
  date: '12 Feb 2018',
  location: 'chennai',
  tags: ['pets', 'cat', 'animal']
}];

/***/ }),

/***/ "./src/images/Logo.js":
/*!****************************!*\
  !*** ./src/images/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_sauce_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/sauce.png */ "./src/images/sauce.png");
/* harmony import */ var _images_sauce_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_sauce_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/uab/Projects/sauce-ui/src/images/Logo.js";


const styles = {
  sauceLogo: {
    maxHeight: 80,
    marginTop: 20
  },
  caption: {
    color: '#f98e40',
    fontFamily: 'Lato',
    fontSize: '15px',
    fontWeight: 'bold',
    margin: 'auto'
  }
};

const SauceLogo = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "figure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "figure-img img-fluid",
    alt: "sauce_logo",
    src: _images_sauce_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    style: styles.sauceLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figcaption", {
    className: "figure-caption",
    style: styles.caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "SAUCE"));
};

/* harmony default export */ __webpack_exports__["default"] = (SauceLogo);

/***/ }),

/***/ "./src/images/sauce.png":
/*!******************************!*\
  !*** ./src/images/sauce.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sauce.1bc9c15a.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

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
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_react_bootstrap_table_dist_react_bootstrap_table_all_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css */ "./node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css");
/* harmony import */ var _node_modules_react_bootstrap_table_dist_react_bootstrap_table_all_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_bootstrap_table_dist_react_bootstrap_table_all_min_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/uab/Projects/sauce-ui/src/index.js";








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), document.getElementById('root')); // Prevents page refresh by gracefully reloading the website
// during development

if (true) {
  module.hot.accept();
} // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/uab/Projects/sauce-ui/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/uab/Projects/sauce-ui/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map