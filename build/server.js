require("source-map-support").install();
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  var _this2 = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  __webpack_require__(63);
  
  var _path = __webpack_require__(12);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(6);
  
  var _express2 = _interopRequireDefault(_express);
  
  //import mongoose from 'mongoose';
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDomServer = __webpack_require__(78);
  
  var _reactDomServer2 = _interopRequireDefault(_reactDomServer);
  
  var _routes = __webpack_require__(40);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _componentsHtml = __webpack_require__(20);
  
  var _componentsHtml2 = _interopRequireDefault(_componentsHtml);
  
  var _apiRankings = __webpack_require__(19);
  
  var _apiRankings2 = _interopRequireDefault(_apiRankings);
  
  var server = global.server = (0, _express2['default'])();
  var port = process.env.PORT || 5000;
  server.set('port', port);
  //mongoose.connect(process.env.MONGOLAB_URI);
  //mongoose.connect("mongodb://localhost/ballcruncher_db");
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  server.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  server.use('/api/content', __webpack_require__(18));
  server.use('/api/rankings', _apiRankings2['default']);
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  server.get('*', function callee$0$0(req, res, next) {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      var _this = this;
  
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          context$1$0.next = 3;
          return regeneratorRuntime.awrap((function callee$1$0() {
            var statusCode, data, css, context, html;
            return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
              while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                  statusCode = 200;
                  data = { title: '', description: '', css: '', body: '' };
                  css = [];
                  context = {
                    onInsertCss: function onInsertCss(value) {
                      return css.push(value);
                    },
                    onSetTitle: function onSetTitle(value) {
                      return data.title = value;
                    },
                    onSetMeta: function onSetMeta(key, value) {
                      return data[key] = value;
                    },
                    onPageNotFound: function onPageNotFound() {
                      return statusCode = 404;
                    }
                  };
                  context$2$0.next = 6;
                  return regeneratorRuntime.awrap(_routes2['default'].dispatch({ path: req.path, context: context }, function (state, component) {
                    data.body = _reactDomServer2['default'].renderToString(component);
                    data.css = css.join('');
                  }));
  
                case 6:
                  html = _reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(_componentsHtml2['default'], data));
  
                  res.status(statusCode).send('<!doctype html>\n' + html);
  
                case 8:
                case 'end':
                  return context$2$0.stop();
              }
            }, null, _this);
          })());
  
        case 3:
          context$1$0.next = 8;
          break;
  
        case 5:
          context$1$0.prev = 5;
          context$1$0.t0 = context$1$0['catch'](0);
  
          next(context$1$0.t0);
  
        case 8:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this2, [[0, 5]]);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  server.listen(port, function () {
    /* eslint-disable no-console */
    console.log('The server is running at http://localhost:' + port + '/');
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _fbjsLibInvariant = __webpack_require__(67);
  
  var _fbjsLibInvariant2 = _interopRequireDefault(_fbjsLibInvariant);
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(5);
  
  var count = 0;
  
  function withStyles(styles) {
    return function (ComposedComponent) {
      return (function (_Component) {
        _inherits(WithStyles, _Component);
  
        _createClass(WithStyles, null, [{
          key: 'contextTypes',
          value: {
            onInsertCss: _react.PropTypes.func
          },
          enumerable: true
        }]);
  
        function WithStyles() {
          _classCallCheck(this, WithStyles);
  
          _get(Object.getPrototypeOf(WithStyles.prototype), 'constructor', this).call(this);
          this.refCount = 0;
          ComposedComponent.prototype.renderCss = (function render(css) {
            var style = undefined;
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              style = this.styleId && document.getElementById(this.styleId);
              if (style) {
                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }
              } else {
                this.styleId = 'dynamic-css-' + count++;
                style = document.createElement('style');
                style.setAttribute('id', this.styleId);
                style.setAttribute('type', 'text/css');
  
                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }
  
                document.getElementsByTagName('head')[0].appendChild(style);
                this.refCount++;
              }
            } else {
              this.context.onInsertCss(css);
            }
          }).bind(this);
        }
  
        _createClass(WithStyles, [{
          key: 'componentWillMount',
          value: function componentWillMount() {
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              (0, _fbjsLibInvariant2['default'])(styles.use, 'The style-loader must be configured with reference-counted API.');
              styles.use();
            } else {
              this.context.onInsertCss(styles.toString());
            }
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            styles.unuse();
            if (this.styleId) {
              this.refCount--;
              if (this.refCount < 1) {
                var style = document.getElementById(this.styleId);
                if (style) {
                  style.parentNode.removeChild(style);
                }
              }
            }
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2['default'].createElement(ComposedComponent, this.props);
          }
        }]);
  
        return WithStyles;
      })(_react.Component);
    };
  }
  
  exports['default'] = withStyles;
  module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _coreLocation = __webpack_require__(37);
  
  var _coreLocation2 = _interopRequireDefault(_coreLocation);
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = (function (_Component) {
    _inherits(Link, _Component);
  
    function Link() {
      _classCallCheck(this, Link);
  
      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var query = _props.query;
  
        var props = _objectWithoutProperties(_props, ['to', 'query']);
  
        return _react2['default'].createElement('a', _extends({ href: _coreLocation2['default'].createHref(to, query), onClick: Link.handleClick.bind(this) }, props));
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        query: _react.PropTypes.object,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;
  
        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
  
        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);
  
    return Link;
  })(_react.Component);
  
  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _nfl_power_rankingsCss = __webpack_require__(58);
  
  var _nfl_power_rankingsCss2 = _interopRequireDefault(_nfl_power_rankingsCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _storesRankingsStore = __webpack_require__(10);
  
  var _storesRankingsStore2 = _interopRequireDefault(_storesRankingsStore);
  
  var _actionsActionCreator = __webpack_require__(17);
  
  var _actionsActionCreator2 = _interopRequireDefault(_actionsActionCreator);
  
  var _coreTableTable = __webpack_require__(23);
  
  var _coreTableTable2 = _interopRequireDefault(_coreTableTable);
  
  var _utilsFormat = __webpack_require__(43);
  
  var _utilsFormat2 = _interopRequireDefault(_utilsFormat);
  
  var _coreDropdown = __webpack_require__(22);
  
  var _coreDropdown2 = _interopRequireDefault(_coreDropdown);
  
  var NflPowerRankings = (function (_Component) {
    _inherits(NflPowerRankings, _Component);
  
    _createClass(NflPowerRankings, null, [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    function NflPowerRankings(props) {
      _classCallCheck(this, _NflPowerRankings);
  
      _get(Object.getPrototypeOf(_NflPowerRankings.prototype), 'constructor', this).call(this, props);
      this.state = {
        selectedRankingsIndex: 0,
        rankings: []
      };
  
      this._onChange = this._onChange.bind(this);
    }
  
    _createClass(NflPowerRankings, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        _storesRankingsStore2['default'].addChangeListener(this._onChange);
        //ActionCreator.getRankings();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _storesRankingsStore2['default'].removeChangeListener(this._onChange);
      }
    }, {
      key: '_onChange',
      value: function _onChange() {
        var rankings = _storesRankingsStore2['default'].getRankings();
  
        var week = undefined,
            label = undefined,
            options = [];
  
        for (var index = 0; index < rankings.length; index++) {
          week = index + 2;
          label = week === 18 ? 'End of Season' : 'Week ' + week;
          options.push({
            value: index,
            label: label
          });
        }
  
        this.setState({
          rankings: rankings,
          selectedRankingsIndex: rankings.length - 1,
          weekSelectionOptions: options
        });
      }
    }, {
      key: '_buildTableColumns',
      value: function _buildTableColumns() {
        var columns = [{ label: null, property: '_index', title: 'Rank', className: 'view__nfl_power_rankings--rank-index' }, { label: 'Team', property: 'id', title: 'Team', sortable: true }, { label: 'Wins', property: 'wins', title: 'Wins', sortable: true }, { label: 'Losses', property: 'losses', title: 'Losses', sortable: true }, { label: 'Power Rating', property: 'power_ranking', formatter: this._formatDecimal, title: 'Power Rating', sortable: true }];
  
        if (this.props.fullRankings) {
          columns[1].label = 'TM';
          columns[2].label = 'W';
          columns[3].label = 'L';
          columns[4].label = 'PWR';
  
          columns = columns.concat([{ label: 'SOS', property: 'sos', formatter: this._formatSpecialDecimal, title: 'Strength of Schedule', sortable: true }, { label: 'SOV', property: 'sov', formatter: this._formatSpecialDecimal, title: 'Strength of Victory', sortable: true }, { label: 'PD', property: 'point_differential', title: 'Point Differential', sortable: true }, { label: 'PS', property: 'points_scored_avg', formatter: this._formatDecimal, title: 'Points Scored Per Game', sortable: true }, { label: 'PA', property: 'points_against_avg', formatter: this._formatDecimal, title: 'Points Against Per Game', sortable: true }, { label: 'TD', property: 'turnover_differential', title: 'Turnover Differential', sortable: true }]);
        }
  
        return columns;
      }
    }, {
      key: '_formatDecimal',
      value: function _formatDecimal(num) {
        return _utilsFormat2['default'].toFixedFloat(num, 2);
      }
    }, {
      key: '_formatSpecialDecimal',
      value: function _formatSpecialDecimal(num) {
        var fixedNum = _utilsFormat2['default'].toFixedFloat(num, 2);
  
        return _utilsFormat2['default'].stripLeadingZero(fixedNum);
      }
    }, {
      key: '_onWeekSelect',
      value: function _onWeekSelect(option) {
        this.setState({ selectedRankingsIndex: option.value });
      }
    }, {
      key: '_renderWeekSelection',
      value: function _renderWeekSelection() {
        var value = this.state.weekSelectionOptions[this.state.selectedRankingsIndex],
            options = this.state.weekSelectionOptions.slice().reverse();
  
        return _react2['default'].createElement(_coreDropdown2['default'], {
          options: options,
          onChange: this._onWeekSelect.bind(this),
          value: value,
          placeholder: 'Select an option'
        });
      }
    }, {
      key: '_renderDetails',
      value: function _renderDetails() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'code',
            null,
            'Legend: RK  = Power Ranking, TM  = Team, W = Wins, L = Losses, PWR = Power Ranking Score, SOS = Strength of Schedule, SOV = Strength of Victory, PDV = Point Differential Value, PSV = Points Scored Value, PAV = Points Against Value, TDV = Turnover Differential Value'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'span',
            null,
            '» '
          ),
          _react2['default'].createElement(
            'a',
            { href: 'https://github.com/kyleaclark/nfl-power-rankings', target: '_blank', style: { textDecoration: 'underline' } },
            'View the data model source code on GitHub'
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var tableData,
            tableColumns = this._buildTableColumns(),
            sortBy = {
          property: 'power_ranking',
          order: 'descending'
        };
  
        if (this.state.rankings.length) {
          tableData = this.state.rankings[this.state.selectedRankingsIndex].data;
        }
  
        return _react2['default'].createElement(
          'div',
          null,
          tableData && _react2['default'].createElement(
            'div',
            null,
            this._renderWeekSelection(),
            _react2['default'].createElement(_coreTableTable2['default'], {
              key: 'nfl_rankings_table_' + this.state.selectedRankingsIndex,
              className: 'table__component',
              columns: tableColumns,
              keys: ['id'],
              sortBy: sortBy,
              tableData: tableData
            })
          ),
          tableData && this.props.fullRankings && this._renderDetails()
        );
      }
    }]);
  
    var _NflPowerRankings = NflPowerRankings;
    NflPowerRankings = (0, _decoratorsWithStyles2['default'])(_nfl_power_rankingsCss2['default'])(NflPowerRankings) || NflPowerRankings;
    return NflPowerRankings;
  })(_react.Component);
  
  exports['default'] = NflPowerRankings;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fbjsLibKeyMirror = __webpack_require__(68);
  
  var _fbjsLibKeyMirror2 = _interopRequireDefault(_fbjsLibKeyMirror);
  
  exports['default'] = (0, _fbjsLibKeyMirror2['default'])({
    RECEIVE_RANKINGS: 'RECEIVE_RANKINGS',
    RECEIVE_ERROR: 'RECEIVE_ERROR'
  });
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _flux = __webpack_require__(69);
  
  var DispatcherClass = (function (_Dispatcher) {
    _inherits(DispatcherClass, _Dispatcher);
  
    function DispatcherClass() {
      _classCallCheck(this, DispatcherClass);
  
      _get(Object.getPrototypeOf(DispatcherClass.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(DispatcherClass, [{
      key: 'handleViewAction',
      value: function handleViewAction(action) {
        this.dispatch({
          source: 'VIEW_ACTION',
          action: action
        });
      }
    }, {
      key: 'handleServerAction',
      value: function handleServerAction(action) {
        this.dispatch({
          source: 'SERVER_ACTION',
          action: action
        });
      }
    }]);
  
    return DispatcherClass;
  })(_flux.Dispatcher);
  
  var AppDispatcher = new DispatcherClass();
  
  exports['default'] = AppDispatcher;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _Store = __webpack_require__(41);
  
  var _Store2 = _interopRequireDefault(_Store);
  
  var _coreAppDispatcher = __webpack_require__(9);
  
  var _coreAppDispatcher2 = _interopRequireDefault(_coreAppDispatcher);
  
  var _constantsActionTypes = __webpack_require__(8);
  
  var _constantsActionTypes2 = _interopRequireDefault(_constantsActionTypes);
  
  var _rankings = [];
  var _cached = false;
  
  function setRankings(rankings) {
    _rankings = rankings;
  }
  
  function cache() {
    _cached = true;
  }
  
  var RankingsStore = (function (_FluxStore) {
    _inherits(RankingsStore, _FluxStore);
  
    function RankingsStore() {
      _classCallCheck(this, RankingsStore);
  
      _get(Object.getPrototypeOf(RankingsStore.prototype), 'constructor', this).call(this);
    }
  
    _createClass(RankingsStore, [{
      key: 'getRankings',
      value: function getRankings() {
        return _rankings;
      }
    }, {
      key: 'isCached',
      value: function isCached() {
        return _cached;
      }
    }, {
      key: 'propagateRankings',
      value: function propagateRankings() {
        this.emitChange();
      }
    }]);
  
    return RankingsStore;
  })(_Store2['default']);
  
  var rankingsStoreInstance = new RankingsStore();
  
  rankingsStoreInstance.dispatchToken = _coreAppDispatcher2['default'].register(function (payload) {
  
    var action = payload.action;
  
    switch (action.type) {
      case _constantsActionTypes2['default'].RECEIVE_RANKINGS:
  
        setRankings(action.rankings);
        cache(true);
        break;
  
      default:
        return true;
    }
  
    rankingsStoreInstance.propagateRankings();
  });
  
  exports['default'] = rankingsStoreInstance;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("superagent");

/***/ },
/* 14 */
/***/ function(module, exports) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var Match = function Match(route, path, keys, match) {
    _classCallCheck(this, Match);
  
    this.route = route;
    this.path = path;
    this.params = Object.create(null);
    for (var i = 1; i < match.length; i++) {
      this.params[keys[i - 1].name] = decodeParam(match[i]);
    }
  };
  
  function decodeParam(val) {
    if (!(typeof val === 'string' || val instanceof String)) {
      return val;
    }
  
    try {
      return decodeURIComponent(val);
    } catch (e) {
      var err = new TypeError('Failed to decode param \'' + val + '\'');
      err.status = 400;
      throw err;
    }
  }
  
  exports['default'] = Match;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _pathToRegexp = __webpack_require__(61);
  
  var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);
  
  var _Match = __webpack_require__(14);
  
  var _Match2 = _interopRequireDefault(_Match);
  
  var Route = (function () {
    function Route(path, handlers) {
      _classCallCheck(this, Route);
  
      this.path = path;
      this.handlers = handlers;
      this.regExp = (0, _pathToRegexp2['default'])(path, this.keys = []);
    }
  
    _createClass(Route, [{
      key: 'match',
      value: function match(path) {
        var match = this.regExp.exec(path);
        return match ? new _Match2['default'](this, path, this.keys, match) : null;
      }
    }]);
  
    return Route;
  })();
  
  exports['default'] = Route;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _Route = __webpack_require__(15);
  
  var _Route2 = _interopRequireDefault(_Route);
  
  var emptyFunction = function emptyFunction() {};
  
  var Router = (function () {
  
    /**
     * Creates a new instance of the `Router` class.
     */
  
    function Router(initialize) {
      _classCallCheck(this, Router);
  
      this.routes = [];
      this.events = Object.create(null);
  
      if (typeof initialize === 'function') {
        initialize(this.on.bind(this));
      }
    }
  
    /**
     * Adds a new route to the routing table or registers an event listener.
     *
     * @param {String} path A string in the Express format, an array of strings, or a regular expression.
     * @param {Function|Array} handlers Asynchronous route handler function(s).
     */
  
    _createClass(Router, [{
      key: 'on',
      value: function on(path) {
        for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          handlers[_key - 1] = arguments[_key];
        }
  
        if (path === 'error') {
          this.events[path] = handlers[0];
        } else {
          this.routes.push(new _Route2['default'](path, handlers));
        }
      }
    }, {
      key: 'dispatch',
      value: function dispatch(state, cb) {
        var routes, handlers, value, result, done, next;
        return regeneratorRuntime.async(function dispatch$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              next = function next() {
                var _handlers$next;
  
                var _value, _value2, match, handler;
  
                return regeneratorRuntime.async(function next$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      if (!((_handlers$next = handlers.next(), value = _handlers$next.value, done = _handlers$next.done, _handlers$next) && !done)) {
                        context$3$0.next = 16;
                        break;
                      }
  
                      _value = value;
                      _value2 = _slicedToArray(_value, 2);
                      match = _value2[0];
                      handler = _value2[1];
  
                      state.params = match.params;
  
                      if (!(handler.length > 1)) {
                        context$3$0.next = 12;
                        break;
                      }
  
                      context$3$0.next = 9;
                      return regeneratorRuntime.awrap(handler(state, next));
  
                    case 9:
                      context$3$0.t0 = context$3$0.sent;
                      context$3$0.next = 15;
                      break;
  
                    case 12:
                      context$3$0.next = 14;
                      return regeneratorRuntime.awrap(handler(state));
  
                    case 14:
                      context$3$0.t0 = context$3$0.sent;
  
                    case 15:
                      return context$3$0.abrupt('return', context$3$0.t0);
  
                    case 16:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, null, this);
              };
  
              if (typeof state === 'string' || state instanceof String) {
                state = { path: state };
              }
              cb = cb || emptyFunction;
              routes = this.routes;
              handlers = regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, match, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handler;
  
                return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      context$3$0.prev = 3;
                      _iterator = routes[Symbol.iterator]();
  
                    case 5:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        context$3$0.next = 38;
                        break;
                      }
  
                      route = _step.value;
                      match = route.match(state.path);
  
                      if (!match) {
                        context$3$0.next = 35;
                        break;
                      }
  
                      _iteratorNormalCompletion2 = true;
                      _didIteratorError2 = false;
                      _iteratorError2 = undefined;
                      context$3$0.prev = 12;
                      _iterator2 = match.route.handlers[Symbol.iterator]();
  
                    case 14:
                      if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        context$3$0.next = 21;
                        break;
                      }
  
                      handler = _step2.value;
                      context$3$0.next = 18;
                      return [match, handler];
  
                    case 18:
                      _iteratorNormalCompletion2 = true;
                      context$3$0.next = 14;
                      break;
  
                    case 21:
                      context$3$0.next = 27;
                      break;
  
                    case 23:
                      context$3$0.prev = 23;
                      context$3$0.t0 = context$3$0['catch'](12);
                      _didIteratorError2 = true;
                      _iteratorError2 = context$3$0.t0;
  
                    case 27:
                      context$3$0.prev = 27;
                      context$3$0.prev = 28;
  
                      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                      }
  
                    case 30:
                      context$3$0.prev = 30;
  
                      if (!_didIteratorError2) {
                        context$3$0.next = 33;
                        break;
                      }
  
                      throw _iteratorError2;
  
                    case 33:
                      return context$3$0.finish(30);
  
                    case 34:
                      return context$3$0.finish(27);
  
                    case 35:
                      _iteratorNormalCompletion = true;
                      context$3$0.next = 5;
                      break;
  
                    case 38:
                      context$3$0.next = 44;
                      break;
  
                    case 40:
                      context$3$0.prev = 40;
                      context$3$0.t1 = context$3$0['catch'](3);
                      _didIteratorError = true;
                      _iteratorError = context$3$0.t1;
  
                    case 44:
                      context$3$0.prev = 44;
                      context$3$0.prev = 45;
  
                      if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                      }
  
                    case 47:
                      context$3$0.prev = 47;
  
                      if (!_didIteratorError) {
                        context$3$0.next = 50;
                        break;
                      }
  
                      throw _iteratorError;
  
                    case 50:
                      return context$3$0.finish(47);
  
                    case 51:
                      return context$3$0.finish(44);
  
                    case 52:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, callee$2$0, this, [[3, 40, 44, 52], [12, 23, 27, 35], [28,, 30, 34], [45,, 47, 51]]);
              })();
              value = undefined, result = undefined, done = false;
  
            case 6:
              if (done) {
                context$2$0.next = 16;
                break;
              }
  
              context$2$0.next = 9;
              return regeneratorRuntime.awrap(next());
  
            case 9:
              result = context$2$0.sent;
  
              if (!result) {
                context$2$0.next = 14;
                break;
              }
  
              state.statusCode = 200;
              cb(state, result);
              return context$2$0.abrupt('return');
  
            case 14:
              context$2$0.next = 6;
              break;
  
            case 16:
              if (!this.events.error) {
                context$2$0.next = 32;
                break;
              }
  
              context$2$0.prev = 17;
  
              state.statusCode = 404;
              context$2$0.next = 21;
              return regeneratorRuntime.awrap(this.events.error(state, new Error('Cannot found a route matching \'' + state.path + '\'.')));
  
            case 21:
              result = context$2$0.sent;
  
              cb(state, result);
              context$2$0.next = 32;
              break;
  
            case 25:
              context$2$0.prev = 25;
              context$2$0.t0 = context$2$0['catch'](17);
  
              state.statusCode = 500;
              context$2$0.next = 30;
              return regeneratorRuntime.awrap(this.events.error(state, context$2$0.t0));
  
            case 30:
              result = context$2$0.sent;
  
              cb(state, result);
  
            case 32:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this, [[17, 25]]);
      }
    }]);
  
    return Router;
  })();
  
  exports['default'] = Router;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _coreAppDispatcher = __webpack_require__(9);
  
  var _coreAppDispatcher2 = _interopRequireDefault(_coreAppDispatcher);
  
  var _constantsActionTypes = __webpack_require__(8);
  
  var _constantsActionTypes2 = _interopRequireDefault(_constantsActionTypes);
  
  var _storesRankingsStore = __webpack_require__(10);
  
  var _storesRankingsStore2 = _interopRequireDefault(_storesRankingsStore);
  
  var _utilsApiClient = __webpack_require__(42);
  
  var _utilsApiClient2 = _interopRequireDefault(_utilsApiClient);
  
  var ActionCreator = {
  
    /**
     *
     *
     */
    getRankings: function getRankings() {
      if (_storesRankingsStore2['default'].isCached()) {
        _storesRankingsStore2['default'].propagateRankings();
      } else {
        _utilsApiClient2['default'].get('/api/rankings').then(function (rankings) {
          _coreAppDispatcher2['default'].handleServerAction({
            type: _constantsActionTypes2['default'].RECEIVE_RANKINGS,
            rankings: rankings
          });
        })['catch'](function (error) {
          _coreAppDispatcher2['default'].handleServerAction({
            type: _constantsActionTypes2['default'].RECEIVE_ERROR,
            error: 'There was a problem getting the rankings'
          });
        });
      }
    }
  };
  
  exports['default'] = ActionCreator;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _path = __webpack_require__(12);
  
  var _express = __webpack_require__(6);
  
  var _jade = __webpack_require__(75);
  
  var _jade2 = _interopRequireDefault(_jade);
  
  var _frontMatter = __webpack_require__(70);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _utilsFs = __webpack_require__(44);
  
  var _utilsFs2 = _interopRequireDefault(_utilsFs);
  
  // A folder with Jade/Markdown/HTML content pages
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseJade = function parseJade(path, jadeContent) {
    var fmContent = (0, _frontMatter2['default'])(jadeContent);
    var htmlContent = _jade2['default'].render(fmContent.body);
    return Object.assign({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var router = new _express.Router();
  
  router.get('/', function callee$0$0(req, res, next) {
    var path, fileName, source, content;
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          path = req.query.path;
  
          if (!(!path || path === 'undefined')) {
            context$1$0.next = 5;
            break;
          }
  
          res.status(400).send({ error: 'The \'path\' query parameter cannot be empty.' });
          return context$1$0.abrupt('return');
  
        case 5:
          fileName = (0, _path.join)(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');
          context$1$0.next = 8;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));
  
        case 8:
          if (context$1$0.sent) {
            context$1$0.next = 10;
            break;
          }
  
          fileName = (0, _path.join)(CONTENT_DIR, path + '/index.jade');
  
        case 10:
          context$1$0.next = 12;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));
  
        case 12:
          if (context$1$0.sent) {
            context$1$0.next = 16;
            break;
          }
  
          res.status(404).send({ error: 'The page \'' + path + '\' is not found.' });
          context$1$0.next = 21;
          break;
  
        case 16:
          context$1$0.next = 18;
          return regeneratorRuntime.awrap(_utilsFs2['default'].readFile(fileName, { encoding: 'utf8' }));
  
        case 18:
          source = context$1$0.sent;
          content = parseJade(path, source);
  
          res.status(200).send(content);
  
        case 21:
          context$1$0.next = 26;
          break;
  
        case 23:
          context$1$0.prev = 23;
          context$1$0.t0 = context$1$0['catch'](0);
  
          next(context$1$0.t0);
  
        case 26:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this, [[0, 23]]);
  });
  
  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _express = __webpack_require__(6);
  
  var _mongoose = __webpack_require__(76);
  
  var _mongoose2 = _interopRequireDefault(_mongoose);
  
  var rankingSchema = _mongoose2['default'].Schema({
    _id: String,
    data: Array
  });
  
  var Ranking = _mongoose2['default'].model('Nfl_Ranking', rankingSchema);
  
  var router = new _express.Router();
  
  // Matches /api/rankings
  router.get("/", function (req, res) {
  
    console.log('rankings res : ', res);
  
    Ranking.find(function (err, rankings) {
  
      if (err) {
        res.send(err);
      }
  
      res.json(rankings);
    });
  });
  
  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(35);
  
  var Html = (function (_Component) {
    _inherits(Html, _Component);
  
    function Html() {
      _classCallCheck(this, Html);
  
      _get(Object.getPrototypeOf(Html.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Html, [{
      key: 'trackingCode',
      value: function trackingCode() {
        return { __html: '(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=' + 'function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;' + 'e=o.createElement(i);r=o.getElementsByTagName(i)[0];' + 'e.src=\'https://www.google-analytics.com/analytics.js\';' + 'r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));' + ('ga(\'create\',\'' + _config.googleAnalyticsId + '\',\'auto\');ga(\'send\',\'pageview\');')
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'html',
          { className: 'no-js', lang: '' },
          _react2['default'].createElement(
            'head',
            null,
            _react2['default'].createElement('meta', { charSet: 'utf-8' }),
            _react2['default'].createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
            _react2['default'].createElement(
              'title',
              null,
              this.props.title
            ),
            _react2['default'].createElement('meta', { name: 'description', content: this.props.description }),
            _react2['default'].createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2['default'].createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
            _react2['default'].createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: this.props.css } })
          ),
          _react2['default'].createElement(
            'body',
            null,
            _react2['default'].createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.body } }),
            _react2['default'].createElement('script', { src: '/app.js' }),
            _react2['default'].createElement('script', { dangerouslySetInnerHTML: this.trackingCode() })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        title: _react.PropTypes.string,
        description: _react.PropTypes.string,
        css: _react.PropTypes.string,
        body: _react.PropTypes.string.isRequired
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        title: '',
        description: ''
      },
      enumerable: true
    }]);
  
    return Html;
  })(_react.Component);
  
  exports['default'] = Html;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _appCss = __webpack_require__(45);
  
  var _appCss2 = _interopRequireDefault(_appCss);
  
  var _decoratorsWithContext = __webpack_require__(38);
  
  var _decoratorsWithContext2 = _interopRequireDefault(_decoratorsWithContext);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _header = __webpack_require__(26);
  
  var _header2 = _interopRequireDefault(_header);
  
  var _feedback = __webpack_require__(24);
  
  var _feedback2 = _interopRequireDefault(_feedback);
  
  var _footer = __webpack_require__(25);
  
  var _footer2 = _interopRequireDefault(_footer);
  
  var App = (function (_Component) {
    _inherits(App, _Component);
  
    function App() {
      _classCallCheck(this, _App);
  
      _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(App, [{
      key: 'render',
      value: function render() {
        return !this.props.error ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_header2['default'], null),
          this.props.children,
          _react2['default'].createElement(_feedback2['default'], null),
          _react2['default'].createElement(_footer2['default'], null)
        ) : this.props.children;
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired,
        error: _react.PropTypes.object
      },
      enumerable: true
    }]);
  
    var _App = App;
    App = (0, _decoratorsWithStyles2['default'])(_appCss2['default'])(App) || App;
    App = (0, _decoratorsWithContext2['default'])(App) || App;
    return App;
  })(_react.Component);
  
  exports['default'] = App;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = __webpack_require__(77);
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _classnames = __webpack_require__(11);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _dropdownCss = __webpack_require__(46);
  
  var _dropdownCss2 = _interopRequireDefault(_dropdownCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var Dropdown = (function (_React$Component) {
    _inherits(Dropdown, _React$Component);
  
    function Dropdown(props) {
      _classCallCheck(this, _Dropdown);
  
      _get(Object.getPrototypeOf(_Dropdown.prototype), 'constructor', this).call(this, props);
      this.state = {
        selected: props.value || { label: props.placeholder || 'Select...', value: '' },
        isOpen: false
      };
      this.mounted = true;
      this.handleDocumentClick = this.handleDocumentClick.bind(this);
    }
  
    _createClass(Dropdown, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        if (newProps.value && newProps.value !== this.state.selected) {
          this.setState({ selected: newProps.value });
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mounted = false;
        document.removeEventListener('click', this.handleDocumentClick, false);
      }
    }, {
      key: 'handleMouseDown',
      value: function handleMouseDown(event) {
  
        if (event.type == 'mousedown' && event.button !== 0) return;
        event.stopPropagation();
        event.preventDefault();
  
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }, {
      key: 'setValue',
      value: function setValue(option) {
        var newState = {
          selected: option,
          isOpen: false
        };
        this.fireChangeEvent(newState);
        this.setState(newState);
      }
    }, {
      key: 'fireChangeEvent',
      value: function fireChangeEvent(newState) {
        if (newState.selected !== this.state.selected && this.props.onChange) {
          this.props.onChange(newState.selected);
        }
      }
    }, {
      key: 'renderOption',
      value: function renderOption(option) {
        var optionClass = (0, _classnames2['default'])({
          'dropdown__option': true,
          'is-selected': option == this.state.selected
        });
  
        return _react2['default'].createElement(
          'div',
          { key: option.value, className: optionClass, onMouseDown: this.setValue.bind(this, option), onClick: this.setValue.bind(this, option) },
          option.label
        );
      }
    }, {
      key: 'buildMenu',
      value: function buildMenu() {
        var _this = this;
  
        var ops = this.props.options.map(function (option) {
          if (option.type == 'group') {
            var groupTitle = _react2['default'].createElement(
              'div',
              { className: 'title' },
              option.name
            );
            var _options = option.items.map(function (item) {
              return _this.renderOption(item);
            });
  
            return _react2['default'].createElement(
              'div',
              { className: 'group', key: option.name },
              groupTitle,
              _options
            );
          } else {
            return _this.renderOption(option);
          }
        });
  
        return ops.length ? ops : _react2['default'].createElement(
          'div',
          { className: 'dropdown__noresults' },
          'No options found'
        );
      }
    }, {
      key: 'handleDocumentClick',
      value: function handleDocumentClick(event) {
        if (this.mounted) {
          if (!_reactDom2['default'].findDOMNode(this).contains(event.target)) {
            this.setState({ isOpen: false });
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var controlClassName = _props.controlClassName;
        var menuClassName = _props.menuClassName;
  
        var value = _react2['default'].createElement(
          'div',
          { className: 'placeholder' },
          this.state.selected.label
        );
        var menu = this.state.isOpen ? _react2['default'].createElement(
          'div',
          { className: menuClassName },
          this.buildMenu()
        ) : null;
  
        var dropdownClass = (0, _classnames2['default'])({
          'dropdown': true,
          'is-open': this.state.isOpen
        });
  
        return _react2['default'].createElement(
          'div',
          { className: dropdownClass },
          _react2['default'].createElement(
            'div',
            { className: controlClassName, onMouseDown: this.handleMouseDown.bind(this), onTouchEnd: this.handleMouseDown.bind(this) },
            value,
            _react2['default'].createElement('span', { className: 'dropdown__arrow' })
          ),
          menu
        );
      }
    }]);
  
    var _Dropdown = Dropdown;
    Dropdown = (0, _decoratorsWithStyles2['default'])(_dropdownCss2['default'])(Dropdown) || Dropdown;
    return Dropdown;
  })(_react2['default'].Component);
  
  Dropdown.defaultProps = { controlClassName: 'dropdown__control', menuClassName: 'dropdown__menu' };
  
  exports['default'] = Dropdown;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _tableCss = __webpack_require__(47);
  
  var _tableCss2 = _interopRequireDefault(_tableCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var Table = (function (_React$Component) {
    _inherits(Table, _React$Component);
  
    function Table(props) {
      _classCallCheck(this, _Table);
  
      _get(Object.getPrototypeOf(_Table.prototype), 'constructor', this).call(this, props);
      this.state = {};
    }
  
    _createClass(Table, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._onSort(this.props.sortBy);
      }
    }, {
      key: '_onSort',
      value: function _onSort(sortBy) {
        console.log('sortBy : ', sortBy);
        this.setState({
          sortByProperty: sortBy.property,
          sortByOrder: sortBy.order
        });
      }
    }, {
      key: '_sortedData',
      value: function _sortedData() {
        var sortedData,
            sortByProp = this.state.sortByProperty;
  
        sortedData = this.props.tableData.slice().sort(function (a, b) {
          return a[sortByProp] < b[sortByProp] ? -1 : a[sortByProp] > b[sortByProp] ? 1 : 0;
        });
  
        if (this.state.sortByOrder === 'descending') {
          sortedData.reverse();
        }
  
        return sortedData;
      }
    }, {
      key: '_buildGetKeys',
      value: function _buildGetKeys(keys) {
        return function (data) {
          return keys.map(function (key) {
            return data[key];
          });
        };
      }
    }, {
      key: '_renderBody',
      value: function _renderBody(tableData, columns, keys) {
        var item,
            columns = this.props.columns,
            keys = this.props.keys,
            getKeys = this._buildGetKeys(keys),
            sortedData = this._sortedData();
  
        return sortedData.map(function (row, rowIndex) {
          return _react2['default'].createElement(
            'tr',
            { key: getKeys(row) },
            columns.map(function (col, index) {
              if (col.property === '_index') {
                item = rowIndex + 1;
              } else {
                item = col.formatter ? col.formatter(row[col.property]) : row[col.property];
              }
  
              return _react2['default'].createElement(
                'td',
                { key: index, className: col.className },
                item
              );
            })
          );
        });
      }
    }, {
      key: '_buildHeaderAttrs',
      value: function _buildHeaderAttrs(col) {
        var sortOrder = this.state.sortByProperty === col.property ? this.state.sortByOrder : 'none',
            nextSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
  
        return {
          'onClick': this._onSort.bind(this, { property: col.property, order: nextSortOrder }),
          'onMouseDown': function onMouseDown(ev) {
            ev.preventDefault();
          },
          'data-sort': sortOrder
        };
      }
    }, {
      key: '_renderHeading',
      value: function _renderHeading() {
        var sortAttrs,
            sortOrder,
            columns = this.props.columns,
            self = this;
  
        return columns.map(function (col, index) {
          if (col.sortable) {
            sortAttrs = self._buildHeaderAttrs(col);
            sortOrder = sortAttrs['data-sort'];
          } else {
            sortAttrs = {};
          }
  
          return _react2['default'].createElement(
            'th',
            _extends({
              key: col.label || col.property,
              title: col.title
            }, sortAttrs),
            col.label && _react2['default'].createElement(
              'span',
              null,
              col.label
            ),
            col.sortable && _react2['default'].createElement('span', { className: 'sort-icon sort-' + sortOrder })
          );
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var columns = this.props.columns,
            keys = this.props.keys,
            buildRowOptions = this.props.buildRowOptions,
            sortBy = this.state.sortBy;
  
        return _react2['default'].createElement(
          'table',
          { className: this.props.className },
          _react2['default'].createElement(
            'thead',
            null,
            _react2['default'].createElement(
              'tr',
              null,
              this._renderHeading()
            )
          ),
          _react2['default'].createElement(
            'tbody',
            null,
            this._renderBody()
          )
        );
      }
    }]);
  
    var _Table = Table;
    Table = (0, _decoratorsWithStyles2['default'])(_tableCss2['default'])(Table) || Table;
    return Table;
  })(_react2['default'].Component);
  
  Table.displayName = 'Table';
  
  Table.defaultProps = {
    className: 'table-component'
  };
  
  exports['default'] = Table;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _feedbackCss = __webpack_require__(48);
  
  var _feedbackCss2 = _interopRequireDefault(_feedbackCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var Feedback = (function (_Component) {
    _inherits(Feedback, _Component);
  
    function Feedback() {
      _classCallCheck(this, _Feedback);
  
      _get(Object.getPrototypeOf(_Feedback.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Feedback, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'feedback' },
          _react2['default'].createElement(
            'div',
            { className: 'feedback__container' },
            _react2['default'].createElement(
              'span',
              null,
              'where ball don\'t lie about sports analytics & musings'
            )
          )
        );
      }
    }]);
  
    var _Feedback = Feedback;
    Feedback = (0, _decoratorsWithStyles2['default'])(_feedbackCss2['default'])(Feedback) || Feedback;
    return Feedback;
  })(_react.Component);
  
  exports['default'] = Feedback;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _footerCss = __webpack_require__(49);
  
  var _footerCss2 = _interopRequireDefault(_footerCss);
  
  var _decoratorsWithViewport = __webpack_require__(39);
  
  var _decoratorsWithViewport2 = _interopRequireDefault(_decoratorsWithViewport);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _link = __webpack_require__(4);
  
  var _link2 = _interopRequireDefault(_link);
  
  var Footer = (function (_Component) {
    _inherits(Footer, _Component);
  
    function Footer() {
      _classCallCheck(this, _Footer);
  
      _get(Object.getPrototypeOf(_Footer.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Footer, [{
      key: '_render',
      value: function _render() {
        // This is just an example how one can render CSS
        var _props$viewport = this.props.viewport;
        var width = _props$viewport.width;
        var height = _props$viewport.height;
  
        // this.renderCss(`.Footer__viewport:after {content:' ${width}x${height}';}`);
  
        return _react2['default'].createElement(
          'div',
          { className: 'footer' },
          _react2['default'].createElement(
            'div',
            { className: 'footer__container' },
            _react2['default'].createElement(
              'span',
              { className: 'footer__text' },
              '© Ballcruncher'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'footer__spacer' },
              '·'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'footer__link', href: '/', onClick: _link2['default'].handleClick },
              'Home'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'footer__spacer' },
              '·'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'footer__link', href: '/privacy', onClick: _link2['default'].handleClick },
              'Privacy'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'footer__spacer' },
              '·'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'footer__link', href: '/not-found', onClick: _link2['default'].handleClick },
              'Not Found'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'footer__spacer' },
              ' | '
            )
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'footer' },
          _react2['default'].createElement(
            'div',
            { className: 'footer__container' },
            _react2['default'].createElement(
              'span',
              { className: 'footer__text' },
              '© Ballcruncher',
              _react2['default'].createElement(
                'sub',
                { className: 'beta-text' },
                '(beta)'
              ),
              ' 2015, founded by Kyle Clark'
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        viewport: _react.PropTypes.shape({
          width: _react.PropTypes.number.isRequired,
          height: _react.PropTypes.number.isRequired
        }).isRequired
      },
      enumerable: true
    }]);
  
    var _Footer = Footer;
    Footer = (0, _decoratorsWithStyles2['default'])(_footerCss2['default'])(Footer) || Footer;
    Footer = (0, _decoratorsWithViewport2['default'])(Footer) || Footer;
    return Footer;
  })(_react.Component);
  
  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _headerCss = __webpack_require__(50);
  
  var _headerCss2 = _interopRequireDefault(_headerCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _link = __webpack_require__(4);
  
  var _link2 = _interopRequireDefault(_link);
  
  var _navigation = __webpack_require__(27);
  
  var _navigation2 = _interopRequireDefault(_navigation);
  
  var Header = (function (_Component) {
    _inherits(Header, _Component);
  
    function Header() {
      _classCallCheck(this, _Header);
  
      _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Header, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Header' },
          _react2['default'].createElement(
            'div',
            { className: 'header__container' },
            _react2['default'].createElement(
              'a',
              { className: 'header__brand', href: '/', onClick: _link2['default'].handleClick },
              _react2['default'].createElement(
                'span',
                { className: 'header__brand--txt' },
                'Ballcruncher',
                _react2['default'].createElement(
                  'sub',
                  { className: 'beta-text' },
                  '(beta)'
                )
              )
            ),
            _react2['default'].createElement(_navigation2['default'], { className: 'header__nav' }),
            _react2['default'].createElement(
              'div',
              { className: 'header__banner' },
              _react2['default'].createElement(
                'h3',
                { className: 'header__banner--title' },
                'ball don\'t lie'
              ),
              _react2['default'].createElement(
                'p',
                { className: 'header__banner--desc' },
                'sports analytics & musings'
              )
            )
          )
        );
      }
    }]);
  
    var _Header = Header;
    Header = (0, _decoratorsWithStyles2['default'])(_headerCss2['default'])(Header) || Header;
    return Header;
  })(_react.Component);
  
  exports['default'] = Header;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(11);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _navigationCss = __webpack_require__(51);
  
  var _navigationCss2 = _interopRequireDefault(_navigationCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _link = __webpack_require__(4);
  
  var _link2 = _interopRequireDefault(_link);
  
  var Navigation = (function (_Component) {
    _inherits(Navigation, _Component);
  
    function Navigation() {
      _classCallCheck(this, _Navigation);
  
      _get(Object.getPrototypeOf(_Navigation.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Navigation, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: (0, _classnames2['default'])(this.props.className, 'navigation'), role: 'navigation' },
          _react2['default'].createElement(
            'a',
            { className: 'navigiation__link', href: '/', onClick: _link2['default'].handleClick },
            'Home'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'navigiation__spacer' },
            ' | '
          ),
          _react2['default'].createElement(
            'a',
            { className: 'navigiation__link', href: '/nfl', onClick: _link2['default'].handleClick },
            'NFL'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        className: _react.PropTypes.string
      },
      enumerable: true
    }]);
  
    var _Navigation = Navigation;
    Navigation = (0, _decoratorsWithStyles2['default'])(_navigationCss2['default'])(Navigation) || Navigation;
    return Navigation;
  })(_react.Component);
  
  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _homeCss = __webpack_require__(52);
  
  var _homeCss2 = _interopRequireDefault(_homeCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _link = __webpack_require__(4);
  
  var _link2 = _interopRequireDefault(_link);
  
  var _viewsBlog_entries = __webpack_require__(31);
  
  var _viewsBlog_entries2 = _interopRequireDefault(_viewsBlog_entries);
  
  var _viewsNfl_power_rankings = __webpack_require__(7);
  
  var _viewsNfl_power_rankings2 = _interopRequireDefault(_viewsNfl_power_rankings);
  
  var ballcruncherImage = __webpack_require__(62);
  
  var HomePage = (function (_Component) {
    _inherits(HomePage, _Component);
  
    function HomePage() {
      _classCallCheck(this, _HomePage);
  
      _get(Object.getPrototypeOf(_HomePage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(HomePage, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'page__primary' },
            _react2['default'].createElement(
              'h1',
              { className: 'page__title' },
              'Welcome to Ballcruncher'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'page__subtitle' },
              'Ballcruncher is — a critical or vital point; a crucial or difficult question;',
              _react2['default'].createElement('br', null),
              'a system analyzing large amounts of information & data about sports.'
            ),
            _react2['default'].createElement('hr', null),
            _react2['default'].createElement(
              'h4',
              { className: 'homepage__data-title' },
              'NFL Power Rankings'
            ),
            _react2['default'].createElement(
              'h6',
              { className: 'homepage__data-subtitle' },
              _react2['default'].createElement(
                'a',
                { href: '/nfl', onClick: _link2['default'].handleClick },
                'View the full rankings'
              )
            ),
            _react2['default'].createElement(_viewsNfl_power_rankings2['default'], null)
          ),
          _react2['default'].createElement(
            'div',
            { className: 'page__sidebar' },
            _react2['default'].createElement(
              'h4',
              null,
              'Latest Blog Entries:'
            ),
            _react2['default'].createElement('img', { src: ballcruncherImage, alt: 'Ballcruncher' }),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_viewsBlog_entries2['default'], null)
          ),
          _react2['default'].createElement('div', { className: 'clear' })
        );
      }
    }]);
  
    var _HomePage = HomePage;
    HomePage = (0, _decoratorsWithStyles2['default'])(_homeCss2['default'])(HomePage) || HomePage;
    return HomePage;
  })(_react.Component);
  
  exports['default'] = HomePage;
  module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _nflCss = __webpack_require__(53);
  
  var _nflCss2 = _interopRequireDefault(_nflCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _viewsNfl_power_rankings = __webpack_require__(7);
  
  var _viewsNfl_power_rankings2 = _interopRequireDefault(_viewsNfl_power_rankings);
  
  var NflPage = (function (_Component) {
    _inherits(NflPage, _Component);
  
    _createClass(NflPage, null, [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    function NflPage(props) {
      _classCallCheck(this, _NflPage);
  
      _get(Object.getPrototypeOf(_NflPage.prototype), 'constructor', this).call(this, props);
    }
  
    _createClass(NflPage, [{
      key: 'render',
      value: function render() {
        var title = 'Ballcruncher - NFL';
  
        this.context.onSetTitle(title);
  
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            { className: 'page__title' },
            'NFL Power Rankings'
          ),
          _react2['default'].createElement(_viewsNfl_power_rankings2['default'], { fullRankings: true })
        );
      }
    }]);
  
    var _NflPage = NflPage;
    NflPage = (0, _decoratorsWithStyles2['default'])(_nflCss2['default'])(NflPage) || NflPage;
    return NflPage;
  })(_react.Component);
  
  exports['default'] = NflPage;
  module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _pageCss = __webpack_require__(54);
  
  var _pageCss2 = _interopRequireDefault(_pageCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _homeHome = __webpack_require__(28);
  
  var _homeHome2 = _interopRequireDefault(_homeHome);
  
  var _nflNfl = __webpack_require__(29);
  
  var _nflNfl2 = _interopRequireDefault(_nflNfl);
  
  var Page = (function (_Component) {
    _inherits(Page, _Component);
  
    function Page() {
      _classCallCheck(this, _Page);
  
      _get(Object.getPrototypeOf(_Page.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Page, [{
      key: '_renderPageRoute',
      value: function _renderPageRoute() {
        var page = {
          Home: function Home() {
            return _react2['default'].createElement(_homeHome2['default'], null);
          },
          Nfl: function Nfl() {
            return _react2['default'].createElement(_nflNfl2['default'], null);
          }
        };
  
        return page[this.props.route]() || _react2['default'].createElement(_homeHome2['default'], null);
      }
    }, {
      key: 'render',
      value: function render() {
        var title = 'Ballcruncher -' + this.props.route;
        this.context.onSetTitle(title);
  
        return _react2['default'].createElement(
          'div',
          { className: 'page' },
          _react2['default'].createElement(
            'div',
            { className: 'page__container' },
            this._renderPageRoute()
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _Page = Page;
    Page = (0, _decoratorsWithStyles2['default'])(_pageCss2['default'])(Page) || Page;
    return Page;
  })(_react.Component);
  
  exports['default'] = Page;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _blog_entriesCss = __webpack_require__(55);
  
  var _blog_entriesCss2 = _interopRequireDefault(_blog_entriesCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var BlogEntries = (function (_Component) {
    _inherits(BlogEntries, _Component);
  
    function BlogEntries() {
      _classCallCheck(this, _BlogEntries);
  
      _get(Object.getPrototypeOf(_BlogEntries.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(BlogEntries, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'view__blog-entries' },
          _react2['default'].createElement(
            'span',
            null,
            '» '
          ),
          _react2['default'].createElement(
            'a',
            { href: 'https://medium.com/@ballcruncher/nba-2015-2016-predictions-a1a21976d704' },
            'NBA 2015-2016 Predictions'
          ),
          _react2['default'].createElement(
            'p',
            null,
            '(Published on Oct 27)'
          ),
          _react2['default'].createElement(
            'span',
            null,
            '» '
          ),
          _react2['default'].createElement(
            'a',
            { href: 'https://medium.com/@ballcruncher/nba-contender-tiers-39cb9262d0ef' },
            'NBA Contender Tiers'
          ),
          _react2['default'].createElement(
            'p',
            null,
            '(Published on Oct 27)'
          ),
          _react2['default'].createElement(
            'span',
            null,
            '» '
          ),
          _react2['default'].createElement(
            'a',
            { href: 'https://medium.com/@ballcruncher/week-7-nfl-power-rankings-49c1e77e4d5f' },
            'NFL Week 7 Power Rankings'
          ),
          _react2['default'].createElement(
            'p',
            null,
            '(Published on Oct 27)'
          ),
          _react2['default'].createElement(
            'span',
            null,
            '» '
          ),
          _react2['default'].createElement(
            'a',
            { href: 'https://medium.com/@ballcruncher/nfl-crunch-the-turnover-effect-75623cabbce5' },
            'NFL Crunch:  Turnover Effect'
          ),
          _react2['default'].createElement(
            'p',
            null,
            '(Published on Oct 20)'
          )
        );
      }
    }]);
  
    var _BlogEntries = BlogEntries;
    BlogEntries = (0, _decoratorsWithStyles2['default'])(_blog_entriesCss2['default'])(BlogEntries) || BlogEntries;
    return BlogEntries;
  })(_react.Component);
  
  exports['default'] = BlogEntries;
  module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _contentCss = __webpack_require__(56);
  
  var _contentCss2 = _interopRequireDefault(_contentCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var ContentPage = (function (_Component) {
    _inherits(ContentPage, _Component);
  
    function ContentPage() {
      _classCallCheck(this, _ContentPage);
  
      _get(Object.getPrototypeOf(_ContentPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ContentPage, [{
      key: 'render',
      value: function render() {
        this.context.onSetTitle(this.props.title);
        return _react2['default'].createElement(
          'div',
          { className: 'page' },
          _react2['default'].createElement(
            'div',
            { className: 'page__container' },
            this.props.path === '/' ? null : _react2['default'].createElement(
              'h1',
              null,
              this.props.title
            ),
            _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        path: _react.PropTypes.string.isRequired,
        content: _react.PropTypes.string.isRequired,
        title: _react.PropTypes.string
      },
      enumerable: true
    }, {
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ContentPage = ContentPage;
    ContentPage = (0, _decoratorsWithStyles2['default'])(_contentCss2['default'])(ContentPage) || ContentPage;
    return ContentPage;
  })(_react.Component);
  
  exports['default'] = ContentPage;
  module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _errorCss = __webpack_require__(57);
  
  var _errorCss2 = _interopRequireDefault(_errorCss);
  
  var ErrorPage = (function (_Component) {
    _inherits(ErrorPage, _Component);
  
    function ErrorPage() {
      _classCallCheck(this, _ErrorPage);
  
      _get(Object.getPrototypeOf(_ErrorPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ErrorPage, [{
      key: 'render',
      value: function render() {
        var title = 'Error';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, an critical error occurred on this page.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ErrorPage = ErrorPage;
    ErrorPage = (0, _decoratorsWithStyles2['default'])(_errorCss2['default'])(ErrorPage) || ErrorPage;
    return ErrorPage;
  })(_react.Component);
  
  exports['default'] = ErrorPage;
  module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _not_foundCss = __webpack_require__(59);
  
  var _not_foundCss2 = _interopRequireDefault(_not_foundCss);
  
  var NotFoundPage = (function (_Component) {
    _inherits(NotFoundPage, _Component);
  
    function NotFoundPage() {
      _classCallCheck(this, _NotFoundPage);
  
      _get(Object.getPrototypeOf(_NotFoundPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(NotFoundPage, [{
      key: 'render',
      value: function render() {
        var title = 'Page Not Found';
        this.context.onSetTitle(title);
        this.context.onPageNotFound();
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, but the page you were trying to view does not exist.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _NotFoundPage = NotFoundPage;
    NotFoundPage = (0, _decoratorsWithStyles2['default'])(_not_foundCss2['default'])(NotFoundPage) || NotFoundPage;
    return NotFoundPage;
  })(_react.Component);
  
  exports['default'] = NotFoundPage;
  module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = {
    googleAnalyticsId: 'UA-XXXXX-X'
  };
  module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _superagent = __webpack_require__(13);
  
  var _superagent2 = _interopRequireDefault(_superagent);
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(5);
  
  function getUrl(path) {
    if (path.startsWith('http') || _fbjsLibExecutionEnvironment.canUseDOM) {
      return path;
    }
  
    return process.env.WEBSITE_HOSTNAME ? 'http://' + process.env.WEBSITE_HOSTNAME + path : 'http://127.0.0.1:' + global.server.get('port') + path;
  }
  
  var HttpClient = {
  
    get: function get(path) {
      return new Promise(function (resolve, reject) {
        _superagent2['default'].get(getUrl(path)).accept('application/json').end(function (err, res) {
          if (err) {
            if (err.status === 404) {
              resolve(null);
            } else {
              reject(err);
            }
          } else {
            resolve(res.body);
          }
        });
      });
    }
  
  };
  
  exports['default'] = HttpClient;
  module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(5);
  
  var _historyLibCreateBrowserHistory = __webpack_require__(72);
  
  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);
  
  var _historyLibCreateMemoryHistory = __webpack_require__(73);
  
  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);
  
  var _historyLibUseQueries = __webpack_require__(74);
  
  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
  
  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();
  
  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _fbjsLibEmptyFunction = __webpack_require__(66);
  
  var _fbjsLibEmptyFunction2 = _interopRequireDefault(_fbjsLibEmptyFunction);
  
  function withContext(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithContext, _Component);
  
      function WithContext() {
        _classCallCheck(this, WithContext);
  
        _get(Object.getPrototypeOf(WithContext.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(WithContext, [{
        key: 'getChildContext',
        value: function getChildContext() {
          var context = this.props.context;
          return {
            onInsertCss: context.onInsertCss || _fbjsLibEmptyFunction2['default'],
            onSetTitle: context.onSetTitle || _fbjsLibEmptyFunction2['default'],
            onSetMeta: context.onSetMeta || _fbjsLibEmptyFunction2['default'],
            onPageNotFound: context.onPageNotFound || _fbjsLibEmptyFunction2['default']
          };
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props;
          var context = _props.context;
  
          var other = _objectWithoutProperties(_props, ['context']);
  
          // eslint-disable-line no-unused-vars
          return _react2['default'].createElement(ComposedComponent, other);
        }
      }], [{
        key: 'propTypes',
        value: {
          context: _react.PropTypes.shape({
            onInsertCss: _react.PropTypes.func,
            onSetTitle: _react.PropTypes.func,
            onSetMeta: _react.PropTypes.func,
            onPageNotFound: _react.PropTypes.func
          })
        },
        enumerable: true
      }, {
        key: 'childContextTypes',
        value: {
          onInsertCss: _react.PropTypes.func.isRequired,
          onSetTitle: _react.PropTypes.func.isRequired,
          onSetMeta: _react.PropTypes.func.isRequired,
          onPageNotFound: _react.PropTypes.func.isRequired
        },
        enumerable: true
      }]);
  
      return WithContext;
    })(_react.Component);
  }
  
  exports['default'] = withContext;
  module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _eventemitter3 = __webpack_require__(64);
  
  var _eventemitter32 = _interopRequireDefault(_eventemitter3);
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(5);
  
  var EE = undefined;
  var viewport = { width: 1366, height: 768 }; // Default size for server-side rendering
  var RESIZE_EVENT = 'resize';
  
  function handleWindowResize() {
    if (viewport.width !== window.innerWidth || viewport.height !== window.innerHeight) {
      viewport = { width: window.innerWidth, height: window.innerHeight };
      EE.emit(RESIZE_EVENT, viewport);
    }
  }
  
  function withViewport(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithViewport, _Component);
  
      function WithViewport() {
        _classCallCheck(this, WithViewport);
  
        _get(Object.getPrototypeOf(WithViewport.prototype), 'constructor', this).call(this);
  
        this.state = {
          viewport: _fbjsLibExecutionEnvironment.canUseDOM ? { width: window.innerWidth, height: window.innerHeight } : viewport
        };
      }
  
      _createClass(WithViewport, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (!EE) {
            EE = new _eventemitter32['default']();
            window.addEventListener('resize', handleWindowResize);
            window.addEventListener('orientationchange', handleWindowResize);
          }
  
          EE.on(RESIZE_EVENT, this.handleResize, this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          EE.removeListener(RESIZE_EVENT, this.handleResize, this);
          if (!EE.listeners(RESIZE_EVENT, true)) {
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('orientationchange', handleWindowResize);
            EE = null;
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2['default'].createElement(ComposedComponent, _extends({}, this.props, { viewport: this.state.viewport }));
        }
      }, {
        key: 'handleResize',
        value: function handleResize(value) {
          this.setState({ viewport: value }); // eslint-disable-line react/no-set-state
        }
      }]);
  
      return WithViewport;
    })(_react.Component);
  }
  
  exports['default'] = withViewport;
  module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRoutingSrcRouter = __webpack_require__(16);
  
  var _reactRoutingSrcRouter2 = _interopRequireDefault(_reactRoutingSrcRouter);
  
  var _coreHttpClient = __webpack_require__(36);
  
  var _coreHttpClient2 = _interopRequireDefault(_coreHttpClient);
  
  var _componentsApp = __webpack_require__(21);
  
  var _componentsApp2 = _interopRequireDefault(_componentsApp);
  
  var _componentsPagesPage = __webpack_require__(30);
  
  var _componentsPagesPage2 = _interopRequireDefault(_componentsPagesPage);
  
  var _componentsViewsContent = __webpack_require__(32);
  
  var _componentsViewsContent2 = _interopRequireDefault(_componentsViewsContent);
  
  var _componentsViewsNot_found = __webpack_require__(34);
  
  var _componentsViewsNot_found2 = _interopRequireDefault(_componentsViewsNot_found);
  
  var _componentsViewsError = __webpack_require__(33);
  
  var _componentsViewsError2 = _interopRequireDefault(_componentsViewsError);
  
  var router = new _reactRoutingSrcRouter2['default'](function (on) {
    on('*', function callee$1$0(state, next) {
      var component;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(next());
  
          case 2:
            component = context$2$0.sent;
            return context$2$0.abrupt('return', component && _react2['default'].createElement(
              _componentsApp2['default'],
              { context: state.context },
              component
            ));
  
          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsPagesPage2['default'], { route: 'Home' }));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/nfl', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsPagesPage2['default'], { route: 'Nfl' }));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('*', function callee$1$0(state) {
      var content;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(_coreHttpClient2['default'].get('/api/content?path=' + state.path));
  
          case 2:
            content = context$2$0.sent;
            return context$2$0.abrupt('return', content && _react2['default'].createElement(_componentsViewsContent2['default'], content));
  
          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('error', function (state, error) {
      return state.statusCode === 404 ? _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_componentsViewsNot_found2['default'], null)
      ) : _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_componentsViewsError2['default'], null)
      );
    });
  });
  
  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _events = __webpack_require__(65);
  
  var _events2 = _interopRequireDefault(_events);
  
  var CHANGE_EVENT = 'change';
  
  var Store = (function (_EventEmitter) {
    _inherits(Store, _EventEmitter);
  
    function Store() {
      _classCallCheck(this, Store);
  
      _get(Object.getPrototypeOf(Store.prototype), 'constructor', this).call(this);
    }
  
    _createClass(Store, [{
      key: 'emitChange',
      value: function emitChange() {
        this.emit(CHANGE_EVENT);
      }
    }, {
      key: 'addChangeListener',
      value: function addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
      }
    }, {
      key: 'removeChangeListener',
      value: function removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
      }
    }]);
  
    return Store;
  })(_events2['default']);
  
  Store.dispatchToken = null;
  
  exports['default'] = Store;
  module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _superagent = __webpack_require__(13);
  
  var _superagent2 = _interopRequireDefault(_superagent);
  
  /**
   * Wrapper for calling a API
   */
  var ApiClient = {
    get: function get(url) {
      return new Promise(function (resolve, reject) {
        _superagent2['default'].get(url).end(function (error, res) {
          console.log('error res : ', error, res);
          if (res.status === 404) {
            reject();
          } else {
            resolve(JSON.parse(res.text));
          }
        });
      });
    }
  };
  
  exports['default'] = ApiClient;
  module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var Format = {
    toFixedFloat: function toFixedFloat(num, decimalPlaces) {
      var multiplier = (decimalPlaces - 1) * 100;
  
      return parseFloat(Math.round(num * multiplier) / multiplier).toFixed(decimalPlaces);
    },
  
    stripLeadingZero: function stripLeadingZero(num) {
      num = num.toString().replace(/^0+/, '');
  
      return num;
    }
  };
  
  exports['default'] = Format;
  module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fs = __webpack_require__(71);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var exists = function exists(filename) {
    return new Promise(function (resolve) {
      _fs2['default'].exists(filename, resolve);
    });
  };
  
  var readFile = function readFile(filename) {
    return new Promise(function (resolve, reject) {
      _fs2['default'].readFile(filename, 'utf8', function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
  
  exports['default'] = { exists: exists, readFile: readFile };
  module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);
  
  // module
  exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */ /* 92e5fc */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.clear {\n  clear: both;\n}\n\na,\na:active,\na:visited {\n  color: rgb(64, 64, 64);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(120, 120, 120);\n}\n\n.beta-text {\n  font-size: 0.5em;\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Inconsolata', 'Menlo', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", ""]);
  
  // exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".dropdown {\n  position: relative;\n  width: 200px;\n}\n\n.dropdown__control {\n  position: relative;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  box-sizing: border-box;\n  color: #333;\n  cursor: default;\n  outline: none;\n  padding: 8px 52px 8px 10px;\n  -webkit-transition: all 200ms ease;\n  transition: all 200ms ease;\n}\n\n.dropdown__control:hover {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n\n.dropdown__arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 0;\n  content: ' ';\n  display: block;\n  height: 0;\n  margin-top: -ceil(2.5);\n  position: absolute;\n  right: 10px;\n  top: 14px;\n  width: 0\n}\n\n.is-open .dropdown__arrow {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n\n.dropdown__menu {\n  background-color: white;\n  border: 1px solid #ccc;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  overflow-y: auto;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1000;\n  -webkit-overflow-scrolling: touch;\n}\n\n.dropdown__menu .group > .title{\n  padding: 8px 10px;\n  color: rgba(51, 51, 51, 1.2);\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\n.dropdown__option {\n  box-sizing: border-box;\n  color: rgba(51, 51, 51, 0.8);\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n}\n\n.dropdown__option:last-child {\n  border-bottom-right-radius: 2px;\n   border-bottom-left-radius: 2px;\n}\n\n.dropdown__option:hover {\n  background-color: #f2f9fc;\n  color: #333;\n}\n\n.dropdown__option.is-selected {\n  background-color: #f2f9fc;\n  color: #333;\n}\n\n.dropdown__noresults {\n  box-sizing: border-box;\n  color: #ccc;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n", ""]);
  
  // exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/*================================\n  Table Component\n----------------------------------*/\n\n.table__component {\n  border: 1px solid #ebebeb;\n  color: #444;\n  margin: 20px 0;\n  width: 100%;\n}\n\n.table__component th {\n  cursor: pointer;\n  padding: 10px;\n  text-align: left;\n}\n\n.table__component td {\n  padding: 10px;\n}\n\n.table__component tbody tr:nth-child(odd) {\n  background-color: #ececec;\n}\n\n.table__component .sort-icon:after {\n  float: right;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n.table__component .sort-ascending:after  { content: '\\2191'; }\n\n.table__component .sort-descending:after { content: '\\2193'; }\n\n.table__component .sort-none:after  { content: '\\2195'; }\n", ""]);
  
  // exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */ /* 92e5fc */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.clear {\n  clear: both;\n}\n\na,\na:active,\na:visited {\n  color: rgb(64, 64, 64);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(120, 120, 120);\n}\n\n.beta-text {\n  font-size: 0.5em;\n}\n\n.feedback {\n  background: rgb(240, 240, 240);\n  color: rgb(36, 36, 36);\n}\n\n.feedback__container {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: 1000px;\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.feedback__link,\n.feedback__link:active,\n.feedback__link:hover,\n.feedback__link:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.feedback__link:hover {\n  text-decoration: underline;\n}\n\n.feedback__spacer {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n", ""]);
  
  // exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */ /* 92e5fc */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.clear {\n  clear: both;\n}\n\na,\na:active,\na:visited {\n  color: rgb(64, 64, 64);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(120, 120, 120);\n}\n\n.beta-text {\n  font-size: 0.5em;\n}\n\n.footer {\n  background: rgb(36, 36, 36);\n  color: #fff;\n}\n\n.footer__container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.footer__text {\n  color: rgba(255, 255, 255, .5);\n}\n\n.footer__text--muted {\n  color: rgba(255, 255, 255, .3);\n}\n\n.footer__spacer {\n  color: rgba(255, 255, 255, .3);\n}\n\n.footer__text,\n.footer__link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.footer__link,\n.footer__link:active,\n.footer__link:visited {\n  color: rgba(255, 255, 255, .6);\n  text-decoration: none;\n}\n\n.footer__link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", ""]);
  
  // exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */ /* 92e5fc */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.clear {\n  clear: both;\n}\n\na,\na:active,\na:visited {\n  color: rgb(64, 64, 64);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(120, 120, 120);\n}\n\n.beta-text {\n  font-size: 0.5em;\n}\n\n.Header {\n  /*background: #373277;*/\n  background: rgb(36, 36, 36);\n  color: #fff;\n}\n\n.header__container {\n  margin: 0 auto;\n  padding: 10px 0 20px 0;\n  max-width: 1000px;\n}\n\n.header__brand {\n  font-size: 1.5em;\n}\n\n/* ~28px */\n\n.header__brand span {\n  color: #61dafb;\n\n}\n\n.header__brand--txt {\n  margin-left: 10px;\n}\n\n.header__nav {\n  font-family: 'Menlo', 'Inconsolata', 'HelveticaNeue-Light', sans-serif;\n  float: right;\n  margin-top: 6px;\n}\n\n.header__banner {\n  font-family: 'Menlo', 'Inconsolata', 'HelveticaNeue-Light', sans-serif;\n  text-align: center;\n}\n\n.header__banner--title {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 2.25em;\n  line-height: 1em;\n}\n\n.header__banner--desc {\n  padding: 0;\n  color: rgba(255, 255, 255, .5);\n  font-size: 1em;\n  margin: 0;\n}\n", ""]);
  
  // exports


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);
  
  // module
  exports.push([module.id, ":root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */ /* 92e5fc */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.clear {\n  clear: both;\n}\n\na,\na:active,\na:visited {\n  color: rgb(64, 64, 64);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(120, 120, 120);\n}\n\n.beta-text {\n  font-size: 0.5em;\n}\n\n.navigiation__link {\n  display: inline-block;\n  padding: 3px 8px;\n  padding-top: 0px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.navigiation__link,\n.navigiation__link:active,\n.navigiation__link:visited {\n  color: #61dafb;\n}\n\n.navigiation__link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.navigiation__link--highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, .15);\n  color: #fff;\n}\n\n.navigiation__link--highlight:hover {\n  background: rgba(0, 0, 0, .3);\n}\n\n.navigiation__spacer {\n  color: rgba(255, 255, 255, .3);\n}\n", ""]);
  
  // exports


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".homepage__data-title {\n  margin-bottom: 0px;\n}\n\n.homepage__data-subtitle {\n  margin-top: 0;\n}\n\n.homepage__data-subtitle a {\n  text-decoration: underline;\n}\n", ""]);
  
  // exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */ /* 92e5fc */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.clear {\n  clear: both;\n}\n\na,\na:active,\na:visited {\n  color: rgb(64, 64, 64);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(120, 120, 120);\n}\n\n.beta-text {\n  font-size: 0.5em;\n}\n\n.page__container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", ""]);
  
  // exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);
  
  // module
  exports.push([module.id, ":root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */ /* 92e5fc */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.clear {\n  clear: both;\n}\n\na,\na:active,\na:visited {\n  color: rgb(64, 64, 64);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(120, 120, 120);\n}\n\n.beta-text {\n  font-size: 0.5em;\n}\n\n.page__container {\n  margin: 0 auto;\n  padding: 10px 2px 40px;\n  max-width: 1000px;\n}\n\n.page__primary {\n  float: left;\n  margin-right: 5%;\n  width: 70%;\n}\n\n@media only screen and (max-width: 768px) {\n\n  .page__primary{\n    width: 100%;\n\n  }\n\n}\n\n.page__sidebar {\n  float: left;\n  text-align: right;\n  width: 25%;\n}\n\n@media only screen and (max-width: 768px) {\n\n  .page__sidebar{\n    text-align: left;\n    width: 100%;\n\n  }\n\n}\n\n.page__sidebar h4 {\n  margin-top: 15px;\n  margin-bottom: 5px;\n\n}\n\n/*.page__title {\n  margin: 0;\n}\n\n.page__subtitle {\n  margin: 0;\n}*/\n", ""]);
  
  // exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);
  
  // module
  exports.push([module.id, ":root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */ /* 92e5fc */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.clear {\n  clear: both;\n}\n\na,\na:active,\na:visited {\n  color: rgb(64, 64, 64);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(120, 120, 120);\n}\n\n.beta-text {\n  font-size: 0.5em;\n}\n\n.view__blog-entries a {\n  font-size: 0.85em;\n\n}\n\n.view__blog-entries p {\n  color: rgb(120, 120, 120);\n  font-size: 0.75em;\n  margin-top: 0;\n\n}\n", ""]);
  
  // exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "", ""]);
  
  // exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n\n  }\n\n}\n", ""]);
  
  // exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);
  
  // module
  exports.push([module.id, ":root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */ /* 92e5fc */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.clear {\n  clear: both;\n}\n\na,\na:active,\na:visited {\n  color: rgb(64, 64, 64);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(120, 120, 120);\n}\n\n.beta-text {\n  font-size: 0.5em;\n}\n\n.view__nfl_power_rankings--rank-index {\n  width: 40px;\n}\n", ""]);
  
  // exports


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n\n}\n", ""]);
  
  // exports


/***/ },
/* 60 */
/***/ function(module, exports) {

  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  var isarray = __webpack_require__(60)
  
  /**
   * Expose `pathToRegexp`.
   */
  module.exports = pathToRegexp
  module.exports.parse = parse
  module.exports.compile = compile
  module.exports.tokensToFunction = tokensToFunction
  module.exports.tokensToRegExp = tokensToRegExp
  
  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g')
  
  /**
   * Parse a string for the raw tokens.
   *
   * @param  {string} str
   * @return {!Array}
   */
  function parse (str) {
    var tokens = []
    var key = 0
    var index = 0
    var path = ''
    var res
  
    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0]
      var escaped = res[1]
      var offset = res.index
      path += str.slice(index, offset)
      index = offset + m.length
  
      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1]
        continue
      }
  
      var next = str[index]
      var prefix = res[2]
      var name = res[3]
      var capture = res[4]
      var group = res[5]
      var modifier = res[6]
      var asterisk = res[7]
  
      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path)
        path = ''
      }
  
      var partial = prefix != null && next != null && next !== prefix
      var repeat = modifier === '+' || modifier === '*'
      var optional = modifier === '?' || modifier === '*'
      var delimiter = res[2] || '/'
      var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
  
      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        partial: partial,
        asterisk: !!asterisk,
        pattern: escapeGroup(pattern)
      })
    }
  
    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index)
    }
  
    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path)
    }
  
    return tokens
  }
  
  /**
   * Compile a string to a template function for the path.
   *
   * @param  {string}             str
   * @return {!function(Object=, Object=)}
   */
  function compile (str) {
    return tokensToFunction(parse(str))
  }
  
  /**
   * Prettier encoding of URI path segments.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeURIComponentPretty (str) {
    return encodeURI(str).replace(/[\/?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase()
    })
  }
  
  /**
   * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeAsterisk (str) {
    return encodeURI(str).replace(/[?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase()
    })
  }
  
  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length)
  
    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
      }
    }
  
    return function (obj, opts) {
      var path = ''
      var data = obj || {}
      var options = opts || {}
      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent
  
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
  
        if (typeof token === 'string') {
          path += token
  
          continue
        }
  
        var value = data[token.name]
        var segment
  
        if (value == null) {
          if (token.optional) {
            // Prepend partial segment prefixes.
            if (token.partial) {
              path += token.prefix
            }
  
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }
  
        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
          }
  
          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }
  
          for (var j = 0; j < value.length; j++) {
            segment = encode(value[j])
  
            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
            }
  
            path += (j === 0 ? token.prefix : token.delimiter) + segment
          }
  
          continue
        }
  
        segment = token.asterisk ? encodeAsterisk(value) : encode(value)
  
        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }
  
        path += token.prefix + segment
      }
  
      return path
    }
  }
  
  /**
   * Escape a regular expression string.
   *
   * @param  {string} str
   * @return {string}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
  }
  
  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {string} group
   * @return {string}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }
  
  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {!RegExp} re
   * @param  {Array}   keys
   * @return {!RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys
    return re
  }
  
  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {string}
   */
  function flags (options) {
    return options.sensitive ? '' : 'i'
  }
  
  /**
   * Pull out keys from a regexp.
   *
   * @param  {!RegExp} path
   * @param  {!Array}  keys
   * @return {!RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g)
  
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          partial: false,
          asterisk: false,
          pattern: null
        })
      }
    }
  
    return attachKeys(path, keys)
  }
  
  /**
   * Transform an array into a regexp.
   *
   * @param  {!Array}  path
   * @param  {Array}   keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = []
  
    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source)
    }
  
    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
  
    return attachKeys(regexp, keys)
  }
  
  /**
   * Create a path regexp from string input.
   *
   * @param  {string}  path
   * @param  {!Array}  keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function stringToRegexp (path, keys, options) {
    var tokens = parse(path)
    var re = tokensToRegExp(tokens, options)
  
    // Attach keys back to the regexp.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] !== 'string') {
        keys.push(tokens[i])
      }
    }
  
    return attachKeys(re, keys)
  }
  
  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {!Array}  tokens
   * @param  {Object=} options
   * @return {!RegExp}
   */
  function tokensToRegExp (tokens, options) {
    options = options || {}
  
    var strict = options.strict
    var end = options.end !== false
    var route = ''
    var lastToken = tokens[tokens.length - 1]
    var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
  
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]
  
      if (typeof token === 'string') {
        route += escapeString(token)
      } else {
        var prefix = escapeString(token.prefix)
        var capture = '(?:' + token.pattern + ')'
  
        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*'
        }
  
        if (token.optional) {
          if (!token.partial) {
            capture = '(?:' + prefix + '(' + capture + '))?'
          } else {
            capture = prefix + '(' + capture + ')?'
          }
        } else {
          capture = prefix + '(' + capture + ')'
        }
  
        route += capture
      }
    }
  
    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
    }
  
    if (end) {
      route += '$'
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithSlash ? '' : '(?=\\/|$)'
    }
  
    return new RegExp('^' + route, flags(options))
  }
  
  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(string|RegExp|Array)} path
   * @param  {(Array|Object)=}       keys
   * @param  {Object=}               options
   * @return {!RegExp}
   */
  function pathToRegexp (path, keys, options) {
    keys = keys || []
  
    if (!isarray(keys)) {
      options = /** @type {!Object} */ (keys)
      keys = []
    } else if (!options) {
      options = {}
    }
  
    if (path instanceof RegExp) {
      return regexpToRegexp(path, /** @type {!Array} */ (keys))
    }
  
    if (isarray(path)) {
      return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
    }
  
    return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
  }


/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = require("babel-core/polyfill");

/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = require("eventemitter3");

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("events");

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/invariant");

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/keyMirror");

/***/ },
/* 69 */
/***/ function(module, exports) {

  module.exports = require("flux");

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 74 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = require("jade");

/***/ },
/* 76 */
/***/ function(module, exports) {

  module.exports = require("mongoose");

/***/ },
/* 77 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 78 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map