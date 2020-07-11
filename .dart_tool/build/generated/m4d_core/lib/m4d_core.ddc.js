define(['dart_sdk', 'packages/logging/logging', 'packages/validate/expect', 'packages/m4d_core/m4d_ioc', 'packages/m4d_core/services', 'packages/m4d_core/core/interfaces', 'packages/m4d_core/m4d_utils'], function(dart_sdk, packages__logging__logging, packages__validate__expect, packages__m4d_core__m4d_ioc, packages__m4d_core__services, packages__m4d_core__core__interfaces, packages__m4d_core__m4d_utils) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const js = dart_sdk.js;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logger = packages__logging__logging.src__logger;
  const validate = packages__validate__expect.validate;
  const m4d_ioc = packages__m4d_core__m4d_ioc.m4d_ioc;
  const services = packages__m4d_core__services.services;
  const interfaces = packages__m4d_core__core__interfaces.core__interfaces;
  const m4d_utils = packages__m4d_core__m4d_utils.m4d_utils;
  var m4d_core = Object.create(dart.library);
  var $classes = dartx.classes;
  var $attributes = dartx.attributes;
  var $onInput = dartx.onInput;
  var $onClick = dartx.onClick;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $parent = dartx.parent;
  var $putIfAbsent = dartx.putIfAbsent;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $children = dartx.children;
  var $containsKey = dartx.containsKey;
  var $values = dartx.values;
  var $compareTo = dartx.compareTo;
  var $sort = dartx.sort;
  var $toLowerCase = dartx.toLowerCase;
  var $querySelectorAll = dartx.querySelectorAll;
  var $contains = dartx.contains;
  var $_equals = dartx._equals;
  var $split = dartx.split;
  var $join = dartx.join;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $toString = dartx.toString;
  var $length = dartx.length;
  var $last = dartx.last;
  var $display = dartx.display;
  var $insertAdjacentElement = dartx.insertAdjacentElement;
  var $requestAnimationFrame = dartx.requestAnimationFrame;
  var $insert = dartx.insert;
  var $dataset = dartx.dataset;
  var $toInt = dartx.toInt;
  var $isEmpty = dartx.isEmpty;
  var $indexOf = dartx.indexOf;
  var $addAll = dartx.addAll;
  var $removeRange = dartx.removeRange;
  var $where = dartx.where;
  var $isNotEmpty = dartx.isNotEmpty;
  var $runtimeType = dartx.runtimeType;
  var $first = dartx.first;
  var JSArrayOfStreamSubscriptionL = () => (JSArrayOfStreamSubscriptionL = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  var StreamSubscriptionLTovoid = () => (StreamSubscriptionLTovoid = dart.constFn(dart.fnType(dart.void, [async.StreamSubscription])))();
  var FutureOfNullN = () => (FutureOfNullN = dart.constFn(async.Future$(core.Null)))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var FutureOfboolL = () => (FutureOfboolL = dart.constFn(async.Future$(core.bool)))();
  var VoidToFutureLOfboolL = () => (VoidToFutureLOfboolL = dart.constFn(dart.fnType(FutureOfboolL(), [])))();
  var MdlConfigOfMdlComponentL = () => (MdlConfigOfMdlComponentL = dart.constFn(m4d_core.MdlConfig$(m4d_core.MdlComponent)))();
  var IdentityMapOfStringL$MdlConfigLOfMdlComponentL = () => (IdentityMapOfStringL$MdlConfigLOfMdlComponentL = dart.constFn(_js_helper.IdentityMap$(core.String, MdlConfigOfMdlComponentL())))();
  var VoidToMdlConfigLOfMdlComponentL = () => (VoidToMdlConfigLOfMdlComponentL = dart.constFn(dart.fnType(MdlConfigOfMdlComponentL(), [])))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  var ListOfHtmlElementL = () => (ListOfHtmlElementL = dart.constFn(core.List$(html.HtmlElement)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var MdlConfigLOfMdlComponentLToNullN = () => (MdlConfigLOfMdlComponentLToNullN = dart.constFn(dart.fnType(core.Null, [MdlConfigOfMdlComponentL()])))();
  var HtmlElementLToNullN = () => (HtmlElementLToNullN = dart.constFn(dart.fnType(core.Null, [html.HtmlElement])))();
  var ElementLToNullN = () => (ElementLToNullN = dart.constFn(dart.fnType(core.Null, [html.Element])))();
  var HtmlElementLTovoid = () => (HtmlElementLTovoid = dart.constFn(dart.fnType(dart.void, [html.HtmlElement])))();
  var ListOfMdlConfigLOfMdlComponentL = () => (ListOfMdlConfigLOfMdlComponentL = dart.constFn(core.List$(MdlConfigOfMdlComponentL())))();
  var MdlConfigLOfMdlComponentLAndMdlConfigLOfMdlComponentLTointL = () => (MdlConfigLOfMdlComponentLAndMdlConfigLOfMdlComponentLTointL = dart.constFn(dart.fnType(core.int, [MdlConfigOfMdlComponentL(), MdlConfigOfMdlComponentL()])))();
  var ElementLTovoid = () => (ElementLTovoid = dart.constFn(dart.fnType(dart.void, [html.Element])))();
  var HtmlElementLToboolL = () => (HtmlElementLToboolL = dart.constFn(dart.fnType(core.bool, [html.HtmlElement])))();
  var ElementLToboolL = () => (ElementLToboolL = dart.constFn(dart.fnType(core.bool, [html.Element])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(core.String)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var HtmlElementLToLvoid = () => (HtmlElementLToLvoid = dart.constFn(dart.fnType(dart.void, [html.HtmlElement])))();
  var FnTovoid = () => (FnTovoid = dart.constFn(dart.fnType(dart.void, [HtmlElementLToLvoid()])))();
  var StringLToNullN = () => (StringLToNullN = dart.constFn(dart.fnType(core.Null, [core.String])))();
  var JSArrayOfHtmlElementLToLvoid = () => (JSArrayOfHtmlElementLToLvoid = dart.constFn(_interceptors.JSArray$(HtmlElementLToLvoid())))();
  var HtmlElementLAndContainerLToLMdlComponentL = () => (HtmlElementLAndContainerLToLMdlComponentL = dart.constFn(dart.fnType(m4d_core.MdlComponent, [html.HtmlElement, m4d_ioc.Container])))();
  var VoidToLvoid = () => (VoidToLvoid = dart.constFn(dart.fnType(dart.void, [])))();
  var JSArrayOfVoidToLvoid = () => (JSArrayOfVoidToLvoid = dart.constFn(_interceptors.JSArray$(VoidToLvoid())))();
  var CompleterOfElementL = () => (CompleterOfElementL = dart.constFn(async.Completer$(html.Element)))();
  var numLToNullN = () => (numLToNullN = dart.constFn(dart.fnType(core.Null, [core.num])))();
  var voidToNullN = () => (voidToNullN = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var StringLTointL = () => (StringLTointL = dart.constFn(dart.fnType(core.int, [core.String])))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(core.String)))();
  var HtmlElementLAnddynamicToboolL = () => (HtmlElementLAnddynamicToboolL = dart.constFn(dart.fnType(core.bool, [html.HtmlElement, dart.dynamic])))();
  var ListChangedEventLToNullN = () => (ListChangedEventLToNullN = dart.constFn(dart.fnType(core.Null, [m4d_core.ListChangedEvent])))();
  var dynamicAnddynamic__ToLStringL = () => (dynamicAnddynamic__ToLStringL = dart.constFn(dart.fnType(core.String, [dart.dynamic, dart.dynamic], {format: core.String}, {})))();
  var TimerLToNullN = () => (TimerLToNullN = dart.constFn(dart.fnType(core.Null, [async.Timer])))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var JSArrayOfMdlComponentL = () => (JSArrayOfMdlComponentL = dart.constFn(_interceptors.JSArray$(m4d_core.MdlComponent)))();
  var MdlComponentLToNullN = () => (MdlComponentLToNullN = dart.constFn(dart.fnType(core.Null, [m4d_core.MdlComponent])))();
  var ElementLTodynamic = () => (ElementLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Element])))();
  var UnmodifiableListViewOfMdlComponentL = () => (UnmodifiableListViewOfMdlComponentL = dart.constFn(collection.UnmodifiableListView$(m4d_core.MdlComponent)))();
  const CT = Object.create(null);
  var L0 = "package:m4d_core/m4d_core.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: m4d_core.SelectorType.prototype,
        [_name$]: "SelectorType.TAG",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: m4d_core.SelectorType.prototype,
        [_name$]: "SelectorType.ATTRIBUTE",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: m4d_core.SelectorType.prototype,
        [_name$]: "SelectorType.CLASS",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: m4d_core._MdlComponentHandlerCssClasses.prototype,
        [RIPPLE_EFFECT]: "mdl-ripple-effect",
        [IS_UPGRADED]: "is-upgraded",
        [DOWNGRADED]: "mdl-downgraded",
        [HTML_DART]: "mdl-dart",
        [HTML_JS]: "mdl-js",
        [UPGRADED]: "mdl-upgraded",
        [UPGRADING]: "mdl-upgrading"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: m4d_core._MdlComponentHandlerConstant.prototype,
        [TEMPLATE]: "template"
      });
    },
    get C6() {
      return C6 = dart.constList([C3 || CT.C3, C1 || CT.C1, C2 || CT.C2], m4d_core.SelectorType);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: m4d_core.RegistrationPriority.prototype,
        [_name$]: "RegistrationPriority.FIRST",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: m4d_core.RegistrationPriority.prototype,
        [_name$]: "RegistrationPriority.PRE_WIDGET",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: m4d_core.RegistrationPriority.prototype,
        [_name$]: "RegistrationPriority.WIDGET",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: m4d_core.RegistrationPriority.prototype,
        [_name$]: "RegistrationPriority.CHILD_WIDGET",
        index: 3
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: m4d_core.RegistrationPriority.prototype,
        [_name$]: "RegistrationPriority.POST_WIDGET",
        index: 4
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: m4d_core.RegistrationPriority.prototype,
        [_name$]: "RegistrationPriority.DEFAULT",
        index: 5
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: m4d_core.RegistrationPriority.prototype,
        [_name$]: "RegistrationPriority.LAST",
        index: 6
      });
    },
    get C14() {
      return C14 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], m4d_core.RegistrationPriority);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: m4d_core._RendererCssClasses.prototype,
        [LOADED]: "mdl-content__loaded",
        [LOADING]: "mdl-content__loading"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: m4d_core.ListChangeType.prototype,
        [_name$]: "ListChangeType.ADD",
        index: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: m4d_core.ListChangeType.prototype,
        [_name$]: "ListChangeType.INSERT",
        index: 1
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: m4d_core.ListChangeType.prototype,
        [_name$]: "ListChangeType.UPDATE",
        index: 2
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: m4d_core.ListChangeType.prototype,
        [_name$]: "ListChangeType.REMOVE",
        index: 3
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: m4d_core.ListChangeType.prototype,
        [_name$]: "ListChangeType.CLEAR",
        index: 4
      });
    },
    get C21() {
      return C21 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], m4d_core.ListChangeType);
    },
    get C22() {
      return C22 = dart.fn(m4d_core.ObservableList._defaultUpdateCallback, HtmlElementLAnddynamicToboolL());
    }
  }, false);
  m4d_core.MdlDataConsumer = class MdlDataConsumer extends core.Object {};
  (m4d_core.MdlDataConsumer.new = function() {
    ;
  }).prototype = m4d_core.MdlDataConsumer.prototype;
  dart.addTypeTests(m4d_core.MdlDataConsumer);
  dart.addTypeCaches(m4d_core.MdlDataConsumer);
  dart.setLibraryUri(m4d_core.MdlDataConsumer, L0);
  var eventStreams = dart.privateName(m4d_core, "MdlEventListener.eventStreams");
  m4d_core.MdlEventListener = class MdlEventListener extends core.Object {
    get eventStreams() {
      return this[eventStreams];
    }
    set eventStreams(value) {
      super.eventStreams = value;
    }
  };
  (m4d_core.MdlEventListener.new = function() {
    this[eventStreams] = JSArrayOfStreamSubscriptionL().of([]);
    ;
  }).prototype = m4d_core.MdlEventListener.prototype;
  dart.addTypeTests(m4d_core.MdlEventListener);
  dart.addTypeCaches(m4d_core.MdlEventListener);
  dart.setLibraryUri(m4d_core.MdlEventListener, L0);
  dart.setFieldSignature(m4d_core.MdlEventListener, () => ({
    __proto__: dart.getFields(m4d_core.MdlEventListener.__proto__),
    eventStreams: dart.finalFieldType(core.List$(async.StreamSubscription))
  }));
  var _logger = dart.privateName(m4d_core, "_logger");
  var _getMdlParent = dart.privateName(m4d_core, "_getMdlParent");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var injector$ = dart.privateName(m4d_core, "MdlComponent.injector");
  var element$ = dart.privateName(m4d_core, "MdlComponent.element");
  var visualDebugging = dart.privateName(m4d_core, "MdlComponent.visualDebugging");
  const Object_MdlEventListener$36 = class Object_MdlEventListener extends core.Object {};
  (Object_MdlEventListener$36.new = function() {
    m4d_core.MdlEventListener.new.call(this);
  }).prototype = Object_MdlEventListener$36.prototype;
  dart.applyMixin(Object_MdlEventListener$36, m4d_core.MdlEventListener);
  m4d_core.MdlComponent = class MdlComponent extends Object_MdlEventListener$36 {
    get injector() {
      return this[injector$];
    }
    set injector(value) {
      super.injector = value;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    get visualDebugging() {
      return this[visualDebugging];
    }
    set visualDebugging(value) {
      this[visualDebugging] = value;
    }
    get hub() {
      return this.element;
    }
    get classes() {
      return this.element[$classes];
    }
    get attributes() {
      return this.element[$attributes];
    }
    get onInput() {
      return this.hub[$onInput];
    }
    get onClick() {
      return this.hub[$onClick];
    }
    downgrade() {
      this.eventStreams[$forEach](dart.fn(stream => this.cancelStream(stream), StreamSubscriptionLTovoid()));
      this.eventStreams[$clear]();
    }
    cancelStream(stream) {
      if (stream != null) {
        stream.cancel();
      }
    }
    get parent() {
      return this[_getMdlParent](html.HtmlElement.as(this.element));
    }
    attached() {
    }
    update() {
    }
    query(selector, opts) {
      let logError = opts && 'logError' in opts ? opts.logError : true;
      let result = this.element.querySelector(selector);
      if (result == null && dart.test(logError)) {
        this[_logger].warning("Could not find '" + dart.str(selector) + "' within " + dart.str(this.element) + "!");
      }
      return result;
    }
    waitForChild(T, selector, opts) {
      let wait = opts && 'wait' in opts ? opts.wait : C0 || CT.C0;
      let maxIterations = opts && 'maxIterations' in opts ? opts.maxIterations : 10;
      return async.async(T, (function* waitForChild() {
        validate.Validate.notBlank(selector);
        let child = T.as(this.element.querySelector(selector));
        if (child != null) {
          return child;
        }
        this[_logger].warning("Waiting for '" + dart.str(selector) + "' within " + dart.str(this.element) + "...");
        let iterationCounter = 0;
        yield async.Future.doWhile(dart.fn(() => async.async(core.bool, (function*() {
          yield FutureOfNullN().delayed(wait, dart.fn(() => {
            child = T.as(this.query(selector));
            iterationCounter = iterationCounter + 1;
          }, VoidToNullN()));
          return child == null && iterationCounter < dart.notNull(maxIterations);
        }).bind(this)), VoidToFutureLOfboolL()));
        if (iterationCounter >= dart.notNull(maxIterations)) {
          dart.throw(new async.TimeoutException.new("Could not find '" + dart.str(selector) + "' within " + dart.str(this.element) + ", " + "gave up after " + dart.str(maxIterations) + " retries!"));
        }
        this[_logger].warning("Found " + dart.str(child) + " with '" + dart.str(selector) + "' within " + dart.str(this.element) + "...");
        return child;
      }).bind(this));
    }
    [_getMdlParent](element) {
      let parent = null;
      try {
        parent = m4d_core.mdlComponent(html.HtmlElement.as(element[$parent]), null);
      } catch (e$) {
        let ex = dart.getThrown(e$);
        if (m4d_core.WrongComponentTypeException.is(ex)) {
          let wct = ex;
          this[_logger].warning(wct);
          dart.throw(wct);
        } else {
          let e = ex;
          return this[_getMdlParent](html.HtmlElement.as(element[$parent]));
        }
      }
      if (parent != null) {
        return parent;
      }
      return null;
    }
  };
  (m4d_core.MdlComponent.new = function(element, injector) {
    this[_logger] = logger.Logger.new("mdlcore.MdlComponent");
    this[visualDebugging] = false;
    this[element$] = element;
    this[injector$] = injector;
    m4d_core.MdlComponent.__proto__.new.call(this);
    ;
  }).prototype = m4d_core.MdlComponent.prototype;
  dart.addTypeTests(m4d_core.MdlComponent);
  dart.addTypeCaches(m4d_core.MdlComponent);
  dart.setMethodSignature(m4d_core.MdlComponent, () => ({
    __proto__: dart.getMethods(m4d_core.MdlComponent.__proto__),
    downgrade: dart.fnType(dart.void, []),
    cancelStream: dart.fnType(dart.void, [async.StreamSubscription]),
    attached: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, []),
    query: dart.fnType(html.Element, [core.String], {logError: core.bool}, {}),
    waitForChild: dart.gFnType(T => [async.FutureOr$(T), [core.String], {maxIterations: core.int, wait: core.Duration}, {}]),
    [_getMdlParent]: dart.fnType(m4d_core.MdlComponent, [html.HtmlElement])
  }));
  dart.setGetterSignature(m4d_core.MdlComponent, () => ({
    __proto__: dart.getGetters(m4d_core.MdlComponent.__proto__),
    hub: html.Element,
    classes: html.CssClassSet,
    attributes: core.Map$(core.String, core.String),
    onInput: html.ElementStream$(html.Event),
    onClick: html.ElementStream$(html.MouseEvent),
    parent: m4d_core.MdlComponent
  }));
  dart.setLibraryUri(m4d_core.MdlComponent, L0);
  dart.setFieldSignature(m4d_core.MdlComponent, () => ({
    __proto__: dart.getFields(m4d_core.MdlComponent.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    injector: dart.finalFieldType(m4d_ioc.Container),
    element: dart.finalFieldType(html.Element),
    visualDebugging: dart.fieldType(core.bool)
  }));
  var message$ = dart.privateName(m4d_core, "MultipleWidgetException.message");
  m4d_core.MultipleWidgetException = class MultipleWidgetException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
  };
  (m4d_core.MultipleWidgetException.new = function(message = null) {
    this[message$] = message;
    ;
  }).prototype = m4d_core.MultipleWidgetException.prototype;
  dart.addTypeTests(m4d_core.MultipleWidgetException);
  dart.addTypeCaches(m4d_core.MultipleWidgetException);
  m4d_core.MultipleWidgetException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(m4d_core.MultipleWidgetException, L0);
  dart.setFieldSignature(m4d_core.MultipleWidgetException, () => ({
    __proto__: dart.getFields(m4d_core.MultipleWidgetException.__proto__),
    message: dart.finalFieldType(dart.dynamic)
  }));
  var UPGRADING = dart.privateName(m4d_core, "_MdlComponentHandlerCssClasses.UPGRADING");
  var UPGRADED = dart.privateName(m4d_core, "_MdlComponentHandlerCssClasses.UPGRADED");
  var HTML_JS = dart.privateName(m4d_core, "_MdlComponentHandlerCssClasses.HTML_JS");
  var HTML_DART = dart.privateName(m4d_core, "_MdlComponentHandlerCssClasses.HTML_DART");
  var DOWNGRADED = dart.privateName(m4d_core, "_MdlComponentHandlerCssClasses.DOWNGRADED");
  var IS_UPGRADED = dart.privateName(m4d_core, "_MdlComponentHandlerCssClasses.IS_UPGRADED");
  var RIPPLE_EFFECT = dart.privateName(m4d_core, "_MdlComponentHandlerCssClasses.RIPPLE_EFFECT");
  m4d_core._MdlComponentHandlerCssClasses = class _MdlComponentHandlerCssClasses extends core.Object {
    get UPGRADING() {
      return this[UPGRADING];
    }
    set UPGRADING(value) {
      super.UPGRADING = value;
    }
    get UPGRADED() {
      return this[UPGRADED];
    }
    set UPGRADED(value) {
      super.UPGRADED = value;
    }
    get HTML_JS() {
      return this[HTML_JS];
    }
    set HTML_JS(value) {
      super.HTML_JS = value;
    }
    get HTML_DART() {
      return this[HTML_DART];
    }
    set HTML_DART(value) {
      super.HTML_DART = value;
    }
    get DOWNGRADED() {
      return this[DOWNGRADED];
    }
    set DOWNGRADED(value) {
      super.DOWNGRADED = value;
    }
    get IS_UPGRADED() {
      return this[IS_UPGRADED];
    }
    set IS_UPGRADED(value) {
      super.IS_UPGRADED = value;
    }
    get RIPPLE_EFFECT() {
      return this[RIPPLE_EFFECT];
    }
    set RIPPLE_EFFECT(value) {
      super.RIPPLE_EFFECT = value;
    }
  };
  (m4d_core._MdlComponentHandlerCssClasses.new = function() {
    this[UPGRADING] = "mdl-upgrading";
    this[UPGRADED] = "mdl-upgraded";
    this[HTML_JS] = "mdl-js";
    this[HTML_DART] = "mdl-dart";
    this[DOWNGRADED] = "mdl-downgraded";
    this[IS_UPGRADED] = "is-upgraded";
    this[RIPPLE_EFFECT] = "mdl-ripple-effect";
    ;
  }).prototype = m4d_core._MdlComponentHandlerCssClasses.prototype;
  dart.addTypeTests(m4d_core._MdlComponentHandlerCssClasses);
  dart.addTypeCaches(m4d_core._MdlComponentHandlerCssClasses);
  dart.setLibraryUri(m4d_core._MdlComponentHandlerCssClasses, L0);
  dart.setFieldSignature(m4d_core._MdlComponentHandlerCssClasses, () => ({
    __proto__: dart.getFields(m4d_core._MdlComponentHandlerCssClasses.__proto__),
    UPGRADING: dart.finalFieldType(core.String),
    UPGRADED: dart.finalFieldType(core.String),
    HTML_JS: dart.finalFieldType(core.String),
    HTML_DART: dart.finalFieldType(core.String),
    DOWNGRADED: dart.finalFieldType(core.String),
    IS_UPGRADED: dart.finalFieldType(core.String),
    RIPPLE_EFFECT: dart.finalFieldType(core.String)
  }));
  var TEMPLATE = dart.privateName(m4d_core, "_MdlComponentHandlerConstant.TEMPLATE");
  m4d_core._MdlComponentHandlerConstant = class _MdlComponentHandlerConstant extends core.Object {
    get TEMPLATE() {
      return this[TEMPLATE];
    }
    set TEMPLATE(value) {
      super.TEMPLATE = value;
    }
  };
  (m4d_core._MdlComponentHandlerConstant.new = function() {
    this[TEMPLATE] = "template";
    ;
  }).prototype = m4d_core._MdlComponentHandlerConstant.prototype;
  dart.addTypeTests(m4d_core._MdlComponentHandlerConstant);
  dart.addTypeCaches(m4d_core._MdlComponentHandlerConstant);
  dart.setLibraryUri(m4d_core._MdlComponentHandlerConstant, L0);
  dart.setFieldSignature(m4d_core._MdlComponentHandlerConstant, () => ({
    __proto__: dart.getFields(m4d_core._MdlComponentHandlerConstant.__proto__),
    TEMPLATE: dart.finalFieldType(core.String)
  }));
  var _DATA_KEY = dart.privateName(m4d_core, "_DATA_KEY");
  var _registeredComponents = dart.privateName(m4d_core, "_registeredComponents");
  var _iocContainer = dart.privateName(m4d_core, "_iocContainer");
  var _enableVisualDebugging = dart.privateName(m4d_core, "_enableVisualDebugging");
  var _isValidClassName = dart.privateName(m4d_core, "_isValidClassName");
  var _isRegistered = dart.privateName(m4d_core, "_isRegistered");
  var _configs = dart.privateName(m4d_core, "_configs");
  var _upgradeDom = dart.privateName(m4d_core, "_upgradeDom");
  var _deconstructComponent = dart.privateName(m4d_core, "_deconstructComponent");
  var _name$ = dart.privateName(m4d_core, "_name");
  var C1;
  var C2;
  var C3;
  var _upgradeElement = dart.privateName(m4d_core, "_upgradeElement");
  var C4;
  var C5;
  m4d_core.MdlComponentHandler = class MdlComponentHandler extends core.Object {
    register(config) {
      validate.Validate.notNull(MdlConfigOfMdlComponentL(), config);
      if (!dart.test(this[_isValidClassName](config.classAsString))) {
        this[_logger].severe("(" + dart.str(config.classAsString) + ") is not a valid component for " + dart.str(config.selector));
        return;
      }
      if (!dart.test(this[_isRegistered](config))) {
        this[_registeredComponents][$putIfAbsent](config.classAsString, dart.fn(() => config, VoidToMdlConfigLOfMdlComponentL()));
      }
    }
    bind(service) {
      return this[_iocContainer].bind(service);
    }
    registerUpgradedCallback(config, callback) {
      if (dart.test(this[_isValidClassName](config.classAsString)) && dart.test(this[_isRegistered](config))) {
        this[_registeredComponents][$_get](config.classAsString).callbacks[$add](callback);
      }
    }
    upgradeAllRegistered() {
      return this.run(dart.dynamic);
    }
    upgradeElement(element) {
      validate.Validate.notNull(html.HtmlElement, element, "Component must not be null!");
      return this.upgradeElements(JSArrayOfHtmlElementL().of([element]));
    }
    upgradeElements(elements) {
      let t2;
      validate.Validate.notNull(ListOfHtmlElementL(), elements, "List of elements must not be null!");
      t2 = html.querySelector("html");
      t2[$classes].add(m4d_core.MdlComponentHandler._cssClasses.HTML_JS);
      t2[$classes].add(m4d_core.MdlComponentHandler._cssClasses.HTML_DART);
      t2[$classes].remove(m4d_core.MdlComponentHandler._cssClasses.UPGRADED);
      t2;
      let future = FutureOfvoid().new(dart.fn(() => {
        elements[$forEach](dart.fn(element => {
          element[$classes].add(m4d_core.MdlComponentHandler._cssClasses.UPGRADING);
          this[_configs][$forEach](dart.fn(config => {
            this[_upgradeDom](element, config);
            this[_logger].fine(dart.str(config.selector) + " upgraded with " + dart.str(config.classAsString) + "...");
          }, MdlConfigLOfMdlComponentLToNullN()));
          element[$classes].remove(m4d_core.MdlComponentHandler._cssClasses.UPGRADING);
          element[$classes].add(m4d_core.MdlComponentHandler._cssClasses.UPGRADED);
        }, HtmlElementLToNullN()));
        html.querySelector("body")[$classes].remove(m4d_core.MdlComponentHandler._cssClasses.UPGRADING);
        html.querySelector("html")[$classes].add(m4d_core.MdlComponentHandler._cssClasses.UPGRADED);
        this[_logger].fine("All components are upgraded...");
      }, VoidToNullN()));
      return future;
    }
    downgradeElement(element) {
      validate.Validate.notNull(html.HtmlElement, element, "Element to downgrade must not be null!");
      let completer = async.Completer.new();
      const _downgradeChildren = element => {
        if (element != null) {
          element[$children][$forEach](dart.fn(element => {
            if (html.HtmlElement.is(element)) {
              _downgradeChildren(element);
            }
          }, ElementLToNullN()));
          this[_deconstructComponent](element);
        }
      };
      dart.fn(_downgradeChildren, HtmlElementLTovoid());
      FutureOfNullN().new(dart.fn(() => {
        if (html.HtmlElement.is(element)) {
          _downgradeChildren(element);
        }
        completer.complete();
      }, VoidToNullN()));
      return completer.future;
    }
    upgrade(T, opts) {
      let enableVisualDebugging = opts && 'enableVisualDebugging' in opts ? opts.enableVisualDebugging : false;
      return async.async(T, (function* upgrade() {
        let body = html.querySelector("body");
        this[_enableVisualDebugging] = core.bool.as(enableVisualDebugging);
        yield this.upgradeElement(html.HtmlElement.as(body));
        return T.as(this.application);
      }).bind(this));
    }
    run(T, opts) {
      let enableVisualDebugging = opts && 'enableVisualDebugging' in opts ? opts.enableVisualDebugging : false;
      return this.upgrade(T, {enableVisualDebugging: enableVisualDebugging});
    }
    get application() {
      return this[_iocContainer].resolve(services.Application).as(interfaces.MaterialApplication);
    }
    [_isRegistered](config) {
      return this[_registeredComponents][$containsKey](config.classAsString);
    }
    [_isValidClassName](classname) {
      return classname !== "dynamic";
    }
    get [_configs]() {
      let configs = ListOfMdlConfigLOfMdlComponentL().from(this[_registeredComponents][$values]);
      configs[$sort](dart.fn((a, b) => a.priority.index[$compareTo](b.priority.index), MdlConfigLOfMdlComponentLAndMdlConfigLOfMdlComponentLTointL()));
      return configs;
    }
    [_upgradeDom](queryBaseElement, config) {
      validate.Validate.notNull(html.Element, queryBaseElement);
      validate.Validate.notNull(MdlConfigOfMdlComponentL(), config);
      const _upgradeBaseElementIfSelectorFits = baseElement => {
        let upgrade = false;
        switch (config.selectorType) {
          case C1 || CT.C1:
          {
            upgrade = baseElement.tagName[$toLowerCase]() === config.baseSelector;
            break;
          }
          case C2 || CT.C2:
          {
            upgrade = baseElement[$attributes][$containsKey](config.baseSelector);
            break;
          }
          case C3 || CT.C3:
          default:
          {
            upgrade = baseElement[$classes].contains(config.baseSelector);
          }
        }
        if (dart.test(upgrade)) {
          this[_upgradeElement](html.HtmlElement.as(baseElement), config);
        }
      };
      dart.fn(_upgradeBaseElementIfSelectorFits, ElementLTovoid());
      _upgradeBaseElementIfSelectorFits(queryBaseElement);
      let elements = queryBaseElement[$querySelectorAll](html.HtmlElement, config.selector);
      elements[$forEach](dart.fn(element => {
        this[_upgradeElement](element, config);
      }, HtmlElementLToNullN()));
    }
    [_upgradeElement](element, config) {
      validate.Validate.notNull(html.HtmlElement, element);
      validate.Validate.notNull(MdlConfigOfMdlComponentL(), config);
      function _hasTemplate(element) {
        if (element == null) {
          return false;
        }
        if (dart.test(element[$attributes][$containsKey](m4d_core.MdlComponentHandler._constant.TEMPLATE)) || element.tagName[$toLowerCase]() === m4d_core.MdlComponentHandler._constant.TEMPLATE) {
          return true;
        }
        return _hasTemplate(html.HtmlElement.as(element[$parent]));
      }
      dart.fn(_hasTemplate, HtmlElementLToboolL());
      function _isInDom(element) {
        if (element[$parent] != null) {
          if (element[$parent].tagName[$toLowerCase]() === "body") {
            return true;
          }
          return _isInDom(element[$parent]);
        }
        return false;
      }
      dart.fn(_isInDom, ElementLToboolL());
      if ((!dart.test(element[$attributes][$containsKey](this[_DATA_KEY])) || element[$attributes][$_get](this[_DATA_KEY])[$contains](config.classAsString)[$_equals](false)) && !dart.test(_hasTemplate(element))) {
        const _markAsUpgraded = () => {
          let registeredClasses = dart.test(element[$attributes][$containsKey](this[_DATA_KEY])) ? element[$attributes][$_get](this[_DATA_KEY])[$split](",") : JSArrayOfStringL().of([]);
          registeredClasses[$add](config.classAsString);
          element[$attributes][$_set](this[_DATA_KEY], registeredClasses[$join](","));
        };
        dart.fn(_markAsUpgraded, VoidTovoid());
        try {
          let component = config.newComponent(element, this[_iocContainer]);
          component.visualDebugging = this[_enableVisualDebugging];
          config.callbacks[$forEach](dart.fn(callback => callback(element), FnTovoid()));
          _markAsUpgraded();
          this[_logger].finer(dart.str(config.classAsString) + " -> " + dart.str(component));
          let jsElement = js.JsObject.fromBrowserObject(component.hub);
          function _registerWidget() {
            if (dart.test(jsElement.hasProperty("mdlwidget"))) {
              let name = core.String.as(jsElement._get("mdlwidget"));
              dart.throw(new m4d_core.MultipleWidgetException.new("There is already a widget registered for " + dart.str(element) + ", Type: " + dart.str(name) + "!\n" + "Only one widget per element is allowed!"));
            }
            jsElement._set("mdlwidget", config.classAsString);
          }
          dart.fn(_registerWidget, VoidTovoid());
          if (dart.test(config.isWidget)) {
            _registerWidget();
          }
          function _registerComponent() {
            if (dart.test(jsElement.hasProperty(config.classAsString))) {
              dart.throw(new core.ArgumentError.new(dart.str(element) + " has already a " + dart.str(config.classAsString) + " registered!"));
            }
            if (!dart.test(jsElement.hasProperty("mdlcomponent"))) {
              jsElement._set("mdlcomponent", config.classAsString);
            }
            let componentsForElement = core.String.as(jsElement._get("mdlcomponent"))[$split](",");
            if (!dart.test(componentsForElement[$contains](config.classAsString))) {
              componentsForElement[$add](config.classAsString);
              jsElement._set("mdlcomponent", componentsForElement[$join](","));
            }
            jsElement._set(config.classAsString, component);
          }
          dart.fn(_registerComponent, VoidTovoid());
          _registerComponent();
          if (element.tagName[$toLowerCase]() === "body" || dart.test(_isInDom(element))) {
            component.attached();
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stacktrace = dart.stackTrace(e);
          this[_logger].severe("Registration for: " + dart.str(config.selector) + " not possible. Check if " + dart.str(config.classAsString) + " is correctly imported");
          this[_logger].severe(exception, stacktrace);
        }
      }
    }
    [_deconstructComponent](element) {
      try {
        let jsElement = js.JsObject.fromBrowserObject(element);
        let component = null;
        if (dart.test(jsElement.hasProperty("mdlcomponent"))) {
          let componentsForElement = core.String.as(jsElement._get("mdlcomponent"))[$split](",");
          componentsForElement[$forEach](dart.fn(componentName => {
            component = m4d_core.MdlComponent.as(jsElement._get(componentName));
            component.downgrade();
            this[_logger].fine(dart.str(componentName) + " downgraded to HTML-Element: " + dart.str(element) + "!");
            jsElement._set(componentName, null);
            jsElement.deleteProperty(componentName);
          }, StringLToNullN()));
          jsElement.deleteProperty("mdlcomponent");
        }
        if (dart.test(jsElement.hasProperty("mdlwidget"))) {
          jsElement.deleteProperty("mdlwidget");
        }
        if (component != null) {
          component.attributes[$remove](this[_DATA_KEY]);
          component.classes.remove(m4d_core.MdlComponentHandler._cssClasses.IS_UPGRADED);
          component.classes.add(m4d_core.MdlComponentHandler._cssClasses.DOWNGRADED);
          component = null;
        }
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (typeof e == 'string') {
          this[_logger].severe(e);
        } else
          throw e$;
      }
    }
  };
  (m4d_core.MdlComponentHandler.new = function() {
    this[_logger] = logger.Logger.new("mdlcore.ComponentHandler");
    this[_DATA_KEY] = "data-upgraded";
    this[_registeredComponents] = new (IdentityMapOfStringL$MdlConfigLOfMdlComponentL()).new();
    this[_iocContainer] = m4d_ioc.Container.new();
    this[_enableVisualDebugging] = false;
    this.bind(services.Application).to(new interfaces.MaterialApplication.new());
  }).prototype = m4d_core.MdlComponentHandler.prototype;
  dart.addTypeTests(m4d_core.MdlComponentHandler);
  dart.addTypeCaches(m4d_core.MdlComponentHandler);
  dart.setMethodSignature(m4d_core.MdlComponentHandler, () => ({
    __proto__: dart.getMethods(m4d_core.MdlComponentHandler.__proto__),
    register: dart.fnType(dart.void, [m4d_core.MdlConfig$(m4d_core.MdlComponent)]),
    bind: dart.fnType(m4d_ioc.BindingSyntax, [m4d_ioc.Service]),
    registerUpgradedCallback: dart.fnType(dart.void, [m4d_core.MdlConfig$(m4d_core.MdlComponent), dart.fnType(dart.void, [html.HtmlElement])]),
    upgradeAllRegistered: dart.fnType(async.Future, []),
    upgradeElement: dart.fnType(async.Future$(dart.void), [html.HtmlElement]),
    upgradeElements: dart.fnType(async.Future$(dart.void), [core.List$(html.HtmlElement)]),
    downgradeElement: dart.fnType(async.Future, [html.HtmlElement]),
    upgrade: dart.gFnType(T => [async.Future$(T), [], {enableVisualDebugging: dart.dynamic}, {}]),
    run: dart.gFnType(T => [async.Future$(T), [], {enableVisualDebugging: dart.dynamic}, {}]),
    [_isRegistered]: dart.fnType(core.bool, [m4d_core.MdlConfig$(m4d_core.MdlComponent)]),
    [_isValidClassName]: dart.fnType(core.bool, [core.String]),
    [_upgradeDom]: dart.fnType(dart.void, [html.Element, m4d_core.MdlConfig$(m4d_core.MdlComponent)]),
    [_upgradeElement]: dart.fnType(dart.void, [html.HtmlElement, m4d_core.MdlConfig$(m4d_core.MdlComponent)]),
    [_deconstructComponent]: dart.fnType(dart.void, [html.HtmlElement])
  }));
  dart.setGetterSignature(m4d_core.MdlComponentHandler, () => ({
    __proto__: dart.getGetters(m4d_core.MdlComponentHandler.__proto__),
    application: interfaces.MaterialApplication,
    [_configs]: core.List$(m4d_core.MdlConfig$(m4d_core.MdlComponent))
  }));
  dart.setLibraryUri(m4d_core.MdlComponentHandler, L0);
  dart.setFieldSignature(m4d_core.MdlComponentHandler, () => ({
    __proto__: dart.getFields(m4d_core.MdlComponentHandler.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_DATA_KEY]: dart.finalFieldType(core.String),
    [_registeredComponents]: dart.finalFieldType(core.Map$(core.String, m4d_core.MdlConfig$(m4d_core.MdlComponent))),
    [_iocContainer]: dart.finalFieldType(m4d_ioc.Container),
    [_enableVisualDebugging]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(m4d_core.MdlComponentHandler, {
    /*m4d_core.MdlComponentHandler._cssClasses*/get _cssClasses() {
      return C4 || CT.C4;
    },
    /*m4d_core.MdlComponentHandler._constant*/get _constant() {
      return C5 || CT.C5;
    }
  }, true);
  var C6;
  m4d_core.SelectorType = class SelectorType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (m4d_core.SelectorType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = m4d_core.SelectorType.prototype;
  dart.addTypeTests(m4d_core.SelectorType);
  dart.addTypeCaches(m4d_core.SelectorType);
  dart.setLibraryUri(m4d_core.SelectorType, L0);
  dart.setFieldSignature(m4d_core.SelectorType, () => ({
    __proto__: dart.getFields(m4d_core.SelectorType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(m4d_core.SelectorType, ['toString']);
  m4d_core.SelectorType.CLASS = C3 || CT.C3;
  m4d_core.SelectorType.TAG = C1 || CT.C1;
  m4d_core.SelectorType.ATTRIBUTE = C2 || CT.C2;
  m4d_core.SelectorType.values = C6 || CT.C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  m4d_core.RegistrationPriority = class RegistrationPriority extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (m4d_core.RegistrationPriority.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = m4d_core.RegistrationPriority.prototype;
  dart.addTypeTests(m4d_core.RegistrationPriority);
  dart.addTypeCaches(m4d_core.RegistrationPriority);
  dart.setLibraryUri(m4d_core.RegistrationPriority, L0);
  dart.setFieldSignature(m4d_core.RegistrationPriority, () => ({
    __proto__: dart.getFields(m4d_core.RegistrationPriority.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(m4d_core.RegistrationPriority, ['toString']);
  m4d_core.RegistrationPriority.FIRST = C7 || CT.C7;
  m4d_core.RegistrationPriority.PRE_WIDGET = C8 || CT.C8;
  m4d_core.RegistrationPriority.WIDGET = C9 || CT.C9;
  m4d_core.RegistrationPriority.CHILD_WIDGET = C10 || CT.C10;
  m4d_core.RegistrationPriority.POST_WIDGET = C11 || CT.C11;
  m4d_core.RegistrationPriority.DEFAULT = C12 || CT.C12;
  m4d_core.RegistrationPriority.LAST = C13 || CT.C13;
  m4d_core.RegistrationPriority.values = C14 || CT.C14;
  var _selector$ = dart.privateName(m4d_core, "_selector");
  var _componentFactory = dart.privateName(m4d_core, "_componentFactory");
  const _is_MdlConfig_default = Symbol('_is_MdlConfig_default');
  var callbacks = dart.privateName(m4d_core, "MdlConfig.callbacks");
  var selectorType = dart.privateName(m4d_core, "MdlConfig.selectorType");
  var priority = dart.privateName(m4d_core, "MdlConfig.priority");
  var isWidget$ = dart.privateName(m4d_core, "MdlConfig.isWidget");
  m4d_core.MdlConfig$ = dart.generic(T => {
    class MdlConfig extends core.Object {
      get callbacks() {
        return this[callbacks];
      }
      set callbacks(value) {
        super.callbacks = value;
      }
      get selectorType() {
        return this[selectorType];
      }
      set selectorType(value) {
        this[selectorType] = value;
      }
      get priority() {
        return this[priority];
      }
      set priority(value) {
        this[priority] = value;
      }
      get isWidget() {
        return this[isWidget$];
      }
      set isWidget(value) {
        super.isWidget = value;
      }
      get selector() {
        switch (this.selectorType) {
          case C1 || CT.C1:
          {
            return this[_selector$];
          }
          case C2 || CT.C2:
          {
            return "[" + dart.str(this[_selector$]) + "]";
          }
          case C3 || CT.C3:
          default:
          {
            return "." + dart.str(this[_selector$]);
          }
        }
      }
      get baseSelector() {
        return this[_selector$];
      }
      get classAsString() {
        return dart.toString(this.type);
      }
      get type() {
        return dart.wrapType(T);
      }
      newComponent(element, iocContainer) {
        let t5, t4;
        t4 = element;
        t5 = iocContainer;
        return this[_componentFactory](t4, t5);
      }
    }
    (MdlConfig.new = function(_selector, componentFactory, opts) {
      let isWidget = opts && 'isWidget' in opts ? opts.isWidget : false;
      this[callbacks] = JSArrayOfHtmlElementLToLvoid().of([]);
      this[selectorType] = m4d_core.SelectorType.CLASS;
      this[priority] = m4d_core.RegistrationPriority.DEFAULT;
      this[_selector$] = _selector;
      this[_componentFactory] = componentFactory;
      this[isWidget$] = isWidget;
      validate.Validate.isTrue(!dart.wrapType(T)[$_equals]("dynamic"), "Add a type-information to your MdlConfig like new MdlConfig<MaterialButton>()");
      validate.Validate.notBlank(this[_selector$], "cssClass must not be blank.");
      validate.Validate.notNull(HtmlElementLAndContainerLToLMdlComponentL(), this[_componentFactory]);
    }).prototype = MdlConfig.prototype;
    dart.addTypeTests(MdlConfig);
    MdlConfig.prototype[_is_MdlConfig_default] = true;
    dart.addTypeCaches(MdlConfig);
    dart.setMethodSignature(MdlConfig, () => ({
      __proto__: dart.getMethods(MdlConfig.__proto__),
      newComponent: dart.fnType(m4d_core.MdlComponent, [html.HtmlElement, m4d_ioc.Container])
    }));
    dart.setGetterSignature(MdlConfig, () => ({
      __proto__: dart.getGetters(MdlConfig.__proto__),
      selector: core.String,
      baseSelector: core.String,
      classAsString: core.String,
      type: core.Type
    }));
    dart.setLibraryUri(MdlConfig, L0);
    dart.setFieldSignature(MdlConfig, () => ({
      __proto__: dart.getFields(MdlConfig.__proto__),
      callbacks: dart.finalFieldType(core.List$(dart.fnType(dart.void, [html.HtmlElement]))),
      [_componentFactory]: dart.finalFieldType(dart.fnType(m4d_core.MdlComponent, [html.HtmlElement, m4d_ioc.Container])),
      [_selector$]: dart.fieldType(core.String),
      selectorType: dart.fieldType(m4d_core.SelectorType),
      priority: dart.fieldType(m4d_core.RegistrationPriority),
      isWidget: dart.finalFieldType(core.bool)
    }));
    return MdlConfig;
  });
  m4d_core.MdlConfig = m4d_core.MdlConfig$();
  dart.addTypeTests(m4d_core.MdlConfig, _is_MdlConfig_default);
  const _is_MdlWidgetConfig_default = Symbol('_is_MdlWidgetConfig_default');
  m4d_core.MdlWidgetConfig$ = dart.generic(T => {
    class MdlWidgetConfig extends m4d_core.MdlConfig$(T) {}
    (MdlWidgetConfig.new = function(selector, componentFactory) {
      MdlWidgetConfig.__proto__.new.call(this, selector, componentFactory, {isWidget: true});
      this.priority = m4d_core.RegistrationPriority.WIDGET;
    }).prototype = MdlWidgetConfig.prototype;
    dart.addTypeTests(MdlWidgetConfig);
    MdlWidgetConfig.prototype[_is_MdlWidgetConfig_default] = true;
    dart.addTypeCaches(MdlWidgetConfig);
    dart.setLibraryUri(MdlWidgetConfig, L0);
    return MdlWidgetConfig;
  });
  m4d_core.MdlWidgetConfig = m4d_core.MdlWidgetConfig$();
  dart.addTypeTests(m4d_core.MdlWidgetConfig, _is_MdlWidgetConfig_default);
  var LOADING = dart.privateName(m4d_core, "_RendererCssClasses.LOADING");
  var LOADED = dart.privateName(m4d_core, "_RendererCssClasses.LOADED");
  m4d_core._RendererCssClasses = class _RendererCssClasses extends core.Object {
    get LOADING() {
      return this[LOADING];
    }
    set LOADING(value) {
      super.LOADING = value;
    }
    get LOADED() {
      return this[LOADED];
    }
    set LOADED(value) {
      super.LOADED = value;
    }
  };
  (m4d_core._RendererCssClasses.new = function() {
    this[LOADING] = "mdl-content__loading";
    this[LOADED] = "mdl-content__loaded";
    ;
  }).prototype = m4d_core._RendererCssClasses.prototype;
  dart.addTypeTests(m4d_core._RendererCssClasses);
  dart.addTypeCaches(m4d_core._RendererCssClasses);
  dart.setLibraryUri(m4d_core._RendererCssClasses, L0);
  dart.setFieldSignature(m4d_core._RendererCssClasses, () => ({
    __proto__: dart.getFields(m4d_core._RendererCssClasses.__proto__),
    LOADING: dart.finalFieldType(core.String),
    LOADED: dart.finalFieldType(core.String)
  }));
  var _renderFunctions = dart.privateName(m4d_core, "_renderFunctions");
  var _validator = dart.privateName(m4d_core, "_validator");
  var _callAttached = dart.privateName(m4d_core, "_callAttached");
  var C15;
  m4d_core.DomRenderer = class DomRenderer extends core.Object {
    render(parent, content, opts) {
      let replaceNode = opts && 'replaceNode' in opts ? opts.replaceNode : true;
      validate.Validate.notNull(html.Element, parent);
      validate.Validate.notBlank(content);
      this[_logger].fine("Start with rendering process...");
      let completer = CompleterOfElementL().new();
      this[_renderFunctions][$insert](0, dart.fn(() => {
        parent[$classes].remove(m4d_core.DomRenderer._cssClasses.LOADED);
        parent[$classes].add(m4d_core.DomRenderer._cssClasses.LOADING);
        try {
          let child = html.Element.html(content, {validator: this[_validator]()});
          m4d_core.componentFactory().upgradeElement(html.HtmlElement.as(child)).then(core.Null, dart.fn(_ => {
            html.window[$requestAnimationFrame](dart.fn(_ => {
              if (dart.test(replaceNode) && dart.notNull(parent.childNodes[$length]) > 0 && parent.childNodes[$last] != null) {
                let oldElement = parent.childNodes[$last];
                if (html.Element.is(oldElement)) {
                  oldElement.style[$display] = "none";
                  m4d_core.componentHandler().downgradeElement(html.HtmlElement.as(oldElement));
                }
                oldElement[$remove]();
              }
              parent[$insertAdjacentElement]("beforeEnd", child);
              this[_callAttached](child);
              parent[$classes].remove(m4d_core.DomRenderer._cssClasses.LOADING);
              parent[$classes].add(m4d_core.DomRenderer._cssClasses.LOADED);
              completer.complete(child);
            }, numLToNullN()));
          }, voidToNullN()));
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (core.Error.is(e)) {
            this[_logger].shout("Invalid content:\n\t" + dart.str(content) + "\n(Orig. Error: " + dart.str(e) + ")\n");
            if (html.TableCaptionElement.is(parent)) {
              this[_logger].shout("At the moment adding table-rows dynamically to the DOM is not supported!");
            } else {
              this[_logger].shout("Usually this error occures if content has not just ONE single root element.");
            }
          } else
            throw e$;
        }
      }, VoidToNullN()));
      FutureOfNullN().new(dart.fn(() => {
        let renderfunction = this[_renderFunctions][$last];
        this[_renderFunctions][$remove](renderfunction);
        renderfunction();
      }, VoidToNullN()));
      return completer.future;
    }
    renderBefore(parent, reference, content) {
      validate.Validate.notNull(html.Element, parent);
      validate.Validate.notBlank(content);
      let completer = CompleterOfElementL().new();
      this[_renderFunctions][$insert](0, dart.fn(() => {
        parent[$classes].remove(m4d_core.DomRenderer._cssClasses.LOADED);
        parent[$classes].add(m4d_core.DomRenderer._cssClasses.LOADING);
        let child = html.Element.html(content, {validator: this[_validator]()});
        m4d_core.componentFactory().upgradeElement(html.HtmlElement.as(child)).then(core.Null, dart.fn(_ => {
          html.window[$requestAnimationFrame](dart.fn(_ => {
            if (reference != null) {
              parent.insertBefore(child, reference);
            } else {
              parent[$insertAdjacentElement]("beforeEnd", child);
            }
            this[_callAttached](child);
            parent[$classes].remove(m4d_core.DomRenderer._cssClasses.LOADING);
            parent[$classes].add(m4d_core.DomRenderer._cssClasses.LOADED);
            completer.complete(child);
          }, numLToNullN()));
        }, voidToNullN()));
      }, VoidToNullN()));
      FutureOfNullN().new(dart.fn(() => {
        let renderfunction = this[_renderFunctions][$last];
        this[_renderFunctions][$remove](renderfunction);
        renderfunction();
      }, VoidToNullN()));
      return completer.future;
    }
    [_validator]() {
      let t5;
      let validator = (t5 = new html.NodeValidatorBuilder.common(), t5.allowNavigation(), t5.allowImages(), t5.allowTextElements(), t5.allowInlineStyles(), t5.allowSvg(), t5.add(new m4d_core._AllowAllAttributesNodeValidator.new()), t5);
      return validator;
    }
    [_callAttached](element) {
      if (html.HtmlElement.is(element)) {
        let jsElement = js.JsObject.fromBrowserObject(element);
        if (dart.test(jsElement.hasProperty("mdlcomponent"))) {
          let componentsForElement = core.String.as(jsElement._get("mdlcomponent"))[$split](",");
          componentsForElement[$forEach](dart.fn(componentName => {
            let component = m4d_core.MdlComponent.as(jsElement._get(componentName));
            component.attached();
          }, StringLToNullN()));
        }
      }
      element[$children][$forEach](dart.fn(child => {
        this[_callAttached](child);
      }, ElementLToNullN()));
    }
  };
  (m4d_core.DomRenderer.new = function() {
    this[_logger] = logger.Logger.new("mdlapplication.DomRenderer");
    this[_renderFunctions] = JSArrayOfVoidToLvoid().of([]);
  }).prototype = m4d_core.DomRenderer.prototype;
  dart.addTypeTests(m4d_core.DomRenderer);
  dart.addTypeCaches(m4d_core.DomRenderer);
  dart.setMethodSignature(m4d_core.DomRenderer, () => ({
    __proto__: dart.getMethods(m4d_core.DomRenderer.__proto__),
    render: dart.fnType(async.Future$(html.Element), [html.Element, core.String], {replaceNode: core.bool}, {}),
    renderBefore: dart.fnType(async.Future$(html.Element), [html.Element, html.Element, core.String]),
    [_validator]: dart.fnType(html.NodeValidator, []),
    [_callAttached]: dart.fnType(dart.void, [html.Element])
  }));
  dart.setLibraryUri(m4d_core.DomRenderer, L0);
  dart.setFieldSignature(m4d_core.DomRenderer, () => ({
    __proto__: dart.getFields(m4d_core.DomRenderer.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_renderFunctions]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [])))
  }));
  dart.defineLazy(m4d_core.DomRenderer, {
    /*m4d_core.DomRenderer._cssClasses*/get _cssClasses() {
      return C15 || CT.C15;
    }
  }, true);
  m4d_core._AllowAllAttributesNodeValidator = class _AllowAllAttributesNodeValidator extends core.Object {
    allowsAttribute(element, attributeName, value) {
      return true;
    }
    allowsElement(element) {
      return true;
    }
  };
  (m4d_core._AllowAllAttributesNodeValidator.new = function() {
    ;
  }).prototype = m4d_core._AllowAllAttributesNodeValidator.prototype;
  dart.addTypeTests(m4d_core._AllowAllAttributesNodeValidator);
  dart.addTypeCaches(m4d_core._AllowAllAttributesNodeValidator);
  m4d_core._AllowAllAttributesNodeValidator[dart.implements] = () => [html.NodeValidator];
  dart.setMethodSignature(m4d_core._AllowAllAttributesNodeValidator, () => ({
    __proto__: dart.getMethods(m4d_core._AllowAllAttributesNodeValidator.__proto__),
    allowsAttribute: dart.fnType(core.bool, [html.Element, core.String, core.String]),
    allowsElement: dart.fnType(core.bool, [html.Element])
  }));
  dart.setLibraryUri(m4d_core._AllowAllAttributesNodeValidator, L0);
  m4d_core.DataAttribute = class DataAttribute extends core.Object {
    static forValue(value, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      if (value == null && onError != null) {
        return new m4d_core._DataValue.new(onError());
      }
      return new m4d_core._DataValue.new(value);
    }
    static forAttribute(element, name, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      validate.Validate.notNull(html.HtmlElement, element, "Element for attribute " + dart.str(name) + " must not be null");
      validate.Validate.notNull(core.String, name, "Attribute-Name for " + dart.str(element) + " must not be null");
      validate.Validate.notBlank(name, "Attribute-Name for " + dart.str(element) + " must not be blank");
      let value = null;
      if (!dart.test(element[$attributes][$containsKey](name))) {
        if (onError != null) {
          value = onError();
        } else {
          dart.throw(new core.ArgumentError.new(dart.str(element) + " has no attribute '" + dart.str(name) + "' set!"));
        }
      } else {
        value = element[$attributes][$_get](name);
      }
      return new m4d_core._DataValue.new(value);
    }
    static forDataAttribute(element, name, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      validate.Validate.notNull(html.HtmlElement, element, "Element for data attribute " + dart.str(name) + " must not be null");
      validate.Validate.notNull(core.String, name, "Data-Attribute for " + dart.str(element) + " must not be null");
      validate.Validate.notBlank(name, "Data-Attribute for " + dart.str(element) + " must not be blank");
      let value = null;
      if (!dart.test(element[$dataset][$containsKey](name))) {
        if (onError != null) {
          value = onError();
        } else {
          dart.throw(new core.ArgumentError.new(dart.str(element) + " has no data-attribute '" + dart.str(name) + "' set!"));
        }
      } else {
        value = element[$dataset][$_get](name);
      }
      return new m4d_core._DataValue.new(value);
    }
  };
  (m4d_core.DataAttribute.new = function() {
    ;
  }).prototype = m4d_core.DataAttribute.prototype;
  dart.addTypeTests(m4d_core.DataAttribute);
  dart.addTypeCaches(m4d_core.DataAttribute);
  dart.setLibraryUri(m4d_core.DataAttribute, L0);
  var _value$ = dart.privateName(m4d_core, "_value");
  m4d_core._DataValue = class _DataValue extends core.Object {
    asBool(opts) {
      let handleEmptyStringAs = opts && 'handleEmptyStringAs' in opts ? opts.handleEmptyStringAs : false;
      if (this[_value$] == null) {
        return false;
      } else if (typeof this[_value$] == 'number') {
        return core.num.as(this[_value$])[$toInt]() === 1;
      } else if (typeof this[_value$] == 'boolean') {
        return core.bool.as(this[_value$]);
      } else if (dart.toString(this[_value$])[$toLowerCase]() === "true" || dart.toString(this[_value$]) === "1" || dart.toString(this[_value$]) === "yes") {
        return true;
      } else if (dart.toString(this[_value$])[$isEmpty]) {
        return handleEmptyStringAs;
      }
      return false;
    }
    asString() {
      if (typeof this[_value$] == 'string') {
        return core.String.as(this[_value$]);
      }
      return dart.toString(this[_value$]);
    }
    asInt(opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : 0;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      if (this[_value$] == null) {
        return defaultValue;
      }
      if (typeof this[_value$] == 'number') {
        return core.num.as(this[_value$])[$toInt]();
      }
      let string = dart.toString(this[_value$]);
      if (string[$isEmpty]) {
        return defaultValue;
      }
      return core.int.parse(string, {onError: dart.fn(_ => {
          if (onError != null) {
            return onError(string);
          }
          return defaultValue;
        }, StringLTointL())});
    }
  };
  (m4d_core._DataValue.new = function(_value) {
    this[_value$] = _value;
    ;
  }).prototype = m4d_core._DataValue.prototype;
  dart.addTypeTests(m4d_core._DataValue);
  dart.addTypeCaches(m4d_core._DataValue);
  dart.setMethodSignature(m4d_core._DataValue, () => ({
    __proto__: dart.getMethods(m4d_core._DataValue.__proto__),
    asBool: dart.fnType(core.bool, [], {handleEmptyStringAs: core.bool}, {}),
    asString: dart.fnType(core.String, []),
    asInt: dart.fnType(core.int, [], {defaultValue: core.int, onError: dart.fnType(core.int, [core.String])}, {})
  }));
  dart.setLibraryUri(m4d_core._DataValue, L0);
  dart.setFieldSignature(m4d_core._DataValue, () => ({
    __proto__: dart.getFields(m4d_core._DataValue.__proto__),
    [_value$]: dart.finalFieldType(dart.dynamic)
  }));
  m4d_core.ElementProperties = class ElementProperties extends core.Object {
    static hasAttributeOrClass(element, classesOrAttributes) {
      validate.Validate.notNull(html.Element, element);
      validate.Validate.notNull(ListOfStringL(), classesOrAttributes);
      for (let classOrAttribute of classesOrAttributes) {
        let hasClass = element[$classes].contains(classOrAttribute);
        if (dart.test(hasClass)) {
          return true;
        }
        let isAttributeSet = element[$attributes][$containsKey](classOrAttribute);
        if (dart.test(isAttributeSet)) {
          return new m4d_core._DataValue.new(element[$attributes][$_get](classOrAttribute)).asBool({handleEmptyStringAs: true});
        }
      }
      return false;
    }
    static isDisabled(element) {
      return m4d_core.ElementProperties.hasAttributeOrClass(element, JSArrayOfStringL().of(["disabled", "id-disabled"]));
    }
  };
  (m4d_core.ElementProperties.new = function() {
    ;
  }).prototype = m4d_core.ElementProperties.prototype;
  dart.addTypeTests(m4d_core.ElementProperties);
  dart.addTypeCaches(m4d_core.ElementProperties);
  dart.setLibraryUri(m4d_core.ElementProperties, L0);
  dart.defineLazy(m4d_core.ElementProperties, {
    /*m4d_core.ElementProperties.DISABLED*/get DISABLED() {
      return "disabled";
    },
    /*m4d_core.ElementProperties.IS_DISABLED*/get IS_DISABLED() {
      return "id-disabled";
    }
  }, true);
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  m4d_core.ListChangeType = class ListChangeType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (m4d_core.ListChangeType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = m4d_core.ListChangeType.prototype;
  dart.addTypeTests(m4d_core.ListChangeType);
  dart.addTypeCaches(m4d_core.ListChangeType);
  dart.setLibraryUri(m4d_core.ListChangeType, L0);
  dart.setFieldSignature(m4d_core.ListChangeType, () => ({
    __proto__: dart.getFields(m4d_core.ListChangeType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(m4d_core.ListChangeType, ['toString']);
  m4d_core.ListChangeType.ADD = C16 || CT.C16;
  m4d_core.ListChangeType.INSERT = C17 || CT.C17;
  m4d_core.ListChangeType.UPDATE = C18 || CT.C18;
  m4d_core.ListChangeType.REMOVE = C19 || CT.C19;
  m4d_core.ListChangeType.CLEAR = C20 || CT.C20;
  m4d_core.ListChangeType.values = C21 || CT.C21;
  const _is_ListChangedEvent_default = Symbol('_is_ListChangedEvent_default');
  var changetype$ = dart.privateName(m4d_core, "ListChangedEvent.changetype");
  var item$ = dart.privateName(m4d_core, "ListChangedEvent.item");
  var prevItem$ = dart.privateName(m4d_core, "ListChangedEvent.prevItem");
  var index$ = dart.privateName(m4d_core, "ListChangedEvent.index");
  m4d_core.ListChangedEvent$ = dart.generic(T => {
    class ListChangedEvent extends core.Object {
      get changetype() {
        return this[changetype$];
      }
      set changetype(value) {
        super.changetype = value;
      }
      get item() {
        return this[item$];
      }
      set item(value) {
        super.item = value;
      }
      get prevItem() {
        return this[prevItem$];
      }
      set prevItem(value) {
        super.prevItem = value;
      }
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
    }
    (ListChangedEvent.new = function(changetype, opts) {
      let item = opts && 'item' in opts ? opts.item : null;
      let prevItem = opts && 'prevItem' in opts ? opts.prevItem : null;
      let index = opts && 'index' in opts ? opts.index : -1;
      this[changetype$] = changetype;
      this[item$] = item;
      this[prevItem$] = prevItem;
      this[index$] = index;
      ;
    }).prototype = ListChangedEvent.prototype;
    dart.addTypeTests(ListChangedEvent);
    ListChangedEvent.prototype[_is_ListChangedEvent_default] = true;
    dart.addTypeCaches(ListChangedEvent);
    dart.setLibraryUri(ListChangedEvent, L0);
    dart.setFieldSignature(ListChangedEvent, () => ({
      __proto__: dart.getFields(ListChangedEvent.__proto__),
      changetype: dart.finalFieldType(m4d_core.ListChangeType),
      item: dart.finalFieldType(T),
      prevItem: dart.finalFieldType(T),
      index: dart.finalFieldType(core.int)
    }));
    return ListChangedEvent;
  });
  m4d_core.ListChangedEvent = m4d_core.ListChangedEvent$();
  dart.addTypeTests(m4d_core.ListChangedEvent, _is_ListChangedEvent_default);
  var _innerList = dart.privateName(m4d_core, "_innerList");
  var _filterBackup = dart.privateName(m4d_core, "_filterBackup");
  var _onChange = dart.privateName(m4d_core, "_onChange");
  var _updateCallback = dart.privateName(m4d_core, "_updateCallback");
  var C22;
  var _fire = dart.privateName(m4d_core, "_fire");
  var _clearList = dart.privateName(m4d_core, "_clearList");
  var _clearFilter = dart.privateName(m4d_core, "_clearFilter");
  const _is_ObservableList_default = Symbol('_is_ObservableList_default');
  m4d_core.ObservableList$ = dart.generic(T => {
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(T)))();
    var ListChangedEventOfTL = () => (ListChangedEventOfTL = dart.constFn(m4d_core.ListChangedEvent$(T)))();
    var StreamControllerOfListChangedEventLOfTL = () => (StreamControllerOfListChangedEventLOfTL = dart.constFn(async.StreamController$(ListChangedEventOfTL())))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(T)))();
    var TLToNullN = () => (TLToNullN = dart.constFn(dart.fnType(core.Null, [T])))();
    var TLToboolL = () => (TLToboolL = dart.constFn(dart.fnType(core.bool, [T])))();
    var ObservableListOfTL = () => (ObservableListOfTL = dart.constFn(m4d_core.ObservableList$(T)))();
    class ObservableList extends collection.ListBase$(T) {
      get onChange() {
        if (this[_onChange] == null) {
          this[_onChange] = StreamControllerOfListChangedEventLOfTL().broadcast({onCancel: dart.fn(() => this[_onChange] = null, VoidToNullN())});
        }
        return this[_onChange].stream;
      }
      get length() {
        return this[_innerList][$length];
      }
      set length(length) {
        this[_innerList][$length] = length;
      }
      _set(index, value$) {
        let value = value$;
        T.as(value);
        this[_fire](new (ListChangedEventOfTL()).new(m4d_core.ListChangeType.UPDATE, {item: value, prevItem: this[_innerList][$_get](index), index: index}));
        this[_innerList][$_set](index, value);
        return value$;
      }
      _get(index) {
        return this[_innerList][$_get](index);
      }
      add(value) {
        T.as(value);
        this[_innerList][$add](value);
        this[_fire](new (ListChangedEventOfTL()).new(m4d_core.ListChangeType.ADD, {item: value, index: this[_innerList][$indexOf](value)}));
      }
      addAll(all) {
        IterableOfTL().as(all);
        this[_innerList][$addAll](all);
        all[$forEach](dart.fn(element => {
          this[_fire](new (ListChangedEventOfTL()).new(m4d_core.ListChangeType.ADD, {item: element, index: this[_innerList][$indexOf](element)}));
        }, TLToNullN()));
      }
      addIfAbsent(value) {
        T.as(value);
        if (!dart.test(this[_innerList][$contains](value))) {
          this.add(value);
        }
      }
      insert(index, element) {
        T.as(element);
        core.RangeError.checkValueInInterval(index, 0, this.length, "index");
        if (index == this[_innerList][$length]) {
          this.add(element);
        } else {
          if (index === 0) {
            this[_fire](new (ListChangedEventOfTL()).new(m4d_core.ListChangeType.INSERT, {item: element, index: index}));
            this[_innerList][$insert](index, element);
          } else {
            this[_fire](new (ListChangedEventOfTL()).new(m4d_core.ListChangeType.INSERT, {item: element, prevItem: this[_innerList][$_get](index), index: index}));
            this[_innerList][$insert](index, element);
          }
        }
      }
      clear() {
        this[_clearList]();
        this[_clearFilter]();
      }
      removeRange(start, end) {
        core.RangeError.checkValidRange(start, end, this.length);
        for (let index = start; dart.notNull(index) < dart.notNull(end); index = dart.notNull(index) + 1) {
          this[_fire](new (ListChangedEventOfTL()).new(m4d_core.ListChangeType.REMOVE, {item: this[_innerList][$_get](index), index: index}));
        }
        this[_innerList][$removeRange](start, end);
      }
      remove(element) {
        this[_fire](new (ListChangedEventOfTL()).new(m4d_core.ListChangeType.REMOVE, {item: T.as(element), index: this[_innerList][$indexOf](T.as(element))}));
        return this[_innerList][$remove](element);
      }
      removeWhere(test) {
        let itemsToRemove = JSArrayOfTL().of([]);
        this[_innerList][$forEach](dart.fn(element => {
          if (dart.test(test(element))) {
            itemsToRemove[$add](element);
          }
        }, TLToNullN()));
        itemsToRemove[$forEach](dart.fn(element => this.remove(element), TLToboolL()));
      }
      retainWhere(test) {
        let itemsToRemove = JSArrayOfTL().of([]);
        this[_innerList][$forEach](dart.fn(element => {
          if (dart.equals(test(element), false)) {
            itemsToRemove[$add](element);
          }
        }, TLToNullN()));
        itemsToRemove[$forEach](dart.fn(element => this.remove(element), TLToboolL()));
      }
      filter(test) {
        if (dart.test(this[_filterBackup][$isEmpty])) {
          this[_filterBackup][$addAll](this[_innerList]);
        }
        this[_clearList]();
        this.addAll(this[_filterBackup][$where](test));
      }
      resetFilter() {
        if (dart.test(this[_filterBackup][$isNotEmpty])) {
          this[_clearList]();
          this.addAll(this[_filterBackup]);
          this[_filterBackup][$clear]();
        }
      }
      update(element, item) {
        let t6, t5;
        T.as(item);
        t5 = element;
        t6 = item;
        return this[_updateCallback](t5, t6);
      }
      where(test) {
        this[_logger].info("Where called!!!!!!!!!!!!!!!");
        let newList = new (ObservableListOfTL()).new();
        this.onChange.listen(dart.fn(event => {
          if (!dart.equals(event.changetype, m4d_core.ListChangeType.CLEAR) && dart.test(test(T.as(event.item)))) {
            switch (event.changetype) {
              case C16 || CT.C16:
              {
                newList.add(T.as(event.item));
                break;
              }
              case C17 || CT.C17:
              {
                newList.add(T.as(event.item));
                this[_logger].info("Items1: " + dart.str(newList.length));
                break;
              }
              case C19 || CT.C19:
              {
                newList.remove(event.item);
                break;
              }
            }
          }
          if (dart.equals(event.changetype, m4d_core.ListChangeType.CLEAR)) {
            newList.clear();
          }
        }, ListChangedEventLToNullN()));
        return newList;
      }
      [_fire](event) {
        if (this[_onChange] != null && dart.test(this[_onChange].hasListener)) {
          this[_onChange].add(event);
        }
      }
      [_clearList]() {
        this[_fire](new (ListChangedEventOfTL()).new(m4d_core.ListChangeType.CLEAR));
        this[_innerList][$clear]();
      }
      [_clearFilter]() {
        this[_filterBackup][$clear]();
      }
      static _defaultUpdateCallback(element, item) {
        return false;
      }
    }
    (ObservableList.new = function(opts) {
      let updateCallback = opts && 'updateCallback' in opts ? opts.updateCallback : null;
      this[_logger] = logger.Logger.new("mdlobservable.ObservableList");
      this[_innerList] = JSArrayOfTL().of([]);
      this[_filterBackup] = JSArrayOfTL().of([]);
      this[_onChange] = null;
      this[_updateCallback] = updateCallback;
      if (this[_updateCallback] == null) {
        this[_updateCallback] = C22 || CT.C22;
      }
    }).prototype = ObservableList.prototype;
    dart.addTypeTests(ObservableList);
    ObservableList.prototype[_is_ObservableList_default] = true;
    dart.addTypeCaches(ObservableList);
    dart.setMethodSignature(ObservableList, () => ({
      __proto__: dart.getMethods(ObservableList.__proto__),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      _get: dart.fnType(T, [core.int]),
      [$_get]: dart.fnType(T, [core.int]),
      addIfAbsent: dart.fnType(dart.void, [core.Object]),
      filter: dart.fnType(dart.void, [dart.fnType(core.bool, [T])]),
      resetFilter: dart.fnType(dart.void, []),
      update: dart.fnType(core.bool, [html.HtmlElement, core.Object]),
      where: dart.fnType(m4d_core.ObservableList$(T), [dart.fnType(core.bool, [T])]),
      [$where]: dart.fnType(m4d_core.ObservableList$(T), [dart.fnType(core.bool, [T])]),
      [_fire]: dart.fnType(dart.void, [m4d_core.ListChangedEvent$(T)]),
      [_clearList]: dart.fnType(dart.void, []),
      [_clearFilter]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ObservableList, () => ({
      __proto__: dart.getGetters(ObservableList.__proto__),
      onChange: async.Stream$(m4d_core.ListChangedEvent$(T)),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(ObservableList, () => ({
      __proto__: dart.getSetters(ObservableList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(ObservableList, L0);
    dart.setFieldSignature(ObservableList, () => ({
      __proto__: dart.getFields(ObservableList.__proto__),
      [_logger]: dart.finalFieldType(logger.Logger),
      [_innerList]: dart.finalFieldType(core.List$(T)),
      [_filterBackup]: dart.finalFieldType(core.List$(T)),
      [_onChange]: dart.fieldType(async.StreamController$(m4d_core.ListChangedEvent$(T))),
      [_updateCallback]: dart.fieldType(dart.fnType(core.bool, [html.HtmlElement, dart.dynamic]))
    }));
    dart.defineExtensionMethods(ObservableList, [
      '_set',
      '_get',
      'add',
      'addAll',
      'insert',
      'clear',
      'removeRange',
      'remove',
      'removeWhere',
      'retainWhere',
      'where'
    ]);
    dart.defineExtensionAccessors(ObservableList, ['length']);
    return ObservableList;
  });
  m4d_core.ObservableList = m4d_core.ObservableList$();
  dart.addTypeTests(m4d_core.ObservableList, _is_ObservableList_default);
  const _is_PropertyChangeEvent_default = Symbol('_is_PropertyChangeEvent_default');
  var oldValue$ = dart.privateName(m4d_core, "PropertyChangeEvent.oldValue");
  var value$ = dart.privateName(m4d_core, "PropertyChangeEvent.value");
  m4d_core.PropertyChangeEvent$ = dart.generic(T => {
    class PropertyChangeEvent extends core.Object {
      get oldValue() {
        return this[oldValue$];
      }
      set oldValue(value) {
        super.oldValue = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
    }
    (PropertyChangeEvent.new = function(value, oldValue) {
      this[value$] = value;
      this[oldValue$] = oldValue;
      ;
    }).prototype = PropertyChangeEvent.prototype;
    dart.addTypeTests(PropertyChangeEvent);
    PropertyChangeEvent.prototype[_is_PropertyChangeEvent_default] = true;
    dart.addTypeCaches(PropertyChangeEvent);
    dart.setLibraryUri(PropertyChangeEvent, L0);
    dart.setFieldSignature(PropertyChangeEvent, () => ({
      __proto__: dart.getFields(PropertyChangeEvent.__proto__),
      oldValue: dart.finalFieldType(T),
      value: dart.finalFieldType(T)
    }));
    return PropertyChangeEvent;
  });
  m4d_core.PropertyChangeEvent = m4d_core.PropertyChangeEvent$();
  dart.addTypeTests(m4d_core.PropertyChangeEvent, _is_PropertyChangeEvent_default);
  var _observe = dart.privateName(m4d_core, "_observe");
  var _interval = dart.privateName(m4d_core, "_interval");
  var _pause = dart.privateName(m4d_core, "_pause");
  var _onReset = dart.privateName(m4d_core, "_onReset");
  var _staticCast = dart.privateName(m4d_core, "_staticCast");
  var _treatAsDouble = dart.privateName(m4d_core, "_treatAsDouble");
  var _observeViaTimer = dart.privateName(m4d_core, "_observeViaTimer");
  var _formatter = dart.privateName(m4d_core, "_formatter");
  var _originalValue = dart.privateName(m4d_core, "_originalValue");
  const _is_ObservableProperty_default = Symbol('_is_ObservableProperty_default');
  m4d_core.ObservableProperty$ = dart.generic(T => {
    var PropertyChangeEventOfTL = () => (PropertyChangeEventOfTL = dart.constFn(m4d_core.PropertyChangeEvent$(T)))();
    var StreamControllerOfPropertyChangeEventLOfTL = () => (StreamControllerOfPropertyChangeEventLOfTL = dart.constFn(async.StreamController$(PropertyChangeEventOfTL())))();
    var VoidToLTL = () => (VoidToLTL = dart.constFn(dart.fnType(T, [])))();
    var dynamicToLTL = () => (dynamicToLTL = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    class ObservableProperty extends core.Object {
      get onChange() {
        if (this[_onChange] == null) {
          this[_onChange] = StreamControllerOfPropertyChangeEventLOfTL().broadcast({onCancel: dart.fn(() => this[_onChange] = null, VoidToNullN())});
        }
        return this[_onChange].stream;
      }
      set value(input) {
        let t6;
        let old = this[_value$];
        this[_originalValue] = input;
        if (dart.equals(dart.runtimeType(this[_value$]), dart.wrapType(core.double)) || dart.test(this[_treatAsDouble])) {
          this[_value$] = T.as(m4d_utils.ConvertValue.toDouble(this[_originalValue]));
        } else if (dart.equals(dart.runtimeType(this[_value$]), dart.wrapType(core.bool))) {
          this[_value$] = T.as(m4d_utils.ConvertValue.toBool(this[_originalValue]));
        } else if (dart.equals(dart.runtimeType(this[_value$]), dart.wrapType(core.int))) {
          this[_value$] = T.as(m4d_utils.ConvertValue.toInt(this[_originalValue]));
        } else {
          try {
            this[_value$] = T.as(this[_originalValue]);
          } catch (e$) {
            let e = dart.getThrown(e$);
            if (this[_staticCast] == null) {
              dart.throw(e);
            }
            this[_value$] = (t6 = this[_originalValue], this[_staticCast](t6));
          }
        }
        if (this[_value$] == null && old != null) {
          this[_logger].warning("Input-Value: '" + dart.str(this[_originalValue]) + "' (" + dart.str(dart.runtimeType(this[_originalValue])) + ")" + " -> " + "'" + dart.str(this[_value$]) + "' (" + dart.str(dart.runtimeType(this[_value$])) + ") was: " + dart.str(old));
        }
        this[_fire](new (PropertyChangeEventOfTL()).new(this[_value$], old));
      }
      get value() {
        return this[_value$];
      }
      observes(observe) {
        VoidToLTL().as(observe);
        this[_observe] = observe;
        this.run();
      }
      onReset(callback) {
        VoidToLTL().as(callback);
        return this[_onReset] = callback;
      }
      onStaticCast(callback) {
        dynamicToLTL().as(callback);
        return this[_staticCast] = callback;
      }
      onFormat(callback) {
        return this[_formatter] = callback;
      }
      pause() {
        this[_pause] = true;
      }
      run() {
        if (this[_observe] != null) {
          if (dart.test(this[_observeViaTimer])) {
            async.Timer.new(new core.Duration.new({milliseconds: 50}), dart.fn(() => {
              this.update();
              async.Timer.periodic(this[_interval], dart.fn(timer => {
                if (dart.test(this[_pause])) {
                  this[_logger].info("Pause");
                  timer.cancel();
                  this[_pause] = false;
                  return;
                }
                this.update();
              }, TimerLToNullN()));
            }, VoidToNullN()));
          } else {
            this.update();
          }
        }
      }
      update(opts) {
        let force = opts && 'force' in opts ? opts.force : false;
        if (this[_observe] != null) {
          let newValue = T.as(dart.dsend(this, _observe, []));
          if (!dart.equals(newValue, this[_value$]) || dart.test(force)) {
            this.value = newValue;
          }
        }
      }
      toBool() {
        return m4d_utils.ConvertValue.toBool(this.value);
      }
      reset() {
        if (this[_onReset] != null) {
          this.value = this[_onReset]();
        }
        return this.value;
      }
      toString() {
        let t7, t6;
        return this[_formatter] != null ? (t6 = m4d_utils.ConvertValue.toStringValue(this[_value$]), t7 = this[_originalValue], this[_formatter](t6, t7)) : m4d_utils.ConvertValue.toStringValue(this[_value$]);
      }
      [_fire](event) {
        if (this[_name$] !== "<undefinded>") {
          this[_logger].fine("Fireing " + dart.str(event) + " from " + dart.str(this[_name$]) + "...");
        }
        if (this[_onChange] != null && dart.test(this[_onChange].hasListener)) {
          this[_onChange].add(event);
        }
      }
    }
    (ObservableProperty.new = function(_value, opts) {
      let observe = opts && 'observe' in opts ? opts.observe : null;
      let interval = opts && 'interval' in opts ? opts.interval : null;
      let name = opts && 'name' in opts ? opts.name : "<undefinded>";
      let observeViaTimer = opts && 'observeViaTimer' in opts ? opts.observeViaTimer : true;
      let treatAsDouble = opts && 'treatAsDouble' in opts ? opts.treatAsDouble : false;
      let formatter = opts && 'formatter' in opts ? opts.formatter : null;
      this[_logger] = logger.Logger.new("mdlobservable.ObservableProperty");
      this[_observe] = null;
      this[_interval] = new core.Duration.new({milliseconds: 100});
      this[_pause] = false;
      this[_onChange] = null;
      this[_onReset] = null;
      this[_staticCast] = null;
      this[_value$] = _value;
      this[_name$] = name;
      this[_treatAsDouble] = treatAsDouble;
      this[_observeViaTimer] = observeViaTimer;
      this[_formatter] = dynamicAnddynamic__ToLStringL().as(formatter);
      this[_originalValue] = _value;
      if (interval != null && dart.test(this[_observeViaTimer])) {
        this[_interval] = interval;
      }
      if (observe != null) {
        this.observes(observe);
      } else {
        const _triggerFirstChangeEvent = () => {
          this.value = this[_value$];
        };
        dart.fn(_triggerFirstChangeEvent, VoidTovoid());
        _triggerFirstChangeEvent();
      }
    }).prototype = ObservableProperty.prototype;
    dart.addTypeTests(ObservableProperty);
    ObservableProperty.prototype[_is_ObservableProperty_default] = true;
    dart.addTypeCaches(ObservableProperty);
    dart.setMethodSignature(ObservableProperty, () => ({
      __proto__: dart.getMethods(ObservableProperty.__proto__),
      observes: dart.fnType(dart.void, [core.Object]),
      onReset: dart.fnType(dart.void, [core.Object]),
      onStaticCast: dart.fnType(dart.void, [core.Object]),
      onFormat: dart.fnType(dart.void, [dart.fnType(core.String, [dart.dynamic, dart.dynamic], {format: core.String}, {})]),
      pause: dart.fnType(dart.void, []),
      run: dart.fnType(dart.void, []),
      update: dart.fnType(dart.void, [], {force: core.bool}, {}),
      toBool: dart.fnType(core.bool, []),
      reset: dart.fnType(T, []),
      [_fire]: dart.fnType(dart.void, [m4d_core.PropertyChangeEvent$(T)])
    }));
    dart.setGetterSignature(ObservableProperty, () => ({
      __proto__: dart.getGetters(ObservableProperty.__proto__),
      onChange: async.Stream$(m4d_core.PropertyChangeEvent$(T)),
      value: T
    }));
    dart.setSetterSignature(ObservableProperty, () => ({
      __proto__: dart.getSetters(ObservableProperty.__proto__),
      value: dart.dynamic
    }));
    dart.setLibraryUri(ObservableProperty, L0);
    dart.setFieldSignature(ObservableProperty, () => ({
      __proto__: dart.getFields(ObservableProperty.__proto__),
      [_logger]: dart.finalFieldType(logger.Logger),
      [_value$]: dart.fieldType(T),
      [_originalValue]: dart.fieldType(dart.dynamic),
      [_treatAsDouble]: dart.finalFieldType(core.bool),
      [_observe]: dart.fieldType(core.Function),
      [_interval]: dart.fieldType(core.Duration),
      [_observeViaTimer]: dart.finalFieldType(core.bool),
      [_pause]: dart.fieldType(core.bool),
      [_name$]: dart.finalFieldType(core.String),
      [_onChange]: dart.fieldType(async.StreamController$(m4d_core.PropertyChangeEvent$(T))),
      [_onReset]: dart.fieldType(dart.fnType(T, [])),
      [_formatter]: dart.fieldType(dart.fnType(core.String, [dart.dynamic, dart.dynamic], {format: core.String}, {})),
      [_staticCast]: dart.fieldType(dart.fnType(T, [dart.dynamic]))
    }));
    dart.defineExtensionMethods(ObservableProperty, ['toString']);
    return ObservableProperty;
  });
  m4d_core.ObservableProperty = m4d_core.ObservableProperty$();
  dart.defineLazy(m4d_core.ObservableProperty, {
    /*m4d_core.ObservableProperty._DEFAULT_NAME*/get _DEFAULT_NAME() {
      return "<undefinded>";
    }
  }, true);
  dart.addTypeTests(m4d_core.ObservableProperty, _is_ObservableProperty_default);
  var message$0 = dart.privateName(m4d_core, "WrongComponentTypeException.message");
  m4d_core.WrongComponentTypeException = class WrongComponentTypeException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
  };
  (m4d_core.WrongComponentTypeException.new = function(message = null) {
    this[message$0] = message;
    ;
  }).prototype = m4d_core.WrongComponentTypeException.prototype;
  dart.addTypeTests(m4d_core.WrongComponentTypeException);
  dart.addTypeCaches(m4d_core.WrongComponentTypeException);
  m4d_core.WrongComponentTypeException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(m4d_core.WrongComponentTypeException, L0);
  dart.setFieldSignature(m4d_core.WrongComponentTypeException, () => ({
    __proto__: dart.getFields(m4d_core.WrongComponentTypeException.__proto__),
    message: dart.finalFieldType(dart.dynamic)
  }));
  m4d_core.mdlComponent = function mdlComponent(element, type, opts) {
    let showWarning = opts && 'showWarning' in opts ? opts.showWarning : true;
    if (element == null) {
      return m4d_core.MdlComponent.as(element);
    }
    let jsElement = js.JsObject.fromBrowserObject(element);
    function _listNames(jsElement) {
      let _logger = logger.Logger.new("mdlcore.mdlComponent._listNames");
      let componentsForElement = core.String.as(dart.dsend(jsElement, '_get', ["mdlcomponent"]))[$split](",");
      _logger.info("Registered Component for " + dart.str(element) + ":");
      componentsForElement[$forEach](dart.fn(name => {
        _logger.warning(" -> " + dart.str(name));
      }, StringLToNullN()));
    }
    dart.fn(_listNames, dynamicTovoid());
    if (!dart.test(jsElement.hasProperty("mdlcomponent"))) {
      let id = "<not set>";
      if (element.id != null && element.id[$isNotEmpty]) {
        id = element.id;
      }
      dart.throw(dart.str(element) + " is not a MdlComponent!!! " + "(ID: " + dart.str(id) + ", Classes: " + dart.str(element[$classes]) + ", " + "Dataset: " + dart.str(element[$dataset][$_get]("upgraded")) + ")");
    }
    let typeAsString = null;
    if (type != null) {
      typeAsString = dart.toString(type);
    } else if (dart.test(jsElement.hasProperty("mdlwidget"))) {
      typeAsString = core.String.as(jsElement._get("mdlwidget"));
    } else {
      let componentsForElement = core.String.as(jsElement._get("mdlcomponent"))[$split](",");
      if (dart.notNull(componentsForElement[$length]) > 1) {
        dart.throw(new m4d_core.WrongComponentTypeException.new(dart.str(element) + " has more than one components registered. " + "(" + dart.str(componentsForElement) + ")\n" + "Please specify the requested type.\n" + "Usually this is a 'MdlComponent.parent' problem..."));
      }
      typeAsString = componentsForElement[$first];
    }
    if (dart.test(jsElement.hasProperty(typeAsString))) {
      return m4d_core.MdlComponent.as(jsElement._get(typeAsString));
    }
    if (dart.test(showWarning)) {
      _listNames(jsElement);
    }
    dart.throw(dart.str(element) + " is not a " + dart.str(typeAsString) + "-Component!!!\n" + "- ID: " + dart.str(element.id) + "\n" + "- classes: " + dart.str(element[$classes]) + "\n" + "- attributes: " + dart.str(element[$attributes]) + ")\n" + "These components are available: " + dart.str(core.String.as(jsElement._get("mdlcomponent"))));
  };
  m4d_core.isMdlWidget = function isMdlWidget(element) {
    validate.Validate.notNull(html.HtmlElement, element);
    let jsElement = js.JsObject.fromBrowserObject(element);
    return jsElement.hasProperty("mdlwidget");
  };
  m4d_core.isMdlComponent = function isMdlComponent(element, type = null) {
    validate.Validate.notNull(html.HtmlElement, element);
    let jsElement = js.JsObject.fromBrowserObject(element);
    let isComponent = jsElement.hasProperty("mdlcomponent");
    if (dart.test(isComponent) && type != null) {
      return m4d_core.mdlComponentNames(element)[$contains](dart.toString(type));
    }
    return isComponent;
  };
  m4d_core.mdlComponentNames = function mdlComponentNames(element) {
    validate.Validate.notNull(html.HtmlElement, element);
    let names = JSArrayOfStringL().of([]);
    let jsElement = js.JsObject.fromBrowserObject(element);
    if (!dart.test(jsElement.hasProperty("mdlcomponent"))) {
      return names;
    }
    names[$addAll](core.String.as(jsElement._get("mdlcomponent"))[$split](","));
    return names;
  };
  m4d_core.mdlComponents = function mdlComponents(element) {
    validate.Validate.notNull(html.HtmlElement, element);
    let components = JSArrayOfMdlComponentL().of([]);
    if (!dart.test(m4d_core.isMdlComponent(element))) {
      return components;
    }
    let jsElement = js.JsObject.fromBrowserObject(element);
    let names = m4d_core.mdlComponentNames(element);
    names[$forEach](dart.fn(name => {
      if (dart.test(jsElement.hasProperty(name))) {
        components[$add](m4d_core.MdlComponent.as(jsElement._get(name)));
      }
    }, StringLToNullN()));
    return components;
  };
  m4d_core.refreshComponentsInSubtree = function refreshComponentsInSubtree(element) {
    if (element != null && html.HtmlElement.is(element)) {
      element[$children][$forEach](dart.fn(element => m4d_core.refreshComponentsInSubtree(html.HtmlElement.as(element)), ElementLTovoid()));
      if (dart.test(m4d_core.isMdlComponent(element))) {
        m4d_core.mdlComponents(element)[$forEach](dart.fn(component => {
          if (interfaces.RefreshableComponent.is(component)) {
            interfaces.RefreshableComponent.as(component).refresh();
          }
        }, MdlComponentLToNullN()));
      }
    }
  };
  m4d_core.getAllMdlComponents = function getAllMdlComponents(element) {
    validate.Validate.notNull(html.HtmlElement, element);
    let components = JSArrayOfMdlComponentL().of([]);
    function _iterateOverAllHTMLElements(element) {
      if (html.HtmlElement.is(element)) {
        element[$children][$forEach](dart.fn(element => _iterateOverAllHTMLElements(html.HtmlElement.as(element)), ElementLTodynamic()));
        if (dart.test(m4d_core.isMdlComponent(element))) {
          components[$addAll](m4d_core.mdlComponents(element));
        }
      }
    }
    dart.fn(_iterateOverAllHTMLElements, HtmlElementLToNullN());
    _iterateOverAllHTMLElements(element);
    return new (UnmodifiableListViewOfMdlComponentL()).new(components);
  };
  m4d_core.componentFactory = function componentFactory() {
    return m4d_core.componentHandler();
  };
  m4d_core.componentHandler = function componentHandler() {
    return m4d_core._componenthandler;
  };
  dart.defineLazy(m4d_core, {
    /*m4d_core._componenthandler*/get _componenthandler() {
      return new m4d_core.MdlComponentHandler.new();
    },
    /*m4d_core.MDL_COMPONENT_PROPERTY*/get MDL_COMPONENT_PROPERTY() {
      return "mdlcomponent";
    },
    /*m4d_core._MDL_WIDGET_PROPERTY*/get _MDL_WIDGET_PROPERTY() {
      return "mdlwidget";
    }
  }, true);
  dart.trackLibraries("packages/m4d_core/m4d_core", {
    "package:m4d_core/m4d_core.dart": m4d_core
  }, {
    "package:m4d_core/m4d_core.dart": ["core/MdlEventListener.dart", "core/MdlComponent.dart", "core/MdlComponentHandler.dart", "core/MdlConfig.dart", "core/DomRenderer.dart", "core/dom/DataAttibute.dart", "core/dom/ElementProperties.dart", "observable/ObservableList.dart", "observable/ObservableProperty.dart", "core/utils.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["m4d_core.dart","core/MdlEventListener.dart","core/MdlComponent.dart","core/MdlComponentHandler.dart","core/MdlConfig.dart","core/DomRenderer.dart","core/dom/DataAttibute.dart","core/dom/ElementProperties.dart","observable/ObservableList.dart","observable/ObservableProperty.dart","core/utils.dart"],"names":[],"mappings":"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","file":"m4d_core.ddc.js"}');
  // Exports:
  return {
    m4d_core: m4d_core
  };
});

//# sourceMappingURL=m4d_core.ddc.js.map
