webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.1a2578641a272fe92412.hot-update.js.map