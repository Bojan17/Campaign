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

var _semanticUiReact = require('semantic-ui-react');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Bojan\\projects\\Etherum\\smartkick\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      //rendering campaings and styling them with semantic
      /*const items  = this.props.campaigns.map( address => {
          return {
            header: address,
            description: (
              <Link route={`/campaigns/${address}`}>
                <a>View Campaign</a>
              </Link>
            ),
            fluid: true
          };
      });
        return <Card.Group items={items} />; */
      var items = this.props.list.map(function (idea) {
        return {
          header: idea.campaign_name,
          description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + idea.wallet, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, 'View Campaign')),
          meta: idea.manager,
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Open campaigns'), _react2.default.createElement(_routes.Link, { route: 'campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Campaign',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',

    //load list of campaings on server side
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns, res, list;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 3:
                campaigns = _context.sent;
                _context.next = 6;
                return _axios2.default.get('http://localhost:3000/api/campaigns');

              case 6:
                res = _context.sent;

                //return props
                list = res.data;

                console.log(list);
                return _context.abrupt('return', { campaigns: campaigns, list: list });

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJheGlvcyIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJsaXN0IiwibWFwIiwiaGVhZGVyIiwiaWRlYSIsImNhbXBhaWduX25hbWUiLCJkZXNjcmlwdGlvbiIsIndhbGxldCIsIm1ldGEiLCJtYW5hZ2VyIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiY2FtcGFpZ25zIiwiZ2V0IiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7O3NDQWdCYyxBQUNoQjtBQUNBO0FBYUE7Ozs7Ozs7Ozs7OztVQUFNLGFBQVMsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixJQUFLLGdCQUFRLEFBQ3hDOztrQkFDVSxLQURILEFBQ1EsQUFDYjt1Q0FDRSxBQUFDLDhCQUFLLHVCQUFxQixLQUEzQixBQUFnQzt3QkFBaEM7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7Z0JBQU0sS0FQRCxBQU9NLEFBQ1g7aUJBUkYsQUFBTyxBQVFFLEFBRVo7QUFWVSxBQUNMO0FBRk4sQUFBZSxBQWFmLE9BYmU7OzJDQWFSLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFHUjtBQUhRO09BQUE7Ozs7NkJBTUEsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGOztvQkFBQTtzQkFKTixBQUVFLEFBQ0UsQUFDRSxBQVFIO0FBUkc7QUFDRSxpQkFQWixBQUNFLEFBQ0UsQUFZRyxBQUFLLEFBSWI7OztTQXBFRDs7Ozs7Ozs7Ozs7O3VCQUc0QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF6RDtBOzt1QkFDWSxnQkFBQSxBQUFNLEksQUFBTixBQUFVOzttQkFBdEI7QSwrQkFDTjs7QUFDTTtBLHVCQUFPLElBQUksQSxBQUNqQjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxXQUFGLFdBQWEsTUFBYixBOzs7O2dEQUVQOzt3QkFBQSxBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWGMsQSxBQXdFNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQm9qYW4vcHJvamVjdHMvRXRoZXJ1bS9zbWFydGtpY2sifQ==