define(['dart_sdk', 'packages/platform_detect/src/browser'], function(dart_sdk, packages__platform_detect__src__browser) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const navigator = packages__platform_detect__src__browser.src__navigator;
  const browser = packages__platform_detect__src__browser.src__browser;
  const operating_system = packages__platform_detect__src__browser.src__operating_system;
  var platform_detect = Object.create(dart.library);
  var support = Object.create(dart.library);
  var detect = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var JSArrayOfFeatureL = () => (JSArrayOfFeatureL = dart.constFn(_interceptors.JSArray$(support.Feature)))();
  const CT = Object.create(null);
  var L1 = "package:platform_detect/src/detect.dart";
  var L0 = "package:platform_detect/src/support.dart";
  var name$ = dart.privateName(support, "Feature.name");
  var isSupported$ = dart.privateName(support, "Feature.isSupported");
  support.Feature = class Feature extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get isSupported() {
      return this[isSupported$];
    }
    set isSupported(value) {
      super.isSupported = value;
    }
    _equals(other) {
      if (other == null) return false;
      return support.Feature.is(other) && other.name == this.name;
    }
    get hashCode() {
      return dart.hashCode(this.name);
    }
  };
  (support.Feature.new = function(name, isSupported) {
    this[name$] = name;
    this[isSupported$] = isSupported;
    ;
  }).prototype = support.Feature.prototype;
  dart.addTypeTests(support.Feature);
  dart.addTypeCaches(support.Feature);
  dart.setLibraryUri(support.Feature, L0);
  dart.setFieldSignature(support.Feature, () => ({
    __proto__: dart.getFields(support.Feature.__proto__),
    name: dart.finalFieldType(core.String),
    isSupported: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(support.Feature, ['_equals']);
  dart.defineExtensionAccessors(support.Feature, ['hashCode']);
  dart.defineLazy(support.Feature, {
    /*support.Feature.touchEvents*/get touchEvents() {
      return new support.Feature.new("touch", html.window.navigator.maxTouchPoints != null ? dart.notNull(html.window.navigator.maxTouchPoints) > 0 : html.TouchEvent.supported);
    },
    /*support.Feature.msTouchEvents*/get msTouchEvents() {
      return new support.Feature.new("mstouch", dart.test(detect.browser.isInternetExplorer) && dart.notNull(html.window.navigator.maxTouchPoints) > 1);
    }
  }, true);
  dart.defineLazy(support, {
    /*support.defaultFeatureCssClassDecorators*/get defaultFeatureCssClassDecorators() {
      return JSArrayOfFeatureL().of([support.Feature.touchEvents, support.Feature.msTouchEvents]);
    }
  }, true);
  detect._HtmlNavigator = class _HtmlNavigator extends core.Object {
    get vendor() {
      return html.window.navigator.vendor;
    }
    get appVersion() {
      return html.window.navigator.appVersion;
    }
    get appName() {
      return html.window.navigator.appName;
    }
    get userAgent() {
      return html.window.navigator.userAgent;
    }
  };
  (detect._HtmlNavigator.new = function() {
    ;
  }).prototype = detect._HtmlNavigator.prototype;
  dart.addTypeTests(detect._HtmlNavigator);
  dart.addTypeCaches(detect._HtmlNavigator);
  detect._HtmlNavigator[dart.implements] = () => [navigator.NavigatorProvider];
  dart.setGetterSignature(detect._HtmlNavigator, () => ({
    __proto__: dart.getGetters(detect._HtmlNavigator.__proto__),
    vendor: core.String,
    appVersion: core.String,
    appName: core.String,
    userAgent: core.String
  }));
  dart.setLibraryUri(detect._HtmlNavigator, L1);
  detect.configurePlatformForTesting = function configurePlatformForTesting(opts) {
    let browser = opts && 'browser' in opts ? opts.browser : null;
    let operatingSystem = opts && 'operatingSystem' in opts ? opts.operatingSystem : null;
    let features = opts && 'features' in opts ? opts.features : null;
    detect._browser = browser;
    detect._operatingSystem = operatingSystem;
    detect._features = features;
  };
  dart.copyProperties(detect, {
    get browser() {
      if (detect._browser == null) {
        browser.Browser.navigator = new detect._HtmlNavigator.new();
        detect._browser = browser.Browser.getCurrentBrowser();
      }
      return detect._browser;
    },
    get operatingSystem() {
      if (detect._operatingSystem == null) {
        operating_system.OperatingSystem.navigator = new detect._HtmlNavigator.new();
        detect._operatingSystem = operating_system.OperatingSystem.getCurrentOperatingSystem();
      }
      return detect._operatingSystem;
    },
    get features() {
      return detect._features;
    }
  });
  dart.defineLazy(detect, {
    /*detect._browser*/get _browser() {
      return null;
    },
    set _browser(_) {},
    /*detect._operatingSystem*/get _operatingSystem() {
      return null;
    },
    set _operatingSystem(_) {},
    /*detect._features*/get _features() {
      return null;
    },
    set _features(_) {}
  }, true);
  dart.trackLibraries("packages/platform_detect/platform_detect", {
    "package:platform_detect/platform_detect.dart": platform_detect,
    "package:platform_detect/src/support.dart": support,
    "package:platform_detect/src/detect.dart": detect
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/support.dart","src/detect.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IA2Be;;;;;;IAGF;;;;;;;UAGc;AAAU,YAAM,AAAW,oBAAjB,KAAK,KAAe,AAAM,AAAK,KAAN,SAAS;IAAI;;AAGrD,YAAK,eAAL;IAAa;;kCAEpB,MAAW;IAAX;IAAW;;EAAY;;;;;;;;;;;;MAgBf,2BAAW;YAAG,yBAC/B,SACA,AAAO,AAAU,AAAe,wCAAG,OACG,aAAhC,AAAO,AAAU,wCAAiB,IACvB;;MAKA,6BAAa;YAAG,yBAAQ,WACd,UAA3B,AAAQ,sCAAsD,aAAhC,AAAO,AAAU,wCAAiB;;;;MA9ClD,wCAAgC;YAAG,yBAC7C,6BACA;;;;;AC8Ca,YAAA,AAAO,AAAU;IAAM;;AAEnB,YAAA,AAAO,AAAU;IAAU;;AAE9B,YAAA,AAAO,AAAU;IAAO;;AAEtB,YAAA,AAAO,AAAU;IAAS;;;;EACpD;;;;;;;;;;;;;QA9Ca;QACO;QACF;AACE,IAAlB,kBAAW,OAAO;AACgB,IAAlC,0BAAmB,eAAe;AACd,IAApB,mBAAY,QAAQ;EACtB;;;AAME,UAAI,AAAS,mBAAG;AACsB,QAA5B,4BAAY;AACkB,QAAtC,kBAAmB;;AAGrB,YAAO;IACT;;AAME,UAAI,AAAiB,2BAAG;AACsB,QAA5B,6CAAY;AACkC,QAA9D,0BAAmC;;AAGrC,YAAO;IACT;;AAK8B;IAAS;;;MA3B/B,eAAQ;;;;MAYA,uBAAgB;;;;MAYlB,gBAAS","file":"platform_detect.ddc.js"}');
  // Exports:
  return {
    platform_detect: platform_detect,
    src__support: support,
    src__detect: detect
  };
});

//# sourceMappingURL=platform_detect.ddc.js.map
