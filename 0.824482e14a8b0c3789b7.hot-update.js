webpackHotUpdate(0,{

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Item = __webpack_require__(246);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// const defaultItems = [
	//   {
	//     index: 1,
	//     title: 'Book',
	//     count: '0',
	//     price: '30 $',
	//     infoText: 'A book is a set of written, printed, illustrated, or blank sheets, made of ink, paper, parchment, or other materials, fastened together to hinge at one side. A single sheet within a book is a leaf, and each side of a leaf is a page. A set of text-filled or illustrated pages produced in electronic format is known as an electronic book, or e-book.',
	//   },
	
	//   {
	//     index: 2,
	//     title: 'Board Game',
	//     count: '3',
	//     price: '10 $',
	//     infoText: 'A board game is a tabletop game that involves counters or pieces moved or placed on a pre-marked surface or "board", according to a set of rules. Some games are based on pure strategy, but many contain an element of chance; and some are purely chance, with no element of skill.',
	//   },
	
	//   {
	//     index: 3,
	//     title: 'Keyboard',
	//     count: '5',
	//     price: '45 $',
	//     infoText: 'In computing, a computer keyboard is a typewriter-style device which uses an arrangement of buttons or keys to act as a mechanical lever or electronic switch. Following the decline of punch cards and paper tape, interaction via teleprinter-style keyboards became the main input device for computers.',
	//   },
	
	//   {
	//     index: 4,
	//     title: 'Tea',
	//     count: '10', 
	//     price: '2 $',
	//     infoText: 'Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub native to Asia.[3] After water, it is the most widely consumed drink in the world.[4] There are many different types of tea; some teas, like Darjeeling and Chinese greens, have a cooling, slightly bitter, and astringent flavour,[5] while others have vastly different profiles that include sweet, nutty, floral or grassy notes.',
	//   },
	
	//   {
	//     index: 5,
	//     title: 'LCD Monitor',
	//     count: '1',
	//     price: '300 $',
	//     infoText: 'A liquid-crystal display (LCD) is a flat-panel display or other electronic visual display that uses the light-modulating properties of liquid crystals. Liquid crystals do not emit light directly.[1]',
	//   }
	
	// ];
	
	var Item = function (_React$Component) {
		_inherits(Item, _React$Component);
	
		function Item(props) {
			_classCallCheck(this, Item);
	
			// http://localhost/lyokha/react_test/
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));
	
			_this.serverRequest = $.get(_this.props.source, function (result) {
				var lastGist = result[0];
				this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				});
			}.bind(_this));
	
			_this.state = {
				defaultItems: defaultItems
			};
			return _this;
		}
	
		_createClass(Item, [{
			key: 'defaultItems',
			value: function defaultItems() {
	
				var itemsList = this.state.defaultItems.map(function (item, index) {
					return _react2.default.createElement(_Item2.default, { key: item.index, item: item });
				});
	
				return itemsList;
			}
		}, {
			key: 'render',
			value: function render() {
	
				return _react2.default.createElement(
					'table',
					{ className: 'table table-hover table_items' },
					_react2.default.createElement(
						'thead',
						{ id: 'added_item_wrap' },
						_react2.default.createElement(
							'tr',
							null,
							_react2.default.createElement(
								'th',
								null,
								'#'
							),
							_react2.default.createElement(
								'th',
								null,
								'Title'
							),
							_react2.default.createElement(
								'th',
								null,
								'Count'
							),
							_react2.default.createElement(
								'th',
								null,
								'Price'
							)
						)
					),
					_react2.default.createElement(
						'tbody',
						null,
						this.defaultItems()
					)
				);
			}
		}]);
	
		return Item;
	}(_react2.default.Component);
	
	exports.default = Item;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZDcUIsSTs7O0FBQ3BCLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7OztBQUFBLHVGQUNaLEtBRFk7O0FBUWxCLFNBQUssYUFBTCxHQUFxQixFQUFFLEdBQUYsQ0FBTSxNQUFLLEtBQUwsQ0FBVyxNQUFqQixFQUF5QixVQUFVLE1BQVYsRUFBa0I7QUFDOUQsUUFBSSxXQUFXLE9BQU8sQ0FBUCxDQUFmO0FBQ0EsU0FBSyxRQUFMLENBQWM7QUFDWixlQUFVLFNBQVMsS0FBVCxDQUFlLEtBRGI7QUFFWixrQkFBYSxTQUFTO0FBRlYsS0FBZDtBQUlELElBTjZDLENBTTVDLElBTjRDLE9BQXpCLENBQXJCOztBQVNBLFNBQUssS0FBTCxHQUFhO0FBQ1o7QUFEWSxJQUFiO0FBakJrQjtBQW9CbEI7Ozs7a0NBRWM7O0FBRWQsUUFBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsR0FBeEIsQ0FBNEIsVUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQjtBQUNuRSxZQUFTLGdEQUFVLEtBQU0sS0FBSyxLQUFyQixFQUE2QixNQUFPLElBQXBDLEdBQVQ7QUFDQSxLQUZpQixDQUFsQjs7QUFJQSxXQUFPLFNBQVA7QUFDQTs7OzRCQUVROztBQUVSLFdBQ0M7QUFBQTtLQUFBLEVBQU8sV0FBTSwrQkFBYjtLQUNDO0FBQUE7TUFBQSxFQUFPLElBQUcsaUJBQVY7TUFDQztBQUFBO09BQUE7T0FDQztBQUFBO1FBQUE7UUFBQTtBQUFBLFFBREQ7T0FFQztBQUFBO1FBQUE7UUFBQTtBQUFBLFFBRkQ7T0FHQztBQUFBO1FBQUE7UUFBQTtBQUFBLFFBSEQ7T0FJQztBQUFBO1FBQUE7UUFBQTtBQUFBO0FBSkQ7QUFERCxNQUREO0tBVUM7QUFBQTtNQUFBO01BQ0csS0FBSyxZQUFMO0FBREg7QUFWRCxLQUREO0FBZ0JBOzs7O0dBbERnQyxnQkFBTSxTOzttQkFBbkIsSSIsImZpbGUiOiIwLjgyNDQ4MmUxNGE4YjBjMzc4OWI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbVNob3cgZnJvbSAnLi9JdGVtJztcclxuXHJcbi8vIGNvbnN0IGRlZmF1bHRJdGVtcyA9IFtcclxuLy8gICB7XHJcbi8vICAgICBpbmRleDogMSxcclxuLy8gICAgIHRpdGxlOiAnQm9vaycsXHJcbi8vICAgICBjb3VudDogJzAnLFxyXG4vLyAgICAgcHJpY2U6ICczMCAkJyxcclxuLy8gICAgIGluZm9UZXh0OiAnQSBib29rIGlzIGEgc2V0IG9mIHdyaXR0ZW4sIHByaW50ZWQsIGlsbHVzdHJhdGVkLCBvciBibGFuayBzaGVldHMsIG1hZGUgb2YgaW5rLCBwYXBlciwgcGFyY2htZW50LCBvciBvdGhlciBtYXRlcmlhbHMsIGZhc3RlbmVkIHRvZ2V0aGVyIHRvIGhpbmdlIGF0IG9uZSBzaWRlLiBBIHNpbmdsZSBzaGVldCB3aXRoaW4gYSBib29rIGlzIGEgbGVhZiwgYW5kIGVhY2ggc2lkZSBvZiBhIGxlYWYgaXMgYSBwYWdlLiBBIHNldCBvZiB0ZXh0LWZpbGxlZCBvciBpbGx1c3RyYXRlZCBwYWdlcyBwcm9kdWNlZCBpbiBlbGVjdHJvbmljIGZvcm1hdCBpcyBrbm93biBhcyBhbiBlbGVjdHJvbmljIGJvb2ssIG9yIGUtYm9vay4nLFxyXG4vLyAgIH0sIFxyXG5cclxuLy8gICB7XHJcbi8vICAgICBpbmRleDogMixcclxuLy8gICAgIHRpdGxlOiAnQm9hcmQgR2FtZScsXHJcbi8vICAgICBjb3VudDogJzMnLFxyXG4vLyAgICAgcHJpY2U6ICcxMCAkJyxcclxuLy8gICAgIGluZm9UZXh0OiAnQSBib2FyZCBnYW1lIGlzIGEgdGFibGV0b3AgZ2FtZSB0aGF0IGludm9sdmVzIGNvdW50ZXJzIG9yIHBpZWNlcyBtb3ZlZCBvciBwbGFjZWQgb24gYSBwcmUtbWFya2VkIHN1cmZhY2Ugb3IgXCJib2FyZFwiLCBhY2NvcmRpbmcgdG8gYSBzZXQgb2YgcnVsZXMuIFNvbWUgZ2FtZXMgYXJlIGJhc2VkIG9uIHB1cmUgc3RyYXRlZ3ksIGJ1dCBtYW55IGNvbnRhaW4gYW4gZWxlbWVudCBvZiBjaGFuY2U7IGFuZCBzb21lIGFyZSBwdXJlbHkgY2hhbmNlLCB3aXRoIG5vIGVsZW1lbnQgb2Ygc2tpbGwuJyxcclxuLy8gICB9LFxyXG5cclxuLy8gICB7XHJcbi8vICAgICBpbmRleDogMyxcclxuLy8gICAgIHRpdGxlOiAnS2V5Ym9hcmQnLFxyXG4vLyAgICAgY291bnQ6ICc1JyxcclxuLy8gICAgIHByaWNlOiAnNDUgJCcsXHJcbi8vICAgICBpbmZvVGV4dDogJ0luIGNvbXB1dGluZywgYSBjb21wdXRlciBrZXlib2FyZCBpcyBhIHR5cGV3cml0ZXItc3R5bGUgZGV2aWNlIHdoaWNoIHVzZXMgYW4gYXJyYW5nZW1lbnQgb2YgYnV0dG9ucyBvciBrZXlzIHRvIGFjdCBhcyBhIG1lY2hhbmljYWwgbGV2ZXIgb3IgZWxlY3Ryb25pYyBzd2l0Y2guIEZvbGxvd2luZyB0aGUgZGVjbGluZSBvZiBwdW5jaCBjYXJkcyBhbmQgcGFwZXIgdGFwZSwgaW50ZXJhY3Rpb24gdmlhIHRlbGVwcmludGVyLXN0eWxlIGtleWJvYXJkcyBiZWNhbWUgdGhlIG1haW4gaW5wdXQgZGV2aWNlIGZvciBjb21wdXRlcnMuJyxcclxuLy8gICB9LFxyXG5cclxuLy8gICB7XHJcbi8vICAgICBpbmRleDogNCxcclxuLy8gICAgIHRpdGxlOiAnVGVhJyxcclxuLy8gICAgIGNvdW50OiAnMTAnLCAgXHJcbi8vICAgICBwcmljZTogJzIgJCcsXHJcbi8vICAgICBpbmZvVGV4dDogJ1RlYSBpcyBhbiBhcm9tYXRpYyBiZXZlcmFnZSBjb21tb25seSBwcmVwYXJlZCBieSBwb3VyaW5nIGhvdCBvciBib2lsaW5nIHdhdGVyIG92ZXIgY3VyZWQgbGVhdmVzIG9mIHRoZSBDYW1lbGxpYSBzaW5lbnNpcywgYW4gZXZlcmdyZWVuIHNocnViIG5hdGl2ZSB0byBBc2lhLlszXSBBZnRlciB3YXRlciwgaXQgaXMgdGhlIG1vc3Qgd2lkZWx5IGNvbnN1bWVkIGRyaW5rIGluIHRoZSB3b3JsZC5bNF0gVGhlcmUgYXJlIG1hbnkgZGlmZmVyZW50IHR5cGVzIG9mIHRlYTsgc29tZSB0ZWFzLCBsaWtlIERhcmplZWxpbmcgYW5kIENoaW5lc2UgZ3JlZW5zLCBoYXZlIGEgY29vbGluZywgc2xpZ2h0bHkgYml0dGVyLCBhbmQgYXN0cmluZ2VudCBmbGF2b3VyLFs1XSB3aGlsZSBvdGhlcnMgaGF2ZSB2YXN0bHkgZGlmZmVyZW50IHByb2ZpbGVzIHRoYXQgaW5jbHVkZSBzd2VldCwgbnV0dHksIGZsb3JhbCBvciBncmFzc3kgbm90ZXMuJyxcclxuLy8gICB9LFxyXG5cclxuLy8gICB7XHJcbi8vICAgICBpbmRleDogNSxcclxuLy8gICAgIHRpdGxlOiAnTENEIE1vbml0b3InLFxyXG4vLyAgICAgY291bnQ6ICcxJyxcclxuLy8gICAgIHByaWNlOiAnMzAwICQnLFxyXG4vLyAgICAgaW5mb1RleHQ6ICdBIGxpcXVpZC1jcnlzdGFsIGRpc3BsYXkgKExDRCkgaXMgYSBmbGF0LXBhbmVsIGRpc3BsYXkgb3Igb3RoZXIgZWxlY3Ryb25pYyB2aXN1YWwgZGlzcGxheSB0aGF0IHVzZXMgdGhlIGxpZ2h0LW1vZHVsYXRpbmcgcHJvcGVydGllcyBvZiBsaXF1aWQgY3J5c3RhbHMuIExpcXVpZCBjcnlzdGFscyBkbyBub3QgZW1pdCBsaWdodCBkaXJlY3RseS5bMV0nLFxyXG4vLyAgIH1cclxuXHJcbi8vIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHJcbi8vIGh0dHA6Ly9sb2NhbGhvc3QvbHlva2hhL3JlYWN0X3Rlc3QvXHJcblxyXG5cclxuXHJcbiAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gJC5nZXQodGhpcy5wcm9wcy5zb3VyY2UsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHZhciBsYXN0R2lzdCA9IHJlc3VsdFswXTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB1c2VybmFtZTogbGFzdEdpc3Qub3duZXIubG9naW4sXHJcbiAgICAgIGxhc3RHaXN0VXJsOiBsYXN0R2lzdC5odG1sX3VybFxyXG4gICAgfSk7XHJcbiAgfS5iaW5kKHRoaXMpKTtcclxuXHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0ZGVmYXVsdEl0ZW1zXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0ZGVmYXVsdEl0ZW1zKCkge1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zTGlzdCA9IHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gKCA8SXRlbVNob3cga2V5PXsgaXRlbS5pbmRleCB9IGl0ZW09eyBpdGVtIH0vPiApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGl0ZW1zTGlzdDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZV9pdGVtc1wiPlxyXG5cdFx0XHRcdDx0aGVhZCBpZD1cImFkZGVkX2l0ZW1fd3JhcFwiPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IzwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5UaXRsZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5Db3VudDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QcmljZTwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHsgdGhpcy5kZWZhdWx0SXRlbXMoKSB9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdCk7XHJcblx0fVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9