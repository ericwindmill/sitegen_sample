define(['dart_sdk', 'packages/logging/logging', 'packages/validate/expect'], function(dart_sdk, packages__logging__logging, packages__validate__expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logger = packages__logging__logging.src__logger;
  const validate = packages__validate__expect.validate;
  var m4d_ioc = Object.create(dart.library);
  var $forEach = dartx.forEach;
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $clear = dartx.clear;
  var $length = dartx.length;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var JSArrayOfModuleL = () => (JSArrayOfModuleL = dart.constFn(_interceptors.JSArray$(m4d_ioc.Module)))();
  var ModuleLToNullN = () => (ModuleLToNullN = dart.constFn(dart.fnType(core.Null, [m4d_ioc.Module])))();
  var VoidToLStringL = () => (VoidToLStringL = dart.constFn(dart.fnType(core.String, [])))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var VoidToLMapLOfStringL$dynamic = () => (VoidToLMapLOfStringL$dynamic = dart.constFn(dart.fnType(MapOfStringL$dynamic(), [])))();
  var LinkedMapOfServiceL$dynamic = () => (LinkedMapOfServiceL$dynamic = dart.constFn(_js_helper.LinkedMap$(m4d_ioc.Service, dart.dynamic)))();
  var ListOfModuleL = () => (ListOfModuleL = dart.constFn(core.List$(m4d_ioc.Module)))();
  var ModuleLTovoid = () => (ModuleLTovoid = dart.constFn(dart.fnType(dart.void, [m4d_ioc.Module])))();
  var MapOfStringL$FunctionL = () => (MapOfStringL$FunctionL = dart.constFn(core.Map$(core.String, core.Function)))();
  var VoidToLMapLOfStringL$FunctionL = () => (VoidToLMapLOfStringL$FunctionL = dart.constFn(dart.fnType(MapOfStringL$FunctionL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:m4d_core/m4d_ioc.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: m4d_ioc.ServiceType.prototype,
        [_name$]: "ServiceType.Instance",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: m4d_ioc.ServiceType.prototype,
        [_name$]: "ServiceType.Function",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: m4d_ioc.ServiceType.prototype,
        [_name$]: "ServiceType.Json",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: m4d_ioc.ServiceType.prototype,
        [_name$]: "ServiceType.Provider",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], m4d_ioc.ServiceType);
    }
  }, false);
  m4d_ioc.Binder = class Binder extends core.Object {};
  (m4d_ioc.Binder.new = function() {
    ;
  }).prototype = m4d_ioc.Binder.prototype;
  dart.addTypeTests(m4d_ioc.Binder);
  dart.addTypeCaches(m4d_ioc.Binder);
  dart.setLibraryUri(m4d_ioc.Binder, L0);
  var _name$ = dart.privateName(m4d_ioc, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  m4d_ioc.ServiceType = class ServiceType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (m4d_ioc.ServiceType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = m4d_ioc.ServiceType.prototype;
  dart.addTypeTests(m4d_ioc.ServiceType);
  dart.addTypeCaches(m4d_ioc.ServiceType);
  dart.setLibraryUri(m4d_ioc.ServiceType, L0);
  dart.setFieldSignature(m4d_ioc.ServiceType, () => ({
    __proto__: dart.getFields(m4d_ioc.ServiceType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(m4d_ioc.ServiceType, ['toString']);
  m4d_ioc.ServiceType.Instance = C0 || CT.C0;
  m4d_ioc.ServiceType.Function = C1 || CT.C1;
  m4d_ioc.ServiceType.Json = C2 || CT.C2;
  m4d_ioc.ServiceType.Provider = C3 || CT.C3;
  m4d_ioc.ServiceType.values = C4 || CT.C4;
  var _resolveDependencies = dart.privateName(m4d_ioc, "_resolveDependencies");
  m4d_ioc.Module = class Module extends core.Object {
    bind(service) {
      return m4d_ioc.Container.new().bind(service);
    }
    get dependsOn() {
      return JSArrayOfModuleL().of([]);
    }
    [_resolveDependencies]() {
      this.dependsOn[$forEach](dart.fn(module => {
        let t0;
        t0 = module;
        t0 == null ? null : t0[_resolveDependencies]();
      }, ModuleLToNullN()));
      this.configure();
    }
  };
  (m4d_ioc.Module.new = function() {
    ;
  }).prototype = m4d_ioc.Module.prototype;
  dart.addTypeTests(m4d_ioc.Module);
  dart.addTypeCaches(m4d_ioc.Module);
  dart.setMethodSignature(m4d_ioc.Module, () => ({
    __proto__: dart.getMethods(m4d_ioc.Module.__proto__),
    bind: dart.fnType(m4d_ioc.BindingSyntax, [m4d_ioc.Service]),
    [_resolveDependencies]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(m4d_ioc.Module, () => ({
    __proto__: dart.getGetters(m4d_ioc.Module.__proto__),
    dependsOn: core.List$(m4d_ioc.Module)
  }));
  dart.setLibraryUri(m4d_ioc.Module, L0);
  var _as = dart.privateName(m4d_ioc, "_as");
  const _is_Service_default = Symbol('_is_Service_default');
  var name$ = dart.privateName(m4d_ioc, "Service.name");
  var type$ = dart.privateName(m4d_ioc, "Service.type");
  m4d_ioc.Service$ = dart.generic(R => {
    var ServiceResolveSyntaxOfRL = () => (ServiceResolveSyntaxOfRL = dart.constFn(m4d_ioc.ServiceResolveSyntax$(R)))();
    var ServiceBindingSyntaxOfRL = () => (ServiceBindingSyntaxOfRL = dart.constFn(m4d_ioc.ServiceBindingSyntax$(R)))();
    class Service extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get type() {
        return this[type$];
      }
      set type(value) {
        super.type = value;
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || m4d_ioc.Service.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && this.name == other.name && dart.equals(this.type, other.type);
      }
      get hashCode() {
        return (dart.hashCode(this.name) ^ dart.notNull(dart.hashCode(this.type))) >>> 0;
      }
      resolve() {
        let result = new (ServiceResolveSyntaxOfRL()).new(R.as(m4d_ioc.Container.new().raw(this)))[_as]();
        if (result == null) {
          dart.throw(new core.ArgumentError.new("Can't resolve '" + dart.str(this.name) + "'! " + "Maybe you forgot to bind '" + dart.str(this.name) + "' or you havn't included the appropriate module"));
        }
        return result;
      }
      get as() {
        return new (ServiceResolveSyntaxOfRL()).new(R.as(m4d_ioc.Container.new().raw(this)));
      }
      get bind() {
        return new (ServiceBindingSyntaxOfRL())._private(this);
      }
      toString() {
        let resolved = this.resolve();
        if (resolved == null) {
          return dart.str(this.name) + ":" + dart.str(this.type) + ":<undefined>";
        } else if (VoidToLStringL().is(resolved)) {
          return resolved();
        } else if (VoidToLMapLOfStringL$dynamic().is(resolved)) {
          return convert.json.encode(resolved());
        }
        return dart.str(this.name) + ":" + dart.str(this.type) + ":" + dart.str(resolved);
      }
    }
    (Service.new = function(name, type) {
      this[name$] = name;
      this[type$] = type;
      ;
    }).prototype = Service.prototype;
    dart.addTypeTests(Service);
    Service.prototype[_is_Service_default] = true;
    dart.addTypeCaches(Service);
    dart.setMethodSignature(Service, () => ({
      __proto__: dart.getMethods(Service.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object]),
      resolve: dart.fnType(R, [])
    }));
    dart.setGetterSignature(Service, () => ({
      __proto__: dart.getGetters(Service.__proto__),
      as: m4d_ioc.ServiceResolveSyntax$(R),
      bind: m4d_ioc.ServiceBindingSyntax$(R)
    }));
    dart.setLibraryUri(Service, L0);
    dart.setFieldSignature(Service, () => ({
      __proto__: dart.getFields(Service.__proto__),
      name: dart.finalFieldType(core.String),
      type: dart.finalFieldType(m4d_ioc.ServiceType)
    }));
    dart.defineExtensionMethods(Service, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Service, ['hashCode']);
    return Service;
  });
  m4d_ioc.Service = m4d_ioc.Service$();
  dart.addTypeTests(m4d_ioc.Service, _is_Service_default);
  var _service$ = dart.privateName(m4d_ioc, "_service");
  var _bind = dart.privateName(m4d_ioc, "_bind");
  const _is_ServiceBindingSyntax_default = Symbol('_is_ServiceBindingSyntax_default');
  m4d_ioc.ServiceBindingSyntax$ = dart.generic(T => {
    class ServiceBindingSyntax extends core.Object {
      to(implementation) {
        T.as(implementation);
        return m4d_ioc.Container.new()[_bind](this[_service$]).to(implementation);
      }
    }
    (ServiceBindingSyntax._private = function(_service) {
      this[_service$] = _service;
      ;
    }).prototype = ServiceBindingSyntax.prototype;
    dart.addTypeTests(ServiceBindingSyntax);
    ServiceBindingSyntax.prototype[_is_ServiceBindingSyntax_default] = true;
    dart.addTypeCaches(ServiceBindingSyntax);
    dart.setMethodSignature(ServiceBindingSyntax, () => ({
      __proto__: dart.getMethods(ServiceBindingSyntax.__proto__),
      to: dart.fnType(dart.void, [core.Object])
    }));
    dart.setLibraryUri(ServiceBindingSyntax, L0);
    dart.setFieldSignature(ServiceBindingSyntax, () => ({
      __proto__: dart.getFields(ServiceBindingSyntax.__proto__),
      [_service$]: dart.fieldType(m4d_ioc.Service$(T))
    }));
    return ServiceBindingSyntax;
  });
  m4d_ioc.ServiceBindingSyntax = m4d_ioc.ServiceBindingSyntax$();
  dart.addTypeTests(m4d_ioc.ServiceBindingSyntax, _is_ServiceBindingSyntax_default);
  var _data$ = dart.privateName(m4d_ioc, "_data");
  const _is_ServiceResolveSyntax_default = Symbol('_is_ServiceResolveSyntax_default');
  m4d_ioc.ServiceResolveSyntax$ = dart.generic(R => {
    class ServiceResolveSyntax extends core.Object {
      subclass(S) {
        return S.as(this[_data$]);
      }
      map(M, mapper) {
        return mapper(this[_as]());
      }
      [_as]() {
        return this[_data$];
      }
    }
    (ServiceResolveSyntax.new = function(_data) {
      this[_data$] = _data;
      ;
    }).prototype = ServiceResolveSyntax.prototype;
    dart.addTypeTests(ServiceResolveSyntax);
    ServiceResolveSyntax.prototype[_is_ServiceResolveSyntax_default] = true;
    dart.addTypeCaches(ServiceResolveSyntax);
    dart.setMethodSignature(ServiceResolveSyntax, () => ({
      __proto__: dart.getMethods(ServiceResolveSyntax.__proto__),
      subclass: dart.gFnType(S => [S, []]),
      map: dart.gFnType(M => [M, [dart.fnType(M, [R])]]),
      [_as]: dart.fnType(R, [])
    }));
    dart.setLibraryUri(ServiceResolveSyntax, L0);
    dart.setFieldSignature(ServiceResolveSyntax, () => ({
      __proto__: dart.getFields(ServiceResolveSyntax.__proto__),
      [_data$]: dart.finalFieldType(R)
    }));
    return ServiceResolveSyntax;
  });
  m4d_ioc.ServiceResolveSyntax = m4d_ioc.ServiceResolveSyntax$();
  dart.addTypeTests(m4d_ioc.ServiceResolveSyntax, _is_ServiceResolveSyntax_default);
  m4d_ioc.InstanceService = class InstanceService extends m4d_ioc.Service {};
  (m4d_ioc.InstanceService.new = function(name) {
    m4d_ioc.InstanceService.__proto__.new.call(this, name, m4d_ioc.ServiceType.Instance);
    ;
  }).prototype = m4d_ioc.InstanceService.prototype;
  dart.addTypeTests(m4d_ioc.InstanceService);
  dart.addTypeCaches(m4d_ioc.InstanceService);
  dart.setLibraryUri(m4d_ioc.InstanceService, L0);
  var _instance = dart.privateName(m4d_ioc, "_instance");
  var _factory$ = dart.privateName(m4d_ioc, "_factory");
  const _is_ServiceProvider_default = Symbol('_is_ServiceProvider_default');
  m4d_ioc.ServiceProvider$ = dart.generic(T => {
    class ServiceProvider extends core.Object {
      get() {
        let t0;
        t0 = this[_instance];
        return t0 == null ? this[_instance] = this[_factory$]() : t0;
      }
    }
    (ServiceProvider.new = function(_factory) {
      this[_instance] = null;
      this[_factory$] = _factory;
      ;
    }).prototype = ServiceProvider.prototype;
    dart.addTypeTests(ServiceProvider);
    ServiceProvider.prototype[_is_ServiceProvider_default] = true;
    dart.addTypeCaches(ServiceProvider);
    dart.setMethodSignature(ServiceProvider, () => ({
      __proto__: dart.getMethods(ServiceProvider.__proto__),
      get: dart.fnType(T, [])
    }));
    dart.setLibraryUri(ServiceProvider, L0);
    dart.setFieldSignature(ServiceProvider, () => ({
      __proto__: dart.getFields(ServiceProvider.__proto__),
      [_instance]: dart.fieldType(T),
      [_factory$]: dart.fieldType(dart.fnType(T, []))
    }));
    return ServiceProvider;
  });
  m4d_ioc.ServiceProvider = m4d_ioc.ServiceProvider$();
  dart.addTypeTests(m4d_ioc.ServiceProvider, _is_ServiceProvider_default);
  var _logger = dart.privateName(m4d_ioc, "_logger");
  var _services = dart.privateName(m4d_ioc, "_services");
  var _rawBind = dart.privateName(m4d_ioc, "_rawBind");
  m4d_ioc.Container = class Container extends core.Object {
    static bindModules(modules) {
      validate.Validate.notNull(ListOfModuleL(), modules);
      if (m4d_ioc.Container._singleton == null) {
        m4d_ioc.Container._singleton = new m4d_ioc.Container._private();
      }
      modules[$forEach](dart.fn(module => {
        let t0;
        t0 = module;
        return t0 == null ? null : t0[_resolveDependencies]();
      }, ModuleLTovoid()));
      return m4d_ioc.Container._singleton;
    }
    static new() {
      return m4d_ioc.Container.bindModules(JSArrayOfModuleL().of([]));
    }
    bind(service) {
      return this[_bind](service);
    }
    resolve(service) {
      return new m4d_ioc.ContainerResolveSyntax.new(this.raw(service));
    }
    raw(service) {
      return this[_services][$_get](service);
    }
    unregister(service) {
      return this[_services][$remove](service);
    }
    clear() {
      return this[_services][$clear]();
    }
    get nrOfServices() {
      return this[_services][$length];
    }
    [_bind](service) {
      validate.Validate.notNull(m4d_ioc.Service, service);
      return new m4d_ioc.BindingSyntax._private(service);
    }
    [_rawBind](service, instance) {
      if (dart.test(this[_services][$containsKey](service))) {
        this[_logger].info("Service '" + dart.str(service.name) + "' has " + "already a registered instance: " + dart.str(this[_services][$_get](service)) + "!");
      }
      this[_services][$_set](service, instance);
    }
  };
  (m4d_ioc.Container._private = function() {
    this[_logger] = logger.Logger.new("m4d_ioc.Container");
    this[_services] = new (LinkedMapOfServiceL$dynamic()).new();
    ;
  }).prototype = m4d_ioc.Container.prototype;
  dart.addTypeTests(m4d_ioc.Container);
  dart.addTypeCaches(m4d_ioc.Container);
  dart.setMethodSignature(m4d_ioc.Container, () => ({
    __proto__: dart.getMethods(m4d_ioc.Container.__proto__),
    bind: dart.fnType(m4d_ioc.BindingSyntax, [m4d_ioc.Service]),
    resolve: dart.fnType(m4d_ioc.ContainerResolveSyntax, [m4d_ioc.Service]),
    raw: dart.fnType(dart.dynamic, [m4d_ioc.Service]),
    unregister: dart.fnType(dart.void, [m4d_ioc.Service]),
    clear: dart.fnType(dart.void, []),
    [_bind]: dart.fnType(m4d_ioc.BindingSyntax, [m4d_ioc.Service]),
    [_rawBind]: dart.fnType(dart.void, [m4d_ioc.Service, dart.dynamic])
  }));
  dart.setGetterSignature(m4d_ioc.Container, () => ({
    __proto__: dart.getGetters(m4d_ioc.Container.__proto__),
    nrOfServices: core.int
  }));
  dart.setLibraryUri(m4d_ioc.Container, L0);
  dart.setFieldSignature(m4d_ioc.Container, () => ({
    __proto__: dart.getFields(m4d_ioc.Container.__proto__),
    [_logger]: dart.finalFieldType(logger.Logger),
    [_services]: dart.finalFieldType(core.Map$(m4d_ioc.Service, dart.dynamic))
  }));
  dart.defineLazy(m4d_ioc.Container, {
    /*m4d_ioc.Container._singleton*/get _singleton() {
      return null;
    },
    set _singleton(_) {}
  }, true);
  const _is_BindingSyntax_default = Symbol('_is_BindingSyntax_default');
  m4d_ioc.BindingSyntax$ = dart.generic(T => {
    var _ProviderBinderOfTL = () => (_ProviderBinderOfTL = dart.constFn(m4d_ioc._ProviderBinder$(T)))();
    var ServiceProviderOfTL = () => (ServiceProviderOfTL = dart.constFn(m4d_ioc.ServiceProvider$(T)))();
    class BindingSyntax extends core.Object {
      to(implementation) {
        switch (this[_service$].type) {
          case C3 || CT.C3:
          {
            new (_ProviderBinderOfTL()).new(this[_service$], ServiceProviderOfTL().as(implementation)).bind();
            break;
          }
          default:
          {
            new m4d_ioc._InstanceBinder.new(this[_service$], implementation).bind();
          }
        }
      }
      toFunction(R, callback) {
        return new (m4d_ioc._FunctionBinder$(R)).new(this[_service$], callback).bind();
      }
      toJson(callback) {
        return new m4d_ioc._JsonBinder.new(this[_service$], callback).bind();
      }
      toEvents(callback) {
        return new m4d_ioc._EventsBinder.new(this[_service$], callback).bind();
      }
    }
    (BindingSyntax._private = function(_service) {
      this[_service$] = _service;
      ;
    }).prototype = BindingSyntax.prototype;
    dart.addTypeTests(BindingSyntax);
    BindingSyntax.prototype[_is_BindingSyntax_default] = true;
    dart.addTypeCaches(BindingSyntax);
    dart.setMethodSignature(BindingSyntax, () => ({
      __proto__: dart.getMethods(BindingSyntax.__proto__),
      to: dart.fnType(dart.void, [dart.dynamic]),
      toFunction: dart.gFnType(R => [dart.void, [dart.fnType(R, [])]]),
      toJson: dart.fnType(dart.void, [dart.fnType(core.Map$(core.String, dart.dynamic), [])]),
      toEvents: dart.fnType(dart.void, [dart.fnType(core.Map$(core.String, core.Function), [])])
    }));
    dart.setLibraryUri(BindingSyntax, L0);
    dart.setFieldSignature(BindingSyntax, () => ({
      __proto__: dart.getFields(BindingSyntax.__proto__),
      [_service$]: dart.fieldType(m4d_ioc.Service)
    }));
    return BindingSyntax;
  });
  m4d_ioc.BindingSyntax = m4d_ioc.BindingSyntax$();
  dart.addTypeTests(m4d_ioc.BindingSyntax, _is_BindingSyntax_default);
  m4d_ioc.ContainerResolveSyntax = class ContainerResolveSyntax extends core.Object {
    as(R) {
      if (m4d_ioc.ServiceProvider$(R).is(this[_data$])) {
        return m4d_ioc.ServiceProvider$(R).as(this[_data$]).get();
      } else {
        return R.as(this[_data$]);
      }
    }
    asProvider(R) {
      if (m4d_ioc.ServiceProvider$(R).is(this[_data$])) {
        return m4d_ioc.ServiceProvider$(R).as(this[_data$]);
      } else {
        return new (m4d_ioc.ServiceProvider$(R)).new(dart.fnType(R, []).as(this[_data$]));
      }
    }
    get untyped() {
      return this[_data$];
    }
  };
  (m4d_ioc.ContainerResolveSyntax.new = function(_data) {
    this[_data$] = _data;
    ;
  }).prototype = m4d_ioc.ContainerResolveSyntax.prototype;
  dart.addTypeTests(m4d_ioc.ContainerResolveSyntax);
  dart.addTypeCaches(m4d_ioc.ContainerResolveSyntax);
  dart.setMethodSignature(m4d_ioc.ContainerResolveSyntax, () => ({
    __proto__: dart.getMethods(m4d_ioc.ContainerResolveSyntax.__proto__),
    as: dart.gFnType(R => [R, []]),
    asProvider: dart.gFnType(R => [m4d_ioc.ServiceProvider$(R), []])
  }));
  dart.setGetterSignature(m4d_ioc.ContainerResolveSyntax, () => ({
    __proto__: dart.getGetters(m4d_ioc.ContainerResolveSyntax.__proto__),
    untyped: dart.dynamic
  }));
  dart.setLibraryUri(m4d_ioc.ContainerResolveSyntax, L0);
  dart.setFieldSignature(m4d_ioc.ContainerResolveSyntax, () => ({
    __proto__: dart.getFields(m4d_ioc.ContainerResolveSyntax.__proto__),
    [_data$]: dart.finalFieldType(dart.dynamic)
  }));
  var _implementation$ = dart.privateName(m4d_ioc, "_implementation");
  m4d_ioc._InstanceBinder = class _InstanceBinder extends m4d_ioc.Binder {
    bind() {
      validate.Validate.notNull(m4d_ioc.Service, this[_service$]);
      validate.Validate.notNull(core.Object, this[_implementation$]);
      validate.Validate.isTrue(!dart.equals(this[_service$].type, m4d_ioc.ServiceType.Provider), "You can bind " + dart.str(this[_service$].name) + " only to " + dart.str(this[_service$].type));
      validate.Validate.isTrue(!core.Type.is(this[_implementation$]), "You must bind a concrete class to '" + dart.str(this[_service$].name) + "', " + "not a type! (" + dart.str(this[_implementation$]) + ")");
      m4d_ioc.Container.new()[_rawBind](this[_service$], this[_implementation$]);
    }
  };
  (m4d_ioc._InstanceBinder.new = function(_service, _implementation) {
    this[_service$] = _service;
    this[_implementation$] = _implementation;
    ;
  }).prototype = m4d_ioc._InstanceBinder.prototype;
  dart.addTypeTests(m4d_ioc._InstanceBinder);
  dart.addTypeCaches(m4d_ioc._InstanceBinder);
  dart.setMethodSignature(m4d_ioc._InstanceBinder, () => ({
    __proto__: dart.getMethods(m4d_ioc._InstanceBinder.__proto__),
    bind: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(m4d_ioc._InstanceBinder, L0);
  dart.setFieldSignature(m4d_ioc._InstanceBinder, () => ({
    __proto__: dart.getFields(m4d_ioc._InstanceBinder.__proto__),
    [_service$]: dart.finalFieldType(m4d_ioc.Service),
    [_implementation$]: dart.finalFieldType(core.Object)
  }));
  const _is__ProviderBinder_default = Symbol('_is__ProviderBinder_default');
  m4d_ioc._ProviderBinder$ = dart.generic(T => {
    var ServiceProviderOfTL = () => (ServiceProviderOfTL = dart.constFn(m4d_ioc.ServiceProvider$(T)))();
    class _ProviderBinder extends m4d_ioc.Binder {
      bind() {
        validate.Validate.notNull(m4d_ioc.Service, this[_service$]);
        validate.Validate.notNull(ServiceProviderOfTL(), this[_implementation$]);
        validate.Validate.isTrue(dart.equals(this[_service$].type, m4d_ioc.ServiceType.Provider), "You can bind " + dart.str(this[_service$].name) + " only to " + dart.str(this[_service$].type));
        validate.Validate.isTrue(m4d_ioc.ServiceProvider.is(this[_implementation$]), dart.str(this[_service$].name) + " must be of type " + dart.str(this[_service$].type));
        validate.Validate.isTrue(!core.Type.is(this[_implementation$]), "You must bind a concrete class to '" + dart.str(this[_service$].name) + "', " + "not a type! (" + dart.str(this[_implementation$]) + ")");
        m4d_ioc.Container.new()[_rawBind](this[_service$], this[_implementation$]);
      }
    }
    (_ProviderBinder.new = function(_service, _implementation) {
      this[_service$] = _service;
      this[_implementation$] = _implementation;
      ;
    }).prototype = _ProviderBinder.prototype;
    dart.addTypeTests(_ProviderBinder);
    _ProviderBinder.prototype[_is__ProviderBinder_default] = true;
    dart.addTypeCaches(_ProviderBinder);
    dart.setMethodSignature(_ProviderBinder, () => ({
      __proto__: dart.getMethods(_ProviderBinder.__proto__),
      bind: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ProviderBinder, L0);
    dart.setFieldSignature(_ProviderBinder, () => ({
      __proto__: dart.getFields(_ProviderBinder.__proto__),
      [_service$]: dart.finalFieldType(m4d_ioc.Service),
      [_implementation$]: dart.finalFieldType(m4d_ioc.ServiceProvider$(T))
    }));
    return _ProviderBinder;
  });
  m4d_ioc._ProviderBinder = m4d_ioc._ProviderBinder$();
  dart.addTypeTests(m4d_ioc._ProviderBinder, _is__ProviderBinder_default);
  var _callback$ = dart.privateName(m4d_ioc, "_callback");
  const _is__FunctionBinder_default = Symbol('_is__FunctionBinder_default');
  m4d_ioc._FunctionBinder$ = dart.generic(R => {
    var VoidToLRL = () => (VoidToLRL = dart.constFn(dart.fnType(R, [])))();
    class _FunctionBinder extends m4d_ioc.Binder {
      bind() {
        validate.Validate.notNull(m4d_ioc.Service, this[_service$]);
        validate.Validate.notNull(VoidToLRL(), this[_callback$]);
        validate.Validate.isTrue(dart.equals(this[_service$].type, m4d_ioc.ServiceType.Function), dart.str(this[_service$].name) + " must be a '" + dart.str(this[_service$].type) + "' but was '" + dart.str(m4d_ioc.ServiceType.Function) + "'!");
        validate.Validate.isTrue(VoidToLRL().is(this[_callback$]));
        m4d_ioc.Container.new()[_rawBind](this[_service$], this[_callback$]);
      }
    }
    (_FunctionBinder.new = function(_service, _callback) {
      this[_service$] = _service;
      this[_callback$] = _callback;
      ;
    }).prototype = _FunctionBinder.prototype;
    dart.addTypeTests(_FunctionBinder);
    _FunctionBinder.prototype[_is__FunctionBinder_default] = true;
    dart.addTypeCaches(_FunctionBinder);
    dart.setMethodSignature(_FunctionBinder, () => ({
      __proto__: dart.getMethods(_FunctionBinder.__proto__),
      bind: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_FunctionBinder, L0);
    dart.setFieldSignature(_FunctionBinder, () => ({
      __proto__: dart.getFields(_FunctionBinder.__proto__),
      [_service$]: dart.finalFieldType(m4d_ioc.Service),
      [_callback$]: dart.finalFieldType(dart.fnType(R, []))
    }));
    return _FunctionBinder;
  });
  m4d_ioc._FunctionBinder = m4d_ioc._FunctionBinder$();
  dart.addTypeTests(m4d_ioc._FunctionBinder, _is__FunctionBinder_default);
  m4d_ioc._JsonBinder = class _JsonBinder extends m4d_ioc.Binder {
    bind() {
      validate.Validate.notNull(m4d_ioc.Service, this[_service$]);
      validate.Validate.notNull(VoidToLMapLOfStringL$dynamic(), this[_callback$]);
      validate.Validate.isTrue(dart.equals(this[_service$].type, m4d_ioc.ServiceType.Json));
      validate.Validate.isTrue(VoidToLMapLOfStringL$dynamic().is(this[_callback$]));
      m4d_ioc.Container.new()[_rawBind](this[_service$], this[_callback$]);
    }
  };
  (m4d_ioc._JsonBinder.new = function(_service, _callback) {
    this[_service$] = _service;
    this[_callback$] = _callback;
    ;
  }).prototype = m4d_ioc._JsonBinder.prototype;
  dart.addTypeTests(m4d_ioc._JsonBinder);
  dart.addTypeCaches(m4d_ioc._JsonBinder);
  dart.setMethodSignature(m4d_ioc._JsonBinder, () => ({
    __proto__: dart.getMethods(m4d_ioc._JsonBinder.__proto__),
    bind: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(m4d_ioc._JsonBinder, L0);
  dart.setFieldSignature(m4d_ioc._JsonBinder, () => ({
    __proto__: dart.getFields(m4d_ioc._JsonBinder.__proto__),
    [_service$]: dart.finalFieldType(m4d_ioc.Service),
    [_callback$]: dart.finalFieldType(dart.fnType(core.Map$(core.String, dart.dynamic), []))
  }));
  m4d_ioc._EventsBinder = class _EventsBinder extends m4d_ioc.Binder {
    bind() {
      validate.Validate.notNull(m4d_ioc.Service, this[_service$]);
      validate.Validate.notNull(VoidToLMapLOfStringL$FunctionL(), this[_callback$]);
      validate.Validate.isTrue(dart.equals(this[_service$].type, m4d_ioc.ServiceType.Function));
      validate.Validate.isTrue(VoidToLMapLOfStringL$FunctionL().is(this[_callback$]));
      m4d_ioc.Container.new()[_rawBind](this[_service$], this[_callback$]);
    }
  };
  (m4d_ioc._EventsBinder.new = function(_service, _callback) {
    this[_service$] = _service;
    this[_callback$] = _callback;
    ;
  }).prototype = m4d_ioc._EventsBinder.prototype;
  dart.addTypeTests(m4d_ioc._EventsBinder);
  dart.addTypeCaches(m4d_ioc._EventsBinder);
  dart.setMethodSignature(m4d_ioc._EventsBinder, () => ({
    __proto__: dart.getMethods(m4d_ioc._EventsBinder.__proto__),
    bind: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(m4d_ioc._EventsBinder, L0);
  dart.setFieldSignature(m4d_ioc._EventsBinder, () => ({
    __proto__: dart.getFields(m4d_ioc._EventsBinder.__proto__),
    [_service$]: dart.finalFieldType(m4d_ioc.Service),
    [_callback$]: dart.finalFieldType(dart.fnType(core.Map$(core.String, core.Function), []))
  }));
  m4d_ioc.serviceAsString = function serviceAsString(service) {
    let $function = service.resolve();
    if ($function == null) {
      return dart.str(service.name) + ":undefined";
    }
    return $function();
  };
  dart.trackLibraries("packages/m4d_core/m4d_ioc", {
    "package:m4d_core/m4d_ioc.dart": m4d_ioc
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["m4d_ioc.dart"],"names":[],"mappings":"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","file":"m4d_ioc.ddc.js"}');
  // Exports:
  return {
    m4d_ioc: m4d_ioc
  };
});

//# sourceMappingURL=m4d_ioc.ddc.js.map
