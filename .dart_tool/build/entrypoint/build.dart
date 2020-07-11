// ignore_for_file: directives_ordering

import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:build_modules/builders.dart' as _i2;
import 'package:build_web_compilers/builders.dart' as _i3;
import 'package:build_config/build_config.dart' as _i4;
import 'package:build/build.dart' as _i5;
import 'package:sass_builder/sass_builder.dart' as _i6;
import 'dart:isolate' as _i7;
import 'package:build_runner/build_runner.dart' as _i8;
import 'dart:io' as _i9;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('build_modules:module_library', [_i2.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_web_compilers:dart2js_modules',
      [
        _i3.dart2jsMetaModuleBuilder,
        _i3.dart2jsMetaModuleCleanBuilder,
        _i3.dart2jsModuleBuilder
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_web_compilers:ddc_modules',
      [
        _i3.ddcMetaModuleBuilder,
        _i3.ddcMetaModuleCleanBuilder,
        _i3.ddcModuleBuilder
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply('build_web_compilers:ddc', [_i3.ddcKernelBuilder, _i3.ddcBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'build_web_compilers:ddc_modules',
        'build_web_compilers:dart2js_modules',
        'build_web_compilers:dart_source_cleanup'
      ]),
  _i1.apply('build_web_compilers:sdk_js_copy', [_i3.sdkJsCopyBuilder],
      _i1.toNoneByDefault(),
      hideOutput: true,
      appliesBuilders: ['build_web_compilers:sdk_js_cleanup']),
  _i1.apply('build_web_compilers:entrypoint', [_i3.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i4.InputSet(include: [
        'web/**',
        'test/**.dart.browser_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: _i5.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultDevOptions: _i5.BuilderOptions({
        'dart2js_args': ['--enable-asserts']
      }),
      defaultReleaseOptions: _i5.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers:dart2js_archive_extractor']),
  _i1.apply('sass_builder:sass_builder', [_i6.sassBuilder],
      _i1.toDependentsOf('sass_builder'),
      hideOutput: true,
      defaultReleaseOptions: _i5.BuilderOptions({'outputStyle': 'compressed'}),
      appliesBuilders: ['sass_builder:sass_source_cleanup']),
  _i1.applyPostProcess('build_modules:module_cleanup', _i2.moduleCleanup,
      defaultGenerateFor: const _i4.InputSet()),
  _i1.applyPostProcess('build_web_compilers:dart2js_archive_extractor',
      _i3.dart2jsArchiveExtractor,
      defaultReleaseOptions: _i5.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i4.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers:dart_source_cleanup', _i3.dartSourceCleanup,
      defaultReleaseOptions: _i5.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i4.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers:sdk_js_cleanup', _i3.sdkJsCleanupBuilder,
      defaultReleaseOptions: _i5.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i4.InputSet()),
  _i1.applyPostProcess(
      'sass_builder:sass_source_cleanup', _i6.sassSourceCleanup,
      defaultReleaseOptions: _i5.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i4.InputSet())
];
void main(List<String> args, [_i7.SendPort sendPort]) async {
  var result = await _i8.run(args, _builders);
  sendPort?.send(result);
  _i9.exitCode = result;
}
