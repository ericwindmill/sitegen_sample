define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var validate = Object.create(dart.library);
  var expect = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $isEmpty = dartx.isEmpty;
  var $trim = dartx.trim;
  var $length = dartx.length;
  var $compareTo = dartx.compareTo;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $toString = dartx.toString;
  var $replaceFirst = dartx.replaceFirst;
  var $runtimeType = dartx.runtimeType;
  var $replaceAll = dartx.replaceAll;
  var VoidToStringL = () => (VoidToStringL = dart.constFn(dart.fnType(core.String, [])))();
  const CT = Object.create(null);
  var L0 = "package:validate/validate.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: convert.JsonEncoder.prototype,
        [JsonEncoder__toEncodable]: null,
        [JsonEncoder_indent]: "  "
      });
    },
    get C1() {
      return C1 = dart.fn(expect._DEFAULT_IS_NULL_EX_MESSAGE, VoidToStringL());
    },
    get C2() {
      return C2 = dart.fn(expect._DEFAULT_IS_TRUE_EX_MESSAGE, VoidToStringL());
    }
  }, false);
  var JsonEncoder__toEncodable = dart.privateName(convert, "JsonEncoder._toEncodable");
  var JsonEncoder_indent = dart.privateName(convert, "JsonEncoder.indent");
  var C0;
  validate.Validate = class Validate extends core.Object {
    static isTrue(expression, message = "The validated expression is false") {
      return expect.isTrue(expression, {message: dart.fn(() => message, VoidToStringL())});
    }
    static notNull(T, object, message = "The validated object is null") {
      return expect.notNull(T, object, {message: dart.fn(() => message, VoidToStringL())});
    }
    static notEmpty(value, message = "The validated value is empty") {
      validate.Validate.notNull(dart.dynamic, value, message);
      if (dart.dtest(dart.dload(value, 'isEmpty'))) {
        dart.throw(new core.ArgumentError.new(message));
      }
      return value;
    }
    static notBlank(value, message = "The validated string is blank") {
      validate.Validate.notNull(core.String, value, message);
      if ((typeof value == 'string')[$_equals](false) || value[$trim]()[$isEmpty]) {
        dart.throw(new core.ArgumentError.new(message));
      }
      return value;
    }
    static noNullElements(iterable, message = "The validated array contains null element") {
      validate.Validate.notNull(core.Iterable, iterable);
      for (let x of iterable) {
        if (x == null) {
          dart.throw(new core.ArgumentError.new(message));
        }
      }
      return iterable;
    }
    static validIndex(iterable, index, message = "The validated array index is invalid") {
      validate.Validate.notNull(core.Iterable, iterable);
      if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(iterable[$length])) {
        dart.throw(new core.RangeError.new(message));
      }
      return iterable;
    }
    static validState(expression, message = "The validated state is false") {
      if (dart.equals(expression, false)) {
        dart.throw(new validate.IllegalStateError.new(message));
      }
    }
    static matchesPattern(input, pattern, message = "The string does not match the pattern") {
      if (dart.equals(pattern.hasMatch(input), false)) {
        dart.throw(new core.ArgumentError.new(message));
      }
    }
    static isEmail(input, message = "The string does not match the pattern") {
      validate.Validate.matchesPattern(input, core.RegExp.new(validate.Validate.PATTERN_EMAIL), message);
    }
    static isPassword(input, message = "The string does not match the pattern") {
      validate.Validate.matchesPattern(input, core.RegExp.new(validate.Validate.PATTERN_PW), message);
    }
    static isAlphaNumeric(input, message = "The string does not match the pattern") {
      validate.Validate.matchesPattern(input, core.RegExp.new("^[a-zA-Z0-9öäüÖÄÜß]+$"), message);
    }
    static isHex(input, message = "The string does not match the pattern") {
      validate.Validate.matchesPattern(input, core.RegExp.new(validate.Validate.PATTERN_HEX), message);
    }
    static isUUID(input, message = "The string does not match the pattern") {
      validate.Validate.matchesPattern(input, core.RegExp.new(validate.Validate.PATTERN_UUID), message);
    }
    static inclusiveBetween(start, end, value, message = "The value is not in the specified inclusive range") {
      if (dart.notNull(value[$compareTo](start)) < 0 || dart.notNull(value[$compareTo](end)) > 0) {
        dart.throw(new core.ArgumentError.new(message));
      }
    }
    static exclusiveBetween(start, end, value, message = "The value is not in the specified exclusive range") {
      if (dart.notNull(value[$compareTo](start)) <= 0 || dart.notNull(value[$compareTo](end)) >= 0) {
        dart.throw(new core.ArgumentError.new(message));
      }
    }
    static isJson(value, message = "The value is neither a num, String, bool, Null, List or Map") {
      validate.Validate.notNull(dart.dynamic, value, message);
      if (!(typeof value == 'number' || typeof value == 'string' || typeof value == 'boolean' || core.List.is(value) || core.Map.is(value))) {
        try {
          dart.dsend(value, 'toJson', []);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (core.NoSuchMethodError.is(ex)) {
            dart.throw(new core.ArgumentError.new(message));
          } else
            throw e;
        }
      }
    }
    static isKeyInMap(key, map, message = "The key '%key%' is not available for this structure: %structure%") {
      validate.Validate.notNull(core.Map, map, message);
      if (!dart.test(map[$containsKey](key)) || map[$_get](key) == null) {
        dart.throw(new core.ArgumentError.new(message[$replaceFirst]("%key%", dart.toString(key))[$replaceFirst]("%structure%", validate.Validate._PRETTYJSON.convert(map))));
      }
    }
    static isInstance(instanceCheck, obj, message = "The instance of the validated object is invalid. Should have been %wish% but was %truth%") {
      validate.Validate.notNull(validate.instanceCheck, instanceCheck);
      if (!dart.test(instanceCheck.check(obj))) {
        let wish = instanceCheck.type;
        let truth = obj != null ? dart.toString(dart.runtimeType(obj)) : "null";
        dart.throw(new core.ArgumentError.new(message[$replaceAll]("%wish%", wish)[$replaceAll]("%truth%", truth)));
      }
    }
  };
  (validate.Validate.new = function() {
    ;
  }).prototype = validate.Validate.prototype;
  dart.addTypeTests(validate.Validate);
  dart.addTypeCaches(validate.Validate);
  dart.setLibraryUri(validate.Validate, L0);
  dart.defineLazy(validate.Validate, {
    /*validate.Validate.PATTERN_EMAIL*/get PATTERN_EMAIL() {
      return "^([0-9a-zA-Z]([-.+\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$";
    },
    /*validate.Validate.PATTERN_PW*/get PATTERN_PW() {
      return "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%?])[0-9a-zA-Z@#$%?]{8,15}$";
    },
    /*validate.Validate.PATTERN_ALPHANUMERIC*/get PATTERN_ALPHANUMERIC() {
      return "^[a-zA-Z0-9öäüÖÄÜß]+$";
    },
    /*validate.Validate.PATTERN_HEX*/get PATTERN_HEX() {
      return "^(0x[a-fA-F0-9]+)|([a-fA-F0-9])+$";
    },
    /*validate.Validate.PATTERN_UUID*/get PATTERN_UUID() {
      return "^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$";
    },
    /*validate.Validate.DEFAULT_IS_TRUE_EX_MESSAGE*/get DEFAULT_IS_TRUE_EX_MESSAGE() {
      return "The validated expression is false";
    },
    /*validate.Validate.DEFAULT_IS_NULL_EX_MESSAGE*/get DEFAULT_IS_NULL_EX_MESSAGE() {
      return "The validated object is null";
    },
    /*validate.Validate.DEFAULT_NOT_EMPTY_MESSAGE*/get DEFAULT_NOT_EMPTY_MESSAGE() {
      return "The validated value is empty";
    },
    /*validate.Validate.DEFAULT_NOT_BLANK_EX_MESSAGE*/get DEFAULT_NOT_BLANK_EX_MESSAGE() {
      return "The validated string is blank";
    },
    /*validate.Validate.DEFAULT_NO_NULL_ELEMENTS_ARRAY_EX_MESSAGE*/get DEFAULT_NO_NULL_ELEMENTS_ARRAY_EX_MESSAGE() {
      return "The validated array contains null element";
    },
    /*validate.Validate.DEFAULT_VALID_INDEX_ARRAY_EX_MESSAGE*/get DEFAULT_VALID_INDEX_ARRAY_EX_MESSAGE() {
      return "The validated array index is invalid";
    },
    /*validate.Validate.DEFAULT_VALID_STATE_EX_MESSAGE*/get DEFAULT_VALID_STATE_EX_MESSAGE() {
      return "The validated state is false";
    },
    /*validate.Validate.DEFAULT_MATCHES_PATTERN_EX*/get DEFAULT_MATCHES_PATTERN_EX() {
      return "The string does not match the pattern";
    },
    /*validate.Validate.DEFAULT_INCLUSIVE_BETWEEN_EX_MESSAGE*/get DEFAULT_INCLUSIVE_BETWEEN_EX_MESSAGE() {
      return "The value is not in the specified inclusive range";
    },
    /*validate.Validate.DEFAULT_EXCLUSIVE_BETWEEN_EX_MESSAGE*/get DEFAULT_EXCLUSIVE_BETWEEN_EX_MESSAGE() {
      return "The value is not in the specified exclusive range";
    },
    /*validate.Validate.DEFAULT_JSON_MESSAGE*/get DEFAULT_JSON_MESSAGE() {
      return "The value is neither a num, String, bool, Null, List or Map";
    },
    /*validate.Validate.DEFAULT_KEY_IN_MAP_MESSAGE*/get DEFAULT_KEY_IN_MAP_MESSAGE() {
      return "The key '%key%' is not available for this structure: %structure%";
    },
    /*validate.Validate.DEFAULT_IS_INSTANCE_OF_EX_MESSAGE*/get DEFAULT_IS_INSTANCE_OF_EX_MESSAGE() {
      return "The instance of the validated object is invalid. Should have been %wish% but was %truth%";
    },
    /*validate.Validate._PRETTYJSON*/get _PRETTYJSON() {
      return C0 || CT.C0;
    }
  }, true);
  var message$ = dart.privateName(validate, "ErrorMessage.message");
  validate.ErrorMessage = class ErrorMessage extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
  };
  (validate.ErrorMessage.new = function(message) {
    this[message$] = message;
    validate.ErrorMessage.__proto__.new.call(this);
    ;
  }).prototype = validate.ErrorMessage.prototype;
  dart.addTypeTests(validate.ErrorMessage);
  dart.addTypeCaches(validate.ErrorMessage);
  dart.setLibraryUri(validate.ErrorMessage, L0);
  dart.setFieldSignature(validate.ErrorMessage, () => ({
    __proto__: dart.getFields(validate.ErrorMessage.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  validate.IllegalStateError = class IllegalStateError extends validate.ErrorMessage {};
  (validate.IllegalStateError.new = function(message) {
    validate.IllegalStateError.__proto__.new.call(this, message);
    ;
  }).prototype = validate.IllegalStateError.prototype;
  dart.addTypeTests(validate.IllegalStateError);
  dart.addTypeCaches(validate.IllegalStateError);
  dart.setLibraryUri(validate.IllegalStateError, L0);
  var _strict = dart.privateName(validate, "_strict");
  const _is_instanceCheck_default = Symbol('_is_instanceCheck_default');
  validate.instanceCheck$ = dart.generic(T => {
    class instanceCheck extends core.Object {
      check(obj) {
        return T.is(obj) && dart.equals(this[_strict], false) || dart.equals(this[_strict], true) && T.is(obj) && dart.toString(dart.runtimeType(obj)) == this.type;
      }
      get type() {
        let type = dart.toString(this[$runtimeType])[$replaceFirst](core.RegExp.new("[^<]+<"), "")[$replaceFirst](core.RegExp.new(">$"), "");
        return type;
      }
    }
    (instanceCheck.new = function(opts) {
      let strict = opts && 'strict' in opts ? opts.strict : true;
      this[_strict] = strict;
      ;
    }).prototype = instanceCheck.prototype;
    dart.addTypeTests(instanceCheck);
    instanceCheck.prototype[_is_instanceCheck_default] = true;
    dart.addTypeCaches(instanceCheck);
    dart.setMethodSignature(instanceCheck, () => ({
      __proto__: dart.getMethods(instanceCheck.__proto__),
      check: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(instanceCheck, () => ({
      __proto__: dart.getGetters(instanceCheck.__proto__),
      type: core.String
    }));
    dart.setLibraryUri(instanceCheck, L0);
    dart.setFieldSignature(instanceCheck, () => ({
      __proto__: dart.getFields(instanceCheck.__proto__),
      [_strict]: dart.finalFieldType(core.bool)
    }));
    return instanceCheck;
  });
  validate.instanceCheck = validate.instanceCheck$();
  dart.addTypeTests(validate.instanceCheck, _is_instanceCheck_default);
  var C1;
  var C2;
  expect._DEFAULT_IS_NULL_EX_MESSAGE = function _DEFAULT_IS_NULL_EX_MESSAGE() {
    return "The validated object is null";
  };
  expect._DEFAULT_IS_TRUE_EX_MESSAGE = function _DEFAULT_IS_TRUE_EX_MESSAGE() {
    return validate.Validate.DEFAULT_IS_TRUE_EX_MESSAGE;
  };
  expect.notNull = function notNull(T, object, opts) {
    let message = opts && 'message' in opts ? opts.message : C1 || CT.C1;
    if (object == null) {
      dart.throw(new core.ArgumentError.new(message()));
    }
    return object;
  };
  expect.isTrue = function isTrue(expression, opts) {
    let message = opts && 'message' in opts ? opts.message : C2 || CT.C2;
    if (expression == null || dart.equals(expression, false)) {
      dart.throw(new core.ArgumentError.new(message()));
    }
    return expression;
  };
  dart.trackLibraries("packages/validate/expect", {
    "package:validate/validate.dart": validate,
    "package:validate/expect.dart": expect
  }, {
    "package:validate/validate.dart": ["src/errors.dart", "src/utils.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["validate.dart","src/errors.dart","src/utils.dart","expect.dart"],"names":[],"mappings":"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","file":"expect.ddc.js"}');
  // Exports:
  return {
    validate: validate,
    expect: expect
  };
});

//# sourceMappingURL=expect.ddc.js.map
