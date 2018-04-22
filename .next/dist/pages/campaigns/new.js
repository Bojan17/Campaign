'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Bojan\\projects\\Etherum\\smartkick\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      errorMessage: '',
      campaign_name: '',
      description: '',
      manager: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, _this$state, minimumContribution, name, description, manager, campaign_name;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                //get accounts from metamask
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                _context.prev = 5;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 8:
                _this$state = _this.state, minimumContribution = _this$state.minimumContribution, name = _this$state.name, description = _this$state.description, manager = _this$state.manager, campaign_name = _this$state.campaign_name;
                _context.next = 11;
                return _axios2.default.post('/api/newcampaign', {
                  minimumContribution: minimumContribution,
                  campaign_name: campaign_name,
                  description: description,
                  manager: manager,
                  wallet: accounts[0]
                });

              case 11:

                _routes.Router.pushRoute('/');
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](5);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:
                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Create a Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.minimumContribution,
        label: 'wei',
        labelPosition: 'right',
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Manager'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({ manager: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Campaign Name'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({ campaign_name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), _react2.default.createElement(_semanticUiReact.TextArea, {
        placeholder: 'Tell us about your campaign',
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Oops!',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { style: { 'marginTop': '1rem' }, loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Create!')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImF4aW9zIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIlRleHRBcmVhIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImNhbXBhaWduX25hbWUiLCJkZXNjcmlwdGlvbiIsIm1hbmFnZXIiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJuYW1lIiwicG9zdCIsIndhbGxldCIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUN2QyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0o7MkJBQVEsQUFDZSxBQUNyQjtvQkFGTSxBQUVRLEFBQ2Q7cUJBSE0sQUFHUyxBQUNmO21CQUpNLEFBSU8sQUFDYjtlQUxNLEFBS0csQUFDVDtlQU5NLEFBTUcsQTtBQU5ILEFBQ04sYSxBQVFKOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtvRkFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBQS9CLEFBQWMsQUFBK0IsQUFDN0M7QUFIUztnQ0FBQTt1QkFJYyxjQUFBLEFBQUssSUFKbkIsQUFJYyxBQUFTOzttQkFBMUI7QUFKRyxvQ0FBQTtnQ0FBQTtnQ0FBQTt5Q0FPSCxBQUFRLFFBQVIsQUFBZ0IsZUFBZSxNQUFBLEFBQUssTUFBcEMsQUFBMEMscUJBQTFDLEFBQ0c7d0JBQ08sU0FUUCxBQU9ILEFBQ1EsQUFDRSxBQUFTO0FBRFgsQUFDSixpQkFGSjs7bUJBUEc7OEJBV3FFLE1BWHJFLEFBVzBFLE9BWDFFLEFBV0ksa0NBWEosQUFXSSxxQkFYSixBQVd5QixtQkFYekIsQUFXeUIsTUFYekIsQUFXK0IsMEJBWC9CLEFBVytCLGFBWC9CLEFBVzJDLHNCQVgzQyxBQVcyQyxTQVgzQyxBQVdvRCw0QkFYcEQsQUFXb0Q7Z0NBWHBEO3VDQVlLLEFBQU0sS0FBTixBQUFXO3VDQUFvQixBQUVuQztpQ0FGbUMsQUFHbkM7K0JBSG1DLEFBSW5DOzJCQUptQyxBQUtuQzswQkFBUSxTQWpCVCxBQVlLLEFBQStCLEFBSzNCLEFBQVM7QUFMa0IsQUFDbkMsaUJBREk7O21CQVFSOzsrQkFBQSxBQUFPLFVBcEJKLEFBb0JILEFBQWlCO2dDQXBCZDtBQUFBOzttQkFBQTtnQ0FBQTtnREFzQkY7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUF0QjVCLEFBc0JGLEFBQWMsQUFBb0I7O21CQUVyQztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQXhCWCxBQXdCTCxBQUFjLEFBQVc7O21CQXhCcEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkEyQkE7bUJBQ1A7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHNDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtlQUZGLEFBRVEsQUFDTjt1QkFIRixBQUdnQixBQUNkO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQUFwRCxBQUFTLEFBQWMsQUFBb0M7QUFKdkU7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw0QkFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFTLE1BQUEsQUFBTSxPQUF4QyxBQUFTLEFBQWMsQUFBd0I7QUFGM0Q7O29CQUFBO3NCQVpKLEFBVUUsQUFFRSxBQUtGO0FBTEU7QUFDRSwyQkFJSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxrQ0FBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxlQUFlLE1BQUEsQUFBTSxPQUE5QyxBQUFTLEFBQWMsQUFBOEI7QUFGakU7O29CQUFBO3NCQW5CSixBQWlCRSxBQUVFLEFBS0Y7QUFMRTtBQUNFLDJCQUlKLEFBQUM7cUJBQUQsQUFDYyxBQUNaO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsYUFBYSxNQUFBLEFBQU0sT0FBNUMsQUFBUyxBQUFjLEFBQTRCO0FBRi9EOztvQkFBQTtzQkF4QkYsQUF3QkUsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7b0JBSHRCO3NCQTdCRixBQTZCRSxBQUtBO0FBTEE7QUFDRSwwQkFJRixBQUFDLHlDQUFPLE9BQU8sRUFBQyxhQUFoQixBQUFlLEFBQWMsVUFBUSxTQUFTLEtBQUEsQUFBSyxNQUFuRCxBQUF5RCxTQUFTLFNBQWxFO29CQUFBO3NCQUFBO0FBQUE7U0FyQ04sQUFDRSxBQUVFLEFBa0NFLEFBSVA7Ozs7O0FBL0V1QixBLEFBa0YxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQm9qYW4vcHJvamVjdHMvRXRoZXJ1bS9zbWFydGtpY2sifQ==