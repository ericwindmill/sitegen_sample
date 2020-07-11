define(['dart_sdk', 'packages/console_log_handler/shared/log_handler', 'packages/logging/logging'], function(dart_sdk, packages__console_log_handler__shared__log_handler, packages__logging__logging) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const log_handler = packages__console_log_handler__shared__log_handler.shared__log_handler;
  const log_record = packages__logging__logging.src__log_record;
  const level = packages__logging__logging.src__level;
  const logger = packages__logging__logging.src__logger;
  var console_log_handler = Object.create(dart.library);
  var $console = dartx.console;
  var $runtimeType = dartx.runtimeType;
  var $toString = dartx.toString;
  var LogRecordL__ToStringL = () => (LogRecordL__ToStringL = dart.constFn(dart.fnType(core.String, [log_record.LogRecord], {nameWidth: core.int}, {})))();
  var StringLAndStringLTovoid = () => (StringLAndStringLTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))();
  var LogRecordLToLStringL = () => (LogRecordLToLStringL = dart.constFn(dart.fnType(core.String, [log_record.LogRecord])))();
  var LogRecordL__Tovoid = () => (LogRecordL__Tovoid = dart.constFn(dart.fnType(dart.void, [log_record.LogRecord], {transformer: LogRecordLToLStringL()}, {})))();
  const CT = Object.create(null);
  var L0 = "package:console_log_handler/console_log_handler.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(log_handler.transformerDefault, LogRecordL__ToStringL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: level.Level.prototype,
        [Level_value]: 800,
        [Level_name]: "INFO"
      });
    },
    get C2() {
      return C2 = dart.fn(console_log_handler.logToConsole, LogRecordL__Tovoid());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: convert.JsonCodec.prototype,
        [JsonCodec__toEncodable]: null,
        [JsonCodec__reviver]: null
      });
    }
  }, false);
  var C0;
  var _transformer = dart.privateName(console_log_handler, "_transformer");
  console_log_handler.LogConsoleHandler = class LogConsoleHandler extends log_handler.LogHandler {
    toConsole(logRecord, opts) {
      let transformer = opts && 'transformer' in opts ? opts.transformer : null;
      transformer == null ? transformer = this[_transformer] : null;
      if (dart.test(logRecord.level['<='](level.Level.FINE))) {
        html.window[$console].debug(transformer(logRecord));
      } else if (dart.test(logRecord.level['<='](level.Level.INFO))) {
        html.window[$console].info(transformer(logRecord));
      } else {
        html.window[$console].error(transformer(logRecord));
      }
      this.makeGroup(logRecord);
    }
    makeObjectGroup(groupName, logRecord) {
      function makeGroupWithString(groupName, objectAsString) {
        html.window[$console].groupCollapsed(groupName);
        html.window[$console].log(objectAsString);
        html.window[$console].groupEnd();
      }
      dart.fn(makeGroupWithString, StringLAndStringLTovoid());
      if (logRecord.error != null) {
        let error = logRecord.error;
        let groupNameWithType = dart.str(groupName) + " (" + dart.str(dart.runtimeType(error)) + ")";
        if (core.Map.is(error) || core.List.is(error)) {
          try {
            makeGroupWithString(groupNameWithType, log_handler.prettyPrintJson(error));
          } catch (e) {
            let ex = dart.getThrown(e);
            if (core.FormatException.is(ex)) {
              makeGroupWithString(groupNameWithType, dart.toString(error));
            } else
              throw e;
          }
        } else {
          try {
            let decoded = console_log_handler.JSON.decode(dart.toString(error));
            makeGroupWithString(groupNameWithType, log_handler.prettyPrintJson(decoded));
          } catch (e$) {
            let ex$ = dart.getThrown(e$);
            if (core.Exception.is(ex$)) {
              makeGroupWithString(groupNameWithType, dart.toString(error));
            } else
              throw e$;
          }
        }
      }
    }
    makeStackTraceGroup(groupName, logRecord) {
      if (logRecord.stackTrace != null) {
        html.window[$console].group(groupName);
        html.window[$console].log(dart.toString(logRecord.stackTrace));
        html.window[$console].groupEnd();
      }
    }
  };
  (console_log_handler.LogConsoleHandler.new = function(opts) {
    let transformer = opts && 'transformer' in opts ? opts.transformer : C0 || CT.C0;
    this[_transformer] = transformer;
    ;
  }).prototype = console_log_handler.LogConsoleHandler.prototype;
  dart.addTypeTests(console_log_handler.LogConsoleHandler);
  dart.addTypeCaches(console_log_handler.LogConsoleHandler);
  dart.setMethodSignature(console_log_handler.LogConsoleHandler, () => ({
    __proto__: dart.getMethods(console_log_handler.LogConsoleHandler.__proto__),
    toConsole: dart.fnType(dart.void, [log_record.LogRecord], {transformer: dart.fnType(core.String, [log_record.LogRecord])}, {}),
    makeObjectGroup: dart.fnType(dart.void, [core.String, log_record.LogRecord]),
    makeStackTraceGroup: dart.fnType(dart.void, [core.String, log_record.LogRecord])
  }));
  dart.setLibraryUri(console_log_handler.LogConsoleHandler, L0);
  dart.setFieldSignature(console_log_handler.LogConsoleHandler, () => ({
    __proto__: dart.getFields(console_log_handler.LogConsoleHandler.__proto__),
    [_transformer]: dart.finalFieldType(dart.fnType(core.String, [log_record.LogRecord]))
  }));
  var Level_value = dart.privateName(level, "Level.value");
  var Level_name = dart.privateName(level, "Level.name");
  var C1;
  var C2;
  console_log_handler.logToConsole = function logToConsole(logRecord, opts) {
    let transformer = opts && 'transformer' in opts ? opts.transformer : null;
    return console_log_handler._DEFAULT_HANDLER.toConsole(logRecord, {transformer: transformer});
  };
  console_log_handler.configLogging = function configLogging(opts) {
    let show = opts && 'show' in opts ? opts.show : C1 || CT.C1;
    logger.hierarchicalLoggingEnabled = true;
    logger.Logger.root.level = show;
    logger.Logger.root.onRecord.listen(C2 || CT.C2);
  };
  var JsonCodec__toEncodable = dart.privateName(convert, "JsonCodec._toEncodable");
  var JsonCodec__reviver = dart.privateName(convert, "JsonCodec._reviver");
  var C3;
  dart.defineLazy(console_log_handler, {
    /*console_log_handler._DEFAULT_HANDLER*/get _DEFAULT_HANDLER() {
      return new console_log_handler.LogConsoleHandler.new();
    },
    /*console_log_handler.JSON*/get JSON() {
      return C3 || CT.C3;
    }
  }, true);
  dart.trackLibraries("packages/console_log_handler/console_log_handler", {
    "package:console_log_handler/console_log_handler.dart": console_log_handler
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["console_log_handler.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cA6DmC;UAA+B;AAC9B,MAA5B,AAAY,WAAD,IAAC,OAAZ,cAAgB,qBAAJ;AAEZ,oBAAI,AAAU,AAAM,SAAP,aAAgB;AACmB,QAA5C,AAAO,AAAQ,4BAAM,AAAW,WAAA,CAAC,SAAS;YAGzC,eAAI,AAAU,AAAM,SAAP,aAAgB;AACa,QAA3C,AAAO,AAAQ,2BAAK,AAAW,WAAA,CAAC,SAAS;;AAIG,QAA5C,AAAO,AAAQ,4BAAM,AAAW,WAAA,CAAC,SAAS;;AAG1B,MAApB,eAAU,SAAS;IACvB;oBAGkC,WAA2B;AAEzD,eAAK,oBAAiC,WAAuB;AACjB,QAAxC,AAAO,AAAQ,qCAAe,SAAS;AACL,QAAlC,AAAO,AAAQ,0BAAI,cAAc;AACR,QAAzB,AAAO,AAAQ;;;AAGnB,UAAI,AAAU,SAAD,UAAU;AACN,oBAAQ,AAAU,SAAD;AAEjB,gCAAuD,SAAjC,SAAS,oBAAU,iBAAN,KAAK,KAAa;AAClE,YAAU,YAAN,KAAK,KAAiB,aAAN,KAAK;AACrB;AACiE,YAA7D,AAAmB,mBAAA,CAAC,iBAAiB,EAAC,4BAAgB,KAAK;;;AAE7D;AACyD,cAAvD,AAAmB,mBAAA,CAAC,iBAAiB,EAAO,cAAN,KAAK;;;;;AAG/C;AACU,0BAAU,AAAK,gCAAa,cAAN,KAAK;AAC8B,YAA/D,AAAmB,mBAAA,CAAC,iBAAiB,EAAC,4BAAgB,OAAO;;;AAE/D;AACyD,cAAvD,AAAmB,mBAAA,CAAC,iBAAiB,EAAO,cAAN,KAAK;;;;;;IAK3D;wBAIsC,WAA2B;AAC7D,UAAI,AAAU,SAAD,eAAe;AACO,QAA/B,AAAO,AAAQ,4BAAM,SAAS;AACqB,QAAnD,AAAO,AAAQ,0BAAyB,cAArB,AAAU,SAAD;AACH,QAAzB,AAAO,AAAQ;;IAEvB;;;QAjE8C;IAC3B,qBAAE,WAAW;;;;;;;;;;;;;;;;;;;;2DAjCF;QAA+B;AAC1D,UAAA,AAAiB,gDAAU,SAAS,gBAAc,WAAW;EAAC;;QAapC;AACI,IAAjC,oCAA6B;AACL,IAAjB,AAAK,2BAAQ,IAAI;AACiB,IAAlC,AAAK,AAAS;EACzB;;;;;MA9BM,oCAAgB;YAAO;;MAGb,wBAAI","file":"console_log_handler.ddc.js"}');
  // Exports:
  return {
    console_log_handler: console_log_handler
  };
});

//# sourceMappingURL=console_log_handler.ddc.js.map
