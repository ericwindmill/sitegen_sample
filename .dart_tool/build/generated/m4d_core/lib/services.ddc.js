define(['dart_sdk', 'packages/m4d_core/m4d_ioc'], function(dart_sdk, packages__m4d_core__m4d_ioc) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const m4d_ioc = packages__m4d_core__m4d_ioc.m4d_ioc;
  var services = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(services, {
    /*services.Application*/get Application() {
      return new m4d_ioc.Service.new("m4d_core.Application", m4d_ioc.ServiceType.Instance);
    },
    /*services.DomRenderer*/get DomRenderer() {
      return new m4d_ioc.Service.new("m4d_core.DomRenderer", m4d_ioc.ServiceType.Instance);
    }
  }, true);
  dart.trackLibraries("packages/m4d_core/services", {
    "package:m4d_core/services.dart": services
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["services.dart"],"names":[],"mappings":";;;;;;;;;MAyCM,oBAAW;YAAI,yBAAQ,wBAAmC;;MAM1D,oBAAW;YAAG,yBAAQ,wBAAmC","file":"services.ddc.js"}');
  // Exports:
  return {
    services: services
  };
});

//# sourceMappingURL=services.ddc.js.map
