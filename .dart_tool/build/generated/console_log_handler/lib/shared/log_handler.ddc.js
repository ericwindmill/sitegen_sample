define(['dart_sdk', 'packages/logging/logging', 'packages/intl/intl'], function(dart_sdk, packages__logging__logging, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const log_record = packages__logging__logging.src__log_record;
  const intl = packages__intl__intl.intl;
  var log_handler = Object.create(dart.library);
  var $substring = dartx.substring;
  var $replaceAll = dartx.replaceAll;
  var $padRight = dartx.padRight;
  const CT = Object.create(null);
  var L0 = "package:console_log_handler/shared/log_handler.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: convert.JsonEncoder.prototype,
        [JsonEncoder__toEncodable]: null,
        [JsonEncoder_indent]: "   "
      });
    }
  }, false);
  log_handler.LogHandler = class LogHandler extends core.Object {
    call(logRecord) {
      return this.toConsole(logRecord);
    }
    makeGroup(logRecord) {
      this.makeStackTraceGroup("  ○ StackTrace", logRecord);
      this.makeObjectGroup("  ○ Dart-Object", logRecord);
    }
  };
  (log_handler.LogHandler.new = function() {
    ;
  }).prototype = log_handler.LogHandler.prototype;
  dart.addTypeTests(log_handler.LogHandler);
  dart.addTypeCaches(log_handler.LogHandler);
  dart.setMethodSignature(log_handler.LogHandler, () => ({
    __proto__: dart.getMethods(log_handler.LogHandler.__proto__),
    call: dart.fnType(dart.void, [log_record.LogRecord]),
    makeGroup: dart.fnType(dart.void, [log_record.LogRecord])
  }));
  dart.setLibraryUri(log_handler.LogHandler, L0);
  dart.defineLazy(log_handler.LogHandler, {
    /*log_handler.LogHandler.GROUP_STACK_TRACE*/get GROUP_STACK_TRACE() {
      return "  ○ StackTrace";
    },
    /*log_handler.LogHandler.GROUP_OBJECT*/get GROUP_OBJECT() {
      return "  ○ Dart-Object";
    }
  }, true);
  log_handler.prettyPrintJson = function prettyPrintJson(json) {
    return log_handler.PRETTYJSON.convert(json);
  };
  log_handler.transformerDefault = function transformerDefault(logRecord, opts) {
    let nameWidth = opts && 'nameWidth' in opts ? opts.nameWidth : 20;
    let dateFormat = new intl.DateFormat.new("HH:mm:ss.SSS");
    let loggerName = logRecord.loggerName[$substring](math.max(core.int, 0, logRecord.loggerName.length - dart.notNull(nameWidth)));
    let shortLoggerName = logRecord.loggerName[$replaceAll](core.RegExp.new("^.+\\."), "");
    let time = null;
    if (logRecord.time != null) {
      time = dateFormat.format(logRecord.time);
    } else {
      time = dateFormat.format(new core.DateTime.now());
    }
    if (loggerName.length > dart.notNull(nameWidth)) {
      loggerName = shortLoggerName;
    }
    loggerName = loggerName + ":";
    loggerName = loggerName[$padRight](nameWidth);
    if (logRecord.error != null) {
      return dart.str(time) + " [" + dart.str(logRecord.level) + "] " + loggerName + " " + dart.str(logRecord.message) + " / " + dart.str(logRecord.error);
    } else {
      return dart.str(time) + " [" + dart.str(logRecord.level) + "] " + loggerName + " " + dart.str(logRecord.message);
    }
  };
  log_handler.transformerSimple = function transformerSimple(logRecord) {
    let shortLoggerName = logRecord.loggerName[$replaceAll](core.RegExp.new("^.+[.]"), "");
    if (logRecord.error != null) {
      return shortLoggerName + ": " + dart.str(logRecord.message) + " / " + dart.str(logRecord.error);
    } else {
      return shortLoggerName + ": " + dart.str(logRecord.message);
    }
  };
  log_handler.transformerMessageOnly = function transformerMessageOnly(logRecord) {
    if (logRecord.error != null) {
      return dart.str(logRecord.message) + " / " + dart.str(logRecord.error);
    } else {
      return dart.str(logRecord.message);
    }
  };
  var JsonEncoder__toEncodable = dart.privateName(convert, "JsonEncoder._toEncodable");
  var JsonEncoder_indent = dart.privateName(convert, "JsonEncoder.indent");
  var C0;
  dart.defineLazy(log_handler, {
    /*log_handler.PRETTYJSON*/get PRETTYJSON() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/console_log_handler/shared/log_handler", {
    "package:console_log_handler/shared/log_handler.dart": log_handler
  }, {
    "package:console_log_handler/shared/log_handler.dart": ["transformer.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["log_handler.dart","transformer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;SAuC8B;AAAc,4BAAU,SAAS;IAAC;cAS7B;AACqB,MAAhD,2CAAsC,SAAS;AACR,MAAvC,wCAA6B,SAAS;IAC1C;;;;EACJ;;;;;;;;;;MAjBwB,wCAAiB;;;MACjB,mCAAY;;;;yDAkBP;AACzB,UAAO,AAAW,gCAAQ,IAAI;EAClC;+DChC0C;QAAsB;AACtD,qBAAiB,wBAAW;AAE3B,qBAAa,AAAU,AAAW,SAAZ,wBAAsB,mBAAI,GAAE,AAAU,AAAW,AAAO,SAAnB,kCAAqB,SAAS;AACzF,0BAAkB,AAAU,AAAW,SAAZ,yBAA2B,gBAAO,WAAW;AAExE;AACP,QAAI,AAAU,SAAD,SAAS;AACsB,MAAxC,OAAO,AAAW,UAAD,QAAQ,AAAU,SAAD;;AAEU,MAA5C,OAAO,AAAW,UAAD,QAAY;;AAGjC,QAAG,AAAW,AAAO,UAAR,uBAAU,SAAS;AACA,MAA5B,aAAa,eAAe;;AAEf,IAAjB,aAAA,AAAW,UAAD,GAAI;AAC6B,IAA3C,aAAa,AAAW,UAAD,YAAU,SAAS;AAE1C,QAAI,AAAU,SAAD,UAAU;AACnB,YAA2F,UAAlF,IAAI,oBAAI,AAAU,SAAD,UAAO,OAAI,UAAU,GAAC,eAAG,AAAU,SAAD,YAAS,iBAAK,AAAU,SAAD;;AAGnF,YAAsE,UAA7D,IAAI,oBAAI,AAAU,SAAD,UAAO,OAAI,UAAU,GAAC,eAAG,AAAU,SAAD;;EAEpE;6DAEyC;AAC9B,0BAAkB,AAAU,AAAW,SAAZ,yBAA2B,gBAAO,WAAY;AAEhF,QAAI,AAAU,SAAD,UAAU;AACnB,YAAU,AAA4D,gBAA7C,GAAC,gBAAI,AAAU,SAAD,YAAS,iBAAK,AAAU,SAAD;;AAG9D,YAAU,AAAuC,gBAAxB,GAAC,gBAAI,AAAU,SAAD;;EAE/C;uEAE8C;AAC1C,QAAI,AAAU,SAAD,UAAU;AACnB,YAAkD,UAAxC,AAAU,SAAD,YAAS,iBAAK,AAAU,SAAD;;AAG1C,YAA6B,UAAnB,AAAU,SAAD;;EAE3B;;;;;MDrCkB,sBAAU","file":"log_handler.ddc.js"}');
  // Exports:
  return {
    shared__log_handler: log_handler
  };
});

//# sourceMappingURL=log_handler.ddc.js.map
