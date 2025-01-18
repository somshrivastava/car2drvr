"use client";
import {
  Tooltip
} from "./chunk-LJPGVKRI.js";
import "./chunk-IPYILTUR.js";
import {
  IconBase,
  Ripple
} from "./chunk-3N2NOHTJ.js";
import {
  ComponentBase,
  useHandleStyle,
  useMergeProps
} from "./chunk-MX24FRQG.js";
import {
  IconUtils,
  ObjectUtils,
  PrimeReactContext,
  classNames
} from "./chunk-A46AQZYT.js";
import {
  require_react
} from "./chunk-4SFRHSJ3.js";
import {
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/primereact/button/button.esm.js
var React2 = __toESM(require_react());

// node_modules/primereact/icons/spinner/index.esm.js
var React = __toESM(require_react());
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var SpinnerIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }));
}));
SpinnerIcon.displayName = "SpinnerIcon";

// node_modules/primereact/button/button.esm.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var classes$1 = {
  root: function root(_ref) {
    var props = _ref.props;
    return classNames("p-badge p-component", _defineProperty({
      "p-badge-no-gutter": ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
      "p-badge-dot": ObjectUtils.isEmpty(props.value),
      "p-badge-lg": props.size === "large",
      "p-badge-xl": props.size === "xlarge"
    }, "p-badge-".concat(props.severity), props.severity !== null));
  }
};
var styles = "\n@layer primereact {\n    .p-badge {\n        display: inline-block;\n        border-radius: 10px;\n        text-align: center;\n        padding: 0 .5rem;\n    }\n    \n    .p-overlay-badge {\n        position: relative;\n    }\n    \n    .p-overlay-badge .p-badge {\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(50%,-50%);\n        transform-origin: 100% 0;\n        margin: 0;\n    }\n    \n    .p-badge-dot {\n        width: .5rem;\n        min-width: .5rem;\n        height: .5rem;\n        border-radius: 50%;\n        padding: 0;\n    }\n    \n    .p-badge-no-gutter {\n        padding: 0;\n        border-radius: 50%;\n    }\n}\n";
var BadgeBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Badge",
    __parentMetadata: null,
    value: null,
    severity: null,
    size: null,
    style: null,
    className: null,
    children: void 0
  },
  css: {
    classes: classes$1,
    styles
  }
});
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Badge = React2.memo(React2.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React2.useContext(PrimeReactContext);
  var props = BadgeBase.getProps(inProps, context);
  var _BadgeBase$setMetaDat = BadgeBase.setMetaData(_objectSpread$1({
    props
  }, props.__parentMetadata)), ptm = _BadgeBase$setMetaDat.ptm, cx = _BadgeBase$setMetaDat.cx, isUnstyled = _BadgeBase$setMetaDat.isUnstyled;
  useHandleStyle(BadgeBase.css.styles, isUnstyled, {
    name: "badge"
  });
  var elementRef = React2.useRef(null);
  React2.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = mergeProps({
    ref: elementRef,
    style: props.style,
    className: classNames(props.className, cx("root"))
  }, BadgeBase.getOtherProps(props), ptm("root"));
  return React2.createElement("span", rootProps, props.value);
}));
Badge.displayName = "Badge";
var classes = {
  icon: function icon(_ref) {
    var props = _ref.props;
    return classNames("p-button-icon p-c", _defineProperty({}, "p-button-icon-".concat(props.iconPos), props.label));
  },
  loadingIcon: function loadingIcon(_ref2) {
    var props = _ref2.props, className = _ref2.className;
    return classNames(className, {
      "p-button-loading-icon": props.loading
    });
  },
  label: "p-button-label p-c",
  root: function root2(_ref3) {
    var props = _ref3.props, size = _ref3.size, disabled = _ref3.disabled;
    return classNames("p-button p-component", _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      "p-button-icon-only": (props.icon || props.loading) && !props.label && !props.children,
      "p-button-vertical": (props.iconPos === "top" || props.iconPos === "bottom") && props.label,
      "p-disabled": disabled,
      "p-button-loading": props.loading,
      "p-button-outlined": props.outlined,
      "p-button-raised": props.raised,
      "p-button-link": props.link,
      "p-button-text": props.text,
      "p-button-rounded": props.rounded,
      "p-button-loading-label-only": props.loading && !props.icon && props.label
    }, "p-button-loading-".concat(props.iconPos), props.loading && props.label), "p-button-".concat(size), size), "p-button-".concat(props.severity), props.severity), "p-button-plain", props.plain));
  }
};
var ButtonBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Button",
    __parentMetadata: null,
    badge: null,
    badgeClassName: null,
    className: null,
    children: void 0,
    disabled: false,
    icon: null,
    iconPos: "left",
    label: null,
    link: false,
    loading: false,
    loadingIcon: null,
    outlined: false,
    plain: false,
    raised: false,
    rounded: false,
    severity: null,
    size: null,
    text: false,
    tooltip: null,
    tooltipOptions: null,
    visible: true
  },
  css: {
    classes
  }
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Button = React2.memo(React2.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React2.useContext(PrimeReactContext);
  var props = ButtonBase.getProps(inProps, context);
  var disabled = props.disabled || props.loading;
  var metaData = _objectSpread(_objectSpread({
    props
  }, props.__parentMetadata), {}, {
    context: {
      disabled
    }
  });
  var _ButtonBase$setMetaDa = ButtonBase.setMetaData(metaData), ptm = _ButtonBase$setMetaDa.ptm, cx = _ButtonBase$setMetaDa.cx, isUnstyled = _ButtonBase$setMetaDa.isUnstyled;
  useHandleStyle(ButtonBase.css.styles, isUnstyled, {
    name: "button",
    styled: true
  });
  var elementRef = React2.useRef(ref);
  React2.useEffect(function() {
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  if (props.visible === false) {
    return null;
  }
  var createIcon = function createIcon2() {
    var className = classNames("p-button-icon p-c", _defineProperty({}, "p-button-icon-".concat(props.iconPos), props.label));
    var iconsProps = mergeProps({
      className: cx("icon")
    }, ptm("icon"));
    className = classNames(className, {
      "p-button-loading-icon": props.loading
    });
    var loadingIconProps = mergeProps({
      className: cx("loadingIcon", {
        className
      })
    }, ptm("loadingIcon"));
    var icon3 = props.loading ? props.loadingIcon || React2.createElement(SpinnerIcon, _extends2({}, loadingIconProps, {
      spin: true
    })) : props.icon;
    return IconUtils.getJSXIcon(icon3, _objectSpread({}, iconsProps), {
      props
    });
  };
  var createLabel = function createLabel2() {
    var labelProps = mergeProps({
      className: cx("label")
    }, ptm("label"));
    if (props.label) {
      return React2.createElement("span", labelProps, props.label);
    }
    return !props.children && !props.label && React2.createElement("span", _extends2({}, labelProps, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    }));
  };
  var createBadge = function createBadge2() {
    if (props.badge) {
      var badgeProps = mergeProps({
        className: classNames(props.badgeClassName),
        value: props.badge,
        unstyled: props.unstyled,
        __parentMetadata: {
          parent: metaData
        }
      }, ptm("badge"));
      return React2.createElement(Badge, badgeProps, props.badge);
    }
    return null;
  };
  var showTooltip = !disabled || props.tooltipOptions && props.tooltipOptions.showOnDisabled;
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip) && showTooltip;
  var sizeMapping = {
    large: "lg",
    small: "sm"
  };
  var size = sizeMapping[props.size];
  var icon2 = createIcon();
  var label = createLabel();
  var badge = createBadge();
  var defaultAriaLabel = props.label ? props.label + (props.badge ? " " + props.badge : "") : props["aria-label"];
  var rootProps = mergeProps({
    ref: elementRef,
    "aria-label": defaultAriaLabel,
    "data-pc-autofocus": props.autoFocus,
    className: classNames(props.className, cx("root", {
      size,
      disabled
    })),
    disabled
  }, ButtonBase.getOtherProps(props), ptm("root"));
  return React2.createElement(React2.Fragment, null, React2.createElement("button", rootProps, icon2, label, props.children, badge, React2.createElement(Ripple, null)), hasTooltip && React2.createElement(Tooltip, _extends2({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
Button.displayName = "Button";
export {
  Button
};
//# sourceMappingURL=primereact_button.js.map
