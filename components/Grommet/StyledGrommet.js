"use strict";

exports.__esModule = true;
exports.StyledGrommet = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _styles = require("../../styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var fullStyle = (0, _styledComponents.css)(["width:100vw;height:100vh;overflow:auto;"]);

var StyledGrommet = _styledComponents.default.div.withConfig({
  displayName: "StyledGrommet",
  componentId: "sc-19lkkz7-0"
})(["", " ", " ", " ", " ", ""], function (props) {
  return !props.plain && _styles.baseStyle;
}, function (props) {
  return !props.plain && props.theme.global.colors.background && (0, _styledComponents.css)(["background:", ";color:", ";"], (0, _utils.normalizeColor)('background', props.theme, true), (0, _utils.normalizeColor)('text', props.theme, true));
}, function (props) {
  return props.full && fullStyle;
}, function (props) {
  return props.theme.global.font.face;
}, function (props) {
  return props.theme.grommet.extend;
});

exports.StyledGrommet = StyledGrommet;