define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var annotations = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:m4d_core/core/annotations.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: annotations.MdlAnnotation.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: annotations.MdlPublicFunctionAnnotation.prototype
      });
    }
  }, false);
  annotations.MdlAnnotation = class MdlAnnotation extends core.Object {};
  (annotations.MdlAnnotation.new = function() {
    ;
  }).prototype = annotations.MdlAnnotation.prototype;
  dart.addTypeTests(annotations.MdlAnnotation);
  dart.addTypeCaches(annotations.MdlAnnotation);
  dart.setLibraryUri(annotations.MdlAnnotation, L0);
  annotations.MdlPublicFunctionAnnotation = class MdlPublicFunctionAnnotation extends core.Object {};
  (annotations.MdlPublicFunctionAnnotation.new = function() {
    ;
  }).prototype = annotations.MdlPublicFunctionAnnotation.prototype;
  dart.addTypeTests(annotations.MdlPublicFunctionAnnotation);
  dart.addTypeCaches(annotations.MdlPublicFunctionAnnotation);
  dart.setLibraryUri(annotations.MdlPublicFunctionAnnotation, L0);
  var C0;
  var C1;
  dart.defineLazy(annotations, {
    /*annotations.MdlComponentModel*/get MdlComponentModel() {
      return C0 || CT.C0;
    },
    /*annotations.Component*/get Component() {
      return C0 || CT.C0;
    },
    /*annotations.Model*/get Model() {
      return C0 || CT.C0;
    },
    /*annotations.Directive*/get Directive() {
      return C0 || CT.C0;
    },
    /*annotations.public*/get public() {
      return C1 || CT.C1;
    }
  }, true);
  dart.trackLibraries("packages/m4d_core/core/annotations", {
    "package:m4d_core/core/annotations.dart": annotations
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["annotations.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;EAqCyB;;;;;;;EA0C8C;;;;;;;MAlBnD,6BAAiB;;;MAGjB,qBAAS;;;MAGT,iBAAK;;;MAKL,qBAAS;;;MAQK,kBAAM","file":"annotations.ddc.js"}');
  // Exports:
  return {
    core__annotations: annotations
  };
});

//# sourceMappingURL=annotations.ddc.js.map
