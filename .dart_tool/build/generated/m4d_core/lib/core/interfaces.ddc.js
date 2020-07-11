define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var interfaces = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:m4d_core/core/interfaces.dart";
  interfaces.M4DService = class M4DService extends core.Object {};
  (interfaces.M4DService.new = function() {
    ;
  }).prototype = interfaces.M4DService.prototype;
  dart.addTypeTests(interfaces.M4DService);
  dart.addTypeCaches(interfaces.M4DService);
  dart.setLibraryUri(interfaces.M4DService, L0);
  interfaces.MaterialApplication = class MaterialApplication extends core.Object {
    run() {
    }
  };
  (interfaces.MaterialApplication.new = function() {
    ;
  }).prototype = interfaces.MaterialApplication.prototype;
  dart.addTypeTests(interfaces.MaterialApplication);
  dart.addTypeCaches(interfaces.MaterialApplication);
  interfaces.MaterialApplication[dart.implements] = () => [interfaces.M4DService];
  dart.setMethodSignature(interfaces.MaterialApplication, () => ({
    __proto__: dart.getMethods(interfaces.MaterialApplication.__proto__),
    run: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(interfaces.MaterialApplication, L0);
  interfaces.RefreshableComponent = class RefreshableComponent extends core.Object {};
  (interfaces.RefreshableComponent.new = function() {
    ;
  }).prototype = interfaces.RefreshableComponent.prototype;
  dart.addTypeTests(interfaces.RefreshableComponent);
  dart.addTypeCaches(interfaces.RefreshableComponent);
  dart.setLibraryUri(interfaces.RefreshableComponent, L0);
  interfaces.HasDynamicParentScope = class HasDynamicParentScope extends core.Object {};
  (interfaces.HasDynamicParentScope.new = function() {
    ;
  }).prototype = interfaces.HasDynamicParentScope.prototype;
  dart.addTypeTests(interfaces.HasDynamicParentScope);
  dart.addTypeCaches(interfaces.HasDynamicParentScope);
  dart.setLibraryUri(interfaces.HasDynamicParentScope, L0);
  dart.trackLibraries("packages/m4d_core/core/interfaces", {
    "package:m4d_core/core/interfaces.dart": interfaces
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interfaces.dart"],"names":[],"mappings":";;;;;;;;;;;EAwB2B;;;;;;IAyBX;;;;EAChB;;;;;;;;;;;;EAWA;;;;;;;EASA","file":"interfaces.ddc.js"}');
  // Exports:
  return {
    core__interfaces: interfaces
  };
});

//# sourceMappingURL=interfaces.ddc.js.map
