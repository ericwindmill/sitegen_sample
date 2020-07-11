define(['dart_sdk', 'packages/m4d_core/m4d_ioc'], function(dart_sdk, packages__m4d_core__m4d_ioc) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const m4d_ioc = packages__m4d_core__m4d_ioc.m4d_ioc;
  var services = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(services, {
    /*services.Formatters*/get Formatters() {
      return new m4d_ioc.Service.new("m4d_formatter.Formatters", m4d_ioc.ServiceType.Instance);
    }
  }, true);
  dart.trackLibraries("packages/m4d_components/services", {
    "package:m4d_components/services.dart": services
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["services.dart"],"names":[],"mappings":";;;;;;;;;MAsCM,mBAAU;YAAG,yBAAQ,4BAAuC","file":"services.ddc.js"}');
  // Exports:
  return {
    services: services
  };
});

//# sourceMappingURL=services.ddc.js.map
