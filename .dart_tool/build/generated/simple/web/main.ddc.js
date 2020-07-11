define(['dart_sdk', 'packages/console_log_handler/console_log_handler', 'packages/m4d_core/m4d_ioc', 'packages/m4d_components/m4d_components', 'packages/m4d_core/m4d_core', 'packages/logging/logging'], function(dart_sdk, packages__console_log_handler__console_log_handler, packages__m4d_core__m4d_ioc, packages__m4d_components__m4d_components, packages__m4d_core__m4d_core, packages__logging__logging) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const console_log_handler = packages__console_log_handler__console_log_handler.console_log_handler;
  const m4d_ioc = packages__m4d_core__m4d_ioc.m4d_ioc;
  const m4d_components = packages__m4d_components__m4d_components.m4d_components;
  const m4d_core = packages__m4d_core__m4d_core.m4d_core;
  const logger = packages__logging__logging.src__logger;
  var main = Object.create(dart.library);
  var JSArrayOfModuleL = () => (JSArrayOfModuleL = dart.constFn(_interceptors.JSArray$(m4d_ioc.Module)))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  const CT = Object.create(null);
  main.main = function main$() {
    return async.async(dart.dynamic, function* main$() {
      console_log_handler.configLogging();
      m4d_ioc.Container.bindModules(JSArrayOfModuleL().of([new m4d_components.CoreComponentsModule.new()]));
      yield m4d_core.componentFactory().upgrade(dart.dynamic).then(core.Null, dart.fn(_ => {
        main._logger.info("Upgraded!");
      }, dynamicToNullN()));
    });
  };
  dart.defineLazy(main, {
    /*main._logger*/get _logger() {
      return logger.Logger.new("I am your logger");
    }
  }, true);
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;AAOI;AACe,MAAf;AAEqD,MAAvC,8BAAY,uBAAE;AAI1B,MAFF,MAAM,AAAmB,AAAU,kEAAK,QAAC;AACZ,QAAzB,AAAQ,kBAAK;;IAErB;;;MAVa,YAAO;YAAO,mBAAO","file":"main.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
