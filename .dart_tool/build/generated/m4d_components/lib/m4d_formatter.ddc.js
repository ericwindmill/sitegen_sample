define(['dart_sdk', 'packages/m4d_core/core/interfaces', 'packages/m4d_components/services', 'packages/m4d_core/m4d_ioc', 'packages/logging/logging', 'packages/validate/expect', 'packages/m4d_core/m4d_utils', 'packages/intl/intl'], function(dart_sdk, packages__m4d_core__core__interfaces, packages__m4d_components__services, packages__m4d_core__m4d_ioc, packages__logging__logging, packages__validate__expect, packages__m4d_core__m4d_utils, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interfaces = packages__m4d_core__core__interfaces.core__interfaces;
  const services = packages__m4d_components__services.services;
  const m4d_ioc = packages__m4d_core__m4d_ioc.m4d_ioc;
  const logger = packages__logging__logging.src__logger;
  const validate = packages__validate__expect.validate;
  const m4d_utils = packages__m4d_core__m4d_utils.m4d_utils;
  const intl = packages__intl__intl.intl;
  var m4d_formatter = Object.create(dart.library);
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $forEach = dartx.forEach;
  var $trim = dartx.trim;
  var $contains = dartx.contains;
  var $add = dartx.add;
  var $length = dartx.length;
  var $first = dartx.first;
  var $toLowerCase = dartx.toLowerCase;
  var $isNotEmpty = dartx.isNotEmpty;
  var $padRight = dartx.padRight;
  var $toUpperCase = dartx.toUpperCase;
  var LinkedMapOfStringL$FormatterL = () => (LinkedMapOfStringL$FormatterL = dart.constFn(_js_helper.LinkedMap$(core.String, m4d_formatter.Formatter)))();
  var dynamicToLdynamic = () => (dynamicToLdynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  var JSArrayOfdynamicToLdynamic = () => (JSArrayOfdynamicToLdynamic = dart.constFn(_interceptors.JSArray$(dynamicToLdynamic())))();
  var IterableOfStringL = () => (IterableOfStringL = dart.constFn(core.Iterable$(core.String)))();
  var FnToNullN = () => (FnToNullN = dart.constFn(dart.fnType(core.Null, [dynamicToLdynamic()])))();
  var dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  var StringLToNullN = () => (StringLToNullN = dart.constFn(dart.fnType(core.Null, [core.String])))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:m4d_components/m4d_formatter.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(intl.NumberFormat.localeExists, dynamicToboolL());
    }
  }, false);
  m4d_formatter.Formatter = class Formatter extends core.Object {};
  (m4d_formatter.Formatter.new = function() {
    ;
  }).prototype = m4d_formatter.Formatter.prototype;
  dart.addTypeTests(m4d_formatter.Formatter);
  dart.addTypeCaches(m4d_formatter.Formatter);
  dart.setLibraryUri(m4d_formatter.Formatter, L0);
  var _number = dart.privateName(m4d_formatter, "_number");
  var _decorate = dart.privateName(m4d_formatter, "_decorate");
  var _uppercase = dart.privateName(m4d_formatter, "_uppercase");
  var _lowercase = dart.privateName(m4d_formatter, "_lowercase");
  var _choose = dart.privateName(m4d_formatter, "_choose");
  var _availableFormatter = dart.privateName(m4d_formatter, "_availableFormatter");
  m4d_formatter.Formatters = class Formatters extends core.Object {
    contains(name) {
      return this[_availableFormatter][$containsKey](name);
    }
    formatter(name) {
      return this[_availableFormatter][$_get](name);
    }
  };
  (m4d_formatter.Formatters.new = function() {
    this[_number] = new m4d_formatter.NumberFormatter.new();
    this[_decorate] = new m4d_formatter.DecoratorFormatter.new();
    this[_uppercase] = new m4d_formatter.UpperCaseFormatter.new();
    this[_lowercase] = new m4d_formatter.LowerCaseFormatter.new();
    this[_choose] = new m4d_formatter.ChooseFormatter.new();
    this[_availableFormatter] = new (LinkedMapOfStringL$FormatterL()).new();
    this[_availableFormatter][$_set]("number", this[_number]);
    this[_availableFormatter][$_set]("decorator", this[_decorate]);
    this[_availableFormatter][$_set]("uppercase", this[_uppercase]);
    this[_availableFormatter][$_set]("lowercase", this[_lowercase]);
    this[_availableFormatter][$_set]("choose", this[_choose]);
  }).prototype = m4d_formatter.Formatters.prototype;
  dart.addTypeTests(m4d_formatter.Formatters);
  dart.addTypeCaches(m4d_formatter.Formatters);
  m4d_formatter.Formatters[dart.implements] = () => [interfaces.M4DService];
  dart.setMethodSignature(m4d_formatter.Formatters, () => ({
    __proto__: dart.getMethods(m4d_formatter.Formatters.__proto__),
    contains: dart.fnType(core.bool, [core.String]),
    formatter: dart.fnType(m4d_formatter.Formatter, [core.String])
  }));
  dart.setLibraryUri(m4d_formatter.Formatters, L0);
  dart.setFieldSignature(m4d_formatter.Formatters, () => ({
    __proto__: dart.getFields(m4d_formatter.Formatters.__proto__),
    [_number]: dart.finalFieldType(m4d_formatter.NumberFormatter),
    [_decorate]: dart.finalFieldType(m4d_formatter.DecoratorFormatter),
    [_uppercase]: dart.finalFieldType(m4d_formatter.UpperCaseFormatter),
    [_lowercase]: dart.finalFieldType(m4d_formatter.LowerCaseFormatter),
    [_choose]: dart.finalFieldType(m4d_formatter.ChooseFormatter),
    [_availableFormatter]: dart.finalFieldType(core.Map$(core.String, m4d_formatter.Formatter))
  }));
  m4d_formatter.FormatterModule = class FormatterModule extends m4d_ioc.Module {
    configure() {
      this.bind(services.Formatters).to(new m4d_formatter.Formatters.new());
    }
  };
  (m4d_formatter.FormatterModule.new = function() {
    ;
  }).prototype = m4d_formatter.FormatterModule.prototype;
  dart.addTypeTests(m4d_formatter.FormatterModule);
  dart.addTypeCaches(m4d_formatter.FormatterModule);
  dart.setMethodSignature(m4d_formatter.FormatterModule, () => ({
    __proto__: dart.getMethods(m4d_formatter.FormatterModule.__proto__),
    configure: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(m4d_formatter.FormatterModule, L0);
  var _logger = dart.privateName(m4d_formatter, "_logger");
  var _commands = dart.privateName(m4d_formatter, "_commands");
  var _formatters$ = dart.privateName(m4d_formatter, "_formatters");
  var _addCommands = dart.privateName(m4d_formatter, "_addCommands");
  m4d_formatter.FormatterPipeline = class FormatterPipeline extends core.Object {
    format(value) {
      this[_commands][$forEach](dart.fn(command => {
        value = command(value);
      }, FnToNullN()));
      return core.String.as(value);
    }
    [_addCommands](parts) {
      parts[$forEach](dart.fn(part => {
        this[_commands][$add](dart.fn(val => {
          let formatter = part[$trim]();
          let functionName = formatter;
          let params = [];
          if (formatter[$contains](core.RegExp.new("\\(.*\\)"))) {
            let stf = new m4d_utils.StringToFunction.new(formatter);
            functionName = stf.functionAsString;
            params = stf.params;
          }
          if (!dart.test(this[_formatters$].contains(functionName))) {
            this[_logger].warning("Formatter '" + dart.str(functionName) + " is not available for " + dart.str(val) + "!");
          } else {
            try {
              val = this[_formatters$].formatter(functionName).format(val, params);
              return val;
            } catch (e$) {
              let e = dart.getThrown(e$);
              this[_logger].warning("Could not format '" + dart.str(val) + "' with " + dart.str(functionName) + ". (" + dart.str(e) + ")");
              return val;
            }
          }
        }, dynamicTodynamic()));
      }, StringLToNullN()));
    }
  };
  (m4d_formatter.FormatterPipeline.new = function(_formatters) {
    this[_logger] = logger.Logger.new("mdlformatter.FormatterPipeline");
    this[_commands] = JSArrayOfdynamicToLdynamic().of([]);
    this[_formatters$] = _formatters;
    validate.Validate.notNull(m4d_formatter.Formatters, this[_formatters$], "Formatters must not be null! (CTOR)");
  }).prototype = m4d_formatter.FormatterPipeline.prototype;
  (m4d_formatter.FormatterPipeline.fromList = function(_formatters, parts) {
    this[_logger] = logger.Logger.new("mdlformatter.FormatterPipeline");
    this[_commands] = JSArrayOfdynamicToLdynamic().of([]);
    this[_formatters$] = _formatters;
    validate.Validate.notNull(m4d_formatter.Formatters, this[_formatters$], "Formatters must not be null! (fromList)");
    validate.Validate.notNull(IterableOfStringL(), parts, "Parts must not be null!");
    this[_addCommands](parts);
  }).prototype = m4d_formatter.FormatterPipeline.prototype;
  dart.addTypeTests(m4d_formatter.FormatterPipeline);
  dart.addTypeCaches(m4d_formatter.FormatterPipeline);
  dart.setMethodSignature(m4d_formatter.FormatterPipeline, () => ({
    __proto__: dart.getMethods(m4d_formatter.FormatterPipeline.__proto__),
    format: dart.fnType(core.String, [dart.dynamic]),
    [_addCommands]: dart.fnType(dart.void, [core.Iterable$(core.String)])
  }));
  dart.setLibraryUri(m4d_formatter.FormatterPipeline, L0);
  dart.setFieldSignature(m4d_formatter.FormatterPipeline, () => ({
    __proto__: dart.getFields(m4d_formatter.FormatterPipeline.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_commands]: dart.finalFieldType(core.List$(dart.fnType(dart.dynamic, [dart.dynamic]))),
    [_formatters$]: dart.finalFieldType(m4d_formatter.Formatters)
  }));
  m4d_formatter.ChooseFormatter = class ChooseFormatter extends core.Object {
    format(dynamicValue, params = null) {
      let p1 = params != null && dart.notNull(params[$length]) >= 1 ? params[$first] : "Yes";
      let p2 = params != null && dart.notNull(params[$length]) >= 2 ? params[$_get](1) : "No";
      return this[_choose](dynamicValue, core.String.as(p1), core.String.as(p2));
    }
    [_choose](value, option1, option2) {
      return dart.test(m4d_utils.ConvertValue.toBool(value)) ? m4d_utils.ConvertValue.toSanitizeString(option1) : m4d_utils.ConvertValue.toSanitizeString(option2);
    }
  };
  (m4d_formatter.ChooseFormatter.new = function() {
    this[_logger] = logger.Logger.new("mdlformatter.ChooseFormatter");
    ;
  }).prototype = m4d_formatter.ChooseFormatter.prototype;
  dart.addTypeTests(m4d_formatter.ChooseFormatter);
  dart.addTypeCaches(m4d_formatter.ChooseFormatter);
  m4d_formatter.ChooseFormatter[dart.implements] = () => [m4d_formatter.Formatter];
  dart.setMethodSignature(m4d_formatter.ChooseFormatter, () => ({
    __proto__: dart.getMethods(m4d_formatter.ChooseFormatter.__proto__),
    format: dart.fnType(core.String, [dart.dynamic], [core.List]),
    [_choose]: dart.fnType(core.String, [dart.dynamic, core.String, core.String])
  }));
  dart.setLibraryUri(m4d_formatter.ChooseFormatter, L0);
  dart.setFieldSignature(m4d_formatter.ChooseFormatter, () => ({
    __proto__: dart.getFields(m4d_formatter.ChooseFormatter.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger)
  }));
  m4d_formatter.DecoratorFormatter = class DecoratorFormatter extends core.Object {
    format(value, params = null) {
      return "--" + dart.str(value) + "--";
    }
  };
  (m4d_formatter.DecoratorFormatter.new = function() {
    ;
  }).prototype = m4d_formatter.DecoratorFormatter.prototype;
  dart.addTypeTests(m4d_formatter.DecoratorFormatter);
  dart.addTypeCaches(m4d_formatter.DecoratorFormatter);
  m4d_formatter.DecoratorFormatter[dart.implements] = () => [m4d_formatter.Formatter];
  dart.setMethodSignature(m4d_formatter.DecoratorFormatter, () => ({
    __proto__: dart.getMethods(m4d_formatter.DecoratorFormatter.__proto__),
    format: dart.fnType(core.String, [dart.dynamic], [core.List])
  }));
  dart.setLibraryUri(m4d_formatter.DecoratorFormatter, L0);
  m4d_formatter.LowerCaseFormatter = class LowerCaseFormatter extends core.Object {
    format(value, params = null) {
      return m4d_utils.ConvertValue.toSanitizeString(value)[$toLowerCase]();
    }
  };
  (m4d_formatter.LowerCaseFormatter.new = function() {
    ;
  }).prototype = m4d_formatter.LowerCaseFormatter.prototype;
  dart.addTypeTests(m4d_formatter.LowerCaseFormatter);
  dart.addTypeCaches(m4d_formatter.LowerCaseFormatter);
  m4d_formatter.LowerCaseFormatter[dart.implements] = () => [m4d_formatter.Formatter];
  dart.setMethodSignature(m4d_formatter.LowerCaseFormatter, () => ({
    __proto__: dart.getMethods(m4d_formatter.LowerCaseFormatter.__proto__),
    format: dart.fnType(core.String, [dart.dynamic], [core.List])
  }));
  dart.setLibraryUri(m4d_formatter.LowerCaseFormatter, L0);
  var C0;
  m4d_formatter.NumberFormatter = class NumberFormatter extends core.Object {
    format(value, params = null) {
      let valueAsDouble = m4d_utils.ConvertValue.toDouble(value);
      let fraction = m4d_utils.ConvertValue.toInt(params != null && dart.test(params[$isNotEmpty]) ? params[$first] : 2);
      return this[_number](valueAsDouble, fraction);
    }
    [_number](dynamicValue, fractionSize) {
      let value = m4d_utils.ConvertValue.toDouble(dynamicValue);
      let verifiedLocale = intl.Intl.verifiedLocale(intl.Intl.getCurrentLocale(), C0 || CT.C0);
      let pattern = dart.notNull(fractionSize) > 0 ? "#."[$padRight](dart.notNull(fractionSize) + 2, "0") : "#";
      let nf = intl.NumberFormat.new(pattern, verifiedLocale);
      return nf.format(value);
    }
  };
  (m4d_formatter.NumberFormatter.new = function() {
    this[_logger] = logger.Logger.new("mdlformatter.NumberFormatter");
    ;
  }).prototype = m4d_formatter.NumberFormatter.prototype;
  dart.addTypeTests(m4d_formatter.NumberFormatter);
  dart.addTypeCaches(m4d_formatter.NumberFormatter);
  m4d_formatter.NumberFormatter[dart.implements] = () => [m4d_formatter.Formatter];
  dart.setMethodSignature(m4d_formatter.NumberFormatter, () => ({
    __proto__: dart.getMethods(m4d_formatter.NumberFormatter.__proto__),
    format: dart.fnType(core.String, [dart.dynamic], [core.List]),
    [_number]: dart.fnType(core.String, [dart.dynamic, core.int])
  }));
  dart.setLibraryUri(m4d_formatter.NumberFormatter, L0);
  dart.setFieldSignature(m4d_formatter.NumberFormatter, () => ({
    __proto__: dart.getFields(m4d_formatter.NumberFormatter.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger)
  }));
  m4d_formatter.UpperCaseFormatter = class UpperCaseFormatter extends core.Object {
    format(value, params = null) {
      return m4d_utils.ConvertValue.toSanitizeString(value)[$toUpperCase]();
    }
  };
  (m4d_formatter.UpperCaseFormatter.new = function() {
    ;
  }).prototype = m4d_formatter.UpperCaseFormatter.prototype;
  dart.addTypeTests(m4d_formatter.UpperCaseFormatter);
  dart.addTypeCaches(m4d_formatter.UpperCaseFormatter);
  m4d_formatter.UpperCaseFormatter[dart.implements] = () => [m4d_formatter.Formatter];
  dart.setMethodSignature(m4d_formatter.UpperCaseFormatter, () => ({
    __proto__: dart.getMethods(m4d_formatter.UpperCaseFormatter.__proto__),
    format: dart.fnType(core.String, [dart.dynamic], [core.List])
  }));
  dart.setLibraryUri(m4d_formatter.UpperCaseFormatter, L0);
  dart.trackLibraries("packages/m4d_components/m4d_formatter", {
    "package:m4d_components/m4d_formatter.dart": m4d_formatter
  }, {
    "package:m4d_components/m4d_formatter.dart": ["formatter/utils/FormatterPipeline.dart", "formatter/ChooseFormatter.dart", "formatter/DecoratorFormatter.dart", "formatter/LowerCaseFormatter.dart", "formatter/NumberFormatter.dart", "formatter/UpperCaseFormatter.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["m4d_formatter.dart","formatter/utils/FormatterPipeline.dart","formatter/ChooseFormatter.dart","formatter/DecoratorFormatter.dart","formatter/LowerCaseFormatter.dart","formatter/NumberFormatter.dart","formatter/UpperCaseFormatter.dart"],"names":[],"mappings":"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","file":"m4d_formatter.ddc.js"}');
  // Exports:
  return {
    m4d_formatter: m4d_formatter
  };
});

//# sourceMappingURL=m4d_formatter.ddc.js.map
