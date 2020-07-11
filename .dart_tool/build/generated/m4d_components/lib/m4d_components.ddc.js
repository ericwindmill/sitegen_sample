define(['dart_sdk', 'packages/m4d_components/m4d_formatter', 'packages/m4d_core/m4d_ioc', 'packages/logging/logging', 'packages/m4d_core/m4d_core', 'packages/m4d_components/services', 'packages/validate/expect', 'packages/platform_detect/platform_detect'], function(dart_sdk, packages__m4d_components__m4d_formatter, packages__m4d_core__m4d_ioc, packages__logging__logging, packages__m4d_core__m4d_core, packages__m4d_components__services, packages__validate__expect, packages__platform_detect__platform_detect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const m4d_formatter = packages__m4d_components__m4d_formatter.m4d_formatter;
  const m4d_ioc = packages__m4d_core__m4d_ioc.m4d_ioc;
  const logger = packages__logging__logging.src__logger;
  const m4d_core = packages__m4d_core__m4d_core.m4d_core;
  const services = packages__m4d_components__services.services;
  const validate = packages__validate__expect.validate;
  const detect = packages__platform_detect__platform_detect.src__detect;
  var m4d_components = Object.create(dart.library);
  var $classes = dartx.classes;
  var $attributes = dartx.attributes;
  var $_get = dartx._get;
  var $trim = dartx.trim;
  var $split = dartx.split;
  var $getRange = dartx.getRange;
  var $toString = dartx.toString;
  var $entries = dartx.entries;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $join = dartx.join;
  var $hashCode = dartx.hashCode;
  var $onClick = dartx.onClick;
  var $checked = dartx.checked;
  var $add = dartx.add;
  var $name = dartx.name;
  var $insertAdjacentElement = dartx.insertAdjacentElement;
  var $baseUri = dartx.baseUri;
  var $isNotEmpty = dartx.isNotEmpty;
  var $contains = dartx.contains;
  var $append = dartx.append;
  var $parent = dartx.parent;
  var $querySelectorAll = dartx.querySelectorAll;
  var $forEach = dartx.forEach;
  var $isEmpty = dartx.isEmpty;
  var $dataset = dartx.dataset;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $text = dartx.text;
  var $onMouseUp = dartx.onMouseUp;
  var $onMouseLeave = dartx.onMouseLeave;
  var $disabled = dartx.disabled;
  var $value = dartx.value;
  var $onChange = dartx.onChange;
  var $onFocus = dartx.onFocus;
  var $onBlur = dartx.onBlur;
  var $addAll = dartx.addAll;
  var $createElement = dartx.createElement;
  var $length = dartx.length;
  var $toLowerCase = dartx.toLowerCase;
  var $where = dartx.where;
  var $removeWhere = dartx.removeWhere;
  var $setAttribute = dartx.setAttribute;
  var $onPageShow = dartx.onPageShow;
  var $overflowY = dartx.overflowY;
  var $requestAnimationFrame = dartx.requestAnimationFrame;
  var $addEventListener = dartx.addEventListener;
  var $onScroll = dartx.onScroll;
  var $innerHtml = dartx.innerHtml;
  var $onKeyDown = dartx.onKeyDown;
  var $scrollLeft = dartx.scrollLeft;
  var $scrollWidth = dartx.scrollWidth;
  var $offsetWidth = dartx.offsetWidth;
  var $onResize = dartx.onResize;
  var $scrollTop = dartx.scrollTop;
  var $startsWith = dartx.startsWith;
  var $clear = dartx.clear;
  var $height = dartx.height;
  var $width = dartx.width;
  var $offsetTop = dartx.offsetTop;
  var $offsetHeight = dartx.offsetHeight;
  var $transitionDelay = dartx.transitionDelay;
  var $clip = dartx.clip;
  var $getAttribute = dartx.getAttribute;
  var $right = dartx.right;
  var $top = dartx.top;
  var $left = dartx.left;
  var $offsetLeft = dartx.offsetLeft;
  var $bottom = dartx.bottom;
  var $last = dartx.last;
  var $first = dartx.first;
  var $target = dartx.target;
  var $indexOf = dartx.indexOf;
  var $onTransitionEnd = dartx.onTransitionEnd;
  var $replaceFirst = dartx.replaceFirst;
  var $children = dartx.children;
  var $border = dartx.border;
  var $onMouseDown = dartx.onMouseDown;
  var $onTouchStart = dartx.onTouchStart;
  var $onTouchEnd = dartx.onTouchEnd;
  var $_equals = dartx._equals;
  var $toInt = dartx.toInt;
  var $client = dartx.client;
  var $round = dartx.round;
  var $transform = dartx.transform;
  var $onInput = dartx.onInput;
  var $topLeft = dartx.topLeft;
  var $min = dartx.min;
  var $max = dartx.max;
  var $flex = dartx.flex;
  var $onReset = dartx.onReset;
  var $onMouseEnter = dartx.onMouseEnter;
  var $truncate = dartx.truncate;
  var $marginTop = dartx.marginTop;
  var $marginLeft = dartx.marginLeft;
  var JSArrayOfModuleL = () => (JSArrayOfModuleL = dart.constFn(_interceptors.JSArray$(m4d_ioc.Module)))();
  var UnmodifiableListViewOfStringL = () => (UnmodifiableListViewOfStringL = dart.constFn(collection.UnmodifiableListView$(core.String)))();
  var MapEntryLToStringL = () => (MapEntryLToStringL = dart.constFn(dart.fnType(core.String, [core.MapEntry])))();
  var EventLToNullN = () => (EventLToNullN = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  var HtmlElementLToHtmlElementL = () => (HtmlElementLToHtmlElementL = dart.constFn(dart.fnType(html.HtmlElement, [html.HtmlElement])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(core.String)))();
  var ElementLToNullN = () => (ElementLToNullN = dart.constFn(dart.fnType(core.Null, [html.Element])))();
  var ElementLToInputElementL = () => (ElementLToInputElementL = dart.constFn(dart.fnType(html.InputElement, [html.Element])))();
  var InputElementLToNullN = () => (InputElementLToNullN = dart.constFn(dart.fnType(core.Null, [html.InputElement])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var ElementLToTableRowElementL = () => (ElementLToTableRowElementL = dart.constFn(dart.fnType(html.TableRowElement, [html.Element])))();
  var ListOfTableRowElementL = () => (ListOfTableRowElementL = dart.constFn(core.List$(html.TableRowElement)))();
  var EventLToLvoid = () => (EventLToLvoid = dart.constFn(dart.fnType(dart.void, [html.Event])))();
  var MaterialDivDataTableRowLToboolL = () => (MaterialDivDataTableRowLToboolL = dart.constFn(dart.fnType(core.bool, [m4d_components.MaterialDivDataTableRow])))();
  var StreamControllerOfDataTableChangedEventL = () => (StreamControllerOfDataTableChangedEventL = dart.constFn(async.StreamController$(m4d_components.DataTableChangedEvent)))();
  var StreamControllerOfDataTableRowClickedEventL = () => (StreamControllerOfDataTableRowClickedEventL = dart.constFn(async.StreamController$(m4d_components.DataTableRowClickedEvent)))();
  var ListOfMaterialDivDataTableRowL = () => (ListOfMaterialDivDataTableRowL = dart.constFn(core.List$(m4d_components.MaterialDivDataTableRow)))();
  var ElementLToHtmlElementL = () => (ElementLToHtmlElementL = dart.constFn(dart.fnType(html.HtmlElement, [html.Element])))();
  var HtmlElementLToboolL = () => (HtmlElementLToboolL = dart.constFn(dart.fnType(core.bool, [html.HtmlElement])))();
  var JSArrayOfMaterialDivDataTableRowL = () => (JSArrayOfMaterialDivDataTableRowL = dart.constFn(_interceptors.JSArray$(m4d_components.MaterialDivDataTableRow)))();
  var HtmlElementLToNullN = () => (HtmlElementLToNullN = dart.constFn(dart.fnType(core.Null, [html.HtmlElement])))();
  var HtmlElementLToElementL = () => (HtmlElementLToElementL = dart.constFn(dart.fnType(html.Element, [html.HtmlElement])))();
  var voidToNullN = () => (voidToNullN = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var MouseEventLToNullN = () => (MouseEventLToNullN = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  var JSArrayOfMaterialLayoutTabL = () => (JSArrayOfMaterialLayoutTabL = dart.constFn(_interceptors.JSArray$(m4d_components.MaterialLayoutTab)))();
  var MaterialLayoutTabLTovoid = () => (MaterialLayoutTabLTovoid = dart.constFn(dart.fnType(dart.void, [m4d_components.MaterialLayoutTab])))();
  var NodeLToNullN = () => (NodeLToNullN = dart.constFn(dart.fnType(core.Null, [html.Node])))();
  var numLToNullN = () => (numLToNullN = dart.constFn(dart.fnType(core.Null, [core.num])))();
  var EventLTovoid = () => (EventLTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))();
  var ElementLToAnchorElementL = () => (ElementLToAnchorElementL = dart.constFn(dart.fnType(html.AnchorElement, [html.Element])))();
  var JSArrayOfStreamSubscriptionL = () => (JSArrayOfStreamSubscriptionL = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  var StreamSubscriptionLToNullN = () => (StreamSubscriptionLToNullN = dart.constFn(dart.fnType(core.Null, [async.StreamSubscription])))();
  var KeyboardEventLToNullN = () => (KeyboardEventLToNullN = dart.constFn(dart.fnType(core.Null, [html.KeyboardEvent])))();
  var HtmlElementLTovoid = () => (HtmlElementLTovoid = dart.constFn(dart.fnType(dart.void, [html.HtmlElement])))();
  var FutureOfNullN = () => (FutureOfNullN = dart.constFn(async.Future$(core.Null)))();
  var TransitionEventLToNullN = () => (TransitionEventLToNullN = dart.constFn(dart.fnType(core.Null, [html.TransitionEvent])))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(core.bool, [core.String])))();
  var StreamControllerOfMaterialRadioGroupChangedEventL = () => (StreamControllerOfMaterialRadioGroupChangedEventL = dart.constFn(async.StreamController$(m4d_components.MaterialRadioGroupChangedEvent)))();
  var ElementLToboolL = () => (ElementLToboolL = dart.constFn(dart.fnType(core.bool, [html.Element])))();
  var JSArrayOfDivElementL = () => (JSArrayOfDivElementL = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(html.Element)))();
  var StreamControllerOfMaterialTabsChangedEventL = () => (StreamControllerOfMaterialTabsChangedEventL = dart.constFn(async.StreamController$(m4d_components.MaterialTabsChangedEvent)))();
  var intLTovoid = () => (intLTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  var MdlWidgetConfigOfMaterialAccordionL = () => (MdlWidgetConfigOfMaterialAccordionL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialAccordion)))();
  var HtmlElementLAndContainerLToMaterialAccordionL = () => (HtmlElementLAndContainerLToMaterialAccordionL = dart.constFn(dart.fnType(m4d_components.MaterialAccordion, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialBadgeL = () => (MdlWidgetConfigOfMaterialBadgeL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialBadge)))();
  var HtmlElementLAndContainerLToMaterialBadgeL = () => (HtmlElementLAndContainerLToMaterialBadgeL = dart.constFn(dart.fnType(m4d_components.MaterialBadge, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialButtonL = () => (MdlWidgetConfigOfMaterialButtonL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialButton)))();
  var HtmlElementLAndContainerLToMaterialButtonL = () => (HtmlElementLAndContainerLToMaterialButtonL = dart.constFn(dart.fnType(m4d_components.MaterialButton, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialCheckboxL = () => (MdlWidgetConfigOfMaterialCheckboxL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialCheckbox)))();
  var HtmlElementLAndContainerLToMaterialCheckboxL = () => (HtmlElementLAndContainerLToMaterialCheckboxL = dart.constFn(dart.fnType(m4d_components.MaterialCheckbox, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialDataTableL = () => (MdlWidgetConfigOfMaterialDataTableL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialDataTable)))();
  var HtmlElementLAndContainerLToMaterialDataTableL = () => (HtmlElementLAndContainerLToMaterialDataTableL = dart.constFn(dart.fnType(m4d_components.MaterialDataTable, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialDivDataTableL = () => (MdlWidgetConfigOfMaterialDivDataTableL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialDivDataTable)))();
  var HtmlElementLAndContainerLToMaterialDivDataTableL = () => (HtmlElementLAndContainerLToMaterialDivDataTableL = dart.constFn(dart.fnType(m4d_components.MaterialDivDataTable, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialDivDataTableRowL = () => (MdlWidgetConfigOfMaterialDivDataTableRowL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialDivDataTableRow)))();
  var HtmlElementLAndContainerLToMaterialDivDataTableRowL = () => (HtmlElementLAndContainerLToMaterialDivDataTableRowL = dart.constFn(dart.fnType(m4d_components.MaterialDivDataTableRow, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlConfigOfMaterialFormatterL = () => (MdlConfigOfMaterialFormatterL = dart.constFn(m4d_core.MdlConfig$(m4d_components.MaterialFormatter)))();
  var HtmlElementLAndContainerLToMaterialFormatterL = () => (HtmlElementLAndContainerLToMaterialFormatterL = dart.constFn(dart.fnType(m4d_components.MaterialFormatter, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialIconToggleL = () => (MdlWidgetConfigOfMaterialIconToggleL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialIconToggle)))();
  var HtmlElementLAndContainerLToMaterialIconToggleL = () => (HtmlElementLAndContainerLToMaterialIconToggleL = dart.constFn(dart.fnType(m4d_components.MaterialIconToggle, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialLabelfieldL = () => (MdlWidgetConfigOfMaterialLabelfieldL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialLabelfield)))();
  var HtmlElementLAndContainerLToMaterialLabelfieldL = () => (HtmlElementLAndContainerLToMaterialLabelfieldL = dart.constFn(dart.fnType(m4d_components.MaterialLabelfield, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialLayoutL = () => (MdlWidgetConfigOfMaterialLayoutL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialLayout)))();
  var HtmlElementLAndContainerLToMaterialLayoutL = () => (HtmlElementLAndContainerLToMaterialLayoutL = dart.constFn(dart.fnType(m4d_components.MaterialLayout, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialMenuL = () => (MdlWidgetConfigOfMaterialMenuL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialMenu)))();
  var HtmlElementLAndContainerLToMaterialMenuL = () => (HtmlElementLAndContainerLToMaterialMenuL = dart.constFn(dart.fnType(m4d_components.MaterialMenu, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialProgressL = () => (MdlWidgetConfigOfMaterialProgressL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialProgress)))();
  var HtmlElementLAndContainerLToMaterialProgressL = () => (HtmlElementLAndContainerLToMaterialProgressL = dart.constFn(dart.fnType(m4d_components.MaterialProgress, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialProgressVerticalL = () => (MdlWidgetConfigOfMaterialProgressVerticalL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialProgressVertical)))();
  var HtmlElementLAndContainerLToMaterialProgressVerticalL = () => (HtmlElementLAndContainerLToMaterialProgressVerticalL = dart.constFn(dart.fnType(m4d_components.MaterialProgressVertical, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialRadioL = () => (MdlWidgetConfigOfMaterialRadioL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialRadio)))();
  var HtmlElementLAndContainerLToMaterialRadioL = () => (HtmlElementLAndContainerLToMaterialRadioL = dart.constFn(dart.fnType(m4d_components.MaterialRadio, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialRadioGroupL = () => (MdlWidgetConfigOfMaterialRadioGroupL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialRadioGroup)))();
  var HtmlElementLAndContainerLToMaterialRadioGroupL = () => (HtmlElementLAndContainerLToMaterialRadioGroupL = dart.constFn(dart.fnType(m4d_components.MaterialRadioGroup, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlConfigOfMaterialRippleL = () => (MdlConfigOfMaterialRippleL = dart.constFn(m4d_core.MdlConfig$(m4d_components.MaterialRipple)))();
  var HtmlElementLAndContainerLToMaterialRippleL = () => (HtmlElementLAndContainerLToMaterialRippleL = dart.constFn(dart.fnType(m4d_components.MaterialRipple, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialSliderL = () => (MdlWidgetConfigOfMaterialSliderL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialSlider)))();
  var HtmlElementLAndContainerLToMaterialSliderL = () => (HtmlElementLAndContainerLToMaterialSliderL = dart.constFn(dart.fnType(m4d_components.MaterialSlider, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialSpinnerL = () => (MdlWidgetConfigOfMaterialSpinnerL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialSpinner)))();
  var HtmlElementLAndContainerLToMaterialSpinnerL = () => (HtmlElementLAndContainerLToMaterialSpinnerL = dart.constFn(dart.fnType(m4d_components.MaterialSpinner, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialSwitchL = () => (MdlWidgetConfigOfMaterialSwitchL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialSwitch)))();
  var HtmlElementLAndContainerLToMaterialSwitchL = () => (HtmlElementLAndContainerLToMaterialSwitchL = dart.constFn(dart.fnType(m4d_components.MaterialSwitch, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialTabsL = () => (MdlWidgetConfigOfMaterialTabsL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialTabs)))();
  var HtmlElementLAndContainerLToMaterialTabsL = () => (HtmlElementLAndContainerLToMaterialTabsL = dart.constFn(dart.fnType(m4d_components.MaterialTabs, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialTextfieldL = () => (MdlWidgetConfigOfMaterialTextfieldL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialTextfield)))();
  var HtmlElementLAndContainerLToMaterialTextfieldL = () => (HtmlElementLAndContainerLToMaterialTextfieldL = dart.constFn(dart.fnType(m4d_components.MaterialTextfield, [html.HtmlElement, m4d_ioc.Container])))();
  var MdlWidgetConfigOfMaterialTooltipL = () => (MdlWidgetConfigOfMaterialTooltipL = dart.constFn(m4d_core.MdlWidgetConfig$(m4d_components.MaterialTooltip)))();
  var HtmlElementLAndContainerLToMaterialTooltipL = () => (HtmlElementLAndContainerLToMaterialTooltipL = dart.constFn(dart.fnType(m4d_components.MaterialTooltip, [html.HtmlElement, m4d_ioc.Container])))();
  const CT = Object.create(null);
  var L0 = "package:m4d_components/m4d_components.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: m4d_components._MaterialFormatterCssClasses.prototype,
        [_MaterialFormatterCssClasses_IS_UPGRADED]: "is-upgraded"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: m4d_components._MaterialAccordionConstant.prototype,
        [_MaterialAccordionConstant_CHECKBOX_NAME]: "mdl-accordion"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: m4d_components._MaterialAccordionCssClasses.prototype,
        [_MaterialAccordionCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialAccordionCssClasses_RIPPLE_EFFECT_IGNORE_EVENTS]: "mdl-ripple-effect--ignore-events",
        [_MaterialAccordionCssClasses_LINK]: "mdl-navigation__link",
        [_MaterialAccordionCssClasses_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [_MaterialAccordionCssClasses_RIPPLE]: "mdl-ripple",
        [_MaterialAccordionCssClasses_RIPPLE_CONTAINER]: "mdl-accordion__ripple-container",
        [_MaterialAccordionCssClasses_ACCORDION_LABEL]: "mdl-accordion__label",
        [_MaterialAccordionCssClasses_ACCORDION]: "mdl-accordion",
        [_MaterialAccordionCssClasses_NAVIGATION]: "mdl-accordion--navigation",
        [_MaterialAccordionCssClasses_ACCORDION_TYPE]: "mdl-accordion--radio-type",
        [_MaterialAccordionCssClasses_GROUP]: "mdl-accordion-group"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: m4d_components._MaterialBadgeConstant.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: m4d_components._MaterialBadgeCssClasses.prototype,
        [_MaterialBadgeCssClasses_IS_UPGRADED]: "is-upgraded"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: m4d_components._MaterialButtonConstant.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: m4d_components._MaterialButtonCssClasses.prototype,
        [_MaterialButtonCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialButtonCssClasses_RIPPLE]: "mdl-ripple",
        [_MaterialButtonCssClasses_RIPPLE_CONTAINER]: "mdl-button__ripple-container",
        [_MaterialButtonCssClasses_RIPPLE_EFFECT]: "mdl-ripple-effect"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: m4d_components._MaterialCheckboxConstant.prototype,
        [_MaterialCheckboxConstant_DEFAULT_OFF_VALUE]: "off",
        [_MaterialCheckboxConstant_TINY_TIMEOUT_IN_MS]: 100
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: m4d_components._MaterialCheckboxCssClasses.prototype,
        [_MaterialCheckboxCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialCheckboxCssClasses_IS_CHECKED]: "is-checked",
        [_MaterialCheckboxCssClasses_IS_DISABLED]: "is-disabled",
        [_MaterialCheckboxCssClasses_IS_FOCUSED]: "is-focused",
        [_MaterialCheckboxCssClasses_RIPPLE]: "mdl-ripple",
        [_MaterialCheckboxCssClasses_RIPPLE_CENTER]: "mdl-ripple--center",
        [_MaterialCheckboxCssClasses_RIPPLE_CONTAINER]: "mdl-checkbox__ripple-container",
        [_MaterialCheckboxCssClasses_RIPPLE_IGNORE_EVENTS]: "mdl-ripple-effect--ignore-events",
        [_MaterialCheckboxCssClasses_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [_MaterialCheckboxCssClasses_TICK_OUTLINE]: "mdl-checkbox__tick-outline",
        [_MaterialCheckboxCssClasses_FOCUS_HELPER]: "mdl-checkbox__focus-helper",
        [_MaterialCheckboxCssClasses_BOX_OUTLINE]: "mdl-checkbox__box-outline",
        [_MaterialCheckboxCssClasses_LABEL]: "mdl-checkbox__label",
        [_MaterialCheckboxCssClasses_INPUT]: "mdl-checkbox__input"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: m4d_components._MaterialDataTableConstant.prototype,
        [SELECTABLE_VALUE]: "mdl-data-table-selectable-value",
        [SELECTABLE_NAME]: "mdl-data-table-selectable-name"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: m4d_components._MaterialDataTableCssClasses.prototype,
        [JS_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [JS_CHECKBOX]: "mdl-checkbox",
        [CHECKBOX]: "mdl-checkbox",
        [IS_UPGRADED$3]: "is-upgraded",
        [IS_SELECTED]: "is-selected",
        [SELECT_ELEMENT]: "mdl-data-table__select",
        [SELECTABLE]: "mdl-data-table--selectable",
        [DATA_TABLE]: "mdl-data-table"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: m4d_components._MaterialDivDataTableConstant.prototype,
        [_MaterialDivDataTableConstant_SELECTABLE_VALUE]: "mdl-data-tableex-selectable-value",
        [_MaterialDivDataTableConstant_SELECTABLE_NAME]: "mdl-data-tableex-selectable-name"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: m4d_components._MaterialDivDataTableCssClasses.prototype,
        [_MaterialDivDataTableCssClasses_JS_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [_MaterialDivDataTableCssClasses_JS_CHECKBOX]: "mdl-checkbox",
        [_MaterialDivDataTableCssClasses_CHECKBOX_INPUT]: "mdl-checkbox__input",
        [_MaterialDivDataTableCssClasses_CHECKBOX]: "mdl-checkbox",
        [_MaterialDivDataTableCssClasses_CELL_CHECKBOX]: "mdl-data-tableex__cell--checkbox",
        [_MaterialDivDataTableCssClasses_ROW]: "mdl-div-data-tableex__row",
        [_MaterialDivDataTableCssClasses_HEAD]: "mdl-div-data-tableex__head",
        [_MaterialDivDataTableCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialDivDataTableCssClasses_IS_SELECTED]: "is-selected",
        [_MaterialDivDataTableCssClasses_SELECT]: "mdl-data-tableex__select",
        [_MaterialDivDataTableCssClasses_SELECTABLE]: "mdl-data-tableex--selectable",
        [_MaterialDivDataTableCssClasses_DATA_TABLE]: "mdl-data-tableex"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: m4d_components._MaterialDivDataTableRowConstant.prototype,
        [SELECTABLE_VALUE$]: "mdl-data-tableex-selectable-value",
        [SELECTABLE_NAME$]: "mdl-data-tableex-selectable-name"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: m4d_components._MaterialDivDataTableRowCssClasses.prototype,
        [JS_RIPPLE_EFFECT$]: "mdl-ripple-effect",
        [JS_CHECKBOX$]: "mdl-checkbox",
        [CHECKBOX_INPUT]: "mdl-checkbox__input",
        [CHECKBOX$]: "mdl-checkbox",
        [CELL_CHECKBOX]: "mdl-data-tableex__cell--checkbox",
        [HEAD]: "mdl-div-data-tableex__head",
        [IS_UPGRADED$4]: "is-upgraded",
        [IS_SELECTED$]: "is-selected",
        [SELECT]: "mdl-data-tableex__select"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: m4d_components._MaterialIconToggleConstant.prototype,
        [_MaterialIconToggleConstant_TINY_TIMEOUT_IN_MS]: 100
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: m4d_components._MaterialIconToggleCssClasses.prototype,
        [_MaterialIconToggleCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialIconToggleCssClasses_IS_CHECKED]: "is-checked",
        [_MaterialIconToggleCssClasses_IS_DISABLED]: "is-disabled",
        [_MaterialIconToggleCssClasses_IS_FOCUSED]: "is-focused",
        [_MaterialIconToggleCssClasses_RIPPLE]: "mdl-ripple",
        [_MaterialIconToggleCssClasses_RIPPLE_CENTER]: "mdl-ripple--center",
        [_MaterialIconToggleCssClasses_RIPPLE_CONTAINER]: "mdl-icon-toggle__ripple-container",
        [_MaterialIconToggleCssClasses_RIPPLE_IGNORE_EVENTS]: "mdl-ripple-effect--ignore-events",
        [_MaterialIconToggleCssClasses_JS_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [_MaterialIconToggleCssClasses_INPUT]: "mdl-icon-toggle__input"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: m4d_components._MaterialLabelfieldCssClasses.prototype,
        [_MaterialLabelfieldCssClasses_TEXT]: "mdl-labelfield__text",
        [_MaterialLabelfieldCssClasses_LABEL]: "mdl-labelfield__label",
        [_MaterialLabelfieldCssClasses_IS_UPGRADED]: "is-upgraded"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: m4d_components._MaterialLayoutConstant.prototype,
        [_MaterialLayoutConstant_CHEVRON_RIGHT]: "chevron_right",
        [_MaterialLayoutConstant_CHEVRON_LEFT]: "chevron_left",
        [_MaterialLayoutConstant_MENU_ICON]: "&#xE5D2;",
        [_MaterialLayoutConstant_RESIZE_TIMEOUT]: 100,
        [_MaterialLayoutConstant_TAB_SCROLL_PIXELS]: 100,
        [_MaterialLayoutConstant_MAX_WIDTH]: "(max-width: 1024px)"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: m4d_components._MaterialLayoutCssClasses.prototype,
        [_MaterialLayoutCssClasses_ON_SMALL_SCREEN]: "mdl-layout--small-screen-only",
        [_MaterialLayoutCssClasses_ON_LARGE_SCREEN]: "mdl-layout--large-screen-only",
        [_MaterialLayoutCssClasses_IS_ANIMATING]: "is-animating",
        [_MaterialLayoutCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialLayoutCssClasses_IS_ACTIVE]: "is-active",
        [_MaterialLayoutCssClasses_IS_DRAWER_OPEN]: "is-visible",
        [_MaterialLayoutCssClasses_IS_SMALL_SCREEN]: "is-small-screen",
        [_MaterialLayoutCssClasses_IS_COMPACT]: "is-compact",
        [_MaterialLayoutCssClasses_CASTING_SHADOW]: "is-casting-shadow",
        [_MaterialLayoutCssClasses_HAS_SCROLLING_HEADER]: "has-scrolling-header",
        [_MaterialLayoutCssClasses_HAS_TABS]: "has-tabs",
        [_MaterialLayoutCssClasses_HAS_DRAWER]: "has-drawer",
        [_MaterialLayoutCssClasses_NAVI_LINK]: "mdl-navigation__link",
        [_MaterialLayoutCssClasses_PANEL]: "mdl-layout__tab-panel",
        [_MaterialLayoutCssClasses_TAB_MANUAL_SWITCH]: "mdl-layout__tab-manual-switch",
        [_MaterialLayoutCssClasses_TAB_BAR_RIGHT_BUTTON]: "mdl-layout__tab-bar-right-button",
        [_MaterialLayoutCssClasses_TAB_BAR_LEFT_BUTTON]: "mdl-layout__tab-bar-left-button",
        [_MaterialLayoutCssClasses_TAB_BAR_BUTTON]: "mdl-layout__tab-bar-button",
        [_MaterialLayoutCssClasses_TAB]: "mdl-layout__tab",
        [_MaterialLayoutCssClasses_TAB_CONTAINER]: "mdl-layout__tab-bar-container",
        [_MaterialLayoutCssClasses_TAB_BAR]: "mdl-layout__tab-bar",
        [_MaterialLayoutCssClasses_OBFUSCATOR]: "mdl-layout__obfuscator",
        [_MaterialLayoutCssClasses_FIXED_DRAWER]: "mdl-layout--fixed-drawer",
        [_MaterialLayoutCssClasses_FIXED_HEADER]: "mdl-layout--fixed-header",
        [_MaterialLayoutCssClasses_HEADER_SCROLL]: "mdl-layout__header--scroll",
        [_MaterialLayoutCssClasses_HEADER_WATERFALL]: "mdl-layout__header--waterfall",
        [_MaterialLayoutCssClasses_HEADER_SEAMED]: "mdl-layout__header--seamed",
        [_MaterialLayoutCssClasses_RIPPLE_IGNORE_EVENTS]: "mdl-ripple-effect--ignore-events",
        [_MaterialLayoutCssClasses_RIPPLE]: "mdl-ripple",
        [_MaterialLayoutCssClasses_RIPPLE_CONTAINER]: "mdl-layout__tab-ripple-container",
        [_MaterialLayoutCssClasses_JS_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [_MaterialLayoutCssClasses_ICON]: "material-icons",
        [_MaterialLayoutCssClasses_DRAWER_BTN]: "mdl-layout__drawer-button",
        [_MaterialLayoutCssClasses_CONTENT]: "mdl-layout__content",
        [_MaterialLayoutCssClasses_DRAWER]: "mdl-layout__drawer",
        [_MaterialLayoutCssClasses_HEADER]: "mdl-layout__header",
        [_MaterialLayoutCssClasses_CONTAINER]: "mdl-layout__container"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: m4d_components._MaterialLayoutMode.prototype,
        [SCROLL]: 3,
        [WATERFALL]: 2,
        [SEAMED]: 1,
        [STANDARD]: 0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: m4d_components._KeyCode.prototype,
        [value$]: 13
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: m4d_components._KeyCode.prototype,
        [value$]: 27
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: m4d_components._KeyCode.prototype,
        [value$]: 32
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: m4d_components._KeyCode.prototype,
        [value$]: 38
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: m4d_components._KeyCode.prototype,
        [value$]: 40
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: m4d_components._MaterialMenuConstant.prototype,
        [_MaterialMenuConstant_CLOSE_TIMEOUT]: 150,
        [_MaterialMenuConstant_TRANSITION_DURATION_FRACTION]: 0,
        [_MaterialMenuConstant_TRANSITION_DURATION_SECONDS]: 0
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: m4d_components._MaterialMenuCssClasses.prototype,
        [_MaterialMenuCssClasses_UNALIGNED]: "mdl-menu--unaligned",
        [_MaterialMenuCssClasses_TOP_RIGHT]: "mdl-menu--top-right",
        [_MaterialMenuCssClasses_TOP_LEFT]: "mdl-menu--top-left",
        [_MaterialMenuCssClasses_BOTTOM_RIGHT]: "mdl-menu--bottom-right",
        [_MaterialMenuCssClasses_BOTTOM_LEFT]: "mdl-menu--bottom-left",
        [_MaterialMenuCssClasses_IS_ANIMATING]: "is-animating",
        [_MaterialMenuCssClasses_IS_VISIBLE]: "is-visible",
        [_MaterialMenuCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialMenuCssClasses_RIPPLE]: "mdl-ripple",
        [_MaterialMenuCssClasses_RIPPLE_IGNORE_EVENTS]: "mdl-ripple-effect--ignore-events",
        [_MaterialMenuCssClasses_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [_MaterialMenuCssClasses_ITEM_RIPPLE_CONTAINER]: "mdl-menu__item-ripple-container",
        [_MaterialMenuCssClasses_ITEM]: "mdl-menu__item",
        [_MaterialMenuCssClasses_OUTLINE]: "mdl-menu__outline",
        [_MaterialMenuCssClasses_CONTAINER]: "mdl-menu__container"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: m4d_components._MaterialProgressConstant.prototype
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: m4d_components._MaterialProgressCssClasses.prototype,
        [_MaterialProgressCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialProgressCssClasses_INDETERMINATE_CLASS]: "mdl-progress__indeterminate"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: m4d_components._MaterialProgressVerticalConstant.prototype
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: m4d_components._MaterialProgressVerticalCssClasses.prototype,
        [_MaterialProgressVerticalCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialProgressVerticalCssClasses_PROGRESS]: "mdl-vprogress--progress-",
        [_MaterialProgressVerticalCssClasses_SECTION]: "mdl-vprogress__section",
        [_MaterialProgressVerticalCssClasses_INDETERMINATE_CLASS]: "mdl-vprogress__indeterminate"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: m4d_components._MaterialRadioConstant.prototype,
        [_MaterialRadioConstant_TINY_TIMEOUT_IN_MS]: 10
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: m4d_components._MaterialRadioCssClasses.prototype,
        [_MaterialRadioCssClasses_RIPPLE]: "mdl-ripple",
        [_MaterialRadioCssClasses_RIPPLE_CENTER]: "mdl-ripple--center",
        [_MaterialRadioCssClasses_RIPPLE_CONTAINER]: "mdl-radio__ripple-container",
        [_MaterialRadioCssClasses_RIPPLE_IGNORE_EVENTS]: "mdl-ripple-effect--ignore-events",
        [_MaterialRadioCssClasses_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [_MaterialRadioCssClasses_RADIO_INNER_CIRCLE]: "mdl-radio__inner-circle",
        [_MaterialRadioCssClasses_RADIO_OUTER_CIRCLE]: "mdl-radio__outer-circle",
        [_MaterialRadioCssClasses_LABEL]: "mdl-radio__label",
        [_MaterialRadioCssClasses_INPUT]: "mdl-radio__button",
        [_MaterialRadioCssClasses_JS_RADIO]: "mdl-radio",
        [_MaterialRadioCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialRadioCssClasses_IS_CHECKED]: "is-checked",
        [_MaterialRadioCssClasses_IS_DISABLED]: "is-disabled",
        [_MaterialRadioCssClasses_IS_FOCUSED]: "is-focused"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: m4d_components._MaterialRippleConstant.prototype,
        [FINAL_SCALE]: "",
        [FINAL_OPACITY]: "0",
        [INITIAL_OPACITY]: "0.4",
        [INITIAL_SIZE]: "1px",
        [INITIAL_SCALE]: "scale(0.0001, 0.0001)"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: m4d_components._MaterialRippleCssClasses.prototype,
        [IS_VISIBLE$]: "is-visible",
        [IS_ANIMATING$0]: "is-animating",
        [MDL_RIPPLE]: "mdl-ripple",
        [MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS]: "mdl-ripple-effect--ignore-events",
        [MDL_RIPPLE_CENTER]: "mdl-ripple--center"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: m4d_components._MaterialSliderConstant.prototype
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: m4d_components._MaterialSliderCssClasses.prototype,
        [IS_UPGRADED$13]: "is-upgraded",
        [IS_LOWEST_VALUE]: "is-lowest-value",
        [BACKGROUND_UPPER]: "mdl-slider__background-upper",
        [BACKGROUND_LOWER]: "mdl-slider__background-lower",
        [BACKGROUND_FLEX]: "mdl-slider__background-flex",
        [SLIDER_CONTAINER]: "mdl-slider__container",
        [IE_CONTAINER]: "mdl-slider__ie-container"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: m4d_components._MaterialSpinnerConstant.prototype,
        [SPINNER_LAYER_COUNT]: 4
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: m4d_components._MaterialSpinnerCssClasses.prototype,
        [IS_ACTIVE$]: "is-active",
        [IS_UPGRADED$14]: "is-upgraded",
        [SPINNER_RIGHT]: "mdl-spinner__right",
        [SPINNER_LEFT]: "mdl-spinner__left",
        [SPINNER_GAP_PATCH]: "mdl-spinner__gap-patch",
        [SPINNER_CIRCLE]: "mdl-spinner__circle",
        [SPINNER_CIRCLE_CLIPPER]: "mdl-spinner__circle-clipper",
        [SPINNER_LAYER]: "mdl-spinner__layer"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: m4d_components._MaterialSwitchConstant.prototype,
        [_MaterialSwitchConstant_TINY_TIMEOUT_IN_MS]: 100
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: m4d_components._MaterialSwitchCssClasses.prototype,
        [_MaterialSwitchCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialSwitchCssClasses_IS_CHECKED]: "is-checked",
        [_MaterialSwitchCssClasses_IS_DISABLED]: "is-disabled",
        [_MaterialSwitchCssClasses_IS_FOCUSED]: "is-focused",
        [_MaterialSwitchCssClasses_RIPPLE]: "mdl-ripple",
        [_MaterialSwitchCssClasses_RIPPLE_CENTER]: "mdl-ripple--center",
        [_MaterialSwitchCssClasses_RIPPLE_CONTAINER]: "mdl-switch__ripple-container",
        [_MaterialSwitchCssClasses_RIPPLE_IGNORE_EVENTS]: "mdl-ripple-effect--ignore-events",
        [_MaterialSwitchCssClasses_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [_MaterialSwitchCssClasses_FOCUS_HELPER]: "mdl-switch__focus-helper",
        [_MaterialSwitchCssClasses_THUMB]: "mdl-switch__thumb",
        [_MaterialSwitchCssClasses_TRACK]: "mdl-switch__track",
        [_MaterialSwitchCssClasses_LABEL]: "mdl-switch__label",
        [_MaterialSwitchCssClasses_INPUT]: "mdl-switch__input"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: m4d_components._MaterialTabsConstant.prototype
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: m4d_components._MaterialTabsCssClasses.prototype,
        [_MaterialTabsCssClasses_MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS]: "mdl-ripple-effect--ignore-events",
        [_MaterialTabsCssClasses_MDL_RIPPLE]: "mdl-ripple",
        [_MaterialTabsCssClasses_MDL_RIPPLE_CONTAINER]: "mdl-tabs__ripple-container",
        [_MaterialTabsCssClasses_MDL_JS_RIPPLE_EFFECT]: "mdl-ripple-effect",
        [_MaterialTabsCssClasses_UPGRADED_CLASS]: "is-upgraded",
        [_MaterialTabsCssClasses_ACTIVE_CLASS]: "is-active",
        [_MaterialTabsCssClasses_PANEL_CLASS]: "mdl-tabs__panel",
        [_MaterialTabsCssClasses_TAB_CLASS]: "mdl-tabs__tab"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: m4d_components._MaterialTextfieldConstant.prototype,
        [_MaterialTextfieldConstant_MAX_ROWS_ATTRIBUTE]: "maxrows",
        [_MaterialTextfieldConstant_NO_MAX_ROWS]: -1
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: m4d_components._MaterialTextfieldCssClasses.prototype,
        [_MaterialTextfieldCssClasses_HAS_PLACEHOLDER]: "has-placeholder",
        [_MaterialTextfieldCssClasses_IS_UPGRADED]: "is-upgraded",
        [_MaterialTextfieldCssClasses_IS_INVALID]: "is-invalid",
        [_MaterialTextfieldCssClasses_IS_DISABLED]: "is-disabled",
        [_MaterialTextfieldCssClasses_IS_FOCUSED]: "is-focused",
        [_MaterialTextfieldCssClasses_IS_DIRTY]: "is-dirty",
        [_MaterialTextfieldCssClasses_INPUT]: "mdl-textfield__input",
        [_MaterialTextfieldCssClasses_LABEL]: "mdl-textfield__label"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: m4d_components._MaterialTooltipConstant.prototype
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: m4d_components._MaterialTooltipCssClasses.prototype,
        [TOP]: "mdl-tooltip--top",
        [RIGHT]: "mdl-tooltip--right",
        [LEFT]: "mdl-tooltip--left",
        [BOTTOM]: "mdl-tooltip--bottom",
        [IS_ACTIVE$0]: "is-active"
      });
    }
  }, false);
  m4d_components.CoreComponentsModule = class CoreComponentsModule extends m4d_ioc.Module {
    configure() {
      m4d_components.registerMdlComponents();
    }
    get dependsOn() {
      return JSArrayOfModuleL().of([new m4d_formatter.FormatterModule.new()]);
    }
  };
  (m4d_components.CoreComponentsModule.new = function() {
    ;
  }).prototype = m4d_components.CoreComponentsModule.prototype;
  dart.addTypeTests(m4d_components.CoreComponentsModule);
  dart.addTypeCaches(m4d_components.CoreComponentsModule);
  dart.setMethodSignature(m4d_components.CoreComponentsModule, () => ({
    __proto__: dart.getMethods(m4d_components.CoreComponentsModule.__proto__),
    configure: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(m4d_components.CoreComponentsModule, L0);
  var _logger = dart.privateName(m4d_components, "_logger");
  var _lazyPipe = dart.privateName(m4d_components, "_lazyPipe");
  var _init = dart.privateName(m4d_components, "_init");
  var _pipeline = dart.privateName(m4d_components, "_pipeline");
  var _parts = dart.privateName(m4d_components, "_parts");
  var _MaterialFormatterCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialFormatterCssClasses.IS_UPGRADED");
  var C0;
  m4d_components.MaterialFormatter = class MaterialFormatter extends m4d_core.MdlComponent {
    static widget(element) {
      let t1;
      let formatter = null;
      try {
        formatter = m4d_components.MaterialFormatter.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialFormatter), {showWarning: false}));
      } catch (e) {
        let ex = dart.getThrown(e);
        if (typeof ex == 'string') {
          formatter = (t1 = m4d_components._dummyFormatter, t1 == null ? m4d_components._dummyFormatter = new m4d_components.MaterialDummyFormatter.new(element, m4d_ioc.Container.new()) : t1);
        } else
          throw e;
      }
      return formatter;
    }
    format(value) {
      return this[_pipeline].format(value);
    }
    [_init]() {
      this[_logger].fine("MaterialFormatter - init");
      this.element[$classes].add("mdl-formatter");
      this.element[$classes].add(m4d_components.MaterialFormatter._cssClasses.IS_UPGRADED);
    }
    get [_parts]() {
      return new (UnmodifiableListViewOfStringL()).new(this.element[$attributes][$_get]("mdl-formatter")[$trim]()[$split]("|"));
    }
    get [_pipeline]() {
      if (this[_lazyPipe] == null) {
        let parts = this[_parts];
        this[_lazyPipe] = new m4d_formatter.FormatterPipeline.fromList(this.injector.resolve(services.Formatters).as(m4d_formatter.Formatters), parts[$getRange](0, parts.length));
      }
      return this[_lazyPipe];
    }
  };
  (m4d_components.MaterialFormatter.fromElement = function(element, injector) {
    this[_logger] = logger.Logger.new("mdlformatter.MaterialFormatter");
    this[_lazyPipe] = null;
    m4d_components.MaterialFormatter.__proto__.new.call(this, element, injector);
    this[_init]();
  }).prototype = m4d_components.MaterialFormatter.prototype;
  dart.addTypeTests(m4d_components.MaterialFormatter);
  dart.addTypeCaches(m4d_components.MaterialFormatter);
  dart.setMethodSignature(m4d_components.MaterialFormatter, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialFormatter.__proto__),
    format: dart.fnType(core.String, [dart.dynamic]),
    [_init]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialFormatter, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialFormatter.__proto__),
    [_parts]: collection.UnmodifiableListView$(core.String),
    [_pipeline]: m4d_formatter.FormatterPipeline
  }));
  dart.setLibraryUri(m4d_components.MaterialFormatter, L0);
  dart.setFieldSignature(m4d_components.MaterialFormatter, () => ({
    __proto__: dart.getFields(m4d_components.MaterialFormatter.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_lazyPipe]: dart.fieldType(m4d_formatter.FormatterPipeline)
  }));
  dart.defineLazy(m4d_components.MaterialFormatter, {
    /*m4d_components.MaterialFormatter._cssClasses*/get _cssClasses() {
      return C0 || CT.C0;
    }
  }, true);
  m4d_components.MaterialDummyFormatter = class MaterialDummyFormatter extends m4d_components.MaterialFormatter {
    format(value) {
      return dart.toString(value);
    }
    [_init]() {
      this[_logger].fine("MaterialDummyFormatter - init");
      this.element[$classes].add("mdl-formatter");
      this.element[$classes].add(m4d_components.MaterialDummyFormatter._cssClasses.IS_UPGRADED);
    }
  };
  (m4d_components.MaterialDummyFormatter.new = function(element, iocContainer) {
    m4d_components.MaterialDummyFormatter.__proto__.fromElement.call(this, element, iocContainer);
    ;
  }).prototype = m4d_components.MaterialDummyFormatter.prototype;
  dart.addTypeTests(m4d_components.MaterialDummyFormatter);
  dart.addTypeCaches(m4d_components.MaterialDummyFormatter);
  dart.setLibraryUri(m4d_components.MaterialDummyFormatter, L0);
  dart.defineLazy(m4d_components.MaterialDummyFormatter, {
    /*m4d_components.MaterialDummyFormatter._cssClasses*/get _cssClasses() {
      return C0 || CT.C0;
    }
  }, true);
  m4d_components._MaterialFormatterCssClasses = class _MaterialFormatterCssClasses extends core.Object {
    get IS_UPGRADED() {
      return this[IS_UPGRADED];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialFormatterCssClasses.new = function() {
    this[IS_UPGRADED] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialFormatterCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialFormatterCssClasses);
  dart.addTypeCaches(m4d_components._MaterialFormatterCssClasses);
  const IS_UPGRADED = _MaterialFormatterCssClasses_IS_UPGRADED;
  dart.setLibraryUri(m4d_components._MaterialFormatterCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialFormatterCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialFormatterCssClasses.__proto__),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  m4d_components._MaterialFormatterConstant = class _MaterialFormatterConstant extends core.Object {};
  (m4d_components._MaterialFormatterConstant.new = function() {
    ;
  }).prototype = m4d_components._MaterialFormatterConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialFormatterConstant);
  dart.addTypeCaches(m4d_components._MaterialFormatterConstant);
  dart.setLibraryUri(m4d_components._MaterialFormatterConstant, L0);
  dart.defineLazy(m4d_components._MaterialFormatterConstant, {
    /*m4d_components._MaterialFormatterConstant.WIDGET_SELECTOR*/get WIDGET_SELECTOR() {
      return "mdl-formatter";
    }
  }, true);
  m4d_components.FallbackFormatter = class FallbackFormatter extends core.Object {
    formatterFor(inquirer, baseElement) {
      if (inquirer == null) {
        let attributes = baseElement[$attributes][$entries][$map](core.String, dart.fn(e => dart.str(e.value) + "=\"" + dart.str(e.key) + "\"}", MapEntryLToStringL()))[$toList]()[$join](",");
        dart.throw("inquirer for " + dart.str(baseElement) + " (" + dart.str(baseElement[$classes][$join](", ")) + " / " + dart.str(attributes) + ") is null!");
      }
      let formatter = m4d_components.MaterialFormatter.widget(html.HtmlElement.as(inquirer));
      if (m4d_components.MaterialDummyFormatter.is(formatter)) {
        formatter = m4d_components.MaterialFormatter.widget(html.HtmlElement.as(baseElement));
      }
      return formatter;
    }
  };
  (m4d_components.FallbackFormatter.new = function() {
    ;
  }).prototype = m4d_components.FallbackFormatter.prototype;
  dart.addTypeTests(m4d_components.FallbackFormatter);
  dart.addTypeCaches(m4d_components.FallbackFormatter);
  dart.setMethodSignature(m4d_components.FallbackFormatter, () => ({
    __proto__: dart.getMethods(m4d_components.FallbackFormatter.__proto__),
    formatterFor: dart.fnType(m4d_components.MaterialFormatter, [html.Element, html.Element])
  }));
  dart.setLibraryUri(m4d_components.FallbackFormatter, L0);
  var _group = dart.privateName(m4d_components, "_group");
  var _uncheckOthers = dart.privateName(m4d_components, "_uncheckOthers");
  var _groupName = dart.privateName(m4d_components, "_groupName");
  var _isNavigation = dart.privateName(m4d_components, "_isNavigation");
  var _getLinkFragments = dart.privateName(m4d_components, "_getLinkFragments");
  var _MaterialAccordionConstant_CHECKBOX_NAME = dart.privateName(m4d_components, "_MaterialAccordionConstant.CHECKBOX_NAME");
  var C1;
  var _MaterialAccordionCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.IS_UPGRADED");
  var _MaterialAccordionCssClasses_RIPPLE_EFFECT_IGNORE_EVENTS = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.RIPPLE_EFFECT_IGNORE_EVENTS");
  var _MaterialAccordionCssClasses_LINK = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.LINK");
  var _MaterialAccordionCssClasses_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.RIPPLE_EFFECT");
  var _MaterialAccordionCssClasses_RIPPLE = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.RIPPLE");
  var _MaterialAccordionCssClasses_RIPPLE_CONTAINER = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.RIPPLE_CONTAINER");
  var _MaterialAccordionCssClasses_ACCORDION_LABEL = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.ACCORDION_LABEL");
  var _MaterialAccordionCssClasses_ACCORDION = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.ACCORDION");
  var _MaterialAccordionCssClasses_NAVIGATION = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.NAVIGATION");
  var _MaterialAccordionCssClasses_ACCORDION_TYPE = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.ACCORDION_TYPE");
  var _MaterialAccordionCssClasses_GROUP = dart.privateName(m4d_components, "_MaterialAccordionCssClasses.GROUP");
  var C2;
  m4d_components.MaterialAccordion = class MaterialAccordion extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialAccordion.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialAccordion)));
    }
    attached() {
      this[_init]();
    }
    [_init]() {
      this[_logger].fine("MaterialAccordion - init");
      let hasRipples = false;
      if (this.element != null) {
        if (dart.test(this.group[$classes].contains(m4d_components.MaterialAccordion._cssClasses.RIPPLE_EFFECT)) || dart.test(this.element[$classes].contains(m4d_components.MaterialAccordion._cssClasses.RIPPLE_EFFECT))) {
          this.group[$classes].add(m4d_components.MaterialAccordion._cssClasses.RIPPLE_EFFECT_IGNORE_EVENTS);
          hasRipples = true;
          this.element[$classes].add(m4d_components.MaterialAccordion._cssClasses.RIPPLE_EFFECT);
        }
        let isRadio = this.group[$classes].contains(m4d_components.MaterialAccordion._cssClasses.ACCORDION_TYPE);
        let panel = html.HtmlElement.as(this.element);
        let label = panel.querySelector("." + dart.str(m4d_components.MaterialAccordion._cssClasses.ACCORDION_LABEL));
        let id = "accordion-" + dart.str(dart.hashCode(label));
        html.LabelElement.as(label).htmlFor = id;
        let inputElement = html.CheckboxInputElement.new();
        if (dart.test(isRadio)) {
          this.eventStreams[$add](inputElement[$onClick].listen(dart.fn(event => {
            if (dart.test(inputElement[$checked])) {
              this[_uncheckOthers](html.InputElement.as(inputElement));
            }
          }, EventLToNullN())));
        }
        inputElement[$name] = this[_groupName];
        inputElement.id = id;
        label[$insertAdjacentElement]("beforebegin", inputElement);
        if (dart.test(this[_isNavigation])) {
          let uri = core.Uri.parse(dart.toString(html.document[$baseUri]));
          if (uri.fragment[$isNotEmpty]) {
            if (dart.test(this[_getLinkFragments](panel)[$contains](uri.fragment))) {
              inputElement[$checked] = true;
            }
          }
        }
        if (hasRipples) {
          let rippleContainer = html.SpanElement.new();
          rippleContainer[$classes].add(m4d_components.MaterialAccordion._cssClasses.RIPPLE_CONTAINER);
          rippleContainer[$classes].add(m4d_components.MaterialAccordion._cssClasses.RIPPLE_EFFECT);
          let ripple = html.SpanElement.new();
          ripple[$classes].add(m4d_components.MaterialAccordion._cssClasses.RIPPLE);
          rippleContainer[$append](ripple);
          label[$append](rippleContainer);
        }
        this.element[$classes].add(m4d_components.MaterialAccordion._cssClasses.IS_UPGRADED);
      }
    }
    get group() {
      function _findAccordionGroup(el) {
        if (el == null) {
          dart.throw(new core.ArgumentError.new("mdl-accordion" + " must have a " + dart.str(m4d_components.MaterialAccordion._cssClasses.GROUP) + " set!"));
        }
        if (dart.test(el[$classes].contains(m4d_components.MaterialAccordion._cssClasses.GROUP))) {
          return el;
        }
        return _findAccordionGroup(html.HtmlElement.as(el[$parent]));
      }
      dart.fn(_findAccordionGroup, HtmlElementLToHtmlElementL());
      if (this[_group] == null) {
        this[_group] = _findAccordionGroup(html.HtmlElement.as(this.element));
      }
      return this[_group];
    }
    get [_groupName]() {
      return dart.str(m4d_components.MaterialAccordion._constant.CHECKBOX_NAME) + "-group-" + dart.str(dart.hashCode(this.group));
    }
    get [_isNavigation]() {
      return this.group[$classes].contains(m4d_components.MaterialAccordion._cssClasses.NAVIGATION);
    }
    [_getLinkFragments](panel) {
      let fragments = JSArrayOfStringL().of([]);
      let links = panel[$querySelectorAll](html.Element, "." + dart.str(m4d_components.MaterialAccordion._cssClasses.LINK));
      links[$forEach](dart.fn(link => {
        let href = html.AnchorElement.as(link).href;
        let fragment = core.Uri.parse(href).fragment;
        if (fragment[$isNotEmpty]) {
          fragments[$add](fragment);
        }
      }, ElementLToNullN()));
      return fragments;
    }
    [_uncheckOthers](elementToExclude) {
      let checkboxes = this.group[$querySelectorAll](html.Element, "[name=" + dart.str(this[_groupName]) + "]")[$map](html.InputElement, dart.fn(element => html.InputElement.as(element), ElementLToInputElementL()))[$toList]();
      checkboxes[$forEach](dart.fn(checkbox => {
        if (!dart.equals(checkbox, elementToExclude)) {
          checkbox.checked = false;
        }
      }, InputElementLToNullN()));
    }
  };
  (m4d_components.MaterialAccordion.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialAccordion");
    this[_group] = null;
    m4d_components.MaterialAccordion.__proto__.new.call(this, element, iocContainer);
  }).prototype = m4d_components.MaterialAccordion.prototype;
  dart.addTypeTests(m4d_components.MaterialAccordion);
  dart.addTypeCaches(m4d_components.MaterialAccordion);
  dart.setMethodSignature(m4d_components.MaterialAccordion, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialAccordion.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_getLinkFragments]: dart.fnType(core.List$(core.String), [html.Element]),
    [_uncheckOthers]: dart.fnType(dart.void, [html.InputElement])
  }));
  dart.setGetterSignature(m4d_components.MaterialAccordion, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialAccordion.__proto__),
    group: html.HtmlElement,
    [_groupName]: core.String,
    [_isNavigation]: core.bool
  }));
  dart.setLibraryUri(m4d_components.MaterialAccordion, L0);
  dart.setFieldSignature(m4d_components.MaterialAccordion, () => ({
    __proto__: dart.getFields(m4d_components.MaterialAccordion.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_group]: dart.fieldType(html.HtmlElement)
  }));
  dart.defineLazy(m4d_components.MaterialAccordion, {
    /*m4d_components.MaterialAccordion._constant*/get _constant() {
      return C1 || CT.C1;
    },
    /*m4d_components.MaterialAccordion._cssClasses*/get _cssClasses() {
      return C2 || CT.C2;
    }
  }, true);
  m4d_components._MaterialAccordionCssClasses = class _MaterialAccordionCssClasses extends core.Object {
    get GROUP() {
      return this[GROUP];
    }
    set GROUP(value) {
      super.GROUP = value;
    }
    get ACCORDION_TYPE() {
      return this[ACCORDION_TYPE];
    }
    set ACCORDION_TYPE(value) {
      super.ACCORDION_TYPE = value;
    }
    get NAVIGATION() {
      return this[NAVIGATION];
    }
    set NAVIGATION(value) {
      super.NAVIGATION = value;
    }
    get ACCORDION() {
      return this[ACCORDION];
    }
    set ACCORDION(value) {
      super.ACCORDION = value;
    }
    get ACCORDION_LABEL() {
      return this[ACCORDION_LABEL];
    }
    set ACCORDION_LABEL(value) {
      super.ACCORDION_LABEL = value;
    }
    get RIPPLE_CONTAINER() {
      return this[RIPPLE_CONTAINER];
    }
    set RIPPLE_CONTAINER(value) {
      super.RIPPLE_CONTAINER = value;
    }
    get RIPPLE() {
      return this[RIPPLE];
    }
    set RIPPLE(value) {
      super.RIPPLE = value;
    }
    get RIPPLE_EFFECT() {
      return this[RIPPLE_EFFECT];
    }
    set RIPPLE_EFFECT(value) {
      super.RIPPLE_EFFECT = value;
    }
    get LINK() {
      return this[LINK];
    }
    set LINK(value) {
      super.LINK = value;
    }
    get RIPPLE_EFFECT_IGNORE_EVENTS() {
      return this[RIPPLE_EFFECT_IGNORE_EVENTS];
    }
    set RIPPLE_EFFECT_IGNORE_EVENTS(value) {
      super.RIPPLE_EFFECT_IGNORE_EVENTS = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialAccordionCssClasses.new = function() {
    this[GROUP] = "mdl-accordion" + "-group";
    this[ACCORDION_TYPE] = "mdl-accordion" + "--radio-type";
    this[NAVIGATION] = "mdl-accordion" + "--navigation";
    this[ACCORDION] = "mdl-accordion";
    this[ACCORDION_LABEL] = "mdl-accordion" + "__label";
    this[RIPPLE_CONTAINER] = "mdl-accordion" + "__ripple-container";
    this[RIPPLE] = "mdl-ripple";
    this[RIPPLE_EFFECT] = "mdl-ripple-effect";
    this[LINK] = "mdl-navigation__link";
    this[RIPPLE_EFFECT_IGNORE_EVENTS] = "mdl-ripple-effect--ignore-events";
    this[IS_UPGRADED$] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialAccordionCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialAccordionCssClasses);
  dart.addTypeCaches(m4d_components._MaterialAccordionCssClasses);
  const GROUP = _MaterialAccordionCssClasses_GROUP;
  const ACCORDION_TYPE = _MaterialAccordionCssClasses_ACCORDION_TYPE;
  const NAVIGATION = _MaterialAccordionCssClasses_NAVIGATION;
  const ACCORDION = _MaterialAccordionCssClasses_ACCORDION;
  const ACCORDION_LABEL = _MaterialAccordionCssClasses_ACCORDION_LABEL;
  const RIPPLE_CONTAINER = _MaterialAccordionCssClasses_RIPPLE_CONTAINER;
  const RIPPLE = _MaterialAccordionCssClasses_RIPPLE;
  const RIPPLE_EFFECT = _MaterialAccordionCssClasses_RIPPLE_EFFECT;
  const LINK = _MaterialAccordionCssClasses_LINK;
  const RIPPLE_EFFECT_IGNORE_EVENTS = _MaterialAccordionCssClasses_RIPPLE_EFFECT_IGNORE_EVENTS;
  const IS_UPGRADED$ = _MaterialAccordionCssClasses_IS_UPGRADED;
  dart.setLibraryUri(m4d_components._MaterialAccordionCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialAccordionCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialAccordionCssClasses.__proto__),
    GROUP: dart.finalFieldType(core.String),
    ACCORDION_TYPE: dart.finalFieldType(core.String),
    NAVIGATION: dart.finalFieldType(core.String),
    ACCORDION: dart.finalFieldType(core.String),
    ACCORDION_LABEL: dart.finalFieldType(core.String),
    RIPPLE_CONTAINER: dart.finalFieldType(core.String),
    RIPPLE: dart.finalFieldType(core.String),
    RIPPLE_EFFECT: dart.finalFieldType(core.String),
    LINK: dart.finalFieldType(core.String),
    RIPPLE_EFFECT_IGNORE_EVENTS: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialAccordionCssClasses, {
    /*m4d_components._MaterialAccordionCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-accordion";
    }
  }, true);
  m4d_components._MaterialAccordionConstant = class _MaterialAccordionConstant extends core.Object {
    get CHECKBOX_NAME() {
      return this[CHECKBOX_NAME];
    }
    set CHECKBOX_NAME(value) {
      super.CHECKBOX_NAME = value;
    }
  };
  (m4d_components._MaterialAccordionConstant.new = function() {
    this[CHECKBOX_NAME] = "mdl-accordion";
    ;
  }).prototype = m4d_components._MaterialAccordionConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialAccordionConstant);
  dart.addTypeCaches(m4d_components._MaterialAccordionConstant);
  const CHECKBOX_NAME = _MaterialAccordionConstant_CHECKBOX_NAME;
  dart.setLibraryUri(m4d_components._MaterialAccordionConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialAccordionConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialAccordionConstant.__proto__),
    CHECKBOX_NAME: dart.finalFieldType(core.String)
  }));
  var C3;
  var _MaterialBadgeCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialBadgeCssClasses.IS_UPGRADED");
  var C4;
  m4d_components.MaterialBadge = class MaterialBadge extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialBadge.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialBadge)));
    }
    set value(val) {
      if (val == null || val[$isEmpty]) {
        this.element[$dataset][$remove]("badge");
        return;
      }
      this.element[$dataset][$_set]("badge", m4d_components.MaterialFormatter.widget(html.HtmlElement.as(this.element)).format(val));
    }
    get value() {
      return dart.test(this.element[$dataset][$containsKey]("badge")) ? this.element[$dataset][$_get]("badge") : "";
    }
    [_init]() {
      this[_logger].fine("MaterialBadge - init");
      this.element[$classes].add(m4d_components.MaterialBadge._cssClasses.IS_UPGRADED);
    }
  };
  (m4d_components.MaterialBadge.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialBadge");
    m4d_components.MaterialBadge.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialBadge.prototype;
  dart.addTypeTests(m4d_components.MaterialBadge);
  dart.addTypeCaches(m4d_components.MaterialBadge);
  dart.setMethodSignature(m4d_components.MaterialBadge, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialBadge.__proto__),
    [_init]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialBadge, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialBadge.__proto__),
    value: core.String
  }));
  dart.setSetterSignature(m4d_components.MaterialBadge, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialBadge.__proto__),
    value: core.String
  }));
  dart.setLibraryUri(m4d_components.MaterialBadge, L0);
  dart.setFieldSignature(m4d_components.MaterialBadge, () => ({
    __proto__: dart.getFields(m4d_components.MaterialBadge.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger)
  }));
  dart.defineLazy(m4d_components.MaterialBadge, {
    /*m4d_components.MaterialBadge._constant*/get _constant() {
      return C3 || CT.C3;
    },
    /*m4d_components.MaterialBadge._cssClasses*/get _cssClasses() {
      return C4 || CT.C4;
    }
  }, true);
  m4d_components._MaterialBadgeCssClasses = class _MaterialBadgeCssClasses extends core.Object {
    get IS_UPGRADED() {
      return this[IS_UPGRADED$0];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialBadgeCssClasses.new = function() {
    this[IS_UPGRADED$0] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialBadgeCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialBadgeCssClasses);
  dart.addTypeCaches(m4d_components._MaterialBadgeCssClasses);
  const IS_UPGRADED$0 = _MaterialBadgeCssClasses_IS_UPGRADED;
  dart.setLibraryUri(m4d_components._MaterialBadgeCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialBadgeCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialBadgeCssClasses.__proto__),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialBadgeCssClasses, {
    /*m4d_components._MaterialBadgeCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-badge";
    }
  }, true);
  m4d_components._MaterialBadgeConstant = class _MaterialBadgeConstant extends core.Object {};
  (m4d_components._MaterialBadgeConstant.new = function() {
    ;
  }).prototype = m4d_components._MaterialBadgeConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialBadgeConstant);
  dart.addTypeCaches(m4d_components._MaterialBadgeConstant);
  dart.setLibraryUri(m4d_components._MaterialBadgeConstant, L0);
  var _valueElement = dart.privateName(m4d_components, "_valueElement");
  var _blurHandler = dart.privateName(m4d_components, "_blurHandler");
  var C5;
  var _MaterialButtonCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialButtonCssClasses.IS_UPGRADED");
  var _MaterialButtonCssClasses_RIPPLE = dart.privateName(m4d_components, "_MaterialButtonCssClasses.RIPPLE");
  var _MaterialButtonCssClasses_RIPPLE_CONTAINER = dart.privateName(m4d_components, "_MaterialButtonCssClasses.RIPPLE_CONTAINER");
  var _MaterialButtonCssClasses_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialButtonCssClasses.RIPPLE_EFFECT");
  var C6;
  m4d_components.MaterialButton = class MaterialButton extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialButton.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialButton)));
    }
    disable() {
      html.ButtonElement.as(this.element).disabled = true;
    }
    enable() {
      html.ButtonElement.as(this.element).disabled = false;
    }
    set enabled(_enabled) {
      return dart.test(_enabled) ? this.enable() : this.disable();
    }
    get enabled() {
      return !dart.test(html.ButtonElement.as(this.element).disabled);
    }
    set value(value) {
      if (value != null) {
        this[_valueElement][$text] = m4d_components.MaterialFormatter.widget(html.HtmlElement.as(this.element)).format(value);
      }
    }
    get value() {
      return this[_valueElement][$text];
    }
    [_init]() {
      this[_logger].fine("MaterialButton - init");
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialButton._cssClasses.RIPPLE_EFFECT))) {
        let rippleContainer = html.SpanElement.new();
        rippleContainer[$classes].add(m4d_components.MaterialButton._cssClasses.RIPPLE_CONTAINER);
        let rippleElement = html.SpanElement.new();
        rippleElement[$classes].add(m4d_components.MaterialButton._cssClasses.RIPPLE);
        rippleContainer[$append](rippleElement);
        this.eventStreams[$add](rippleElement[$onMouseUp].listen(dart.bind(this, _blurHandler)));
        this.element[$append](rippleContainer);
      }
      this.eventStreams[$add](this.element[$onMouseUp].listen(dart.bind(this, _blurHandler)));
      this.eventStreams[$add](this.element[$onMouseLeave].listen(dart.bind(this, _blurHandler)));
      const _kickInFormatter = () => {
        this.value = this.value;
      };
      dart.fn(_kickInFormatter, VoidTovoid());
      _kickInFormatter();
      this.element[$classes].add(m4d_components.MaterialButton._cssClasses.IS_UPGRADED);
      this[_logger].finer("MaterialButton - init done...");
    }
    [_blurHandler](event) {
      this[_logger].finer("blur...");
      this.element.blur();
    }
    get [_valueElement]() {
      let valueElement = this.element;
      if (dart.test(valueElement.hasChildNodes())) {
        valueElement = valueElement.firstChild;
      }
      return valueElement;
    }
  };
  (m4d_components.MaterialButton.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialButton");
    m4d_components.MaterialButton.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialButton.prototype;
  dart.addTypeTests(m4d_components.MaterialButton);
  dart.addTypeCaches(m4d_components.MaterialButton);
  dart.setMethodSignature(m4d_components.MaterialButton, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialButton.__proto__),
    disable: dart.fnType(dart.void, []),
    enable: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_blurHandler]: dart.fnType(dart.void, [html.MouseEvent])
  }));
  dart.setGetterSignature(m4d_components.MaterialButton, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialButton.__proto__),
    enabled: core.bool,
    value: core.String,
    [_valueElement]: html.Node
  }));
  dart.setSetterSignature(m4d_components.MaterialButton, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialButton.__proto__),
    enabled: core.bool,
    value: core.String
  }));
  dart.setLibraryUri(m4d_components.MaterialButton, L0);
  dart.setFieldSignature(m4d_components.MaterialButton, () => ({
    __proto__: dart.getFields(m4d_components.MaterialButton.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger)
  }));
  dart.defineLazy(m4d_components.MaterialButton, {
    /*m4d_components.MaterialButton._constant*/get _constant() {
      return C5 || CT.C5;
    },
    /*m4d_components.MaterialButton._cssClasses*/get _cssClasses() {
      return C6 || CT.C6;
    }
  }, true);
  m4d_components._MaterialButtonCssClasses = class _MaterialButtonCssClasses extends core.Object {
    get RIPPLE_EFFECT() {
      return this[RIPPLE_EFFECT$];
    }
    set RIPPLE_EFFECT(value) {
      super.RIPPLE_EFFECT = value;
    }
    get RIPPLE_CONTAINER() {
      return this[RIPPLE_CONTAINER$];
    }
    set RIPPLE_CONTAINER(value) {
      super.RIPPLE_CONTAINER = value;
    }
    get RIPPLE() {
      return this[RIPPLE$];
    }
    set RIPPLE(value) {
      super.RIPPLE = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$1];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialButtonCssClasses.new = function() {
    this[RIPPLE_EFFECT$] = "mdl-ripple-effect";
    this[RIPPLE_CONTAINER$] = "mdl-button__ripple-container";
    this[RIPPLE$] = "mdl-ripple";
    this[IS_UPGRADED$1] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialButtonCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialButtonCssClasses);
  dart.addTypeCaches(m4d_components._MaterialButtonCssClasses);
  const RIPPLE_EFFECT$ = _MaterialButtonCssClasses_RIPPLE_EFFECT;
  const RIPPLE_CONTAINER$ = _MaterialButtonCssClasses_RIPPLE_CONTAINER;
  const RIPPLE$ = _MaterialButtonCssClasses_RIPPLE;
  const IS_UPGRADED$1 = _MaterialButtonCssClasses_IS_UPGRADED;
  dart.setLibraryUri(m4d_components._MaterialButtonCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialButtonCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialButtonCssClasses.__proto__),
    RIPPLE_EFFECT: dart.finalFieldType(core.String),
    RIPPLE_CONTAINER: dart.finalFieldType(core.String),
    RIPPLE: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialButtonCssClasses, {
    /*m4d_components._MaterialButtonCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-button";
    }
  }, true);
  m4d_components._MaterialButtonConstant = class _MaterialButtonConstant extends core.Object {};
  (m4d_components._MaterialButtonConstant.new = function() {
    ;
  }).prototype = m4d_components._MaterialButtonConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialButtonConstant);
  dart.addTypeCaches(m4d_components._MaterialButtonConstant);
  dart.setLibraryUri(m4d_components._MaterialButtonConstant, L0);
  var _inputElement = dart.privateName(m4d_components, "_inputElement");
  var _updateClasses = dart.privateName(m4d_components, "_updateClasses");
  var _onMouseUp = dart.privateName(m4d_components, "_onMouseUp");
  var _onChange = dart.privateName(m4d_components, "_onChange");
  var _onFocus = dart.privateName(m4d_components, "_onFocus");
  var _onBlur = dart.privateName(m4d_components, "_onBlur");
  var _blur = dart.privateName(m4d_components, "_blur");
  var _checkDisabled = dart.privateName(m4d_components, "_checkDisabled");
  var _checkToggleState = dart.privateName(m4d_components, "_checkToggleState");
  var _MaterialCheckboxConstant_DEFAULT_OFF_VALUE = dart.privateName(m4d_components, "_MaterialCheckboxConstant.DEFAULT_OFF_VALUE");
  var _MaterialCheckboxConstant_TINY_TIMEOUT_IN_MS = dart.privateName(m4d_components, "_MaterialCheckboxConstant.TINY_TIMEOUT_IN_MS");
  var C7;
  var _MaterialCheckboxCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.IS_UPGRADED");
  var _MaterialCheckboxCssClasses_IS_CHECKED = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.IS_CHECKED");
  var _MaterialCheckboxCssClasses_IS_DISABLED = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.IS_DISABLED");
  var _MaterialCheckboxCssClasses_IS_FOCUSED = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.IS_FOCUSED");
  var _MaterialCheckboxCssClasses_RIPPLE = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.RIPPLE");
  var _MaterialCheckboxCssClasses_RIPPLE_CENTER = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.RIPPLE_CENTER");
  var _MaterialCheckboxCssClasses_RIPPLE_CONTAINER = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.RIPPLE_CONTAINER");
  var _MaterialCheckboxCssClasses_RIPPLE_IGNORE_EVENTS = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.RIPPLE_IGNORE_EVENTS");
  var _MaterialCheckboxCssClasses_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.RIPPLE_EFFECT");
  var _MaterialCheckboxCssClasses_TICK_OUTLINE = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.TICK_OUTLINE");
  var _MaterialCheckboxCssClasses_FOCUS_HELPER = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.FOCUS_HELPER");
  var _MaterialCheckboxCssClasses_BOX_OUTLINE = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.BOX_OUTLINE");
  var _MaterialCheckboxCssClasses_LABEL = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.LABEL");
  var _MaterialCheckboxCssClasses_INPUT = dart.privateName(m4d_components, "_MaterialCheckboxCssClasses.INPUT");
  var C8;
  const MdlComponent_FallbackFormatter$36 = class MdlComponent_FallbackFormatter extends m4d_core.MdlComponent {};
  (MdlComponent_FallbackFormatter$36.new = function(element, injector) {
    MdlComponent_FallbackFormatter$36.__proto__.new.call(this, element, injector);
  }).prototype = MdlComponent_FallbackFormatter$36.prototype;
  dart.applyMixin(MdlComponent_FallbackFormatter$36, m4d_components.FallbackFormatter);
  m4d_components.MaterialCheckbox = class MaterialCheckbox extends MdlComponent_FallbackFormatter$36 {
    static widget(element) {
      let checkbox = null;
      try {
        checkbox = m4d_components.MaterialCheckbox.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialCheckbox), {showWarning: false}));
      } catch (e) {
        let ex = dart.getThrown(e);
        if (typeof ex == 'string') {
          let inputField = html.HtmlElement.as(element.querySelector("." + dart.str(m4d_components.MaterialCheckbox._cssClasses.INPUT)));
          checkbox = m4d_components.MaterialCheckbox.as(m4d_core.mdlComponent(inputField, dart.wrapType(m4d_components.MaterialCheckbox)));
        } else
          throw e;
      }
      return checkbox;
    }
    get hub() {
      return this.inputElement;
    }
    get inputElement() {
      if (this[_inputElement] == null) {
        this[_inputElement] = html.CheckboxInputElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialCheckbox._cssClasses.INPUT)));
      }
      return html.CheckboxInputElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialCheckbox._cssClasses.INPUT)));
    }
    disable() {
      this.inputElement[$disabled] = true;
      this[_updateClasses]();
    }
    enable() {
      this.inputElement[$disabled] = false;
      this[_updateClasses]();
    }
    check() {
      this.inputElement[$checked] = true;
      this[_updateClasses]();
    }
    uncheck() {
      this.inputElement[$checked] = false;
      this[_updateClasses]();
    }
    set checked(_checked) {
      return dart.test(_checked) ? this.check() : this.uncheck();
    }
    get checked() {
      return this.inputElement[$checked];
    }
    set disabled(_disabled) {
      return dart.test(_disabled) ? this.disable() : this.enable();
    }
    get disabled() {
      let t4;
      t4 = this.inputElement;
      return t4 == null ? null : t4[$disabled];
    }
    get label() {
      let _label = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialCheckbox._cssClasses.LABEL)));
      return _label != null ? _label[$text][$trim]() : "";
    }
    set label(v) {
      let t4;
      validate.Validate.notNull(core.String, v);
      let _label = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialCheckbox._cssClasses.LABEL)));
      t4 = _label;
      t4 == null ? null : t4[$text] = this.formatterFor(_label, this.element).format(v[$trim]());
    }
    get value() {
      return this.inputElement != null ? this.inputElement[$value][$trim]() : "";
    }
    set value(value) {
      validate.Validate.notNull(core.String, value);
      this.inputElement[$value] = this.formatterFor(this.inputElement, this.element).format(value);
    }
    [_init]() {
      this[_logger].fine("MaterialCheckbox - init");
      let boxOutline = html.SpanElement.new();
      boxOutline[$classes].add(m4d_components.MaterialCheckbox._cssClasses.BOX_OUTLINE);
      let tickContainer = html.SpanElement.new();
      tickContainer[$classes].add(m4d_components.MaterialCheckbox._cssClasses.FOCUS_HELPER);
      let tickOutline = html.SpanElement.new();
      tickOutline[$classes].add(m4d_components.MaterialCheckbox._cssClasses.TICK_OUTLINE);
      boxOutline[$append](tickOutline);
      this.element[$append](tickContainer);
      this.element[$append](boxOutline);
      let rippleContainerElement = null;
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialCheckbox._cssClasses.RIPPLE_EFFECT))) {
        this.element[$classes].add(m4d_components.MaterialCheckbox._cssClasses.RIPPLE_IGNORE_EVENTS);
        rippleContainerElement = html.SpanElement.new();
        rippleContainerElement[$classes].add(m4d_components.MaterialCheckbox._cssClasses.RIPPLE_CONTAINER);
        rippleContainerElement[$classes].add(m4d_components.MaterialCheckbox._cssClasses.RIPPLE_EFFECT);
        rippleContainerElement[$classes].add(m4d_components.MaterialCheckbox._cssClasses.RIPPLE_CENTER);
        this.eventStreams[$add](rippleContainerElement[$onMouseUp].listen(dart.bind(this, _onMouseUp)));
        let ripple = html.SpanElement.new();
        ripple[$classes].add(m4d_components.MaterialCheckbox._cssClasses.RIPPLE);
        rippleContainerElement[$append](ripple);
        this.element[$append](rippleContainerElement);
      }
      this.eventStreams[$add](this.inputElement[$onChange].listen(dart.bind(this, _onChange)));
      this.eventStreams[$add](this.inputElement[$onFocus].listen(dart.bind(this, _onFocus)));
      this.eventStreams[$add](this.inputElement[$onBlur].listen(dart.bind(this, _onBlur)));
      this.eventStreams[$add](this.element[$onMouseUp].listen(dart.bind(this, _onMouseUp)));
      this[_updateClasses]();
      const _kickInFormatter = () => {
        this.label = this.label;
        this.value = this.value;
      };
      dart.fn(_kickInFormatter, VoidTovoid());
      _kickInFormatter();
      this.element[$classes].add(m4d_components.MaterialCheckbox._cssClasses.IS_UPGRADED);
    }
    [_onChange](_) {
      this[_updateClasses]();
    }
    [_onFocus](_) {
      this.element[$classes].add(m4d_components.MaterialCheckbox._cssClasses.IS_FOCUSED);
    }
    [_onBlur](_) {
      this.element[$classes].remove(m4d_components.MaterialCheckbox._cssClasses.IS_FOCUSED);
    }
    [_onMouseUp](_) {
      this[_blur]();
    }
    [_updateClasses]() {
      this[_checkDisabled]();
      this[_checkToggleState]();
    }
    [_checkToggleState]() {
      if (dart.test(this.inputElement[$checked])) {
        this.element[$classes].add(m4d_components.MaterialCheckbox._cssClasses.IS_CHECKED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialCheckbox._cssClasses.IS_CHECKED);
      }
    }
    [_checkDisabled]() {
      if (dart.test(this.inputElement[$disabled])) {
        this.element[$classes].add(m4d_components.MaterialCheckbox._cssClasses.IS_DISABLED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialCheckbox._cssClasses.IS_DISABLED);
      }
    }
    [_blur]() {
      async.Timer.new(new core.Duration.new({milliseconds: m4d_components.MaterialCheckbox._constant.TINY_TIMEOUT_IN_MS}), dart.fn(() => {
        this.inputElement.blur();
      }, VoidToNullN()));
    }
  };
  (m4d_components.MaterialCheckbox.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialCheckbox");
    this[_inputElement] = null;
    m4d_components.MaterialCheckbox.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialCheckbox.prototype;
  dart.addTypeTests(m4d_components.MaterialCheckbox);
  dart.addTypeCaches(m4d_components.MaterialCheckbox);
  dart.setMethodSignature(m4d_components.MaterialCheckbox, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialCheckbox.__proto__),
    disable: dart.fnType(dart.void, []),
    enable: dart.fnType(dart.void, []),
    check: dart.fnType(dart.void, []),
    uncheck: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_onChange]: dart.fnType(dart.void, [dart.dynamic]),
    [_onFocus]: dart.fnType(dart.void, [dart.dynamic]),
    [_onBlur]: dart.fnType(dart.void, [dart.dynamic]),
    [_onMouseUp]: dart.fnType(dart.void, [dart.dynamic]),
    [_updateClasses]: dart.fnType(dart.void, []),
    [_checkToggleState]: dart.fnType(dart.void, []),
    [_checkDisabled]: dart.fnType(dart.void, []),
    [_blur]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialCheckbox, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialCheckbox.__proto__),
    inputElement: html.CheckboxInputElement,
    checked: core.bool,
    disabled: core.bool,
    label: core.String,
    value: core.String
  }));
  dart.setSetterSignature(m4d_components.MaterialCheckbox, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialCheckbox.__proto__),
    checked: core.bool,
    disabled: core.bool,
    label: core.String,
    value: core.String
  }));
  dart.setLibraryUri(m4d_components.MaterialCheckbox, L0);
  dart.setFieldSignature(m4d_components.MaterialCheckbox, () => ({
    __proto__: dart.getFields(m4d_components.MaterialCheckbox.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_inputElement]: dart.fieldType(html.CheckboxInputElement)
  }));
  dart.defineLazy(m4d_components.MaterialCheckbox, {
    /*m4d_components.MaterialCheckbox._constant*/get _constant() {
      return C7 || CT.C7;
    },
    /*m4d_components.MaterialCheckbox._cssClasses*/get _cssClasses() {
      return C8 || CT.C8;
    }
  }, true);
  m4d_components._MaterialCheckboxCssClasses = class _MaterialCheckboxCssClasses extends core.Object {
    get INPUT() {
      return this[INPUT];
    }
    set INPUT(value) {
      super.INPUT = value;
    }
    get LABEL() {
      return this[LABEL];
    }
    set LABEL(value) {
      super.LABEL = value;
    }
    get BOX_OUTLINE() {
      return this[BOX_OUTLINE];
    }
    set BOX_OUTLINE(value) {
      super.BOX_OUTLINE = value;
    }
    get FOCUS_HELPER() {
      return this[FOCUS_HELPER];
    }
    set FOCUS_HELPER(value) {
      super.FOCUS_HELPER = value;
    }
    get TICK_OUTLINE() {
      return this[TICK_OUTLINE];
    }
    set TICK_OUTLINE(value) {
      super.TICK_OUTLINE = value;
    }
    get RIPPLE_EFFECT() {
      return this[RIPPLE_EFFECT$0];
    }
    set RIPPLE_EFFECT(value) {
      super.RIPPLE_EFFECT = value;
    }
    get RIPPLE_IGNORE_EVENTS() {
      return this[RIPPLE_IGNORE_EVENTS];
    }
    set RIPPLE_IGNORE_EVENTS(value) {
      super.RIPPLE_IGNORE_EVENTS = value;
    }
    get RIPPLE_CONTAINER() {
      return this[RIPPLE_CONTAINER$0];
    }
    set RIPPLE_CONTAINER(value) {
      super.RIPPLE_CONTAINER = value;
    }
    get RIPPLE_CENTER() {
      return this[RIPPLE_CENTER];
    }
    set RIPPLE_CENTER(value) {
      super.RIPPLE_CENTER = value;
    }
    get RIPPLE() {
      return this[RIPPLE$0];
    }
    set RIPPLE(value) {
      super.RIPPLE = value;
    }
    get IS_FOCUSED() {
      return this[IS_FOCUSED];
    }
    set IS_FOCUSED(value) {
      super.IS_FOCUSED = value;
    }
    get IS_DISABLED() {
      return this[IS_DISABLED];
    }
    set IS_DISABLED(value) {
      super.IS_DISABLED = value;
    }
    get IS_CHECKED() {
      return this[IS_CHECKED];
    }
    set IS_CHECKED(value) {
      super.IS_CHECKED = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$2];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialCheckboxCssClasses.new = function() {
    this[INPUT] = "mdl-checkbox__input";
    this[LABEL] = "mdl-checkbox__label";
    this[BOX_OUTLINE] = "mdl-checkbox__box-outline";
    this[FOCUS_HELPER] = "mdl-checkbox__focus-helper";
    this[TICK_OUTLINE] = "mdl-checkbox__tick-outline";
    this[RIPPLE_EFFECT$0] = "mdl-ripple-effect";
    this[RIPPLE_IGNORE_EVENTS] = "mdl-ripple-effect--ignore-events";
    this[RIPPLE_CONTAINER$0] = "mdl-checkbox__ripple-container";
    this[RIPPLE_CENTER] = "mdl-ripple--center";
    this[RIPPLE$0] = "mdl-ripple";
    this[IS_FOCUSED] = "is-focused";
    this[IS_DISABLED] = "is-disabled";
    this[IS_CHECKED] = "is-checked";
    this[IS_UPGRADED$2] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialCheckboxCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialCheckboxCssClasses);
  dart.addTypeCaches(m4d_components._MaterialCheckboxCssClasses);
  const INPUT = _MaterialCheckboxCssClasses_INPUT;
  const LABEL = _MaterialCheckboxCssClasses_LABEL;
  const BOX_OUTLINE = _MaterialCheckboxCssClasses_BOX_OUTLINE;
  const FOCUS_HELPER = _MaterialCheckboxCssClasses_FOCUS_HELPER;
  const TICK_OUTLINE = _MaterialCheckboxCssClasses_TICK_OUTLINE;
  const RIPPLE_EFFECT$0 = _MaterialCheckboxCssClasses_RIPPLE_EFFECT;
  const RIPPLE_IGNORE_EVENTS = _MaterialCheckboxCssClasses_RIPPLE_IGNORE_EVENTS;
  const RIPPLE_CONTAINER$0 = _MaterialCheckboxCssClasses_RIPPLE_CONTAINER;
  const RIPPLE_CENTER = _MaterialCheckboxCssClasses_RIPPLE_CENTER;
  const RIPPLE$0 = _MaterialCheckboxCssClasses_RIPPLE;
  const IS_FOCUSED = _MaterialCheckboxCssClasses_IS_FOCUSED;
  const IS_DISABLED = _MaterialCheckboxCssClasses_IS_DISABLED;
  const IS_CHECKED = _MaterialCheckboxCssClasses_IS_CHECKED;
  const IS_UPGRADED$2 = _MaterialCheckboxCssClasses_IS_UPGRADED;
  dart.setLibraryUri(m4d_components._MaterialCheckboxCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialCheckboxCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialCheckboxCssClasses.__proto__),
    INPUT: dart.finalFieldType(core.String),
    LABEL: dart.finalFieldType(core.String),
    BOX_OUTLINE: dart.finalFieldType(core.String),
    FOCUS_HELPER: dart.finalFieldType(core.String),
    TICK_OUTLINE: dart.finalFieldType(core.String),
    RIPPLE_EFFECT: dart.finalFieldType(core.String),
    RIPPLE_IGNORE_EVENTS: dart.finalFieldType(core.String),
    RIPPLE_CONTAINER: dart.finalFieldType(core.String),
    RIPPLE_CENTER: dart.finalFieldType(core.String),
    RIPPLE: dart.finalFieldType(core.String),
    IS_FOCUSED: dart.finalFieldType(core.String),
    IS_DISABLED: dart.finalFieldType(core.String),
    IS_CHECKED: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialCheckboxCssClasses, {
    /*m4d_components._MaterialCheckboxCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-checkbox";
    }
  }, true);
  m4d_components._MaterialCheckboxConstant = class _MaterialCheckboxConstant extends core.Object {
    get TINY_TIMEOUT_IN_MS() {
      return this[TINY_TIMEOUT_IN_MS];
    }
    set TINY_TIMEOUT_IN_MS(value) {
      super.TINY_TIMEOUT_IN_MS = value;
    }
    get DEFAULT_OFF_VALUE() {
      return this[DEFAULT_OFF_VALUE];
    }
    set DEFAULT_OFF_VALUE(value) {
      super.DEFAULT_OFF_VALUE = value;
    }
  };
  (m4d_components._MaterialCheckboxConstant.new = function() {
    this[TINY_TIMEOUT_IN_MS] = 100;
    this[DEFAULT_OFF_VALUE] = "off";
    ;
  }).prototype = m4d_components._MaterialCheckboxConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialCheckboxConstant);
  dart.addTypeCaches(m4d_components._MaterialCheckboxConstant);
  const TINY_TIMEOUT_IN_MS = _MaterialCheckboxConstant_TINY_TIMEOUT_IN_MS;
  const DEFAULT_OFF_VALUE = _MaterialCheckboxConstant_DEFAULT_OFF_VALUE;
  dart.setLibraryUri(m4d_components._MaterialCheckboxConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialCheckboxConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialCheckboxConstant.__proto__),
    TINY_TIMEOUT_IN_MS: dart.finalFieldType(core.int),
    DEFAULT_OFF_VALUE: dart.finalFieldType(core.String)
  }));
  var DATA_TABLE = dart.privateName(m4d_components, "_MaterialDataTableCssClasses.DATA_TABLE");
  var SELECTABLE = dart.privateName(m4d_components, "_MaterialDataTableCssClasses.SELECTABLE");
  var SELECT_ELEMENT = dart.privateName(m4d_components, "_MaterialDataTableCssClasses.SELECT_ELEMENT");
  var IS_SELECTED = dart.privateName(m4d_components, "_MaterialDataTableCssClasses.IS_SELECTED");
  var IS_UPGRADED$3 = dart.privateName(m4d_components, "_MaterialDataTableCssClasses.IS_UPGRADED");
  var CHECKBOX = dart.privateName(m4d_components, "_MaterialDataTableCssClasses.CHECKBOX");
  var JS_CHECKBOX = dart.privateName(m4d_components, "_MaterialDataTableCssClasses.JS_CHECKBOX");
  var JS_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialDataTableCssClasses.JS_RIPPLE_EFFECT");
  m4d_components._MaterialDataTableCssClasses = class _MaterialDataTableCssClasses extends core.Object {
    get DATA_TABLE() {
      return this[DATA_TABLE];
    }
    set DATA_TABLE(value) {
      super.DATA_TABLE = value;
    }
    get SELECTABLE() {
      return this[SELECTABLE];
    }
    set SELECTABLE(value) {
      super.SELECTABLE = value;
    }
    get SELECT_ELEMENT() {
      return this[SELECT_ELEMENT];
    }
    set SELECT_ELEMENT(value) {
      super.SELECT_ELEMENT = value;
    }
    get IS_SELECTED() {
      return this[IS_SELECTED];
    }
    set IS_SELECTED(value) {
      super.IS_SELECTED = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$3];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get CHECKBOX() {
      return this[CHECKBOX];
    }
    set CHECKBOX(value) {
      super.CHECKBOX = value;
    }
    get JS_CHECKBOX() {
      return this[JS_CHECKBOX];
    }
    set JS_CHECKBOX(value) {
      super.JS_CHECKBOX = value;
    }
    get JS_RIPPLE_EFFECT() {
      return this[JS_RIPPLE_EFFECT];
    }
    set JS_RIPPLE_EFFECT(value) {
      super.JS_RIPPLE_EFFECT = value;
    }
  };
  (m4d_components._MaterialDataTableCssClasses.new = function() {
    this[DATA_TABLE] = "mdl-data-table";
    this[SELECTABLE] = "mdl-data-table--selectable";
    this[SELECT_ELEMENT] = "mdl-data-table__select";
    this[IS_SELECTED] = "is-selected";
    this[IS_UPGRADED$3] = "is-upgraded";
    this[CHECKBOX] = "mdl-checkbox";
    this[JS_CHECKBOX] = "mdl-checkbox";
    this[JS_RIPPLE_EFFECT] = "mdl-ripple-effect";
    ;
  }).prototype = m4d_components._MaterialDataTableCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialDataTableCssClasses);
  dart.addTypeCaches(m4d_components._MaterialDataTableCssClasses);
  dart.setLibraryUri(m4d_components._MaterialDataTableCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialDataTableCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialDataTableCssClasses.__proto__),
    DATA_TABLE: dart.finalFieldType(core.String),
    SELECTABLE: dart.finalFieldType(core.String),
    SELECT_ELEMENT: dart.finalFieldType(core.String),
    IS_SELECTED: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String),
    CHECKBOX: dart.finalFieldType(core.String),
    JS_CHECKBOX: dart.finalFieldType(core.String),
    JS_RIPPLE_EFFECT: dart.finalFieldType(core.String)
  }));
  var SELECTABLE_NAME = dart.privateName(m4d_components, "_MaterialDataTableConstant.SELECTABLE_NAME");
  var SELECTABLE_VALUE = dart.privateName(m4d_components, "_MaterialDataTableConstant.SELECTABLE_VALUE");
  m4d_components._MaterialDataTableConstant = class _MaterialDataTableConstant extends core.Object {
    get SELECTABLE_NAME() {
      return this[SELECTABLE_NAME];
    }
    set SELECTABLE_NAME(value) {
      super.SELECTABLE_NAME = value;
    }
    get SELECTABLE_VALUE() {
      return this[SELECTABLE_VALUE];
    }
    set SELECTABLE_VALUE(value) {
      super.SELECTABLE_VALUE = value;
    }
  };
  (m4d_components._MaterialDataTableConstant.new = function() {
    this[SELECTABLE_NAME] = "mdl-data-table-selectable-name";
    this[SELECTABLE_VALUE] = "mdl-data-table-selectable-value";
    ;
  }).prototype = m4d_components._MaterialDataTableConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialDataTableConstant);
  dart.addTypeCaches(m4d_components._MaterialDataTableConstant);
  dart.setLibraryUri(m4d_components._MaterialDataTableConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialDataTableConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialDataTableConstant.__proto__),
    SELECTABLE_NAME: dart.finalFieldType(core.String),
    SELECTABLE_VALUE: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialDataTableConstant, {
    /*m4d_components._MaterialDataTableConstant.WIDGET_SELECTOR*/get WIDGET_SELECTOR() {
      return "mdl-data-table";
    }
  }, true);
  var _headerCheckbox = dart.privateName(m4d_components, "_headerCheckbox");
  var _createCheckbox = dart.privateName(m4d_components, "_createCheckbox");
  var _selectRow = dart.privateName(m4d_components, "_selectRow");
  var C9;
  var C10;
  m4d_components.MaterialDataTable = class MaterialDataTable extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialDataTable.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialDataTable)));
    }
    [_init]() {
      this[_logger].info("MaterialDataTable - init");
      let firstHeader = html.HtmlElement.as(this.element.querySelector("th"));
      let bodyRows = this.element[$querySelectorAll](html.Element, "tbody tr")[$map](html.TableRowElement, dart.fn(e => html.TableRowElement.as(e), ElementLToTableRowElementL()));
      let footRows = this.element[$querySelectorAll](html.Element, "tfoot tr")[$map](html.TableRowElement, dart.fn(e => html.TableRowElement.as(e), ElementLToTableRowElementL()));
      let rows = ListOfTableRowElementL().from(bodyRows);
      rows[$addAll](footRows);
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialDataTable._cssClasses.SELECTABLE))) {
        let th = html.HtmlElement.as(html.document[$createElement]("th"));
        this[_headerCheckbox] = this[_createCheckbox](null, rows);
        th[$append](this[_headerCheckbox]);
        firstHeader[$parent].insertBefore(th, firstHeader);
        for (let i = 0; i < dart.notNull(rows[$length]); i = i + 1) {
          let firstCell = html.HtmlElement.as(rows[$_get](i).querySelector("td"));
          if (firstCell != null) {
            let td = html.HtmlElement.as(html.document[$createElement]("td"));
            if (rows[$_get](i)[$parent].tagName[$toLowerCase]() === "tbody") {
              let rowCheckbox = this[_createCheckbox](rows[$_get](i), null);
              td[$append](rowCheckbox);
            }
            rows[$_get](i).insertBefore(td, firstCell);
          }
        }
      }
      m4d_core.componentHandler().upgradeElement(html.HtmlElement.as(this.element));
      this.element[$classes].add(m4d_components.MaterialDataTable._cssClasses.IS_UPGRADED);
    }
    [_createCheckbox](row, optRows) {
      let label = html.LabelElement.new();
      label[$classes].add(m4d_components.MaterialDataTable._cssClasses.CHECKBOX);
      label[$classes].add(m4d_components.MaterialDataTable._cssClasses.JS_CHECKBOX);
      label[$classes].add(m4d_components.MaterialDataTable._cssClasses.JS_RIPPLE_EFFECT);
      label[$classes].add(m4d_components.MaterialDataTable._cssClasses.SELECT_ELEMENT);
      let checkbox = html.CheckboxInputElement.new();
      checkbox[$classes].add("mdl-checkbox__input");
      if (row != null) {
        checkbox[$checked] = row[$classes].contains(m4d_components.MaterialDataTable._cssClasses.IS_SELECTED);
        checkbox[$onChange].listen(EventLToLvoid().as(this[_selectRow](checkbox, row, null)));
      } else if (optRows != null && dart.test(optRows[$isNotEmpty])) {
        checkbox[$onChange].listen(EventLToLvoid().as(this[_selectRow](checkbox, null, optRows)));
      }
      label[$append](checkbox);
      return label;
    }
    [_selectRow](checkbox, row, optRows) {
      this[_logger].info("Row: " + dart.str(row));
      if (row != null) {
        return dart.fn(event => {
          this[_logger].info("Checkbox checked: " + dart.str(checkbox[$checked]));
          if (dart.test(checkbox[$checked])) {
            row[$classes].add(m4d_components.MaterialDataTable._cssClasses.IS_SELECTED);
          } else {
            row[$classes].remove(m4d_components.MaterialDataTable._cssClasses.IS_SELECTED);
            if (this[_headerCheckbox] != null && this[_headerCheckbox].querySelector(".mdl-checkbox__input") != null) {
              this[_logger].info("Checkbox");
              m4d_components.MaterialCheckbox.widget(this[_headerCheckbox]).uncheck();
            }
          }
        }, EventLToNullN());
      }
      if (optRows != null && dart.test(optRows[$isNotEmpty])) {
        return dart.fn(event => {
          let el = null;
          if (dart.test(checkbox[$checked])) {
            for (let i = 0; i < dart.notNull(optRows[$length]); i = i + 1) {
              el = html.HtmlElement.as(optRows[$_get](i).querySelector("td").querySelector(".mdl-checkbox__input"));
              m4d_components.MaterialCheckbox.widget(el).check();
              optRows[$_get](i)[$classes].add(m4d_components.MaterialDataTable._cssClasses.IS_SELECTED);
            }
          } else {
            for (let i = 0; i < dart.notNull(optRows[$length]); i = i + 1) {
              el = html.HtmlElement.as(optRows[$_get](i).querySelector("td").querySelector(".mdl-checkbox__input"));
              m4d_components.MaterialCheckbox.widget(el).uncheck();
              optRows[$_get](i)[$classes].remove(m4d_components.MaterialDataTable._cssClasses.IS_SELECTED);
            }
          }
        }, EventLToNullN());
      }
      return null;
    }
  };
  (m4d_components.MaterialDataTable.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialDataTable");
    this[_headerCheckbox] = null;
    m4d_components.MaterialDataTable.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialDataTable.prototype;
  dart.addTypeTests(m4d_components.MaterialDataTable);
  dart.addTypeCaches(m4d_components.MaterialDataTable);
  dart.setMethodSignature(m4d_components.MaterialDataTable, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialDataTable.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_createCheckbox]: dart.fnType(html.LabelElement, [html.TableRowElement, core.List$(html.HtmlElement)]),
    [_selectRow]: dart.fnType(core.Function, [html.CheckboxInputElement, html.TableRowElement, core.List$(html.HtmlElement)])
  }));
  dart.setLibraryUri(m4d_components.MaterialDataTable, L0);
  dart.setFieldSignature(m4d_components.MaterialDataTable, () => ({
    __proto__: dart.getFields(m4d_components.MaterialDataTable.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_headerCheckbox]: dart.fieldType(html.LabelElement)
  }));
  dart.defineLazy(m4d_components.MaterialDataTable, {
    /*m4d_components.MaterialDataTable._constant*/get _constant() {
      return C9 || CT.C9;
    },
    /*m4d_components.MaterialDataTable._cssClasses*/get _cssClasses() {
      return C10 || CT.C10;
    }
  }, true);
  m4d_components.DataTableChangedEvent = class DataTableChangedEvent extends core.Object {};
  (m4d_components.DataTableChangedEvent.new = function() {
    ;
  }).prototype = m4d_components.DataTableChangedEvent.prototype;
  dart.addTypeTests(m4d_components.DataTableChangedEvent);
  dart.addTypeCaches(m4d_components.DataTableChangedEvent);
  dart.setLibraryUri(m4d_components.DataTableChangedEvent, L0);
  var row$ = dart.privateName(m4d_components, "DataTableRowClickedEvent.row");
  m4d_components.DataTableRowClickedEvent = class DataTableRowClickedEvent extends core.Object {
    get row() {
      return this[row$];
    }
    set row(value) {
      super.row = value;
    }
  };
  (m4d_components.DataTableRowClickedEvent.new = function(row) {
    this[row$] = row;
    ;
  }).prototype = m4d_components.DataTableRowClickedEvent.prototype;
  dart.addTypeTests(m4d_components.DataTableRowClickedEvent);
  dart.addTypeCaches(m4d_components.DataTableRowClickedEvent);
  dart.setLibraryUri(m4d_components.DataTableRowClickedEvent, L0);
  dart.setFieldSignature(m4d_components.DataTableRowClickedEvent, () => ({
    __proto__: dart.getFields(m4d_components.DataTableRowClickedEvent.__proto__),
    row: dart.finalFieldType(m4d_components.MaterialDivDataTableRow)
  }));
  var __headerRow = dart.privateName(m4d_components, "__headerRow");
  var _onRowClick = dart.privateName(m4d_components, "_onRowClick");
  var _rows = dart.privateName(m4d_components, "_rows");
  var _headerRow = dart.privateName(m4d_components, "_headerRow");
  var _verifyCheckedState = dart.privateName(m4d_components, "_verifyCheckedState");
  var _fireChangeEvent = dart.privateName(m4d_components, "_fireChangeEvent");
  var _fireClickEvent = dart.privateName(m4d_components, "_fireClickEvent");
  var _MaterialDivDataTableConstant_SELECTABLE_VALUE = dart.privateName(m4d_components, "_MaterialDivDataTableConstant.SELECTABLE_VALUE");
  var _MaterialDivDataTableConstant_SELECTABLE_NAME = dart.privateName(m4d_components, "_MaterialDivDataTableConstant.SELECTABLE_NAME");
  var C11;
  var _MaterialDivDataTableCssClasses_JS_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.JS_RIPPLE_EFFECT");
  var _MaterialDivDataTableCssClasses_JS_CHECKBOX = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.JS_CHECKBOX");
  var _MaterialDivDataTableCssClasses_CHECKBOX_INPUT = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.CHECKBOX_INPUT");
  var _MaterialDivDataTableCssClasses_CHECKBOX = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.CHECKBOX");
  var _MaterialDivDataTableCssClasses_CELL_CHECKBOX = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.CELL_CHECKBOX");
  var _MaterialDivDataTableCssClasses_ROW = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.ROW");
  var _MaterialDivDataTableCssClasses_HEAD = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.HEAD");
  var _MaterialDivDataTableCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.IS_UPGRADED");
  var _MaterialDivDataTableCssClasses_IS_SELECTED = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.IS_SELECTED");
  var _MaterialDivDataTableCssClasses_SELECT = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.SELECT");
  var _MaterialDivDataTableCssClasses_SELECTABLE = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.SELECTABLE");
  var _MaterialDivDataTableCssClasses_DATA_TABLE = dart.privateName(m4d_components, "_MaterialDivDataTableCssClasses.DATA_TABLE");
  var C12;
  m4d_components.MaterialDivDataTable = class MaterialDivDataTable extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialDivDataTable.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialDivDataTable)));
    }
    get isSelectable() {
      return this.element[$classes].contains(m4d_components.MaterialDivDataTable._cssClasses.SELECTABLE);
    }
    set select(_select) {
      this[_rows][$forEach](dart.fn(row => row.select = _select, MaterialDivDataTableRowLToboolL()));
      if (this[_headerRow] != null) {
        this[_headerRow].select = _select;
      }
    }
    get isSelected() {
      let rows = this[_rows];
      for (let counter = 0; counter < dart.notNull(rows[$length]); counter = counter + 1) {
        if (dart.equals(rows[$_get](counter).isSelected, false)) {
          return false;
        }
      }
      return true;
    }
    get onChange() {
      if (this[_onChange] == null) {
        this[_onChange] = StreamControllerOfDataTableChangedEventL().broadcast({onCancel: dart.fn(() => this[_onChange] = null, VoidToNullN())});
      }
      return this[_onChange].stream;
    }
    get onRowClick() {
      if (this[_onRowClick] == null) {
        this[_onRowClick] = StreamControllerOfDataTableRowClickedEventL().broadcast({onCancel: dart.fn(() => this[_onRowClick] = null, VoidToNullN())});
      }
      return this[_onRowClick].stream;
    }
    get selectedRows() {
      let temp = ListOfMaterialDivDataTableRowL().from(this[_rows][$where](dart.fn(row => row.isSelected, MaterialDivDataTableRowLToboolL())));
      return temp;
    }
    [_init]() {
      this[_logger].fine("MaterialDivDataTable - init");
      this.element[$classes].add(m4d_components.MaterialDivDataTable._cssClasses.IS_UPGRADED);
    }
    get [_rows]() {
      let tempRows = this.element[$querySelectorAll](html.Element, "." + dart.str(m4d_components.MaterialDivDataTable._cssClasses.ROW))[$map](html.HtmlElement, dart.fn(element => html.HtmlElement.as(element), ElementLToHtmlElementL()))[$toList]();
      tempRows[$removeWhere](dart.fn(element => element[$classes].contains(m4d_components.MaterialDivDataTable._cssClasses.HEAD), HtmlElementLToboolL()));
      let rows = JSArrayOfMaterialDivDataTableRowL().of([]);
      tempRows[$forEach](dart.fn(row => {
        let mdlRow = m4d_components.MaterialDivDataTableRow.widget(row);
        validate.Validate.notNull(m4d_components.MaterialDivDataTableRow, mdlRow);
        rows[$add](mdlRow);
      }, HtmlElementLToNullN()));
      return rows;
    }
    get [_headerRow]() {
      if (this[__headerRow] == null) {
        let row = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialDivDataTable._cssClasses.HEAD)));
        if (row != null) {
          this[__headerRow] = m4d_components.MaterialDivDataTableRow.widget(row);
          validate.Validate.notNull(m4d_components.MaterialDivDataTableRow, this[__headerRow]);
        }
      }
      return this[__headerRow];
    }
    [_verifyCheckedState]() {
      if (this[_headerRow] != null) {
        this[_headerRow].select = this.isSelected;
      }
    }
    [_fireChangeEvent]() {
      if (this[_onChange] != null && dart.test(this[_onChange].hasListener)) {
        this[_onChange].add(new m4d_components.DataTableChangedEvent.new());
      }
    }
    [_fireClickEvent](row) {
      if (this[_onRowClick] != null && dart.test(this[_onRowClick].hasListener)) {
        this[_onRowClick].add(new m4d_components.DataTableRowClickedEvent.new(row));
      }
    }
  };
  (m4d_components.MaterialDivDataTable.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialDivDataTable");
    this[__headerRow] = null;
    this[_onChange] = null;
    this[_onRowClick] = null;
    m4d_components.MaterialDivDataTable.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialDivDataTable.prototype;
  dart.addTypeTests(m4d_components.MaterialDivDataTable);
  dart.addTypeCaches(m4d_components.MaterialDivDataTable);
  dart.setMethodSignature(m4d_components.MaterialDivDataTable, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialDivDataTable.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_verifyCheckedState]: dart.fnType(dart.void, []),
    [_fireChangeEvent]: dart.fnType(dart.void, []),
    [_fireClickEvent]: dart.fnType(dart.void, [m4d_components.MaterialDivDataTableRow])
  }));
  dart.setGetterSignature(m4d_components.MaterialDivDataTable, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialDivDataTable.__proto__),
    isSelectable: core.bool,
    isSelected: core.bool,
    onChange: async.Stream$(m4d_components.DataTableChangedEvent),
    onRowClick: async.Stream$(m4d_components.DataTableRowClickedEvent),
    selectedRows: core.List$(m4d_components.MaterialDivDataTableRow),
    [_rows]: core.List$(m4d_components.MaterialDivDataTableRow),
    [_headerRow]: m4d_components.MaterialDivDataTableRow
  }));
  dart.setSetterSignature(m4d_components.MaterialDivDataTable, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialDivDataTable.__proto__),
    select: core.bool
  }));
  dart.setLibraryUri(m4d_components.MaterialDivDataTable, L0);
  dart.setFieldSignature(m4d_components.MaterialDivDataTable, () => ({
    __proto__: dart.getFields(m4d_components.MaterialDivDataTable.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [__headerRow]: dart.fieldType(m4d_components.MaterialDivDataTableRow),
    [_onChange]: dart.fieldType(async.StreamController$(m4d_components.DataTableChangedEvent)),
    [_onRowClick]: dart.fieldType(async.StreamController$(m4d_components.DataTableRowClickedEvent))
  }));
  dart.defineLazy(m4d_components.MaterialDivDataTable, {
    /*m4d_components.MaterialDivDataTable._constant*/get _constant() {
      return C11 || CT.C11;
    },
    /*m4d_components.MaterialDivDataTable._cssClasses*/get _cssClasses() {
      return C12 || CT.C12;
    }
  }, true);
  var SELECT = dart.privateName(m4d_components, "_MaterialDivDataTableRowCssClasses.SELECT");
  var IS_SELECTED$ = dart.privateName(m4d_components, "_MaterialDivDataTableRowCssClasses.IS_SELECTED");
  var IS_UPGRADED$4 = dart.privateName(m4d_components, "_MaterialDivDataTableRowCssClasses.IS_UPGRADED");
  var HEAD = dart.privateName(m4d_components, "_MaterialDivDataTableRowCssClasses.HEAD");
  var CELL_CHECKBOX = dart.privateName(m4d_components, "_MaterialDivDataTableRowCssClasses.CELL_CHECKBOX");
  var CHECKBOX$ = dart.privateName(m4d_components, "_MaterialDivDataTableRowCssClasses.CHECKBOX");
  var CHECKBOX_INPUT = dart.privateName(m4d_components, "_MaterialDivDataTableRowCssClasses.CHECKBOX_INPUT");
  var JS_CHECKBOX$ = dart.privateName(m4d_components, "_MaterialDivDataTableRowCssClasses.JS_CHECKBOX");
  var JS_RIPPLE_EFFECT$ = dart.privateName(m4d_components, "_MaterialDivDataTableRowCssClasses.JS_RIPPLE_EFFECT");
  m4d_components._MaterialDivDataTableRowCssClasses = class _MaterialDivDataTableRowCssClasses extends core.Object {
    get SELECT() {
      return this[SELECT];
    }
    set SELECT(value) {
      super.SELECT = value;
    }
    get IS_SELECTED() {
      return this[IS_SELECTED$];
    }
    set IS_SELECTED(value) {
      super.IS_SELECTED = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$4];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get HEAD() {
      return this[HEAD];
    }
    set HEAD(value) {
      super.HEAD = value;
    }
    get CELL_CHECKBOX() {
      return this[CELL_CHECKBOX];
    }
    set CELL_CHECKBOX(value) {
      super.CELL_CHECKBOX = value;
    }
    get CHECKBOX() {
      return this[CHECKBOX$];
    }
    set CHECKBOX(value) {
      super.CHECKBOX = value;
    }
    get CHECKBOX_INPUT() {
      return this[CHECKBOX_INPUT];
    }
    set CHECKBOX_INPUT(value) {
      super.CHECKBOX_INPUT = value;
    }
    get JS_CHECKBOX() {
      return this[JS_CHECKBOX$];
    }
    set JS_CHECKBOX(value) {
      super.JS_CHECKBOX = value;
    }
    get JS_RIPPLE_EFFECT() {
      return this[JS_RIPPLE_EFFECT$];
    }
    set JS_RIPPLE_EFFECT(value) {
      super.JS_RIPPLE_EFFECT = value;
    }
  };
  (m4d_components._MaterialDivDataTableRowCssClasses.new = function() {
    this[SELECT] = "mdl-data-tableex__select";
    this[IS_SELECTED$] = "is-selected";
    this[IS_UPGRADED$4] = "is-upgraded";
    this[HEAD] = "mdl-div-data-tableex__head";
    this[CELL_CHECKBOX] = "mdl-data-tableex__cell--checkbox";
    this[CHECKBOX$] = "mdl-checkbox";
    this[CHECKBOX_INPUT] = "mdl-checkbox__input";
    this[JS_CHECKBOX$] = "mdl-checkbox";
    this[JS_RIPPLE_EFFECT$] = "mdl-ripple-effect";
    ;
  }).prototype = m4d_components._MaterialDivDataTableRowCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialDivDataTableRowCssClasses);
  dart.addTypeCaches(m4d_components._MaterialDivDataTableRowCssClasses);
  dart.setLibraryUri(m4d_components._MaterialDivDataTableRowCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialDivDataTableRowCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialDivDataTableRowCssClasses.__proto__),
    SELECT: dart.finalFieldType(core.String),
    IS_SELECTED: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String),
    HEAD: dart.finalFieldType(core.String),
    CELL_CHECKBOX: dart.finalFieldType(core.String),
    CHECKBOX: dart.finalFieldType(core.String),
    CHECKBOX_INPUT: dart.finalFieldType(core.String),
    JS_CHECKBOX: dart.finalFieldType(core.String),
    JS_RIPPLE_EFFECT: dart.finalFieldType(core.String)
  }));
  var SELECTABLE_NAME$ = dart.privateName(m4d_components, "_MaterialDivDataTableRowConstant.SELECTABLE_NAME");
  var SELECTABLE_VALUE$ = dart.privateName(m4d_components, "_MaterialDivDataTableRowConstant.SELECTABLE_VALUE");
  m4d_components._MaterialDivDataTableRowConstant = class _MaterialDivDataTableRowConstant extends core.Object {
    get SELECTABLE_NAME() {
      return this[SELECTABLE_NAME$];
    }
    set SELECTABLE_NAME(value) {
      super.SELECTABLE_NAME = value;
    }
    get SELECTABLE_VALUE() {
      return this[SELECTABLE_VALUE$];
    }
    set SELECTABLE_VALUE(value) {
      super.SELECTABLE_VALUE = value;
    }
  };
  (m4d_components._MaterialDivDataTableRowConstant.new = function() {
    this[SELECTABLE_NAME$] = "mdl-data-tableex-selectable-name";
    this[SELECTABLE_VALUE$] = "mdl-data-tableex-selectable-value";
    ;
  }).prototype = m4d_components._MaterialDivDataTableRowConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialDivDataTableRowConstant);
  dart.addTypeCaches(m4d_components._MaterialDivDataTableRowConstant);
  dart.setLibraryUri(m4d_components._MaterialDivDataTableRowConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialDivDataTableRowConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialDivDataTableRowConstant.__proto__),
    SELECTABLE_NAME: dart.finalFieldType(core.String),
    SELECTABLE_VALUE: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialDivDataTableRowConstant, {
    /*m4d_components._MaterialDivDataTableRowConstant.WIDGET_SELECTOR*/get WIDGET_SELECTOR() {
      return "mdl-div-data-tableex__row";
    }
  }, true);
  var _parent = dart.privateName(m4d_components, "_parent");
  var _checkbox = dart.privateName(m4d_components, "_checkbox");
  var _selectableCheckbox = dart.privateName(m4d_components, "_selectableCheckbox");
  var _toggleRow = dart.privateName(m4d_components, "_toggleRow");
  var _createRowCheckbox = dart.privateName(m4d_components, "_createRowCheckbox");
  var _toggleHeaderRow = dart.privateName(m4d_components, "_toggleHeaderRow");
  var C13;
  var C14;
  m4d_components.MaterialDivDataTableRow = class MaterialDivDataTableRow extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialDivDataTableRow.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialDivDataTableRow)));
    }
    get parent() {
      if (this[_parent] != null) {
        return this[_parent];
      }
      function _getParent(element) {
        if (element != null) {
          if (dart.test(element[$classes].contains("mdl-data-tableex"))) {
            return element;
          }
          return _getParent(html.HtmlElement.as(element[$parent]));
        }
        dart.throw(new core.ArgumentError.new("Could not find parent-class (mdl-data-tableex) for this row... (" + dart.str(element) + ")"));
      }
      dart.fn(_getParent, HtmlElementLToElementL());
      let parent = html.HtmlElement.as(_getParent(html.HtmlElement.as(this.element)));
      this[_logger].fine("Found parent: " + dart.str(parent));
      this[_parent] = m4d_components.MaterialDivDataTable.widget(parent);
      this[_logger].fine("Found parent-Widget: " + dart.str(this[_parent]));
      return this[_parent];
    }
    attached() {
      return this[_init]();
    }
    set select(_select) {
      if (this[_selectableCheckbox] != null) {
        this[_selectableCheckbox].checked = _select;
        this[_toggleRow](_select);
      }
    }
    get isSelected() {
      return this[_selectableCheckbox] != null ? this[_selectableCheckbox].checked : false;
    }
    [_init]() {
      this[_logger].fine("MaterialDivDataTableRow - init");
      if (dart.test(this.parent.isSelectable)) {
        let firstCell = html.HtmlElement.as(this.element.querySelector(":first-child"));
        if (firstCell != null) {
          let td = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialDivDataTableRow._cssClasses.CELL_CHECKBOX)));
          let checkboxCellIsNotPredefined = td == null;
          td == null ? td = html.DivElement.new() : null;
          td[$classes].add(m4d_components.MaterialDivDataTableRow._cssClasses.CELL_CHECKBOX);
          let checkboxIsNotPredefined = this.element.querySelector("." + dart.str(m4d_components.MaterialDivDataTableRow._cssClasses.SELECT)) == null;
          let rowCheckbox = this[_createRowCheckbox]();
          if (checkboxIsNotPredefined) {
            td[$append](rowCheckbox);
          }
          m4d_core.componentHandler().upgradeElement(td).then(core.Null, dart.fn(_ => {
            if (checkboxCellIsNotPredefined) {
              this.element.insertBefore(td, firstCell);
            }
          }, voidToNullN()));
        }
      }
      if (!dart.test(this.element[$classes].contains(m4d_components.MaterialDivDataTableRow._cssClasses.HEAD))) {
        this.eventStreams[$add](this.element[$onClick].listen(dart.fn(_ => {
          this.parent[_fireClickEvent](this);
        }, MouseEventLToNullN())));
      }
      this.element[$classes].add(m4d_components.MaterialDivDataTableRow._cssClasses.IS_UPGRADED);
    }
    get [_selectableCheckbox]() {
      if (!dart.test(this[_parent].isSelectable)) {
        return null;
      }
      if (this[_checkbox] != null) {
        return this[_checkbox];
      }
      let cellCheckbox = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialDivDataTableRow._cssClasses.CELL_CHECKBOX)));
      if (cellCheckbox == null) {
        return null;
      }
      this[_checkbox] = m4d_components.MaterialCheckbox.widget(html.HtmlElement.as(cellCheckbox.querySelector("." + dart.str(m4d_components.MaterialDivDataTableRow._cssClasses.CHECKBOX_INPUT))));
      validate.Validate.notNull(m4d_components.MaterialCheckbox, this[_checkbox]);
      return this[_checkbox];
    }
    [_createRowCheckbox]() {
      let label = html.LabelElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialDivDataTableRow._cssClasses.SELECT)));
      label == null ? label = html.LabelElement.new() : null;
      label[$classes].add(m4d_components.MaterialDivDataTableRow._cssClasses.CHECKBOX);
      label[$classes].add(m4d_components.MaterialDivDataTableRow._cssClasses.JS_CHECKBOX);
      label[$classes].add(m4d_components.MaterialDivDataTableRow._cssClasses.JS_RIPPLE_EFFECT);
      label[$classes].add(m4d_components.MaterialDivDataTableRow._cssClasses.SELECT);
      let checkbox = html.CheckboxInputElement.as(label.querySelector("." + dart.str(m4d_components.MaterialDivDataTableRow._cssClasses.CHECKBOX_INPUT)));
      let checkboxIsNotPredefined = checkbox == null;
      checkbox == null ? checkbox = html.CheckboxInputElement.new() : null;
      checkbox[$classes].add(m4d_components.MaterialDivDataTableRow._cssClasses.CHECKBOX_INPUT);
      if (this.element != null) {
        if (checkboxIsNotPredefined) {
          checkbox[$checked] = this.element[$classes].contains(m4d_components.MaterialDivDataTableRow._cssClasses.IS_SELECTED);
        } else {
          dart.test(checkbox[$checked]) ? this.element[$classes].add(m4d_components.MaterialDivDataTableRow._cssClasses.IS_SELECTED) : this.element[$classes].remove(m4d_components.MaterialDivDataTableRow._cssClasses.IS_SELECTED);
        }
        this.eventStreams[$add](checkbox[$onChange].listen(dart.fn(event => {
          let checked = checkbox[$checked];
          this[_toggleRow](checked);
          if (dart.test(this.element[$classes].contains(m4d_components.MaterialDivDataTableRow._cssClasses.HEAD))) {
            this[_toggleHeaderRow](checked);
          } else {
            this.parent[_verifyCheckedState]();
          }
          this.parent[_fireChangeEvent]();
        }, EventLToNullN())));
        if (dart.test(this.element[$dataset][$containsKey](m4d_components.MaterialDivDataTableRow._constant.SELECTABLE_NAME))) {
          checkbox[$name] = this.element[$dataset][$_get](m4d_components.MaterialDivDataTableRow._constant.SELECTABLE_NAME);
        }
        if (dart.test(this.element[$dataset][$containsKey](m4d_components.MaterialDivDataTableRow._constant.SELECTABLE_VALUE))) {
          checkbox[$value] = this.element[$dataset][$_get](m4d_components.MaterialDivDataTableRow._constant.SELECTABLE_VALUE);
        }
      }
      if (checkboxIsNotPredefined) {
        label[$append](checkbox);
      }
      return label;
    }
    [_toggleRow](checked) {
      if (dart.test(checked)) {
        this.element[$classes].add(m4d_components.MaterialDivDataTableRow._cssClasses.IS_SELECTED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialDivDataTableRow._cssClasses.IS_SELECTED);
      }
    }
    [_toggleHeaderRow](checked) {
      this.parent.select = checked;
    }
  };
  (m4d_components.MaterialDivDataTableRow.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialDivDataTableRow");
    this[_parent] = null;
    this[_checkbox] = null;
    m4d_components.MaterialDivDataTableRow.__proto__.new.call(this, element, iocContainer);
  }).prototype = m4d_components.MaterialDivDataTableRow.prototype;
  dart.addTypeTests(m4d_components.MaterialDivDataTableRow);
  dart.addTypeCaches(m4d_components.MaterialDivDataTableRow);
  dart.setMethodSignature(m4d_components.MaterialDivDataTableRow, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialDivDataTableRow.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_createRowCheckbox]: dart.fnType(html.LabelElement, []),
    [_toggleRow]: dart.fnType(dart.void, [core.bool]),
    [_toggleHeaderRow]: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(m4d_components.MaterialDivDataTableRow, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialDivDataTableRow.__proto__),
    parent: m4d_components.MaterialDivDataTable,
    isSelected: core.bool,
    [_selectableCheckbox]: m4d_components.MaterialCheckbox
  }));
  dart.setSetterSignature(m4d_components.MaterialDivDataTableRow, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialDivDataTableRow.__proto__),
    select: core.bool
  }));
  dart.setLibraryUri(m4d_components.MaterialDivDataTableRow, L0);
  dart.setFieldSignature(m4d_components.MaterialDivDataTableRow, () => ({
    __proto__: dart.getFields(m4d_components.MaterialDivDataTableRow.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_parent]: dart.fieldType(m4d_components.MaterialDivDataTable),
    [_checkbox]: dart.fieldType(m4d_components.MaterialCheckbox)
  }));
  dart.defineLazy(m4d_components.MaterialDivDataTableRow, {
    /*m4d_components.MaterialDivDataTableRow._constant*/get _constant() {
      return C13 || CT.C13;
    },
    /*m4d_components.MaterialDivDataTableRow._cssClasses*/get _cssClasses() {
      return C14 || CT.C14;
    }
  }, true);
  m4d_components._MaterialDivDataTableCssClasses = class _MaterialDivDataTableCssClasses extends core.Object {
    get DATA_TABLE() {
      return this[DATA_TABLE$];
    }
    set DATA_TABLE(value) {
      super.DATA_TABLE = value;
    }
    get SELECTABLE() {
      return this[SELECTABLE$];
    }
    set SELECTABLE(value) {
      super.SELECTABLE = value;
    }
    get SELECT() {
      return this[SELECT$];
    }
    set SELECT(value) {
      super.SELECT = value;
    }
    get IS_SELECTED() {
      return this[IS_SELECTED$0];
    }
    set IS_SELECTED(value) {
      super.IS_SELECTED = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$5];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get HEAD() {
      return this[HEAD$];
    }
    set HEAD(value) {
      super.HEAD = value;
    }
    get ROW() {
      return this[ROW];
    }
    set ROW(value) {
      super.ROW = value;
    }
    get CELL_CHECKBOX() {
      return this[CELL_CHECKBOX$];
    }
    set CELL_CHECKBOX(value) {
      super.CELL_CHECKBOX = value;
    }
    get CHECKBOX() {
      return this[CHECKBOX$0];
    }
    set CHECKBOX(value) {
      super.CHECKBOX = value;
    }
    get CHECKBOX_INPUT() {
      return this[CHECKBOX_INPUT$];
    }
    set CHECKBOX_INPUT(value) {
      super.CHECKBOX_INPUT = value;
    }
    get JS_CHECKBOX() {
      return this[JS_CHECKBOX$0];
    }
    set JS_CHECKBOX(value) {
      super.JS_CHECKBOX = value;
    }
    get JS_RIPPLE_EFFECT() {
      return this[JS_RIPPLE_EFFECT$0];
    }
    set JS_RIPPLE_EFFECT(value) {
      super.JS_RIPPLE_EFFECT = value;
    }
  };
  (m4d_components._MaterialDivDataTableCssClasses.new = function() {
    this[DATA_TABLE$] = "mdl-data-tableex";
    this[SELECTABLE$] = "mdl-data-tableex--selectable";
    this[SELECT$] = "mdl-data-tableex__select";
    this[IS_SELECTED$0] = "is-selected";
    this[IS_UPGRADED$5] = "is-upgraded";
    this[HEAD$] = "mdl-div-data-tableex__head";
    this[ROW] = "mdl-div-data-tableex__row";
    this[CELL_CHECKBOX$] = "mdl-data-tableex__cell--checkbox";
    this[CHECKBOX$0] = "mdl-checkbox";
    this[CHECKBOX_INPUT$] = "mdl-checkbox__input";
    this[JS_CHECKBOX$0] = "mdl-checkbox";
    this[JS_RIPPLE_EFFECT$0] = "mdl-ripple-effect";
    ;
  }).prototype = m4d_components._MaterialDivDataTableCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialDivDataTableCssClasses);
  dart.addTypeCaches(m4d_components._MaterialDivDataTableCssClasses);
  const DATA_TABLE$ = _MaterialDivDataTableCssClasses_DATA_TABLE;
  const SELECTABLE$ = _MaterialDivDataTableCssClasses_SELECTABLE;
  const SELECT$ = _MaterialDivDataTableCssClasses_SELECT;
  const IS_SELECTED$0 = _MaterialDivDataTableCssClasses_IS_SELECTED;
  const IS_UPGRADED$5 = _MaterialDivDataTableCssClasses_IS_UPGRADED;
  const HEAD$ = _MaterialDivDataTableCssClasses_HEAD;
  const ROW = _MaterialDivDataTableCssClasses_ROW;
  const CELL_CHECKBOX$ = _MaterialDivDataTableCssClasses_CELL_CHECKBOX;
  const CHECKBOX$0 = _MaterialDivDataTableCssClasses_CHECKBOX;
  const CHECKBOX_INPUT$ = _MaterialDivDataTableCssClasses_CHECKBOX_INPUT;
  const JS_CHECKBOX$0 = _MaterialDivDataTableCssClasses_JS_CHECKBOX;
  const JS_RIPPLE_EFFECT$0 = _MaterialDivDataTableCssClasses_JS_RIPPLE_EFFECT;
  dart.setLibraryUri(m4d_components._MaterialDivDataTableCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialDivDataTableCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialDivDataTableCssClasses.__proto__),
    DATA_TABLE: dart.finalFieldType(core.String),
    SELECTABLE: dart.finalFieldType(core.String),
    SELECT: dart.finalFieldType(core.String),
    IS_SELECTED: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String),
    HEAD: dart.finalFieldType(core.String),
    ROW: dart.finalFieldType(core.String),
    CELL_CHECKBOX: dart.finalFieldType(core.String),
    CHECKBOX: dart.finalFieldType(core.String),
    CHECKBOX_INPUT: dart.finalFieldType(core.String),
    JS_CHECKBOX: dart.finalFieldType(core.String),
    JS_RIPPLE_EFFECT: dart.finalFieldType(core.String)
  }));
  m4d_components._MaterialDivDataTableConstant = class _MaterialDivDataTableConstant extends core.Object {
    get SELECTABLE_NAME() {
      return this[SELECTABLE_NAME$0];
    }
    set SELECTABLE_NAME(value) {
      super.SELECTABLE_NAME = value;
    }
    get SELECTABLE_VALUE() {
      return this[SELECTABLE_VALUE$0];
    }
    set SELECTABLE_VALUE(value) {
      super.SELECTABLE_VALUE = value;
    }
  };
  (m4d_components._MaterialDivDataTableConstant.new = function() {
    this[SELECTABLE_NAME$0] = "mdl-data-tableex-selectable-name";
    this[SELECTABLE_VALUE$0] = "mdl-data-tableex-selectable-value";
    ;
  }).prototype = m4d_components._MaterialDivDataTableConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialDivDataTableConstant);
  dart.addTypeCaches(m4d_components._MaterialDivDataTableConstant);
  const SELECTABLE_NAME$0 = _MaterialDivDataTableConstant_SELECTABLE_NAME;
  const SELECTABLE_VALUE$0 = _MaterialDivDataTableConstant_SELECTABLE_VALUE;
  dart.setLibraryUri(m4d_components._MaterialDivDataTableConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialDivDataTableConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialDivDataTableConstant.__proto__),
    SELECTABLE_NAME: dart.finalFieldType(core.String),
    SELECTABLE_VALUE: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialDivDataTableConstant, {
    /*m4d_components._MaterialDivDataTableConstant.WIDGET_SELECTOR*/get WIDGET_SELECTOR() {
      return "mdl-data-tableex";
    }
  }, true);
  var _MaterialIconToggleConstant_TINY_TIMEOUT_IN_MS = dart.privateName(m4d_components, "_MaterialIconToggleConstant.TINY_TIMEOUT_IN_MS");
  var C15;
  var _MaterialIconToggleCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.IS_UPGRADED");
  var _MaterialIconToggleCssClasses_IS_CHECKED = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.IS_CHECKED");
  var _MaterialIconToggleCssClasses_IS_DISABLED = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.IS_DISABLED");
  var _MaterialIconToggleCssClasses_IS_FOCUSED = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.IS_FOCUSED");
  var _MaterialIconToggleCssClasses_RIPPLE = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.RIPPLE");
  var _MaterialIconToggleCssClasses_RIPPLE_CENTER = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.RIPPLE_CENTER");
  var _MaterialIconToggleCssClasses_RIPPLE_CONTAINER = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.RIPPLE_CONTAINER");
  var _MaterialIconToggleCssClasses_RIPPLE_IGNORE_EVENTS = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.RIPPLE_IGNORE_EVENTS");
  var _MaterialIconToggleCssClasses_JS_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.JS_RIPPLE_EFFECT");
  var _MaterialIconToggleCssClasses_INPUT = dart.privateName(m4d_components, "_MaterialIconToggleCssClasses.INPUT");
  var C16;
  m4d_components.MaterialIconToggle = class MaterialIconToggle extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialIconToggle.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialIconToggle)));
    }
    get hub() {
      return this.inputElement;
    }
    get inputElement() {
      if (this[_inputElement] == null) {
        this[_inputElement] = html.InputElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialIconToggle._cssClasses.INPUT)));
      }
      return this[_inputElement];
    }
    disable() {
      this.inputElement.disabled = true;
      this[_updateClasses]();
    }
    enable() {
      this.inputElement.disabled = false;
      this[_updateClasses]();
    }
    check() {
      this.inputElement.checked = true;
      this[_updateClasses]();
    }
    uncheck() {
      this.inputElement.checked = false;
      this[_updateClasses]();
    }
    set checked(_checked) {
      return dart.test(_checked) ? this.check() : this.uncheck();
    }
    get checked() {
      return this.inputElement.checked;
    }
    set disabled(_disabled) {
      return dart.test(_disabled) ? this.disable() : this.enable();
    }
    get disabled() {
      return this.inputElement.disabled;
    }
    [_init]() {
      this[_logger].fine("MaterialIconToggle - init");
      if (this.element != null) {
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialIconToggle._cssClasses.JS_RIPPLE_EFFECT))) {
          this.element[$classes].add(m4d_components.MaterialIconToggle._cssClasses.RIPPLE_IGNORE_EVENTS);
          let rippleContainerElement = html.SpanElement.new();
          rippleContainerElement[$classes].add(m4d_components.MaterialIconToggle._cssClasses.RIPPLE_CONTAINER);
          rippleContainerElement[$classes].add(m4d_components.MaterialIconToggle._cssClasses.JS_RIPPLE_EFFECT);
          rippleContainerElement[$classes].add(m4d_components.MaterialIconToggle._cssClasses.RIPPLE_CENTER);
          this.eventStreams[$add](rippleContainerElement[$onMouseUp].listen(dart.bind(this, _onMouseUp)));
          let ripple = html.SpanElement.new();
          ripple[$classes].add(m4d_components.MaterialIconToggle._cssClasses.RIPPLE);
          rippleContainerElement[$append](ripple);
          this.element[$append](rippleContainerElement);
        }
        this.eventStreams[$add](this.inputElement[$onChange].listen(dart.bind(this, _onChange)));
        this.eventStreams[$add](this.inputElement[$onFocus].listen(dart.bind(this, _onFocus)));
        this.eventStreams[$add](this.inputElement[$onBlur].listen(dart.bind(this, _onBlur)));
        this.eventStreams[$add](this.element[$onMouseUp].listen(dart.bind(this, _onMouseUp)));
        this[_updateClasses]();
        this.element[$classes].add(m4d_components.MaterialIconToggle._cssClasses.IS_UPGRADED);
      }
    }
    [_onChange](_) {
      this[_updateClasses]();
    }
    [_onFocus](_) {
      this.element[$classes].add(m4d_components.MaterialIconToggle._cssClasses.IS_FOCUSED);
    }
    [_onBlur](_) {
      this.element[$classes].remove(m4d_components.MaterialIconToggle._cssClasses.IS_FOCUSED);
    }
    [_onMouseUp](_) {
      this[_blur]();
    }
    [_updateClasses]() {
      this[_checkDisabled]();
      this[_checkToggleState]();
    }
    [_checkToggleState]() {
      if (dart.test(this[_inputElement].checked)) {
        this.element[$classes].add(m4d_components.MaterialIconToggle._cssClasses.IS_CHECKED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialIconToggle._cssClasses.IS_CHECKED);
      }
    }
    [_checkDisabled]() {
      if (dart.test(this[_inputElement].disabled)) {
        this.element[$classes].add(m4d_components.MaterialIconToggle._cssClasses.IS_DISABLED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialIconToggle._cssClasses.IS_DISABLED);
      }
    }
    [_blur]() {
      async.Timer.new(new core.Duration.new({milliseconds: m4d_components.MaterialIconToggle._constant.TINY_TIMEOUT_IN_MS}), dart.fn(() => {
        this.inputElement.blur();
      }, VoidToNullN()));
    }
  };
  (m4d_components.MaterialIconToggle.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialIconToggle");
    this[_inputElement] = null;
    m4d_components.MaterialIconToggle.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialIconToggle.prototype;
  dart.addTypeTests(m4d_components.MaterialIconToggle);
  dart.addTypeCaches(m4d_components.MaterialIconToggle);
  dart.setMethodSignature(m4d_components.MaterialIconToggle, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialIconToggle.__proto__),
    disable: dart.fnType(dart.void, []),
    enable: dart.fnType(dart.void, []),
    check: dart.fnType(dart.void, []),
    uncheck: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_onChange]: dart.fnType(dart.void, [dart.dynamic]),
    [_onFocus]: dart.fnType(dart.void, [dart.dynamic]),
    [_onBlur]: dart.fnType(dart.void, [dart.dynamic]),
    [_onMouseUp]: dart.fnType(dart.void, [dart.dynamic]),
    [_updateClasses]: dart.fnType(dart.void, []),
    [_checkToggleState]: dart.fnType(dart.void, []),
    [_checkDisabled]: dart.fnType(dart.void, []),
    [_blur]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialIconToggle, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialIconToggle.__proto__),
    inputElement: html.InputElement,
    checked: core.bool,
    disabled: core.bool
  }));
  dart.setSetterSignature(m4d_components.MaterialIconToggle, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialIconToggle.__proto__),
    checked: core.bool,
    disabled: core.bool
  }));
  dart.setLibraryUri(m4d_components.MaterialIconToggle, L0);
  dart.setFieldSignature(m4d_components.MaterialIconToggle, () => ({
    __proto__: dart.getFields(m4d_components.MaterialIconToggle.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_inputElement]: dart.fieldType(html.InputElement)
  }));
  dart.defineLazy(m4d_components.MaterialIconToggle, {
    /*m4d_components.MaterialIconToggle._constant*/get _constant() {
      return C15 || CT.C15;
    },
    /*m4d_components.MaterialIconToggle._cssClasses*/get _cssClasses() {
      return C16 || CT.C16;
    }
  }, true);
  m4d_components._MaterialIconToggleCssClasses = class _MaterialIconToggleCssClasses extends core.Object {
    get INPUT() {
      return this[INPUT$];
    }
    set INPUT(value) {
      super.INPUT = value;
    }
    get JS_RIPPLE_EFFECT() {
      return this[JS_RIPPLE_EFFECT$1];
    }
    set JS_RIPPLE_EFFECT(value) {
      super.JS_RIPPLE_EFFECT = value;
    }
    get RIPPLE_IGNORE_EVENTS() {
      return this[RIPPLE_IGNORE_EVENTS$];
    }
    set RIPPLE_IGNORE_EVENTS(value) {
      super.RIPPLE_IGNORE_EVENTS = value;
    }
    get RIPPLE_CONTAINER() {
      return this[RIPPLE_CONTAINER$1];
    }
    set RIPPLE_CONTAINER(value) {
      super.RIPPLE_CONTAINER = value;
    }
    get RIPPLE_CENTER() {
      return this[RIPPLE_CENTER$];
    }
    set RIPPLE_CENTER(value) {
      super.RIPPLE_CENTER = value;
    }
    get RIPPLE() {
      return this[RIPPLE$1];
    }
    set RIPPLE(value) {
      super.RIPPLE = value;
    }
    get IS_FOCUSED() {
      return this[IS_FOCUSED$];
    }
    set IS_FOCUSED(value) {
      super.IS_FOCUSED = value;
    }
    get IS_DISABLED() {
      return this[IS_DISABLED$];
    }
    set IS_DISABLED(value) {
      super.IS_DISABLED = value;
    }
    get IS_CHECKED() {
      return this[IS_CHECKED$];
    }
    set IS_CHECKED(value) {
      super.IS_CHECKED = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$6];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialIconToggleCssClasses.new = function() {
    this[INPUT$] = "mdl-icon-toggle__input";
    this[JS_RIPPLE_EFFECT$1] = "mdl-ripple-effect";
    this[RIPPLE_IGNORE_EVENTS$] = "mdl-ripple-effect--ignore-events";
    this[RIPPLE_CONTAINER$1] = "mdl-icon-toggle__ripple-container";
    this[RIPPLE_CENTER$] = "mdl-ripple--center";
    this[RIPPLE$1] = "mdl-ripple";
    this[IS_FOCUSED$] = "is-focused";
    this[IS_DISABLED$] = "is-disabled";
    this[IS_CHECKED$] = "is-checked";
    this[IS_UPGRADED$6] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialIconToggleCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialIconToggleCssClasses);
  dart.addTypeCaches(m4d_components._MaterialIconToggleCssClasses);
  const INPUT$ = _MaterialIconToggleCssClasses_INPUT;
  const JS_RIPPLE_EFFECT$1 = _MaterialIconToggleCssClasses_JS_RIPPLE_EFFECT;
  const RIPPLE_IGNORE_EVENTS$ = _MaterialIconToggleCssClasses_RIPPLE_IGNORE_EVENTS;
  const RIPPLE_CONTAINER$1 = _MaterialIconToggleCssClasses_RIPPLE_CONTAINER;
  const RIPPLE_CENTER$ = _MaterialIconToggleCssClasses_RIPPLE_CENTER;
  const RIPPLE$1 = _MaterialIconToggleCssClasses_RIPPLE;
  const IS_FOCUSED$ = _MaterialIconToggleCssClasses_IS_FOCUSED;
  const IS_DISABLED$ = _MaterialIconToggleCssClasses_IS_DISABLED;
  const IS_CHECKED$ = _MaterialIconToggleCssClasses_IS_CHECKED;
  const IS_UPGRADED$6 = _MaterialIconToggleCssClasses_IS_UPGRADED;
  dart.setLibraryUri(m4d_components._MaterialIconToggleCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialIconToggleCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialIconToggleCssClasses.__proto__),
    INPUT: dart.finalFieldType(core.String),
    JS_RIPPLE_EFFECT: dart.finalFieldType(core.String),
    RIPPLE_IGNORE_EVENTS: dart.finalFieldType(core.String),
    RIPPLE_CONTAINER: dart.finalFieldType(core.String),
    RIPPLE_CENTER: dart.finalFieldType(core.String),
    RIPPLE: dart.finalFieldType(core.String),
    IS_FOCUSED: dart.finalFieldType(core.String),
    IS_DISABLED: dart.finalFieldType(core.String),
    IS_CHECKED: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialIconToggleCssClasses, {
    /*m4d_components._MaterialIconToggleCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-icon-toggle";
    }
  }, true);
  m4d_components._MaterialIconToggleConstant = class _MaterialIconToggleConstant extends core.Object {
    get TINY_TIMEOUT_IN_MS() {
      return this[TINY_TIMEOUT_IN_MS$];
    }
    set TINY_TIMEOUT_IN_MS(value) {
      super.TINY_TIMEOUT_IN_MS = value;
    }
  };
  (m4d_components._MaterialIconToggleConstant.new = function() {
    this[TINY_TIMEOUT_IN_MS$] = 100;
    ;
  }).prototype = m4d_components._MaterialIconToggleConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialIconToggleConstant);
  dart.addTypeCaches(m4d_components._MaterialIconToggleConstant);
  const TINY_TIMEOUT_IN_MS$ = _MaterialIconToggleConstant_TINY_TIMEOUT_IN_MS;
  dart.setLibraryUri(m4d_components._MaterialIconToggleConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialIconToggleConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialIconToggleConstant.__proto__),
    TINY_TIMEOUT_IN_MS: dart.finalFieldType(core.int)
  }));
  var _MaterialLabelfieldCssClasses_TEXT = dart.privateName(m4d_components, "_MaterialLabelfieldCssClasses.TEXT");
  var _MaterialLabelfieldCssClasses_LABEL = dart.privateName(m4d_components, "_MaterialLabelfieldCssClasses.LABEL");
  var _MaterialLabelfieldCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialLabelfieldCssClasses.IS_UPGRADED");
  var C17;
  const MdlComponent_FallbackFormatter$36$ = class MdlComponent_FallbackFormatter extends m4d_core.MdlComponent {};
  (MdlComponent_FallbackFormatter$36$.new = function(element, injector) {
    MdlComponent_FallbackFormatter$36$.__proto__.new.call(this, element, injector);
  }).prototype = MdlComponent_FallbackFormatter$36$.prototype;
  dart.applyMixin(MdlComponent_FallbackFormatter$36$, m4d_components.FallbackFormatter);
  m4d_components.MaterialLabelfield = class MaterialLabelfield extends MdlComponent_FallbackFormatter$36$ {
    static widget(element) {
      return m4d_components.MaterialLabelfield.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialLabelfield)));
    }
    get label() {
      let _label = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialLabelfield._cssClasses.LABEL)));
      return _label != null ? _label[$text][$trim]() : "";
    }
    set label(v) {
      let t4;
      validate.Validate.notNull(core.String, v);
      let _label = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialLabelfield._cssClasses.LABEL)));
      t4 = _label;
      t4 == null ? null : t4[$text] = this.formatterFor(_label, this.element).format(v[$trim]());
    }
    get value() {
      let _text = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialLabelfield._cssClasses.TEXT)));
      return _text != null ? _text[$text][$trim]() : "";
    }
    set value(v) {
      let t4;
      validate.Validate.notNull(core.String, v);
      let _text = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialLabelfield._cssClasses.TEXT)));
      if (_text != null) {
        let formatter = this.formatterFor(_text, this.element);
        t4 = _text;
        t4 == null ? null : t4[$text] = formatter.format(v);
      }
    }
    [_init]() {
      this[_logger].fine("MaterialLabelfield - init");
      const _kickInFormatter = () => {
        this.label = this.label;
        this.value = this.value;
      };
      dart.fn(_kickInFormatter, VoidTovoid());
      _kickInFormatter();
      this.element[$classes].add(m4d_components.MaterialLabelfield._cssClasses.IS_UPGRADED);
    }
  };
  (m4d_components.MaterialLabelfield.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialLabelfield");
    m4d_components.MaterialLabelfield.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialLabelfield.prototype;
  dart.addTypeTests(m4d_components.MaterialLabelfield);
  dart.addTypeCaches(m4d_components.MaterialLabelfield);
  dart.setMethodSignature(m4d_components.MaterialLabelfield, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialLabelfield.__proto__),
    [_init]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialLabelfield, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialLabelfield.__proto__),
    label: core.String,
    value: core.String
  }));
  dart.setSetterSignature(m4d_components.MaterialLabelfield, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialLabelfield.__proto__),
    label: core.String,
    value: core.String
  }));
  dart.setLibraryUri(m4d_components.MaterialLabelfield, L0);
  dart.setFieldSignature(m4d_components.MaterialLabelfield, () => ({
    __proto__: dart.getFields(m4d_components.MaterialLabelfield.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger)
  }));
  dart.defineLazy(m4d_components.MaterialLabelfield, {
    /*m4d_components.MaterialLabelfield._cssClasses*/get _cssClasses() {
      return C17 || CT.C17;
    }
  }, true);
  m4d_components._MaterialLabelfieldCssClasses = class _MaterialLabelfieldCssClasses extends core.Object {
    get IS_UPGRADED() {
      return this[IS_UPGRADED$7];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get LABEL() {
      return this[LABEL$];
    }
    set LABEL(value) {
      super.LABEL = value;
    }
    get TEXT() {
      return this[TEXT];
    }
    set TEXT(value) {
      super.TEXT = value;
    }
  };
  (m4d_components._MaterialLabelfieldCssClasses.new = function() {
    this[IS_UPGRADED$7] = "is-upgraded";
    this[LABEL$] = "mdl-labelfield__label";
    this[TEXT] = "mdl-labelfield__text";
    ;
  }).prototype = m4d_components._MaterialLabelfieldCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialLabelfieldCssClasses);
  dart.addTypeCaches(m4d_components._MaterialLabelfieldCssClasses);
  const IS_UPGRADED$7 = _MaterialLabelfieldCssClasses_IS_UPGRADED;
  const LABEL$ = _MaterialLabelfieldCssClasses_LABEL;
  const TEXT = _MaterialLabelfieldCssClasses_TEXT;
  dart.setLibraryUri(m4d_components._MaterialLabelfieldCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialLabelfieldCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialLabelfieldCssClasses.__proto__),
    IS_UPGRADED: dart.finalFieldType(core.String),
    LABEL: dart.finalFieldType(core.String),
    TEXT: dart.finalFieldType(core.String)
  }));
  m4d_components._MaterialLabelfieldConstant = class _MaterialLabelfieldConstant extends core.Object {};
  (m4d_components._MaterialLabelfieldConstant.new = function() {
    ;
  }).prototype = m4d_components._MaterialLabelfieldConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialLabelfieldConstant);
  dart.addTypeCaches(m4d_components._MaterialLabelfieldConstant);
  dart.setLibraryUri(m4d_components._MaterialLabelfieldConstant, L0);
  dart.defineLazy(m4d_components._MaterialLabelfieldConstant, {
    /*m4d_components._MaterialLabelfieldConstant.WIDGET_SELECTOR*/get WIDGET_SELECTOR() {
      return "mdl-labelfield";
    }
  }, true);
  m4d_components._MaterialLayoutKeycodes = class _MaterialLayoutKeycodes extends core.Object {};
  (m4d_components._MaterialLayoutKeycodes.new = function() {
    ;
  }).prototype = m4d_components._MaterialLayoutKeycodes.prototype;
  dart.addTypeTests(m4d_components._MaterialLayoutKeycodes);
  dart.addTypeCaches(m4d_components._MaterialLayoutKeycodes);
  dart.setLibraryUri(m4d_components._MaterialLayoutKeycodes, L0);
  dart.defineLazy(m4d_components._MaterialLayoutKeycodes, {
    /*m4d_components._MaterialLayoutKeycodes.ENTER*/get ENTER() {
      return 13;
    },
    /*m4d_components._MaterialLayoutKeycodes.ESCAPE*/get ESCAPE() {
      return 27;
    },
    /*m4d_components._MaterialLayoutKeycodes.SPACE*/get SPACE() {
      return 32;
    }
  }, true);
  var STANDARD = dart.privateName(m4d_components, "_MaterialLayoutMode.STANDARD");
  var SEAMED = dart.privateName(m4d_components, "_MaterialLayoutMode.SEAMED");
  var WATERFALL = dart.privateName(m4d_components, "_MaterialLayoutMode.WATERFALL");
  var SCROLL = dart.privateName(m4d_components, "_MaterialLayoutMode.SCROLL");
  m4d_components._MaterialLayoutMode = class _MaterialLayoutMode extends core.Object {
    get STANDARD() {
      return this[STANDARD];
    }
    set STANDARD(value) {
      super.STANDARD = value;
    }
    get SEAMED() {
      return this[SEAMED];
    }
    set SEAMED(value) {
      super.SEAMED = value;
    }
    get WATERFALL() {
      return this[WATERFALL];
    }
    set WATERFALL(value) {
      super.WATERFALL = value;
    }
    get SCROLL() {
      return this[SCROLL];
    }
    set SCROLL(value) {
      super.SCROLL = value;
    }
  };
  (m4d_components._MaterialLayoutMode.new = function() {
    this[STANDARD] = 0;
    this[SEAMED] = 1;
    this[WATERFALL] = 2;
    this[SCROLL] = 3;
    ;
  }).prototype = m4d_components._MaterialLayoutMode.prototype;
  dart.addTypeTests(m4d_components._MaterialLayoutMode);
  dart.addTypeCaches(m4d_components._MaterialLayoutMode);
  dart.setLibraryUri(m4d_components._MaterialLayoutMode, L0);
  dart.setFieldSignature(m4d_components._MaterialLayoutMode, () => ({
    __proto__: dart.getFields(m4d_components._MaterialLayoutMode.__proto__),
    STANDARD: dart.finalFieldType(core.int),
    SEAMED: dart.finalFieldType(core.int),
    WATERFALL: dart.finalFieldType(core.int),
    SCROLL: dart.finalFieldType(core.int)
  }));
  var _header = dart.privateName(m4d_components, "_header");
  var _drawer = dart.privateName(m4d_components, "_drawer");
  var _tabBar = dart.privateName(m4d_components, "_tabBar");
  var _content = dart.privateName(m4d_components, "_content");
  var _obfuscator = dart.privateName(m4d_components, "_obfuscator");
  var _screenSizeMediaQuery = dart.privateName(m4d_components, "_screenSizeMediaQuery");
  var _tabs = dart.privateName(m4d_components, "_tabs");
  var _downgrade = dart.privateName(m4d_components, "_downgrade");
  var _headerTransitionEndHandler = dart.privateName(m4d_components, "_headerTransitionEndHandler");
  var _headerClickHandler = dart.privateName(m4d_components, "_headerClickHandler");
  var _contentScrollHandler = dart.privateName(m4d_components, "_contentScrollHandler");
  var _drawerToggleHandler = dart.privateName(m4d_components, "_drawerToggleHandler");
  var _drawerRemove = dart.privateName(m4d_components, "_drawerRemove");
  var _keyboardEventHandler = dart.privateName(m4d_components, "_keyboardEventHandler");
  var _screenSizeHandler = dart.privateName(m4d_components, "_screenSizeHandler");
  var _resetTabState = dart.privateName(m4d_components, "_resetTabState");
  var _resetPanelState = dart.privateName(m4d_components, "_resetPanelState");
  var _MaterialLayoutConstant_CHEVRON_RIGHT = dart.privateName(m4d_components, "_MaterialLayoutConstant.CHEVRON_RIGHT");
  var _MaterialLayoutConstant_CHEVRON_LEFT = dart.privateName(m4d_components, "_MaterialLayoutConstant.CHEVRON_LEFT");
  var _MaterialLayoutConstant_MENU_ICON = dart.privateName(m4d_components, "_MaterialLayoutConstant.MENU_ICON");
  var _MaterialLayoutConstant_RESIZE_TIMEOUT = dart.privateName(m4d_components, "_MaterialLayoutConstant.RESIZE_TIMEOUT");
  var _MaterialLayoutConstant_TAB_SCROLL_PIXELS = dart.privateName(m4d_components, "_MaterialLayoutConstant.TAB_SCROLL_PIXELS");
  var _MaterialLayoutConstant_MAX_WIDTH = dart.privateName(m4d_components, "_MaterialLayoutConstant.MAX_WIDTH");
  var C18;
  var _MaterialLayoutCssClasses_ON_SMALL_SCREEN = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.ON_SMALL_SCREEN");
  var _MaterialLayoutCssClasses_ON_LARGE_SCREEN = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.ON_LARGE_SCREEN");
  var _MaterialLayoutCssClasses_IS_ANIMATING = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.IS_ANIMATING");
  var _MaterialLayoutCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.IS_UPGRADED");
  var _MaterialLayoutCssClasses_IS_ACTIVE = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.IS_ACTIVE");
  var _MaterialLayoutCssClasses_IS_DRAWER_OPEN = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.IS_DRAWER_OPEN");
  var _MaterialLayoutCssClasses_IS_SMALL_SCREEN = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.IS_SMALL_SCREEN");
  var _MaterialLayoutCssClasses_IS_COMPACT = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.IS_COMPACT");
  var _MaterialLayoutCssClasses_CASTING_SHADOW = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.CASTING_SHADOW");
  var _MaterialLayoutCssClasses_HAS_SCROLLING_HEADER = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.HAS_SCROLLING_HEADER");
  var _MaterialLayoutCssClasses_HAS_TABS = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.HAS_TABS");
  var _MaterialLayoutCssClasses_HAS_DRAWER = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.HAS_DRAWER");
  var _MaterialLayoutCssClasses_NAVI_LINK = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.NAVI_LINK");
  var _MaterialLayoutCssClasses_PANEL = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.PANEL");
  var _MaterialLayoutCssClasses_TAB_MANUAL_SWITCH = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.TAB_MANUAL_SWITCH");
  var _MaterialLayoutCssClasses_TAB_BAR_RIGHT_BUTTON = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.TAB_BAR_RIGHT_BUTTON");
  var _MaterialLayoutCssClasses_TAB_BAR_LEFT_BUTTON = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.TAB_BAR_LEFT_BUTTON");
  var _MaterialLayoutCssClasses_TAB_BAR_BUTTON = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.TAB_BAR_BUTTON");
  var _MaterialLayoutCssClasses_TAB = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.TAB");
  var _MaterialLayoutCssClasses_TAB_CONTAINER = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.TAB_CONTAINER");
  var _MaterialLayoutCssClasses_TAB_BAR = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.TAB_BAR");
  var _MaterialLayoutCssClasses_OBFUSCATOR = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.OBFUSCATOR");
  var _MaterialLayoutCssClasses_FIXED_DRAWER = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.FIXED_DRAWER");
  var _MaterialLayoutCssClasses_FIXED_HEADER = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.FIXED_HEADER");
  var _MaterialLayoutCssClasses_HEADER_SCROLL = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.HEADER_SCROLL");
  var _MaterialLayoutCssClasses_HEADER_WATERFALL = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.HEADER_WATERFALL");
  var _MaterialLayoutCssClasses_HEADER_SEAMED = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.HEADER_SEAMED");
  var _MaterialLayoutCssClasses_RIPPLE_IGNORE_EVENTS = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.RIPPLE_IGNORE_EVENTS");
  var _MaterialLayoutCssClasses_RIPPLE = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.RIPPLE");
  var _MaterialLayoutCssClasses_RIPPLE_CONTAINER = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.RIPPLE_CONTAINER");
  var _MaterialLayoutCssClasses_JS_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.JS_RIPPLE_EFFECT");
  var _MaterialLayoutCssClasses_ICON = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.ICON");
  var _MaterialLayoutCssClasses_DRAWER_BTN = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.DRAWER_BTN");
  var _MaterialLayoutCssClasses_CONTENT = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.CONTENT");
  var _MaterialLayoutCssClasses_DRAWER = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.DRAWER");
  var _MaterialLayoutCssClasses_HEADER = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.HEADER");
  var _MaterialLayoutCssClasses_CONTAINER = dart.privateName(m4d_components, "_MaterialLayoutCssClasses.CONTAINER");
  var C19;
  var C20;
  m4d_components.MaterialLayout = class MaterialLayout extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialLayout.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialLayout)));
    }
    get header() {
      return this[_header];
    }
    get drawer() {
      return this[_drawer];
    }
    get tabBar() {
      return this[_tabBar];
    }
    get content() {
      return this[_content];
    }
    get obfuscator() {
      return this[_obfuscator];
    }
    show() {
    }
    downgrade() {
      super.downgrade();
      this[_tabs][$forEach](dart.fn(tab => tab[_downgrade](), MaterialLayoutTabLTovoid()));
    }
    toggleDrawer() {
      let drawerButton = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialLayout._cssClasses.DRAWER_BTN)));
      this[_drawer][$classes].toggle(m4d_components.MaterialLayout._cssClasses.IS_DRAWER_OPEN);
      this[_obfuscator][$classes].toggle(m4d_components.MaterialLayout._cssClasses.IS_DRAWER_OPEN);
      if (dart.test(this[_drawer][$classes].contains(m4d_components.MaterialLayout._cssClasses.IS_DRAWER_OPEN))) {
        this[_drawer][$setAttribute]("aria-hidden", "false");
        drawerButton[$setAttribute]("aria-expanded", "true");
      } else {
        this[_drawer][$setAttribute]("aria-hidden", "true");
        drawerButton[$setAttribute]("aria-expanded", "false");
      }
    }
    [_init]() {
      let t4;
      this[_logger].fine("MaterialLayout - init");
      if (this.element != null) {
        let container = html.DivElement.new();
        container[$classes].add(m4d_components.MaterialLayout._cssClasses.CONTAINER);
        let focusedElement = this.element.querySelector(":focus");
        this.element[$parent].insertBefore(container, this.element);
        this.element[$remove]();
        container[$append](this.element);
        t4 = focusedElement;
        t4 == null ? null : t4.focus();
        let directChildren = this.element.childNodes;
        directChildren[$forEach](dart.fn(child => {
          if (html.Element.is(child)) {
            if (dart.test(child[$classes].contains(m4d_components.MaterialLayout._cssClasses.HEADER))) {
              this[_header] = html.HtmlElement.as(child);
            }
            if (dart.test(child[$classes].contains(m4d_components.MaterialLayout._cssClasses.DRAWER))) {
              this[_drawer] = html.HtmlElement.as(child);
            }
            if (dart.test(child[$classes].contains(m4d_components.MaterialLayout._cssClasses.CONTENT))) {
              this[_content] = html.HtmlElement.as(child);
            }
          }
        }, NodeLToNullN()));
        html.window[$onPageShow].listen(dart.fn(event => {
          if (html.PageTransitionEvent.is(event) && dart.test(event.persisted)) {
            this.element.style[$overflowY] = "hidden";
            html.window[$requestAnimationFrame](dart.fn(_ => {
              this.element.style[$overflowY] = "";
            }, numLToNullN()));
          }
        }, EventLToNullN()));
        if (this[_header] != null) {
          this[_tabBar] = html.HtmlElement.as(this[_header].querySelector("." + dart.notNull(m4d_components.MaterialLayout._cssClasses.TAB_BAR)));
        }
        let mode = m4d_components.MaterialLayout._mode.STANDARD;
        if (this.header != null) {
          if (dart.test(this.header[$classes].contains(m4d_components.MaterialLayout._cssClasses.HEADER_SEAMED))) {
            mode = m4d_components.MaterialLayout._mode.SEAMED;
          } else if (dart.test(this.header[$classes].contains(m4d_components.MaterialLayout._cssClasses.HEADER_WATERFALL))) {
            mode = m4d_components.MaterialLayout._mode.WATERFALL;
            this.header[$addEventListener]("transitionend", dart.bind(this, _headerTransitionEndHandler));
            this.eventStreams[$add](this.header[$onClick].listen(dart.bind(this, _headerClickHandler)));
          } else if (dart.test(this.header[$classes].contains(m4d_components.MaterialLayout._cssClasses.HEADER_SCROLL))) {
            mode = m4d_components.MaterialLayout._mode.SCROLL;
            container[$classes].add(m4d_components.MaterialLayout._cssClasses.HAS_SCROLLING_HEADER);
          }
          if (mode == m4d_components.MaterialLayout._mode.STANDARD) {
            this.header[$classes].add(m4d_components.MaterialLayout._cssClasses.CASTING_SHADOW);
            if (this.tabBar != null) {
              this.tabBar[$classes].add(m4d_components.MaterialLayout._cssClasses.CASTING_SHADOW);
            }
          } else if (mode == m4d_components.MaterialLayout._mode.SEAMED || mode == m4d_components.MaterialLayout._mode.SCROLL) {
            this.header[$classes].remove(m4d_components.MaterialLayout._cssClasses.CASTING_SHADOW);
            if (this.tabBar != null) {
              this.tabBar[$classes].remove(m4d_components.MaterialLayout._cssClasses.CASTING_SHADOW);
            }
          } else if (mode == m4d_components.MaterialLayout._mode.WATERFALL) {
            this.eventStreams[$add](this.content[$onScroll].listen(dart.bind(this, _contentScrollHandler)));
            this[_contentScrollHandler]("");
          }
        }
        if (this.drawer != null) {
          let drawerButton = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialLayout._cssClasses.DRAWER_BTN)));
          if (drawerButton == null) {
            drawerButton = html.DivElement.new();
            drawerButton[$setAttribute]("aria-expanded", "false");
            drawerButton[$setAttribute]("role", "button");
            drawerButton[$setAttribute]("tabindex", "0");
            drawerButton[$classes].add(m4d_components.MaterialLayout._cssClasses.DRAWER_BTN);
            let drawerButtonIcon = html.HtmlElement.as(html.document[$createElement]("i"));
            drawerButtonIcon[$classes].add(m4d_components.MaterialLayout._cssClasses.ICON);
            drawerButtonIcon[$innerHtml] = m4d_components.MaterialLayout._constant.MENU_ICON;
            drawerButton[$append](drawerButtonIcon);
          }
          if (dart.test(this[_drawer][$classes].contains(m4d_components.MaterialLayout._cssClasses.ON_LARGE_SCREEN))) {
            drawerButton[$classes].add(m4d_components.MaterialLayout._cssClasses.ON_LARGE_SCREEN);
          } else if (dart.test(this[_drawer][$classes].contains(m4d_components.MaterialLayout._cssClasses.ON_SMALL_SCREEN))) {
            drawerButton[$classes].add(m4d_components.MaterialLayout._cssClasses.ON_SMALL_SCREEN);
          }
          this.eventStreams[$add](drawerButton[$onClick].listen(dart.bind(this, _drawerToggleHandler)));
          this.eventStreams[$add](drawerButton[$onKeyDown].listen(dart.bind(this, _drawerToggleHandler)));
          this.element[$classes].add(m4d_components.MaterialLayout._cssClasses.HAS_DRAWER);
          if (dart.test(this.element[$classes].contains(m4d_components.MaterialLayout._cssClasses.FIXED_HEADER))) {
            this.header.insertBefore(drawerButton, this.header.firstChild);
          } else {
            this.element.insertBefore(drawerButton, this.content);
          }
          this.element[$querySelectorAll](html.Element, "." + dart.str(m4d_components.MaterialLayout._cssClasses.NAVI_LINK))[$forEach](dart.fn(element => {
            this.eventStreams[$add](element[$onClick].listen(dart.bind(this, _drawerRemove)));
          }, ElementLToNullN()));
          let obfuscator = html.DivElement.new();
          obfuscator[$classes].add(m4d_components.MaterialLayout._cssClasses.OBFUSCATOR);
          this.element[$append](obfuscator);
          this.eventStreams[$add](obfuscator[$onClick].listen(dart.bind(this, _drawerToggleHandler)));
          this[_obfuscator] = obfuscator;
          this[_drawer][$onKeyDown].listen(dart.bind(this, _keyboardEventHandler));
          this[_drawer][$setAttribute]("aria-hidden", "true");
        }
        this[_screenSizeMediaQuery] = html.window.matchMedia(m4d_components.MaterialLayout._constant.MAX_WIDTH);
        this[_screenSizeMediaQuery].addListener(dart.fn(_ => this[_screenSizeHandler](), EventLTovoid()));
        this[_screenSizeHandler]();
        if (this.header != null && this.tabBar != null) {
          this.element[$classes].add(m4d_components.MaterialLayout._cssClasses.HAS_TABS);
          let tabContainer = html.DivElement.new();
          tabContainer[$classes].add(m4d_components.MaterialLayout._cssClasses.TAB_CONTAINER);
          this.header.insertBefore(tabContainer, this.tabBar);
          this.tabBar[$remove]();
          let leftButton = html.DivElement.new();
          leftButton[$classes].add(m4d_components.MaterialLayout._cssClasses.TAB_BAR_BUTTON);
          leftButton[$classes].add(m4d_components.MaterialLayout._cssClasses.TAB_BAR_LEFT_BUTTON);
          let leftButtonIcon = html.document[$createElement]("i");
          leftButtonIcon[$classes].add(m4d_components.MaterialLayout._cssClasses.ICON);
          leftButtonIcon[$text] = m4d_components.MaterialLayout._constant.CHEVRON_LEFT;
          leftButton[$append](leftButtonIcon);
          this.eventStreams[$add](leftButton[$onClick].listen(dart.fn(event => {
            let t4;
            t4 = this.tabBar;
            t4[$scrollLeft] = dart.notNull(t4[$scrollLeft]) - dart.notNull(m4d_components.MaterialLayout._constant.TAB_SCROLL_PIXELS);
          }, MouseEventLToNullN())));
          let rightButton = html.DivElement.new();
          rightButton[$classes].add(m4d_components.MaterialLayout._cssClasses.TAB_BAR_BUTTON);
          rightButton[$classes].add(m4d_components.MaterialLayout._cssClasses.TAB_BAR_RIGHT_BUTTON);
          let rightButtonIcon = html.document[$createElement]("i");
          rightButtonIcon[$classes].add(m4d_components.MaterialLayout._cssClasses.ICON);
          leftButtonIcon[$text] = m4d_components.MaterialLayout._constant.CHEVRON_RIGHT;
          rightButton[$append](rightButtonIcon);
          this.eventStreams[$add](rightButton[$onClick].listen(dart.fn(event => {
            let t4;
            t4 = this.tabBar;
            t4[$scrollLeft] = dart.notNull(t4[$scrollLeft]) + dart.notNull(m4d_components.MaterialLayout._constant.TAB_SCROLL_PIXELS);
          }, MouseEventLToNullN())));
          tabContainer[$append](leftButton);
          tabContainer[$append](this.tabBar);
          tabContainer[$append](rightButton);
          const tabUpdateHandler = () => {
            if (dart.notNull(this.tabBar[$scrollLeft]) > 0) {
              leftButton[$classes].add(m4d_components.MaterialLayout._cssClasses.IS_ACTIVE);
            } else {
              leftButton[$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_ACTIVE);
            }
            if (dart.notNull(this.tabBar[$scrollLeft]) < dart.notNull(this.tabBar[$scrollWidth]) - dart.notNull(this.tabBar[$offsetWidth])) {
              rightButton[$classes].add(m4d_components.MaterialLayout._cssClasses.IS_ACTIVE);
            } else {
              rightButton[$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_ACTIVE);
            }
          };
          dart.fn(tabUpdateHandler, VoidTovoid());
          ;
          this.eventStreams[$add](this.tabBar[$onScroll].listen(dart.fn(event => tabUpdateHandler(), EventLTovoid())));
          tabUpdateHandler();
          let resizeTimer = null;
          function windowResizeHandler() {
            if (resizeTimer != null) {
              resizeTimer.cancel();
              resizeTimer = null;
            }
            resizeTimer = async.Timer.new(new core.Duration.new({milliseconds: m4d_components.MaterialLayout._constant.RESIZE_TIMEOUT}), dart.fn(() => {
              tabUpdateHandler();
              resizeTimer = null;
            }, VoidToNullN()));
          }
          dart.fn(windowResizeHandler, VoidTovoid());
          this.eventStreams[$add](html.window[$onResize].listen(dart.fn(_ => windowResizeHandler(), EventLTovoid())));
          if (dart.test(this.tabBar[$classes].contains(m4d_components.MaterialLayout._cssClasses.JS_RIPPLE_EFFECT))) {
            this.tabBar[$classes].add(m4d_components.MaterialLayout._cssClasses.RIPPLE_IGNORE_EVENTS);
          }
          let tabs = this.tabBar[$querySelectorAll](html.Element, "." + dart.notNull(m4d_components.MaterialLayout._cssClasses.TAB));
          let panels = this.content[$querySelectorAll](html.Element, "." + dart.notNull(m4d_components.MaterialLayout._cssClasses.PANEL));
          for (let i = 0; i < dart.notNull(tabs[$length]); i = i + 1) {
            this[_tabs][$add](new m4d_components.MaterialLayoutTab.new(html.AnchorElement.as(tabs[$_get](i)), tabs[$map](html.AnchorElement, dart.fn(element => html.AnchorElement.as(element), ElementLToAnchorElementL()))[$toList](), panels[$map](html.HtmlElement, dart.fn(element => html.HtmlElement.as(element), ElementLToHtmlElementL()))[$toList](), this));
          }
        }
        this.element[$classes].add(m4d_components.MaterialLayout._cssClasses.IS_UPGRADED);
      }
    }
    [_contentScrollHandler](_) {
      if (dart.test(this.header[$classes].contains(m4d_components.MaterialLayout._cssClasses.IS_ANIMATING))) {
        return;
      }
      let headerVisible = !dart.test(this.element[$classes].contains(m4d_components.MaterialLayout._cssClasses.IS_SMALL_SCREEN)) || dart.test(this.element[$classes].contains(m4d_components.MaterialLayout._cssClasses.FIXED_HEADER));
      if (dart.notNull(this.content[$scrollTop]) > 0 && !dart.test(this.header[$classes].contains(m4d_components.MaterialLayout._cssClasses.IS_COMPACT))) {
        this.header[$classes].add(m4d_components.MaterialLayout._cssClasses.CASTING_SHADOW);
        this.header[$classes].add(m4d_components.MaterialLayout._cssClasses.IS_COMPACT);
        this.header[$classes].add(m4d_components.MaterialLayout._cssClasses.IS_ANIMATING);
        if (headerVisible) {
          this[_header][$classes].add(m4d_components.MaterialLayout._cssClasses.IS_ANIMATING);
        }
      } else if (dart.notNull(this.content[$scrollTop]) <= 0 && dart.test(this.header[$classes].contains(m4d_components.MaterialLayout._cssClasses.IS_COMPACT))) {
        this.header[$classes].remove(m4d_components.MaterialLayout._cssClasses.CASTING_SHADOW);
        this.header[$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_COMPACT);
        this.header[$classes].add(m4d_components.MaterialLayout._cssClasses.IS_ANIMATING);
        if (headerVisible) {
          this[_header][$classes].add(m4d_components.MaterialLayout._cssClasses.IS_ANIMATING);
        }
      }
    }
    [_keyboardEventHandler](event) {
      if (event.keyCode === 27 && dart.test(this.drawer[$classes].contains(m4d_components.MaterialLayout._cssClasses.IS_DRAWER_OPEN))) {
        this.toggleDrawer();
      }
    }
    [_screenSizeHandler]() {
      if (dart.test(this[_screenSizeMediaQuery].matches)) {
        this.element[$classes].add(m4d_components.MaterialLayout._cssClasses.IS_SMALL_SCREEN);
        if (this[_drawer] != null) {
          this[_drawer][$setAttribute]("aria-hidden", "true");
        }
      } else {
        this.element[$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_SMALL_SCREEN);
        if (this[_drawer] != null) {
          this[_drawer][$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_DRAWER_OPEN);
          this.obfuscator[$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_DRAWER_OPEN);
          if (dart.test(this.element[$classes].contains(m4d_components.MaterialLayout._cssClasses.FIXED_DRAWER))) {
            this[_drawer][$setAttribute]("aria-hidden", "false");
          }
        }
      }
    }
    [_drawerToggleHandler](event) {
      if (event != null && html.KeyEvent.is(event)) {
        if (event.keyCode === 32 || event.keyCode === 13) {
          event.preventDefault();
        } else {
          return;
        }
      }
      this.toggleDrawer();
    }
    [_drawerRemove](_) {
      this.drawer[$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_DRAWER_OPEN);
      this.obfuscator[$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_DRAWER_OPEN);
    }
    [_headerTransitionEndHandler](event) {
      this.header[$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_ANIMATING);
    }
    [_headerClickHandler](_) {
      if (dart.test(this.header[$classes].contains(m4d_components.MaterialLayout._cssClasses.IS_COMPACT))) {
        this.header[$classes].remove(m4d_components.MaterialLayout._cssClasses.IS_COMPACT);
        this.header[$classes].add(m4d_components.MaterialLayout._cssClasses.IS_ANIMATING);
      }
    }
    [_resetTabState](tabBar) {
      for (let k = 0; k < dart.notNull(core.num.as(dart.dload(tabBar, 'length'))); k = k + 1) {
        dart.dsend(dart.dload(dart.dsend(tabBar, '_get', [k]), 'classes'), 'remove', [m4d_components.MaterialLayout._cssClasses.IS_ACTIVE]);
      }
    }
    [_resetPanelState](panels) {
      for (let j = 0; j < dart.notNull(core.num.as(dart.dload(panels, 'length'))); j = j + 1) {
        dart.dsend(dart.dload(dart.dsend(panels, '_get', [j]), 'classes'), 'remove', [m4d_components.MaterialLayout._cssClasses.IS_ACTIVE]);
      }
    }
  };
  (m4d_components.MaterialLayout.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialLayout");
    this[_header] = null;
    this[_drawer] = null;
    this[_tabBar] = null;
    this[_content] = null;
    this[_obfuscator] = null;
    this[_screenSizeMediaQuery] = null;
    this[_tabs] = JSArrayOfMaterialLayoutTabL().of([]);
    m4d_components.MaterialLayout.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialLayout.prototype;
  dart.addTypeTests(m4d_components.MaterialLayout);
  dart.addTypeCaches(m4d_components.MaterialLayout);
  dart.setMethodSignature(m4d_components.MaterialLayout, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialLayout.__proto__),
    show: dart.fnType(dart.void, []),
    toggleDrawer: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_contentScrollHandler]: dart.fnType(dart.void, [dart.dynamic]),
    [_keyboardEventHandler]: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_screenSizeHandler]: dart.fnType(dart.void, []),
    [_drawerToggleHandler]: dart.fnType(dart.void, [html.Event]),
    [_drawerRemove]: dart.fnType(dart.void, [html.MouseEvent]),
    [_headerTransitionEndHandler]: dart.fnType(dart.void, [html.Event]),
    [_headerClickHandler]: dart.fnType(dart.void, [html.MouseEvent]),
    [_resetTabState]: dart.fnType(dart.void, [dart.dynamic]),
    [_resetPanelState]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(m4d_components.MaterialLayout, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialLayout.__proto__),
    header: html.HtmlElement,
    drawer: html.HtmlElement,
    tabBar: html.HtmlElement,
    content: html.HtmlElement,
    obfuscator: html.HtmlElement
  }));
  dart.setLibraryUri(m4d_components.MaterialLayout, L0);
  dart.setFieldSignature(m4d_components.MaterialLayout, () => ({
    __proto__: dart.getFields(m4d_components.MaterialLayout.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_header]: dart.fieldType(html.HtmlElement),
    [_drawer]: dart.fieldType(html.HtmlElement),
    [_tabBar]: dart.fieldType(html.HtmlElement),
    [_content]: dart.fieldType(html.HtmlElement),
    [_obfuscator]: dart.fieldType(html.HtmlElement),
    [_screenSizeMediaQuery]: dart.fieldType(html.MediaQueryList),
    [_tabs]: dart.finalFieldType(core.List$(m4d_components.MaterialLayoutTab))
  }));
  dart.defineLazy(m4d_components.MaterialLayout, {
    /*m4d_components.MaterialLayout._constant*/get _constant() {
      return C18 || CT.C18;
    },
    /*m4d_components.MaterialLayout._cssClasses*/get _cssClasses() {
      return C19 || CT.C19;
    },
    /*m4d_components.MaterialLayout._mode*/get _mode() {
      return C20 || CT.C20;
    }
  }, true);
  var tab$ = dart.privateName(m4d_components, "MaterialLayoutTab.tab");
  var tabs$ = dart.privateName(m4d_components, "MaterialLayoutTab.tabs");
  var panels$ = dart.privateName(m4d_components, "MaterialLayoutTab.panels");
  var layout$ = dart.privateName(m4d_components, "MaterialLayoutTab.layout");
  var eventStreams = dart.privateName(m4d_components, "MaterialLayoutTab.eventStreams");
  m4d_components.MaterialLayoutTab = class MaterialLayoutTab extends core.Object {
    get tab() {
      return this[tab$];
    }
    set tab(value) {
      super.tab = value;
    }
    get tabs() {
      return this[tabs$];
    }
    set tabs(value) {
      super.tabs = value;
    }
    get panels() {
      return this[panels$];
    }
    set panels(value) {
      super.panels = value;
    }
    get layout() {
      return this[layout$];
    }
    set layout(value) {
      super.layout = value;
    }
    get eventStreams() {
      return this[eventStreams];
    }
    set eventStreams(value) {
      super.eventStreams = value;
    }
    [_downgrade]() {
      this.eventStreams[$forEach](dart.fn(stream => {
        let t4;
        t4 = stream;
        t4 == null ? null : t4.cancel();
      }, StreamSubscriptionLToNullN()));
      this.eventStreams[$clear]();
    }
  };
  (m4d_components.MaterialLayoutTab.new = function(tab, tabs, panels, layout) {
    this[eventStreams] = JSArrayOfStreamSubscriptionL().of([]);
    this[tab$] = tab;
    this[tabs$] = tabs;
    this[panels$] = panels;
    this[layout$] = layout;
    const _selectTab = () => {
      let attribHref = this.tab[$attributes][$_get]("href");
      let href = attribHref[$split]("#")[$_get](1);
      let panel = this.layout.content.querySelector("#" + dart.notNull(href));
      this.layout[_resetTabState](this.tabs);
      this.layout[_resetPanelState](this.panels);
      this.tab[$classes].add(m4d_components.MaterialLayoutTab._cssClasses.IS_ACTIVE);
      panel[$classes].add(m4d_components.MaterialLayoutTab._cssClasses.IS_ACTIVE);
    };
    dart.fn(_selectTab, VoidTovoid());
    if (this.tab != null) {
      if (dart.test(this.layout.tabBar[$classes].contains(m4d_components.MaterialLayoutTab._cssClasses.JS_RIPPLE_EFFECT))) {
        let rippleContainer = html.SpanElement.new();
        rippleContainer[$classes].add(m4d_components.MaterialLayoutTab._cssClasses.RIPPLE_CONTAINER);
        rippleContainer[$classes].add(m4d_components.MaterialLayoutTab._cssClasses.JS_RIPPLE_EFFECT);
        let ripple = html.SpanElement.new();
        ripple[$classes].add(m4d_components.MaterialLayoutTab._cssClasses.RIPPLE);
        rippleContainer[$append](ripple);
        this.tab[$append](rippleContainer);
      }
      if (!dart.test(this.layout.tabBar[$classes].contains(m4d_components.MaterialLayoutTab._cssClasses.TAB_MANUAL_SWITCH))) {
        this.eventStreams[$add](this.tab[$onClick].listen(dart.fn(event => {
          if (this.tab[$attributes][$_get]("href")[$startsWith]("#")) {
            event.preventDefault();
            event.stopPropagation();
            _selectTab();
          }
        }, MouseEventLToNullN())));
      }
    }
  }).prototype = m4d_components.MaterialLayoutTab.prototype;
  dart.addTypeTests(m4d_components.MaterialLayoutTab);
  dart.addTypeCaches(m4d_components.MaterialLayoutTab);
  dart.setMethodSignature(m4d_components.MaterialLayoutTab, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialLayoutTab.__proto__),
    [_downgrade]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(m4d_components.MaterialLayoutTab, L0);
  dart.setFieldSignature(m4d_components.MaterialLayoutTab, () => ({
    __proto__: dart.getFields(m4d_components.MaterialLayoutTab.__proto__),
    tab: dart.finalFieldType(html.AnchorElement),
    tabs: dart.finalFieldType(core.List$(html.AnchorElement)),
    panels: dart.finalFieldType(core.List$(html.HtmlElement)),
    layout: dart.finalFieldType(m4d_components.MaterialLayout),
    eventStreams: dart.finalFieldType(core.List$(async.StreamSubscription))
  }));
  dart.defineLazy(m4d_components.MaterialLayoutTab, {
    /*m4d_components.MaterialLayoutTab._cssClasses*/get _cssClasses() {
      return C19 || CT.C19;
    }
  }, true);
  m4d_components._MaterialLayoutCssClasses = class _MaterialLayoutCssClasses extends core.Object {
    get CONTAINER() {
      return this[CONTAINER];
    }
    set CONTAINER(value) {
      super.CONTAINER = value;
    }
    get HEADER() {
      return this[HEADER];
    }
    set HEADER(value) {
      super.HEADER = value;
    }
    get DRAWER() {
      return this[DRAWER];
    }
    set DRAWER(value) {
      super.DRAWER = value;
    }
    get CONTENT() {
      return this[CONTENT];
    }
    set CONTENT(value) {
      super.CONTENT = value;
    }
    get DRAWER_BTN() {
      return this[DRAWER_BTN];
    }
    set DRAWER_BTN(value) {
      super.DRAWER_BTN = value;
    }
    get ICON() {
      return this[ICON];
    }
    set ICON(value) {
      super.ICON = value;
    }
    get JS_RIPPLE_EFFECT() {
      return this[JS_RIPPLE_EFFECT$2];
    }
    set JS_RIPPLE_EFFECT(value) {
      super.JS_RIPPLE_EFFECT = value;
    }
    get RIPPLE_CONTAINER() {
      return this[RIPPLE_CONTAINER$2];
    }
    set RIPPLE_CONTAINER(value) {
      super.RIPPLE_CONTAINER = value;
    }
    get RIPPLE() {
      return this[RIPPLE$2];
    }
    set RIPPLE(value) {
      super.RIPPLE = value;
    }
    get RIPPLE_IGNORE_EVENTS() {
      return this[RIPPLE_IGNORE_EVENTS$0];
    }
    set RIPPLE_IGNORE_EVENTS(value) {
      super.RIPPLE_IGNORE_EVENTS = value;
    }
    get HEADER_SEAMED() {
      return this[HEADER_SEAMED];
    }
    set HEADER_SEAMED(value) {
      super.HEADER_SEAMED = value;
    }
    get HEADER_WATERFALL() {
      return this[HEADER_WATERFALL];
    }
    set HEADER_WATERFALL(value) {
      super.HEADER_WATERFALL = value;
    }
    get HEADER_SCROLL() {
      return this[HEADER_SCROLL];
    }
    set HEADER_SCROLL(value) {
      super.HEADER_SCROLL = value;
    }
    get FIXED_HEADER() {
      return this[FIXED_HEADER];
    }
    set FIXED_HEADER(value) {
      super.FIXED_HEADER = value;
    }
    get FIXED_DRAWER() {
      return this[FIXED_DRAWER];
    }
    set FIXED_DRAWER(value) {
      super.FIXED_DRAWER = value;
    }
    get OBFUSCATOR() {
      return this[OBFUSCATOR];
    }
    set OBFUSCATOR(value) {
      super.OBFUSCATOR = value;
    }
    get TAB_BAR() {
      return this[TAB_BAR];
    }
    set TAB_BAR(value) {
      super.TAB_BAR = value;
    }
    get TAB_CONTAINER() {
      return this[TAB_CONTAINER];
    }
    set TAB_CONTAINER(value) {
      super.TAB_CONTAINER = value;
    }
    get TAB() {
      return this[TAB];
    }
    set TAB(value) {
      super.TAB = value;
    }
    get TAB_BAR_BUTTON() {
      return this[TAB_BAR_BUTTON];
    }
    set TAB_BAR_BUTTON(value) {
      super.TAB_BAR_BUTTON = value;
    }
    get TAB_BAR_LEFT_BUTTON() {
      return this[TAB_BAR_LEFT_BUTTON];
    }
    set TAB_BAR_LEFT_BUTTON(value) {
      super.TAB_BAR_LEFT_BUTTON = value;
    }
    get TAB_BAR_RIGHT_BUTTON() {
      return this[TAB_BAR_RIGHT_BUTTON];
    }
    set TAB_BAR_RIGHT_BUTTON(value) {
      super.TAB_BAR_RIGHT_BUTTON = value;
    }
    get TAB_MANUAL_SWITCH() {
      return this[TAB_MANUAL_SWITCH];
    }
    set TAB_MANUAL_SWITCH(value) {
      super.TAB_MANUAL_SWITCH = value;
    }
    get PANEL() {
      return this[PANEL];
    }
    set PANEL(value) {
      super.PANEL = value;
    }
    get NAVI_LINK() {
      return this[NAVI_LINK];
    }
    set NAVI_LINK(value) {
      super.NAVI_LINK = value;
    }
    get HAS_DRAWER() {
      return this[HAS_DRAWER];
    }
    set HAS_DRAWER(value) {
      super.HAS_DRAWER = value;
    }
    get HAS_TABS() {
      return this[HAS_TABS];
    }
    set HAS_TABS(value) {
      super.HAS_TABS = value;
    }
    get HAS_SCROLLING_HEADER() {
      return this[HAS_SCROLLING_HEADER];
    }
    set HAS_SCROLLING_HEADER(value) {
      super.HAS_SCROLLING_HEADER = value;
    }
    get CASTING_SHADOW() {
      return this[CASTING_SHADOW];
    }
    set CASTING_SHADOW(value) {
      super.CASTING_SHADOW = value;
    }
    get IS_COMPACT() {
      return this[IS_COMPACT];
    }
    set IS_COMPACT(value) {
      super.IS_COMPACT = value;
    }
    get IS_SMALL_SCREEN() {
      return this[IS_SMALL_SCREEN];
    }
    set IS_SMALL_SCREEN(value) {
      super.IS_SMALL_SCREEN = value;
    }
    get IS_DRAWER_OPEN() {
      return this[IS_DRAWER_OPEN];
    }
    set IS_DRAWER_OPEN(value) {
      super.IS_DRAWER_OPEN = value;
    }
    get IS_ACTIVE() {
      return this[IS_ACTIVE];
    }
    set IS_ACTIVE(value) {
      super.IS_ACTIVE = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$8];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get IS_ANIMATING() {
      return this[IS_ANIMATING];
    }
    set IS_ANIMATING(value) {
      super.IS_ANIMATING = value;
    }
    get ON_LARGE_SCREEN() {
      return this[ON_LARGE_SCREEN];
    }
    set ON_LARGE_SCREEN(value) {
      super.ON_LARGE_SCREEN = value;
    }
    get ON_SMALL_SCREEN() {
      return this[ON_SMALL_SCREEN];
    }
    set ON_SMALL_SCREEN(value) {
      super.ON_SMALL_SCREEN = value;
    }
  };
  (m4d_components._MaterialLayoutCssClasses.new = function() {
    this[CONTAINER] = "mdl-layout__container";
    this[HEADER] = "mdl-layout__header";
    this[DRAWER] = "mdl-layout__drawer";
    this[CONTENT] = "mdl-layout__content";
    this[DRAWER_BTN] = "mdl-layout__drawer-button";
    this[ICON] = "material-icons";
    this[JS_RIPPLE_EFFECT$2] = "mdl-ripple-effect";
    this[RIPPLE_CONTAINER$2] = "mdl-layout__tab-ripple-container";
    this[RIPPLE$2] = "mdl-ripple";
    this[RIPPLE_IGNORE_EVENTS$0] = "mdl-ripple-effect--ignore-events";
    this[HEADER_SEAMED] = "mdl-layout__header--seamed";
    this[HEADER_WATERFALL] = "mdl-layout__header--waterfall";
    this[HEADER_SCROLL] = "mdl-layout__header--scroll";
    this[FIXED_HEADER] = "mdl-layout--fixed-header";
    this[FIXED_DRAWER] = "mdl-layout--fixed-drawer";
    this[OBFUSCATOR] = "mdl-layout__obfuscator";
    this[TAB_BAR] = "mdl-layout__tab-bar";
    this[TAB_CONTAINER] = "mdl-layout__tab-bar-container";
    this[TAB] = "mdl-layout__tab";
    this[TAB_BAR_BUTTON] = "mdl-layout__tab-bar-button";
    this[TAB_BAR_LEFT_BUTTON] = "mdl-layout__tab-bar-left-button";
    this[TAB_BAR_RIGHT_BUTTON] = "mdl-layout__tab-bar-right-button";
    this[TAB_MANUAL_SWITCH] = "mdl-layout__tab-manual-switch";
    this[PANEL] = "mdl-layout__tab-panel";
    this[NAVI_LINK] = "mdl-navigation__link";
    this[HAS_DRAWER] = "has-drawer";
    this[HAS_TABS] = "has-tabs";
    this[HAS_SCROLLING_HEADER] = "has-scrolling-header";
    this[CASTING_SHADOW] = "is-casting-shadow";
    this[IS_COMPACT] = "is-compact";
    this[IS_SMALL_SCREEN] = "is-small-screen";
    this[IS_DRAWER_OPEN] = "is-visible";
    this[IS_ACTIVE] = "is-active";
    this[IS_UPGRADED$8] = "is-upgraded";
    this[IS_ANIMATING] = "is-animating";
    this[ON_LARGE_SCREEN] = "mdl-layout--large-screen-only";
    this[ON_SMALL_SCREEN] = "mdl-layout--small-screen-only";
    ;
  }).prototype = m4d_components._MaterialLayoutCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialLayoutCssClasses);
  dart.addTypeCaches(m4d_components._MaterialLayoutCssClasses);
  const CONTAINER = _MaterialLayoutCssClasses_CONTAINER;
  const HEADER = _MaterialLayoutCssClasses_HEADER;
  const DRAWER = _MaterialLayoutCssClasses_DRAWER;
  const CONTENT = _MaterialLayoutCssClasses_CONTENT;
  const DRAWER_BTN = _MaterialLayoutCssClasses_DRAWER_BTN;
  const ICON = _MaterialLayoutCssClasses_ICON;
  const JS_RIPPLE_EFFECT$2 = _MaterialLayoutCssClasses_JS_RIPPLE_EFFECT;
  const RIPPLE_CONTAINER$2 = _MaterialLayoutCssClasses_RIPPLE_CONTAINER;
  const RIPPLE$2 = _MaterialLayoutCssClasses_RIPPLE;
  const RIPPLE_IGNORE_EVENTS$0 = _MaterialLayoutCssClasses_RIPPLE_IGNORE_EVENTS;
  const HEADER_SEAMED = _MaterialLayoutCssClasses_HEADER_SEAMED;
  const HEADER_WATERFALL = _MaterialLayoutCssClasses_HEADER_WATERFALL;
  const HEADER_SCROLL = _MaterialLayoutCssClasses_HEADER_SCROLL;
  const FIXED_HEADER = _MaterialLayoutCssClasses_FIXED_HEADER;
  const FIXED_DRAWER = _MaterialLayoutCssClasses_FIXED_DRAWER;
  const OBFUSCATOR = _MaterialLayoutCssClasses_OBFUSCATOR;
  const TAB_BAR = _MaterialLayoutCssClasses_TAB_BAR;
  const TAB_CONTAINER = _MaterialLayoutCssClasses_TAB_CONTAINER;
  const TAB = _MaterialLayoutCssClasses_TAB;
  const TAB_BAR_BUTTON = _MaterialLayoutCssClasses_TAB_BAR_BUTTON;
  const TAB_BAR_LEFT_BUTTON = _MaterialLayoutCssClasses_TAB_BAR_LEFT_BUTTON;
  const TAB_BAR_RIGHT_BUTTON = _MaterialLayoutCssClasses_TAB_BAR_RIGHT_BUTTON;
  const TAB_MANUAL_SWITCH = _MaterialLayoutCssClasses_TAB_MANUAL_SWITCH;
  const PANEL = _MaterialLayoutCssClasses_PANEL;
  const NAVI_LINK = _MaterialLayoutCssClasses_NAVI_LINK;
  const HAS_DRAWER = _MaterialLayoutCssClasses_HAS_DRAWER;
  const HAS_TABS = _MaterialLayoutCssClasses_HAS_TABS;
  const HAS_SCROLLING_HEADER = _MaterialLayoutCssClasses_HAS_SCROLLING_HEADER;
  const CASTING_SHADOW = _MaterialLayoutCssClasses_CASTING_SHADOW;
  const IS_COMPACT = _MaterialLayoutCssClasses_IS_COMPACT;
  const IS_SMALL_SCREEN = _MaterialLayoutCssClasses_IS_SMALL_SCREEN;
  const IS_DRAWER_OPEN = _MaterialLayoutCssClasses_IS_DRAWER_OPEN;
  const IS_ACTIVE = _MaterialLayoutCssClasses_IS_ACTIVE;
  const IS_UPGRADED$8 = _MaterialLayoutCssClasses_IS_UPGRADED;
  const IS_ANIMATING = _MaterialLayoutCssClasses_IS_ANIMATING;
  const ON_LARGE_SCREEN = _MaterialLayoutCssClasses_ON_LARGE_SCREEN;
  const ON_SMALL_SCREEN = _MaterialLayoutCssClasses_ON_SMALL_SCREEN;
  dart.setLibraryUri(m4d_components._MaterialLayoutCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialLayoutCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialLayoutCssClasses.__proto__),
    CONTAINER: dart.finalFieldType(core.String),
    HEADER: dart.finalFieldType(core.String),
    DRAWER: dart.finalFieldType(core.String),
    CONTENT: dart.finalFieldType(core.String),
    DRAWER_BTN: dart.finalFieldType(core.String),
    ICON: dart.finalFieldType(core.String),
    JS_RIPPLE_EFFECT: dart.finalFieldType(core.String),
    RIPPLE_CONTAINER: dart.finalFieldType(core.String),
    RIPPLE: dart.finalFieldType(core.String),
    RIPPLE_IGNORE_EVENTS: dart.finalFieldType(core.String),
    HEADER_SEAMED: dart.finalFieldType(core.String),
    HEADER_WATERFALL: dart.finalFieldType(core.String),
    HEADER_SCROLL: dart.finalFieldType(core.String),
    FIXED_HEADER: dart.finalFieldType(core.String),
    FIXED_DRAWER: dart.finalFieldType(core.String),
    OBFUSCATOR: dart.finalFieldType(core.String),
    TAB_BAR: dart.finalFieldType(core.String),
    TAB_CONTAINER: dart.finalFieldType(core.String),
    TAB: dart.finalFieldType(core.String),
    TAB_BAR_BUTTON: dart.finalFieldType(core.String),
    TAB_BAR_LEFT_BUTTON: dart.finalFieldType(core.String),
    TAB_BAR_RIGHT_BUTTON: dart.finalFieldType(core.String),
    TAB_MANUAL_SWITCH: dart.finalFieldType(core.String),
    PANEL: dart.finalFieldType(core.String),
    NAVI_LINK: dart.finalFieldType(core.String),
    HAS_DRAWER: dart.finalFieldType(core.String),
    HAS_TABS: dart.finalFieldType(core.String),
    HAS_SCROLLING_HEADER: dart.finalFieldType(core.String),
    CASTING_SHADOW: dart.finalFieldType(core.String),
    IS_COMPACT: dart.finalFieldType(core.String),
    IS_SMALL_SCREEN: dart.finalFieldType(core.String),
    IS_DRAWER_OPEN: dart.finalFieldType(core.String),
    IS_ACTIVE: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String),
    IS_ANIMATING: dart.finalFieldType(core.String),
    ON_LARGE_SCREEN: dart.finalFieldType(core.String),
    ON_SMALL_SCREEN: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialLayoutCssClasses, {
    /*m4d_components._MaterialLayoutCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-layout";
    }
  }, true);
  m4d_components._MaterialLayoutConstant = class _MaterialLayoutConstant extends core.Object {
    get MAX_WIDTH() {
      return this[MAX_WIDTH];
    }
    set MAX_WIDTH(value) {
      super.MAX_WIDTH = value;
    }
    get TAB_SCROLL_PIXELS() {
      return this[TAB_SCROLL_PIXELS];
    }
    set TAB_SCROLL_PIXELS(value) {
      super.TAB_SCROLL_PIXELS = value;
    }
    get RESIZE_TIMEOUT() {
      return this[RESIZE_TIMEOUT];
    }
    set RESIZE_TIMEOUT(value) {
      super.RESIZE_TIMEOUT = value;
    }
    get MENU_ICON() {
      return this[MENU_ICON];
    }
    set MENU_ICON(value) {
      super.MENU_ICON = value;
    }
    get CHEVRON_LEFT() {
      return this[CHEVRON_LEFT];
    }
    set CHEVRON_LEFT(value) {
      super.CHEVRON_LEFT = value;
    }
    get CHEVRON_RIGHT() {
      return this[CHEVRON_RIGHT];
    }
    set CHEVRON_RIGHT(value) {
      super.CHEVRON_RIGHT = value;
    }
  };
  (m4d_components._MaterialLayoutConstant.new = function() {
    this[MAX_WIDTH] = "(max-width: 1024px)";
    this[TAB_SCROLL_PIXELS] = 100;
    this[RESIZE_TIMEOUT] = 100;
    this[MENU_ICON] = "&#xE5D2;";
    this[CHEVRON_LEFT] = "chevron_left";
    this[CHEVRON_RIGHT] = "chevron_right";
    ;
  }).prototype = m4d_components._MaterialLayoutConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialLayoutConstant);
  dart.addTypeCaches(m4d_components._MaterialLayoutConstant);
  const MAX_WIDTH = _MaterialLayoutConstant_MAX_WIDTH;
  const TAB_SCROLL_PIXELS = _MaterialLayoutConstant_TAB_SCROLL_PIXELS;
  const RESIZE_TIMEOUT = _MaterialLayoutConstant_RESIZE_TIMEOUT;
  const MENU_ICON = _MaterialLayoutConstant_MENU_ICON;
  const CHEVRON_LEFT = _MaterialLayoutConstant_CHEVRON_LEFT;
  const CHEVRON_RIGHT = _MaterialLayoutConstant_CHEVRON_RIGHT;
  dart.setLibraryUri(m4d_components._MaterialLayoutConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialLayoutConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialLayoutConstant.__proto__),
    MAX_WIDTH: dart.finalFieldType(core.String),
    TAB_SCROLL_PIXELS: dart.finalFieldType(core.int),
    RESIZE_TIMEOUT: dart.finalFieldType(core.int),
    MENU_ICON: dart.finalFieldType(core.String),
    CHEVRON_LEFT: dart.finalFieldType(core.String),
    CHEVRON_RIGHT: dart.finalFieldType(core.String)
  }));
  var value$ = dart.privateName(m4d_components, "_KeyCode.value");
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  m4d_components._KeyCode = class _KeyCode extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
  };
  (m4d_components._KeyCode.new = function(value) {
    this[value$] = value;
    ;
  }).prototype = m4d_components._KeyCode.prototype;
  dart.addTypeTests(m4d_components._KeyCode);
  dart.addTypeCaches(m4d_components._KeyCode);
  dart.setLibraryUri(m4d_components._KeyCode, L0);
  dart.setFieldSignature(m4d_components._KeyCode, () => ({
    __proto__: dart.getFields(m4d_components._KeyCode.__proto__),
    value: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(m4d_components._KeyCode, {
    /*m4d_components._KeyCode.ENTER*/get ENTER() {
      return C21 || CT.C21;
    },
    /*m4d_components._KeyCode.ESCAPE*/get ESCAPE() {
      return C22 || CT.C22;
    },
    /*m4d_components._KeyCode.SPACE*/get SPACE() {
      return C23 || CT.C23;
    },
    /*m4d_components._KeyCode.UP_ARROW*/get UP_ARROW() {
      return C24 || CT.C24;
    },
    /*m4d_components._KeyCode.DOWN_ARROW*/get DOWN_ARROW() {
      return C25 || CT.C25;
    }
  }, true);
  var _closing = dart.privateName(m4d_components, "_closing");
  var _container = dart.privateName(m4d_components, "_container");
  var _outline = dart.privateName(m4d_components, "_outline");
  var _forElement = dart.privateName(m4d_components, "_forElement");
  var _animationStream = dart.privateName(m4d_components, "_animationStream");
  var _initForElement = dart.privateName(m4d_components, "_initForElement");
  var _recalcPosition = dart.privateName(m4d_components, "_recalcPosition");
  var _applyClip = dart.privateName(m4d_components, "_applyClip");
  var _addAnimationEndListener = dart.privateName(m4d_components, "_addAnimationEndListener");
  var _handleItemClick = dart.privateName(m4d_components, "_handleItemClick");
  var _handleItemKeyboardEvent = dart.privateName(m4d_components, "_handleItemKeyboardEvent");
  var _handleForClick = dart.privateName(m4d_components, "_handleForClick");
  var _handleForKeyboardEvent = dart.privateName(m4d_components, "_handleForKeyboardEvent");
  var _MaterialMenuConstant_CLOSE_TIMEOUT = dart.privateName(m4d_components, "_MaterialMenuConstant.CLOSE_TIMEOUT");
  var _MaterialMenuConstant_TRANSITION_DURATION_FRACTION = dart.privateName(m4d_components, "_MaterialMenuConstant.TRANSITION_DURATION_FRACTION");
  var _MaterialMenuConstant_TRANSITION_DURATION_SECONDS = dart.privateName(m4d_components, "_MaterialMenuConstant.TRANSITION_DURATION_SECONDS");
  var C26;
  var _MaterialMenuCssClasses_UNALIGNED = dart.privateName(m4d_components, "_MaterialMenuCssClasses.UNALIGNED");
  var _MaterialMenuCssClasses_TOP_RIGHT = dart.privateName(m4d_components, "_MaterialMenuCssClasses.TOP_RIGHT");
  var _MaterialMenuCssClasses_TOP_LEFT = dart.privateName(m4d_components, "_MaterialMenuCssClasses.TOP_LEFT");
  var _MaterialMenuCssClasses_BOTTOM_RIGHT = dart.privateName(m4d_components, "_MaterialMenuCssClasses.BOTTOM_RIGHT");
  var _MaterialMenuCssClasses_BOTTOM_LEFT = dart.privateName(m4d_components, "_MaterialMenuCssClasses.BOTTOM_LEFT");
  var _MaterialMenuCssClasses_IS_ANIMATING = dart.privateName(m4d_components, "_MaterialMenuCssClasses.IS_ANIMATING");
  var _MaterialMenuCssClasses_IS_VISIBLE = dart.privateName(m4d_components, "_MaterialMenuCssClasses.IS_VISIBLE");
  var _MaterialMenuCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialMenuCssClasses.IS_UPGRADED");
  var _MaterialMenuCssClasses_RIPPLE = dart.privateName(m4d_components, "_MaterialMenuCssClasses.RIPPLE");
  var _MaterialMenuCssClasses_RIPPLE_IGNORE_EVENTS = dart.privateName(m4d_components, "_MaterialMenuCssClasses.RIPPLE_IGNORE_EVENTS");
  var _MaterialMenuCssClasses_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialMenuCssClasses.RIPPLE_EFFECT");
  var _MaterialMenuCssClasses_ITEM_RIPPLE_CONTAINER = dart.privateName(m4d_components, "_MaterialMenuCssClasses.ITEM_RIPPLE_CONTAINER");
  var _MaterialMenuCssClasses_ITEM = dart.privateName(m4d_components, "_MaterialMenuCssClasses.ITEM");
  var _MaterialMenuCssClasses_OUTLINE = dart.privateName(m4d_components, "_MaterialMenuCssClasses.OUTLINE");
  var _MaterialMenuCssClasses_CONTAINER = dart.privateName(m4d_components, "_MaterialMenuCssClasses.CONTAINER");
  var C27;
  m4d_components.MaterialMenu = class MaterialMenu extends m4d_core.MdlComponent {
    get forElement() {
      if (this[_forElement] == null) {
        this[_initForElement]();
      }
      return this[_forElement];
    }
    static widget(element) {
      return m4d_components.MaterialMenu.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialMenu)));
    }
    show() {
      this[_recalcPosition]();
      if (this.element != null && this[_container] != null && this[_outline] != null) {
        let height = this.element.getBoundingClientRect()[$height];
        let width = this.element.getBoundingClientRect()[$width];
        this[_container].style[$width] = dart.str(width) + "px";
        this[_container].style[$height] = dart.str(height) + "px";
        this[_outline].style[$width] = dart.str(width) + "px";
        this[_outline].style[$height] = dart.str(height) + "px";
        let transitionDuration = dart.notNull(m4d_components.MaterialMenu._constant.TRANSITION_DURATION_SECONDS) * dart.notNull(m4d_components.MaterialMenu._constant.TRANSITION_DURATION_FRACTION);
        let items = this.element[$querySelectorAll](html.Element, "." + dart.notNull(m4d_components.MaterialMenu._cssClasses.ITEM));
        items[$forEach](dart.fn(item => {
          let itemDelay = 0.0;
          if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.TOP_LEFT)) || dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.TOP_RIGHT))) {
            itemDelay = (dart.notNull(height) - dart.notNull(item[$offsetTop]) - dart.notNull(item[$offsetHeight])) / dart.notNull(height) * transitionDuration;
          } else {
            itemDelay = dart.notNull(item[$offsetTop]) / dart.notNull(height) * transitionDuration;
          }
          item.style[$transitionDelay] = dart.str(itemDelay) + "s";
        }, ElementLToNullN()));
        this[_applyClip](height, width);
        html.window[$requestAnimationFrame](dart.fn(_ => {
          this.element[$classes].add(m4d_components.MaterialMenu._cssClasses.IS_ANIMATING);
          this.element.style[$clip] = "rect(0 " + dart.str(width) + "px " + dart.str(height) + "px 0)";
          this[_container][$classes].add(m4d_components.MaterialMenu._cssClasses.IS_VISIBLE);
        }, numLToNullN()));
        this[_addAnimationEndListener]();
      }
    }
    hide() {
      if (this.element != null && this[_container] != null && this[_outline] != null) {
        let items = this.element[$querySelectorAll](html.Element, "." + dart.notNull(m4d_components.MaterialMenu._cssClasses.ITEM));
        items[$forEach](dart.fn(item => {
          item.style.removeProperty("transition-delay");
        }, ElementLToNullN()));
        let height = this.element.getBoundingClientRect()[$height];
        let width = this.element.getBoundingClientRect()[$width];
        this.element[$classes].add(m4d_components.MaterialMenu._cssClasses.IS_ANIMATING);
        this[_applyClip](height, width);
        this[_container][$classes].remove(m4d_components.MaterialMenu._cssClasses.IS_VISIBLE);
        this[_addAnimationEndListener]();
      }
    }
    toggle() {
      if (dart.test(this[_container][$classes].contains(m4d_components.MaterialMenu._cssClasses.IS_VISIBLE))) {
        this.hide();
      } else {
        this.show();
      }
    }
    [_init]() {
      this[_logger].fine("MaterialMenu - init");
      if (this.element != null) {
        let container = html.DivElement.new();
        container[$classes].add(m4d_components.MaterialMenu._cssClasses.CONTAINER);
        this.element[$parent].insertBefore(container, this.element);
        this.element[$remove]();
        container[$append](this.element);
        this[_container] = container;
        let outline = html.DivElement.new();
        outline[$classes].add(m4d_components.MaterialMenu._cssClasses.OUTLINE);
        this[_outline] = outline;
        container.insertBefore(outline, this.element);
        this[_initForElement]();
        let items = this.element[$querySelectorAll](html.Element, "." + dart.notNull(m4d_components.MaterialMenu._cssClasses.ITEM));
        items[$forEach](dart.fn(item => {
          this.eventStreams[$add](item[$onClick].listen(dart.bind(this, _handleItemClick)));
          item.tabIndex = -1;
          this.eventStreams[$add](item[$onKeyDown].listen(dart.bind(this, _handleItemKeyboardEvent)));
        }, ElementLToNullN()));
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.RIPPLE_EFFECT))) {
          this.element[$classes].add(m4d_components.MaterialMenu._cssClasses.RIPPLE_IGNORE_EVENTS);
          items[$forEach](dart.fn(item => {
            let rippleContainer = html.SpanElement.new();
            rippleContainer[$classes].add(m4d_components.MaterialMenu._cssClasses.ITEM_RIPPLE_CONTAINER);
            let ripple = html.SpanElement.new();
            ripple[$classes].add(m4d_components.MaterialMenu._cssClasses.RIPPLE);
            rippleContainer[$append](ripple);
            item[$append](rippleContainer);
            item[$classes].add(m4d_components.MaterialMenu._cssClasses.RIPPLE_EFFECT);
          }, ElementLToNullN()));
        }
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.BOTTOM_LEFT))) {
          this[_outline][$classes].add(m4d_components.MaterialMenu._cssClasses.BOTTOM_LEFT);
        }
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.BOTTOM_RIGHT))) {
          this[_outline][$classes].add(m4d_components.MaterialMenu._cssClasses.BOTTOM_RIGHT);
        }
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.TOP_LEFT))) {
          this[_outline][$classes].add(m4d_components.MaterialMenu._cssClasses.TOP_LEFT);
        }
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.TOP_RIGHT))) {
          this[_outline][$classes].add(m4d_components.MaterialMenu._cssClasses.TOP_RIGHT);
        }
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.UNALIGNED))) {
          this[_outline][$classes].add(m4d_components.MaterialMenu._cssClasses.UNALIGNED);
        }
        const _closeMenu = event => {
          if (!dart.test(this[_closing])) {
            this.hide();
          }
        };
        dart.fn(_closeMenu, EventLTovoid());
        html.document[$onClick].listen(dart.fn(event => _closeMenu(event), EventLTovoid()));
        html.document[$onKeyDown].listen(dart.fn(event => {
          if (event.keyCode == m4d_components._KeyCode.ESCAPE.value) {
            _closeMenu(event);
          }
        }, KeyboardEventLToNullN()));
        container[$classes].add(m4d_components.MaterialMenu._cssClasses.IS_UPGRADED);
      }
    }
    [_initForElement]() {
      let forElId = this.element[$getAttribute]("for") != null ? this.element[$getAttribute]("for") : this.element[$getAttribute]("data-mdl-for");
      this[_logger].fine("forElId " + dart.str(forElId));
      if (forElId != null) {
        const _addEventListeners = forEl => {
          this[_logger].fine("forEL " + dart.str(forEl) + " #" + dart.str(forElId));
          if (forEl != null) {
            this[_logger].fine(dart.str(this.element) + " has a for-ID: #" + dart.str(forElId) + " pointing to " + dart.str(forEl));
            this[_forElement] = forEl;
            this.eventStreams[$add](forEl[$onClick].listen(dart.bind(this, _handleForClick)));
            this.eventStreams[$add](forEl[$onKeyDown].listen(dart.bind(this, _handleForKeyboardEvent)));
          }
        };
        dart.fn(_addEventListeners, HtmlElementLTovoid());
        FutureOfNullN().delayed(new core.Duration.new({milliseconds: 100}), dart.fn(() => {
          _addEventListeners(html.HtmlElement.as(html.document.getElementById(forElId)));
          this[_logger].fine("_addEventListeners " + dart.str(forElId));
        }, VoidToNullN()));
      }
    }
    [_handleForClick](evt) {
      this[_recalcPosition]();
      this.toggle();
    }
    [_recalcPosition]() {
      this[_logger].fine("Recalc " + dart.str(this.element) + " " + dart.str(this.forElement));
      if (this.element != null && this.forElement != null) {
        let rect = this.forElement.getBoundingClientRect();
        let forRect = this.forElement[$parent].getBoundingClientRect();
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.UNALIGNED))) {
        } else if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.BOTTOM_RIGHT))) {
          this[_container].style[$right] = dart.str(dart.notNull(forRect[$right]) - dart.notNull(rect[$right]) + 10) + "px";
          this[_container].style[$top] = dart.str(dart.notNull(this.forElement[$offsetTop]) + dart.notNull(this.forElement[$offsetHeight])) + "px";
        } else if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.TOP_LEFT))) {
          this[_container].style[$left] = dart.str(this.forElement[$offsetLeft]) + "px";
          this[_container].style[$bottom] = dart.str(dart.notNull(forRect[$bottom]) - dart.notNull(rect[$top])) + "px";
        } else if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.TOP_RIGHT))) {
          this[_container].style[$right] = dart.str(dart.notNull(forRect[$right]) - dart.notNull(rect[$right])) + "px";
          this[_container].style[$bottom] = dart.str(dart.notNull(forRect[$bottom]) - dart.notNull(rect[$top])) + "px";
        } else {
          this[_container].style[$left] = dart.str(this.forElement[$offsetLeft]) + "px";
          this[_container].style[$top] = dart.str(dart.notNull(this.forElement[$offsetTop]) + dart.notNull(this.forElement[$offsetHeight])) + "px";
        }
      }
    }
    [_handleForKeyboardEvent](event) {
      this[_logger].fine("_handleForKeyboardEvent: " + dart.str(event));
      if (this.element != null && this[_container] != null && this.forElement != null) {
        let items = this.element[$querySelectorAll](html.Element, "." + dart.notNull(m4d_components.MaterialMenu._cssClasses.ITEM) + ":not([disabled])");
        if (items != null && dart.notNull(items[$length]) > 0 && dart.test(this[_container][$classes].contains(m4d_components.MaterialMenu._cssClasses.IS_VISIBLE))) {
          if (event.keyCode == m4d_components._KeyCode.UP_ARROW.value) {
            event.preventDefault();
            items[$last].focus();
          } else if (event.keyCode == m4d_components._KeyCode.DOWN_ARROW.value) {
            event.preventDefault();
            items[$first].focus();
          }
        }
      }
    }
    [_handleItemKeyboardEvent](event) {
      this[_logger].fine("_handleItemKeyboardEvent: " + dart.str(event));
      if (this.element != null && this[_container] != null) {
        let items = this.element[$querySelectorAll](html.Element, "." + dart.notNull(m4d_components.MaterialMenu._cssClasses.ITEM) + ":not([disabled])");
        if (items != null && dart.notNull(items[$length]) > 0 && dart.test(this[_container][$classes].contains(m4d_components.MaterialMenu._cssClasses.IS_VISIBLE))) {
          let currentIndex = items[$indexOf](html.Element.as(event[$target]));
          this[_logger].fine(dart.str(event[$target]) + " -> " + dart.str(currentIndex));
          if (event.keyCode == m4d_components._KeyCode.UP_ARROW.value) {
            event.preventDefault();
            if (dart.notNull(currentIndex) > 0) {
              items[$_get](dart.notNull(currentIndex) - 1).focus();
            } else {
              items[$_get](dart.notNull(items[$length]) - 1).focus();
            }
          } else if (event.keyCode == m4d_components._KeyCode.DOWN_ARROW.value) {
            event.preventDefault();
            if (dart.notNull(items[$length]) > dart.notNull(currentIndex) + 1) {
              items[$_get](dart.notNull(currentIndex) + 1).focus();
            } else {
              items[$_get](0).focus();
            }
          } else if (event.keyCode == m4d_components._KeyCode.SPACE.value || event.keyCode == m4d_components._KeyCode.ENTER.value) {
            event.preventDefault();
            let dynEvent = html.MouseEvent.new("mousedown");
            event[$target].dispatchEvent(dynEvent);
            dynEvent = html.MouseEvent.new("mouseup");
            event[$target].dispatchEvent(dynEvent);
            html.Element.as(event[$target]).click();
          } else if (event.keyCode == m4d_components._KeyCode.ESCAPE.value) {
            event.preventDefault();
            this.hide();
          }
        }
      }
    }
    [_handleItemClick](event) {
      event.stopPropagation();
      if (dart.test(html.Element.as(event[$target])[$attributes][$containsKey]("disabled"))) {
        event.stopPropagation();
      } else {
        this[_closing] = true;
        async.Timer.new(new core.Duration.new({milliseconds: m4d_components.MaterialMenu._constant.CLOSE_TIMEOUT}), dart.fn(() => {
          this.hide();
          this[_closing] = false;
        }, VoidToNullN()));
      }
    }
    [_applyClip](height, width) {
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.UNALIGNED))) {
        this.element.style[$clip] = "";
      } else if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.BOTTOM_RIGHT))) {
        this.element.style[$clip] = "rect(0 " + dart.str(width) + "px 0 " + dart.str(width) + "px)";
      } else if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.TOP_LEFT))) {
        this.element.style[$clip] = "rect(" + dart.str(height) + "px 0 " + dart.str(height) + "px 0)";
      } else if (dart.test(this.element[$classes].contains(m4d_components.MaterialMenu._cssClasses.TOP_RIGHT))) {
        this.element.style[$clip] = "rect(" + dart.str(height) + "px " + dart.str(width) + "px " + dart.str(height) + "px " + dart.str(width) + "px)";
      } else {
        this.element.style[$clip] = "";
      }
    }
    [_addAnimationEndListener]() {
      let _removeAnimationEndListener = dart.fn(event => {
        if (this[_animationStream] != null) {
          this[_animationStream].cancel();
          this[_animationStream] = null;
        }
        this.element[$classes].remove(m4d_components.MaterialMenu._cssClasses.IS_ANIMATING);
      }, TransitionEventLToNullN());
      this[_animationStream] = this.element[$onTransitionEnd].listen(_removeAnimationEndListener);
    }
  };
  (m4d_components.MaterialMenu.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialMenu");
    this[_closing] = false;
    this[_container] = null;
    this[_outline] = null;
    this[_forElement] = null;
    this[_animationStream] = null;
    m4d_components.MaterialMenu.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialMenu.prototype;
  dart.addTypeTests(m4d_components.MaterialMenu);
  dart.addTypeCaches(m4d_components.MaterialMenu);
  dart.setMethodSignature(m4d_components.MaterialMenu, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialMenu.__proto__),
    show: dart.fnType(dart.void, []),
    hide: dart.fnType(dart.void, []),
    toggle: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_initForElement]: dart.fnType(dart.void, []),
    [_handleForClick]: dart.fnType(dart.void, [html.MouseEvent]),
    [_recalcPosition]: dart.fnType(dart.void, []),
    [_handleForKeyboardEvent]: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_handleItemKeyboardEvent]: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_handleItemClick]: dart.fnType(dart.void, [html.MouseEvent]),
    [_applyClip]: dart.fnType(dart.void, [core.num, core.num]),
    [_addAnimationEndListener]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialMenu, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialMenu.__proto__),
    forElement: html.Element
  }));
  dart.setLibraryUri(m4d_components.MaterialMenu, L0);
  dart.setFieldSignature(m4d_components.MaterialMenu, () => ({
    __proto__: dart.getFields(m4d_components.MaterialMenu.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_closing]: dart.fieldType(core.bool),
    [_container]: dart.fieldType(html.DivElement),
    [_outline]: dart.fieldType(html.DivElement),
    [_forElement]: dart.fieldType(html.Element),
    [_animationStream]: dart.fieldType(async.StreamSubscription$(html.TransitionEvent))
  }));
  dart.defineLazy(m4d_components.MaterialMenu, {
    /*m4d_components.MaterialMenu._constant*/get _constant() {
      return C26 || CT.C26;
    },
    /*m4d_components.MaterialMenu._cssClasses*/get _cssClasses() {
      return C27 || CT.C27;
    }
  }, true);
  m4d_components._MaterialMenuCssClasses = class _MaterialMenuCssClasses extends core.Object {
    get CONTAINER() {
      return this[CONTAINER$];
    }
    set CONTAINER(value) {
      super.CONTAINER = value;
    }
    get OUTLINE() {
      return this[OUTLINE];
    }
    set OUTLINE(value) {
      super.OUTLINE = value;
    }
    get ITEM() {
      return this[ITEM];
    }
    set ITEM(value) {
      super.ITEM = value;
    }
    get ITEM_RIPPLE_CONTAINER() {
      return this[ITEM_RIPPLE_CONTAINER];
    }
    set ITEM_RIPPLE_CONTAINER(value) {
      super.ITEM_RIPPLE_CONTAINER = value;
    }
    get RIPPLE_EFFECT() {
      return this[RIPPLE_EFFECT$1];
    }
    set RIPPLE_EFFECT(value) {
      super.RIPPLE_EFFECT = value;
    }
    get RIPPLE_IGNORE_EVENTS() {
      return this[RIPPLE_IGNORE_EVENTS$1];
    }
    set RIPPLE_IGNORE_EVENTS(value) {
      super.RIPPLE_IGNORE_EVENTS = value;
    }
    get RIPPLE() {
      return this[RIPPLE$3];
    }
    set RIPPLE(value) {
      super.RIPPLE = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$9];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get IS_VISIBLE() {
      return this[IS_VISIBLE];
    }
    set IS_VISIBLE(value) {
      super.IS_VISIBLE = value;
    }
    get IS_ANIMATING() {
      return this[IS_ANIMATING$];
    }
    set IS_ANIMATING(value) {
      super.IS_ANIMATING = value;
    }
    get BOTTOM_LEFT() {
      return this[BOTTOM_LEFT];
    }
    set BOTTOM_LEFT(value) {
      super.BOTTOM_LEFT = value;
    }
    get BOTTOM_RIGHT() {
      return this[BOTTOM_RIGHT];
    }
    set BOTTOM_RIGHT(value) {
      super.BOTTOM_RIGHT = value;
    }
    get TOP_LEFT() {
      return this[TOP_LEFT];
    }
    set TOP_LEFT(value) {
      super.TOP_LEFT = value;
    }
    get TOP_RIGHT() {
      return this[TOP_RIGHT];
    }
    set TOP_RIGHT(value) {
      super.TOP_RIGHT = value;
    }
    get UNALIGNED() {
      return this[UNALIGNED];
    }
    set UNALIGNED(value) {
      super.UNALIGNED = value;
    }
  };
  (m4d_components._MaterialMenuCssClasses.new = function() {
    this[CONTAINER$] = "mdl-menu__container";
    this[OUTLINE] = "mdl-menu__outline";
    this[ITEM] = "mdl-menu__item";
    this[ITEM_RIPPLE_CONTAINER] = "mdl-menu__item-ripple-container";
    this[RIPPLE_EFFECT$1] = "mdl-ripple-effect";
    this[RIPPLE_IGNORE_EVENTS$1] = "mdl-ripple-effect--ignore-events";
    this[RIPPLE$3] = "mdl-ripple";
    this[IS_UPGRADED$9] = "is-upgraded";
    this[IS_VISIBLE] = "is-visible";
    this[IS_ANIMATING$] = "is-animating";
    this[BOTTOM_LEFT] = "mdl-menu--bottom-left";
    this[BOTTOM_RIGHT] = "mdl-menu--bottom-right";
    this[TOP_LEFT] = "mdl-menu--top-left";
    this[TOP_RIGHT] = "mdl-menu--top-right";
    this[UNALIGNED] = "mdl-menu--unaligned";
    ;
  }).prototype = m4d_components._MaterialMenuCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialMenuCssClasses);
  dart.addTypeCaches(m4d_components._MaterialMenuCssClasses);
  const CONTAINER$ = _MaterialMenuCssClasses_CONTAINER;
  const OUTLINE = _MaterialMenuCssClasses_OUTLINE;
  const ITEM = _MaterialMenuCssClasses_ITEM;
  const ITEM_RIPPLE_CONTAINER = _MaterialMenuCssClasses_ITEM_RIPPLE_CONTAINER;
  const RIPPLE_EFFECT$1 = _MaterialMenuCssClasses_RIPPLE_EFFECT;
  const RIPPLE_IGNORE_EVENTS$1 = _MaterialMenuCssClasses_RIPPLE_IGNORE_EVENTS;
  const RIPPLE$3 = _MaterialMenuCssClasses_RIPPLE;
  const IS_UPGRADED$9 = _MaterialMenuCssClasses_IS_UPGRADED;
  const IS_VISIBLE = _MaterialMenuCssClasses_IS_VISIBLE;
  const IS_ANIMATING$ = _MaterialMenuCssClasses_IS_ANIMATING;
  const BOTTOM_LEFT = _MaterialMenuCssClasses_BOTTOM_LEFT;
  const BOTTOM_RIGHT = _MaterialMenuCssClasses_BOTTOM_RIGHT;
  const TOP_LEFT = _MaterialMenuCssClasses_TOP_LEFT;
  const TOP_RIGHT = _MaterialMenuCssClasses_TOP_RIGHT;
  const UNALIGNED = _MaterialMenuCssClasses_UNALIGNED;
  dart.setLibraryUri(m4d_components._MaterialMenuCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialMenuCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialMenuCssClasses.__proto__),
    CONTAINER: dart.finalFieldType(core.String),
    OUTLINE: dart.finalFieldType(core.String),
    ITEM: dart.finalFieldType(core.String),
    ITEM_RIPPLE_CONTAINER: dart.finalFieldType(core.String),
    RIPPLE_EFFECT: dart.finalFieldType(core.String),
    RIPPLE_IGNORE_EVENTS: dart.finalFieldType(core.String),
    RIPPLE: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String),
    IS_VISIBLE: dart.finalFieldType(core.String),
    IS_ANIMATING: dart.finalFieldType(core.String),
    BOTTOM_LEFT: dart.finalFieldType(core.String),
    BOTTOM_RIGHT: dart.finalFieldType(core.String),
    TOP_LEFT: dart.finalFieldType(core.String),
    TOP_RIGHT: dart.finalFieldType(core.String),
    UNALIGNED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialMenuCssClasses, {
    /*m4d_components._MaterialMenuCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-menu";
    }
  }, true);
  m4d_components._MaterialMenuConstant = class _MaterialMenuConstant extends core.Object {
    get TRANSITION_DURATION_SECONDS() {
      return this[TRANSITION_DURATION_SECONDS];
    }
    set TRANSITION_DURATION_SECONDS(value) {
      super.TRANSITION_DURATION_SECONDS = value;
    }
    get TRANSITION_DURATION_FRACTION() {
      return this[TRANSITION_DURATION_FRACTION];
    }
    set TRANSITION_DURATION_FRACTION(value) {
      super.TRANSITION_DURATION_FRACTION = value;
    }
    get CLOSE_TIMEOUT() {
      return this[CLOSE_TIMEOUT];
    }
    set CLOSE_TIMEOUT(value) {
      super.CLOSE_TIMEOUT = value;
    }
  };
  (m4d_components._MaterialMenuConstant.new = function() {
    this[TRANSITION_DURATION_SECONDS] = 0;
    this[TRANSITION_DURATION_FRACTION] = 0;
    this[CLOSE_TIMEOUT] = 150;
    ;
  }).prototype = m4d_components._MaterialMenuConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialMenuConstant);
  dart.addTypeCaches(m4d_components._MaterialMenuConstant);
  const TRANSITION_DURATION_SECONDS = _MaterialMenuConstant_TRANSITION_DURATION_SECONDS;
  const TRANSITION_DURATION_FRACTION = _MaterialMenuConstant_TRANSITION_DURATION_FRACTION;
  const CLOSE_TIMEOUT = _MaterialMenuConstant_CLOSE_TIMEOUT;
  dart.setLibraryUri(m4d_components._MaterialMenuConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialMenuConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialMenuConstant.__proto__),
    TRANSITION_DURATION_SECONDS: dart.finalFieldType(core.int),
    TRANSITION_DURATION_FRACTION: dart.finalFieldType(core.int),
    CLOSE_TIMEOUT: dart.finalFieldType(core.int)
  }));
  var _progressbar = dart.privateName(m4d_components, "_progressbar");
  var _bufferbar = dart.privateName(m4d_components, "_bufferbar");
  var _auxbar = dart.privateName(m4d_components, "_auxbar");
  var C28;
  var _MaterialProgressCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialProgressCssClasses.IS_UPGRADED");
  var _MaterialProgressCssClasses_INDETERMINATE_CLASS = dart.privateName(m4d_components, "_MaterialProgressCssClasses.INDETERMINATE_CLASS");
  var C29;
  m4d_components.MaterialProgress = class MaterialProgress extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialProgress.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialProgress)));
    }
    set progress(widthInPercent) {
      widthInPercent = math.max(core.int, 0, math.min(core.int, 100, widthInPercent));
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialProgress._cssClasses.INDETERMINATE_CLASS))) {
        return;
      }
      this[_progressbar].style[$width] = dart.str(widthInPercent) + "%";
    }
    get progress() {
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialProgress._cssClasses.INDETERMINATE_CLASS))) {
        return 0;
      }
      return core.int.parse(this[_progressbar].style[$width][$replaceFirst]("%", ""));
    }
    set buffer(widthPercent) {
      widthPercent = math.max(core.int, 0, math.min(core.int, 100, widthPercent));
      this[_bufferbar].style[$width] = dart.str(widthPercent) + "%";
      this[_auxbar].style[$width] = dart.str(100 - dart.notNull(widthPercent)) + "%";
    }
    [_init]() {
      this[_logger].fine("MaterialProgress - init");
      if (this.element != null) {
        this[_progressbar] = html.DivElement.new();
        this[_progressbar][$classes].addAll(JSArrayOfStringL().of(["progressbar", "bar", "bar1"]));
        this.element[$append](this[_progressbar]);
        this[_bufferbar] = html.DivElement.new();
        this[_bufferbar][$classes].addAll(JSArrayOfStringL().of(["bufferbar", "bar", "bar2"]));
        this.element[$append](this[_bufferbar]);
        this[_auxbar] = html.DivElement.new();
        this[_auxbar][$classes].addAll(JSArrayOfStringL().of(["auxbar", "bar", "bar3"]));
        this.element[$append](this[_auxbar]);
        this[_progressbar].style[$width] = "0%";
        this[_bufferbar].style[$width] = "100%";
        this[_auxbar].style[$width] = "0%";
        this.element[$classes].add(m4d_components.MaterialProgress._cssClasses.IS_UPGRADED);
      }
    }
  };
  (m4d_components.MaterialProgress.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialProgress");
    this[_progressbar] = null;
    this[_bufferbar] = null;
    this[_auxbar] = null;
    m4d_components.MaterialProgress.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialProgress.prototype;
  dart.addTypeTests(m4d_components.MaterialProgress);
  dart.addTypeCaches(m4d_components.MaterialProgress);
  dart.setMethodSignature(m4d_components.MaterialProgress, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialProgress.__proto__),
    [_init]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialProgress, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialProgress.__proto__),
    progress: core.int
  }));
  dart.setSetterSignature(m4d_components.MaterialProgress, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialProgress.__proto__),
    progress: core.int,
    buffer: core.int
  }));
  dart.setLibraryUri(m4d_components.MaterialProgress, L0);
  dart.setFieldSignature(m4d_components.MaterialProgress, () => ({
    __proto__: dart.getFields(m4d_components.MaterialProgress.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_progressbar]: dart.fieldType(html.DivElement),
    [_bufferbar]: dart.fieldType(html.DivElement),
    [_auxbar]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(m4d_components.MaterialProgress, {
    /*m4d_components.MaterialProgress._constant*/get _constant() {
      return C28 || CT.C28;
    },
    /*m4d_components.MaterialProgress._cssClasses*/get _cssClasses() {
      return C29 || CT.C29;
    }
  }, true);
  m4d_components._MaterialProgressCssClasses = class _MaterialProgressCssClasses extends core.Object {
    get INDETERMINATE_CLASS() {
      return this[INDETERMINATE_CLASS];
    }
    set INDETERMINATE_CLASS(value) {
      super.INDETERMINATE_CLASS = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$10];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialProgressCssClasses.new = function() {
    this[INDETERMINATE_CLASS] = "mdl-progress__indeterminate";
    this[IS_UPGRADED$10] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialProgressCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialProgressCssClasses);
  dart.addTypeCaches(m4d_components._MaterialProgressCssClasses);
  const INDETERMINATE_CLASS = _MaterialProgressCssClasses_INDETERMINATE_CLASS;
  const IS_UPGRADED$10 = _MaterialProgressCssClasses_IS_UPGRADED;
  dart.setLibraryUri(m4d_components._MaterialProgressCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialProgressCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialProgressCssClasses.__proto__),
    INDETERMINATE_CLASS: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialProgressCssClasses, {
    /*m4d_components._MaterialProgressCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-progress";
    }
  }, true);
  m4d_components._MaterialProgressConstant = class _MaterialProgressConstant extends core.Object {};
  (m4d_components._MaterialProgressConstant.new = function() {
    ;
  }).prototype = m4d_components._MaterialProgressConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialProgressConstant);
  dart.addTypeCaches(m4d_components._MaterialProgressConstant);
  dart.setLibraryUri(m4d_components._MaterialProgressConstant, L0);
  var _indicatorbar = dart.privateName(m4d_components, "_indicatorbar");
  var _setProgressStyle = dart.privateName(m4d_components, "_setProgressStyle");
  var C30;
  var _MaterialProgressVerticalCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialProgressVerticalCssClasses.IS_UPGRADED");
  var _MaterialProgressVerticalCssClasses_PROGRESS = dart.privateName(m4d_components, "_MaterialProgressVerticalCssClasses.PROGRESS");
  var _MaterialProgressVerticalCssClasses_SECTION = dart.privateName(m4d_components, "_MaterialProgressVerticalCssClasses.SECTION");
  var _MaterialProgressVerticalCssClasses_INDETERMINATE_CLASS = dart.privateName(m4d_components, "_MaterialProgressVerticalCssClasses.INDETERMINATE_CLASS");
  var C31;
  m4d_components.MaterialProgressVertical = class MaterialProgressVertical extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialProgressVertical.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialProgressVertical)));
    }
    set progress(heightInPercent) {
      heightInPercent = math.max(core.int, 0, math.min(core.int, 100, heightInPercent));
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialProgressVertical._cssClasses.INDETERMINATE_CLASS))) {
        return;
      }
      this[_setProgressStyle](heightInPercent);
      this[_progressbar].style[$height] = dart.str(heightInPercent) + "%";
    }
    get progress() {
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialProgressVertical._cssClasses.INDETERMINATE_CLASS))) {
        return 0;
      }
      return core.int.parse(this[_progressbar].style[$height][$replaceFirst]("%", ""));
    }
    set buffer(heightPercent) {
      heightPercent = math.max(core.int, 0, math.min(core.int, 100, heightPercent));
      this[_bufferbar].style[$height] = dart.str(heightPercent) + "%";
      this[_auxbar].style[$height] = dart.str(100 - dart.notNull(heightPercent)) + "%";
    }
    [_init]() {
      let t4;
      this[_logger].fine("MaterialProgressVertical - init");
      if (this.element != null) {
        this[_progressbar] = html.DivElement.new();
        this[_progressbar][$classes].addAll(JSArrayOfStringL().of(["progressbar", "bar", "bar1"]));
        this.element[$append](this[_progressbar]);
        this[_bufferbar] = html.DivElement.new();
        this[_bufferbar][$classes].addAll(JSArrayOfStringL().of(["bufferbar", "bar", "bar2"]));
        this.element[$append](this[_bufferbar]);
        this[_auxbar] = html.DivElement.new();
        this[_auxbar][$classes].addAll(JSArrayOfStringL().of(["auxbar", "bar", "bar3"]));
        this.element[$append](this[_auxbar]);
        this[_indicatorbar] = html.DivElement.new();
        this[_indicatorbar][$classes].addAll(JSArrayOfStringL().of(["indicatorbar", "bar", "bar4"]));
        this.element[$append](this[_indicatorbar]);
        if (dart.test(this.element[$dataset][$containsKey]("sections"))) {
          let sections = (t4 = core.int.tryParse(this.element[$dataset][$_get]("sections")), t4 == null ? 0 : t4);
          for (let hrIndex = 0; hrIndex < dart.notNull(sections); hrIndex = hrIndex + 1) {
            let hr = html.SpanElement.new();
            hr[$classes].add(m4d_components.MaterialProgressVertical._cssClasses.SECTION);
            this[_indicatorbar][$append](hr);
          }
        }
        this[_progressbar].style[$height] = "0%";
        this[_bufferbar].style[$height] = "100%";
        this[_auxbar].style[$height] = "0%";
        this[_setProgressStyle](0);
        this.element[$classes].add(m4d_components.MaterialProgressVertical._cssClasses.IS_UPGRADED);
      }
    }
    [_setProgressStyle](heightInPercent) {
      this.element[$classes].removeWhere(dart.fn(name => name[$startsWith](m4d_components.MaterialProgressVertical._cssClasses.PROGRESS), StringLToboolL()));
      this.element[$classes].add(dart.str(m4d_components.MaterialProgressVertical._cssClasses.PROGRESS) + dart.str(heightInPercent));
    }
  };
  (m4d_components.MaterialProgressVertical.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialProgressVertical");
    this[_progressbar] = null;
    this[_bufferbar] = null;
    this[_auxbar] = null;
    this[_indicatorbar] = null;
    m4d_components.MaterialProgressVertical.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialProgressVertical.prototype;
  dart.addTypeTests(m4d_components.MaterialProgressVertical);
  dart.addTypeCaches(m4d_components.MaterialProgressVertical);
  dart.setMethodSignature(m4d_components.MaterialProgressVertical, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialProgressVertical.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_setProgressStyle]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(m4d_components.MaterialProgressVertical, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialProgressVertical.__proto__),
    progress: core.int
  }));
  dart.setSetterSignature(m4d_components.MaterialProgressVertical, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialProgressVertical.__proto__),
    progress: core.int,
    buffer: core.int
  }));
  dart.setLibraryUri(m4d_components.MaterialProgressVertical, L0);
  dart.setFieldSignature(m4d_components.MaterialProgressVertical, () => ({
    __proto__: dart.getFields(m4d_components.MaterialProgressVertical.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_progressbar]: dart.fieldType(html.DivElement),
    [_bufferbar]: dart.fieldType(html.DivElement),
    [_auxbar]: dart.fieldType(html.DivElement),
    [_indicatorbar]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(m4d_components.MaterialProgressVertical, {
    /*m4d_components.MaterialProgressVertical._constant*/get _constant() {
      return C30 || CT.C30;
    },
    /*m4d_components.MaterialProgressVertical._cssClasses*/get _cssClasses() {
      return C31 || CT.C31;
    }
  }, true);
  m4d_components._MaterialProgressVerticalCssClasses = class _MaterialProgressVerticalCssClasses extends core.Object {
    get INDETERMINATE_CLASS() {
      return this[INDETERMINATE_CLASS$];
    }
    set INDETERMINATE_CLASS(value) {
      super.INDETERMINATE_CLASS = value;
    }
    get SECTION() {
      return this[SECTION];
    }
    set SECTION(value) {
      super.SECTION = value;
    }
    get PROGRESS() {
      return this[PROGRESS];
    }
    set PROGRESS(value) {
      super.PROGRESS = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$11];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialProgressVerticalCssClasses.new = function() {
    this[INDETERMINATE_CLASS$] = "mdl-vprogress__indeterminate";
    this[SECTION] = "mdl-vprogress__section";
    this[PROGRESS] = "mdl-vprogress--progress-";
    this[IS_UPGRADED$11] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialProgressVerticalCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialProgressVerticalCssClasses);
  dart.addTypeCaches(m4d_components._MaterialProgressVerticalCssClasses);
  const INDETERMINATE_CLASS$ = _MaterialProgressVerticalCssClasses_INDETERMINATE_CLASS;
  const SECTION = _MaterialProgressVerticalCssClasses_SECTION;
  const PROGRESS = _MaterialProgressVerticalCssClasses_PROGRESS;
  const IS_UPGRADED$11 = _MaterialProgressVerticalCssClasses_IS_UPGRADED;
  dart.setLibraryUri(m4d_components._MaterialProgressVerticalCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialProgressVerticalCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialProgressVerticalCssClasses.__proto__),
    INDETERMINATE_CLASS: dart.finalFieldType(core.String),
    SECTION: dart.finalFieldType(core.String),
    PROGRESS: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialProgressVerticalCssClasses, {
    /*m4d_components._MaterialProgressVerticalCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-vprogress";
    }
  }, true);
  m4d_components._MaterialProgressVerticalConstant = class _MaterialProgressVerticalConstant extends core.Object {};
  (m4d_components._MaterialProgressVerticalConstant.new = function() {
    ;
  }).prototype = m4d_components._MaterialProgressVerticalConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialProgressVerticalConstant);
  dart.addTypeCaches(m4d_components._MaterialProgressVerticalConstant);
  dart.setLibraryUri(m4d_components._MaterialProgressVerticalConstant, L0);
  m4d_components._MaterialProgressDataSet = class _MaterialProgressDataSet extends core.Object {};
  (m4d_components._MaterialProgressDataSet.new = function() {
    ;
  }).prototype = m4d_components._MaterialProgressDataSet.prototype;
  dart.addTypeTests(m4d_components._MaterialProgressDataSet);
  dart.addTypeCaches(m4d_components._MaterialProgressDataSet);
  dart.setLibraryUri(m4d_components._MaterialProgressDataSet, L0);
  dart.defineLazy(m4d_components._MaterialProgressDataSet, {
    /*m4d_components._MaterialProgressDataSet.SECTIONS*/get SECTIONS() {
      return "sections";
    }
  }, true);
  var _btnElement = dart.privateName(m4d_components, "_btnElement");
  var _uncheckSiblings = dart.privateName(m4d_components, "_uncheckSiblings");
  var _informParentAboutChange = dart.privateName(m4d_components, "_informParentAboutChange");
  var _MaterialRadioConstant_TINY_TIMEOUT_IN_MS = dart.privateName(m4d_components, "_MaterialRadioConstant.TINY_TIMEOUT_IN_MS");
  var C32;
  var _MaterialRadioCssClasses_RIPPLE = dart.privateName(m4d_components, "_MaterialRadioCssClasses.RIPPLE");
  var _MaterialRadioCssClasses_RIPPLE_CENTER = dart.privateName(m4d_components, "_MaterialRadioCssClasses.RIPPLE_CENTER");
  var _MaterialRadioCssClasses_RIPPLE_CONTAINER = dart.privateName(m4d_components, "_MaterialRadioCssClasses.RIPPLE_CONTAINER");
  var _MaterialRadioCssClasses_RIPPLE_IGNORE_EVENTS = dart.privateName(m4d_components, "_MaterialRadioCssClasses.RIPPLE_IGNORE_EVENTS");
  var _MaterialRadioCssClasses_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialRadioCssClasses.RIPPLE_EFFECT");
  var _MaterialRadioCssClasses_RADIO_INNER_CIRCLE = dart.privateName(m4d_components, "_MaterialRadioCssClasses.RADIO_INNER_CIRCLE");
  var _MaterialRadioCssClasses_RADIO_OUTER_CIRCLE = dart.privateName(m4d_components, "_MaterialRadioCssClasses.RADIO_OUTER_CIRCLE");
  var _MaterialRadioCssClasses_LABEL = dart.privateName(m4d_components, "_MaterialRadioCssClasses.LABEL");
  var _MaterialRadioCssClasses_INPUT = dart.privateName(m4d_components, "_MaterialRadioCssClasses.INPUT");
  var _MaterialRadioCssClasses_JS_RADIO = dart.privateName(m4d_components, "_MaterialRadioCssClasses.JS_RADIO");
  var _MaterialRadioCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialRadioCssClasses.IS_UPGRADED");
  var _MaterialRadioCssClasses_IS_CHECKED = dart.privateName(m4d_components, "_MaterialRadioCssClasses.IS_CHECKED");
  var _MaterialRadioCssClasses_IS_DISABLED = dart.privateName(m4d_components, "_MaterialRadioCssClasses.IS_DISABLED");
  var _MaterialRadioCssClasses_IS_FOCUSED = dart.privateName(m4d_components, "_MaterialRadioCssClasses.IS_FOCUSED");
  var C33;
  const MdlComponent_FallbackFormatter$36$0 = class MdlComponent_FallbackFormatter extends m4d_core.MdlComponent {};
  (MdlComponent_FallbackFormatter$36$0.new = function(element, injector) {
    MdlComponent_FallbackFormatter$36$0.__proto__.new.call(this, element, injector);
  }).prototype = MdlComponent_FallbackFormatter$36$0.prototype;
  dart.applyMixin(MdlComponent_FallbackFormatter$36$0, m4d_components.FallbackFormatter);
  m4d_components.MaterialRadio = class MaterialRadio extends MdlComponent_FallbackFormatter$36$0 {
    static widget(element) {
      let radio = null;
      try {
        radio = m4d_components.MaterialRadio.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialRadio), {showWarning: false}));
      } catch (e) {
        let ex = dart.getThrown(e);
        if (typeof ex == 'string') {
          let inputField = html.HtmlElement.as(element.querySelector("." + dart.str(m4d_components.MaterialRadio._cssClasses.INPUT)));
          radio = m4d_components.MaterialRadio.as(m4d_core.mdlComponent(inputField, dart.wrapType(m4d_components.MaterialRadio)));
        } else
          throw e;
      }
      return radio;
    }
    get hub() {
      return this.inputElement;
    }
    get inputElement() {
      if (this[_btnElement] == null) {
        this[_btnElement] = html.RadioButtonInputElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialRadio._cssClasses.INPUT)));
      }
      return this[_btnElement];
    }
    disable() {
      this.inputElement[$disabled] = true;
      this[_updateClasses]();
    }
    enable() {
      this.inputElement[$disabled] = false;
      this[_updateClasses]();
    }
    check() {
      this[_uncheckSiblings]();
      this.inputElement[$checked] = true;
      this[_updateClasses]();
    }
    uncheck() {
      this.inputElement[$checked] = false;
      this[_updateClasses]();
    }
    get checked() {
      return this.inputElement[$checked];
    }
    set checked(value) {
      return dart.test(value) ? this.check() : this.uncheck();
    }
    get label() {
      let _label = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialRadio._cssClasses.LABEL)));
      return _label != null ? _label[$text][$trim]() : "";
    }
    set label(v) {
      let t6;
      validate.Validate.notNull(core.String, v);
      let _label = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialRadio._cssClasses.LABEL)));
      t6 = _label;
      t6 == null ? null : t6[$text] = this.formatterFor(_label, this.element).format(v[$trim]());
    }
    get value() {
      return this.inputElement[$value];
    }
    set value(value) {
      validate.Validate.notNull(core.String, value);
      this.inputElement[$value] = this.formatterFor(this.inputElement, this.element).format(value);
    }
    [_init]() {
      this[_logger].fine("MaterialRadio - init");
      if (this.element != null) {
        let outerCircle = html.SpanElement.new();
        outerCircle[$classes].add(m4d_components.MaterialRadio._cssClasses.RADIO_OUTER_CIRCLE);
        let innerCircle = html.SpanElement.new();
        innerCircle[$classes].add(m4d_components.MaterialRadio._cssClasses.RADIO_INNER_CIRCLE);
        this.element[$append](outerCircle);
        this.element[$append](innerCircle);
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialRadio._cssClasses.RIPPLE_EFFECT))) {
          this.element[$classes].add(m4d_components.MaterialRadio._cssClasses.RIPPLE_IGNORE_EVENTS);
          let rippleContainer = html.SpanElement.new();
          rippleContainer[$classes].add(m4d_components.MaterialRadio._cssClasses.RIPPLE_CONTAINER);
          rippleContainer[$classes].add(m4d_components.MaterialRadio._cssClasses.RIPPLE_EFFECT);
          rippleContainer[$classes].add(m4d_components.MaterialRadio._cssClasses.RIPPLE_CENTER);
          this.eventStreams[$add](rippleContainer[$onMouseUp].listen(dart.bind(this, _onMouseUp)));
          let ripple = html.SpanElement.new();
          ripple[$classes].add(m4d_components.MaterialRadio._cssClasses.RIPPLE);
          rippleContainer[$append](ripple);
          this.element[$append](rippleContainer);
        }
        this.eventStreams[$add](this.inputElement[$onChange].listen(dart.bind(this, _onChange)));
        this.eventStreams[$add](this.inputElement[$onFocus].listen(dart.bind(this, _onFocus)));
        this.eventStreams[$add](this.inputElement[$onBlur].listen(dart.bind(this, _onBlur)));
        this.eventStreams[$add](this.element[$onMouseUp].listen(dart.bind(this, _onMouseUp)));
        this[_updateClasses]();
        const _kickInFormatter = () => {
          this.label = this.label;
          this.value = this.value;
        };
        dart.fn(_kickInFormatter, VoidTovoid());
        _kickInFormatter();
        this.element[$classes].add(m4d_components.MaterialRadio._cssClasses.IS_UPGRADED);
      }
    }
    [_onChange](_) {
      let radios = html.querySelectorAll(html.Element, "." + dart.notNull(m4d_components.MaterialRadio._cssClasses.JS_RADIO));
      for (let i = 0; i < dart.notNull(radios[$length]); i = i + 1) {
        let button = html.RadioButtonInputElement.as(radios[$_get](i).querySelector("." + dart.notNull(m4d_components.MaterialRadio._cssClasses.INPUT)));
        if (button[$getAttribute]("name") == this[_btnElement][$getAttribute]("name")) {
          let radio = m4d_components.MaterialRadio.widget(html.HtmlElement.as(button));
          if (radio != null) {
            radio[_updateClasses]();
          }
        }
      }
      this[_informParentAboutChange]();
    }
    [_onFocus](_) {
      this.element[$classes].add(m4d_components.MaterialRadio._cssClasses.IS_FOCUSED);
    }
    [_onBlur](_) {
      this.element[$classes].remove(m4d_components.MaterialRadio._cssClasses.IS_FOCUSED);
    }
    [_onMouseUp](_) {
      this[_blur]();
    }
    [_updateClasses]() {
      this[_checkDisabled]();
      this[_checkToggleState]();
    }
    [_checkDisabled]() {
      if (dart.test(this.inputElement[$disabled])) {
        this.element[$classes].add(m4d_components.MaterialRadio._cssClasses.IS_DISABLED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialRadio._cssClasses.IS_DISABLED);
      }
    }
    [_checkToggleState]() {
      if (dart.test(this.inputElement[$checked])) {
        this.element[$classes].add(m4d_components.MaterialRadio._cssClasses.IS_CHECKED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialRadio._cssClasses.IS_CHECKED);
      }
    }
    [_blur]() {
      async.Timer.new(new core.Duration.new({milliseconds: m4d_components.MaterialRadio._constant.TINY_TIMEOUT_IN_MS}), dart.fn(() => {
        this.inputElement.blur();
      }, VoidToNullN()));
    }
    [_uncheckSiblings]() {
      if (dart.test(this.element[$parent][$classes].contains("mdl-radio-group"))) {
        let group = html.HtmlElement.as(this.element[$parent]);
        group[$children][$forEach](dart.fn(child => {
          let widget = m4d_components.MaterialRadio.widget(html.HtmlElement.as(child.querySelector("." + dart.str(m4d_components.MaterialRadio._cssClasses.INPUT))));
          if (widget != null && !dart.equals(widget, this)) {
            widget.uncheck();
          }
        }, ElementLToNullN()));
      }
    }
    [_informParentAboutChange]() {
      if (dart.test(this.element[$parent][$classes].contains("mdl-radio-group"))) {
        let group = m4d_components.MaterialRadioGroup.widget(html.HtmlElement.as(this.element[$parent]));
        if (group != null) {
          group.childChanged(this);
        }
      }
    }
  };
  (m4d_components.MaterialRadio.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialRadio");
    this[_btnElement] = null;
    m4d_components.MaterialRadio.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialRadio.prototype;
  dart.addTypeTests(m4d_components.MaterialRadio);
  dart.addTypeCaches(m4d_components.MaterialRadio);
  dart.setMethodSignature(m4d_components.MaterialRadio, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialRadio.__proto__),
    disable: dart.fnType(dart.void, []),
    enable: dart.fnType(dart.void, []),
    check: dart.fnType(dart.void, []),
    uncheck: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_onChange]: dart.fnType(dart.void, [dart.dynamic]),
    [_onFocus]: dart.fnType(dart.void, [dart.dynamic]),
    [_onBlur]: dart.fnType(dart.void, [dart.dynamic]),
    [_onMouseUp]: dart.fnType(dart.void, [dart.dynamic]),
    [_updateClasses]: dart.fnType(dart.void, []),
    [_checkDisabled]: dart.fnType(dart.void, []),
    [_checkToggleState]: dart.fnType(dart.void, []),
    [_blur]: dart.fnType(dart.void, []),
    [_uncheckSiblings]: dart.fnType(dart.void, []),
    [_informParentAboutChange]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialRadio, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialRadio.__proto__),
    inputElement: html.RadioButtonInputElement,
    checked: core.bool,
    label: core.String,
    value: core.String
  }));
  dart.setSetterSignature(m4d_components.MaterialRadio, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialRadio.__proto__),
    checked: core.bool,
    label: core.String,
    value: core.String
  }));
  dart.setLibraryUri(m4d_components.MaterialRadio, L0);
  dart.setFieldSignature(m4d_components.MaterialRadio, () => ({
    __proto__: dart.getFields(m4d_components.MaterialRadio.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_btnElement]: dart.fieldType(html.RadioButtonInputElement)
  }));
  dart.defineLazy(m4d_components.MaterialRadio, {
    /*m4d_components.MaterialRadio._constant*/get _constant() {
      return C32 || CT.C32;
    },
    /*m4d_components.MaterialRadio._cssClasses*/get _cssClasses() {
      return C33 || CT.C33;
    }
  }, true);
  var group$ = dart.privateName(m4d_components, "MaterialRadioGroupChangedEvent.group");
  m4d_components.MaterialRadioGroupChangedEvent = class MaterialRadioGroupChangedEvent extends core.Object {
    get group() {
      return this[group$];
    }
    set group(value) {
      super.group = value;
    }
  };
  (m4d_components.MaterialRadioGroupChangedEvent.new = function(group) {
    this[group$] = group;
    ;
  }).prototype = m4d_components.MaterialRadioGroupChangedEvent.prototype;
  dart.addTypeTests(m4d_components.MaterialRadioGroupChangedEvent);
  dart.addTypeCaches(m4d_components.MaterialRadioGroupChangedEvent);
  dart.setLibraryUri(m4d_components.MaterialRadioGroupChangedEvent, L0);
  dart.setFieldSignature(m4d_components.MaterialRadioGroupChangedEvent, () => ({
    __proto__: dart.getFields(m4d_components.MaterialRadioGroupChangedEvent.__proto__),
    group: dart.finalFieldType(m4d_components.MaterialRadioGroup)
  }));
  var _onGroupChange = dart.privateName(m4d_components, "_onGroupChange");
  var _fire = dart.privateName(m4d_components, "_fire");
  m4d_components.MaterialRadioGroup = class MaterialRadioGroup extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialRadioGroup.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialRadioGroup)));
    }
    get hasValue() {
      let _hasValue = false;
      this.element[$children][$forEach](dart.fn(child => {
        let radio = m4d_components.MaterialRadio.widget(html.HtmlElement.as(child.querySelector("." + dart.str(m4d_components.MaterialRadioGroup._cssClasses.INPUT))));
        if (radio != null && dart.test(radio.checked)) {
          _hasValue = true;
        }
      }, ElementLToNullN()));
      return _hasValue;
    }
    get value() {
      let _value = "";
      this.element[$children][$forEach](dart.fn(child => {
        let radio = m4d_components.MaterialRadio.widget(html.HtmlElement.as(child.querySelector("." + dart.str(m4d_components.MaterialRadioGroup._cssClasses.INPUT))));
        if (radio != null && dart.test(radio.checked)) {
          _value = radio.value;
        }
      }, ElementLToNullN()));
      return _value;
    }
    set value(val) {
      this.element[$children][$forEach](dart.fn(child => {
        let radio = m4d_components.MaterialRadio.widget(html.HtmlElement.as(child.querySelector("." + dart.str(m4d_components.MaterialRadioGroup._cssClasses.INPUT))));
        if (radio != null) {
          if (radio.value == val) {
            radio.check();
          } else {
            radio.uncheck();
          }
        }
      }, ElementLToNullN()));
    }
    childChanged(child) {
      this[_fire](new m4d_components.MaterialRadioGroupChangedEvent.new(this));
    }
    get onGroupChange() {
      if (this[_onGroupChange] == null) {
        this[_onGroupChange] = StreamControllerOfMaterialRadioGroupChangedEventL().broadcast({onCancel: dart.fn(() => this[_onGroupChange] = null, VoidToNullN())});
      }
      return this[_onGroupChange].stream;
    }
    [_init]() {
      this[_logger].fine("MaterialRadioGroup - init");
      if (this.element != null) {
        this.element[$classes].add(m4d_components.MaterialRadioGroup._cssClasses.IS_UPGRADED);
      }
    }
    [_fire](event) {
      if (this[_onGroupChange] != null && dart.test(this[_onGroupChange].hasListener)) {
        this[_onGroupChange].add(event);
      }
    }
  };
  (m4d_components.MaterialRadioGroup.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialRadioGroup");
    this[_onGroupChange] = null;
    m4d_components.MaterialRadioGroup.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialRadioGroup.prototype;
  dart.addTypeTests(m4d_components.MaterialRadioGroup);
  dart.addTypeCaches(m4d_components.MaterialRadioGroup);
  dart.setMethodSignature(m4d_components.MaterialRadioGroup, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialRadioGroup.__proto__),
    childChanged: dart.fnType(dart.void, [m4d_components.MaterialRadio]),
    [_init]: dart.fnType(dart.void, []),
    [_fire]: dart.fnType(dart.void, [m4d_components.MaterialRadioGroupChangedEvent])
  }));
  dart.setGetterSignature(m4d_components.MaterialRadioGroup, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialRadioGroup.__proto__),
    hasValue: core.bool,
    value: core.String,
    onGroupChange: async.Stream$(m4d_components.MaterialRadioGroupChangedEvent)
  }));
  dart.setSetterSignature(m4d_components.MaterialRadioGroup, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialRadioGroup.__proto__),
    value: core.String
  }));
  dart.setLibraryUri(m4d_components.MaterialRadioGroup, L0);
  dart.setFieldSignature(m4d_components.MaterialRadioGroup, () => ({
    __proto__: dart.getFields(m4d_components.MaterialRadioGroup.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_onGroupChange]: dart.fieldType(async.StreamController$(m4d_components.MaterialRadioGroupChangedEvent))
  }));
  dart.defineLazy(m4d_components.MaterialRadioGroup, {
    /*m4d_components.MaterialRadioGroup._cssClasses*/get _cssClasses() {
      return C33 || CT.C33;
    }
  }, true);
  m4d_components._MaterialRadioCssClasses = class _MaterialRadioCssClasses extends core.Object {
    get IS_FOCUSED() {
      return this[IS_FOCUSED$0];
    }
    set IS_FOCUSED(value) {
      super.IS_FOCUSED = value;
    }
    get IS_DISABLED() {
      return this[IS_DISABLED$0];
    }
    set IS_DISABLED(value) {
      super.IS_DISABLED = value;
    }
    get IS_CHECKED() {
      return this[IS_CHECKED$0];
    }
    set IS_CHECKED(value) {
      super.IS_CHECKED = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$12];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get JS_RADIO() {
      return this[JS_RADIO];
    }
    set JS_RADIO(value) {
      super.JS_RADIO = value;
    }
    get INPUT() {
      return this[INPUT$0];
    }
    set INPUT(value) {
      super.INPUT = value;
    }
    get LABEL() {
      return this[LABEL$0];
    }
    set LABEL(value) {
      super.LABEL = value;
    }
    get RADIO_OUTER_CIRCLE() {
      return this[RADIO_OUTER_CIRCLE];
    }
    set RADIO_OUTER_CIRCLE(value) {
      super.RADIO_OUTER_CIRCLE = value;
    }
    get RADIO_INNER_CIRCLE() {
      return this[RADIO_INNER_CIRCLE];
    }
    set RADIO_INNER_CIRCLE(value) {
      super.RADIO_INNER_CIRCLE = value;
    }
    get RIPPLE_EFFECT() {
      return this[RIPPLE_EFFECT$2];
    }
    set RIPPLE_EFFECT(value) {
      super.RIPPLE_EFFECT = value;
    }
    get RIPPLE_IGNORE_EVENTS() {
      return this[RIPPLE_IGNORE_EVENTS$2];
    }
    set RIPPLE_IGNORE_EVENTS(value) {
      super.RIPPLE_IGNORE_EVENTS = value;
    }
    get RIPPLE_CONTAINER() {
      return this[RIPPLE_CONTAINER$3];
    }
    set RIPPLE_CONTAINER(value) {
      super.RIPPLE_CONTAINER = value;
    }
    get RIPPLE_CENTER() {
      return this[RIPPLE_CENTER$0];
    }
    set RIPPLE_CENTER(value) {
      super.RIPPLE_CENTER = value;
    }
    get RIPPLE() {
      return this[RIPPLE$4];
    }
    set RIPPLE(value) {
      super.RIPPLE = value;
    }
  };
  (m4d_components._MaterialRadioCssClasses.new = function() {
    this[IS_FOCUSED$0] = "is-focused";
    this[IS_DISABLED$0] = "is-disabled";
    this[IS_CHECKED$0] = "is-checked";
    this[IS_UPGRADED$12] = "is-upgraded";
    this[JS_RADIO] = "mdl-radio";
    this[INPUT$0] = "mdl-radio__button";
    this[LABEL$0] = "mdl-radio__label";
    this[RADIO_OUTER_CIRCLE] = "mdl-radio__outer-circle";
    this[RADIO_INNER_CIRCLE] = "mdl-radio__inner-circle";
    this[RIPPLE_EFFECT$2] = "mdl-ripple-effect";
    this[RIPPLE_IGNORE_EVENTS$2] = "mdl-ripple-effect--ignore-events";
    this[RIPPLE_CONTAINER$3] = "mdl-radio__ripple-container";
    this[RIPPLE_CENTER$0] = "mdl-ripple--center";
    this[RIPPLE$4] = "mdl-ripple";
    ;
  }).prototype = m4d_components._MaterialRadioCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialRadioCssClasses);
  dart.addTypeCaches(m4d_components._MaterialRadioCssClasses);
  const IS_FOCUSED$0 = _MaterialRadioCssClasses_IS_FOCUSED;
  const IS_DISABLED$0 = _MaterialRadioCssClasses_IS_DISABLED;
  const IS_CHECKED$0 = _MaterialRadioCssClasses_IS_CHECKED;
  const IS_UPGRADED$12 = _MaterialRadioCssClasses_IS_UPGRADED;
  const JS_RADIO = _MaterialRadioCssClasses_JS_RADIO;
  const INPUT$0 = _MaterialRadioCssClasses_INPUT;
  const LABEL$0 = _MaterialRadioCssClasses_LABEL;
  const RADIO_OUTER_CIRCLE = _MaterialRadioCssClasses_RADIO_OUTER_CIRCLE;
  const RADIO_INNER_CIRCLE = _MaterialRadioCssClasses_RADIO_INNER_CIRCLE;
  const RIPPLE_EFFECT$2 = _MaterialRadioCssClasses_RIPPLE_EFFECT;
  const RIPPLE_IGNORE_EVENTS$2 = _MaterialRadioCssClasses_RIPPLE_IGNORE_EVENTS;
  const RIPPLE_CONTAINER$3 = _MaterialRadioCssClasses_RIPPLE_CONTAINER;
  const RIPPLE_CENTER$0 = _MaterialRadioCssClasses_RIPPLE_CENTER;
  const RIPPLE$4 = _MaterialRadioCssClasses_RIPPLE;
  dart.setLibraryUri(m4d_components._MaterialRadioCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialRadioCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialRadioCssClasses.__proto__),
    IS_FOCUSED: dart.finalFieldType(core.String),
    IS_DISABLED: dart.finalFieldType(core.String),
    IS_CHECKED: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String),
    JS_RADIO: dart.finalFieldType(core.String),
    INPUT: dart.finalFieldType(core.String),
    LABEL: dart.finalFieldType(core.String),
    RADIO_OUTER_CIRCLE: dart.finalFieldType(core.String),
    RADIO_INNER_CIRCLE: dart.finalFieldType(core.String),
    RIPPLE_EFFECT: dart.finalFieldType(core.String),
    RIPPLE_IGNORE_EVENTS: dart.finalFieldType(core.String),
    RIPPLE_CONTAINER: dart.finalFieldType(core.String),
    RIPPLE_CENTER: dart.finalFieldType(core.String),
    RIPPLE: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialRadioCssClasses, {
    /*m4d_components._MaterialRadioCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-radio";
    },
    /*m4d_components._MaterialRadioCssClasses.GROUP_CLASS*/get GROUP_CLASS() {
      return "mdl-radio-group";
    }
  }, true);
  m4d_components._MaterialRadioConstant = class _MaterialRadioConstant extends core.Object {
    get TINY_TIMEOUT_IN_MS() {
      return this[TINY_TIMEOUT_IN_MS$0];
    }
    set TINY_TIMEOUT_IN_MS(value) {
      super.TINY_TIMEOUT_IN_MS = value;
    }
  };
  (m4d_components._MaterialRadioConstant.new = function() {
    this[TINY_TIMEOUT_IN_MS$0] = 10;
    ;
  }).prototype = m4d_components._MaterialRadioConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialRadioConstant);
  dart.addTypeCaches(m4d_components._MaterialRadioConstant);
  const TINY_TIMEOUT_IN_MS$0 = _MaterialRadioConstant_TINY_TIMEOUT_IN_MS;
  dart.setLibraryUri(m4d_components._MaterialRadioConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialRadioConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialRadioConstant.__proto__),
    TINY_TIMEOUT_IN_MS: dart.finalFieldType(core.int)
  }));
  var MDL_RIPPLE_CENTER = dart.privateName(m4d_components, "_MaterialRippleCssClasses.MDL_RIPPLE_CENTER");
  var MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS = dart.privateName(m4d_components, "_MaterialRippleCssClasses.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS");
  var MDL_RIPPLE = dart.privateName(m4d_components, "_MaterialRippleCssClasses.MDL_RIPPLE");
  var IS_ANIMATING$0 = dart.privateName(m4d_components, "_MaterialRippleCssClasses.IS_ANIMATING");
  var IS_VISIBLE$ = dart.privateName(m4d_components, "_MaterialRippleCssClasses.IS_VISIBLE");
  m4d_components._MaterialRippleCssClasses = class _MaterialRippleCssClasses extends core.Object {
    get MDL_RIPPLE_CENTER() {
      return this[MDL_RIPPLE_CENTER];
    }
    set MDL_RIPPLE_CENTER(value) {
      super.MDL_RIPPLE_CENTER = value;
    }
    get MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS() {
      return this[MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS];
    }
    set MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS(value) {
      super.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS = value;
    }
    get MDL_RIPPLE() {
      return this[MDL_RIPPLE];
    }
    set MDL_RIPPLE(value) {
      super.MDL_RIPPLE = value;
    }
    get IS_ANIMATING() {
      return this[IS_ANIMATING$0];
    }
    set IS_ANIMATING(value) {
      super.IS_ANIMATING = value;
    }
    get IS_VISIBLE() {
      return this[IS_VISIBLE$];
    }
    set IS_VISIBLE(value) {
      super.IS_VISIBLE = value;
    }
  };
  (m4d_components._MaterialRippleCssClasses.new = function() {
    this[MDL_RIPPLE_CENTER] = "mdl-ripple--center";
    this[MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS] = "mdl-ripple-effect--ignore-events";
    this[MDL_RIPPLE] = "mdl-ripple";
    this[IS_ANIMATING$0] = "is-animating";
    this[IS_VISIBLE$] = "is-visible";
    ;
  }).prototype = m4d_components._MaterialRippleCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialRippleCssClasses);
  dart.addTypeCaches(m4d_components._MaterialRippleCssClasses);
  dart.setLibraryUri(m4d_components._MaterialRippleCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialRippleCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialRippleCssClasses.__proto__),
    MDL_RIPPLE_CENTER: dart.finalFieldType(core.String),
    MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: dart.finalFieldType(core.String),
    MDL_RIPPLE: dart.finalFieldType(core.String),
    IS_ANIMATING: dart.finalFieldType(core.String),
    IS_VISIBLE: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialRippleCssClasses, {
    /*m4d_components._MaterialRippleCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-ripple-effect";
    }
  }, true);
  var INITIAL_SCALE = dart.privateName(m4d_components, "_MaterialRippleConstant.INITIAL_SCALE");
  var INITIAL_SIZE = dart.privateName(m4d_components, "_MaterialRippleConstant.INITIAL_SIZE");
  var INITIAL_OPACITY = dart.privateName(m4d_components, "_MaterialRippleConstant.INITIAL_OPACITY");
  var FINAL_OPACITY = dart.privateName(m4d_components, "_MaterialRippleConstant.FINAL_OPACITY");
  var FINAL_SCALE = dart.privateName(m4d_components, "_MaterialRippleConstant.FINAL_SCALE");
  m4d_components._MaterialRippleConstant = class _MaterialRippleConstant extends core.Object {
    get INITIAL_SCALE() {
      return this[INITIAL_SCALE];
    }
    set INITIAL_SCALE(value) {
      super.INITIAL_SCALE = value;
    }
    get INITIAL_SIZE() {
      return this[INITIAL_SIZE];
    }
    set INITIAL_SIZE(value) {
      super.INITIAL_SIZE = value;
    }
    get INITIAL_OPACITY() {
      return this[INITIAL_OPACITY];
    }
    set INITIAL_OPACITY(value) {
      super.INITIAL_OPACITY = value;
    }
    get FINAL_OPACITY() {
      return this[FINAL_OPACITY];
    }
    set FINAL_OPACITY(value) {
      super.FINAL_OPACITY = value;
    }
    get FINAL_SCALE() {
      return this[FINAL_SCALE];
    }
    set FINAL_SCALE(value) {
      super.FINAL_SCALE = value;
    }
  };
  (m4d_components._MaterialRippleConstant.new = function() {
    this[INITIAL_SCALE] = "scale(0.0001, 0.0001)";
    this[INITIAL_SIZE] = "1px";
    this[INITIAL_OPACITY] = "0.4";
    this[FINAL_OPACITY] = "0";
    this[FINAL_SCALE] = "";
    ;
  }).prototype = m4d_components._MaterialRippleConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialRippleConstant);
  dart.addTypeCaches(m4d_components._MaterialRippleConstant);
  dart.setLibraryUri(m4d_components._MaterialRippleConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialRippleConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialRippleConstant.__proto__),
    INITIAL_SCALE: dart.finalFieldType(core.String),
    INITIAL_SIZE: dart.finalFieldType(core.String),
    INITIAL_OPACITY: dart.finalFieldType(core.String),
    FINAL_OPACITY: dart.finalFieldType(core.String),
    FINAL_SCALE: dart.finalFieldType(core.String)
  }));
  var _rippleElement = dart.privateName(m4d_components, "_rippleElement");
  var _recentering = dart.privateName(m4d_components, "_recentering");
  var _frameCount = dart.privateName(m4d_components, "_frameCount");
  var _rippleSize = dart.privateName(m4d_components, "_rippleSize");
  var _x = dart.privateName(m4d_components, "_x");
  var _y = dart.privateName(m4d_components, "_y");
  var _boundHeight = dart.privateName(m4d_components, "_boundHeight");
  var _boundWidth = dart.privateName(m4d_components, "_boundWidth");
  var _ignoringMouseDown = dart.privateName(m4d_components, "_ignoringMouseDown");
  var _initialized = dart.privateName(m4d_components, "_initialized");
  var _downHandler = dart.privateName(m4d_components, "_downHandler");
  var _upHandler = dart.privateName(m4d_components, "_upHandler");
  var _updateDimension = dart.privateName(m4d_components, "_updateDimension");
  var _setRippleXY = dart.privateName(m4d_components, "_setRippleXY");
  var _setRippleStyles = dart.privateName(m4d_components, "_setRippleStyles");
  var _animFrameHandler = dart.privateName(m4d_components, "_animFrameHandler");
  var C34;
  var C35;
  m4d_components.MaterialRipple = class MaterialRipple extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialRipple.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialRipple)));
    }
    get rippleElement() {
      if (this[_rippleElement] == null) {
        this[_rippleElement] = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialRipple._cssClasses.MDL_RIPPLE)));
        if (this[_rippleElement] == null && dart.equals(this[_initialized], true) && dart.equals(this.visualDebugging, true)) {
          this[_logger].warning("No child found with " + dart.str(m4d_components.MaterialRipple._cssClasses.MDL_RIPPLE) + " in " + dart.str(this.element));
          this.element.style[$border] = "1px solid red";
        }
      }
      return this[_rippleElement];
    }
    get bound() {
      return this.element.getBoundingClientRect();
    }
    [_init]() {
      this[_logger].fine("MaterialRipple - init");
      this[_recentering] = this.element[$classes].contains(m4d_components.MaterialRipple._cssClasses.MDL_RIPPLE_CENTER);
      if (!dart.test(this.element[$classes].contains(m4d_components.MaterialRipple._cssClasses.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS))) {
        this[_frameCount] = 0;
        this[_rippleSize] = 0;
        this[_x] = 0;
        this[_y] = 0;
        this[_ignoringMouseDown] = false;
        this.eventStreams[$add](this.element[$onMouseDown].listen(dart.bind(this, _downHandler)));
        this.eventStreams[$add](this.element[$onTouchStart].listen(dart.bind(this, _downHandler)));
        this.eventStreams[$add](this.element[$onMouseUp].listen(dart.bind(this, _upHandler)));
        this.eventStreams[$add](this.element[$onMouseLeave].listen(dart.bind(this, _upHandler)));
        this.eventStreams[$add](this.element[$onTouchEnd].listen(dart.bind(this, _upHandler)));
        this.eventStreams[$add](this.element[$onBlur].listen(dart.bind(this, _upHandler)));
      }
      this[_initialized] = true;
    }
    [_downHandler](event) {
      function _hasRipple(element) {
        if (html.HtmlElement.is(element)[$_equals](false)) {
          return false;
        }
        return dart.test(element[$classes].contains(m4d_components.MaterialRipple._cssClasses.MDL_RIPPLE)) || element.firstChild != null && html.Element.is(element.firstChild) && dart.test(html.Element.as(element.firstChild)[$classes].contains(m4d_components.MaterialRipple._cssClasses.MDL_RIPPLE));
      }
      dart.fn(_hasRipple, ElementLToboolL());
      let hasRipple = _hasRipple(html.Element.as(event[$target]));
      if (!dart.test(hasRipple)) {
        return;
      }
      if (this.rippleElement.style[$width] == null && this.rippleElement.style[$height] == null) {
        let rect = this.bound;
        this[_boundHeight] = dart.asNullableInt(rect[$height]);
        this[_boundWidth] = dart.asNullableInt(rect[$width]);
        this[_rippleSize] = (math.sqrt(dart.notNull(rect[$width]) * dart.notNull(rect[$width]) + dart.notNull(rect[$height]) * dart.notNull(rect[$height])) * 2 + 2)[$toInt]();
        this.rippleElement.style[$width] = dart.str(this[_rippleSize]) + "px";
        this.rippleElement.style[$height] = dart.str(this[_rippleSize]) + "px";
      }
      this.rippleElement[$classes].add(m4d_components.MaterialRipple._cssClasses.IS_VISIBLE);
      if (event.type === "mousedown" && dart.test(this[_ignoringMouseDown])) {
        this[_ignoringMouseDown] = false;
      } else {
        if (event.type === "touchstart") {
          this[_ignoringMouseDown] = true;
        }
        if (dart.notNull(this[_frameCount]) > 0) {
          return;
        }
        this[_frameCount] = 1;
        let x = null;
        let y = null;
        if (dart.equals(event, dart.wrapType(html.MouseEvent)) && html.MouseEvent.as(event)[$client].x === 0 && html.MouseEvent.as(event)[$client].y === 0) {
          x = (dart.notNull(this.bound[$width]) / 2)[$round]();
          y = (dart.notNull(this.bound[$height]) / 2)[$round]();
        } else {
          let clientX = null;
          let clientY = null;
          if (html.MouseEvent.is(event)) {
            clientX = dart.asNullableInt(event[$client].x);
            clientY = dart.asNullableInt(event[$client].y);
          } else if (html.TouchEvent.is(event)) {
            clientX = dart.asNullableInt(event.touches[$first][$client].x);
            clientY = dart.asNullableInt(event.touches[$first][$client].y);
          } else {
            dart.throw(dart.str(event) + " must bei either MouseEvent or TouchEvent!");
          }
          x = (dart.notNull(clientX) - dart.notNull(this.bound[$left]))[$round]();
          y = (dart.notNull(clientY) - dart.notNull(this.bound[$top]))[$round]();
        }
        if (dart.test(hasRipple)) {
          this[_updateDimension]();
          this[_setRippleXY](x, y);
          this[_setRippleStyles](true);
          html.window[$requestAnimationFrame](dart.bind(this, _animFrameHandler));
        }
      }
    }
    [_upHandler](event) {
      if (this[_rippleElement] != null) {
        FutureOfNullN().new(dart.fn(() => {
          this[_rippleElement][$classes].remove(m4d_components.MaterialRipple._cssClasses.IS_VISIBLE);
        }, VoidToNullN()));
      }
    }
    [_setRippleXY](newX, newY) {
      this[_x] = newX;
      this[_y] = newY;
    }
    [_updateDimension]() {
      if (this.rippleElement != null) {
        this[_rippleSize] = (math.sqrt(dart.notNull(this.bound[$width]) * dart.notNull(this.bound[$width]) + dart.notNull(this.bound[$height]) * dart.notNull(this.bound[$height])) * 2 + 2)[$toInt]();
        this[_rippleElement].style[$width] = dart.str(this[_rippleSize]) + "px";
        this[_rippleElement].style[$height] = dart.str(this[_rippleSize]) + "px";
      }
    }
    [_setRippleStyles](start) {
      if (this.rippleElement != null) {
        let transformString = null;
        let scale = null;
        let offset = "translate(" + dart.str(this[_x]) + "px," + dart.str(this[_y]) + "px)";
        if (dart.test(start)) {
          scale = m4d_components.MaterialRipple._constant.INITIAL_SCALE;
        } else {
          scale = m4d_components.MaterialRipple._constant.FINAL_SCALE;
          if (dart.test(this[_recentering])) {
            offset = "translate(" + dart.str(dart.notNull(this[_boundWidth]) / 2) + "px, " + dart.str(dart.notNull(this[_boundHeight]) / 2) + "'px)";
          }
        }
        transformString = "translate(-50%, -50%) " + offset + dart.notNull(scale);
        this.rippleElement.style[$transform] = transformString;
        if (dart.test(start)) {
          this.rippleElement[$classes].remove(m4d_components.MaterialRipple._cssClasses.IS_ANIMATING);
        } else {
          this.rippleElement[$classes].add(m4d_components.MaterialRipple._cssClasses.IS_ANIMATING);
        }
      }
    }
    [_animFrameHandler](_) {
      let t6;
      if (dart.notNull((t6 = this[_frameCount], this[_frameCount] = dart.notNull(t6) - 1, t6)) > 0) {
        html.window[$requestAnimationFrame](dart.bind(this, _animFrameHandler));
      } else {
        this[_setRippleStyles](false);
      }
    }
  };
  (m4d_components.MaterialRipple.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialRipple");
    this[_rippleElement] = null;
    this[_recentering] = false;
    this[_frameCount] = 0;
    this[_rippleSize] = 0;
    this[_x] = 0;
    this[_y] = 0;
    this[_boundHeight] = 0;
    this[_boundWidth] = 0;
    this[_ignoringMouseDown] = false;
    this[_initialized] = false;
    m4d_components.MaterialRipple.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialRipple.prototype;
  dart.addTypeTests(m4d_components.MaterialRipple);
  dart.addTypeCaches(m4d_components.MaterialRipple);
  dart.setMethodSignature(m4d_components.MaterialRipple, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialRipple.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_downHandler]: dart.fnType(dart.void, [html.Event]),
    [_upHandler]: dart.fnType(dart.void, [html.Event]),
    [_setRippleXY]: dart.fnType(dart.void, [core.int, core.int]),
    [_updateDimension]: dart.fnType(dart.void, []),
    [_setRippleStyles]: dart.fnType(dart.void, [core.bool]),
    [_animFrameHandler]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(m4d_components.MaterialRipple, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialRipple.__proto__),
    rippleElement: html.HtmlElement,
    bound: math.Rectangle$(core.num)
  }));
  dart.setLibraryUri(m4d_components.MaterialRipple, L0);
  dart.setFieldSignature(m4d_components.MaterialRipple, () => ({
    __proto__: dart.getFields(m4d_components.MaterialRipple.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_rippleElement]: dart.fieldType(html.HtmlElement),
    [_recentering]: dart.fieldType(core.bool),
    [_frameCount]: dart.fieldType(core.int),
    [_rippleSize]: dart.fieldType(core.int),
    [_x]: dart.fieldType(core.int),
    [_y]: dart.fieldType(core.int),
    [_boundHeight]: dart.fieldType(core.int),
    [_boundWidth]: dart.fieldType(core.int),
    [_ignoringMouseDown]: dart.fieldType(core.bool),
    [_initialized]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(m4d_components.MaterialRipple, {
    /*m4d_components.MaterialRipple._constant*/get _constant() {
      return C34 || CT.C34;
    },
    /*m4d_components.MaterialRipple._cssClasses*/get _cssClasses() {
      return C35 || CT.C35;
    }
  }, true);
  var IE_CONTAINER = dart.privateName(m4d_components, "_MaterialSliderCssClasses.IE_CONTAINER");
  var SLIDER_CONTAINER = dart.privateName(m4d_components, "_MaterialSliderCssClasses.SLIDER_CONTAINER");
  var BACKGROUND_FLEX = dart.privateName(m4d_components, "_MaterialSliderCssClasses.BACKGROUND_FLEX");
  var BACKGROUND_LOWER = dart.privateName(m4d_components, "_MaterialSliderCssClasses.BACKGROUND_LOWER");
  var BACKGROUND_UPPER = dart.privateName(m4d_components, "_MaterialSliderCssClasses.BACKGROUND_UPPER");
  var IS_LOWEST_VALUE = dart.privateName(m4d_components, "_MaterialSliderCssClasses.IS_LOWEST_VALUE");
  var IS_UPGRADED$13 = dart.privateName(m4d_components, "_MaterialSliderCssClasses.IS_UPGRADED");
  m4d_components._MaterialSliderCssClasses = class _MaterialSliderCssClasses extends core.Object {
    get IE_CONTAINER() {
      return this[IE_CONTAINER];
    }
    set IE_CONTAINER(value) {
      super.IE_CONTAINER = value;
    }
    get SLIDER_CONTAINER() {
      return this[SLIDER_CONTAINER];
    }
    set SLIDER_CONTAINER(value) {
      super.SLIDER_CONTAINER = value;
    }
    get BACKGROUND_FLEX() {
      return this[BACKGROUND_FLEX];
    }
    set BACKGROUND_FLEX(value) {
      super.BACKGROUND_FLEX = value;
    }
    get BACKGROUND_LOWER() {
      return this[BACKGROUND_LOWER];
    }
    set BACKGROUND_LOWER(value) {
      super.BACKGROUND_LOWER = value;
    }
    get BACKGROUND_UPPER() {
      return this[BACKGROUND_UPPER];
    }
    set BACKGROUND_UPPER(value) {
      super.BACKGROUND_UPPER = value;
    }
    get IS_LOWEST_VALUE() {
      return this[IS_LOWEST_VALUE];
    }
    set IS_LOWEST_VALUE(value) {
      super.IS_LOWEST_VALUE = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$13];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialSliderCssClasses.new = function() {
    this[IE_CONTAINER] = "mdl-slider__ie-container";
    this[SLIDER_CONTAINER] = "mdl-slider__container";
    this[BACKGROUND_FLEX] = "mdl-slider__background-flex";
    this[BACKGROUND_LOWER] = "mdl-slider__background-lower";
    this[BACKGROUND_UPPER] = "mdl-slider__background-upper";
    this[IS_LOWEST_VALUE] = "is-lowest-value";
    this[IS_UPGRADED$13] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialSliderCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialSliderCssClasses);
  dart.addTypeCaches(m4d_components._MaterialSliderCssClasses);
  dart.setLibraryUri(m4d_components._MaterialSliderCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialSliderCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialSliderCssClasses.__proto__),
    IE_CONTAINER: dart.finalFieldType(core.String),
    SLIDER_CONTAINER: dart.finalFieldType(core.String),
    BACKGROUND_FLEX: dart.finalFieldType(core.String),
    BACKGROUND_LOWER: dart.finalFieldType(core.String),
    BACKGROUND_UPPER: dart.finalFieldType(core.String),
    IS_LOWEST_VALUE: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialSliderCssClasses, {
    /*m4d_components._MaterialSliderCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-slider";
    }
  }, true);
  m4d_components._MaterialSliderConstant = class _MaterialSliderConstant extends core.Object {};
  (m4d_components._MaterialSliderConstant.new = function() {
    ;
  }).prototype = m4d_components._MaterialSliderConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialSliderConstant);
  dart.addTypeCaches(m4d_components._MaterialSliderConstant);
  dart.setLibraryUri(m4d_components._MaterialSliderConstant, L0);
  var _isIE = dart.privateName(m4d_components, "_isIE");
  var _backgroundLower = dart.privateName(m4d_components, "_backgroundLower");
  var _backgroundUpper = dart.privateName(m4d_components, "_backgroundUpper");
  var _updateValueStyles = dart.privateName(m4d_components, "_updateValueStyles");
  var _onInput = dart.privateName(m4d_components, "_onInput");
  var _onContainerMouseDown = dart.privateName(m4d_components, "_onContainerMouseDown");
  var C36;
  var C37;
  m4d_components.MaterialSlider = class MaterialSlider extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialSlider.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialSlider)));
    }
    get slider() {
      return html.RangeInputElement.as(super.element);
    }
    disable() {
      this.slider[$disabled] = true;
    }
    enable() {
      this.slider[$disabled] = false;
    }
    set value(value) {
      this.slider[$value] = dart.toString(value);
      this[_updateValueStyles]();
    }
    get value() {
      return core.int.parse(this.slider[$value]);
    }
    [_init]() {
      this[_logger].fine("MaterialSlider - init");
      if (this.element != null) {
        if (dart.test(this[_isIE])) {
          let containerIE = html.DivElement.new();
          containerIE[$classes].add(m4d_components.MaterialSlider._cssClasses.IE_CONTAINER);
          this.element[$parent].insertBefore(containerIE, this.element);
          this.element[$remove]();
          containerIE[$append](this.element);
        } else {
          let container = html.DivElement.new();
          container[$classes].add(m4d_components.MaterialSlider._cssClasses.SLIDER_CONTAINER);
          this.element[$parent].insertBefore(container, this.element);
          this.element[$remove]();
          container[$append](this.element);
          let backgroundFlex = html.DivElement.new();
          backgroundFlex[$classes].add(m4d_components.MaterialSlider._cssClasses.BACKGROUND_FLEX);
          container[$append](backgroundFlex);
          this[_backgroundLower] = html.DivElement.new();
          this[_backgroundLower][$classes].add(m4d_components.MaterialSlider._cssClasses.BACKGROUND_LOWER);
          backgroundFlex[$append](this[_backgroundLower]);
          this[_backgroundUpper] = html.DivElement.new();
          this[_backgroundUpper][$classes].add(m4d_components.MaterialSlider._cssClasses.BACKGROUND_UPPER);
          backgroundFlex[$append](this[_backgroundUpper]);
        }
        this.eventStreams[$add](this.element[$onInput].listen(dart.bind(this, _onInput)));
        this.eventStreams[$add](this.element[$onChange].listen(dart.bind(this, _onChange)));
        this.eventStreams[$add](this.element[$parent][$onMouseDown].listen(dart.bind(this, _onContainerMouseDown)));
        this[_updateValueStyles]();
        this.element[$classes].add(m4d_components.MaterialSlider._cssClasses.IS_UPGRADED);
      }
    }
    [_onInput](_) {
      this[_updateValueStyles]();
    }
    [_onChange](_) {
      this[_updateValueStyles]();
    }
    [_onContainerMouseDown](event) {
      if (!dart.equals(event[$target], this.element[$parent])) {
        return;
      }
      event.preventDefault();
      let newEvent = html.MouseEvent.new("mousedown", {relatedTarget: event[$target], button: 0, clientX: event[$client].x[$toInt](), clientY: this.element.getBoundingClientRect()[$topLeft].y[$toInt]()});
      this.element.dispatchEvent(newEvent);
    }
    [_updateValueStyles]() {
      let fraction = (dart.notNull(core.int.parse(this.slider[$value])) - dart.notNull(core.int.parse(this.slider[$min]))) / (dart.notNull(core.int.parse(this.slider[$max])) - dart.notNull(core.int.parse(this.slider[$min])));
      if (fraction === 0) {
        this.element[$classes].add(m4d_components.MaterialSlider._cssClasses.IS_LOWEST_VALUE);
      } else {
        this.element[$classes].remove(m4d_components.MaterialSlider._cssClasses.IS_LOWEST_VALUE);
      }
      if (!dart.test(this[_isIE])) {
        this[_backgroundLower].style[$flex] = fraction[$toString]();
        this[_backgroundUpper].style[$flex] = (1 - fraction)[$toString]();
      }
    }
  };
  (m4d_components.MaterialSlider.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialSlider");
    this[_isIE] = detect.browser.isInternetExplorer;
    this[_backgroundLower] = null;
    this[_backgroundUpper] = null;
    m4d_components.MaterialSlider.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialSlider.prototype;
  dart.addTypeTests(m4d_components.MaterialSlider);
  dart.addTypeCaches(m4d_components.MaterialSlider);
  dart.setMethodSignature(m4d_components.MaterialSlider, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialSlider.__proto__),
    disable: dart.fnType(dart.void, []),
    enable: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_onInput]: dart.fnType(dart.void, [dart.dynamic]),
    [_onChange]: dart.fnType(dart.void, [dart.dynamic]),
    [_onContainerMouseDown]: dart.fnType(dart.void, [html.MouseEvent]),
    [_updateValueStyles]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialSlider, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialSlider.__proto__),
    slider: html.RangeInputElement,
    value: core.int
  }));
  dart.setSetterSignature(m4d_components.MaterialSlider, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialSlider.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(m4d_components.MaterialSlider, L0);
  dart.setFieldSignature(m4d_components.MaterialSlider, () => ({
    __proto__: dart.getFields(m4d_components.MaterialSlider.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_isIE]: dart.finalFieldType(core.bool),
    [_backgroundLower]: dart.fieldType(html.DivElement),
    [_backgroundUpper]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(m4d_components.MaterialSlider, {
    /*m4d_components.MaterialSlider._constant*/get _constant() {
      return C36 || CT.C36;
    },
    /*m4d_components.MaterialSlider._cssClasses*/get _cssClasses() {
      return C37 || CT.C37;
    }
  }, true);
  var SPINNER_LAYER = dart.privateName(m4d_components, "_MaterialSpinnerCssClasses.SPINNER_LAYER");
  var SPINNER_CIRCLE_CLIPPER = dart.privateName(m4d_components, "_MaterialSpinnerCssClasses.SPINNER_CIRCLE_CLIPPER");
  var SPINNER_CIRCLE = dart.privateName(m4d_components, "_MaterialSpinnerCssClasses.SPINNER_CIRCLE");
  var SPINNER_GAP_PATCH = dart.privateName(m4d_components, "_MaterialSpinnerCssClasses.SPINNER_GAP_PATCH");
  var SPINNER_LEFT = dart.privateName(m4d_components, "_MaterialSpinnerCssClasses.SPINNER_LEFT");
  var SPINNER_RIGHT = dart.privateName(m4d_components, "_MaterialSpinnerCssClasses.SPINNER_RIGHT");
  var IS_UPGRADED$14 = dart.privateName(m4d_components, "_MaterialSpinnerCssClasses.IS_UPGRADED");
  var IS_ACTIVE$ = dart.privateName(m4d_components, "_MaterialSpinnerCssClasses.IS_ACTIVE");
  m4d_components._MaterialSpinnerCssClasses = class _MaterialSpinnerCssClasses extends core.Object {
    get SPINNER_LAYER() {
      return this[SPINNER_LAYER];
    }
    set SPINNER_LAYER(value) {
      super.SPINNER_LAYER = value;
    }
    get SPINNER_CIRCLE_CLIPPER() {
      return this[SPINNER_CIRCLE_CLIPPER];
    }
    set SPINNER_CIRCLE_CLIPPER(value) {
      super.SPINNER_CIRCLE_CLIPPER = value;
    }
    get SPINNER_CIRCLE() {
      return this[SPINNER_CIRCLE];
    }
    set SPINNER_CIRCLE(value) {
      super.SPINNER_CIRCLE = value;
    }
    get SPINNER_GAP_PATCH() {
      return this[SPINNER_GAP_PATCH];
    }
    set SPINNER_GAP_PATCH(value) {
      super.SPINNER_GAP_PATCH = value;
    }
    get SPINNER_LEFT() {
      return this[SPINNER_LEFT];
    }
    set SPINNER_LEFT(value) {
      super.SPINNER_LEFT = value;
    }
    get SPINNER_RIGHT() {
      return this[SPINNER_RIGHT];
    }
    set SPINNER_RIGHT(value) {
      super.SPINNER_RIGHT = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$14];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get IS_ACTIVE() {
      return this[IS_ACTIVE$];
    }
    set IS_ACTIVE(value) {
      super.IS_ACTIVE = value;
    }
  };
  (m4d_components._MaterialSpinnerCssClasses.new = function() {
    this[SPINNER_LAYER] = "mdl-spinner__layer";
    this[SPINNER_CIRCLE_CLIPPER] = "mdl-spinner__circle-clipper";
    this[SPINNER_CIRCLE] = "mdl-spinner__circle";
    this[SPINNER_GAP_PATCH] = "mdl-spinner__gap-patch";
    this[SPINNER_LEFT] = "mdl-spinner__left";
    this[SPINNER_RIGHT] = "mdl-spinner__right";
    this[IS_UPGRADED$14] = "is-upgraded";
    this[IS_ACTIVE$] = "is-active";
    ;
  }).prototype = m4d_components._MaterialSpinnerCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialSpinnerCssClasses);
  dart.addTypeCaches(m4d_components._MaterialSpinnerCssClasses);
  dart.setLibraryUri(m4d_components._MaterialSpinnerCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialSpinnerCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialSpinnerCssClasses.__proto__),
    SPINNER_LAYER: dart.finalFieldType(core.String),
    SPINNER_CIRCLE_CLIPPER: dart.finalFieldType(core.String),
    SPINNER_CIRCLE: dart.finalFieldType(core.String),
    SPINNER_GAP_PATCH: dart.finalFieldType(core.String),
    SPINNER_LEFT: dart.finalFieldType(core.String),
    SPINNER_RIGHT: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String),
    IS_ACTIVE: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialSpinnerCssClasses, {
    /*m4d_components._MaterialSpinnerCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-spinner";
    }
  }, true);
  var SPINNER_LAYER_COUNT = dart.privateName(m4d_components, "_MaterialSpinnerConstant.SPINNER_LAYER_COUNT");
  m4d_components._MaterialSpinnerConstant = class _MaterialSpinnerConstant extends core.Object {
    get SPINNER_LAYER_COUNT() {
      return this[SPINNER_LAYER_COUNT];
    }
    set SPINNER_LAYER_COUNT(value) {
      super.SPINNER_LAYER_COUNT = value;
    }
  };
  (m4d_components._MaterialSpinnerConstant.new = function() {
    this[SPINNER_LAYER_COUNT] = 4;
    ;
  }).prototype = m4d_components._MaterialSpinnerConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialSpinnerConstant);
  dart.addTypeCaches(m4d_components._MaterialSpinnerConstant);
  dart.setLibraryUri(m4d_components._MaterialSpinnerConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialSpinnerConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialSpinnerConstant.__proto__),
    SPINNER_LAYER_COUNT: dart.finalFieldType(core.int)
  }));
  var _createLayer = dart.privateName(m4d_components, "_createLayer");
  var C38;
  var C39;
  m4d_components.MaterialSpinner = class MaterialSpinner extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialSpinner.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialSpinner)));
    }
    stop() {
      this.element[$classes].remove(m4d_components.MaterialSpinner._cssClasses.IS_ACTIVE);
    }
    start() {
      this.element[$classes].add(m4d_components.MaterialSpinner._cssClasses.IS_ACTIVE);
    }
    set active(active) {
      return dart.test(active) ? this.start() : this.stop();
    }
    get active() {
      return this.element[$classes].contains(m4d_components.MaterialSpinner._cssClasses.IS_ACTIVE);
    }
    [_init]() {
      this[_logger].fine("MaterialSpinner - init");
      if (this.element != null) {
        for (let i = 1; i <= dart.notNull(m4d_components.MaterialSpinner._constant.SPINNER_LAYER_COUNT); i = i + 1) {
          this[_createLayer](i);
        }
        this.element[$classes].add(m4d_components.MaterialSpinner._cssClasses.IS_UPGRADED);
      }
    }
    [_createLayer](index) {
      let layer = html.DivElement.new();
      layer[$classes].add(m4d_components.MaterialSpinner._cssClasses.SPINNER_LAYER);
      layer[$classes].add(dart.notNull(m4d_components.MaterialSpinner._cssClasses.SPINNER_LAYER) + "-" + dart.toString(index));
      let leftClipper = html.DivElement.new();
      leftClipper[$classes].add(m4d_components.MaterialSpinner._cssClasses.SPINNER_CIRCLE_CLIPPER);
      leftClipper[$classes].add(m4d_components.MaterialSpinner._cssClasses.SPINNER_LEFT);
      let gapPatch = html.DivElement.new();
      gapPatch[$classes].add(m4d_components.MaterialSpinner._cssClasses.SPINNER_GAP_PATCH);
      let rightClipper = html.DivElement.new();
      rightClipper[$classes].add(m4d_components.MaterialSpinner._cssClasses.SPINNER_CIRCLE_CLIPPER);
      rightClipper[$classes].add(m4d_components.MaterialSpinner._cssClasses.SPINNER_RIGHT);
      let circleOwners = JSArrayOfDivElementL().of([leftClipper, gapPatch, rightClipper]);
      for (let i = 0; i < dart.notNull(circleOwners[$length]); i = i + 1) {
        let circle = html.DivElement.new();
        circle[$classes].add(m4d_components.MaterialSpinner._cssClasses.SPINNER_CIRCLE);
        circleOwners[$_get](i)[$append](circle);
      }
      layer[$append](leftClipper);
      layer[$append](gapPatch);
      layer[$append](rightClipper);
      this.element[$append](layer);
    }
  };
  (m4d_components.MaterialSpinner.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialSpinner");
    m4d_components.MaterialSpinner.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialSpinner.prototype;
  dart.addTypeTests(m4d_components.MaterialSpinner);
  dart.addTypeCaches(m4d_components.MaterialSpinner);
  dart.setMethodSignature(m4d_components.MaterialSpinner, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialSpinner.__proto__),
    stop: dart.fnType(dart.void, []),
    start: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_createLayer]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(m4d_components.MaterialSpinner, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialSpinner.__proto__),
    active: core.bool
  }));
  dart.setSetterSignature(m4d_components.MaterialSpinner, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialSpinner.__proto__),
    active: core.bool
  }));
  dart.setLibraryUri(m4d_components.MaterialSpinner, L0);
  dart.setFieldSignature(m4d_components.MaterialSpinner, () => ({
    __proto__: dart.getFields(m4d_components.MaterialSpinner.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger)
  }));
  dart.defineLazy(m4d_components.MaterialSpinner, {
    /*m4d_components.MaterialSpinner._constant*/get _constant() {
      return C38 || CT.C38;
    },
    /*m4d_components.MaterialSpinner._cssClasses*/get _cssClasses() {
      return C39 || CT.C39;
    }
  }, true);
  var _MaterialSwitchConstant_TINY_TIMEOUT_IN_MS = dart.privateName(m4d_components, "_MaterialSwitchConstant.TINY_TIMEOUT_IN_MS");
  var C40;
  var _MaterialSwitchCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.IS_UPGRADED");
  var _MaterialSwitchCssClasses_IS_CHECKED = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.IS_CHECKED");
  var _MaterialSwitchCssClasses_IS_DISABLED = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.IS_DISABLED");
  var _MaterialSwitchCssClasses_IS_FOCUSED = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.IS_FOCUSED");
  var _MaterialSwitchCssClasses_RIPPLE = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.RIPPLE");
  var _MaterialSwitchCssClasses_RIPPLE_CENTER = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.RIPPLE_CENTER");
  var _MaterialSwitchCssClasses_RIPPLE_CONTAINER = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.RIPPLE_CONTAINER");
  var _MaterialSwitchCssClasses_RIPPLE_IGNORE_EVENTS = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.RIPPLE_IGNORE_EVENTS");
  var _MaterialSwitchCssClasses_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.RIPPLE_EFFECT");
  var _MaterialSwitchCssClasses_FOCUS_HELPER = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.FOCUS_HELPER");
  var _MaterialSwitchCssClasses_THUMB = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.THUMB");
  var _MaterialSwitchCssClasses_TRACK = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.TRACK");
  var _MaterialSwitchCssClasses_LABEL = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.LABEL");
  var _MaterialSwitchCssClasses_INPUT = dart.privateName(m4d_components, "_MaterialSwitchCssClasses.INPUT");
  var C41;
  const MdlComponent_FallbackFormatter$36$1 = class MdlComponent_FallbackFormatter extends m4d_core.MdlComponent {};
  (MdlComponent_FallbackFormatter$36$1.new = function(element, injector) {
    MdlComponent_FallbackFormatter$36$1.__proto__.new.call(this, element, injector);
  }).prototype = MdlComponent_FallbackFormatter$36$1.prototype;
  dart.applyMixin(MdlComponent_FallbackFormatter$36$1, m4d_components.FallbackFormatter);
  m4d_components.MaterialSwitch = class MaterialSwitch extends MdlComponent_FallbackFormatter$36$1 {
    static widget(element) {
      let switchElement = null;
      try {
        switchElement = m4d_components.MaterialSwitch.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialSwitch), {showWarning: false}));
      } catch (e) {
        let ex = dart.getThrown(e);
        if (typeof ex == 'string') {
          let inputField = html.HtmlElement.as(element.querySelector("." + dart.str(m4d_components.MaterialSwitch._cssClasses.INPUT)));
          switchElement = m4d_components.MaterialSwitch.as(m4d_core.mdlComponent(inputField, dart.wrapType(m4d_components.MaterialSwitch)));
        } else
          throw e;
      }
      return switchElement;
    }
    get hub() {
      return this.inputElement;
    }
    get inputElement() {
      if (this[_inputElement] == null) {
        this[_inputElement] = html.CheckboxInputElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialSwitch._cssClasses.INPUT)));
      }
      return this[_inputElement];
    }
    disable() {
      this.inputElement[$disabled] = true;
      this[_updateClasses]();
    }
    enable() {
      this.inputElement[$disabled] = false;
      this[_updateClasses]();
    }
    on() {
      this.inputElement[$checked] = true;
      this[_updateClasses]();
    }
    off() {
      this.inputElement[$checked] = false;
      this[_updateClasses]();
    }
    get checked() {
      return this.inputElement[$checked];
    }
    set checked(_checked) {
      return dart.test(_checked) ? this.on() : this.off();
    }
    get label() {
      let _label = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialSwitch._cssClasses.LABEL)));
      return _label != null ? _label[$text][$trim]() : "";
    }
    set label(v) {
      let t8;
      validate.Validate.notNull(core.String, v);
      let _label = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialSwitch._cssClasses.LABEL)));
      t8 = _label;
      t8 == null ? null : t8[$text] = this.formatterFor(_label, this.element).format(v[$trim]());
    }
    get value() {
      return this.inputElement[$value][$trim]();
    }
    set value(value) {
      validate.Validate.notNull(core.String, value);
      this.inputElement[$value] = this.formatterFor(this.inputElement, this.element).format(value);
    }
    [_init]() {
      this[_logger].fine("MaterialSwitch - init");
      if (this.element != null) {
        let track = html.DivElement.new();
        track[$classes].add(m4d_components.MaterialSwitch._cssClasses.TRACK);
        let thumb = html.DivElement.new();
        thumb[$classes].add(m4d_components.MaterialSwitch._cssClasses.THUMB);
        let focusHelper = html.SpanElement.new();
        focusHelper[$classes].add(m4d_components.MaterialSwitch._cssClasses.FOCUS_HELPER);
        thumb[$append](focusHelper);
        this.element[$append](track);
        this.element[$append](thumb);
        if (dart.test(this.element[$classes].contains(m4d_components.MaterialSwitch._cssClasses.RIPPLE_EFFECT))) {
          this.element[$classes].add(m4d_components.MaterialSwitch._cssClasses.RIPPLE_IGNORE_EVENTS);
          let rippleContainerElement = html.SpanElement.new();
          rippleContainerElement[$classes].add(m4d_components.MaterialSwitch._cssClasses.RIPPLE_CONTAINER);
          rippleContainerElement[$classes].add(m4d_components.MaterialSwitch._cssClasses.RIPPLE_EFFECT);
          rippleContainerElement[$classes].add(m4d_components.MaterialSwitch._cssClasses.RIPPLE_CENTER);
          this.eventStreams[$add](rippleContainerElement[$onMouseUp].listen(dart.bind(this, _onMouseUp)));
          let ripple = html.SpanElement.new();
          ripple[$classes].add(m4d_components.MaterialSwitch._cssClasses.RIPPLE);
          rippleContainerElement[$append](ripple);
          this.element[$append](rippleContainerElement);
        }
        this.eventStreams[$add](this.inputElement[$onChange].listen(dart.bind(this, _onChange)));
        this.eventStreams[$add](this.inputElement[$onFocus].listen(dart.bind(this, _onFocus)));
        this.eventStreams[$add](this.inputElement[$onBlur].listen(dart.bind(this, _onBlur)));
        this.eventStreams[$add](this.element[$onMouseUp].listen(dart.bind(this, _onMouseUp)));
        this[_updateClasses]();
        const _kickInFormatter = () => {
          this.label = this.label;
          this.value = this.value;
        };
        dart.fn(_kickInFormatter, VoidTovoid());
        _kickInFormatter();
        this.element[$classes].add(m4d_components.MaterialSwitch._cssClasses.IS_UPGRADED);
      }
    }
    [_onChange](_) {
      this[_updateClasses]();
    }
    [_onFocus](_) {
      this.element[$classes].add(m4d_components.MaterialSwitch._cssClasses.IS_FOCUSED);
    }
    [_onBlur](_) {
      this.element[$classes].remove(m4d_components.MaterialSwitch._cssClasses.IS_FOCUSED);
    }
    [_onMouseUp](_) {
      this[_blur]();
    }
    [_updateClasses]() {
      this[_checkDisabled]();
      this[_checkToggleState]();
    }
    [_checkDisabled]() {
      if (dart.test(this[_inputElement][$disabled])) {
        this.element[$classes].add(m4d_components.MaterialSwitch._cssClasses.IS_DISABLED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialSwitch._cssClasses.IS_DISABLED);
      }
    }
    [_checkToggleState]() {
      if (dart.test(this[_inputElement][$checked])) {
        this.element[$classes].add(m4d_components.MaterialSwitch._cssClasses.IS_CHECKED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialSwitch._cssClasses.IS_CHECKED);
      }
    }
    [_blur]() {
      async.Timer.new(new core.Duration.new({milliseconds: m4d_components.MaterialSwitch._constant.TINY_TIMEOUT_IN_MS}), dart.fn(() => {
        this.inputElement.blur();
      }, VoidToNullN()));
    }
  };
  (m4d_components.MaterialSwitch.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialSwitch");
    this[_inputElement] = null;
    m4d_components.MaterialSwitch.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialSwitch.prototype;
  dart.addTypeTests(m4d_components.MaterialSwitch);
  dart.addTypeCaches(m4d_components.MaterialSwitch);
  dart.setMethodSignature(m4d_components.MaterialSwitch, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialSwitch.__proto__),
    disable: dart.fnType(dart.void, []),
    enable: dart.fnType(dart.void, []),
    on: dart.fnType(dart.void, []),
    off: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_onChange]: dart.fnType(dart.void, [dart.dynamic]),
    [_onFocus]: dart.fnType(dart.void, [dart.dynamic]),
    [_onBlur]: dart.fnType(dart.void, [dart.dynamic]),
    [_onMouseUp]: dart.fnType(dart.void, [dart.dynamic]),
    [_updateClasses]: dart.fnType(dart.void, []),
    [_checkDisabled]: dart.fnType(dart.void, []),
    [_checkToggleState]: dart.fnType(dart.void, []),
    [_blur]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialSwitch, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialSwitch.__proto__),
    inputElement: html.CheckboxInputElement,
    checked: core.bool,
    label: core.String,
    value: core.String
  }));
  dart.setSetterSignature(m4d_components.MaterialSwitch, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialSwitch.__proto__),
    checked: core.bool,
    label: core.String,
    value: core.String
  }));
  dart.setLibraryUri(m4d_components.MaterialSwitch, L0);
  dart.setFieldSignature(m4d_components.MaterialSwitch, () => ({
    __proto__: dart.getFields(m4d_components.MaterialSwitch.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_inputElement]: dart.fieldType(html.CheckboxInputElement)
  }));
  dart.defineLazy(m4d_components.MaterialSwitch, {
    /*m4d_components.MaterialSwitch._constant*/get _constant() {
      return C40 || CT.C40;
    },
    /*m4d_components.MaterialSwitch._cssClasses*/get _cssClasses() {
      return C41 || CT.C41;
    }
  }, true);
  m4d_components._MaterialSwitchCssClasses = class _MaterialSwitchCssClasses extends core.Object {
    get INPUT() {
      return this[INPUT$1];
    }
    set INPUT(value) {
      super.INPUT = value;
    }
    get LABEL() {
      return this[LABEL$1];
    }
    set LABEL(value) {
      super.LABEL = value;
    }
    get TRACK() {
      return this[TRACK];
    }
    set TRACK(value) {
      super.TRACK = value;
    }
    get THUMB() {
      return this[THUMB];
    }
    set THUMB(value) {
      super.THUMB = value;
    }
    get FOCUS_HELPER() {
      return this[FOCUS_HELPER$];
    }
    set FOCUS_HELPER(value) {
      super.FOCUS_HELPER = value;
    }
    get RIPPLE_EFFECT() {
      return this[RIPPLE_EFFECT$3];
    }
    set RIPPLE_EFFECT(value) {
      super.RIPPLE_EFFECT = value;
    }
    get RIPPLE_IGNORE_EVENTS() {
      return this[RIPPLE_IGNORE_EVENTS$3];
    }
    set RIPPLE_IGNORE_EVENTS(value) {
      super.RIPPLE_IGNORE_EVENTS = value;
    }
    get RIPPLE_CONTAINER() {
      return this[RIPPLE_CONTAINER$4];
    }
    set RIPPLE_CONTAINER(value) {
      super.RIPPLE_CONTAINER = value;
    }
    get RIPPLE_CENTER() {
      return this[RIPPLE_CENTER$1];
    }
    set RIPPLE_CENTER(value) {
      super.RIPPLE_CENTER = value;
    }
    get RIPPLE() {
      return this[RIPPLE$5];
    }
    set RIPPLE(value) {
      super.RIPPLE = value;
    }
    get IS_FOCUSED() {
      return this[IS_FOCUSED$1];
    }
    set IS_FOCUSED(value) {
      super.IS_FOCUSED = value;
    }
    get IS_DISABLED() {
      return this[IS_DISABLED$1];
    }
    set IS_DISABLED(value) {
      super.IS_DISABLED = value;
    }
    get IS_CHECKED() {
      return this[IS_CHECKED$1];
    }
    set IS_CHECKED(value) {
      super.IS_CHECKED = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$15];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
  };
  (m4d_components._MaterialSwitchCssClasses.new = function() {
    this[INPUT$1] = "mdl-switch__input";
    this[LABEL$1] = "mdl-switch__label";
    this[TRACK] = "mdl-switch__track";
    this[THUMB] = "mdl-switch__thumb";
    this[FOCUS_HELPER$] = "mdl-switch__focus-helper";
    this[RIPPLE_EFFECT$3] = "mdl-ripple-effect";
    this[RIPPLE_IGNORE_EVENTS$3] = "mdl-ripple-effect--ignore-events";
    this[RIPPLE_CONTAINER$4] = "mdl-switch__ripple-container";
    this[RIPPLE_CENTER$1] = "mdl-ripple--center";
    this[RIPPLE$5] = "mdl-ripple";
    this[IS_FOCUSED$1] = "is-focused";
    this[IS_DISABLED$1] = "is-disabled";
    this[IS_CHECKED$1] = "is-checked";
    this[IS_UPGRADED$15] = "is-upgraded";
    ;
  }).prototype = m4d_components._MaterialSwitchCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialSwitchCssClasses);
  dart.addTypeCaches(m4d_components._MaterialSwitchCssClasses);
  const INPUT$1 = _MaterialSwitchCssClasses_INPUT;
  const LABEL$1 = _MaterialSwitchCssClasses_LABEL;
  const TRACK = _MaterialSwitchCssClasses_TRACK;
  const THUMB = _MaterialSwitchCssClasses_THUMB;
  const FOCUS_HELPER$ = _MaterialSwitchCssClasses_FOCUS_HELPER;
  const RIPPLE_EFFECT$3 = _MaterialSwitchCssClasses_RIPPLE_EFFECT;
  const RIPPLE_IGNORE_EVENTS$3 = _MaterialSwitchCssClasses_RIPPLE_IGNORE_EVENTS;
  const RIPPLE_CONTAINER$4 = _MaterialSwitchCssClasses_RIPPLE_CONTAINER;
  const RIPPLE_CENTER$1 = _MaterialSwitchCssClasses_RIPPLE_CENTER;
  const RIPPLE$5 = _MaterialSwitchCssClasses_RIPPLE;
  const IS_FOCUSED$1 = _MaterialSwitchCssClasses_IS_FOCUSED;
  const IS_DISABLED$1 = _MaterialSwitchCssClasses_IS_DISABLED;
  const IS_CHECKED$1 = _MaterialSwitchCssClasses_IS_CHECKED;
  const IS_UPGRADED$15 = _MaterialSwitchCssClasses_IS_UPGRADED;
  dart.setLibraryUri(m4d_components._MaterialSwitchCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialSwitchCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialSwitchCssClasses.__proto__),
    INPUT: dart.finalFieldType(core.String),
    LABEL: dart.finalFieldType(core.String),
    TRACK: dart.finalFieldType(core.String),
    THUMB: dart.finalFieldType(core.String),
    FOCUS_HELPER: dart.finalFieldType(core.String),
    RIPPLE_EFFECT: dart.finalFieldType(core.String),
    RIPPLE_IGNORE_EVENTS: dart.finalFieldType(core.String),
    RIPPLE_CONTAINER: dart.finalFieldType(core.String),
    RIPPLE_CENTER: dart.finalFieldType(core.String),
    RIPPLE: dart.finalFieldType(core.String),
    IS_FOCUSED: dart.finalFieldType(core.String),
    IS_DISABLED: dart.finalFieldType(core.String),
    IS_CHECKED: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialSwitchCssClasses, {
    /*m4d_components._MaterialSwitchCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-switch";
    }
  }, true);
  m4d_components._MaterialSwitchConstant = class _MaterialSwitchConstant extends core.Object {
    get TINY_TIMEOUT_IN_MS() {
      return this[TINY_TIMEOUT_IN_MS$1];
    }
    set TINY_TIMEOUT_IN_MS(value) {
      super.TINY_TIMEOUT_IN_MS = value;
    }
  };
  (m4d_components._MaterialSwitchConstant.new = function() {
    this[TINY_TIMEOUT_IN_MS$1] = 100;
    ;
  }).prototype = m4d_components._MaterialSwitchConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialSwitchConstant);
  dart.addTypeCaches(m4d_components._MaterialSwitchConstant);
  const TINY_TIMEOUT_IN_MS$1 = _MaterialSwitchConstant_TINY_TIMEOUT_IN_MS;
  dart.setLibraryUri(m4d_components._MaterialSwitchConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialSwitchConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialSwitchConstant.__proto__),
    TINY_TIMEOUT_IN_MS: dart.finalFieldType(core.int)
  }));
  var targetID$ = dart.privateName(m4d_components, "MaterialTabsChangedEvent.targetID");
  m4d_components.MaterialTabsChangedEvent = class MaterialTabsChangedEvent extends core.Object {
    get targetID() {
      return this[targetID$];
    }
    set targetID(value) {
      super.targetID = value;
    }
  };
  (m4d_components.MaterialTabsChangedEvent.new = function(targetID) {
    this[targetID$] = targetID;
    ;
  }).prototype = m4d_components.MaterialTabsChangedEvent.prototype;
  dart.addTypeTests(m4d_components.MaterialTabsChangedEvent);
  dart.addTypeCaches(m4d_components.MaterialTabsChangedEvent);
  dart.setLibraryUri(m4d_components.MaterialTabsChangedEvent, L0);
  dart.setFieldSignature(m4d_components.MaterialTabsChangedEvent, () => ({
    __proto__: dart.getFields(m4d_components.MaterialTabsChangedEvent.__proto__),
    targetID: dart.finalFieldType(core.String)
  }));
  var _panels = dart.privateName(m4d_components, "_panels");
  var _initTabs = dart.privateName(m4d_components, "_initTabs");
  var C42;
  var _MaterialTabsCssClasses_MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS = dart.privateName(m4d_components, "_MaterialTabsCssClasses.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS");
  var _MaterialTabsCssClasses_MDL_RIPPLE = dart.privateName(m4d_components, "_MaterialTabsCssClasses.MDL_RIPPLE");
  var _MaterialTabsCssClasses_MDL_RIPPLE_CONTAINER = dart.privateName(m4d_components, "_MaterialTabsCssClasses.MDL_RIPPLE_CONTAINER");
  var _MaterialTabsCssClasses_MDL_JS_RIPPLE_EFFECT = dart.privateName(m4d_components, "_MaterialTabsCssClasses.MDL_JS_RIPPLE_EFFECT");
  var _MaterialTabsCssClasses_UPGRADED_CLASS = dart.privateName(m4d_components, "_MaterialTabsCssClasses.UPGRADED_CLASS");
  var _MaterialTabsCssClasses_ACTIVE_CLASS = dart.privateName(m4d_components, "_MaterialTabsCssClasses.ACTIVE_CLASS");
  var _MaterialTabsCssClasses_PANEL_CLASS = dart.privateName(m4d_components, "_MaterialTabsCssClasses.PANEL_CLASS");
  var _MaterialTabsCssClasses_TAB_CLASS = dart.privateName(m4d_components, "_MaterialTabsCssClasses.TAB_CLASS");
  var C43;
  m4d_components.MaterialTabs = class MaterialTabs extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialTabs.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialTabs)));
    }
    get onChange() {
      this[_onChange] == null ? this[_onChange] = StreamControllerOfMaterialTabsChangedEventL().broadcast({onCancel: dart.fn(() => this[_onChange] = null, VoidToNullN())}) : null;
      return this[_onChange].stream;
    }
    get activePanel() {
      for (let index = 0; index < dart.notNull(this[_tabs][$length]); index = index + 1) {
        if (dart.test(this[_tabs][$_get](index)[$classes].contains(m4d_components.MaterialTabs._cssClasses.ACTIVE_CLASS))) {
          let attribHref = this[_tabs][$_get](index)[$attributes][$_get]("href");
          let href = attribHref[$split]("#")[$_get](1);
          return href;
        }
      }
      return "";
    }
    [_init]() {
      this[_logger].fine("MaterialTabs - init");
      if (this.element != null) {
        this[_initTabs]();
      }
    }
    [_initTabs]() {
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialTabs._cssClasses.MDL_JS_RIPPLE_EFFECT))) {
        this.element[$classes].add(m4d_components.MaterialTabs._cssClasses.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS);
      }
      this[_tabs][$addAll](this.element[$querySelectorAll](html.Element, "." + dart.notNull(m4d_components.MaterialTabs._cssClasses.TAB_CLASS)));
      this[_panels][$addAll](this.element[$querySelectorAll](html.Element, "." + dart.notNull(m4d_components.MaterialTabs._cssClasses.PANEL_CLASS)));
      for (let i = 0; i < dart.notNull(this[_tabs][$length]); i = i + 1) {
        new m4d_components._MaterialTab.new(this[_tabs][$_get](i), this);
      }
      this.element[$classes].add(m4d_components.MaterialTabs._cssClasses.UPGRADED_CLASS);
    }
    [_resetTabState]() {
      for (let k = 0; k < dart.notNull(this[_tabs][$length]); k = k + 1) {
        this[_tabs][$_get](k)[$classes].remove(m4d_components.MaterialTabs._cssClasses.ACTIVE_CLASS);
      }
    }
    [_resetPanelState]() {
      for (let j = 0; j < dart.notNull(this[_panels][$length]); j = j + 1) {
        this[_panels][$_get](j)[$classes].remove(m4d_components.MaterialTabs._cssClasses.ACTIVE_CLASS);
      }
    }
    [_fire](event) {
      if (this[_onChange] != null && dart.test(this[_onChange].hasListener)) {
        this[_onChange].add(event);
      }
    }
  };
  (m4d_components.MaterialTabs.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialTabs");
    this[_tabs] = JSArrayOfElementL().of([]);
    this[_panels] = JSArrayOfElementL().of([]);
    this[_onChange] = null;
    m4d_components.MaterialTabs.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialTabs.prototype;
  dart.addTypeTests(m4d_components.MaterialTabs);
  dart.addTypeCaches(m4d_components.MaterialTabs);
  dart.setMethodSignature(m4d_components.MaterialTabs, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialTabs.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_initTabs]: dart.fnType(dart.void, []),
    [_resetTabState]: dart.fnType(dart.void, []),
    [_resetPanelState]: dart.fnType(dart.void, []),
    [_fire]: dart.fnType(dart.void, [m4d_components.MaterialTabsChangedEvent])
  }));
  dart.setGetterSignature(m4d_components.MaterialTabs, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialTabs.__proto__),
    onChange: async.Stream$(m4d_components.MaterialTabsChangedEvent),
    activePanel: core.String
  }));
  dart.setLibraryUri(m4d_components.MaterialTabs, L0);
  dart.setFieldSignature(m4d_components.MaterialTabs, () => ({
    __proto__: dart.getFields(m4d_components.MaterialTabs.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_tabs]: dart.finalFieldType(core.List$(html.Element)),
    [_panels]: dart.finalFieldType(core.List$(html.Element)),
    [_onChange]: dart.fieldType(async.StreamController$(m4d_components.MaterialTabsChangedEvent))
  }));
  dart.defineLazy(m4d_components.MaterialTabs, {
    /*m4d_components.MaterialTabs._constant*/get _constant() {
      return C42 || CT.C42;
    },
    /*m4d_components.MaterialTabs._cssClasses*/get _cssClasses() {
      return C43 || CT.C43;
    }
  }, true);
  var _setActiveTab = dart.privateName(m4d_components, "_setActiveTab");
  m4d_components._MaterialTab = class _MaterialTab extends core.Object {
    [_setActiveTab](tab) {
      let attribHref = tab[$attributes][$_get]("href");
      if (attribHref[$startsWith]("#")) {
        let href = attribHref[$split]("#")[$_get](1);
        let panel = html.HtmlElement.as(this.ctx.element.querySelector("#" + dart.notNull(href)));
        this.ctx[_resetTabState]();
        this.ctx[_resetPanelState]();
        tab[$classes].add(m4d_components._MaterialTab._cssClasses.ACTIVE_CLASS);
        panel[$classes].add(m4d_components._MaterialTab._cssClasses.ACTIVE_CLASS);
        this.ctx[_fire](new m4d_components.MaterialTabsChangedEvent.new(href));
      }
    }
  };
  (m4d_components._MaterialTab.new = function(tab, ctx) {
    this.tab = tab;
    this.ctx = ctx;
    if (this.tab != null) {
      if (dart.test(this.ctx.element[$classes].contains(m4d_components._MaterialTab._cssClasses.MDL_JS_RIPPLE_EFFECT))) {
        let rippleContainer = html.SpanElement.new();
        rippleContainer[$classes].add(m4d_components._MaterialTab._cssClasses.MDL_RIPPLE_CONTAINER);
        rippleContainer[$classes].add(m4d_components._MaterialTab._cssClasses.MDL_JS_RIPPLE_EFFECT);
        let ripple = html.SpanElement.new();
        ripple[$classes].add(m4d_components._MaterialTab._cssClasses.MDL_RIPPLE);
        rippleContainer[$append](ripple);
        this.tab[$append](rippleContainer);
      }
      this.ctx.eventStreams[$add](this.tab[$onClick].listen(dart.fn(event => {
        let attribHref = this.tab[$attributes][$_get]("href");
        if (attribHref[$startsWith]("#")) {
          event.preventDefault();
          event.stopPropagation();
          this[_setActiveTab](this.tab);
        }
      }, EventLToNullN())));
    }
  }).prototype = m4d_components._MaterialTab.prototype;
  dart.addTypeTests(m4d_components._MaterialTab);
  dart.addTypeCaches(m4d_components._MaterialTab);
  dart.setMethodSignature(m4d_components._MaterialTab, () => ({
    __proto__: dart.getMethods(m4d_components._MaterialTab.__proto__),
    [_setActiveTab]: dart.fnType(dart.dynamic, [html.Element])
  }));
  dart.setLibraryUri(m4d_components._MaterialTab, L0);
  dart.setFieldSignature(m4d_components._MaterialTab, () => ({
    __proto__: dart.getFields(m4d_components._MaterialTab.__proto__),
    tab: dart.finalFieldType(html.Element),
    ctx: dart.finalFieldType(m4d_components.MaterialTabs)
  }));
  dart.defineLazy(m4d_components._MaterialTab, {
    /*m4d_components._MaterialTab._cssClasses*/get _cssClasses() {
      return C43 || CT.C43;
    }
  }, true);
  m4d_components._MaterialTabsCssClasses = class _MaterialTabsCssClasses extends core.Object {
    get TAB_CLASS() {
      return this[TAB_CLASS];
    }
    set TAB_CLASS(value) {
      super.TAB_CLASS = value;
    }
    get PANEL_CLASS() {
      return this[PANEL_CLASS];
    }
    set PANEL_CLASS(value) {
      super.PANEL_CLASS = value;
    }
    get ACTIVE_CLASS() {
      return this[ACTIVE_CLASS];
    }
    set ACTIVE_CLASS(value) {
      super.ACTIVE_CLASS = value;
    }
    get UPGRADED_CLASS() {
      return this[UPGRADED_CLASS];
    }
    set UPGRADED_CLASS(value) {
      super.UPGRADED_CLASS = value;
    }
    get MDL_JS_RIPPLE_EFFECT() {
      return this[MDL_JS_RIPPLE_EFFECT];
    }
    set MDL_JS_RIPPLE_EFFECT(value) {
      super.MDL_JS_RIPPLE_EFFECT = value;
    }
    get MDL_RIPPLE_CONTAINER() {
      return this[MDL_RIPPLE_CONTAINER];
    }
    set MDL_RIPPLE_CONTAINER(value) {
      super.MDL_RIPPLE_CONTAINER = value;
    }
    get MDL_RIPPLE() {
      return this[MDL_RIPPLE$];
    }
    set MDL_RIPPLE(value) {
      super.MDL_RIPPLE = value;
    }
    get MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS() {
      return this[MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS$];
    }
    set MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS(value) {
      super.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS = value;
    }
  };
  (m4d_components._MaterialTabsCssClasses.new = function() {
    this[TAB_CLASS] = "mdl-tabs__tab";
    this[PANEL_CLASS] = "mdl-tabs__panel";
    this[ACTIVE_CLASS] = "is-active";
    this[UPGRADED_CLASS] = "is-upgraded";
    this[MDL_JS_RIPPLE_EFFECT] = "mdl-ripple-effect";
    this[MDL_RIPPLE_CONTAINER] = "mdl-tabs__ripple-container";
    this[MDL_RIPPLE$] = "mdl-ripple";
    this[MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS$] = "mdl-ripple-effect--ignore-events";
    ;
  }).prototype = m4d_components._MaterialTabsCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialTabsCssClasses);
  dart.addTypeCaches(m4d_components._MaterialTabsCssClasses);
  const TAB_CLASS = _MaterialTabsCssClasses_TAB_CLASS;
  const PANEL_CLASS = _MaterialTabsCssClasses_PANEL_CLASS;
  const ACTIVE_CLASS = _MaterialTabsCssClasses_ACTIVE_CLASS;
  const UPGRADED_CLASS = _MaterialTabsCssClasses_UPGRADED_CLASS;
  const MDL_JS_RIPPLE_EFFECT = _MaterialTabsCssClasses_MDL_JS_RIPPLE_EFFECT;
  const MDL_RIPPLE_CONTAINER = _MaterialTabsCssClasses_MDL_RIPPLE_CONTAINER;
  const MDL_RIPPLE$ = _MaterialTabsCssClasses_MDL_RIPPLE;
  const MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS$ = _MaterialTabsCssClasses_MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS;
  dart.setLibraryUri(m4d_components._MaterialTabsCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialTabsCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialTabsCssClasses.__proto__),
    TAB_CLASS: dart.finalFieldType(core.String),
    PANEL_CLASS: dart.finalFieldType(core.String),
    ACTIVE_CLASS: dart.finalFieldType(core.String),
    UPGRADED_CLASS: dart.finalFieldType(core.String),
    MDL_JS_RIPPLE_EFFECT: dart.finalFieldType(core.String),
    MDL_RIPPLE_CONTAINER: dart.finalFieldType(core.String),
    MDL_RIPPLE: dart.finalFieldType(core.String),
    MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialTabsCssClasses, {
    /*m4d_components._MaterialTabsCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-tabs";
    }
  }, true);
  m4d_components._MaterialTabsConstant = class _MaterialTabsConstant extends core.Object {};
  (m4d_components._MaterialTabsConstant.new = function() {
    ;
  }).prototype = m4d_components._MaterialTabsConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialTabsConstant);
  dart.addTypeCaches(m4d_components._MaterialTabsConstant);
  dart.setLibraryUri(m4d_components._MaterialTabsConstant, L0);
  var _maxRows = dart.privateName(m4d_components, "_maxRows");
  var _input = dart.privateName(m4d_components, "_input");
  var _label = dart.privateName(m4d_components, "_label");
  var _relaxedInput = dart.privateName(m4d_components, "_relaxedInput");
  var _onReset = dart.privateName(m4d_components, "_onReset");
  var _onKeyDown = dart.privateName(m4d_components, "_onKeyDown");
  var _checkValidity = dart.privateName(m4d_components, "_checkValidity");
  var _checkDirty = dart.privateName(m4d_components, "_checkDirty");
  var _checkFocus = dart.privateName(m4d_components, "_checkFocus");
  var _MaterialTextfieldConstant_MAX_ROWS_ATTRIBUTE = dart.privateName(m4d_components, "_MaterialTextfieldConstant.MAX_ROWS_ATTRIBUTE");
  var _MaterialTextfieldConstant_NO_MAX_ROWS = dart.privateName(m4d_components, "_MaterialTextfieldConstant.NO_MAX_ROWS");
  var C44;
  var _MaterialTextfieldCssClasses_HAS_PLACEHOLDER = dart.privateName(m4d_components, "_MaterialTextfieldCssClasses.HAS_PLACEHOLDER");
  var _MaterialTextfieldCssClasses_IS_UPGRADED = dart.privateName(m4d_components, "_MaterialTextfieldCssClasses.IS_UPGRADED");
  var _MaterialTextfieldCssClasses_IS_INVALID = dart.privateName(m4d_components, "_MaterialTextfieldCssClasses.IS_INVALID");
  var _MaterialTextfieldCssClasses_IS_DISABLED = dart.privateName(m4d_components, "_MaterialTextfieldCssClasses.IS_DISABLED");
  var _MaterialTextfieldCssClasses_IS_FOCUSED = dart.privateName(m4d_components, "_MaterialTextfieldCssClasses.IS_FOCUSED");
  var _MaterialTextfieldCssClasses_IS_DIRTY = dart.privateName(m4d_components, "_MaterialTextfieldCssClasses.IS_DIRTY");
  var _MaterialTextfieldCssClasses_INPUT = dart.privateName(m4d_components, "_MaterialTextfieldCssClasses.INPUT");
  var _MaterialTextfieldCssClasses_LABEL = dart.privateName(m4d_components, "_MaterialTextfieldCssClasses.LABEL");
  var C45;
  const MdlComponent_FallbackFormatter$36$2 = class MdlComponent_FallbackFormatter extends m4d_core.MdlComponent {};
  (MdlComponent_FallbackFormatter$36$2.new = function(element, injector) {
    MdlComponent_FallbackFormatter$36$2.__proto__.new.call(this, element, injector);
  }).prototype = MdlComponent_FallbackFormatter$36$2.prototype;
  dart.applyMixin(MdlComponent_FallbackFormatter$36$2, m4d_components.FallbackFormatter);
  m4d_components.MaterialTextfield = class MaterialTextfield extends MdlComponent_FallbackFormatter$36$2 {
    static widget(element) {
      let textfield = null;
      try {
        textfield = m4d_components.MaterialTextfield.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialTextfield), {showWarning: false}));
      } catch (e) {
        let ex = dart.getThrown(e);
        if (typeof ex == 'string') {
          let inputField = html.HtmlElement.as(element.querySelector("." + dart.str(m4d_components.MaterialTextfield._cssClasses.INPUT)));
          textfield = m4d_components.MaterialTextfield.as(m4d_core.mdlComponent(inputField, dart.wrapType(m4d_components.MaterialTextfield)));
        } else
          throw e;
      }
      return textfield;
    }
    get hub() {
      return this.inputElement;
    }
    get inputElement() {
      if (this[_input] == null) {
        this[_input] = html.HtmlElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialTextfield._cssClasses.INPUT)));
      }
      return this[_input];
    }
    get labelElement() {
      if (this[_label] == null) {
        this[_label] = html.LabelElement.as(this.element.querySelector("." + dart.str(m4d_components.MaterialTextfield._cssClasses.LABEL)));
      }
      return this[_label];
    }
    disable() {
      dart.dput(this[_relaxedInput], 'disabled', true);
      this[_updateClasses]();
    }
    enable() {
      dart.dput(this[_relaxedInput], 'disabled', false);
      this[_updateClasses]();
    }
    change(value) {
      if (value != null && !core.identical(value, dart.dload(this[_relaxedInput], 'value'))) {
        let isSelectionSupported = html.InputElement.as(this[_relaxedInput]).type === "text";
        let selStart = 0;
        if (isSelectionSupported) {
          selStart = core.int.as(dart.dload(this[_relaxedInput], 'selectionStart'));
        }
        const _placeTheCursorWhereItWasBefore = position => {
          dart.dsend(this[_relaxedInput], 'setSelectionRange', [position, position]);
        };
        dart.fn(_placeTheCursorWhereItWasBefore, intLTovoid());
        dart.dput(this[_relaxedInput], 'value', m4d_components.MaterialFormatter.widget(html.HtmlElement.as(this.element)).format(value));
        if (isSelectionSupported) {
          _placeTheCursorWhereItWasBefore(selStart);
        }
        const _triggerFormUpdate = () => {
          let t10;
          function _findForm(element) {
            if (element == null || dart.test(element[$classes].contains("mdl-form"))) {
              return element;
            }
            return _findForm(html.HtmlElement.as(element[$parent]));
          }
          dart.fn(_findForm, HtmlElementLToHtmlElementL());
          let formElement = _findForm(html.HtmlElement.as(this.element));
          t10 = formElement;
          t10 == null ? null : t10.dispatchEvent(html.CustomEvent.new("MaterialTextfieldChanged", {detail: this}));
        };
        dart.fn(_triggerFormUpdate, VoidTovoid());
        _triggerFormUpdate();
        this.focus();
      }
      this[_updateClasses]();
    }
    get label() {
      let _label = this.labelElement;
      return _label != null ? _label[$text][$trim]() : "";
    }
    set label(v) {
      let t10;
      validate.Validate.notNull(core.String, v);
      let _label = this.labelElement;
      t10 = _label;
      t10 == null ? null : t10[$text] = this.formatterFor(_label, this.element).format(v[$trim]());
    }
    get value() {
      return core.String.as(dart.dload(this[_relaxedInput], 'value'));
    }
    set value(value) {
      this.change(value);
    }
    set valueIfNotFocused(value) {
      if (dart.test(this.notFocused)) {
        this.change(value);
      }
    }
    update() {
      this[_updateClasses]();
    }
    get isValid() {
      return dart.dload(this[_relaxedInput], 'validity') != null && !dart.dtest(dart.dload(dart.dload(this[_relaxedInput], 'validity'), 'valid')) ? false : true;
    }
    get isNotValid() {
      return !dart.test(this.isValid);
    }
    focus() {
      dart.dsend(this[_relaxedInput], 'focus', []);
      this[_updateClasses]();
    }
    blur() {
      dart.dsend(this[_relaxedInput], 'blur', []);
      this[_updateClasses]();
    }
    get hasFocus() {
      return html.document.activeElement != null && dart.equals(html.document.activeElement, this.hub);
    }
    get notFocused() {
      return !dart.test(this.hasFocus);
    }
    [_init]() {
      let t10;
      this[_logger].fine("MaterialTextfield - init");
      if (this.element != null) {
        if (this.inputElement != null) {
          if (dart.test(this.element[$attributes][$containsKey](m4d_components.MaterialTextfield._constant.MAX_ROWS_ATTRIBUTE)) && this.element[$attributes][$_get](m4d_components.MaterialTextfield._constant.MAX_ROWS_ATTRIBUTE) != null && this.element[$attributes][$_get](m4d_components.MaterialTextfield._constant.MAX_ROWS_ATTRIBUTE)[$isNotEmpty]) {
            this[_maxRows] = (t10 = core.int.tryParse(this.element[$getAttribute](m4d_components.MaterialTextfield._constant.MAX_ROWS_ATTRIBUTE)), t10 == null ? m4d_components.MaterialTextfield._constant.NO_MAX_ROWS : t10);
            if (this[_maxRows] == m4d_components.MaterialTextfield._constant.NO_MAX_ROWS) {
              this[_logger].severe("maxrows attribute provided, but wasn't a number: " + dart.str(this.value));
            }
          }
          if (dart.test(this.inputElement[$attributes][$containsKey]("placeholder"))) {
            this.element[$classes].add(m4d_components.MaterialTextfield._cssClasses.HAS_PLACEHOLDER);
          }
          this.eventStreams[$add](this.inputElement[$onInput].listen(dart.fn(_ => this[_updateClasses](), EventLTovoid())));
          this.eventStreams[$add](this.inputElement[$onFocus].listen(dart.bind(this, _onFocus)));
          this.eventStreams[$add](this.inputElement[$onBlur].listen(dart.bind(this, _onBlur)));
          this.eventStreams[$add](this.inputElement[$onReset].listen(dart.bind(this, _onReset)));
          if (this[_maxRows] != m4d_components.MaterialTextfield._constant.NO_MAX_ROWS) {
            this.eventStreams[$add](this.element[$onKeyDown].listen(dart.bind(this, _onKeyDown)));
          }
          this[_updateClasses]();
          const _kickInFormatter = () => {
            this.value = this.value;
          };
          dart.fn(_kickInFormatter, VoidTovoid());
          _kickInFormatter();
          let isInvalid = this.element[$classes].contains(m4d_components.MaterialTextfield._cssClasses.IS_INVALID);
          if (dart.test(isInvalid) && this.value[$isEmpty]) {
            this.element[$classes].remove(m4d_components.MaterialTextfield._cssClasses.IS_INVALID);
          }
          this.element[$classes].add(m4d_components.MaterialTextfield._cssClasses.IS_UPGRADED);
        }
      }
    }
    [_onKeyDown](event) {
      let currentRowCount = this.value[$split]("\n")[$length];
      if (event.keyCode === 13) {
        if (dart.notNull(currentRowCount) >= dart.notNull(this[_maxRows])) {
          event.preventDefault();
        }
      }
    }
    [_onFocus](_) {
      this.element[$classes].add(m4d_components.MaterialTextfield._cssClasses.IS_FOCUSED);
    }
    [_onBlur](_) {
      this.element[$classes].remove(m4d_components.MaterialTextfield._cssClasses.IS_FOCUSED);
    }
    [_updateClasses]() {
      this[_checkDisabled]();
      this[_checkValidity]();
      this[_checkDirty]();
      this[_checkFocus]();
    }
    [_onReset](_) {
      this[_updateClasses]();
    }
    [_checkDisabled]() {
      if (dart.dtest(dart.dload(this[_relaxedInput], 'disabled'))) {
        this.element[$classes].add(m4d_components.MaterialTextfield._cssClasses.IS_DISABLED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialTextfield._cssClasses.IS_DISABLED);
      }
    }
    [_checkValidity]() {
      if (dart.dload(this[_relaxedInput], 'validity') != null) {
        if (dart.dtest(dart.dload(dart.dload(this[_relaxedInput], 'validity'), 'valid'))) {
          this.element[$classes].remove(m4d_components.MaterialTextfield._cssClasses.IS_INVALID);
        } else {
          this.element[$classes].add(m4d_components.MaterialTextfield._cssClasses.IS_INVALID);
        }
      }
    }
    [_checkDirty]() {
      if (dart.dload(this[_relaxedInput], 'value') != null && dart.dtest(dart.dload(dart.dload(this[_relaxedInput], 'value'), 'isNotEmpty')) || html.InputElement.is(this[_relaxedInput]) && dart.toString(html.InputElement.as(this[_relaxedInput]).placeholder)[$trim]()[$isNotEmpty]) {
        this.element[$classes].add(m4d_components.MaterialTextfield._cssClasses.IS_DIRTY);
      } else {
        this.element[$classes].remove(m4d_components.MaterialTextfield._cssClasses.IS_DIRTY);
      }
    }
    [_checkFocus]() {
      if (this.element.querySelector(":focus") != null) {
        this.element[$classes].add(m4d_components.MaterialTextfield._cssClasses.IS_FOCUSED);
      } else {
        this.element[$classes].remove(m4d_components.MaterialTextfield._cssClasses.IS_FOCUSED);
      }
    }
    get [_relaxedInput]() {
      return this.inputElement;
    }
  };
  (m4d_components.MaterialTextfield.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialTextfield");
    this[_maxRows] = m4d_components.MaterialTextfield._constant.NO_MAX_ROWS;
    this[_input] = null;
    this[_label] = null;
    m4d_components.MaterialTextfield.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialTextfield.prototype;
  dart.addTypeTests(m4d_components.MaterialTextfield);
  dart.addTypeCaches(m4d_components.MaterialTextfield);
  dart.setMethodSignature(m4d_components.MaterialTextfield, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialTextfield.__proto__),
    disable: dart.fnType(dart.void, []),
    enable: dart.fnType(dart.void, []),
    change: dart.fnType(dart.void, [core.String]),
    focus: dart.fnType(dart.void, []),
    blur: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    [_onKeyDown]: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_onFocus]: dart.fnType(dart.void, [dart.dynamic]),
    [_onBlur]: dart.fnType(dart.void, [dart.dynamic]),
    [_updateClasses]: dart.fnType(dart.void, []),
    [_onReset]: dart.fnType(dart.void, [dart.dynamic]),
    [_checkDisabled]: dart.fnType(dart.void, []),
    [_checkValidity]: dart.fnType(dart.void, []),
    [_checkDirty]: dart.fnType(dart.void, []),
    [_checkFocus]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_components.MaterialTextfield, () => ({
    __proto__: dart.getGetters(m4d_components.MaterialTextfield.__proto__),
    inputElement: html.HtmlElement,
    labelElement: html.LabelElement,
    label: core.String,
    value: core.String,
    isValid: core.bool,
    isNotValid: core.bool,
    hasFocus: core.bool,
    notFocused: core.bool,
    [_relaxedInput]: dart.dynamic
  }));
  dart.setSetterSignature(m4d_components.MaterialTextfield, () => ({
    __proto__: dart.getSetters(m4d_components.MaterialTextfield.__proto__),
    label: core.String,
    value: core.String,
    valueIfNotFocused: core.String
  }));
  dart.setLibraryUri(m4d_components.MaterialTextfield, L0);
  dart.setFieldSignature(m4d_components.MaterialTextfield, () => ({
    __proto__: dart.getFields(m4d_components.MaterialTextfield.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_maxRows]: dart.fieldType(core.int),
    [_input]: dart.fieldType(html.HtmlElement),
    [_label]: dart.fieldType(html.LabelElement)
  }));
  dart.defineLazy(m4d_components.MaterialTextfield, {
    /*m4d_components.MaterialTextfield._constant*/get _constant() {
      return C44 || CT.C44;
    },
    /*m4d_components.MaterialTextfield._cssClasses*/get _cssClasses() {
      return C45 || CT.C45;
    }
  }, true);
  m4d_components._MaterialTextfieldCssClasses = class _MaterialTextfieldCssClasses extends core.Object {
    get LABEL() {
      return this[LABEL$2];
    }
    set LABEL(value) {
      super.LABEL = value;
    }
    get INPUT() {
      return this[INPUT$2];
    }
    set INPUT(value) {
      super.INPUT = value;
    }
    get IS_DIRTY() {
      return this[IS_DIRTY];
    }
    set IS_DIRTY(value) {
      super.IS_DIRTY = value;
    }
    get IS_FOCUSED() {
      return this[IS_FOCUSED$2];
    }
    set IS_FOCUSED(value) {
      super.IS_FOCUSED = value;
    }
    get IS_DISABLED() {
      return this[IS_DISABLED$2];
    }
    set IS_DISABLED(value) {
      super.IS_DISABLED = value;
    }
    get IS_INVALID() {
      return this[IS_INVALID];
    }
    set IS_INVALID(value) {
      super.IS_INVALID = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED$16];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get HAS_PLACEHOLDER() {
      return this[HAS_PLACEHOLDER];
    }
    set HAS_PLACEHOLDER(value) {
      super.HAS_PLACEHOLDER = value;
    }
  };
  (m4d_components._MaterialTextfieldCssClasses.new = function() {
    this[LABEL$2] = "mdl-textfield__label";
    this[INPUT$2] = "mdl-textfield__input";
    this[IS_DIRTY] = "is-dirty";
    this[IS_FOCUSED$2] = "is-focused";
    this[IS_DISABLED$2] = "is-disabled";
    this[IS_INVALID] = "is-invalid";
    this[IS_UPGRADED$16] = "is-upgraded";
    this[HAS_PLACEHOLDER] = "has-placeholder";
    ;
  }).prototype = m4d_components._MaterialTextfieldCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialTextfieldCssClasses);
  dart.addTypeCaches(m4d_components._MaterialTextfieldCssClasses);
  const LABEL$2 = _MaterialTextfieldCssClasses_LABEL;
  const INPUT$2 = _MaterialTextfieldCssClasses_INPUT;
  const IS_DIRTY = _MaterialTextfieldCssClasses_IS_DIRTY;
  const IS_FOCUSED$2 = _MaterialTextfieldCssClasses_IS_FOCUSED;
  const IS_DISABLED$2 = _MaterialTextfieldCssClasses_IS_DISABLED;
  const IS_INVALID = _MaterialTextfieldCssClasses_IS_INVALID;
  const IS_UPGRADED$16 = _MaterialTextfieldCssClasses_IS_UPGRADED;
  const HAS_PLACEHOLDER = _MaterialTextfieldCssClasses_HAS_PLACEHOLDER;
  dart.setLibraryUri(m4d_components._MaterialTextfieldCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialTextfieldCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialTextfieldCssClasses.__proto__),
    LABEL: dart.finalFieldType(core.String),
    INPUT: dart.finalFieldType(core.String),
    IS_DIRTY: dart.finalFieldType(core.String),
    IS_FOCUSED: dart.finalFieldType(core.String),
    IS_DISABLED: dart.finalFieldType(core.String),
    IS_INVALID: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String),
    HAS_PLACEHOLDER: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialTextfieldCssClasses, {
    /*m4d_components._MaterialTextfieldCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-textfield";
    }
  }, true);
  m4d_components._MaterialTextfieldConstant = class _MaterialTextfieldConstant extends core.Object {
    get NO_MAX_ROWS() {
      return this[NO_MAX_ROWS];
    }
    set NO_MAX_ROWS(value) {
      super.NO_MAX_ROWS = value;
    }
    get MAX_ROWS_ATTRIBUTE() {
      return this[MAX_ROWS_ATTRIBUTE];
    }
    set MAX_ROWS_ATTRIBUTE(value) {
      super.MAX_ROWS_ATTRIBUTE = value;
    }
  };
  (m4d_components._MaterialTextfieldConstant.new = function() {
    this[NO_MAX_ROWS] = -1;
    this[MAX_ROWS_ATTRIBUTE] = "maxrows";
    ;
  }).prototype = m4d_components._MaterialTextfieldConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialTextfieldConstant);
  dart.addTypeCaches(m4d_components._MaterialTextfieldConstant);
  const NO_MAX_ROWS = _MaterialTextfieldConstant_NO_MAX_ROWS;
  const MAX_ROWS_ATTRIBUTE = _MaterialTextfieldConstant_MAX_ROWS_ATTRIBUTE;
  dart.setLibraryUri(m4d_components._MaterialTextfieldConstant, L0);
  dart.setFieldSignature(m4d_components._MaterialTextfieldConstant, () => ({
    __proto__: dart.getFields(m4d_components._MaterialTextfieldConstant.__proto__),
    NO_MAX_ROWS: dart.finalFieldType(core.int),
    MAX_ROWS_ATTRIBUTE: dart.finalFieldType(core.String)
  }));
  var IS_ACTIVE$0 = dart.privateName(m4d_components, "_MaterialTooltipCssClasses.IS_ACTIVE");
  var BOTTOM = dart.privateName(m4d_components, "_MaterialTooltipCssClasses.BOTTOM");
  var LEFT = dart.privateName(m4d_components, "_MaterialTooltipCssClasses.LEFT");
  var RIGHT = dart.privateName(m4d_components, "_MaterialTooltipCssClasses.RIGHT");
  var TOP = dart.privateName(m4d_components, "_MaterialTooltipCssClasses.TOP");
  m4d_components._MaterialTooltipCssClasses = class _MaterialTooltipCssClasses extends core.Object {
    get IS_ACTIVE() {
      return this[IS_ACTIVE$0];
    }
    set IS_ACTIVE(value) {
      super.IS_ACTIVE = value;
    }
    get BOTTOM() {
      return this[BOTTOM];
    }
    set BOTTOM(value) {
      super.BOTTOM = value;
    }
    get LEFT() {
      return this[LEFT];
    }
    set LEFT(value) {
      super.LEFT = value;
    }
    get RIGHT() {
      return this[RIGHT];
    }
    set RIGHT(value) {
      super.RIGHT = value;
    }
    get TOP() {
      return this[TOP];
    }
    set TOP(value) {
      super.TOP = value;
    }
  };
  (m4d_components._MaterialTooltipCssClasses.new = function() {
    this[IS_ACTIVE$0] = "is-active";
    this[BOTTOM] = "mdl-tooltip--bottom";
    this[LEFT] = "mdl-tooltip--left";
    this[RIGHT] = "mdl-tooltip--right";
    this[TOP] = "mdl-tooltip--top";
    ;
  }).prototype = m4d_components._MaterialTooltipCssClasses.prototype;
  dart.addTypeTests(m4d_components._MaterialTooltipCssClasses);
  dart.addTypeCaches(m4d_components._MaterialTooltipCssClasses);
  dart.setLibraryUri(m4d_components._MaterialTooltipCssClasses, L0);
  dart.setFieldSignature(m4d_components._MaterialTooltipCssClasses, () => ({
    __proto__: dart.getFields(m4d_components._MaterialTooltipCssClasses.__proto__),
    IS_ACTIVE: dart.finalFieldType(core.String),
    BOTTOM: dart.finalFieldType(core.String),
    LEFT: dart.finalFieldType(core.String),
    RIGHT: dart.finalFieldType(core.String),
    TOP: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(m4d_components._MaterialTooltipCssClasses, {
    /*m4d_components._MaterialTooltipCssClasses.MAIN_CLASS*/get MAIN_CLASS() {
      return "mdl-tooltip";
    }
  }, true);
  m4d_components._MaterialTooltipConstant = class _MaterialTooltipConstant extends core.Object {};
  (m4d_components._MaterialTooltipConstant.new = function() {
    ;
  }).prototype = m4d_components._MaterialTooltipConstant.prototype;
  dart.addTypeTests(m4d_components._MaterialTooltipConstant);
  dart.addTypeCaches(m4d_components._MaterialTooltipConstant);
  dart.setLibraryUri(m4d_components._MaterialTooltipConstant, L0);
  var _handleMouseEnter = dart.privateName(m4d_components, "_handleMouseEnter");
  var _hideTooltip = dart.privateName(m4d_components, "_hideTooltip");
  var C46;
  var C47;
  m4d_components.MaterialTooltip = class MaterialTooltip extends m4d_core.MdlComponent {
    static widget(element) {
      return m4d_components.MaterialTooltip.as(m4d_core.mdlComponent(element, dart.wrapType(m4d_components.MaterialTooltip)));
    }
    [_init]() {
      let t10;
      this[_logger].fine("MaterialTooltip - init");
      if (this.element != null) {
        let forElId = (t10 = this.element[$getAttribute]("data-mdl-for"), t10 == null ? this.element[$getAttribute]("for") : t10);
        if (forElId != null) {
          this[_logger].info("ELEMENT: " + dart.str(forElId));
          this[_forElement] = html.HtmlElement.as(this.element[$parent].querySelector("#" + dart.str(forElId)));
          if (this[_forElement] != null) {
            this[_logger].info("Found: " + dart.str(forElId));
            if (!dart.test(this[_forElement][$attributes][$containsKey]("tabindex"))) {
              this[_forElement][$attributes][$_set]("tabindex", "0");
            }
            this.eventStreams[$add](this[_forElement][$onMouseEnter].listen(dart.bind(this, _handleMouseEnter)));
            this.eventStreams[$add](this[_forElement][$onTouchEnd].listen(dart.bind(this, _handleMouseEnter)));
            this.eventStreams[$add](this[_forElement][$onMouseLeave].listen(dart.bind(this, _hideTooltip)));
            this.eventStreams[$add](html.window[$onTouchStart].listen(dart.fn(event => {
              event.stopPropagation();
              this[_hideTooltip](event);
            }, EventLToNullN())));
          }
        }
      }
    }
    [_handleMouseEnter](event) {
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialTooltip._cssClasses.IS_ACTIVE))) {
        this.element[$classes].remove(m4d_components.MaterialTooltip._cssClasses.IS_ACTIVE);
        return;
      }
      let props = this[_forElement].getBoundingClientRect();
      let left = props[$left][$toInt]() + (dart.notNull(props[$width]) / 2)[$truncate]();
      let top = props[$top][$toInt]() + (dart.notNull(props[$height]) / 2)[$truncate]();
      let marginLeft = -1 * (dart.notNull(this.element[$offsetWidth]) / 2);
      let marginTop = -1 * (dart.notNull(this.element[$offsetHeight]) / 2);
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialTooltip._cssClasses.LEFT)) || dart.test(this.element[$classes].contains(m4d_components.MaterialTooltip._cssClasses.RIGHT))) {
        left = (dart.notNull(props[$width]) / 2)[$truncate]();
        if (top + marginTop < 0) {
          this.element.style[$top] = "0";
          this.element.style[$marginTop] = "0";
        } else {
          this.element.style[$top] = dart.str(top) + "px";
          this.element.style[$marginTop] = dart.str(marginTop) + "px";
        }
      } else {
        if (left + marginLeft < 0) {
          this.element.style[$left] = "0";
          this.element.style[$marginLeft] = "0";
        } else {
          this.element.style[$left] = dart.str(left) + "px";
          this.element.style[$marginLeft] = dart.str(marginLeft) + "px";
        }
      }
      if (dart.test(this.element[$classes].contains(m4d_components.MaterialTooltip._cssClasses.TOP))) {
        this.element.style[$top] = dart.str(dart.notNull(props[$top]) - dart.notNull(this.element[$offsetHeight]) - 10) + "px";
      } else if (dart.test(this.element[$classes].contains(m4d_components.MaterialTooltip._cssClasses.RIGHT))) {
        this.element.style[$left] = dart.str(dart.notNull(props[$left]) + dart.notNull(props[$width]) + 10) + "px";
      } else if (dart.test(this.element[$classes].contains(m4d_components.MaterialTooltip._cssClasses.LEFT))) {
        this.element.style[$left] = dart.str(dart.notNull(props[$left]) - dart.notNull(this.element[$offsetWidth]) - 10) + "px";
      } else {
        this.element.style[$top] = dart.str(dart.notNull(props[$top]) + dart.notNull(props[$height]) + 10) + "px";
      }
      this.element[$classes].add(m4d_components.MaterialTooltip._cssClasses.IS_ACTIVE);
    }
    [_hideTooltip](event) {
      this.element[$classes].remove(m4d_components.MaterialTooltip._cssClasses.IS_ACTIVE);
    }
  };
  (m4d_components.MaterialTooltip.fromElement = function(element, iocContainer) {
    this[_logger] = logger.Logger.new("mdlcomponents.MaterialTooltip");
    this[_forElement] = null;
    m4d_components.MaterialTooltip.__proto__.new.call(this, element, iocContainer);
    this[_init]();
  }).prototype = m4d_components.MaterialTooltip.prototype;
  dart.addTypeTests(m4d_components.MaterialTooltip);
  dart.addTypeCaches(m4d_components.MaterialTooltip);
  dart.setMethodSignature(m4d_components.MaterialTooltip, () => ({
    __proto__: dart.getMethods(m4d_components.MaterialTooltip.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_handleMouseEnter]: dart.fnType(dart.void, [html.Event]),
    [_hideTooltip]: dart.fnType(dart.void, [html.Event])
  }));
  dart.setLibraryUri(m4d_components.MaterialTooltip, L0);
  dart.setFieldSignature(m4d_components.MaterialTooltip, () => ({
    __proto__: dart.getFields(m4d_components.MaterialTooltip.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_forElement]: dart.fieldType(html.HtmlElement)
  }));
  dart.defineLazy(m4d_components.MaterialTooltip, {
    /*m4d_components.MaterialTooltip._constant*/get _constant() {
      return C46 || CT.C46;
    },
    /*m4d_components.MaterialTooltip._cssClasses*/get _cssClasses() {
      return C47 || CT.C47;
    }
  }, true);
  m4d_components.materialAccordionConfig = function materialAccordionConfig() {
    return new (MdlWidgetConfigOfMaterialAccordionL()).new("mdl-accordion", dart.fn((element, iocContainer) => new m4d_components.MaterialAccordion.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialAccordionL()));
  };
  m4d_components.registerMaterialAccordion = function registerMaterialAccordion() {
    return m4d_core.componentHandler().register(m4d_components.materialAccordionConfig());
  };
  m4d_components.registerMaterialBadge = function registerMaterialBadge() {
    let config = new (MdlWidgetConfigOfMaterialBadgeL()).new("mdl-badge", dart.fn((element, iocContainer) => new m4d_components.MaterialBadge.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialBadgeL()));
    config.selectorType = m4d_core.SelectorType.CLASS;
    m4d_core.componentHandler().register(config);
  };
  m4d_components.registerMaterialButton = function registerMaterialButton() {
    let config = new (MdlWidgetConfigOfMaterialButtonL()).new("mdl-button", dart.fn((element, iocContainer) => new m4d_components.MaterialButton.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialButtonL()));
    m4d_core.componentHandler().register(config);
  };
  m4d_components.materialCheckboxConfig = function materialCheckboxConfig() {
    return new (MdlWidgetConfigOfMaterialCheckboxL()).new("mdl-checkbox", dart.fn((element, iocContainer) => new m4d_components.MaterialCheckbox.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialCheckboxL()));
  };
  m4d_components.registerMaterialCheckbox = function registerMaterialCheckbox() {
    return m4d_core.componentHandler().register(m4d_components.materialCheckboxConfig());
  };
  m4d_components.registerMaterialDataTable = function registerMaterialDataTable() {
    let config = new (MdlWidgetConfigOfMaterialDataTableL()).new("mdl-data-table", dart.fn((element, iocContainer) => new m4d_components.MaterialDataTable.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialDataTableL()));
    m4d_core.componentHandler().register(config);
  };
  m4d_components.registerMaterialDivDataTable = function registerMaterialDivDataTable() {
    m4d_components._registerMaterialDivDataTable();
    m4d_components._registerMaterialDivDataTableRow();
  };
  m4d_components._registerMaterialDivDataTable = function _registerMaterialDivDataTable() {
    let config = new (MdlWidgetConfigOfMaterialDivDataTableL()).new("mdl-data-tableex", dart.fn((element, iocContainer) => new m4d_components.MaterialDivDataTable.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialDivDataTableL()));
    m4d_core.componentHandler().register(config);
  };
  m4d_components._registerMaterialDivDataTableRow = function _registerMaterialDivDataTableRow() {
    let config = new (MdlWidgetConfigOfMaterialDivDataTableRowL()).new("mdl-div-data-tableex__row", dart.fn((element, iocContainer) => new m4d_components.MaterialDivDataTableRow.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialDivDataTableRowL()));
    config.priority = m4d_core.RegistrationPriority.CHILD_WIDGET;
    m4d_core.componentHandler().register(config);
  };
  m4d_components.registerMaterialFormatter = function registerMaterialFormatter() {
    let config = new (MdlConfigOfMaterialFormatterL()).new("mdl-formatter", dart.fn((element, iocContainer) => new m4d_components.MaterialFormatter.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialFormatterL()));
    config.priority = m4d_core.RegistrationPriority.PRE_WIDGET;
    config.selectorType = m4d_core.SelectorType.ATTRIBUTE;
    m4d_core.componentHandler().register(config);
  };
  m4d_components.materialIconToggleConfig = function materialIconToggleConfig() {
    return new (MdlWidgetConfigOfMaterialIconToggleL()).new("mdl-icon-toggle", dart.fn((element, iocContainer) => new m4d_components.MaterialIconToggle.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialIconToggleL()));
  };
  m4d_components.registerMaterialIconToggle = function registerMaterialIconToggle() {
    return m4d_core.componentHandler().register(m4d_components.materialIconToggleConfig());
  };
  m4d_components.registerMaterialLabelfield = function registerMaterialLabelfield() {
    let config = new (MdlWidgetConfigOfMaterialLabelfieldL()).new("mdl-labelfield", dart.fn((element, iocContainer) => new m4d_components.MaterialLabelfield.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialLabelfieldL()));
    config.selectorType = m4d_core.SelectorType.CLASS;
    m4d_core.componentHandler().register(config);
  };
  m4d_components.materialLayoutConfig = function materialLayoutConfig() {
    return new (MdlWidgetConfigOfMaterialLayoutL()).new("mdl-layout", dart.fn((element, iocContainer) => new m4d_components.MaterialLayout.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialLayoutL()));
  };
  m4d_components.registerMaterialLayout = function registerMaterialLayout() {
    return m4d_core.componentHandler().register(m4d_components.materialLayoutConfig());
  };
  m4d_components.materialMenuConfig = function materialMenuConfig() {
    return new (MdlWidgetConfigOfMaterialMenuL()).new("mdl-menu", dart.fn((element, iocContainer) => new m4d_components.MaterialMenu.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialMenuL()));
  };
  m4d_components.registerMaterialMenu = function registerMaterialMenu() {
    return m4d_core.componentHandler().register(m4d_components.materialMenuConfig());
  };
  m4d_components.materialProgressConfig = function materialProgressConfig() {
    return new (MdlWidgetConfigOfMaterialProgressL()).new("mdl-progress", dart.fn((element, iocContainer) => new m4d_components.MaterialProgress.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialProgressL()));
  };
  m4d_components.registerMaterialProgress = function registerMaterialProgress() {
    return m4d_core.componentHandler().register(m4d_components.materialProgressConfig());
  };
  m4d_components.materialProgressVerticalConfig = function materialProgressVerticalConfig() {
    return new (MdlWidgetConfigOfMaterialProgressVerticalL()).new("mdl-vprogress", dart.fn((element, iocContainer) => new m4d_components.MaterialProgressVertical.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialProgressVerticalL()));
  };
  m4d_components.registerMaterialProgressVertical = function registerMaterialProgressVertical() {
    return m4d_core.componentHandler().register(m4d_components.materialProgressVerticalConfig());
  };
  m4d_components.materialRadioConfig = function materialRadioConfig() {
    return new (MdlWidgetConfigOfMaterialRadioL()).new("mdl-radio", dart.fn((element, iocContainer) => new m4d_components.MaterialRadio.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialRadioL()));
  };
  m4d_components.registerMaterialRadio = function registerMaterialRadio() {
    return m4d_core.componentHandler().register(m4d_components.materialRadioConfig());
  };
  m4d_components.materialRadioGroupConfig = function materialRadioGroupConfig() {
    return new (MdlWidgetConfigOfMaterialRadioGroupL()).new("mdl-radio-group", dart.fn((element, iocContainer) => new m4d_components.MaterialRadioGroup.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialRadioGroupL()));
  };
  m4d_components.registerMaterialRadioGroup = function registerMaterialRadioGroup() {
    return m4d_core.componentHandler().register(m4d_components.materialRadioGroupConfig());
  };
  m4d_components.materialRippleConfig = function materialRippleConfig() {
    let config = new (MdlConfigOfMaterialRippleL()).new("mdl-ripple-effect", dart.fn((element, iocContainer) => new m4d_components.MaterialRipple.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialRippleL()));
    config.priority = m4d_core.RegistrationPriority.LAST;
    return config;
  };
  m4d_components.registerMaterialRipple = function registerMaterialRipple() {
    return m4d_core.componentHandler().register(m4d_components.materialRippleConfig());
  };
  m4d_components.materialSliderConfig = function materialSliderConfig() {
    return new (MdlWidgetConfigOfMaterialSliderL()).new("mdl-slider", dart.fn((element, iocContainer) => new m4d_components.MaterialSlider.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialSliderL()));
  };
  m4d_components.registerMaterialSlider = function registerMaterialSlider() {
    return m4d_core.componentHandler().register(m4d_components.materialSliderConfig());
  };
  m4d_components.materialSpinnerConfig = function materialSpinnerConfig() {
    return new (MdlWidgetConfigOfMaterialSpinnerL()).new("mdl-spinner", dart.fn((element, iocContainer) => new m4d_components.MaterialSpinner.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialSpinnerL()));
  };
  m4d_components.registerMaterialSpinner = function registerMaterialSpinner() {
    return m4d_core.componentHandler().register(m4d_components.materialSpinnerConfig());
  };
  m4d_components.materialSwitchConfig = function materialSwitchConfig() {
    return new (MdlWidgetConfigOfMaterialSwitchL()).new("mdl-switch", dart.fn((element, iocContainer) => new m4d_components.MaterialSwitch.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialSwitchL()));
  };
  m4d_components.registerMaterialSwitch = function registerMaterialSwitch() {
    return m4d_core.componentHandler().register(m4d_components.materialSwitchConfig());
  };
  m4d_components.materialTabsConfig = function materialTabsConfig() {
    return new (MdlWidgetConfigOfMaterialTabsL()).new("mdl-tabs", dart.fn((element, iocContainer) => new m4d_components.MaterialTabs.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialTabsL()));
  };
  m4d_components.registerMaterialTabs = function registerMaterialTabs() {
    return m4d_core.componentHandler().register(m4d_components.materialTabsConfig());
  };
  m4d_components.materialTextfieldConfig = function materialTextfieldConfig() {
    return new (MdlWidgetConfigOfMaterialTextfieldL()).new("mdl-textfield", dart.fn((element, iocContainer) => new m4d_components.MaterialTextfield.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialTextfieldL()));
  };
  m4d_components.registerMaterialTextfield = function registerMaterialTextfield() {
    return m4d_core.componentHandler().register(m4d_components.materialTextfieldConfig());
  };
  m4d_components.materialTooltipConfig = function materialTooltipConfig() {
    return new (MdlWidgetConfigOfMaterialTooltipL()).new("mdl-tooltip", dart.fn((element, iocContainer) => new m4d_components.MaterialTooltip.fromElement(element, iocContainer), HtmlElementLAndContainerLToMaterialTooltipL()));
  };
  m4d_components.registerMaterialTooltip = function registerMaterialTooltip() {
    return m4d_core.componentHandler().register(m4d_components.materialTooltipConfig());
  };
  m4d_components.registerMdlComponents = function registerMdlComponents() {
    m4d_components.registerMaterialFormatter();
    m4d_components.registerMaterialAccordion();
    m4d_components.registerMaterialBadge();
    m4d_components.registerMaterialButton();
    m4d_components.registerMaterialCheckbox();
    m4d_components.registerMaterialDataTable();
    m4d_components.registerMaterialDivDataTable();
    m4d_components.registerMaterialIconToggle();
    m4d_components.registerMaterialLabelfield();
    m4d_components.registerMaterialLayout();
    m4d_components.registerMaterialMenu();
    m4d_components.registerMaterialProgress();
    m4d_components.registerMaterialProgressVertical();
    m4d_components.registerMaterialRadio();
    m4d_components.registerMaterialRadioGroup();
    m4d_components.registerMaterialSlider();
    m4d_components.registerMaterialSpinner();
    m4d_components.registerMaterialSwitch();
    m4d_components.registerMaterialTabs();
    m4d_components.registerMaterialTextfield();
    m4d_components.registerMaterialTooltip();
    m4d_components.registerMaterialRipple();
  };
  dart.defineLazy(m4d_components, {
    /*m4d_components._dummyFormatter*/get _dummyFormatter() {
      return null;
    },
    set _dummyFormatter(_) {}
  }, true);
  dart.trackLibraries("packages/m4d_components/m4d_components", {
    "package:m4d_components/m4d_components.dart": m4d_components
  }, {
    "package:m4d_components/m4d_components.dart": ["components/MaterialFormatter.dart", "components/utils/FallbackFormatter.dart", "components/MaterialAccordion.dart", "components/MaterialBadge.dart", "components/MaterialButton.dart", "components/MaterialCheckbox.dart", "components/MaterialDataTable.dart", "components/MaterialDivDataTable.dart", "components/MaterialIconToggle.dart", "components/MaterialLabelfield.dart", "components/MaterialLayout.dart", "components/MaterialMenu.dart", "components/MaterialProgress.dart", "components/MaterialProgressVertical.dart", "components/MaterialRadio.dart", "components/MaterialRipple.dart", "components/MaterialSlider.dart", "components/MaterialSpinner.dart", "components/MaterialSwitch.dart", "components/MaterialTabs.dart", "components/MaterialTextfield.dart", "components/MaterialTooltip.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["components/MaterialAccordion.dart","m4d_components.dart","components/MaterialFormatter.dart","components/utils/FallbackFormatter.dart","components/MaterialBadge.dart","components/MaterialButton.dart","components/MaterialCheckbox.dart","components/MaterialDataTable.dart","components/MaterialDivDataTable.dart","components/MaterialIconToggle.dart","components/MaterialLabelfield.dart","components/MaterialLayout.dart","components/MaterialMenu.dart","components/MaterialProgress.dart","components/MaterialProgressVertical.dart","components/MaterialRadio.dart","components/MaterialRipple.dart","components/MaterialSlider.dart","components/MaterialSpinner.dart","components/MaterialSwitch.dart","components/MaterialTabs.dart","components/MaterialTextfield.dart","components/MaterialTooltip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oDAkNqD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AC1G1B,MAAvB;IAEF;;AAGkC,oCAAE;IAAmB;;;;EACzD;;;;;;;;;;;;;;;;kBCvD0D;;AAChC;AAClB;AAC+F,QAA3F,YAAuE,oCAA3D,sBAAa,OAAO,EAAC,+DAA+B;;;AAClE;AAGuF,UAArF,aAA6B,KAAhB,6CAAgB,iCAAQ,8CAAuB,OAAO,EAAK;;;;AAE5E,YAAO,UAAS;IACpB;WAEoB;AAAU,YAAA,AAAU,wBAAO,KAAK;IAAC;;AAKT,MAAxC,AAAQ,mBAAK;AAGkD,MAA/D,AAAQ,AAAQ;AAE4B,MAA5C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;;AAGI,YAAW,2CACP,AAAQ,AAAU,AAA6C,AAAO,mEAAM;IACpF;;AAGI,UAAG,AAAU,mBAAG;AACuB,oBAAQ;AAGR,QAFnC,kBAAgB,6CACZ,AAAS,AAA4B,sBAAZ,mDACzB,AAAM,KAAD,YAAU,GAAE,AAAM,KAAD;;AAE9B,YAAO;IACX;;2DA/CoD,SAA4B;IARnE,gBAAc,kBAAO;IAMhB;AAGZ,8DAAM,OAAO,EAAC,QAAQ;AAEjB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;MAT0C,4CAAW;;;;;WAkEjC;AAAU,YAAM,eAAN,KAAK;IAAW;;AAIG,MAA7C,AAAQ,mBAAK;AAGkD,MAA/D,AAAQ,AAAQ;AAE4B,MAA5C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;;wDAd6C,SAA4B;AAC7D,2EAAY,OAAO,EAAC,YAAY;;EAAC;;;;;MAHH,iDAAW;;;;;IAmDxC;;;;;;;;wBAAc;;EAES;;;;;;;;;;;;EAOF;;;;;MAFd,yDAAe;;;;;iBClHc,UAA2B;AACxE,UAAG,AAAS,QAAD,IAAI;AACP,yBAAa,AAAY,AAAW,AAAQ,AAAsD,AAAS,WAAnF,2CAAwB,QAAgB,KAAgC,SAAvB,AAAE,CAAD,UAAO,iBAAK,AAAE,CAAD,QAAK,gDAAoB;AACtB,QAA9F,WAAM,AAAwF,2BAAxE,WAAW,IAAC,gBAAI,AAAY,AAAQ,WAAT,kBAAc,SAAM,iBAAI,UAAU;;AAGrE,sBAA8B,4DAAO,QAAQ;AAC/D,UAAa,yCAAV,SAAS;AACyC,QAAjD,YAA8B,4DAAO,WAAW;;AAEpD,YAAO,UAAS;IACpB;;;;EAEJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBHF0D;AAC/C,YAAwC,qCAAxC,sBAAa,OAAO,EAAC;IAAuC;;AAIxD,MAAP;IACJ;;AAI4C,MAAxC,AAAQ,mBAAK;AAER,uBAAa;AAClB,UAAI,gBAAW;AACX,sBAAI,AAAM,AAAQ,8BAAS,AAAY,0EACnC,AAAQ,AAAQ,gCAAS,AAAY;AAEqB,UAA1D,AAAM,AAAQ,yBAAI,AAAY;AACb,UAAjB,aAAa;AAEiC,UAA9C,AAAQ,AAAQ,2BAAI,AAAY;;AAGzB,sBAAU,AAAM,AAAQ,8BAAS,AAAY;AAMlC,wCAAQ;AACR,oBAAQ,AAAM,KAAD,eAAe,AAAiC,eAA7B,AAAY;AAEjD,iBAAK,AAA6B,wBAAV,cAAN,KAAK;AACI,QAAjC,AAAqB,qBAA3B,KAAK,YAAgC,EAAE;AAET,2BAAmB;AAClD,sBAAG,OAAO;AAMH,UALH,AAAa,wBACT,AAAa,AAAQ,YAAT,kBAAgB,QAAiB;AACzC,0BAAG,AAAa,YAAD;AACiB,cAA5B,0CAAe,YAAY;;;;AAMb,QAA9B,AAAa,YAAD,UAAQ;AACA,QAApB,AAAa,YAAD,MAAM,EAAE;AAEmC,QAAvD,AAAM,KAAD,yBAAuB,eAAc,YAAY;AAEtD,sBAAG;AACW,oBAAU,eAA2B,cAAjB,AAAS;AACvC,cAAG,AAAI,AAAS,GAAV;AAEF,0BAAG,AAAyB,wBAAP,KAAK,aAAW,AAAI,GAAD;AAET,cAA3B,AAAa,YAAD,aAAW;;;;AAKnC,YAAG,UAAU;AACa,gCAAsB;AACa,UAAzD,AAAgB,AAAQ,eAAT,eAAa,AAAY;AACc,UAAtD,AAAgB,AAAQ,eAAT,eAAa,AAAY;AAElB,uBAAa;AACG,UAAtC,AAAO,AAAQ,MAAT,eAAa,AAAY;AACD,UAA9B,AAAgB,eAAD,UAAQ,MAAM;AAEA,UAA7B,AAAM,KAAD,UAAQ,eAAe;;AAKQ,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;;AAII,eAAgB,oBAA0C;AACtD,YAAG,AAAG,EAAD,IAAI;AACsG,UAA3G,WAAU,2BAAgG,AAsErE,kBAtE8B,2BAAe,AAAY,sDAAM;;AAExG,sBAAG,AAAG,AAAQ,EAAT,oBAAkB,AAAY;AAC/B,gBAAO,GAAE;;AAEb,cAAO,AAAmB,oBAAA,qBAAC,AAAG,EAAD;;;AAEjC,UAAG,AAAO,gBAAG;AAC4B,QAArC,eAAS,AAAmB,mBAAA,qBAAC;;AAEjC,YAAO;IACX;;AAGyB,YAAoD,UAAjD,AAAU,4DAAc,qBAAe,cAAN;IAAgB;;AAGnD,YAAA,AAAM,AAAQ,+BAAS,AAAY;IAAW;wBAEvB;AAC1B,sBAAgB;AACX,kBAAQ,AAAM,KAAD,kCAAkB,AAAsB,eAAlB,AAAY;AAUrE,MARF,AAAM,KAAD,WAAS,QAAmB;AAChB,mBAAa,AAAsB,sBAA3B,IAAI;AACZ,uBAAe,AAAY,eAAN,IAAI;AAGtC,YAAG,AAAS,QAAD;AACgB,UAAvB,AAAU,SAAD,OAAK,QAAQ;;;AAI9B,YAAO,UAAS;IACpB;qBAG2C;AACV,uBAAa,AAAM,AAC3C,AAAgE,4CADJ,AAAsB,oBAAb,oBAAW,8BAC5E,QAAmB,WAAoB,qBAAR,OAAO;AAM7C,MAJF,AAAW,UAAD,WAAS,QAAwB;AACvC,yBAAG,QAAQ,EAAI,gBAAgB;AACH,UAAxB,AAAS,QAAD,WAAW;;;IAG/B;;2DAvIoD,SAA4B;IAPnE,gBAAc,kBAAO;IAKlB,eAAS;AAGnB,8DAAM,OAAO,EAAC,YAAY;EAEhC;;;;;;;;;;;;;;;;;;;;;;MARwC,0CAAS;;;MACP,4CAAW;;;;;IA8JxC;;;;;;IAEA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;;;IAhBA,cAA0C,AAKN,kBALD;IAEnC,uBAAgD,AAGZ,kBAHD;IACnC,mBAAgD,AAEZ,kBAFD;IAEnC,kBAAoC;IACpC,wBADoC,AACO,kBAAR;IACnC,yBAFoC,AAEkB,kBAAnB;IAEnC,eAAqB;IACrB,sBAAqB;IAErB,aAAqB;IAErB,oCAA8B;IAE9B,qBAAqB;;EAEE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MApBhB,sDAAU;YAOmB;;;;IAmBpC;;;;;;;;0BAAqB;;EAEA;;;;;;;;;;;;;kBInMgB;AAAY,YAAoC,iCAApC,sBAAa,OAAO,EAAC;IAA+B;cAEtF;AACxB,UAAG,AAAI,GAAD,IAAI,QAAQ,AAAI,GAAD;AACc,QAA/B,AAAQ,AAAQ,gCAAO;AACvB;;AAEoE,MAAxE,AAAQ,AAAO,8BAAC,SAA6B,AAAgB,4DAAT,sBAAgB,GAAG;IAC3E;;AAEoB,uBAAA,AAAQ,AAAQ,qCAAY,YAAW,AAAQ,AAAO,8BAAC,WAAW;IAAE;;AAKhD,MAApC,AAAQ,mBAAK;AAS+B,MAA5C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;;uDA9BgD,SAA4B;IAL/D,gBAAc,kBAAO;AAM5B,0DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;MANoC,sCAAS;;;MACP,wCAAW;;;;;IAkEpC;;;;;;;;0BAAqB;;EAEF;;;;;;;;;;MAJZ,kDAAU;;;;;;;EASA;;;;;;;;;;;;;kBC5DqB;AAAY,YAAqC,kCAArC,sBAAa,OAAO,EAAC;IAAiC;;AAInE,MAArC,AAAsB,sBAA9B,yBAAyC;IAC9C;;AAImD,MAAtC,AAAsB,sBAA9B,yBAAyC;IAC9C;gBAE4B;AAAa,+BAAQ,IAAG,gBAAW;IAAS;;AACpD,wBAAU,AAAsB,sBAA9B;IAAsC;cAEhC;AACxB,UAAG,KAAK,IAAI;AAC4D,QAApE,AAAc,6BAAyB,AAAgB,4DAAT,sBAAgB,KAAK;;IAE3E;;AAEoB,YAAA,AAAc;IAAI;;AAKG,MAArC,AAAQ,mBAAK;AAEb,oBAAG,AAAQ,AAAQ,gCAAS,AAAY;AACd,8BAAsB;AACa,QAAzD,AAAgB,AAAQ,eAAT,eAAa,AAAY;AAElB,4BAAoB;AACG,QAA7C,AAAc,AAAQ,aAAT,eAAa,AAAY;AACD,QAArC,AAAgB,eAAD,UAAQ,aAAa;AAE0B,QAA9D,AAAa,wBAAI,AAAc,AAAU,aAAX,8BAAkB;AACjB,QAA/B,AAAQ,sBAAO,eAAe;;AAGsB,MAAxD,AAAa,wBAAI,AAAQ,AAAU,0CAAO;AACiB,MAA3D,AAAa,wBAAI,AAAQ,AAAa,6CAAO;AAG7C,YAAK;AACY,QAAb,aAAQ;;;AAEM,MAAlB,AAAgB,gBAAA;AAE4B,MAA5C,AAAQ,AAAQ,2BAAI,AAAY;AACc,MAA9C,AAAQ,oBAAM;IAClB;mBAEuC;AACX,MAAxB,AAAQ,oBAAM;AACA,MAAd,AAAQ;IACZ;;AAKa,yBAAe;AAExB,oBAAG,AAAa,YAAD;AAC2B,QAAtC,eAAe,AAAa,YAAD;;AAE/B,YAAO,aAAY;IACvB;;wDAxEiD,SAA4B;IALhE,gBAAc,kBAAO;AAM5B,2DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;MANqC,uCAAS;;;MACP,yCAAW;;;;;IAqGrC;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;;;IAJA,uBAAqB;IACrB,0BAAqB;IACrB,gBAAqB;IAErB,sBAAqB;;EAED;;;;;;;;;;;;;;;;MARb,mDAAU;;;;;;;EAY6B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBCnGN;AAChC;AACjB;AAC4F,QAAxF,WAAqE,mCAA1D,sBAAa,OAAO,EAAC,8DAA8B;;;AAEhE;AACwB,+CAAa,AAAQ,OAAD,eAAe,AAAuB,eAAnB,AAAY;AACD,UAAxE,WAAqD,mCAA1C,sBAAa,UAAU,EAAC;;;;AAEvC,YAAO,SAAQ;IACnB;;AAYuB;IAAY;;AAG/B,UAAG,AAAc,uBAAG;AAC8C,8BAA9D,6BAAgB,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;;AAE1D,0CAAO,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;IACjD;;AAKgC,MAA5B,AAAa,+BAAW;AACR,MAAhB;IACJ;;AAKiC,MAA7B,AAAa,+BAAW;AACR,MAAhB;IACJ;;AAK+B,MAA3B,AAAa,8BAAU;AACP,MAAhB;IACJ;;AAKgC,MAA5B,AAAa,8BAAU;AACP,MAAhB;IACJ;gBAE4B;AAAa,+BAAQ,IAAG,eAAU;IAAS;;AAEnE,YAAO,AAAa;IACxB;iBAE6B;AAAc,gCAAS,IAAG,iBAAY;IAAQ;;;AACtD;iCAAc;IAAQ;;AAGjB,uCAAS,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;AACrE,YAAO,AAAO,OAAD,IAAI,OAAO,AAAO,AAAK,MAAN,mBAAe;IACjD;cAE4B;;AACL,MAAV,uCAAQ,CAAC;AAEI,uCAAS,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;AACT,WAA5D,MAAM;mBAAN,OAAQ,YAAO,AAA6B,kBAAhB,MAAM,EAAC,qBAAgB,AAAE,CAAD;IACxD;;AAEoB,YAAC,AAAa,sBAAG,OAAO,AAAa,AAAM,qCAAS;IAAG;cAE/C;AACD,MAAd,uCAAQ,KAAK;AAC+C,MAArE,AAAa,4BAAQ,AAAmC,kBAAtB,mBAAa,qBAAgB,KAAK;IACxE;;AAK2C,MAAvC,AAAQ,mBAAK;AAES,uBAAiB;AACQ,MAA/C,AAAW,AAAQ,UAAT,eAAa,AAAY;AAEb,0BAAoB;AACS,MAAnD,AAAc,AAAQ,aAAT,eAAa,AAAY;AAEhB,wBAAkB;AACS,MAAjD,AAAY,AAAQ,WAAT,eAAa,AAAY;AAEN,MAA9B,AAAW,UAAD,UAAQ,WAAW;AAEA,MAA7B,AAAQ,sBAAO,aAAa;AACF,MAA1B,AAAQ,sBAAO,UAAU;AAET;AAChB,oBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACgB,QAArD,AAAQ,AAAQ,2BAAI,AAAY;AAEc,QAA9C,yBAA6B;AACmC,QAAhE,AAAuB,AAAQ,sBAAT,eAAa,AAAY;AACc,QAA7D,AAAuB,AAAQ,sBAAT,eAAa,AAAY;AACc,QAA7D,AAAuB,AAAQ,sBAAT,eAAa,AAAY;AAEsB,QAArE,AAAa,wBAAI,AAAuB,AAAU,sBAAX,8BAAkB;AAEnC,qBAAa;AACG,QAAtC,AAAO,AAAQ,MAAT,eAAa,AAAY;AAEM,QAArC,AAAuB,sBAAD,UAAQ,MAAM;AACE,QAAtC,AAAQ,sBAAO,sBAAsB;;AAGgB,MAAzD,AAAa,wBAAI,AAAa,AAAS,8CAAO;AAES,MAAvD,AAAa,wBAAI,AAAa,AAAQ,6CAAO;AAEQ,MAArD,AAAa,wBAAI,AAAa,AAAO,4CAAO;AAEU,MAAtD,AAAa,wBAAI,AAAQ,AAAU,0CAAO;AAE1B,MAAhB;AAQA,YAAK;AACY,QAAb,aAAQ;AACK,QAAb,aAAQ;;;AAEM,MAAlB,AAAgB,gBAAA;AAE4B,MAA5C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;gBAGe;AACK,MAAhB;IACJ;eAGc;AACiC,MAA3C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;cAGa;AACqC,MAA9C,AAAQ,AAAQ,8BAAO,AAAY;IACvC;iBAGgB;AACL,MAAP;IACJ;;AAMoB,MAAhB;AACmB,MAAnB;IACJ;;AAII,oBAAI,AAAa;AAC8B,QAA3C,AAAQ,AAAQ,2BAAI,AAAY;;AAGc,QAA9C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAII,oBAAI,AAAa;AAC+B,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;AAGe,QAA/C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAQM,MAFE,gBAAU,qCAAwB,AAAU,gEAAsB;AAC/C,QAAnB,AAAa;;IAErB;;0DAlNmD,SAA4B;IAPlE,gBAAc,kBAAO;IAKT,sBAAgB;AAGnC,6DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MARuC,yCAAS;;;MACP,2CAAW;;;;;IAuOvC;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;;;IA1BA,cAAQ;IAER,cAAQ;IAER,oBAAc;IAEd,qBAAe;IAEf,qBAAe;IAEf,wBAAgB;IAEhB,6BAAuB;IAEvB,2BAAmB;IAEnB,sBAAgB;IAEhB,iBAAS;IAET,mBAAa;IAEb,oBAAc;IAEd,mBAAa;IAEb,sBAAc;;EAEQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA9Bf,qDAAU;;;;;IAoCpB;;;;;;IAEG;;;;;;;;IAFH,2BAAqB;IAElB,0BAAoB;;EAEA;;;;;;;;;;;;;;;;;;;;ICxRpB;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;;;IATA,mBAAa;IACb,mBAAa;IACb,uBAAiB;IAEjB,oBAAc;IACd,sBAAc;IAEd,iBAAW;IACX,oBAAc;IACd,yBAAmB;;EAEI;;;;;;;;;;;;;;;;;;IAQvB;;;;;;IACA;;;;;;;;IADA,wBAAkB;IAClB,yBAAmB;;EAEE;;;;;;;;;;MALd,yDAAe;;;;;;;;;;kBAsBmB;AAAY,YAAwC,qCAAxC,sBAAa,OAAO,EAAC;IAAuC;;AAQlF,MAAxC,AAAQ,mBAAK;AAES,4CAAc,AAAQ,2BAAc;AAEpD,qBAAW,AAAQ,AAA6B,8CAAZ,wCAAgB,QAAmB,KAAQ,wBAAF,CAAC;AAC9E,qBAAW,AAAQ,AAA6B,8CAAZ,wCAAgB,QAAmB,KAAQ,wBAAF,CAAC;AAEpD,iBAAW,8BAA+B,QAAQ;AAC7D,MAArB,AAAK,IAAD,UAAQ,QAAQ;AAEpB,oBAAI,AAAQ,AAAQ,gCAAS,AAAY;AAEf,qCAAS,AAAS,8BAAc;AAET,QAA7C,wBAAkB,sBAAgB,MAAM,IAAI;AAClB,QAA1B,AAAG,EAAD,UAAQ;AACsC,QAAhD,AAAY,AAAO,WAAR,uBAAqB,EAAE,EAAE,WAAW;AAE/C,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAK,IAAD,YAAS,IAAA,AAAC,CAAA;AAER,8CAAY,AAAI,AAAI,IAAJ,QAAC,CAAC,gBAAgB;AACxD,cAAI,SAAS,IAAI;AAES,yCAAS,AAAS,8BAAc;AAEtD,gBAAG,AAAI,AAAI,AAAO,AAAQ,AAAc,IAAjC,QAAC,CAAC,uCAAkC;AAChB,gCAAc,sBAAgB,AAAI,IAAA,QAAC,CAAC,GAAE;AACvC,cAAtB,AAAG,EAAD,UAAQ,WAAW;;AAGU,YAAnC,AAAI,AAAI,IAAJ,QAAC,CAAC,eAAe,EAAE,EAAE,SAAS;;;;AAKJ,MAA1C,AAAmB,+DAAe;AACU,MAA5C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;sBAI2D,KAAiC;AAEjE,kBAAY;AAEI,MAAvC,AAAM,AAAQ,KAAT,eAAa,AAAY;AACY,MAA1C,AAAM,AAAQ,KAAT,eAAa,AAAY;AACiB,MAA/C,AAAM,AAAQ,KAAT,eAAa,AAAY;AACe,MAA7C,AAAM,AAAQ,KAAT,eAAa,AAAY;AAEC,qBAAe;AACH,MAA3C,AAAS,AAAQ,QAAT,eAAa;AAErB,UAAI,GAAG,IAAI;AACyD,QAAhE,AAAS,QAAD,aAAW,AAAI,AAAQ,GAAT,oBAAkB,AAAY;AAGK,QAAzD,AAAS,AAAS,QAAV,sCAAiB,iBAAW,QAAQ,EAAE,GAAG,EAAE;YAEhD,KAAI,OAAO,IAAI,kBAAQ,AAAQ,OAAD;AAG4B,QAA7D,AAAS,AAAS,QAAV,sCAAiB,iBAAW,QAAQ,EAAE,MAAM,OAAO;;AAGzC,MAAtB,AAAM,KAAD,UAAQ,QAAQ;AACrB,YAAO,MAAK;IAChB;iBAQmD,UAAoC,KAAiC;AAEzF,MAA3B,AAAQ,mBAAK,AAAa,mBAAL,GAAG;AAExB,UAAI,GAAG,IAAI;AAEP,cAAO,SAAiB;AACiC,UAArD,AAAQ,mBAAK,AAAuC,gCAAlB,AAAS,QAAD;AAE1C,wBAAI,AAAS,QAAD;AACgC,YAAxC,AAAI,AAAQ,GAAT,eAAa,AAAY;;AAGe,YAA3C,AAAI,AAAQ,GAAT,kBAAgB,AAAY;AAC/B,gBAAG,yBAAmB,QAAQ,AAAgB,oCAAc,2BAA2B;AAC3D,cAAxB,AAAQ,mBAAK;AACqC,cAAjC,AAAwB,uCAAjB;;;;;AAMxC,UAAI,OAAO,IAAI,kBAAQ,AAAQ,OAAD;AAE1B,cAAO,SAAiB;AAEJ;AAChB,wBAAI,AAAS,QAAD;AACR,qBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAQ,OAAD,YAAS,IAAA,AAAC,CAAA;AACwC,mBAAzE,oBAAK,AAAO,AAAI,AAAoB,OAAxB,QAAC,CAAC,gBAAgB,oBAAoB;AACf,cAAlB,AAAW,uCAAJ,EAAE;AACqB,cAA/C,AAAO,AAAI,AAAQ,OAAZ,QAAC,CAAC,gBAAc,AAAY;;;AAIvC,qBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAQ,OAAD,YAAS,IAAA,AAAC,CAAA;AACwC,mBAAzE,oBAAK,AAAO,AAAI,AAAoB,OAAxB,QAAC,CAAC,gBAAgB,oBAAoB;AACb,cAApB,AAAW,uCAAJ,EAAE;AACwB,cAAlD,AAAO,AAAI,AAAQ,OAAZ,QAAC,CAAC,mBAAiB,AAAY;;;;;AAKtD,YAAO;IACX;;2DArIoD,SAA6B;IAPpE,gBAAc,kBAAO;IAKjB;AAGX,8DAAM,OAAO,EAAE,YAAY;AAEtB,IAAP;EACJ;;;;;;;;;;;;;;;;MATwC,0CAAS;;;MACP,4CAAW;;;;;;;ECjC5B;;;;;;IAIK;;;;;;;;IACA;;EAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBAqBuB;AAAY,YAA2C,wCAA3C,sBAAa,OAAO,EAAC;IAA6C;;AAE9G,YAAA,AAAQ,AAAQ,iCAAS,AAAY;IAAW;eAE9C;AACmD,MAA1E,AAAM,sBAAQ,QAA+B,OAAQ,AAAI,GAAD,UAAU,OAAO;AACzE,UAAG,oBAAc;AACc,QAA3B,AAAW,0BAAS,OAAO;;IAEnC;;AAGwC,iBAAO;AAC3C,eAAQ,UAAU,GAAE,AAAQ,OAAD,gBAAG,AAAK,IAAD,YAAS,UAAA,AAAO,OAAA;AAC9C,YAA4B,YAAzB,AAAI,AAAU,IAAV,QAAC,OAAO,cAAgB;AAC3B,gBAAO;;;AAGf,YAAO;IACX;;AAGI,UAAG,AAAU,mBAAG;AACwF,QAApG,kBAAgB,gEAA6D,cAAM,kBAAY;;AAEnG,YAAO,AAAU;IACrB;;AAGI,UAAG,AAAY,qBAAG;AAC6F,QAA3G,oBAAkB,mEAAgE,cAAM,oBAAc;;AAE1G,YAAO,AAAY;IACvB;;AAGwC,iBAC5B,sCAAU,AAAM,oBAAM,QAA+B,OAAQ,AAAI,GAAD;AAExE,YAAO,KAAI;IAEf;;AAM+C,MAA3C,AAAQ,mBAAK;AAE+B,MAA5C,AAAQ,AAAQ,2BAAI,AAAY;IAEpC;;AAGgC,qBAAW,AAAQ,AAC1C,AAAmD,8CADQ,AAAqB,eAAjB,AAAY,8EACvE,QAAO,WAAoB,oBAAR,OAAO;AAEgE,MAAnG,AAAS,QAAD,eAAa,QAAuB,WAAY,AAAQ,AAAQ,OAAT,oBAAkB,AAAY;AAEzD,iBAAW;AAO7C,MALF,AAAS,QAAD,WAAU,QAAuB;AAEP,qBAAiC,8CAAO,GAAG;AACjD,QAAf,kEAAQ,MAAM;AACP,QAAhB,AAAK,IAAD,OAAK,MAAM;;AAGnB,YAAO,KAAI;IACf;;AAGI,UAAG,AAAY,qBAAG;AAEQ,sCAAM,AAAQ,2BAAc,AAAsB,eAAlB,AAAY;AAClE,YAAG,GAAG,IAAI;AAC2C,UAAjD,oBAAsC,8CAAO,GAAG;AACnB,UAApB,kEAAQ;;;AAIzB,YAAO;IACX;;AAGI,UAAG,oBAAc;AACiB,QAA9B,AAAW,0BAAS;;IAE5B;;AAGI,UAAG,mBAAa,kBAAQ,AAAU;AACY,QAA1C,AAAU,oBAAQ;;IAE1B;sBAGmD;AAC/C,UAAG,qBAAe,kBAAQ,AAAY;AACgB,QAAlD,AAAY,sBAAQ,gDAAyB,GAAG;;IAExD;;8DA3GuD,SAA6B;IAVvE,gBAAc,kBAAO;IAKV;IAEgB;IACG;AAGrC,iEAAM,OAAO,EAAE,YAAY;AAEtB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAZ2C,6CAAS;;;MACP,+CAAW;;;;;;;;;;;;;;IA0H3C;;;;;;IAEA;;;;;;IACA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;;;IAbA,eAAe;IAEf,qBAAe;IACf,sBAAe;IAEf,aAAO;IAEP,sBAAgB;IAEhB,kBAAW;IACX,uBAAiB;IAEjB,qBAAc;IACd,0BAAmB;;EAEU;;;;;;;;;;;;;;;;;;;IAQ7B;;;;;;IACA;;;;;;;;IADA,yBAAmB;IACnB,0BAAmB;;EAEQ;;;;;;;;;;MALpB,+DAAe;;;;;;;;;;;;;kBA4ByB;AAAY,YAA8C,2CAA9C,sBAAa,OAAO,EAAC;IAAmD;;AAI5I,UAAG,iBAAW;AACV,cAAO;;AAGX,eAAY,WAAiC;AACzC,YAAG,OAAO,IAAI;AACV,wBAAG,AAAQ,AAAQ,OAAT;AACN,kBAAO,QAAO;;AAElB,gBAAO,AAAU,WAAA,qBAAC,AAAQ,OAAD;;AAEuE,QAApG,WAAU,2BAAc,AAA2E,8EAAT,OAAO;;;AAE/E,uCAAS,AAAU,UAAA,qBAAC;AACL,MAArC,AAAQ,mBAAK,AAAuB,4BAAP,MAAM;AACU,MAA7C,gBAA+B,2CAAO,MAAM;AACC,MAA7C,AAAQ,mBAAK,AAA+B,mCAAR;AAEpC,YAAO;IACX;;AAKmB;IAAO;eAEC;AACvB,UAAG,6BAAuB;AACe,QAArC,AAAoB,oCAAU,OAAO;AAClB,QAAnB,iBAAW,OAAO;;IAE1B;;AAGI,YAAO,AAAoB,8BAAG,OAAO,AAAoB,oCAAU;IACvE;;AAKkD,MAA9C,AAAQ,mBAAK;AAEb,oBAAG,AAAO;AAEgB,4CAAY,AAAQ,2BAAc;AACxD,YAAG,SAAS,IAAI;AACI,uCAAK,AAAQ,2BAAc,AAA+B,eAA3B,AAAY;AAChD,4CAA+B,AAAG,EAAD,IAAI;AAErB,UAA3B,AAAG,EAAD,IAAC,OAAH,KAAW,wBAAR;AACsC,UAAzC,AAAG,AAAQ,EAAT,eAAa,AAAY;AAEhB,wCAA2B,AAAQ,AAAwC,2BAA1B,AAAwB,eAApB,AAAY,+DAAa;AAClE,4BAAc;AAErC,cAAG,uBAAuB;AACA,YAAtB,AAAG,EAAD,UAAQ,WAAW;;AAMvB,UAJF,AAAmB,AAAmB,2CAAJ,EAAE,kBAAQ,QAAC;AACzC,gBAAG,2BAA2B;AACS,cAAnC,AAAQ,0BAAa,EAAE,EAAE,SAAS;;;;;AAOlD,qBAAI,AAAQ,AAAQ,gCAAS,AAAY;AAI9B,QAHP,AAAa,wBACT,AAAQ,AAAQ,8BAAO,QAAC;AACQ,UAA5B,AAAO,6BAAgB;;;AAIS,MAA5C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;;AAKI,qBAAI,AAAQ;AACR,cAAO;;AAEX,UAAG,mBAAa;AACZ,cAAO;;AAGW,6CAAe,AAAQ,2BAAc,AAA+B,eAA3B,AAAY;AAE3E,UAAG,AAAa,YAAD,IAAI;AACf,cAAO;;AAGsF,MAAjG,kBAA6B,2DAAO,AAAa,YAAD,eAAe,AAAgC,eAA5B,AAAY;AACpD,MAAlB,2DAAQ;AACjB,YAAO;IACX;;AAMqB,uCAAQ,AAAQ,2BAAc,AAAwB,eAApB,AAAY;AAC/B,MAAhC,AAAM,KAAD,IAAC,OAAN,QAAc,0BAAR;AAEiC,MAAvC,AAAM,AAAQ,KAAT,eAAa,AAAY;AACY,MAA1C,AAAM,AAAQ,KAAT,eAAa,AAAY;AACiB,MAA/C,AAAM,AAAQ,KAAT,eAAa,AAAY;AACO,MAArC,AAAM,AAAQ,KAAT,eAAa,AAAY;AAEL,kDAAW,AAAM,KAAD,eAAe,AAAgC,eAA5B,AAAY;AAC7D,oCAA0B,AAAS,QAAD,IAAI;AAEN,MAA3C,AAAS,QAAD,IAAC,OAAT,WAAiB,kCAAR;AAEuC,MAAhD,AAAS,AAAQ,QAAT,eAAa,AAAY;AAEjC,UAAI,gBAAW;AACX,YAAG,uBAAuB;AAC8C,UAApE,AAAS,QAAD,aAAW,AAAQ,AAAQ,gCAAS,AAAY;;AAEyD,oBAAjH,AAAS,QAAD,cAAW,AAAQ,AAAQ,2BAAI,AAAY,kEAAe,AAAQ,AAAQ,8BAAO,AAAY;;AAatG,QAVH,AAAa,wBAAK,AAAS,AAAS,QAAV,mBAAkB,QAAiB;AAC9C,wBAAU,AAAS,QAAD;AACV,UAAnB,iBAAW,OAAO;AAElB,wBAAG,AAAQ,AAAQ,gCAAS,AAAY;AACX,YAAzB,uBAAiB,OAAO;;AAEI,YAA5B,AAAO;;AAEc,UAAzB,AAAO;;AAGX,sBAAI,AAAQ,AAAQ,qCAAY,AAAU;AACoB,UAA1D,AAAS,QAAD,UAAQ,AAAQ,AAAO,8BAAC,AAAU;;AAE9C,sBAAI,AAAQ,AAAQ,qCAAY,AAAU;AACsB,UAA5D,AAAS,QAAD,WAAS,AAAQ,AAAO,8BAAC,AAAU;;;AAInD,UAAG,uBAAuB;AACA,QAAtB,AAAM,KAAD,UAAQ,QAAQ;;AAEzB,YAAO,MAAK;IAChB;iBAG2B;AAEvB,oBAAI,OAAO;AACqC,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;AAGe,QAA/C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;uBAEiC;AACN,MAAvB,AAAO,qBAAS,OAAO;IAC3B;;iEA3K0D,SAA6B;IAX1E,gBAAc,kBAAO;IAMb;IAGJ;AAGX,oEAAM,OAAO,EAAE,YAAY;EACjC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAX8C,gDAAS;;;MACP,kDAAW;;;;;IAsN9C;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IAEA;;;;;;IAEA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;;;IAhBA,oBAAe;IACf,oBAAe;IACf,gBAAe;IAEf,sBAAe;IACf,sBAAe;IAEf,cAAO;IACP,YAAO;IAEP,uBAAgB;IAEhB,mBAAW;IACX,wBAAiB;IAEjB,sBAAc;IACd,2BAAmB;;EAEO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQ1B;;;;;;IACA;;;;;;;;IADA,0BAAmB;IACnB,2BAAmB;;EAEK;;;;;;;;;;;;MALjB,4DAAe;;;;;;;;;;;;;;;;;;kBCtYoB;AAAY,YAAyC,sCAAzC,sBAAa,OAAO,EAAC;IAAyC;;AAG1G;IAAY;;AAG/B,UAAG,AAAc,uBAAG;AAC8C,8BAA9D,qBAAgB,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;;AAE1D,YAAO;IACX;;AAMgC,MAA5B,AAAa,6BAAW;AACR,MAAhB;IACJ;;AAKiC,MAA7B,AAAa,6BAAW;AACR,MAAhB;IACJ;;AAK+B,MAA3B,AAAa,4BAAU;AACP,MAAhB;IACJ;;AAKgC,MAA5B,AAAa,4BAAU;AACP,MAAhB;IACJ;gBAE4B;AAAa,+BAAQ,IAAG,eAAU;IAAS;;AACnD,YAAA,AAAa;IAAO;iBAEX;AAAc,gCAAS,IAAG,iBAAY;IAAQ;;AACtD,YAAA,AAAa;IAAQ;;AAKG,MAAzC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AAEX,sBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACgB,UAArD,AAAQ,AAAQ,2BAAI,AAAY;AAEV,uCAA6B;AACa,UAAhE,AAAuB,AAAQ,sBAAT,eAAa,AAAY;AACiB,UAAhE,AAAuB,AAAQ,sBAAT,eAAa,AAAY;AACc,UAA7D,AAAuB,AAAQ,sBAAT,eAAa,AAAY;AAEsB,UAArE,AAAa,wBAAI,AAAuB,AAAU,sBAAX,8BAAkB;AAEnD,uBAAa;AACmB,UAAtC,AAAO,AAAQ,MAAT,eAAa,AAAY;AAEM,UAArC,AAAuB,sBAAD,UAAQ,MAAM;AACE,UAAtC,AAAQ,sBAAO,sBAAsB;;AAGgB,QAAzD,AAAa,wBAAI,AAAa,AAAS,8CAAO;AAEU,QAAxD,AAAa,wBAAI,AAAa,AAAQ,6CAAQ;AAEQ,QAAtD,AAAa,wBAAI,AAAa,AAAO,4CAAQ;AAES,QAAtD,AAAa,wBAAI,AAAQ,AAAU,0CAAO;AAE1B,QAAhB;AAC4C,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;gBAGe;AACK,MAAhB;IACJ;eAGc;AAEiC,MAA3C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;cAGa;AAEqC,MAA9C,AAAQ,AAAQ,8BAAO,AAAY;IACvC;iBAGgB;AACL,MAAP;IACJ;;AAIoB,MAAhB;AACmB,MAAnB;IACJ;;AAII,oBAAI,AAAc;AAC6B,QAA3C,AAAQ,AAAQ,2BAAI,AAAY;;AAGc,QAA9C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAII,oBAAI,AAAc;AAC8B,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;AAGe,QAA/C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AASM,MAFE,gBAAU,qCAAwB,AAAU,kEAAsB;AAC/C,QAAnB,AAAa;;IAErB;;4DAjJqD,SAA4B;IAPpE,gBAAc,kBAAO;IAKjB,sBAAgB;AAG3B,+DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAR4C,2CAAS;;;MACT,6CAAW;;;;;IAuK1C;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;IATA,eAAQ;IACR,2BAAmB;IACnB,8BAAuB;IACvB,2BAAmB;IACnB,uBAAgB;IAChB,iBAAS;IACT,oBAAa;IACb,qBAAc;IACd,oBAAa;IACb,sBAAc;;EAGU;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAdjB,uDAAU;;;;;IAoBpB;;;;;;;;gCAAqB;;EAEI;;;;;;;;;;;;;;;;;;;kBC/KoB;AAAY,YAAyC,sCAAzC,sBAAa,OAAO,EAAC;IAAyC;;AAGvG,uCAAS,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;AACrE,YAAO,AAAO,OAAD,IAAI,OAAO,AAAO,AAAK,MAAN,mBAAe;IACjD;cAE4B;;AACL,MAAV,uCAAQ,CAAC;AAEI,uCAAS,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;AACT,WAA5D,MAAM;mBAAN,OAAQ,YAAO,AAA6B,kBAAhB,MAAM,EAAC,qBAAgB,AAAE,CAAD;IACxD;;AAG0B,sCAAQ,AAAQ,2BAAc,AAAsB,eAAlB,AAAY;AAEpE,YAAO,AAAM,MAAD,IAAI,OAAO,AAAM,AAAK,KAAN,mBAAe;IAC/C;cAE4B;;AACL,MAAV,uCAAQ,CAAC;AAEI,sCAAQ,AAAQ,2BAAc,AAAsB,eAAlB,AAAY;AACpE,UAAG,KAAK,IAAI;AACF,wBAAY,kBAAa,KAAK,EAAC;AAGJ,aAAjC,KAAK;qBAAL,OAAO,YAAO,AAAU,SAAD,QAAQ,CAAC;;IAExC;;AAO6C,MAAzC,AAAQ,mBAAK;AAGb,YAAK;AACY,QAAb,aAAQ;AACK,QAAb,aAAQ;;;AAEM,MAAlB,AAAgB,gBAAA;AAE4B,MAA5C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;;4DArDqD,SAA4B;IALpE,gBAAc,kBAAO;AAM5B,+DAAM,OAAO,EAAC,YAAY;AAErB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;MAN2C,6CAAW;;;;;IAsFzC;;;;;;IAEA;;;;;;IACA;;;;;;;;IAHA,sBAAc;IAEd,eAAQ;IACR,aAAO;;EAEiB;;;;;;;;;;;;;;;;EAOF;;;;;MAFf,0DAAe;;;;;;;ECxGvC;;;;;MAHqB,4CAAK;;;MACL,6CAAM;;;MACN,4CAAK;;;;;;;;;IAMZ;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;IAHA,iBAAW;IACX,eAAS;IACT,kBAAY;IACZ,eAAS;;EAEQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBAqDwB;AAAY,YAAqC,kCAArC,sBAAa,OAAO,EAAC;IAAiC;;AAIjH,YAAO;IACX;;AAII,YAAO;IACX;;AAII,YAAO;IACX;;AAII,YAAO;IACX;;AAGI,YAAO;IACX;;IAIA;;AAIqB,MAAX;AAC0D,MAAhE,AAAM,sBAAQ,QAAyB,OAAQ,AAAI,GAAD;IACtD;;AAI0B,6CAAe,AAAQ,2BAAc,AAA4B,eAAxB,AAAY;AAEzB,MAAlD,AAAQ,AAAQ,+BAAO,AAAY;AACmB,MAAtD,AAAY,AAAQ,mCAAO,AAAY;AAGvC,oBAAI,AAAQ,AAAQ,iCAAS,AAAY;AACO,QAA5C,AAAQ,6BAAa,eAAe;AACc,QAAlD,AAAa,YAAD,gBAAc,iBAAiB;;AAGA,QAA3C,AAAQ,6BAAa,eAAe;AACe,QAAnD,AAAa,YAAD,gBAAc,iBAAiB;;IAEnD;;;AASyC,MAArC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AAEU,wBAAgB;AACO,QAA5C,AAAU,AAAQ,SAAT,eAAa,AAAY;AAE5B,6BAAiB,AAAQ,2BAAc;AAEE,QAA/C,AAAQ,AAAO,mCAAa,SAAS,EAAE;AACvB,QAAhB,AAAQ;AACiB,QAAzB,AAAU,SAAD,UAAQ;AAEM,aAAvB,cAAc;qBAAd,OAAgB;AAEK,6BAAiB,AAAQ;AAkB5C,QAhBF,AAAe,cAAD,WAAS,QAAO;AAE1B,cAAS,gBAAN,KAAK;AAEJ,0BAAI,AAAM,AAAQ,KAAT,oBAAkB,AAAY;AACpB,8BAAf,oBAAU,KAAK;;AAGnB,0BAAI,AAAM,AAAQ,KAAT,oBAAkB,AAAY;AACpB,8BAAf,oBAAU,KAAK;;AAGnB,0BAAI,AAAM,AAAQ,KAAT,oBAAkB,AAAY;AACnB,+BAAhB,oBAAW,KAAK;;;;AAc1B,QATE,AAAO,AAAW,gCAAQ,QAAiB;AAC3C,cAAS,4BAAN,KAAK,eAA+B,AAAM,KAAD;AAGN,YAAlC,AAAQ,AAAM,iCAAY;AAGxB,YAFE,AAAO,oCAAuB,QAAC;AACH,cAA5B,AAAQ,AAAM,iCAAY;;;;AAKtC,YAAI,iBAAW;AAC+C,0BAA1D,oBAAU,AAAQ,4BAAc,AAAI,mBAAE,AAAY;;AAGlD,mBAAO,AAAM;AAEjB,YAAI,eAAU;AACV,wBAAI,AAAO,AAAQ,+BAAS,AAAY;AACjB,YAAnB,OAAO,AAAM;gBAEZ,eAAI,AAAO,AAAQ,+BACpB,AAAY;AACU,YAAtB,OAAO,AAAM;AAEwD,YAArE,AAAO,+BAAiB,2BAAiB;AAIO,YADhD,AAAa,wBACT,AAAO,AAAQ,uCAAQ;gBAG1B,eAAI,AAAO,AAAQ,+BAChB,AAAY;AACO,YAAnB,OAAO,AAAM;AAC0C,YAAvD,AAAU,AAAQ,SAAT,eAAa,AAAY;;AAG1C,cAAI,AAAK,IAAD,IAAI,AAAM;AACgC,YAA9C,AAAO,AAAQ,0BAAI,AAAY;AAC/B,gBAAI,eAAU;AACoC,cAA9C,AAAO,AAAQ,0BAAI,AAAY;;gBAGlC,KAAI,AAAK,IAAD,IAAI,AAAM,8CAAU,AAAK,IAAD,IAAI,AAAM;AACM,YAAjD,AAAO,AAAQ,6BAAO,AAAY;AAElC,gBAAI,eAAU;AACuC,cAAjD,AAAO,AAAQ,6BAAO,AAAY;;gBAGrC,KAAI,AAAK,IAAD,IAAI,AAAM;AAOsC,YADrD,AAAa,wBACT,AAAQ,AAAS,yCAAQ;AACJ,YAAzB,4BAAsB;;;AAKlC,YAAI,eAAU;AAEM,iDAAe,AAAQ,2BAAc,AAA4B,eAAxB,AAAY;AAErE,cAAI,AAAa,YAAD,IAAI;AAEmB,YAAnC,eAAmB;AACgC,YAAnD,AAAa,YAAD,gBAAc,iBAAiB;AACA,YAA3C,AAAa,YAAD,gBAAc,QAAQ;AACQ,YAA1C,AAAa,YAAD,gBAAc,YAAY;AACU,YAAhD,AAAa,AAAQ,YAAT,eAAa,AAAY;AAEf,uDAAuB,AAAS,8BAAc;AACtB,YAA9C,AAAiB,AAAQ,gBAAT,eAAa,AAAY;AACO,YAAhD,AAAiB,gBAAD,eAAa,AAAU;AACF,YAArC,AAAa,YAAD,UAAQ,gBAAgB;;AAGxC,wBAAI,AAAQ,AAAQ,iCAAS,AAAY;AAEgB,YAArD,AAAa,AAAQ,YAAT,eAAa,AAAY;gBAClC,eAAI,AAAQ,AAAQ,iCAAS,AAAY;AAES,YAArD,AAAa,AAAQ,YAAT,eAAa,AAAY;;AAIe,UADxD,AAAa,wBACT,AAAa,AAAQ,YAAT,4BAAiB;AAGyB,UAD1D,AAAa,wBACT,AAAa,AAAU,YAAX,8BAAmB;AAKQ,UAA3C,AAAQ,AAAQ,2BAAI,AAAY;AAIhC,wBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACe,YAApD,AAAO,yBAAa,YAAY,EAAE,AAAO;;AAGE,YAA3C,AAAQ,0BAAa,YAAY,EAAE;;AAOrC,UAHF,AAAQ,AAA8C,8CAA7B,AAA2B,eAAvB,AAAY,gEAAqB,QAAmB;AAElC,YAD3C,AAAa,wBACT,AAAQ,AAAQ,OAAT,4BAAiB;;AAGX,2BAAiB;AACQ,UAA9C,AAAW,AAAQ,UAAT,eAAa,AAAY;AACT,UAA1B,AAAQ,sBAAO,UAAU;AAE0C,UAAnE,AAAa,wBAAI,AAAW,AAAQ,UAAT,4BAAiB;AACpB,UAAxB,oBAAc,UAAU;AAEuB,UAA/C,AAAQ,AAAU,2CAAO;AACkB,UAA3C,AAAQ,6BAAa,eAAe;;AAK0B,QAAlE,8BAA4B,AAAO,uBAAW,AAAU;AACO,QAA/D,AAAsB,wCAAa,QAAC,KAAM;AACtB,QAApB;AAGA,YAAI,eAAU,QAAQ,eAAU;AACa,UAAzC,AAAQ,AAAQ,2BAAI,AAAY;AAEX,6BAAmB;AACW,UAAnD,AAAa,AAAQ,YAAT,eAAa,AAAY;AACI,UAAzC,AAAO,yBAAa,YAAY,EAAE;AACnB,UAAf,AAAO;AAEc,2BAAiB;AACY,UAAlD,AAAW,AAAQ,UAAT,eAAa,AAAY;AACoB,UAAvD,AAAW,AAAQ,UAAT,eAAa,AAAY;AAEjB,+BAAqB,AAAS,8BAAc;AAClB,UAA5C,AAAe,AAAQ,cAAT,eAAa,AAAY;AACK,UAA5C,AAAe,cAAD,UAAQ,AAAU;AACC,UAAjC,AAAW,UAAD,UAAQ,cAAc;AAK7B,UAHH,AAAa,wBACT,AAAW,AAAQ,UAAT,kBAAiB,QAAsB;;AACD,iBAAhD;YAAO,kBAAW,aAAX,gCAAc,AAAU;;AAGd,4BAAkB;AACY,UAAnD,AAAY,AAAQ,WAAT,eAAa,AAAY;AACqB,UAAzD,AAAY,AAAQ,WAAT,eAAa,AAAY;AAElB,gCAAsB,AAAS,8BAAc;AAClB,UAA7C,AAAgB,AAAQ,eAAT,eAAa,AAAY;AACK,UAA7C,AAAe,cAAD,UAAQ,AAAU;AACG,UAAnC,AAAY,WAAD,UAAQ,eAAe;AAK/B,UAHH,AAAa,wBACT,AAAY,AAAQ,WAAT,kBAAiB,QAAsB;;AACF,iBAAhD;YAAO,kBAAW,aAAX,gCAAc,AAAU;;AAGJ,UAA/B,AAAa,YAAD,UAAQ,UAAU;AACH,UAA3B,AAAa,YAAD,UAAQ;AACY,UAAhC,AAAa,YAAD,UAAQ,WAAW;AAK/B,gBAAK;AACD,gBAAsB,aAAlB,AAAO,4BAAa;AACyB,cAA7C,AAAW,AAAQ,UAAT,eAAa,AAAY;;AAGa,cAAhD,AAAW,AAAQ,UAAT,kBAAgB,AAAY;;AAG1C,gBAAsB,aAAlB,AAAO,4BAAgC,aAAnB,AAAO,0CAAc,AAAO;AACF,cAA9C,AAAY,AAAQ,WAAT,eAAa,AAAY;;AAGa,cAAjD,AAAY,AAAQ,WAAT,kBAAgB,AAAY;;;;AAE9C;AAE0E,UAD3E,AAAa,wBACT,AAAO,AAAS,8BAAQ,QAAiB,SAAU,AAAgB,gBAAA;AAErD,UAAlB,AAAgB,gBAAA;AAGV,4BAAc;AACpB,mBAAK;AAED,gBAAI,WAAW,IAAI;AACK,cAApB,AAAY,WAAD;AACO,cAAlB,cAAc;;AAKhB,YAHF,cAAkB,gBAAU,qCAAuB,AAAU,0DAAgB;AACvD,cAAlB,AAAgB,gBAAA;AACE,cAAlB,cAAc;;;;AAKuC,UAD7D,AAAa,wBACL,AAAO,AAAS,8BAAO,QAAC,KAAM,AAAmB,mBAAA;AAEzD,wBAAI,AAAO,AAAQ,+BAAS,AAAY;AACgB,YAApD,AAAO,AAAQ,0BAAI,AAAY;;AAIX,qBAAO,AAAO,6CAAiB,AAAI,mBAAE,AAAY;AACjD,uBAAS,AAAQ,8CAAiB,AAAI,mBAAE,AAAY;AAG5E,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAK,IAAD,YAAS,IAAA,AAAC,CAAA;AAMzB,YALL,AAAM,kBACE,+DAAkB,AAAI,IAAA,QAAC,CAAC,IACxB,AAAK,AAAiE,IAAlE,2BAAK,QAAmB,WAAoB,sBAAR,OAAO,4CAC/C,AAAO,AAA+D,MAAhE,yBAAK,QAAmB,WAAoB,oBAAR,OAAO,0CACjD;;;AAK4B,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;4BAGyC;AAErC,oBAAG,AAAO,AAAQ,+BAAS,AAAY;AACnC;;AAGO,0BACgD,WAAtD,AAAQ,AAAQ,gCAAS,AAAY,yEAClC,AAAQ,AAAQ,gCAAS,AAAY;AAE7C,UAAsB,aAAlB,AAAQ,4BAAY,gBAAM,AAAO,AAAQ,+BAAS,AAAY;AAChB,QAA9C,AAAO,AAAQ,0BAAI,AAAY;AACW,QAA1C,AAAO,AAAQ,0BAAI,AAAY;AACa,QAA5C,AAAO,AAAQ,0BAAI,AAAY;AAE/B,YAAI,aAAa;AACgC,UAA7C,AAAQ,AAAQ,4BAAI,AAAY;;YAGnC,KAAsB,aAAlB,AAAQ,6BAAa,eAAK,AAAO,AAAQ,+BAAS,AAAY;AAClB,QAAjD,AAAO,AAAQ,6BAAO,AAAY;AACW,QAA7C,AAAO,AAAQ,6BAAO,AAAY;AACU,QAA5C,AAAO,AAAQ,0BAAI,AAAY;AAE/B,YAAI,aAAa;AACgC,UAA7C,AAAQ,AAAQ,4BAAI,AAAY;;;IAG5C;4BAMmD;AAE/C,UAAI,AAAM,AAAQ,KAAT,6BACD,AAAO,AAAQ,+BAAS,AAAY;AAC1B,QAAd;;IAER;;AAKI,oBAAI,AAAsB;AAC0B,QAAhD,AAAQ,AAAQ,2BAAI,AAAY;AAEhC,YAAI,iBAAW;AACgC,UAA3C,AAAQ,6BAAa,eAAe;;;AAIW,QAAnD,AAAQ,AAAQ,8BAAO,AAAY;AAGnC,YAAI,iBAAW;AACuC,UAAlD,AAAQ,AAAQ,+BAAO,AAAY;AACkB,UAArD,AAAW,AAAQ,iCAAO,AAAY;AAEtC,wBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACO,YAA5C,AAAQ,6BAAa,eAAe;;;;IAIpD;2BAK0C;AACtC,UAAI,KAAK,IAAI,QAAc,iBAAN,KAAK;AAEtB,YAAI,AAAM,AAAQ,KAAT,mBAA6C,AAAM,AAAQ,KAAT;AAEjC,UAAtB,AAAM,KAAD;;AAIL;;;AAIM,MAAd;IACJ;oBAGwC;AACa,MAAjD,AAAO,AAAQ,6BAAO,AAAY;AACmB,MAArD,AAAW,AAAQ,iCAAO,AAAY;IAC1C;kCAGiD;AAEE,MAA/C,AAAO,AAAQ,6BAAO,AAAY;IACtC;0BAG8C;AAE1C,oBAAI,AAAO,AAAQ,+BAAS,AAAY;AACS,QAA7C,AAAO,AAAQ,6BAAO,AAAY;AACU,QAA5C,AAAO,AAAQ,0BAAI,AAAY;;IAEvC;qBAK0B;AAEtB,eAAS,IAAI,GAAG,AAAE,CAAD,4BAAU,WAAP,MAAM,eAAS,IAAA,AAAC,CAAA;AACe,QAA7B,WAAR,WAAJ,WAAN,MAAM,WAAC,CAAC,2BAAiB,AAAY;;IAE7C;uBAK4B;AAExB,eAAS,IAAI,GAAG,AAAE,CAAD,4BAAU,WAAP,MAAM,eAAS,IAAA,AAAC,CAAA;AACe,QAA7B,WAAR,WAAJ,WAAN,MAAM,WAAC,CAAC,2BAAiB,AAAY;;IAE7C;;wDAhdiD,SAA4B;IAjBhE,gBAAc,kBAAO;IAMlB,gBAAU;IACV,gBAAU;IACV,gBAAU;IACV,iBAAW;IACX,oBAAc;IAEX,8BAAwB;IAGb,cAAY;AAGpC,2DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAlBqC,uCAAS;;;MACP,yCAAW;;;MACjB,mCAAK;;;;;;;;;;IAmed;;;;;;IACM;;;;;;IACF;;;;;;IACP;;;;;;IAOU;;;;;;;AA0DzB,MAFF,AAAa,4BAAQ,QAA0B;;AAC3B,aAAhB,MAAM;qBAAN,OAAQ;;AAEQ,MAApB,AAAa;IACjB;;mDApDuB,KAAU,MAAW,QAAa;IAR1B,qBAAmB;IAQ3B;IAAU;IAAW;IAAa;AAErD,UAAK;AAEY,uBAAa,AAAI,AAAU,6BAAC;AACnC,iBAAO,AAAW,AAAU,UAAX,SAAO,YAAK;AAE7B,kBAAQ,AAAO,AAAQ,kCAAc,AAAI,mBAAE,IAAI;AAC1B,MAA3B,AAAO,4BAAe;AACS,MAA/B,AAAO,8BAAiB;AAEc,MAAtC,AAAI,AAAQ,uBAAI,AAAY;AACY,MAAxC,AAAM,AAAQ,KAAT,eAAa,AAAY;;;AAGlC,QAAI,YAAO;AACP,oBAAI,AAAO,AAAO,AAAQ,sCAAS,AAAY;AAErB,8BAAsB;AACa,QAAzD,AAAgB,AAAQ,eAAT,eAAa,AAAY;AACiB,QAAzD,AAAgB,AAAQ,eAAT,eAAa,AAAY;AAElB,qBAAa;AACG,QAAtC,AAAO,AAAQ,MAAT,eAAa,AAAY;AACD,QAA9B,AAAgB,eAAD,UAAQ,MAAM;AACF,QAA3B,AAAI,kBAAO,eAAe;;AAG9B,qBAAK,AAAO,AAAO,AAAQ,sCAAS,AAAY;AASrC,QARP,AAAa,wBACT,AAAI,AAAQ,0BAAO,QAAsB;AACrC,cAAI,AAAI,AAAU,AAAS,6BAAR,qBAAmB;AACZ,YAAtB,AAAM,KAAD;AACkB,YAAvB,AAAM,KAAD;AAEO,YAAZ,AAAU,UAAA;;;;;EAOlC;;;;;;;;;;;;;;;;;MAvDuC,4CAAW;;;;;IAmFrC;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;;;IA5CA,kBAAY;IACZ,eAAS;IACT,eAAS;IACT,gBAAU;IACV,mBAAa;IAEb,aAAO;IAEP,2BAAmB;IACnB,2BAAmB;IACnB,iBAAS;IACT,+BAAuB;IAEvB,sBAAgB;IAChB,yBAAmB;IACnB,sBAAgB;IAEhB,qBAAe;IACf,qBAAe;IACf,mBAAa;IAEb,gBAAU;IACV,sBAAgB;IAChB,YAAM;IACN,uBAAiB;IACjB,4BAAsB;IACtB,6BAAuB;IACvB,0BAAoB;IACpB,cAAQ;IAER,kBAAY;IAEZ,mBAAa;IACb,iBAAW;IACX,6BAAuB;IACvB,uBAAiB;IACjB,mBAAa;IACb,wBAAkB;IAClB,uBAAiB;IACjB,kBAAY;IACZ,sBAAc;IACd,qBAAe;IAEf,wBAAkB;IAClB,wBAAmB;;EAEC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAhDb,mDAAU;;;;;IAsDjB;;;;;;IACH;;;;;;IACA;;;;;;IAEG;;;;;;IACA;;;;;;IACA;;;;;;;;IANA,kBAAY;IACf,0BAAoB;IACpB,uBAAiB;IAEd,kBAAY;IACZ,qBAAe;IACf,sBAAgB;;EAEE;;;;;;;;;;;;;;;;;;;;;;;;;;ICxqBrB;;;;;;;;IAQU;;EAAM;;;;;;;;;MANJ,6BAAK;;;MACL,8BAAM;;;MACN,6BAAK;;;MACL,gCAAQ;;;MACR,kCAAU;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuC5B,UAAG,AAAY,qBAAG;AACG,QAAjB;;AAEJ,YAAO;IACX;kBAOiD;AAAY,YAAmC,gCAAnC,sBAAa,OAAO,EAAC;IAA6B;;AAK1F,MAAjB;AAEA,UAAI,gBAAW,QAAQ,oBAAc,QAAQ,kBAAY;AAG3C,qBAAS,AAAQ,AAAwB;AACzC,oBAAQ,AAAQ,AAAwB;AAGb,QAArC,AAAW,AAAM,iCAAoB,SAAT,KAAK,IAAC;AACK,QAAvC,AAAW,AAAM,kCAAsB,SAAV,MAAM,IAAC;AACD,QAAnC,AAAS,AAAM,+BAAoB,SAAT,KAAK,IAAC;AACK,QAArC,AAAS,AAAM,gCAAsB,SAAV,MAAM,IAAC;AAE5B,iCAA4D,aAAtC,AAAU,kFAA8B,AAAU;AAItD,oBAAQ,AAAQ,8CAAiB,AAAI,mBAAE,AAAY;AAYzE,QAVF,AAAM,KAAD,WAAS,QAAmB;AACtB,0BAAY;AACnB,wBAAI,AAAQ,AAAQ,gCAAS,AAAY,gEAAa,AAAQ,AAAQ,gCAAS,AAAY;AACE,YAAzF,YAA2D,AAAS,CAA/C,AAAiB,aAAxB,MAAM,iBAAG,AAAK,IAAD,6BAAa,AAAK,IAAD,iCAAiB,MAAM,IAAG,kBAAkB;;AAG9B,YAA1D,YAA4B,AAAS,aAAxB,AAAK,IAAD,6BAAa,MAAM,IAAG,kBAAkB;;AAEjB,UAA5C,AAAK,AAAM,IAAP,2BAAwC,SAAZ,SAAS,IAAC;;AAKrB,QAAzB,iBAAW,MAAM,EAAE,KAAK;AAQtB,QAJE,AAAO,oCAAuB,QAAC;AACc,UAA7C,AAAQ,AAAQ,2BAAI,AAAY;AACuB,UAAvD,AAAQ,AAAM,4BAAO,AAAkC,qBAAxB,KAAK,IAAC,iBAAK,MAAM,IAAC;AACH,UAA9C,AAAW,AAAQ,+BAAI,AAAY;;AAIb,QAA1B;;IAER;;AAKI,UAAI,gBAAW,QAAQ,oBAAc,QAAQ,kBAAY;AAE/C,oBAAQ,AAAQ,8CAAiB,AAAI,mBAAE,AAAY;AAKvD,QAFF,AAAM,KAAD,WAAS,QAAmB;AACgB,UAA7C,AAAK,AAAM,IAAP,sBAAsB;;AAKxB,qBAAS,AAAQ,AAAwB;AAEzC,oBAAQ,AAAQ,AAAwB;AAID,QAA7C,AAAQ,AAAQ,2BAAI,AAAY;AACP,QAAzB,iBAAW,MAAM,EAAE,KAAK;AACyB,QAAjD,AAAW,AAAQ,kCAAO,AAAY;AAGZ,QAA1B;;IAER;;AAKI,oBAAI,AAAW,AAAQ,oCAAS,AAAY;AAClC,QAAN;;AAGM,QAAN;;IAER;;AAKuC,MAAnC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AAGL,wBAAgB;AACsB,QAA5C,AAAU,AAAQ,SAAT,eAAa,AAAY;AACa,QAA/C,AAAQ,AAAO,mCAAa,SAAS,EAAE;AACvB,QAAhB,AAAQ;AACiB,QAAzB,AAAU,SAAD,UAAQ;AACK,QAAtB,mBAAa,SAAS;AAGhB,sBAAc;AACoB,QAAxC,AAAQ,AAAQ,OAAT,eAAa,AAAY;AACd,QAAlB,iBAAW,OAAO;AACsB,QAAxC,AAAU,SAAD,cAAc,OAAO,EAAE;AAEf,QAAjB;AAEwB,oBAAQ,AAAQ,8CAAiB,AAAI,mBAAE,AAAY;AAYzE,QAXF,AAAM,KAAD,WAAS,QAAmB;AAI0B,UAAvD,AAAa,wBAAI,AAAK,AAAQ,IAAT,4BAAgB;AAGnB,UAAlB,AAAK,IAAD,YAAY,CAAC;AAGkD,UAAnE,AAAa,wBAAI,AAAK,AAAU,IAAX,8BAAmB;;AAI5C,sBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACgB,UAArD,AAAQ,AAAQ,2BAAI,AAAY;AAa9B,UAXF,AAAM,KAAD,WAAS,QAAmB;AAEvB,kCAAsB;AACkC,YAA9D,AAAgB,AAAQ,eAAT,eAAa,AAAY;AAElC,yBAAa;AACmB,YAAtC,AAAO,AAAQ,MAAT,eAAa,AAAY;AACD,YAA9B,AAAgB,eAAD,UAAQ,MAAM;AAED,YAA5B,AAAK,IAAD,UAAQ,eAAe;AACgB,YAA3C,AAAK,AAAQ,IAAT,eAAa,AAAY;;;AAKrC,sBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACQ,UAA7C,AAAS,AAAQ,6BAAI,AAAY;;AAErC,sBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACS,UAA9C,AAAS,AAAQ,6BAAI,AAAY;;AAErC,sBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACK,UAA1C,AAAS,AAAQ,6BAAI,AAAY;;AAErC,sBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACM,UAA3C,AAAS,AAAQ,6BAAI,AAAY;;AAErC,sBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACM,UAA3C,AAAS,AAAQ,6BAAI,AAAY;;AAGrC,cAAK,aAA2B;AAE5B,yBAAI;AACM,YAAN;;;;AAIkE,QAAtE,AAAS,AAAQ,+BAAQ,QAAiB,SAAU,AAAU,UAAA,CAAC,KAAK;AAKtE,QAJE,AAAS,AAAU,iCAAO,QAAyB;AACnD,cAAG,AAAM,AAAQ,KAAT,YAAqB,AAAO;AACf,YAAjB,AAAU,UAAA,CAAC,KAAK;;;AAIsB,QAA9C,AAAU,AAAQ,SAAT,eAAa,AAAY;;IAE1C;;AAIU,oBAAU,AAAQ,AAAoB,4BAAP,UAAU,OAC3C,AAAQ,4BAAa,SAAS,AAAQ,4BAAa;AAEvB,MAAhC,AAAQ,mBAAK,AAAkB,sBAAR,OAAO;AAG9B,UAAI,OAAO,IAAI;AAEX,cAAK,qBAAyC;AACF,UAAxC,AAAQ,mBAAK,AAA0B,oBAAlB,KAAK,oBAAI,OAAO;AACrC,cAAI,KAAK,IAAI;AAC0D,YAAnE,AAAQ,mBAA0D,SAAnD,gBAAO,8BAAiB,OAAO,+BAAc,KAAK;AAC9C,YAAnB,oBAAc,KAAK;AAIyB,YAD5C,AAAa,wBACT,AAAM,AAAQ,KAAT,4BAAiB;AAG4B,YADtD,AAAa,wBACT,AAAM,AAAU,KAAX,8BAAmB;;;;AASlC,QAHE,wBAAmB,qCAAuB,OAAK;AACS,UAAxD,AAAkB,kBAAA,qBAAK,AAAS,6BAAe,OAAO;AACX,UAA3C,AAAQ,mBAAK,AAA6B,iCAAR,OAAO;;;IAGrD;sBAI0C;AACrB,MAAjB;AACQ,MAAR;IACJ;;AAI+C,MAA3C,AAAQ,mBAAK,AAA6B,qBAApB,gBAAO,eAAE;AAE/B,UAAI,gBAAW,QAAQ,mBAAc;AAE3B,mBAAO,AAAW;AAElB,sBAAU,AAAW,AAAO;AAElC,sBAAI,AAAQ,AAAQ,gCAAS,AAAY;cAIlC,eAAI,AAAQ,AAAQ,gCAAS,AAAY;AAGmB,UAA/D,AAAW,AAAM,iCAA8C,SAArB,AAAa,aAA3B,AAAQ,OAAD,yBAAS,AAAK,IAAD,YAAS,MAAG;AACgB,UAA5E,AAAW,AAAM,+BAA2D,SAA7B,aAArB,AAAW,4CAAY,AAAW,mCAAa;cAEtE,eAAI,AAAQ,AAAQ,gCAAS,AAAY;AAGQ,UAApD,AAAW,AAAM,gCAAmC,SAAzB,AAAW,gCAAW;AACS,UAA1D,AAAW,AAAM,kCAAyC,SAAd,aAAf,AAAQ,OAAD,0BAAU,AAAK,IAAD,WAAK;cAEpD,eAAI,AAAQ,AAAQ,gCAAS,AAAY;AAEc,UAA1D,AAAW,AAAM,iCAAyC,SAAhB,aAAd,AAAQ,OAAD,yBAAS,AAAK,IAAD,aAAO;AACG,UAA1D,AAAW,AAAM,kCAAyC,SAAd,aAAf,AAAQ,OAAD,0BAAU,AAAK,IAAD,WAAK;;AAIH,UAApD,AAAW,AAAM,gCAAmC,SAAzB,AAAW,gCAAW;AAC2B,UAA5E,AAAW,AAAM,+BAA2D,SAA7B,aAArB,AAAW,4CAAY,AAAW,mCAAa;;;IAGrF;8BAGqD;AACF,MAA/C,AAAQ,mBAAK,AAAiC,uCAAN,KAAK;AAE7C,UAAI,gBAAW,QAAQ,oBAAc,QAAQ,mBAAc;AAE/B,oBAAQ,AAAQ,8CAAiB,AAAI,AAAmB,mBAAjB,AAAY,gDAAO;AAElF,YAAI,KAAK,IAAI,QAAqB,aAAb,AAAM,KAAD,aAAU,eACpC,AAAW,AAAQ,oCAAS,AAAY;AACpC,cAAI,AAAM,AAAQ,KAAT,YAAqB,AAAS;AACb,YAAtB,AAAM,KAAD;AACa,YAAlB,AAAM,AAAK,KAAN;gBACF,KAAI,AAAM,AAAQ,KAAT,YAAqB,AAAW;AACtB,YAAtB,AAAM,KAAD;AACc,YAAnB,AAAM,AAAM,KAAP;;;;IAIrB;+BAGsD;AACF,MAAhD,AAAQ,mBAAK,AAAkC,wCAAN,KAAK;AAE9C,UAAI,gBAAW,QAAQ,oBAAc;AAET,oBAAQ,AAAQ,8CAAiB,AAAI,AAAmB,mBAAjB,AAAY,gDAAO;AAElF,YAAI,KAAK,IAAI,QAAqB,aAAb,AAAM,KAAD,aAAU,eAAK,AAAW,AAAQ,oCAAS,AAAY;AAEvE,6BAAe,AAAM,KAAD,2BAAS,AAAM,KAAD;AACQ,UAAhD,AAAQ,mBAAuC,SAA/B,AAAM,KAAD,aAAQ,kBAAK,YAAY;AAE9C,cAAI,AAAM,AAAQ,KAAT,YAAqB,AAAS;AACb,YAAtB,AAAM,KAAD;AACL,gBAAiB,aAAb,YAAY,IAAG;AACgB,cAA/B,AAAK,AAAmB,KAAnB,QAAc,aAAb,YAAY,IAAG;;AAGU,cAA/B,AAAK,AAAmB,KAAnB,QAAc,aAAb,AAAM,KAAD,aAAU;;gBAEtB,KAAI,AAAM,AAAQ,KAAT,YAAqB,AAAW;AACtB,YAAtB,AAAM,KAAD;AACL,gBAAiB,aAAb,AAAM,KAAD,aAAuB,aAAb,YAAY,IAAG;AACC,cAA/B,AAAK,AAAmB,KAAnB,QAAc,aAAb,YAAY,IAAG;;AAGL,cAAhB,AAAK,AAAI,KAAJ,QAAC;;gBAEP,KAAI,AAAM,AAAQ,KAAT,YAAqB,AAAM,uCAAS,AAAM,AAAQ,KAAT,YAAqB,AAAM;AAC1D,YAAtB,AAAM,KAAD;AAGD,2BAAe,oBAAe;AACE,YAApC,AAAM,AAAO,KAAR,wBAAsB,QAAQ;AAEK,YAAxC,WAAe,oBAAe;AACM,YAApC,AAAM,AAAO,KAAR,wBAAsB,QAAQ;AAEE,YAAvB,AAAgB,gBAA7B,AAAM,KAAD;gBAEH,KAAI,AAAM,AAAQ,KAAT,YAAqB,AAAO;AAClB,YAAtB,AAAM,KAAD;AACC,YAAN;;;;IAIhB;uBAG2C;AAChB,MAAvB,AAAM,KAAD;AAEL,oBAAkB,AAAgB,AAAW,gBAAxC,AAAM,KAAD,sCAA+C;AAC9B,QAAvB,AAAM,KAAD;;AAIU,QAAf,iBAAW;AAIT,QAHE,gBAAU,qCAAuB,AAAU,uDAAgB;AACrD,UAAN;AACgB,UAAhB,iBAAW;;;IAGvB;iBAK0B,QAAiB;AAEvC,oBAAI,AAAQ,AAAQ,gCAAS,AAAY;AAEd,QAAvB,AAAQ,AAAM,4BAAO;YAElB,eAAI,AAAQ,AAAQ,gCAAS,AAAY;AAEU,QAAtD,AAAQ,AAAM,4BAAO,AAAiC,qBAAvB,KAAK,IAAC,mBAAO,KAAK,IAAC;YAE/C,eAAI,AAAQ,AAAQ,gCAAS,AAAY;AAEY,QAAxD,AAAQ,AAAM,4BAAO,AAAmC,mBAA3B,MAAM,IAAC,mBAAO,MAAM,IAAC;YAE/C,eAAI,AAAQ,AAAQ,gCAAS,AAAY;AAE8B,QAA1E,AAAQ,AAAM,4BAAO,AAAqD,mBAA7C,MAAM,IAAC,iBAAK,KAAK,IAAC,iBAAK,MAAM,IAAC,iBAAK,KAAK,IAAC;;AAI/C,QAAvB,AAAQ,AAAM,4BAAO;;IAE7B;;AAMU,wCAA8B,QAA2B;AAC3D,YAAG,0BAAoB;AACM,UAAzB,AAAiB;AACM,UAAvB,yBAAmB;;AAEyB,QAAhD,AAAQ,AAAQ,8BAAO,AAAY;;AAIuC,MAA9E,yBAAmB,AAAQ,AAAgB,sCAAO,2BAA2B;IACjF;;sDA5Y+C,SAA4B;IApB9D,gBAAc,kBAAO;IAK7B,iBAAW;IAED;IACA;IACH;IAE4B,yBAAmB;AAUrD,yDAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MArBmC,qCAAS;;;MACP,uCAAW;;;;;IA+anC;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAGA;;;;;;IACA;;;;;;IACA;;;;;;IAGA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;IAlBA,mBAAY;IACZ,gBAAU;IACV,aAAO;IACP,8BAAwB;IACxB,wBAAgB;IAChB,+BAAuB;IACvB,iBAAS;IAGT,sBAAc;IACd,mBAAa;IACb,sBAAe;IAGf,oBAAc;IACd,qBAAe;IACf,iBAAW;IACX,kBAAY;IACZ,kBAAY;;EAEM;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtBX,iDAAU;;;;;IA6BpB;;;;;;IAGA;;;;;;IAIA;;;;;;;;IAPA,oCAA8B;IAG9B,qCAA+B;IAI/B,sBAAgB;;EAGG;;;;;;;;;;;;;;;;;;;;;kBCvewB;AAAY,YAAuC,oCAAvC,sBAAa,OAAO,EAAC;IAAqC;iBAIrG;AACuC,MAAzD,iBAAiB,mBAAS,GAAE,mBAAS,KAAI,cAAc;AAEvD,oBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACrC;;AAG2C,MAA/C,AAAa,AAAM,mCAA4B,SAAjB,cAAc,IAAC;IACjD;;AAGI,oBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACrC,cAAO;;AAEX,YAAW,gBAAM,AAAa,AAAM,AAAM,gDAAa,KAAI;IAC/D;eAIoB;AACqC,MAArD,eAAe,mBAAS,GAAE,mBAAS,KAAI,YAAY;AAER,MAA3C,AAAW,AAAM,iCAA0B,SAAf,YAAY,IAAC;AACK,MAA9C,AAAQ,AAAM,8BAAgC,SAArB,AAAI,mBAAE,YAAY,KAAC;IAChD;;AAK2C,MAAvC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AAEwB,QAAnC,qBAAmB;AACyC,QAA5D,AAAa,AAAQ,oCAAO,uBAAE,eAAe,OAAO;AACxB,QAA5B,AAAQ,sBAAO;AAEkB,QAAjC,mBAAiB;AACuC,QAAxD,AAAW,AAAQ,kCAAO,uBAAE,aAAa,OAAO;AACtB,QAA1B,AAAQ,sBAAO;AAEe,QAA9B,gBAAc;AACoC,QAAlD,AAAQ,AAAQ,+BAAO,uBAAE,UAAU,OAAO;AACnB,QAAvB,AAAQ,sBAAO;AAEgB,QAA/B,AAAa,AAAM,mCAAQ;AACI,QAA/B,AAAW,AAAM,iCAAQ;AACC,QAA1B,AAAQ,AAAM,8BAAQ;AAEsB,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;;0DA5DmD,SAA4B;IATlE,gBAAc,kBAAO;IAKnB;IACA;IACA;AAGT,6DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;MAVuC,yCAAS;;;MACP,2CAAW;;;;;IAoFvC;;;;;;IACA;;;;;;;;IADA,4BAAsB;IACtB,uBAAc;;EAEQ;;;;;;;;;;;;MALf,qDAAU;;;;;;;EAUG;;;;;;;;;;;;;kBChF4B;AACzD,YAAgD,4CAAhD,sBAAa,OAAO,EAAE;IAAqD;iBAIzD;AAC2C,MAA7D,kBAAkB,mBAAS,GAAG,mBAAS,KAAK,eAAe;AAE3D,oBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACrC;;AAE8B,MAAlC,wBAAkB,eAAe;AACgB,MAAjD,AAAa,AAAM,oCAA8B,SAAlB,eAAe,IAAC;IACnD;;AAGI,oBAAI,AAAQ,AAAQ,gCAAS,AAAY;AACrC,cAAO;;AAEX,YAAW,gBAAM,AAAa,AAAM,AAAO,iDAAa,KAAK;IACjE;eAIoB;AACyC,MAAzD,gBAAgB,mBAAS,GAAG,mBAAS,KAAK,aAAa;AAEV,MAA7C,AAAW,AAAM,kCAA4B,SAAhB,aAAa,IAAC;AACK,MAAhD,AAAQ,AAAM,+BAAkC,SAAtB,AAAI,mBAAE,aAAa,KAAC;IAClD;;;AAKmD,MAA/C,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AACwB,QAAnC,qBAAmB;AACyC,QAA5D,AAAa,AAAQ,oCAAO,uBAAE,eAAe,OAAO;AACxB,QAA5B,AAAQ,sBAAO;AAEkB,QAAjC,mBAAiB;AACuC,QAAxD,AAAW,AAAQ,kCAAO,uBAAE,aAAa,OAAO;AACtB,QAA1B,AAAQ,sBAAO;AAEe,QAA9B,gBAAc;AACoC,QAAlD,AAAQ,AAAQ,+BAAO,uBAAE,UAAU,OAAO;AACnB,QAAvB,AAAQ,sBAAO;AAEqB,QAApC,sBAAoB;AAC0C,QAA9D,AAAc,AAAQ,qCAAO,uBAAE,gBAAgB,OAAO;AACzB,QAA7B,AAAQ,sBAAO;AAEf,sBAAI,AAAQ,AAAQ;AACN,0BAC6D,KAA7D,kBAAS,AAAQ,AAAO,kDAAxB,OAAgE;AAE1E,mBAAS,UAAU,GAAG,AAAQ,OAAD,gBAAG,QAAQ,GAAE,UAAA,AAAO,OAAA;AACvB,qBAAS;AACI,YAAnC,AAAG,AAAQ,EAAT,eAAa,AAAY;AACH,YAAxB,AAAc,6BAAO,EAAE;;;AAIC,QAAhC,AAAa,AAAM,oCAAS;AACI,QAAhC,AAAW,AAAM,kCAAS;AACC,QAA3B,AAAQ,AAAM,+BAAS;AAEH,QAApB,wBAAkB;AAC0B,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;wBAGiC;AAC4D,MAAzF,AAAQ,AAAQ,mCAAY,QAAc,QAAS,AAAK,IAAD,cAAY,AAAY;AACf,MAAhE,AAAQ,AAAQ,2BAA+C,SAAxC,AAAY,yEAAW,eAAe;IACjE;;kEAlF2D,SAA6B;IAV3E,gBAAc,kBAAO;IAKnB;IACA;IACA;IACA;AAGT,qEAAM,OAAO,EAAE,YAAY;AACtB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;MAX+C,iDAAS;;;MACP,mDAAW;;;;;IA6G/C;;;;;;IACA;;;;;;IAEA;;;;;;IAEA;;;;;;;;IALA,6BAAsB;IACtB,gBAAU;IAEV,iBAAW;IAEX,uBAAc;;EAEgB;;;;;;;;;;;;;;;;MATvB,6DAAU;;;;;;;EAcW;;;;;;;EAK7C;;;;;MADwB,gDAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBC5GsB;AAChC;AACd;AACmF,QAA/E,QAA+D,gCAAvD,sBAAa,OAAO,EAAC,2DAA2B;;;AAE1D;AACwB,+CAAa,AAAQ,OAAD,eAAe,AAAuB,eAAnB,AAAY;AACV,UAA/D,QAA+C,gCAAvC,sBAAa,UAAU,EAAC;;;;AAEpC,YAAO,MAAK;IAChB;;AAYuB;IAAY;;AAG/B,UAAG,AAAY,qBAAG;AAC8C,4BAA5D,gCAAc,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;;AAExD,YAAO;IACX;;AAMgC,MAA5B,AAAa,+BAAW;AACR,MAAhB;IACJ;;AAKiC,MAA7B,AAAa,+BAAW;AACR,MAAhB;IACJ;;AAKsB,MAAlB;AAE2B,MAA3B,AAAa,8BAAU;AACP,MAAhB;IACJ;;AAIgC,MAA5B,AAAa,8BAAU;AACP,MAAhB;IACJ;;AAEoB,YAAA,AAAa;IAAO;gBAEZ;AAAU,4BAAK,IAAG,eAAU;IAAS;;AAGvC,uCAAS,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;AACrE,YAAO,AAAO,OAAD,IAAI,OAAO,AAAO,AAAK,MAAN,mBAAe;IACjD;cAE4B;;AACL,MAAV,uCAAQ,CAAC;AAEI,uCAAS,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;AACT,WAA5D,MAAM;mBAAN,OAAQ,YAAO,AAA6B,kBAAhB,MAAM,EAAC,qBAAgB,AAAE,CAAD;IACxD;;AAEoB,YAAA,AAAa;IAAK;cAEV;AACD,MAAd,uCAAQ,KAAK;AAC+C,MAArE,AAAa,4BAAQ,AAAmC,kBAAtB,mBAAa,qBAAgB,KAAK;IACxE;;AAMwC,MAApC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AAEL,0BAAkB;AAC+B,QAAvD,AAAY,AAAQ,WAAT,eAAa,AAAY;AAE9B,0BAAkB;AAC+B,QAAvD,AAAY,AAAQ,WAAT,eAAa,AAAY;AAET,QAA3B,AAAQ,sBAAO,WAAW;AACC,QAA3B,AAAQ,sBAAO,WAAW;AAE1B,sBAAI,AAAQ,AAAQ,gCAChB,AAAY;AAEyB,UADrC,AAAQ,AAAQ,2BACZ,AAAY;AAEM,gCAAsB;AACa,UAAzD,AAAgB,AAAQ,eAAT,eAAa,AAAY;AACc,UAAtD,AAAgB,AAAQ,eAAT,eAAa,AAAY;AACc,UAAtD,AAAgB,AAAQ,eAAT,eAAa,AAAY;AAGW,UADnD,AAAa,wBACT,AAAgB,AAAU,eAAX,8BAAmB;AAEhB,uBAAa;AACG,UAAtC,AAAO,AAAQ,MAAT,eAAa,AAAY;AAED,UAA9B,AAAgB,eAAD,UAAQ,MAAM;AACE,UAA/B,AAAQ,sBAAO,eAAe;;AAIY,QAD9C,AAAa,wBACT,AAAa,AAAS,8CAAQ;AAGU,QAD5C,AAAa,wBACT,AAAa,AAAQ,6CAAQ;AAGS,QAD1C,AAAa,wBACT,AAAa,AAAO,4CAAQ;AAGW,QAD3C,AAAa,wBACT,AAAQ,AAAU,0CAAQ;AAEd,QAAhB;AAGA,cAAK;AACY,UAAb,aAAQ;AACK,UAAb,aAAQ;;;AAEM,QAAlB,AAAgB,gBAAA;AAE4B,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;gBAIe;AAIa,mBAAS,oCAAqB,AAAI,mBAAE,AAAY;AAExE,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAO,MAAD,YAAS,IAAA,AAAC,CAAA;AAEE,qDAAS,AAAM,AAAI,MAAJ,QAAC,CAAC,gBAAgB,AAAI,mBAAE,AAAY;AAErF,YAAI,AAAO,AAAqB,MAAtB,gBAAc,WAAW,AAAY,iCAAa;AACpC,sBAAsB,oCAAc,oBAAP,MAAM;AACvD,cAAG,KAAK,IAAI;AACc,YAAtB,AAAM,KAAD;;;;AAKS,MAA1B;IACJ;eAGc;AACiC,MAA3C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;cAGa;AACqC,MAA9C,AAAQ,AAAQ,8BAAO,AAAY;IACvC;iBAGgB;AACL,MAAP;IACJ;;AAKoB,MAAhB;AACmB,MAAnB;IACJ;;AAOI,oBAAI,AAAa;AAE+B,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;AAGe,QAA/C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAOI,oBAAI,AAAa;AAE8B,QAA3C,AAAQ,AAAQ,2BAAI,AAAY;;AAGc,QAA9C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAKM,MAFE,gBAAU,qCAAwB,AAAU,6DAAsB;AAC/C,QAAnB,AAAa;;IAErB;;AAKI,oBAAG,AAAQ,AAAO,AAAQ;AACA,wCAAQ,AAAQ;AAQpC,QAPF,AAAM,AAAS,KAAV,sBAAkB,QAAmB;AAClB,uBAAuB,wDAAO,AAAM,KAAD,eAAe,AAAuB,eAAnB,AAAY;AAEtF,cAAG,MAAM,IAAI,qBAAQ,MAAM,EAAI;AACX,YAAhB,AAAO,MAAD;;;;IAKtB;;AAII,oBAAG,AAAQ,AAAO,AAAQ;AACG,oBAA2B,6DAAO,AAAQ;AACnE,YAAG,KAAK,IAAI;AACgB,UAAxB,AAAM,KAAD,cAAc;;;IAG/B;;uDAhQgD,SAA4B;IAP/D,gBAAc,kBAAO;IAKN,oBAAc;AAGpC,0DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MARoC,sCAAS;;;MACP,wCAAW;;;;;;IAyQxB;;;;;;;;IACW;;EAAM;;;;;;;;;;;kBAea;AAAY,YAAyC,sCAAzC,sBAAa,OAAO,EAAC;IAAyC;;AAGxH,sBAAY;AAMf,MALF,AAAQ,AAAS,kCAAQ,QAAmB;AACpB,oBAAsB,wDAAO,AAAM,KAAD,eAAe,AAAuB,eAAnB,AAAY;AACrF,YAAG,KAAK,IAAI,kBAAQ,AAAM,KAAD;AACL,UAAhB,YAAY;;;AAGpB,YAAO,UAAS;IACpB;;AAGW,mBAAS;AAQd,MAPF,AAAQ,AAAS,kCAAQ,QAAmB;AAEpB,oBAAsB,wDAAO,AAAM,KAAD,eAAe,AAAuB,eAAnB,AAAY;AACrF,YAAG,KAAK,IAAI,kBAAQ,AAAM,KAAD;AACD,UAApB,SAAS,AAAM,KAAD;;;AAItB,YAAO,OAAM;IACjB;cAE4B;AAatB,MAZF,AAAQ,AAAS,kCAAQ,QAAmB;AAEpB,oBAAsB,wDAAO,AAAM,KAAD,eAAe,AAAuB,eAAnB,AAAY;AACrF,YAAG,KAAK,IAAI;AAER,cAAG,AAAM,AAAM,KAAP,UAAU,GAAG;AACJ,YAAb,AAAM,KAAD;;AAEU,YAAf,AAAM,KAAD;;;;IAKrB;iBAGsC;AACa,MAA/C,YAAU,sDAA+B;IAC7C;;AAGI,UAAG,AAAe,wBAAG;AACqG,QAAtH,uBAAqB,yEAAqE,cAAM,uBAAiB;;AAErH,YAAO,AAAe;IAC1B;;AAK6C,MAAzC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AACiC,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;YAEgD;AAC5C,UAAG,wBAAkB,kBAAQ,AAAe;AACf,QAAzB,AAAe,yBAAI,KAAK;;IAEhC;;4DAzEqD,SAA4B;IANpE,gBAAc,kBAAO;IAIe;AAG3C,+DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;MAPsC,6CAAW;;;;;IAyGpC;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;;;IA1BA,qBAAa;IAEb,sBAAc;IAEd,qBAAa;IAEb,uBAAc;IAEd,iBAAW;IAEX,gBAAQ;IAER,gBAAQ;IAER,2BAAqB;IAErB,2BAAqB;IAErB,wBAAgB;IAEhB,+BAAuB;IAEvB,2BAAmB;IAEnB,wBAAgB;IAEhB,iBAAS;;EAEU;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA/BZ,kDAAU;;;MACV,mDAAW;;;;;IAmCrB;;;;;;;;iCAAqB;;EACD;;;;;;;;;;;;;;;ICjajB;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;;;IALA,0BAAqC;IACrC,2CAAqC;IACrC,mBAAqC;IAErC,uBAAqC;IACrC,oBAAqC;;EAEjB;;;;;;;;;;;;;MATb,mDAAU;;;;;;;;;;IAajB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;IAJA,sBAAqB;IACrB,qBAAqB;IACrB,wBAAqB;IACrB,sBAAqB;IACrB,oBAAqB;;EAEH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBA4CoB;AAAY,YAAqC,kCAArC,sBAAa,OAAO,EAAC;IAAiC;;AAGjH,UAAG,AAAe,wBAAG;AACmD,+BAApE,oBAAiB,AAAQ,2BAAc,AAA4B,eAAxB,AAAY;AACvD,YAAG,AAAe,wBAAG,QAAqB,YAAb,oBAAgB,SAAwB,YAAhB,sBAAmB;AACU,UAA9E,AAAQ,sBAAQ,AAA6D,kCAAtC,AAAY,wDAAW,kBAAM;AAC9B,UAAtC,AAAQ,AAAM,8BAAS;;;AAG/B,YAAO;IACX;;AAE4B,YAAA,AAAQ;IAAuB;;AAKlB,MAArC,AAAQ,mBAAK;AAEyD,MAAtE,qBAAe,AAAQ,AAAQ,gCAAS,AAAY;AACpD,qBAAI,AAAQ,AAAQ,gCAAS,AAAY;AAEtB,QAAf,oBAAc;AACC,QAAf,oBAAc;AACR,QAAN,WAAK;AACC,QAAN,WAAK;AAKqB,QAA1B,2BAAqB;AAIqC,QAA1D,AAAa,wBAAI,AAAQ,AAAY,4CAAO;AACe,QAA3D,AAAa,wBAAI,AAAQ,AAAa,6CAAO;AAGU,QAAvD,AAAa,wBAAI,AAAQ,AAAU,0CAAQ;AAGe,QAA1D,AAAa,wBAAI,AAAQ,AAAa,6CAAQ;AACU,QAAxD,AAAa,wBAAI,AAAQ,AAAW,2CAAQ;AAGQ,QAApD,AAAa,wBAAI,AAAQ,AAAO,uCAAQ;;AAEzB,MAAnB,qBAAe;IACnB;mBAEkC;AAI9B,eAAK,WAA6B;AAC9B,YAAW,AAAmB,oBAA3B,OAAO,YAAuB;AAAS,gBAAO;;AAEjD,cAAwD,WAAjD,AAAQ,AAAQ,OAAT,oBAAkB,AAAY,0DACvC,AAAQ,OAAD,eAAe,QACG,gBAAnB,AAAQ,OAAD,0BACa,AAAgB,AAAQ,gBAA3C,AAAQ,OAAD,gCAA6C,AAAY;;;AAGrE,sBAAY,AAAU,UAAA,iBAAC,AAAM,KAAD;AACvC,qBAAI,SAAS;AACT;;AAGJ,UAAI,AAAc,AAAM,AAAM,oCAAG,QAAQ,AAAc,AAAM,AAAO,qCAAG;AAE/C,mBAAO;AACD,6BAA1B,mBAAe,AAAK,IAAD;AACK,4BAAxB,mBAAc,AAAK,IAAD;AAC4E,QAA9F,oBAAuF,CAAxE,AAA+D,AAAI,UAA9C,AAAa,aAAxB,AAAK,IAAD,yBAAS,AAAK,IAAD,YAAqB,aAAZ,AAAK,IAAD,0BAAU,AAAK,IAAD,cAAW,IAAI;AACtC,QAA9C,AAAc,AAAM,mCAA0B,SAAf,qBAAY;AACI,QAA/C,AAAc,AAAM,oCAA2B,SAAf,qBAAY;;AAIC,MAAjD,AAAc,AAAQ,iCAAI,AAAY;AAEtC,UAAI,AAAM,AAAK,KAAN,UAAS,yBAAe;AACH,QAA1B,2BAAqB;;AAIrB,YAAI,AAAM,AAAK,KAAN,UAAS;AACW,UAAzB,2BAAqB;;AAGzB,YAAgB,aAAZ,qBAAc;AACd;;AAEW,QAAf,oBAAc;AAEV;AACA;AAGJ,YAAU,YAAN,KAAK,EAAQ,mCACN,AAAmB,AAAO,AAAE,mBAAlC,KAAK,iBAAgC,KAAY,AAAmB,AAAO,AAAE,mBAAlC,KAAK,iBAAgC;AAEpD,UAA7B,IAAsB,CAAL,aAAZ,AAAM,sBAAQ;AACW,UAA9B,IAAuB,CAAL,aAAb,AAAM,uBAAS;;AAIhB;AACA;AAEJ,cAAS,mBAAN,KAAK;AAEoB,sBAAxB,mBAAU,AAAM,AAAO,KAAR;AACS,sBAAxB,mBAAU,AAAM,AAAO,KAAR;gBAEZ,KAAS,mBAAN,KAAK;AAE2B,sBAAtC,mBAAU,AAAM,AAAQ,AAAM,AAAO,KAAtB;AACuB,sBAAtC,mBAAU,AAAM,AAAQ,AAAM,AAAO,KAAtB;;AAGyC,YAAxD,WAAwD,SAAhD,KAAK;;AAGiB,UAAlC,IAA2B,CAAd,aAAR,OAAO,iBAAG,AAAM;AACY,UAAjC,IAA0B,CAAb,aAAR,OAAO,iBAAG,AAAM;;AAKzB,sBAAG,SAAS;AACU,UAAlB;AACkB,UAAlB,mBAAa,CAAC,EAAE,CAAC;AACK,UAAtB,uBAAiB;AAEkC,UAA/C,AAAO,8CAAsB;;;IAG7C;iBAKgC;AAI5B,UAAG,wBAAkB;AAOf,QAFE,oBAAO;AAC8C,UAArD,AAAe,AAAQ,sCAAO,AAAY;;;IAKtD;mBAG4B,MAAe;AAAiB,MAAT,WAAK,IAAI;AAAW,MAAT,WAAK,IAAI;IAAE;;AAIrE,UAAI,sBAAiB;AACiF,QAAlG,oBAA2F,CAA5E,AAAmE,AAAI,UAAjD,AAAc,aAA1B,AAAM,mCAAQ,AAAM,sBAAqB,aAAb,AAAM,oCAAS,AAAM,wBAAU,IAAI;AACzC,QAA/C,AAAe,AAAM,qCAA0B,SAAf,qBAAY;AACI,QAAhD,AAAe,AAAM,sCAA2B,SAAf,qBAAY;;IAErD;uBAEiC;AAC7B,UAAI,sBAAiB;AACV;AACA;AACA,qBAAS,AAA4B,wBAAf,YAAG,iBAAK,YAAG;AAExC,sBAAI,KAAK;AAC0B,UAA/B,QAAQ,AAAU;;AAEW,UAA7B,QAAQ,AAAU;AAClB,wBAAI;AACkE,YAAlE,SAAS,AAAyD,wBAAhC,aAAZ,qBAAc,KAAE,kBAAmB,aAAb,sBAAe,KAAE;;;AAIV,QAA3D,kBAAkB,AAAyB,AAAS,2BAAP,MAAM,gBAAG,KAAK;AAEZ,QAA/C,AAAc,AAAM,uCAAY,eAAe;AAE/C,sBAAI,KAAK;AACiD,UAAtD,AAAc,AAAQ,oCAAO,AAAY;;AAEU,UAAnD,AAAc,AAAQ,iCAAI,AAAY;;;IAGlD;wBAEuB;;AACnB,UAAuB,cAAH,wBAAX,uCAAW,UAAK;AAC8B,QAA/C,AAAO,8CAAsB;;AAGV,QAAvB,uBAAiB;;IAEzB;;wDApNiD,SAA4B;IArBhE,gBAAc,kBAAO;IAKlB,uBAAiB;IAC5B,qBAAe;IAChB,oBAAc;IACd,oBAAc;IACd,WAAK;IACL,WAAK;IACL,qBAAe;IACf,oBAAc;IAKb,2BAAqB;IAErB,qBAAe;AAGd,2DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtBqC,uCAAS;;;MACP,yCAAW;;;;;;;;;;;;ICtCrC;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;;;IAZA,qBAAe;IAEf,yBAAmB;IAEnB,wBAAkB;IAElB,yBAAmB;IAEnB,yBAAmB;IAEnB,wBAAkB;IAElB,uBAAc;;EAEM;;;;;;;;;;;;;;;MAhBb,mDAAU;;;;;;;EAqBC;;;;;;;;;;;;;kBA4BoB;AAAY,YAAqC,kCAArC,sBAAa,OAAO,EAAC;IAAiC;;AAEjF,YAAc,2BAAR;IAAgC;;AAKhD,MAAtB,AAAO,yBAAW;IACtB;;AAK2B,MAAvB,AAAO,yBAAW;IACtB;cAGyB;AACU,MAA/B,AAAO,sBAAc,cAAN,KAAK;AACA,MAApB;IACJ;;AAEiB,YAAI,gBAAM,AAAO;IAAM;;AAKC,MAArC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AACX,sBAAI;AAKqB,4BAAkB;AACU,UAAjD,AAAY,AAAQ,WAAT,eAAa,AAAY;AACa,UAAjD,AAAQ,AAAO,mCAAa,WAAW,EAAE;AACzB,UAAhB,AAAQ;AACmB,UAA3B,AAAY,WAAD,UAAQ;;AAOE,0BAAgB;AACc,UAAnD,AAAU,AAAQ,SAAT,eAAa,AAAY;AACa,UAA/C,AAAQ,AAAO,mCAAa,SAAS,EAAE;AACvB,UAAhB,AAAQ;AACiB,UAAzB,AAAU,SAAD,UAAQ;AAEI,+BAAqB;AACa,UAAvD,AAAe,AAAQ,cAAT,eAAa,AAAY;AACP,UAAhC,AAAU,SAAD,UAAQ,cAAc;AAEQ,UAAvC,yBAAuB;AACmC,UAA1D,AAAiB,AAAQ,qCAAI,AAAY;AACF,UAAvC,AAAe,cAAD,UAAQ;AAEiB,UAAvC,yBAAuB;AACmC,UAA1D,AAAiB,AAAQ,qCAAI,AAAY;AACF,UAAvC,AAAe,cAAD,UAAQ;;AAG0B,QAApD,AAAa,wBAAI,AAAQ,AAAQ,wCAAQ;AAEa,QAAtD,AAAa,wBAAI,AAAQ,AAAS,yCAAQ;AAEgC,QAA1E,AAAa,wBAAI,AAAQ,AAAO,AAAY,qDAAO;AAE/B,QAApB;AAC4C,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;eAGc;AACU,MAApB;IACJ;gBAGe;AACS,MAApB;IACJ;4BAOgD;AAI5C,uBAAG,AAAM,KAAD,WAAW,AAAQ;AACvB;;AAKkB,MAAtB,AAAM,KAAD;AAEC,qBAAe,oBAAe,6BACjB,AAAM,KAAD,mBACZ,YACC,AAAM,AAAO,AAAE,KAAV,gCACL,AAAQ,AAAwB,AAAQ,AAAE;AAExB,MAA/B,AAAQ,2BAAc,QAAQ;IAClC;;AAMc,qBAA6D,CAAzB,aAApB,eAAM,AAAO,qCAAa,eAAM,AAAO,wBAC1C,aAAlB,eAAM,AAAO,mCAAW,eAAM,AAAO;AAE1C,UAAI,AAAS,QAAD,KAAI;AACoC,QAAhD,AAAQ,AAAQ,2BAAI,AAAY;;AAGmB,QAAnD,AAAQ,AAAQ,8BAAO,AAAY;;AAGvC,qBAAM;AAC+C,QAAjD,AAAiB,AAAM,sCAAO,AAAS,QAAD;AACiB,QAAvD,AAAiB,AAAM,sCAAsB,CAAd,AAAE,IAAE,QAAQ;;IAEnD;;wDAvIiD,SAA4B;IAXhE,gBAAc,kBAAO;IAMvB,cAAQ,AAAQ;IAEZ,yBAAmB;IACnB,yBAAmB;AAG5B,2DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAZqC,uCAAS;;;MACP,yCAAW;;;;;;;;;;;;;IClCrC;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;;;IARA,sBAAgB;IAChB,+BAAyB;IACzB,uBAAiB;IACjB,0BAAoB;IACpB,qBAAe;IACf,sBAAgB;IAEhB,uBAAc;IACd,mBAAY;;EAES;;;;;;;;;;;;;;;;MAZd,oDAAU;;;;;;IAiBpB;;;;;;;;gCAAsB;;EAEA;;;;;;;;;;;;kBAsBoB;AAAY,YAAsC,mCAAtC,sBAAa,OAAO,EAAC;IAAmC;;AAQvE,MAA7C,AAAQ,AAAQ,8BAAO,AAAY;IACvC;;AAS8C,MAA1C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;eAE2B;AAAW,6BAAM,IAAG,eAAU;IAAM;;AAC5C,YAAA,AAAQ,AAAQ,iCAAS,AAAY;IAAU;;AAKxB,MAAtC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AAEX,iBAAS,IAAI,GAAG,AAAE,CAAD,iBAAI,AAAU,+DAAqB,IAAA,AAAC,CAAA;AAClC,UAAf,mBAAa,CAAC;;AAI0B,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;mBAG4B;AAEH,kBAAY;AACW,MAA5C,AAAM,AAAQ,KAAT,eAAa,AAAY;AACuC,MAArE,AAAM,AAAQ,KAAT,eAAuC,AAAM,aAAhC,AAAY,4DAAgB,MAAY,cAAN,KAAK;AAEpC,wBAAkB;AACoB,MAA3D,AAAY,AAAQ,WAAT,eAAa,AAAY;AACa,MAAjD,AAAY,AAAQ,WAAT,eAAa,AAAY;AAEf,qBAAe;AACe,MAAnD,AAAS,AAAQ,QAAT,eAAa,AAAY;AAEZ,yBAAmB;AACoB,MAA5D,AAAa,AAAQ,YAAT,eAAa,AAAY;AACc,MAAnD,AAAa,AAAQ,YAAT,eAAa,AAAY;AAE/B,yBAAe,2BAAC,WAAW,EAAE,QAAQ,EAAE,YAAY;AAEzD,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAa,YAAD,YAAS,IAAA,AAAC,CAAA;AAEhC,qBAAa;AAC2B,QAA9C,AAAO,AAAQ,MAAT,eAAa,AAAY;AACD,QAA9B,AAAY,AAAI,YAAJ,QAAC,CAAC,WAAS,MAAM;;AAGR,MAAzB,AAAM,KAAD,UAAQ,WAAW;AACF,MAAtB,AAAM,KAAD,UAAQ,QAAQ;AACK,MAA1B,AAAM,KAAD,UAAQ,YAAY;AAEJ,MAArB,AAAQ,sBAAO,KAAK;IACxB;;yDA7EkD,SAA4B;IALjE,gBAAc,kBAAO;AAM5B,4DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;MANsC,wCAAS;;;MACP,0CAAW;;;;;;;;;;;;;;;;;;;;;;;;;;;kBCdA;AAChC;AACf;AAC6F,QAAzF,gBAAwE,iCAAxD,sBAAa,OAAO,EAAC,4DAA4B;;;AAEnE;AACwB,+CAAa,AAAQ,OAAD,eAAe,AAAuB,eAAnB,AAAY;AACA,UAAzE,gBAAwD,iCAAxC,sBAAa,UAAU,EAAC;;;;AAE5C,YAAO,cAAa;IACxB;;AAauB;IAAY;;AAG/B,UAAG,AAAc,uBAAG;AAAsE,8BAA9D,6BAAgB,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;;AAClF,YAAO;IACX;;AAIgC,MAA5B,AAAa,+BAAW;AACR,MAAhB;IACJ;;AAIiC,MAA7B,AAAa,+BAAW;AACR,MAAhB;IACJ;;AAI+B,MAA3B,AAAa,8BAAU;AACP,MAAhB;IACJ;;AAIgC,MAA5B,AAAa,8BAAU;AACP,MAAhB;IACJ;;AAGoB,YAAA,AAAa;IAAO;gBAEZ;AAAa,+BAAQ,IAAG,YAAO;IAAK;;AAGtC,uCAAS,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;AACrE,YAAO,AAAO,OAAD,IAAI,OAAO,AAAO,AAAK,MAAN,mBAAe;IACjD;cAE4B;;AACL,MAAV,uCAAQ,CAAC;AAEI,uCAAS,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;AACT,WAA5D,MAAM;mBAAN,OAAQ,YAAO,AAA6B,kBAAhB,MAAM,EAAC,qBAAgB,AAAE,CAAD;IACxD;;AAGoB,YAAA,AAAa,AAAM;IAAM;cAEjB;AACD,MAAd,uCAAQ,KAAK;AAC+C,MAArE,AAAa,4BAAQ,AAAmC,kBAAtB,mBAAa,qBAAgB,KAAK;IACxE;;AAKyC,MAArC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AAEU,oBAAY;AACG,QAApC,AAAM,AAAQ,KAAT,eAAa,AAAY;AAET,oBAAY;AACG,QAApC,AAAM,AAAQ,KAAT,eAAa,AAAY;AAER,0BAAkB;AACS,QAAjD,AAAY,AAAQ,WAAT,eAAa,AAAY;AAEX,QAAzB,AAAM,KAAD,UAAQ,WAAW;AAEH,QAArB,AAAQ,sBAAO,KAAK;AACC,QAArB,AAAQ,sBAAO,KAAK;AAGpB,sBAAI,AAAQ,AAAQ,gCAChB,AAAY;AACyC,UAArD,AAAQ,AAAQ,2BAAI,AAAY;AAEV,uCAA6B;AACa,UAAhE,AAAuB,AAAQ,sBAAT,eAAa,AAAY;AACc,UAA7D,AAAuB,AAAQ,sBAAT,eAAa,AAAY;AACc,UAA7D,AAAuB,AAAQ,sBAAT,eAAa,AAAY;AAEuB,UAAtE,AAAa,wBAAI,AAAuB,AAAU,sBAAX,8BAAmB;AAEpC,uBAAa;AACG,UAAtC,AAAO,AAAQ,MAAT,eAAa,AAAY;AAEM,UAArC,AAAuB,sBAAD,UAAQ,MAAM;AACE,UAAtC,AAAQ,sBAAO,sBAAsB;;AAGkB,QAA3D,AAAa,wBAAI,AAAa,AAAS,8CAAQ;AAEU,QAAzD,AAAa,wBAAI,AAAa,AAAQ,6CAAQ;AAES,QAAvD,AAAa,wBAAI,AAAa,AAAO,4CAAQ;AAEW,QAAxD,AAAa,wBAAI,AAAQ,AAAU,0CAAQ;AAE3B,QAAhB;AAGA,cAAK;AACY,UAAb,aAAQ;AACK,UAAb,aAAQ;;;AAEM,QAAlB,AAAgB,gBAAA;AAE4B,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;IAExC;gBAGe;AACK,MAAhB;IACJ;eAGc;AACiC,MAA3C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;cAGa;AACqC,MAA9C,AAAQ,AAAQ,8BAAO,AAAY;IACvC;iBAGgB;AACL,MAAP;IACJ;;AAKoB,MAAhB;AACmB,MAAnB;IAEJ;;AAII,oBAAI,AAAc;AAC8B,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;AAGe,QAA/C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAII,oBAAI,AAAc;AAC6B,QAA3C,AAAQ,AAAQ,2BAAI,AAAY;;AAGc,QAA9C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAOM,MAFE,gBAAU,qCAAwB,AAAU,8DAAsB;AAC/C,QAAnB,AAAa;;IAErB;;wDAzMiD,SAA4B;IAPhE,gBAAc,kBAAO;IAKT,sBAAgB;AAGnC,2DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MARqC,uCAAS;;;MACP,yCAAW;;;;;IA+NrC;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;;;IA1BA,gBAAQ;IAER,gBAAQ;IAER,cAAQ;IAER,cAAQ;IAER,sBAAe;IAEf,wBAAgB;IAEhB,+BAAuB;IAEvB,2BAAmB;IAEnB,wBAAgB;IAEhB,iBAAS;IAET,qBAAa;IAEb,sBAAc;IAEd,qBAAa;IAEb,uBAAc;;EAEM;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA9Bb,mDAAU;;;;;IAmCpB;;;;;;;;iCAAqB;;EAEA;;;;;;;;;;;IC/QlB;;;;;;;;IACiB;;EAAS;;;;;;;;;;;;;;;;;;;;;kBAyCU;AAAY,YAAmC,gCAAnC,sBAAa,OAAO,EAAC;IAA6B;;AAIH,MAAxG,AAAU,mBAAA,OAAV,kBAAkB,mEAA+D,cAAM,kBAAY,yBAAzF;AACV,YAAO,AAAU;IACrB;;AAMI,eAAQ,QAAQ,GAAE,AAAM,KAAD,gBAAG,AAAM,uBAAO,QAAA,AAAK,KAAA;AACxC,sBAAG,AAAK,AAAQ,AAAQ,mBAAf,KAAK,qBAAmB,AAAY;AAC5B,2BAAa,AAAK,AAAQ,AAAU,mBAAjB,KAAK,sBAAa;AACrC,qBAAO,AAAW,AAAU,UAAX,SAAO,YAAK;AAC1C,gBAAO,KAAI;;;AAGnB,YAAO;IACX;;AAKuC,MAAnC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AACA,QAAX;;IAER;;AAKI,oBAAI,AAAQ,AAAQ,gCAAS,AAAY;AAC8B,QAAnE,AAAQ,AAAQ,2BAAI,AAAY;;AAI+B,MAAnE,AAAM,qBAAO,AAAQ,8CAAiB,AAAI,mBAAE,AAAY;AACe,MAAvE,AAAQ,uBAAO,AAAQ,8CAAiB,AAAI,mBAAE,AAAY;AAG1D,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAM,uBAAQ,IAAA,AAAC,CAAA;AACC,QAA5B,oCAAa,AAAK,mBAAC,CAAC,GAAG;;AAGgB,MAA/C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;;AAKI,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAM,uBAAQ,IAAA,AAAC,CAAA;AACkB,QAAjD,AAAK,AAAI,AAAQ,mBAAX,CAAC,mBAAiB,AAAY;;IAE5C;;AAKI,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAQ,yBAAQ,IAAA,AAAC,CAAA;AACkB,QAAnD,AAAO,AAAI,AAAQ,qBAAX,CAAC,mBAAiB,AAAY;;IAE9C;YAE0C;AACtC,UAAG,mBAAa,kBAAQ,AAAU;AACV,QAApB,AAAU,oBAAI,KAAK;;IAE3B;;sDA5E+C,SAA4B;IAV9D,gBAAc,kBAAO;IAKV,cAAY;IACZ,gBAAc;IAEK;AAGrC,yDAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;MAXmC,qCAAS;;;MACP,uCAAW;;;;;;oBA0HhB;AACf,uBAAa,AAAI,AAAU,GAAX,qBAAY;AACzC,UAAG,AAAW,UAAD,cAAY;AACR,mBAAO,AAAW,AAAU,UAAX,SAAO,YAAK;AACpB,wCAAQ,AAAI,AAAQ,+BAAc,AAAI,mBAAE,IAAI;AAE9C,QAApB,AAAI;AACkB,QAAtB,AAAI;AACqC,QAAzC,AAAI,AAAQ,GAAT,eAAa,AAAY;AACe,QAA3C,AAAM,AAAQ,KAAT,eAAa,AAAY;AAEe,QAA7C,AAAI,gBAAU,gDAAyB,IAAI;;IAEnD;;8CA3CkB,KAAS;IAAT;IAAS;AAEvB,QAAI,YAAO;AACP,oBAAI,AAAI,AAAQ,AAAQ,oCAAS,AAAY;AAEnB,8BAAsB;AACiB,QAA7D,AAAgB,AAAQ,eAAT,eAAa,AAAY;AACqB,QAA7D,AAAgB,AAAQ,eAAT,eAAa,AAAY;AAElB,qBAAa;AACO,QAA1C,AAAO,AAAQ,MAAT,eAAa,AAAY;AACD,QAA9B,AAAgB,eAAD,UAAQ,MAAM;AACF,QAA3B,AAAI,kBAAO,eAAe;;AAW3B,MARH,AAAI,AAAa,4BAAK,AAAI,AAAQ,0BAAQ,QAAiB;AAC1C,yBAAa,AAAI,AAAU,6BAAC;AACzC,YAAG,AAAW,UAAD,cAAY;AACC,UAAtB,AAAM,KAAD;AACkB,UAAvB,AAAM,KAAD;AAEa,UAAlB,oBAAc;;;;EAI9B;;;;;;;;;;;;;;MA3BqC,uCAAW;;;;;IA+DnC;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;IARA,kBAAY;IACZ,oBAAc;IACd,qBAAe;IACf,uBAAiB;IAEjB,6BAAuB;IACvB,6BAAuB;IACvB,oBAAa;IACb,4CAAqC;;EACnB;;;;;;;;;;;;;;;;;;;;;;;;MAXX,iDAAU;;;;;;;EAgBD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBC7KyB;AAChC;AAClB;AAC+F,QAA3F,YAAuE,oCAA3D,sBAAa,OAAO,EAAC,+DAA+B;;;AAElE;AACwB,+CAAa,AAAQ,OAAD,eAAe,AAAuB,eAAnB,AAAY;AACE,UAA3E,YAAuD,oCAA3C,sBAAa,UAAU,EAAC;;;;AAExC,YAAO,UAAS;IACpB;;AAGuB;IAAY;;AAG/B,UAAG,AAAO,gBAAG;AACiE,QAA1E,eAAwD,oBAA/C,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;;AAEnD,YAAO;IACX;;AAGI,UAAG,AAAO,gBAAG;AACkE,QAA3E,eAAwD,qBAA/C,AAAQ,2BAAc,AAAuB,eAAnB,AAAY;;AAEnD,YAAO;IACX;;AAIiC,MAAf,UAAd,iCAAyB;AACT,MAAhB;IACJ;;AAIkC,MAAhB,UAAd,iCAAyB;AACT,MAAhB;IACJ;WAGyB;AACrB,UAAI,KAAK,IAAI,wBAAQ,KAAK,EAAkB,WAAd;AACf,mCAAsC,AAAqB,AAAK,qBAAxC,8BAA2C;AAE1E,uBAAW;AACf,YAAG,oBAAoB;AACsB,qBAAzC,YAA2B,WAAf;;AAGhB,cAAK,kCAA0C;AACS,UAApC,WAAf,2CAAiC,QAAQ,EAAC,QAAQ;;;AAGc,QAAvD,UAAd,8BAAwC,AAAgB,4DAAT,sBAAgB,KAAK;AACpE,YAAG,oBAAoB;AACsB,UAAzC,AAA+B,+BAAA,CAAC,QAAQ;;AAK5C,cAAK;;AACD,mBAAgB,UAAgC;AAC5C,gBAAG,AAAQ,OAAD,IAAI,kBAAQ,AAAQ,AAAQ,OAAT,oBAAkB;AAC3C,oBAAO,QAAO;;AAElB,kBAAO,AAAS,UAAA,qBAAC,AAAQ,OAAD;;;AAGZ,4BAAc,AAAS,SAAA,qBAAC;AACgD,gBAAxF,WAAW;wBAAX,OAAa,kBAAkB,qBAAgB,qCAAmC;;;AAGlE,QAApB,AAAkB,kBAAA;AACX,QAAP;;AAGY,MAAhB;IACJ;;AAG0B,mBAAS;AAC/B,YAAO,AAAO,OAAD,IAAI,OAAO,AAAO,AAAK,MAAN,mBAAe;IACjD;cAE4B;;AACL,MAAV,uCAAQ,CAAC;AAEI,mBAAS;AAC6B,YAA5D,MAAM;oBAAN,OAAQ,aAAO,AAA6B,kBAAhB,MAAM,EAAC,qBAAgB,AAAE,CAAD;IACxD;;AAGoB,4BAAc,WAAd;IAAmB;cAGX;AACX,MAAb,YAAO,KAAK;IAChB;0BAKwC;AACpC,oBAAG;AACc,QAAb,YAAO,KAAK;;IAEpB;;AAKgC,MAAhB;IAAkB;;AAId,YAAc,AAAiB,YAA/B,oCAA0B,oBAAgC,WAAT,WAAd,8CAA+B,QAAQ;IAAI;;AAG3E,wBAAC;IAAO;;AAIN,MAAP,WAAd;AACgB,MAAhB;IACJ;;AAIwB,MAAN,WAAd;AACgB,MAAhB;IACJ;;AAII,YAAW,AAAS,AAAsB,gCAAL,QAAmC,YAAvB,AAAS,6BAAiB;IAC/E;;AAEuB,wBAAC;IAAQ;;;AAKY,MAAxC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AAEX,YAAI,qBAAgB;AAChB,wBAAI,AAAQ,AAAW,wCAAY,AAAU,mEACzC,AAAQ,AAAU,iCAAC,AAAU,kEAAuB,QACpD,AAAQ,AAAU,AAA+B,iCAA9B,AAAU;AAEuE,YAApG,kBAA4E,MAA7D,kBAAS,AAAQ,4BAAa,AAAU,wEAAxC,OAAgE,AAAU;AACzF,gBAAG,AAAS,kBAAG,AAAU;AACqD,cAA1E,AAAQ,qBAAO,AAA0D,+DAAN;;;AAI3E,wBAAI,AAAa,AAAW,6CAAY;AACY,YAAhD,AAAQ,AAAQ,2BAAI,AAAY;;AAGoC,UAAxE,AAAa,wBAAI,AAAa,AAAQ,mCAAQ,QAAC,KAAM;AAGG,UAAxD,AAAa,wBAAI,AAAa,AAAQ,6CAAQ;AAGQ,UAAtD,AAAa,wBAAI,AAAa,AAAO,4CAAQ;AAEW,UAAxD,AAAa,wBAAI,AAAa,AAAQ,6CAAQ;AAE9C,cAAI,kBAAY,AAAU;AAGkC,YAAxD,AAAa,wBAAI,AAAQ,AAAU,0CAAQ;;AAG/B,UAAhB;AAGA,gBAAK;AACY,YAAb,aAAQ;;;AAEM,UAAlB,AAAgB,gBAAA;AAQL,0BAAY,AAAQ,AAAQ,gCAAS,AAAY;AAC5D,wBAAI,SAAS,KAAI,AAAM;AAC2B,YAA9C,AAAQ,AAAQ,8BAAO,AAAY;;AAEK,UAA5C,AAAQ,AAAQ,2BAAI,AAAY;;;IAG5C;iBAGwC;AAG9B,4BAAkB,AAAM,AAAY,mBAAN;AACpC,UAAI,AAAM,AAAQ,KAAT;AACL,YAAoB,aAAhB,eAAe,kBAAI;AACG,UAAtB,AAAM,KAAD;;;IAGjB;eAGc;AACiC,MAA3C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;cAGa;AACqC,MAA9C,AAAQ,AAAQ,8BAAO,AAAY;IACvC;;AAMoB,MAAhB;AACgB,MAAhB;AACa,MAAb;AACa,MAAb;IACJ;eAGc;AACM,MAAhB;IACJ;;AAII,qBAAkB,WAAd;AAC4C,QAA5C,AAAQ,AAAQ,2BAAI,AAAY;;AAGe,QAA/C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAII,UAAkB,WAAd,oCAA0B;AAE1B,uBAA2B,WAAT,WAAd;AAC8C,UAA9C,AAAQ,AAAQ,8BAAO,AAAY;;AAGQ,UAA3C,AAAQ,AAAQ,2BAAI,AAAY;;;IAG5C;;AAII,UAAmB,WAAd,iCAAuB,mBAA4B,WAAN,WAAd,iDAClB,qBAAd,wBACoD,AAAW,AAAO,cAAnD,AAAqB,qBAAnC;AAEoC,QAAzC,AAAQ,AAAQ,2BAAI,AAAY;;AAGY,QAA5C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAII,UAAI,AAAQ,2BAAc,aAAa;AACQ,QAA3C,AAAQ,AAAQ,2BAAI,AAAY;;AAGc,QAA9C,AAAQ,AAAQ,8BAAO,AAAY;;IAE3C;;AAG6B;IAAY;;2DArSW,SAA4B;IAVnE,gBAAc,kBAAO;IAK9B,iBAAW,AAAU;IAET;IACC;AAGX,8DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAXwC,0CAAS;;;MACP,4CAAW;;;;;IAgUxC;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;;;IAdA,gBAAQ;IAER,gBAAQ;IAER,iBAAW;IAEX,qBAAa;IAEb,sBAAc;IAEd,mBAAa;IAEb,uBAAc;IAEd,wBAAkB;;EAEK;;;;;;;;;;;;;;;;;;;;;;;;MAlBhB,sDAAU;;;;;IAwBpB;;;;;;IACG;;;;;;;;IADH,oBAAc,CAAC;IACZ,2BAAqB;;EAEA;;;;;;;;;;;;;;;;;IC7VrB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;IAJA,oBAAY;IACZ,eAAS;IACT,aAAO;IACP,cAAQ;IACR,YAAM;;EAEe;;;;;;;;;;;;;MARd,oDAAU;;;;;;;EAaE;;;;;;;;;kBAwBoB;AAAY,YAAsC,mCAAtC,sBAAa,OAAO,EAAC;IAAmC;;;AAK9E,MAAtC,AAAQ,mBAAK;AAEb,UAAI,gBAAW;AAEE,uBAA+C,MAArC,AAAQ,4BAAa,wBAAb,OAAgC,AAAQ,4BAAa;AAEpF,YAAG,OAAO,IAAI;AACyB,UAAnC,AAAQ,mBAAK,AAAqB,uBAAT,OAAO;AAEyB,8BAAzD,oBAAc,AAAQ,AAAO,oCAAc,AAAa,eAAT,OAAO;AAEtD,cAAG,qBAAe;AACmB,YAAjC,AAAQ,mBAAK,AAAmB,qBAAT,OAAO;AAG9B,2BAAK,AAAY,AAAW,6CAAY;AACI,cAAxC,AAAY,AAAU,sCAAC,YAAc;;AAG6B,YAAtE,AAAa,wBAAI,AAAY,AAAa,kDAAQ;AACiB,YAAnE,AAAa,wBAAI,AAAY,AAAW,gDAAQ;AAEgB,YAAhE,AAAa,wBAAI,AAAY,AAAa,kDAAQ;AAI/C,YAHH,AAAa,wBAAQ,AAAO,AAAa,kCAAQ,QAAiB;AACvC,cAAvB,AAAM,KAAD;AACc,cAAnB,mBAAa,KAAK;;;;;IAMtC;wBAGuC;AACnC,oBAAG,AAAQ,AAAQ,gCAAS,AAAY;AACS,QAA7C,AAAQ,AAAQ,8BAAO,AAAY;AACnC;;AAGiB,kBAAQ,AAAY;AAErC,iBAAO,AAAM,AAAK,AAAQ,KAAd,oBAA6B,cAAZ,AAAM,KAAD,YAAU;AAEtC,gBAAM,AAAM,AAAI,AAAQ,KAAb,mBAA6B,cAAb,AAAM,KAAD,aAAW;AAExC,uBAAa,AAAG,CAAF,KAAyB,aAApB,AAAQ,8BAAc;AAEzC,sBAAY,AAAG,CAAF,KAA0B,aAArB,AAAQ,+BAAe;AAEtD,oBAAI,AAAQ,AAAQ,gCAAS,AAAY,+DAAS,AAAQ,AAAQ,gCAAS,AAAY;AAE1D,QAAzB,OAAoB,cAAZ,AAAM,KAAD,YAAU;AACvB,YAAI,AAAI,AAAY,GAAb,GAAG,SAAS,GAAG;AACK,UAAvB,AAAQ,AAAM,2BAAM;AACS,UAA7B,AAAQ,AAAM,iCAAY;;AAGI,UAA9B,AAAQ,AAAM,2BAAgB,SAAP,GAAG,IAAC;AACe,UAA1C,AAAQ,AAAM,iCAA4B,SAAb,SAAS,IAAC;;;AAI3C,YAAI,AAAK,AAAa,IAAd,GAAG,UAAU,GAAG;AACI,UAAxB,AAAQ,AAAM,4BAAO;AACS,UAA9B,AAAQ,AAAM,kCAAa;;AAGK,UAAhC,AAAQ,AAAM,4BAAkB,SAAR,IAAI,IAAC;AACe,UAA5C,AAAQ,AAAM,kCAA8B,SAAd,UAAU,IAAC;;;AAIjD,oBAAI,AAAQ,AAAQ,gCAAS,AAAY;AAC2B,QAAhE,AAAQ,AAAM,2BAAkD,SAA/B,AAAuB,aAAjC,AAAM,KAAD,uBAAO,AAAQ,+BAAe,MAAG;YAC1D,eAAI,AAAQ,AAAQ,gCAAS,AAAY;AACa,QAAzD,AAAQ,AAAM,4BAA2C,SAAtB,AAAc,aAAzB,AAAM,KAAD,wBAAQ,AAAM,KAAD,YAAS,MAAG;YACnD,eAAI,AAAQ,AAAQ,gCAAS,AAAY;AACqB,QAAjE,AAAQ,AAAM,4BAAmD,SAA9B,AAAsB,aAAjC,AAAM,KAAD,wBAAQ,AAAQ,8BAAc,MAAG;;AAGN,QAAxD,AAAQ,AAAM,2BAA0C,SAAvB,AAAe,aAAzB,AAAM,KAAD,uBAAO,AAAM,KAAD,aAAU,MAAG;;AAGf,MAA1C,AAAQ,AAAQ,2BAAI,AAAY;IACpC;mBAKkC;AACe,MAA7C,AAAQ,AAAQ,8BAAO,AAAY;IACvC;;yDAtGkD,SAA4B;IAPjE,gBAAc,kBAAO;IAKlB,oBAAc;AAGxB,4DAAM,OAAO,EAAC,YAAY;AACrB,IAAP;EACJ;;;;;;;;;;;;;;;;MARsC,wCAAS;;;MACP,0CAAW;;;;;AtBwIhB,UAAI,iDAoBU,iBAnBR,SAAuB,SAA4B,iBACjF,iDAA8B,OAAO,EAAC,YAAY;EAAE;;AAG/B,UAAA,AAAmB,sCAAS;EAA0B;;AIxHtE,iBAAa,yDAErB,SAAuB,SAA4B,iBACxC,6CAA0B,OAAO,EAAC,YAAY;AAKzB,IAAxC,AAAO,MAAD,gBAA6B;AAEA,IAAnC,AAAmB,qCAAS,MAAM;EACtC;;ACmCoB,iBAAa,2DAErB,SAAuB,SAA4B,iBACxC,8CAA2B,OAAO,EAAC,YAAY;AAE/B,IAAnC,AAAmB,qCAAS,MAAM;EACtC;;AC+HsC,UAAI,gEACE,SAAuB,SAA4B,iBACxF,gDAA6B,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAAyB;;AC/DpE,iBAAa,kEAErB,SAAuB,SAA6B,iBAAqB,iDAA8B,OAAO,EAAE,YAAY;AAEjG,IAAnC,AAAmB,qCAAS,MAAM;EACtC;;ACgLmC,IAA/B;AACkC,IAAlC;EACJ;;AAGoB,iBAAa,uEAEzB,SAAuB,SAA6B,iBAAqB,oDAAiC,OAAO,EAAE,YAAY;AAEhG,IAAnC,AAAmB,qCAAS,MAAM;EACtC;;AAGoB,iBAAa,mFAEzB,SAAuB,SAA6B,iBAAqB,uDAAoC,OAAO,EAAE,YAAY;AAKnF,IAAnD,AAAO,MAAD,YAAiC;AAEJ,IAAnC,AAAmB,qCAAS,MAAM;EACtC;;ANhRoB,iBAAa,2DAErB,SAAuB,SAA4B,iBAAqB,iDAA8B,OAAO,EAAC,YAAY;AAKjF,IAAjD,AAAO,MAAD,YAAiC;AAKK,IAA5C,AAAO,MAAD,gBAA6B;AAEA,IAAnC,AAAmB,qCAAS,MAAM;EACtC;;AO0CwC,UAAI,qEACE,SAAuB,SAA4B,iBAC1F,kDAA+B,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAA2B;;ACxFxE,iBAAa,mEAErB,SAAuB,SAA4B,iBAAqB,kDAA+B,OAAO,EAAC,YAAY;AAM3F,IAAxC,AAAO,MAAD,gBAA6B;AAEA,IAAnC,AAAmB,qCAAS,MAAM;EACtC;;ACqgBoC,UAAI,4DACE,SAAuB,SAA4B,iBACtF,8CAA2B,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAAuB;;AChKlD,UAAI,wDACE,SAAuB,SAA4B,iBACpF,4CAAyB,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAAqB;;AC9X1C,UAAI,gEACE,SAAuB,SAA4B,iBACxF,gDAA6B,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAAyB;;ACoBpF,UAAI,yEACgD,SAAuB,SACnD,iBAAqB,wDAAqC,OAAO,EAAE,YAAY;EAAE;;AAGlE,UAAA,AAAmB,sCAAS;EAAiC;;ACmQrE,UAAI,0DACE,SAAuB,SAA4B,iBACrF,6CAA0B,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAAsB;;AAG1C,UAAI,qEACF,SAAuB,SAA4B,iBACtF,kDAA+B,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAA2B;;AC9VxD,iBAAa,4DAErC,SAAuB,SAA6B,iBAC7C,8CAA2B,OAAO,EAAE,YAAY;AAEpB,IAA3C,AAAO,MAAD,YAAiC;AACvC,UAAO,OAAM;EACjB;;AAGiC,UAAA,AAAmB,sCAAS;EAAuB;;ACThD,UAAI,4DACE,SAAuB,SAA4B,iBAClF,8CAA2B,OAAO,EAAC,YAAY;EAAE;;AAG3B,UAAA,AAAmB,sCAAS;EAAuB;;ACP/C,UAAI,8DACE,SAAuB,SAA4B,iBACnF,+CAA4B,OAAO,EAAC,YAAY;EAAE;;AAG3B,UAAA,AAAmB,sCAAS;EAAwB;;AC8LlD,UAAI,4DACE,SAAuB,SAA4B,iBACtF,8CAA2B,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAAuB;;AC1DlD,UAAI,wDACE,SAAuB,SAA4B,iBACpF,4CAAyB,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAAqB;;AC6IzC,UAAI,kEACE,SAAuB,SAA4B,iBACzF,iDAA8B,OAAO,EAAC,YAAY;EAAE;;AAGvB,UAAA,AAAmB,sCAAS;EAA0B;;AC3SrD,UAAI,8DACE,SAAuB,SAA4B,iBACnF,+CAA4B,OAAO,EAAC,YAAY;EAAE;;AAG3B,UAAA,AAAmB,sCAAS;EAAwB;;ArB0BvD,IAA3B;AAE2B,IAA3B;AACuB,IAAvB;AACwB,IAAxB;AAC0B,IAA1B;AAC2B,IAA3B;AAC8B,IAA9B;AAC4B,IAA5B;AAC4B,IAA5B;AACwB,IAAxB;AACsB,IAAtB;AAC0B,IAA1B;AACkC,IAAlC;AACuB,IAAvB;AAC4B,IAA5B;AACwB,IAAxB;AACyB,IAAzB;AACwB,IAAxB;AACsB,IAAtB;AAC2B,IAA3B;AACyB,IAAzB;AAGwB,IAAxB;EACJ;;MCxEuB,8BAAe;YAAG","file":"m4d_components.ddc.js"}');
  // Exports:
  return {
    m4d_components: m4d_components
  };
});

//# sourceMappingURL=m4d_components.ddc.js.map
