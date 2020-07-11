define(['dart_sdk', 'packages/validate/expect'], function(dart_sdk, packages__validate__expect) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const validate = packages__validate__expect.validate;
  var m4d_utils = Object.create(dart.library);
  var $split = dartx.split;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $toInt = dartx.toInt;
  var $toLowerCase = dartx.toLowerCase;
  var $toDouble = dartx.toDouble;
  var $toString = dartx.toString;
  var $trim = dartx.trim;
  var $replaceAll = dartx.replaceAll;
  var $contains = dartx.contains;
  var $replaceFirstMapped = dartx.replaceFirstMapped;
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(core.String)))();
  var MatchLToStringL = () => (MatchLToStringL = dart.constFn(dart.fnType(core.String, [core.Match])))();
  const CT = Object.create(null);
  var L0 = "package:m4d_core/m4d_utils.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 10000
      });
    }
  }, false);
  var _match = dart.privateName(m4d_utils, "_match");
  var _functionAsString$ = dart.privateName(m4d_utils, "_functionAsString");
  m4d_utils.StringToFunction = class StringToFunction extends core.Object {
    get function() {
      return new _internal.Symbol.new(this.functionAsString);
    }
    get functionAsString() {
      return this[_match].group(1);
    }
    get params() {
      let _params = JSArrayOfStringL().of([]);
      if (this[_match].groupCount === 2) {
        let matches = this[_match].group(2)[$split](",");
        if (dart.test(matches[$isNotEmpty]) && matches[$_get](0)[$isNotEmpty]) {
          _params[$addAll](matches);
        }
      }
      return _params;
    }
  };
  (m4d_utils.StringToFunction.new = function(_functionAsString) {
    this[_match] = null;
    this[_functionAsString$] = _functionAsString;
    validate.Validate.notBlank(this[_functionAsString$]);
    this[_match] = core.RegExp.new("([^(]*)\\((.*)\\)").firstMatch(this[_functionAsString$]);
    validate.Validate.isTrue(dart.notNull(this[_match].groupCount) > 0 && dart.notNull(this[_match].groupCount) <= 2, dart.str(this[_functionAsString$]) + " is not a valid function");
  }).prototype = m4d_utils.StringToFunction.prototype;
  dart.addTypeTests(m4d_utils.StringToFunction);
  dart.addTypeCaches(m4d_utils.StringToFunction);
  dart.setGetterSignature(m4d_utils.StringToFunction, () => ({
    __proto__: dart.getGetters(m4d_utils.StringToFunction.__proto__),
    function: core.Symbol,
    functionAsString: core.String,
    params: core.List$(core.String)
  }));
  dart.setLibraryUri(m4d_utils.StringToFunction, L0);
  dart.setFieldSignature(m4d_utils.StringToFunction, () => ({
    __proto__: dart.getFields(m4d_utils.StringToFunction.__proto__),
    [_functionAsString$]: dart.finalFieldType(core.String),
    [_match]: dart.fieldType(core.Match)
  }));
  m4d_utils.ConvertValue = class ConvertValue extends core.Object {
    static toBool(value) {
      if (value == null) {
        return false;
      }
      if (typeof value == 'boolean') {
        return value;
      }
      if (typeof value == 'number') {
        return value[$toInt]() === 1;
      }
      let stringvalue = dart.str(value)[$toLowerCase]();
      return stringvalue === "true" || stringvalue === "on" || stringvalue === "1" || stringvalue === "yes";
    }
    static toInt(value) {
      if (value == null) {
        return 0;
      }
      if (core.int.is(value)) {
        return value;
      }
      if (typeof value == 'number') {
        return value[$toInt]();
      }
      let stringvalue = dart.str(value)[$toLowerCase]();
      return core.num.parse(stringvalue)[$toInt]();
    }
    static toDouble(value) {
      if (value == null) {
        return 0.0;
      }
      if (typeof value == 'number') {
        return value;
      }
      if (typeof value == 'number') {
        return value[$toDouble]();
      }
      let stringvalue = dart.str(value)[$toLowerCase]();
      return core.num.parse(stringvalue)[$toDouble]();
    }
    static toStringValue(value) {
      if (value == null) {
        return "";
      }
      return dart.toString(value);
    }
    static toSanitizeString(value) {
      return dart.str(value)[$trim]()[$replaceAll](core.RegExp.new("(^'|'$)"), "")[$replaceAll](core.RegExp.new("(^\"|\"$)"), "");
    }
  };
  (m4d_utils.ConvertValue.new = function() {
    ;
  }).prototype = m4d_utils.ConvertValue.prototype;
  dart.addTypeTests(m4d_utils.ConvertValue);
  dart.addTypeCaches(m4d_utils.ConvertValue);
  dart.setLibraryUri(m4d_utils.ConvertValue, L0);
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  m4d_utils.waitUntil = function waitUntil(test, opts) {
    let maxIterations = opts && 'maxIterations' in opts ? opts.maxIterations : 100;
    let step = opts && 'step' in opts ? opts.step : C0 || CT.C0;
    return async.async(core.int, function* waitUntil() {
      let iterations = 0;
      for (; iterations < dart.notNull(maxIterations); iterations = iterations + 1) {
        yield async.Future.delayed(step);
        if (dart.test(test())) {
          break;
        }
      }
      if (iterations >= dart.notNull(maxIterations)) {
        dart.throw(new async.TimeoutException.new("Condition not reached within " + dart.str(iterations * dart.notNull(step.inMilliseconds)) + "ms"));
      }
      return iterations;
    });
  };
  m4d_utils.sanitizeResponseText = function sanitizeResponseText(responseText) {
    if (!responseText[$contains](core.RegExp.new("<body[^>]*>", {multiLine: true, caseSensitive: false}))) {
      return responseText;
    }
    let sanitized = responseText[$replaceFirstMapped](core.RegExp.new("(?:.|\\n|\\r)*" + "<body[^>]*>([^<]*(?:(?!<\\/?body)<[^<]*)*)<\\/body[^>]*>" + "(?:.|\\n|\\r)*", {multiLine: true, caseSensitive: false}), dart.fn(m => m._get(1), MatchLToStringL()));
    return sanitized;
  };
  dart.trackLibraries("packages/m4d_core/m4d_utils", {
    "package:m4d_core/m4d_utils.dart": m4d_utils
  }, {
    "package:m4d_core/m4d_utils.dart": ["utils/StringToFunction.dart", "utils/ConvertValue.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["utils/StringToFunction.dart","utils/ConvertValue.dart","m4d_utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4D2B,YAAI,0BAAO;IAAiB;;AAGpB,YAAA,AAAO,oBAAM;IAAE;;AAGpC,oBAAc;AAGpB,UAAG,AAAO,AAAW,4BAAG;AACD,sBAAU,AAAO,AAAS,mBAAH,WAAS;AACnD,sBAAG,AAAQ,OAAD,kBAAe,AAAO,AAAI,OAAJ,QAAC;AACN,UAAvB,AAAQ,OAAD,UAAQ,OAAO;;;AAG9B,YAAO,QAAO;IAClB;;6CA5BsB;IAFhB;IAEgB;AACkB,IAA3B,2BAAS;AAImD,IAArE,eAAa,AAA2B,gBAApB,gCAA+B;AAG4D,IAAtG,yBAAyB,AAAI,aAAtB,AAAO,2BAAa,KAAuB,aAAlB,AAAO,4BAAc,GAAgD,SAA3C,4BAAkB;EACzF;;;;;;;;;;;;;;;;kBChCyB;AACrB,UAAG,AAAM,KAAD,IAAI;AACR,cAAO;;AAGX,UAAS,OAAN,KAAK;AACJ,cAAO,MAAK;;AAGhB,UAAS,OAAN,KAAK;AACJ,cAAO,AAAM,AAAQ,MAAT,eAAY;;AAEf,wBAAsB,AAAC,SAAP,KAAK;AAClC,YAAO,AAAY,AAAuD,YAAxD,KAAI,UAAU,AAAY,WAAD,KAAI,QAAQ,AAAY,WAAD,KAAI,OAAO,AAAY,WAAD,KAAI;IAChG;iBAEuB;AACnB,UAAG,AAAM,KAAD,IAAI;AACR,cAAO;;AAGX,UAAS,YAAN,KAAK;AACJ,cAAO,MAAK;;AAEhB,UAAS,OAAN,KAAK;AACJ,cAAO,AAAM,MAAD;;AAEH,wBAAsB,AAAC,SAAP,KAAK;AAClC,YAAW,AAAmB,gBAAb,WAAW;IAChC;oBAE6B;AACzB,UAAG,AAAM,KAAD,IAAI;AACR,cAAO;;AAGX,UAAS,OAAN,KAAK;AACJ,cAAO,MAAK;;AAEhB,UAAS,OAAN,KAAK;AACJ,cAAO,AAAM,MAAD;;AAEH,wBAAsB,AAAC,SAAP,KAAK;AAClC,YAAW,AAAmB,gBAAb,WAAW;IAChC;yBAEkC;AAC9B,UAAG,AAAM,KAAD,IAAI;AACR,cAAO;;AAEX,YAAa,eAAN,KAAK;IAChB;4BAIqC;AACjC,YAAe,AAAC,AAAO,AAAsC,UAApD,KAAK,wBAAwB,gBAAO,YAAY,iBAAmB,gBAAO,cAAY;IACnG;;;;EAGJ;;;;;;2CCjD2B;QACb;QACK;AAFE;AAIb,uBAAa;AACjB,aAAK,AAAW,UAAD,gBAAG,aAAa,GAAC,aAAA,AAAU,UAAA;AACZ,QAA1B,MAAa,qBAAQ,IAAI;AACzB,sBAAG,AAAI,IAAA;AACH;;;AAGR,UAAG,AAAW,UAAD,iBAAI,aAAa;AAE+C,QADzE,WAAM,+BACF,AAAoE,2CAApC,AAAW,UAAD,gBAAG,AAAK,IAAD,oBAAgB;;AAEzE,YAAO,WAAU;IACrB;;iEAGyC;AACrC,SAAI,AAAa,YAAD,YAAc,gBAAO,2BAA0B,qBAAoB;AAC/E,YAAO,aAAY;;AAGV,oBAAY,AAAa,YAAD,sBAC7B,gBACA,AAAgB,AAC8C,mBAA1D,6DACA,8BACO,qBAAqB,SAChC,QAAa,KAGN,AAAC,CAAA,MAAC;AAIjB,UAAO,UAAS;EACpB","file":"m4d_utils.ddc.js"}');
  // Exports:
  return {
    m4d_utils: m4d_utils
  };
});

//# sourceMappingURL=m4d_utils.ddc.js.map
