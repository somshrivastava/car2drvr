"use client";
import {
  IconBase,
  Ripple
} from "./chunk-3N2NOHTJ.js";
import {
  ComponentBase,
  useEventListener,
  useHandleStyle,
  useMergeProps,
  useMountEffect,
  useResizeListener,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-MX24FRQG.js";
import {
  DomHandler,
  IconUtils,
  ObjectUtils,
  PrimeReact,
  PrimeReactContext,
  UniqueComponentId,
  ZIndexUtils,
  ariaLabel,
  classNames
} from "./chunk-A46AQZYT.js";
import {
  require_react
} from "./chunk-4SFRHSJ3.js";
import {
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/primereact/menubar/menubar.esm.js
var React4 = __toESM(require_react());

// node_modules/primereact/icons/bars/index.esm.js
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
var BarsIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",
    fill: "currentColor"
  }));
}));
BarsIcon.displayName = "BarsIcon";

// node_modules/primereact/icons/angledown/index.esm.js
var React2 = __toESM(require_react());
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
var AngleDownIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("path", {
    d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
    fill: "currentColor"
  }));
}));
AngleDownIcon.displayName = "AngleDownIcon";

// node_modules/primereact/icons/angleright/index.esm.js
var React3 = __toESM(require_react());
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends3.apply(this, arguments);
}
var AngleRightIcon = React3.memo(React3.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React3.createElement("svg", _extends3({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React3.createElement("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }));
}));
AngleRightIcon.displayName = "AngleRightIcon";

// node_modules/primereact/menubar/menubar.esm.js
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
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var classes = {
  start: "p-menubar-start",
  end: "p-menubar-end",
  button: "p-menubar-button",
  root: function root(_ref) {
    var mobileActiveState = _ref.mobileActiveState;
    return classNames("p-menubar p-component", {
      "p-menubar-mobile-active": mobileActiveState
    });
  },
  separator: "p-menuitem-separator",
  icon: "p-menuitem-icon",
  label: "p-menuitem-text",
  submenuIcon: "p-submenu-icon",
  menuitem: function menuitem(_ref2) {
    var active = _ref2.active, focused = _ref2.focused, disabled = _ref2.disabled;
    return classNames("p-menuitem", {
      "p-menuitem-active p-highlight": active,
      "p-focus": focused,
      "p-disabled": disabled
    });
  },
  menu: "p-menubar-root-list",
  content: "p-menuitem-content",
  submenu: "p-submenu-list",
  action: function action(_ref3) {
    var disabled = _ref3.disabled;
    return classNames("p-menuitem-link", {
      "p-disabled": disabled
    });
  }
};
var styles = "\n@layer primereact {\n    .p-menubar {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-menubar ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    .p-menubar .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n\n    .p-menubar .p-menuitem-text {\n        line-height: 1;\n    }\n\n    .p-menubar .p-menuitem {\n        position: relative;\n    }\n\n    .p-menubar-root-list {\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n    }\n\n    .p-menubar-root-list > li ul {\n        display: none;\n        z-index: 1;\n    }\n\n    .p-menubar-root-list > .p-menuitem-active > .p-submenu-list {\n        display: block;\n    }\n\n    .p-menubar .p-submenu-list {\n        display: none;\n        position: absolute;\n        z-index: 5;\n    }\n\n    .p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {\n        display: block;\n        left: 100%;\n        top: 0;\n    }\n\n    .p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {\n        margin-left: auto;\n    }\n\n    .p-menubar .p-menubar-end {\n        margin-left: auto;\n        align-self: center;\n    }\n\n    .p-menubar-button {\n        display: none;\n        cursor: pointer;\n        align-items: center;\n        justify-content: center;\n        text-decoration: none;\n    }\n}\n";
var MenubarBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Menubar",
    id: null,
    model: null,
    style: null,
    className: null,
    start: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    onFocus: null,
    onBlur: null,
    submenuIcon: null,
    menuIcon: null,
    end: null,
    children: void 0
  },
  css: {
    classes,
    styles
  }
});
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends4.apply(this, arguments);
}
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
var MenubarSub = React4.memo(React4.forwardRef(function(props, ref) {
  var mergeProps = useMergeProps();
  var ptm = props.ptm, cx = props.cx;
  var getPTOptions = function getPTOptions2(processedItem, key, index) {
    return ptm(key, {
      props,
      hostName: props.hostName,
      context: {
        item: processedItem,
        index,
        active: isItemActive(processedItem),
        focused: isItemFocused(processedItem),
        disabled: isItemDisabled(processedItem),
        level: props.level
      }
    });
  };
  var onItemMouseEnter = function onItemMouseEnter2(event, item) {
    if (isItemDisabled(item) || props.mobileActive) {
      event.preventDefault();
      return;
    }
    props.onItemMouseEnter && props.onItemMouseEnter({
      originalEvent: event,
      processedItem: item
    });
  };
  var onItemClick = function onItemClick2(event, processedItem) {
    var item = processedItem.item;
    if (isItemDisabled(processedItem)) {
      event.preventDefault();
      return;
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    onLeafClick({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
    if (!item.url) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  var onLeafClick = function onLeafClick2(event) {
    props.onLeafClick && props.onLeafClick(event);
  };
  var getItemId = function getItemId2(processedItem) {
    var _processedItem$item;
    return (_processedItem$item = processedItem.item) === null || _processedItem$item === void 0 ? void 0 : _processedItem$item.id;
  };
  var getItemDataId = function getItemDataId2(processedItem) {
    return "".concat(props.id, "_").concat(processedItem.key);
  };
  var getItemProp = function getItemProp2(processedItem, name, params) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  };
  var isItemActive = function isItemActive2(processedItem) {
    return props.activeItemPath.some(function(path) {
      return path.key === processedItem.key;
    });
  };
  var isItemVisible = function isItemVisible2(processedItem) {
    return getItemProp(processedItem, "visible") !== false;
  };
  var isItemDisabled = function isItemDisabled2(processedItem) {
    return getItemProp(processedItem, "disabled");
  };
  var isItemFocused = function isItemFocused2(processedItem) {
    return props.focusedItemId === getItemDataId(processedItem);
  };
  var isItemGroup = function isItemGroup2(processedItem) {
    return ObjectUtils.isNotEmpty(processedItem.items);
  };
  var getAriaSetSize = function getAriaSetSize2() {
    return props.model.filter(function(processedItem) {
      return isItemVisible(processedItem) && !getItemProp(processedItem, "separator");
    }).length;
  };
  var getAriaPosInset = function getAriaPosInset2(index) {
    return index - props.model.slice(0, index).filter(function(processedItem) {
      return isItemVisible(processedItem) && getItemProp(processedItem, "separator");
    }).length + 1;
  };
  var createSeparator = function createSeparator2(processedItem, index) {
    var key = props.id + "_separator_" + index + "_" + processedItem.key;
    var separatorProps = mergeProps({
      "data-id": key,
      className: cx("separator"),
      role: "separator"
    }, ptm("separator", {
      hostName: props.hostName
    }));
    return React4.createElement("li", _extends4({}, separatorProps, {
      key
    }));
  };
  var createSubmenu = function createSubmenu2(processedItem) {
    var items = processedItem && processedItem.items;
    if (items) {
      return React4.createElement(MenubarSub, {
        id: props.id,
        hostName: props.hostName,
        menuProps: props.menuProps,
        level: props.level + 1,
        model: items,
        activeItemPath: props.activeItemPath,
        focusedItemId: props.focusedItemId,
        onLeafClick,
        onItemMouseEnter: props.onItemMouseEnter,
        submenuIcon: props.submenuIcon,
        ptm,
        style: {
          display: isItemActive(processedItem) ? "block" : "none"
        },
        cx
      });
    }
    return null;
  };
  var createMenuitem = function createMenuitem2(processedItem, index) {
    var item = processedItem.item;
    if (!isItemVisible(processedItem)) {
      return null;
    }
    var id = getItemId(processedItem);
    var dataId = getItemDataId(processedItem);
    var active = isItemActive(processedItem);
    var focused = isItemFocused(processedItem);
    var disabled = isItemDisabled(processedItem) || false;
    var group = isItemGroup(processedItem);
    var linkClassName = classNames("p-menuitem-link", {
      "p-disabled": disabled
    });
    var iconClassName = classNames("p-menuitem-icon", getItemProp(processedItem, "icon"));
    var iconProps = mergeProps({
      className: cx("icon")
    }, getPTOptions(processedItem, "icon", index));
    var icon = IconUtils.getJSXIcon(item.icon, _objectSpread$1({}, iconProps), {
      props: props.menuProps
    });
    var labelProps = mergeProps({
      className: cx("label")
    }, getPTOptions(processedItem, "label", index));
    var label = item.label && React4.createElement("span", labelProps, item.label);
    var items = getItemProp(processedItem, "items");
    var submenuIconClassName = "p-submenu-icon";
    var submenuIconProps = mergeProps({
      className: cx("submenuIcon")
    }, getPTOptions(processedItem, "submenuIcon", index));
    var submenuIcon = items && IconUtils.getJSXIcon(!props.root ? props.submenuIcon || React4.createElement(AngleRightIcon, submenuIconProps) : props.submenuIcon || React4.createElement(AngleDownIcon, submenuIconProps), _objectSpread$1({}, submenuIconProps), {
      props: _objectSpread$1({
        menuProps: props.menuProps
      }, props)
    });
    var submenu2 = createSubmenu(processedItem);
    var actionProps = mergeProps({
      href: item.url || "#",
      tabIndex: "-1",
      "aria-hidden": "true",
      className: cx("action", {
        disabled
      }),
      onFocus: function onFocus(event) {
        return event.stopPropagation();
      },
      target: getItemProp(processedItem, "target"),
      "aria-haspopup": items != null
    }, getPTOptions(processedItem, "action", index));
    var content = React4.createElement("a", actionProps, icon, label, submenuIcon, React4.createElement(Ripple, null));
    if (item.template) {
      var defaultContentOptions = {
        className: linkClassName,
        labelClassName: "p-menuitem-text",
        iconClassName,
        submenuIconClassName,
        element: content,
        props
      };
      content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
    }
    var contentProps = mergeProps({
      onClick: function onClick(event) {
        return onItemClick(event, processedItem);
      },
      onMouseEnter: function onMouseEnter(event) {
        return onItemMouseEnter(event, processedItem);
      },
      className: cx("content")
    }, getPTOptions(processedItem, "content", index));
    var itemClassName = getItemProp(processedItem, "className");
    var menuitemProps = mergeProps(_defineProperty({
      id,
      "data-id": dataId,
      role: "menuitem",
      "aria-label": item.label,
      "aria-disabled": disabled,
      "aria-expanded": group ? active : void 0,
      "aria-haspopup": group && !item.url ? "menu" : void 0,
      "aria-level": props.level + 1,
      "aria-setsize": getAriaSetSize(),
      "aria-posinset": getAriaPosInset(index),
      "data-p-highlight": active,
      "data-p-focused": focused,
      "data-p-disabled": disabled,
      className: classNames(itemClassName, cx("menuitem", {
        active,
        focused,
        disabled
      }))
    }, "data-p-disabled", disabled || false), getPTOptions(processedItem, "menuitem", index));
    return React4.createElement("li", _extends4({}, menuitemProps, {
      key: "".concat(dataId)
    }), React4.createElement("div", contentProps, content), submenu2);
  };
  var createItem = function createItem2(processedItem, index) {
    if (processedItem.visible === false) {
      return null;
    }
    return getItemProp(processedItem, "separator") ? createSeparator(processedItem, index) : createMenuitem(processedItem, index);
  };
  var createMenu = function createMenu2() {
    return props.model ? props.model.map(createItem) : null;
  };
  var role = props.root ? "menubar" : "menu";
  var ptKey = props.root ? "menu" : "submenu";
  var tabIndex = props.root ? "0" : null;
  var submenu = createMenu();
  var menuProps = mergeProps({
    ref,
    className: cx(ptKey),
    level: props.level,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onKeyDown: props.onKeyDown,
    "data-id": props.id,
    tabIndex,
    "aria-activedescendant": props.ariaActivedescendant,
    style: props.style,
    role
  }, ptm(ptKey));
  return React4.createElement("ul", menuProps, submenu);
}));
MenubarSub.displayName = "MenubarSub";
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
var Menubar = React4.memo(React4.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React4.useContext(PrimeReactContext);
  var props = MenubarBase.getProps(inProps, context);
  var _React$useState = React4.useState(props.id), _React$useState2 = _slicedToArray(_React$useState, 2), idState = _React$useState2[0], setIdState = _React$useState2[1];
  var _React$useState3 = React4.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), mobileActiveState = _React$useState4[0], setMobileActiveState = _React$useState4[1];
  var _React$useState5 = React4.useState(false), _React$useState6 = _slicedToArray(_React$useState5, 2), focused = _React$useState6[0], setFocused = _React$useState6[1];
  var _React$useState7 = React4.useState({
    index: -1,
    level: 0,
    parentKey: ""
  }), _React$useState8 = _slicedToArray(_React$useState7, 2), focusedItemInfo = _React$useState8[0], setFocusedItemInfo = _React$useState8[1];
  var _React$useState9 = React4.useState(null), _React$useState10 = _slicedToArray(_React$useState9, 2), focusedItemId = _React$useState10[0], setFocusedItemId = _React$useState10[1];
  var _React$useState11 = React4.useState([]), _React$useState12 = _slicedToArray(_React$useState11, 2), activeItemPath = _React$useState12[0], setActiveItemPath = _React$useState12[1];
  var _React$useState13 = React4.useState([]), _React$useState14 = _slicedToArray(_React$useState13, 2), visibleItems = _React$useState14[0], setVisibleItems = _React$useState14[1];
  var _React$useState15 = React4.useState([]), _React$useState16 = _slicedToArray(_React$useState15, 2), processedItems = _React$useState16[0], setProcessedItems = _React$useState16[1];
  var _React$useState17 = React4.useState(false), _React$useState18 = _slicedToArray(_React$useState17, 2), focusTrigger = _React$useState18[0], setFocusTrigger = _React$useState18[1];
  var _React$useState19 = React4.useState(false), _React$useState20 = _slicedToArray(_React$useState19, 2), dirty = _React$useState20[0], setDirty = _React$useState20[1];
  var elementRef = React4.useRef(null);
  var rootMenuRef = React4.useRef(null);
  var menuButtonRef = React4.useRef(null);
  var searchValue = React4.useRef("");
  var searchTimeout = React4.useRef(null);
  var reverseTrigger = React4.useRef(false);
  var _MenubarBase$setMetaD = MenubarBase.setMetaData({
    props,
    state: {
      id: idState,
      mobileActive: mobileActiveState
    }
  }), ptm = _MenubarBase$setMetaD.ptm, cx = _MenubarBase$setMetaD.cx, isUnstyled = _MenubarBase$setMetaD.isUnstyled;
  useHandleStyle(MenubarBase.css.styles, isUnstyled, {
    name: "menubar"
  });
  var _useEventListener = useEventListener({
    type: "click",
    listener: function listener(event) {
      if (isOutsideClicked(event)) {
        var isOutsideContainer = elementRef.current && !elementRef.current.contains(event.target);
        if (isOutsideContainer) {
          hide();
        }
      }
    }
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindOutsideClickListener = _useEventListener2[0], unbindOutsideClickListener = _useEventListener2[1];
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      if (!DomHandler.isTouchDevice()) {
        hide(event);
      }
    }
  }), _useResizeListener2 = _slicedToArray(_useResizeListener, 2), bindResizeListener = _useResizeListener2[0], unbindResizeListener = _useResizeListener2[1];
  var toggle = function toggle2(event) {
    if (mobileActiveState) {
      setMobileActiveState(false);
      hide();
    } else {
      setMobileActiveState(true);
      setTimeout(function() {
        show();
      }, 1);
    }
    event.preventDefault();
  };
  var show = function show2() {
    setFocusedItemInfo({
      index: findFirstFocusedItemIndex(),
      level: 0,
      parentKey: ""
    });
    DomHandler.focus(rootMenuRef.current);
  };
  var hide = function hide2(isFocus) {
    if (mobileActiveState) {
      setMobileActiveState(false);
      setTimeout(function() {
        DomHandler.focus(menuButtonRef.current);
      }, 0);
    }
    setActiveItemPath([]);
    setFocusedItemInfo({
      index: -1,
      level: 0,
      parentKey: ""
    });
    isFocus && DomHandler.focus(rootMenuRef.current);
    setDirty(false);
  };
  var menuButtonKeydown = function menuButtonKeydown2(event) {
    (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") && toggle(event);
  };
  var isOutsideClicked = function isOutsideClicked2(event) {
    return rootMenuRef.current !== event.target && !rootMenuRef.current.contains(event.target) && menuButtonRef.current !== event.target && !menuButtonRef.current.contains(event.target);
  };
  var getItemProp = function getItemProp2(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  };
  var getItemLabel = function getItemLabel2(item) {
    return getItemProp(item, "label");
  };
  var isItemDisabled = function isItemDisabled2(item) {
    return getItemProp(item, "disabled");
  };
  var isItemSeparator = function isItemSeparator2(item) {
    return getItemProp(item, "separator");
  };
  var getProccessedItemLabel = function getProccessedItemLabel2(processedItem) {
    return processedItem ? getItemLabel(processedItem.item) : void 0;
  };
  var isProccessedItemGroup = function isProccessedItemGroup2(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  };
  var onFocus = function onFocus2(event) {
    setFocused(true);
    setFocusedItemInfo(focusedItemInfo.index !== -1 ? focusedItemInfo : {
      index: findFirstFocusedItemIndex(),
      level: 0,
      parentKey: ""
    });
    props.onFocus && props.onFocus(event);
  };
  var onBlur = function onBlur2(event) {
    setFocused(false);
    setFocusedItemInfo({
      index: -1,
      level: 0,
      parentKey: ""
    });
    searchValue.current = "";
    setDirty(false);
    props.onBlur && props.onBlur(event);
  };
  var onKeyDown = function onKeyDown2(event) {
    var metaKey = event.metaKey || event.ctrlKey;
    var code = event.code;
    switch (code) {
      case "ArrowDown":
        onArrowDownKey(event);
        break;
      case "ArrowUp":
        onArrowUpKey(event);
        break;
      case "ArrowLeft":
        onArrowLeftKey(event);
        break;
      case "ArrowRight":
        onArrowRightKey(event);
        break;
      case "Home":
        onHomeKey(event);
        break;
      case "End":
        onEndKey(event);
        break;
      case "Space":
        onSpaceKey(event);
        break;
      case "Enter":
      case "NumpadEnter":
        onEnterKey(event);
        break;
      case "Escape":
        onEscapeKey();
        break;
      case "Tab":
        onTabKey(event);
        break;
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          searchItems(event, event.key);
        }
        break;
    }
  };
  var onItemChange = function onItemChange2(event) {
    var processedItem = event.processedItem, isFocus = event.isFocus;
    if (ObjectUtils.isEmpty(processedItem)) {
      return;
    }
    var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey, items = processedItem.items;
    var grouped = ObjectUtils.isNotEmpty(items);
    var _activeItemPath = activeItemPath.filter(function(p) {
      return p.parentKey !== parentKey && p.parentKey !== key;
    });
    grouped && _activeItemPath.push(processedItem);
    setFocusedItemInfo({
      index,
      level,
      parentKey
    });
    setActiveItemPath(_activeItemPath);
    grouped && setDirty(true);
    isFocus && DomHandler.focus(rootMenuRef.current);
  };
  var onItemClick = function onItemClick2(event) {
    var originalEvent = event.originalEvent, processedItem = event.processedItem;
    var grouped = isProccessedItemGroup(processedItem);
    var root2 = ObjectUtils.isEmpty(processedItem.parent);
    var selected = isSelected(processedItem);
    if (selected) {
      var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey;
      setActiveItemPath(activeItemPath.filter(function(p) {
        return key !== p.key && key.startsWith(p.key);
      }));
      setFocusedItemInfo({
        index,
        level,
        parentKey
      });
      if (!grouped) {
        setDirty(!root2);
      }
      setTimeout(function() {
        DomHandler.focus(rootMenuRef.current);
        if (grouped) {
          setDirty(true);
        }
      }, 0);
    } else if (grouped) {
      DomHandler.focus(rootMenuRef.current);
      onItemChange({
        originalEvent,
        processedItem
      });
    } else {
      var rootProcessedItem = root2 ? processedItem : activeItemPath.find(function(p) {
        return p.parentKey === "";
      });
      var rootProcessedItemIndex = rootProcessedItem ? rootProcessedItem.index : -1;
      hide(originalEvent);
      setFocusedItemInfo({
        index: rootProcessedItemIndex,
        parentKey: rootProcessedItem ? rootProcessedItem.parentKey : ""
      });
      setMobileActiveState(false);
    }
  };
  var onItemMouseEnter = function onItemMouseEnter2(event) {
    if (!mobileActiveState && dirty) {
      onItemChange(event);
    }
  };
  var onArrowDownKey = function onArrowDownKey2(event) {
    var processedItem = visibleItems[focusedItemInfo.index];
    var root2 = processedItem ? ObjectUtils.isEmpty(processedItem.parent) : null;
    if (root2) {
      var grouped = isProccessedItemGroup(processedItem);
      if (grouped) {
        onItemChange({
          originalEvent: event,
          processedItem
        });
        setFocusedItemInfo({
          index: -1,
          parentKey: processedItem.key
        });
        setTimeout(function() {
          return setFocusTrigger(true);
        }, 0);
      }
    } else {
      var itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();
      changeFocusedItemIndex(itemIndex);
    }
    event.preventDefault();
  };
  var onArrowUpKey = function onArrowUpKey2(event) {
    var processedItem = visibleItems[focusedItemInfo.index];
    var root2 = ObjectUtils.isEmpty(processedItem.parent);
    if (root2) {
      var grouped = isProccessedItemGroup(processedItem);
      if (grouped) {
        onItemChange({
          originalEvent: event,
          processedItem
        });
        setFocusedItemInfo({
          index: -1,
          parentKey: processedItem.key
        });
        reverseTrigger.current = true;
        setTimeout(function() {
          return setFocusTrigger(true);
        }, 0);
      }
    } else {
      var parentItem = activeItemPath.find(function(p) {
        return p.key === processedItem.parentKey;
      });
      if (focusedItemInfo.index === 0 && parentItem && parentItem.parentKey === "") {
        setFocusedItemInfo({
          index: -1,
          parentKey: parentItem ? parentItem.parentKey : ""
        });
        searchValue.current = "";
        onArrowLeftKey(event);
      } else {
        var itemIndex = focusedItemInfo.index !== -1 ? findPrevItemIndex(focusedItemInfo.index) : findLastFocusedItemIndex();
        changeFocusedItemIndex(itemIndex);
      }
    }
    event.preventDefault();
  };
  var onArrowLeftKey = function onArrowLeftKey2(event) {
    var processedItem = visibleItems[focusedItemInfo.index];
    var parentItem = processedItem ? activeItemPath.find(function(p) {
      return p.key === processedItem.parentKey;
    }) : null;
    if (parentItem) {
      onItemChange({
        originalEvent: event,
        processedItem: parentItem
      });
      setActiveItemPath(activeItemPath.filter(function(p) {
        return p.key !== parentItem.key;
      }));
    } else {
      var itemIndex = focusedItemInfo.index !== -1 ? findPrevItemIndex(focusedItemInfo.index) : findLastFocusedItemIndex();
      changeFocusedItemIndex(itemIndex);
    }
    event.preventDefault();
  };
  var onArrowRightKey = function onArrowRightKey2(event) {
    var processedItem = visibleItems[focusedItemInfo.index];
    var parentItem = processedItem ? activeItemPath.find(function(p) {
      return p.key === processedItem.parentKey;
    }) : null;
    if (parentItem) {
      var grouped = isProccessedItemGroup(processedItem);
      if (grouped) {
        onItemChange({
          originalEvent: event,
          processedItem
        });
        setFocusedItemInfo({
          index: -1,
          parentKey: processedItem.key
        });
        setTimeout(function() {
          return setFocusTrigger(true);
        }, 0);
      }
    } else {
      var itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : findFirstFocusedItemIndex();
      changeFocusedItemIndex(itemIndex);
    }
    event.preventDefault();
  };
  var onHomeKey = function onHomeKey2(event) {
    changeFocusedItemIndex(findFirstItemIndex());
    event.preventDefault();
  };
  var onEndKey = function onEndKey2(event) {
    changeFocusedItemIndex(findLastItemIndex());
    event.preventDefault();
  };
  var onEnterKey = function onEnterKey2(event) {
    if (focusedItemInfo.index !== -1) {
      var element = DomHandler.findSingle(rootMenuRef.current, 'li[data-id="'.concat("".concat(focusedItemId), '"]'));
      var anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');
      anchorElement ? anchorElement.click() : element && element.click();
    }
    event.preventDefault();
  };
  var onSpaceKey = function onSpaceKey2(event) {
    onEnterKey(event);
  };
  var onEscapeKey = function onEscapeKey2(event) {
    hide(true);
    setFocusedItemInfo({
      focusedItemInfo,
      index: findFirstFocusedItemIndex()
    });
  };
  var onTabKey = function onTabKey2(event) {
    if (focusedItemInfo.index !== -1) {
      var processedItem = visibleItems[focusedItemInfo.index];
      var grouped = isProccessedItemGroup(processedItem);
      !grouped && onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    hide();
  };
  var isItemMatched = function isItemMatched2(processedItem) {
    return isValidItem(processedItem) && getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(searchValue.current.toLocaleLowerCase());
  };
  var isValidItem = function isValidItem2(processedItem) {
    return !!processedItem && !isItemDisabled(processedItem.item) && !isItemSeparator(processedItem.item);
  };
  var isValidSelectedItem = function isValidSelectedItem2(processedItem) {
    return isValidItem(processedItem) && isSelected(processedItem);
  };
  var isSelected = function isSelected2(processedItem) {
    return activeItemPath.some(function(p) {
      return p.key === processedItem.key;
    });
  };
  var findFirstItemIndex = function findFirstItemIndex2() {
    return visibleItems.findIndex(function(processedItem) {
      return isValidItem(processedItem);
    });
  };
  var findLastItemIndex = function findLastItemIndex2() {
    return ObjectUtils.findLastIndex(visibleItems, function(processedItem) {
      return isValidItem(processedItem);
    });
  };
  var findNextItemIndex = function findNextItemIndex2(index) {
    var matchedItemIndex = index < visibleItems.length - 1 ? visibleItems.slice(index + 1).findIndex(function(processedItem) {
      return isValidItem(processedItem);
    }) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  };
  var findPrevItemIndex = function findPrevItemIndex2(index) {
    var matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(visibleItems.slice(0, index), function(processedItem) {
      return isValidItem(processedItem);
    }) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  };
  var findSelectedItemIndex = function findSelectedItemIndex2() {
    return visibleItems.findIndex(function(processedItem) {
      return isValidSelectedItem(processedItem);
    });
  };
  var findFirstFocusedItemIndex = function findFirstFocusedItemIndex2() {
    var selectedIndex = findSelectedItemIndex();
    return selectedIndex < 0 ? findFirstItemIndex() : selectedIndex;
  };
  var findLastFocusedItemIndex = function findLastFocusedItemIndex2() {
    var selectedIndex = findSelectedItemIndex();
    return selectedIndex < 0 ? findLastItemIndex() : selectedIndex;
  };
  var searchItems = function searchItems2(event, _char) {
    searchValue.current = (searchValue.current || "") + _char;
    var itemIndex = -1;
    var matched = false;
    if (focusedItemInfo.index !== -1) {
      itemIndex = visibleItems.slice(focusedItemInfo.index).findIndex(function(processedItem) {
        return isItemMatched(processedItem);
      });
      itemIndex = itemIndex === -1 ? visibleItems.slice(0, focusedItemInfo.index).findIndex(function(processedItem) {
        return isItemMatched(processedItem);
      }) : itemIndex + focusedItemInfo.index;
    } else {
      itemIndex = visibleItems.findIndex(function(processedItem) {
        return isItemMatched(processedItem);
      });
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && focusedItemInfo.index === -1) {
      itemIndex = findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      changeFocusedItemIndex(itemIndex);
    }
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(function() {
      searchValue.current = "";
      searchTimeout.current = null;
    }, 500);
    return matched;
  };
  var changeFocusedItemIndex = function changeFocusedItemIndex2(index) {
    if (focusedItemInfo.index !== index) {
      setFocusedItemInfo(_objectSpread(_objectSpread({}, focusedItemInfo), {}, {
        index
      }));
      scrollInView();
    }
  };
  var scrollInView = function scrollInView2() {
    var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
    var id = index !== -1 ? "".concat(idState, "_").concat(index) : focusedItemId;
    var element = DomHandler.findSingle(rootMenuRef.current, 'li[data-id="'.concat(id, '"]'));
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    }
  };
  var _createProcessedItems = function createProcessedItems(items) {
    var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
    var _processedItems = [];
    items && items.forEach(function(item, index) {
      var key = (parentKey !== "" ? parentKey + "_" : "") + index;
      var newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem.items = _createProcessedItems(item.items, level + 1, newItem, key);
      _processedItems.push(newItem);
    });
    return _processedItems;
  };
  useMountEffect(function() {
    if (!idState) {
      setIdState(UniqueComponentId());
    }
  });
  useUpdateEffect(function() {
    if (mobileActiveState) {
      bindOutsideClickListener();
      bindResizeListener();
      ZIndexUtils.set("menu", rootMenuRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, context && context.zIndex.menu || PrimeReact.zIndex.menu);
    } else {
      unbindResizeListener();
      unbindOutsideClickListener();
      ZIndexUtils.clear(rootMenuRef.current);
    }
  }, [mobileActiveState]);
  React4.useEffect(function() {
    var itemsToProcess = props.model || [];
    var processed = _createProcessedItems(itemsToProcess, 0, null, "");
    setProcessedItems(processed);
  }, [props.model]);
  useUpdateEffect(function() {
    var processedItem = activeItemPath.find(function(p) {
      return p.key === focusedItemInfo.parentKey;
    });
    var _processedItems = processedItem ? processedItem.items : processedItems;
    setVisibleItems(_processedItems);
  }, [activeItemPath, focusedItemInfo, processedItems]);
  useUpdateEffect(function() {
    if (ObjectUtils.isNotEmpty(activeItemPath)) {
      bindOutsideClickListener();
      bindResizeListener();
    } else {
      unbindOutsideClickListener();
      unbindResizeListener();
    }
  }, [activeItemPath]);
  useUpdateEffect(function() {
    if (focusTrigger) {
      var itemIndex = focusedItemInfo.index !== -1 ? findNextItemIndex(focusedItemInfo.index) : reverseTrigger.current ? findLastItemIndex() : findFirstFocusedItemIndex();
      changeFocusedItemIndex(itemIndex);
      reverseTrigger.current = false;
      setFocusTrigger(false);
    }
  }, [focusTrigger]);
  useUpdateEffect(function() {
    setFocusedItemId(focusedItemInfo.index !== -1 ? "".concat(idState).concat(ObjectUtils.isNotEmpty(focusedItemInfo.parentKey) ? "_" + focusedItemInfo.parentKey : "", "_").concat(focusedItemInfo.index) : null);
  }, [focusedItemInfo]);
  useUnmountEffect(function() {
    ZIndexUtils.clear(rootMenuRef.current);
  });
  React4.useImperativeHandle(ref, function() {
    return {
      props,
      toggle,
      getElement: function getElement() {
        return elementRef.current;
      },
      getRootMenu: function getRootMenu() {
        return rootMenuRef.current;
      },
      getMenuButton: function getMenuButton() {
        return menuButtonRef.current;
      }
    };
  });
  var createStartContent = function createStartContent2() {
    if (props.start) {
      var _start = ObjectUtils.getJSXElement(props.start, props);
      var startProps = mergeProps({
        className: cx("start")
      }, ptm("start"));
      return React4.createElement("div", startProps, _start);
    }
    return null;
  };
  var createEndContent = function createEndContent2() {
    if (props.end) {
      var _end = ObjectUtils.getJSXElement(props.end, props);
      var endProps = mergeProps({
        className: cx("end")
      }, ptm("end"));
      return React4.createElement("div", endProps, _end);
    }
    return null;
  };
  var createMenuButton = function createMenuButton2() {
    if (props.model && props.model.length < 1) {
      return null;
    }
    var buttonProps = mergeProps(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      ref: menuButtonRef,
      href: "#",
      tabIndex: "0",
      "aria-haspopup": mobileActiveState && props.model && props.model.length > 0 ? true : false,
      "aria-expanded": mobileActiveState,
      "aria-label": ariaLabel("navigation"),
      "aria-controls": idState,
      role: "button"
    }, "tabIndex", 0), "className", cx("button")), "onKeyDown", function onKeyDown2(e) {
      return menuButtonKeydown(e);
    }), "onClick", function onClick(e) {
      return toggle(e);
    }), ptm("button"));
    var popupIconProps = mergeProps(ptm("popupIcon"));
    var icon = props.menuIcon || React4.createElement(BarsIcon, popupIconProps);
    var menuIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, popupIconProps), {
      props
    });
    var button = React4.createElement("a", buttonProps, menuIcon);
    return button;
  };
  var start = createStartContent();
  var end = createEndContent();
  var menuButton = createMenuButton();
  var submenu = React4.createElement(MenubarSub, {
    hostName: "Menubar",
    ariaActivedescendant: focused ? focusedItemId : void 0,
    level: 0,
    id: idState,
    ref: rootMenuRef,
    menuProps: props,
    model: processedItems,
    onLeafClick: onItemClick,
    onItemMouseEnter,
    onFocus,
    onBlur,
    onKeyDown,
    root: true,
    activeItemPath,
    focusedItemId: focused ? focusedItemId : void 0,
    submenuIcon: props.submenuIcon,
    ptm,
    cx
  });
  var rootProps = mergeProps({
    id: props.id,
    ref: elementRef,
    className: classNames(props.className, cx("root", {
      mobileActiveState
    })),
    style: props.style
  }, MenubarBase.getOtherProps(props), ptm("root"));
  return React4.createElement("div", rootProps, start, menuButton, submenu, end);
}));
Menubar.displayName = "Menubar";
export {
  Menubar
};
//# sourceMappingURL=primereact_menubar.js.map
