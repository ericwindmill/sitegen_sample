define(['dart_sdk', 'packages/collection/src/utils'], function(dart_sdk, packages__collection__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__collection__src__utils.src__utils;
  var canonicalized_map = Object.create(dart.library);
  var wrappers = Object.create(dart.library);
  var unmodifiable_wrappers = Object.create(dart.library);
  var empty_unmodifiable_set = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  var $map = dartx.map;
  var $addEntries = dartx.addEntries;
  var $cast = dartx.cast;
  var $clear = dartx.clear;
  var $containsKey = dartx.containsKey;
  var $values = dartx.values;
  var $any = dartx.any;
  var $entries = dartx.entries;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $putIfAbsent = dartx.putIfAbsent;
  var $remove = dartx.remove;
  var $removeWhere = dartx.removeWhere;
  var $update = dartx.update;
  var $updateAll = dartx.updateAll;
  var $add = dartx.add;
  var $last = dartx.last;
  var $removeLast = dartx.removeLast;
  var $addAll = dartx.addAll;
  var $containsValue = dartx.containsValue;
  var $keys = dartx.keys;
  var $contains = dartx.contains;
  var $elementAt = dartx.elementAt;
  var $every = dartx.every;
  var $expand = dartx.expand;
  var $first = dartx.first;
  var $firstWhere = dartx.firstWhere;
  var $fold = dartx.fold;
  var $followedBy = dartx.followedBy;
  var $iterator = dartx.iterator;
  var $join = dartx.join;
  var $lastWhere = dartx.lastWhere;
  var $reduce = dartx.reduce;
  var $single = dartx.single;
  var $singleWhere = dartx.singleWhere;
  var $skip = dartx.skip;
  var $skipWhile = dartx.skipWhile;
  var $take = dartx.take;
  var $takeWhile = dartx.takeWhile;
  var $toList = dartx.toList;
  var $toSet = dartx.toSet;
  var $where = dartx.where;
  var $whereType = dartx.whereType;
  var $toString = dartx.toString;
  var $plus = dartx['+'];
  var $asMap = dartx.asMap;
  var $fillRange = dartx.fillRange;
  var $getRange = dartx.getRange;
  var $indexOf = dartx.indexOf;
  var $indexWhere = dartx.indexWhere;
  var $insert = dartx.insert;
  var $insertAll = dartx.insertAll;
  var $lastIndexOf = dartx.lastIndexOf;
  var $lastIndexWhere = dartx.lastIndexWhere;
  var $removeAt = dartx.removeAt;
  var $removeRange = dartx.removeRange;
  var $replaceRange = dartx.replaceRange;
  var $retainWhere = dartx.retainWhere;
  var $reversed = dartx.reversed;
  var $setAll = dartx.setAll;
  var $setRange = dartx.setRange;
  var $shuffle = dartx.shuffle;
  var $sort = dartx.sort;
  var $sublist = dartx.sublist;
  var $noSuchMethod = dartx.noSuchMethod;
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "file:///private/var/folders/7w/q7gbtlmj7jd5j1gvyhp2p8880000gn/T/scratch_space5vCb0r/packages/collection/src/canonicalized_map.dart";
  var L3 = "package:collection/src/unmodifiable_wrappers.dart";
  var L1 = "package:collection/src/canonicalized_map.dart";
  var L4 = "package:collection/src/empty_unmodifiable_set.dart";
  var L2 = "package:collection/src/wrappers.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_base', _base$2));
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_setBase', _setBase$));
    }
  }, false);
  var _base = dart.privateName(canonicalized_map, "_base");
  var _canonicalize = dart.privateName(canonicalized_map, "_canonicalize");
  var _isValidKeyFn = dart.privateName(canonicalized_map, "_isValidKeyFn");
  var _isValidKey = dart.privateName(canonicalized_map, "_isValidKey");
  const _is_CanonicalizedMap_default = Symbol('_is_CanonicalizedMap_default');
  canonicalized_map.CanonicalizedMap$ = dart.generic((C, K, V) => {
    var LinkedMapOfCL$PairLOfKL$VL = () => (LinkedMapOfCL$PairLOfKL$VL = dart.constFn(_js_helper.LinkedMap$(C, PairOfKL$VL())))();
    var MapEntryOfCL$PairLOfKL$VL = () => (MapEntryOfCL$PairLOfKL$VL = dart.constFn(core.MapEntry$(C, PairOfKL$VL())))();
    var MapEntryLOfKL$VLToMapEntryLOfCL$PairLOfKL$VL = () => (MapEntryLOfKL$VLToMapEntryLOfCL$PairLOfKL$VL = dart.constFn(dart.fnType(MapEntryOfCL$PairLOfKL$VL(), [MapEntryOfKL$VL()])))();
    var MapEntryLOfCL$PairLOfKL$VLToMapEntryLOfKL$VL = () => (MapEntryLOfCL$PairLOfKL$VLToMapEntryLOfKL$VL = dart.constFn(dart.fnType(MapEntryOfKL$VL(), [MapEntryOfCL$PairLOfKL$VL()])))();
    var CLAndPairLOfKL$VLTovoid = () => (CLAndPairLOfKL$VLTovoid = dart.constFn(dart.fnType(dart.void, [C, PairOfKL$VL()])))();
    var CLAndPairLOfKL$VLToboolL = () => (CLAndPairLOfKL$VLToboolL = dart.constFn(dart.fnType(core.bool, [C, PairOfKL$VL()])))();
    var CLAndPairLOfKL$VLToPairLOfKL$VL = () => (CLAndPairLOfKL$VLToPairLOfKL$VL = dart.constFn(dart.fnType(PairOfKL$VL(), [C, PairOfKL$VL()])))();
    var PairOfKL$VL = () => (PairOfKL$VL = dart.constFn(utils.Pair$(K, V)))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(K, V)))();
    var KLAndVLToVL = () => (KLAndVLToVL = dart.constFn(dart.fnType(V, [K, V])))();
    var MapEntryOfKL$VL = () => (MapEntryOfKL$VL = dart.constFn(core.MapEntry$(K, V)))();
    var IterableOfMapEntryLOfKL$VL = () => (IterableOfMapEntryLOfKL$VL = dart.constFn(core.Iterable$(MapEntryOfKL$VL())))();
    var PairLOfKL$VLToboolL = () => (PairLOfKL$VLToboolL = dart.constFn(dart.fnType(core.bool, [PairOfKL$VL()])))();
    var PairLOfKL$VLToKL = () => (PairLOfKL$VLToKL = dart.constFn(dart.fnType(K, [PairOfKL$VL()])))();
    var VoidToPairLOfKL$VL = () => (VoidToPairLOfKL$VL = dart.constFn(dart.fnType(PairOfKL$VL(), [])))();
    var PairLOfKL$VLToPairLOfKL$VL = () => (PairLOfKL$VLToPairLOfKL$VL = dart.constFn(dart.fnType(PairOfKL$VL(), [PairOfKL$VL()])))();
    var KLAndVLToLVL = () => (KLAndVLToLVL = dart.constFn(dart.fnType(V, [K, V])))();
    var PairLOfKL$VLToVL = () => (PairLOfKL$VLToVL = dart.constFn(dart.fnType(V, [PairOfKL$VL()])))();
    var KLAndVLToNullN = () => (KLAndVLToNullN = dart.constFn(dart.fnType(core.Null, [K, V])))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.fnType(V, [])))();
    var VLToLVL = () => (VLToLVL = dart.constFn(dart.fnType(V, [V])))();
    class CanonicalizedMap extends core.Object {
      _get(key) {
        let t0;
        if (!dart.test(this[_isValidKey](key))) return null;
        let pair = this[_base][$_get]((t0 = K.as(key), this[_canonicalize](t0)));
        return pair == null ? null : pair.last;
      }
      _set(key, value$) {
        let value = value$;
        let t0;
        K.as(key);
        V.as(value);
        if (!dart.test(this[_isValidKey](key))) return value$;
        this[_base][$_set]((t0 = key, this[_canonicalize](t0)), new (PairOfKL$VL()).new(key, value));
        return value$;
      }
      addAll(other) {
        MapOfKL$VL().as(other);
        other[$forEach](dart.fn((key, value) => {
          let t1, t0;
          t0 = key;
          t1 = value;
          this._set(t0, t1);
          return t1;
        }, KLAndVLToVL()));
      }
      addEntries(entries) {
        IterableOfMapEntryLOfKL$VL().as(entries);
        return this[_base][$addEntries](entries[$map](MapEntryOfCL$PairLOfKL$VL(), dart.fn(e => {
          let t0;
          return new (MapEntryOfCL$PairLOfKL$VL()).__((t0 = e.key, this[_canonicalize](t0)), new (PairOfKL$VL()).new(e.key, e.value));
        }, MapEntryLOfKL$VLToMapEntryLOfCL$PairLOfKL$VL())));
      }
      cast(K2, V2) {
        return this[_base][$cast](K2, V2);
      }
      clear() {
        this[_base][$clear]();
      }
      containsKey(key) {
        let t0;
        if (!dart.test(this[_isValidKey](key))) return false;
        return this[_base][$containsKey]((t0 = K.as(key), this[_canonicalize](t0)));
      }
      containsValue(value) {
        return this[_base][$values][$any](dart.fn(pair => dart.equals(pair.last, value), PairLOfKL$VLToboolL()));
      }
      get entries() {
        return this[_base][$entries][$map](MapEntryOfKL$VL(), dart.fn(e => new (MapEntryOfKL$VL()).__(e.value.first, e.value.last), MapEntryLOfCL$PairLOfKL$VLToMapEntryLOfKL$VL()));
      }
      forEach(f) {
        this[_base][$forEach](dart.fn((key, pair) => f(pair.first, pair.last), CLAndPairLOfKL$VLTovoid()));
      }
      get isEmpty() {
        return this[_base][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base][$isNotEmpty];
      }
      get keys() {
        return this[_base][$values][$map](K, dart.fn(pair => pair.first, PairLOfKL$VLToKL()));
      }
      get length() {
        return this[_base][$length];
      }
      map(K2, V2, transform) {
        return this[_base][$map](K2, V2, dart.fn((_, pair) => transform(pair.first, pair.last), dart.fnType(core.MapEntry$(K2, V2), [C, PairOfKL$VL()])));
      }
      putIfAbsent(key, ifAbsent) {
        let t0;
        K.as(key);
        VoidToLVL().as(ifAbsent);
        return this[_base][$putIfAbsent]((t0 = key, this[_canonicalize](t0)), dart.fn(() => new (PairOfKL$VL()).new(key, ifAbsent()), VoidToPairLOfKL$VL())).last;
      }
      remove(key) {
        let t0;
        if (!dart.test(this[_isValidKey](key))) return null;
        let pair = this[_base][$remove]((t0 = K.as(key), this[_canonicalize](t0)));
        return pair == null ? null : pair.last;
      }
      removeWhere(test) {
        return this[_base][$removeWhere](dart.fn((_, pair) => test(pair.first, pair.last), CLAndPairLOfKL$VLToboolL()));
      }
      retype(K2, V2) {
        return this.cast(K2, V2);
      }
      update(key, update, opts) {
        let t0;
        K.as(key);
        VLToLVL().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToLVL().as(ifAbsent);
        return this[_base][$update]((t0 = key, this[_canonicalize](t0)), dart.fn(pair => new (PairOfKL$VL()).new(key, update(pair.last)), PairLOfKL$VLToPairLOfKL$VL()), {ifAbsent: ifAbsent == null ? null : dart.fn(() => new (PairOfKL$VL()).new(key, ifAbsent()), VoidToPairLOfKL$VL())}).last;
      }
      updateAll(update) {
        KLAndVLToLVL().as(update);
        return this[_base][$updateAll](dart.fn((_, pair) => new (PairOfKL$VL()).new(pair.first, update(pair.first, pair.last)), CLAndPairLOfKL$VLToPairLOfKL$VL()));
      }
      get values() {
        return this[_base][$values][$map](V, dart.fn(pair => pair.last, PairLOfKL$VLToVL()));
      }
      toString() {
        if (dart.test(canonicalized_map._isToStringVisiting(this))) {
          return "{...}";
        }
        let result = new core.StringBuffer.new();
        try {
          canonicalized_map._toStringVisiting[$add](this);
          result.write("{");
          let first = true;
          this.forEach(dart.fn((k, v) => {
            if (!first) {
              result.write(", ");
            }
            first = false;
            result.write(dart.str(k) + ": " + dart.str(v));
          }, KLAndVLToNullN()));
          result.write("}");
        } finally {
          if (!(canonicalized_map._toStringVisiting[$last] === this)) dart.assertFailed(null, L0, 174, 14, "identical(_toStringVisiting.last, this)");
          canonicalized_map._toStringVisiting[$removeLast]();
        }
        return result.toString();
      }
      [_isValidKey](key) {
        let t0;
        return (key == null || K.is(key)) && (this[_isValidKeyFn] == null || dart.test((t0 = key, this[_isValidKeyFn](t0))));
      }
    }
    (CanonicalizedMap.new = function(canonicalize, opts) {
      let isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
      this[_base] = new (LinkedMapOfCL$PairLOfKL$VL()).new();
      this[_canonicalize] = canonicalize;
      this[_isValidKeyFn] = isValidKey;
      ;
    }).prototype = CanonicalizedMap.prototype;
    (CanonicalizedMap.from = function(other, canonicalize, opts) {
      let isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
      this[_base] = new (LinkedMapOfCL$PairLOfKL$VL()).new();
      this[_canonicalize] = canonicalize;
      this[_isValidKeyFn] = isValidKey;
      this.addAll(other);
    }).prototype = CanonicalizedMap.prototype;
    CanonicalizedMap.prototype[dart.isMap] = true;
    dart.addTypeTests(CanonicalizedMap);
    CanonicalizedMap.prototype[_is_CanonicalizedMap_default] = true;
    dart.addTypeCaches(CanonicalizedMap);
    CanonicalizedMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(CanonicalizedMap, () => ({
      __proto__: dart.getMethods(CanonicalizedMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}, {}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}, {}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      [_isValidKey]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(CanonicalizedMap, () => ({
      __proto__: dart.getGetters(CanonicalizedMap.__proto__),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V)),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V)
    }));
    dart.setLibraryUri(CanonicalizedMap, L1);
    dart.setFieldSignature(CanonicalizedMap, () => ({
      __proto__: dart.getFields(CanonicalizedMap.__proto__),
      [_canonicalize]: dart.finalFieldType(dart.fnType(C, [K])),
      [_isValidKeyFn]: dart.finalFieldType(dart.fnType(core.bool, [core.Object])),
      [_base]: dart.finalFieldType(core.Map$(C, utils.Pair$(K, V)))
    }));
    dart.defineExtensionMethods(CanonicalizedMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'cast',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'update',
      'updateAll',
      'toString'
    ]);
    dart.defineExtensionAccessors(CanonicalizedMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return CanonicalizedMap;
  });
  canonicalized_map.CanonicalizedMap = canonicalized_map.CanonicalizedMap$();
  dart.addTypeTests(canonicalized_map.CanonicalizedMap, _is_CanonicalizedMap_default);
  canonicalized_map._isToStringVisiting = function _isToStringVisiting(o) {
    return canonicalized_map._toStringVisiting[$any](dart.fn(e => core.identical(o, e), dynamicToboolL()));
  };
  dart.defineLazy(canonicalized_map, {
    /*canonicalized_map._toStringVisiting*/get _toStringVisiting() {
      return [];
    }
  }, true);
  var _base$ = dart.privateName(wrappers, "_base");
  const _is__DelegatingIterableBase_default = Symbol('_is__DelegatingIterableBase_default');
  wrappers._DelegatingIterableBase$ = dart.generic(E => {
    var VoidToLEL = () => (VoidToLEL = dart.constFn(dart.fnType(E, [])))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(E)))();
    var ELAndELToLEL = () => (ELAndELToLEL = dart.constFn(dart.fnType(E, [E, E])))();
    class _DelegatingIterableBase extends core.Object {
      any(test) {
        return this[_base$][$any](test);
      }
      cast(T) {
        return this[_base$][$cast](T);
      }
      contains(element) {
        return this[_base$][$contains](element);
      }
      elementAt(index) {
        return this[_base$][$elementAt](index);
      }
      every(test) {
        return this[_base$][$every](test);
      }
      expand(T, f) {
        return this[_base$][$expand](T, f);
      }
      get first() {
        return this[_base$][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_base$][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_base$][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfEL().as(other);
        return this[_base$][$followedBy](other);
      }
      forEach(f) {
        return this[_base$][$forEach](f);
      }
      get isEmpty() {
        return this[_base$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base$][$isNotEmpty];
      }
      get iterator() {
        return this[_base$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        return this[_base$][$join](separator);
      }
      get last() {
        return this[_base$][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_base$][$lastWhere](test, {orElse: orElse});
      }
      get length() {
        return this[_base$][$length];
      }
      map(T, f) {
        return this[_base$][$map](T, f);
      }
      reduce(combine) {
        ELAndELToLEL().as(combine);
        return this[_base$][$reduce](combine);
      }
      retype(T) {
        return this.cast(T);
      }
      get single() {
        return this[_base$][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_base$][$singleWhere](test, {orElse: orElse});
      }
      skip(n) {
        return this[_base$][$skip](n);
      }
      skipWhile(test) {
        return this[_base$][$skipWhile](test);
      }
      take(n) {
        return this[_base$][$take](n);
      }
      takeWhile(test) {
        return this[_base$][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_base$][$toList]({growable: growable});
      }
      toSet() {
        return this[_base$][$toSet]();
      }
      where(test) {
        return this[_base$][$where](test);
      }
      whereType(T) {
        return this[_base$][$whereType](T);
      }
      toString() {
        return dart.toString(this[_base$]);
      }
    }
    (_DelegatingIterableBase.new = function() {
      ;
    }).prototype = _DelegatingIterableBase.prototype;
    _DelegatingIterableBase.prototype[dart.isIterable] = true;
    dart.addTypeTests(_DelegatingIterableBase);
    _DelegatingIterableBase.prototype[_is__DelegatingIterableBase_default] = true;
    dart.addTypeCaches(_DelegatingIterableBase);
    _DelegatingIterableBase[dart.implements] = () => [core.Iterable$(E)];
    dart.setMethodSignature(_DelegatingIterableBase, () => ({
      __proto__: dart.getMethods(_DelegatingIterableBase.__proto__),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      cast: dart.gFnType(T => [core.Iterable$(T), []]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}, {}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}, {}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core.Iterable$(E), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}, {}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}, {}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [core.Iterable$(T), []]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}, {}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}, {}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []])
    }));
    dart.setGetterSignature(_DelegatingIterableBase, () => ({
      __proto__: dart.getGetters(_DelegatingIterableBase.__proto__),
      first: E,
      [$first]: E,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      last: E,
      [$last]: E,
      length: core.int,
      [$length]: core.int,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(_DelegatingIterableBase, L2);
    dart.defineExtensionMethods(_DelegatingIterableBase, [
      'any',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'join',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      'toString'
    ]);
    dart.defineExtensionAccessors(_DelegatingIterableBase, [
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'length',
      'single'
    ]);
    return _DelegatingIterableBase;
  });
  wrappers._DelegatingIterableBase = wrappers._DelegatingIterableBase$();
  dart.addTypeTests(wrappers._DelegatingIterableBase, _is__DelegatingIterableBase_default);
  const _is_DelegatingIterable_default = Symbol('_is_DelegatingIterable_default');
  var _base$0 = dart.privateName(wrappers, "DelegatingIterable._base");
  wrappers.DelegatingIterable$ = dart.generic(E => {
    class DelegatingIterable extends wrappers._DelegatingIterableBase$(E) {
      get [_base$]() {
        return this[_base$0];
      }
      set [_base$](value) {
        super[_base$] = value;
      }
      static typed(E, base) {
        return base[$cast](E);
      }
    }
    (DelegatingIterable.new = function(base) {
      this[_base$0] = base;
      DelegatingIterable.__proto__.new.call(this);
      ;
    }).prototype = DelegatingIterable.prototype;
    dart.addTypeTests(DelegatingIterable);
    DelegatingIterable.prototype[_is_DelegatingIterable_default] = true;
    dart.addTypeCaches(DelegatingIterable);
    dart.setLibraryUri(DelegatingIterable, L2);
    dart.setFieldSignature(DelegatingIterable, () => ({
      __proto__: dart.getFields(DelegatingIterable.__proto__),
      [_base$]: dart.finalFieldType(core.Iterable$(E))
    }));
    return DelegatingIterable;
  });
  wrappers.DelegatingIterable = wrappers.DelegatingIterable$();
  dart.addTypeTests(wrappers.DelegatingIterable, _is_DelegatingIterable_default);
  var _listBase = dart.privateName(wrappers, "_listBase");
  const _is_DelegatingList_default = Symbol('_is_DelegatingList_default');
  wrappers.DelegatingList$ = dart.generic(E => {
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(E)))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(E)))();
    class DelegatingList extends wrappers.DelegatingIterable$(E) {
      static typed(E, base) {
        return base[$cast](E);
      }
      get [_listBase]() {
        return ListOfEL().as(this[_base$]);
      }
      _get(index) {
        return this[_listBase][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        this[_listBase][$_set](index, value);
        return value$;
      }
      ['+'](other) {
        ListOfEL().as(other);
        return this[_listBase][$plus](other);
      }
      add(value) {
        E.as(value);
        this[_listBase][$add](value);
      }
      addAll(iterable) {
        IterableOfEL().as(iterable);
        this[_listBase][$addAll](iterable);
      }
      asMap() {
        return this[_listBase][$asMap]();
      }
      cast(T) {
        return this[_listBase][$cast](T);
      }
      clear() {
        this[_listBase][$clear]();
      }
      fillRange(start, end, fillValue = null) {
        E.as(fillValue);
        this[_listBase][$fillRange](start, end, fillValue);
      }
      set first(value) {
        E.as(value);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(0, value);
      }
      get first() {
        return super.first;
      }
      getRange(start, end) {
        return this[_listBase][$getRange](start, end);
      }
      indexOf(element, start = 0) {
        E.as(element);
        return this[_listBase][$indexOf](element, start);
      }
      indexWhere(test, start = 0) {
        return this[_listBase][$indexWhere](test, start);
      }
      insert(index, element) {
        E.as(element);
        this[_listBase][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfEL().as(iterable);
        this[_listBase][$insertAll](index, iterable);
      }
      set last(value) {
        E.as(value);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(dart.notNull(this.length) - 1, value);
      }
      get last() {
        return super.last;
      }
      lastIndexOf(element, start = null) {
        E.as(element);
        return this[_listBase][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start = null) {
        return this[_listBase][$lastIndexWhere](test, start);
      }
      set length(newLength) {
        this[_listBase][$length] = newLength;
      }
      get length() {
        return super.length;
      }
      remove(value) {
        return this[_listBase][$remove](value);
      }
      removeAt(index) {
        return this[_listBase][$removeAt](index);
      }
      removeLast() {
        return this[_listBase][$removeLast]();
      }
      removeRange(start, end) {
        this[_listBase][$removeRange](start, end);
      }
      removeWhere(test) {
        this[_listBase][$removeWhere](test);
      }
      replaceRange(start, end, iterable) {
        IterableOfEL().as(iterable);
        this[_listBase][$replaceRange](start, end, iterable);
      }
      retainWhere(test) {
        this[_listBase][$retainWhere](test);
      }
      retype(T) {
        return this.cast(T);
      }
      get reversed() {
        return this[_listBase][$reversed];
      }
      setAll(index, iterable) {
        IterableOfEL().as(iterable);
        this[_listBase][$setAll](index, iterable);
      }
      setRange(start, end, iterable, skipCount = 0) {
        IterableOfEL().as(iterable);
        this[_listBase][$setRange](start, end, iterable, skipCount);
      }
      shuffle(random = null) {
        this[_listBase][$shuffle](random);
      }
      sort(compare = null) {
        this[_listBase][$sort](compare);
      }
      sublist(start, end = null) {
        return this[_listBase][$sublist](start, end);
      }
    }
    (DelegatingList.new = function(base) {
      DelegatingList.__proto__.new.call(this, base);
      ;
    }).prototype = DelegatingList.prototype;
    DelegatingList.prototype[dart.isList] = true;
    dart.addTypeTests(DelegatingList);
    DelegatingList.prototype[_is_DelegatingList_default] = true;
    dart.addTypeCaches(DelegatingList);
    DelegatingList[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(DelegatingList, () => ({
      __proto__: dart.getMethods(DelegatingList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      '+': dart.fnType(core.List$(E), [core.Object]),
      [$plus]: dart.fnType(core.List$(E), [core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      [$asMap]: dart.fnType(core.Map$(core.int, E), []),
      cast: dart.gFnType(T => [core.List$(T), []]),
      [$cast]: dart.gFnType(T => [core.List$(T), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$indexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      lastIndexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$lastIndexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$lastIndexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retype: dart.gFnType(T => [core.List$(T), []]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      [$shuffle]: dart.fnType(dart.void, [], [math.Random]),
      sort: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      [$sort]: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      sublist: dart.fnType(core.List$(E), [core.int], [core.int]),
      [$sublist]: dart.fnType(core.List$(E), [core.int], [core.int])
    }));
    dart.setGetterSignature(DelegatingList, () => ({
      __proto__: dart.getGetters(DelegatingList.__proto__),
      [_listBase]: core.List$(E),
      reversed: core.Iterable$(E),
      [$reversed]: core.Iterable$(E)
    }));
    dart.setSetterSignature(DelegatingList, () => ({
      __proto__: dart.getSetters(DelegatingList.__proto__),
      first: core.Object,
      [$first]: core.Object,
      last: core.Object,
      [$last]: core.Object,
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(DelegatingList, L2);
    dart.defineExtensionMethods(DelegatingList, [
      '_get',
      '_set',
      '+',
      'add',
      'addAll',
      'asMap',
      'cast',
      'clear',
      'fillRange',
      'getRange',
      'indexOf',
      'indexWhere',
      'insert',
      'insertAll',
      'lastIndexOf',
      'lastIndexWhere',
      'remove',
      'removeAt',
      'removeLast',
      'removeRange',
      'removeWhere',
      'replaceRange',
      'retainWhere',
      'setAll',
      'setRange',
      'shuffle',
      'sort',
      'sublist'
    ]);
    dart.defineExtensionAccessors(DelegatingList, ['first', 'last', 'length', 'reversed']);
    return DelegatingList;
  });
  wrappers.DelegatingList = wrappers.DelegatingList$();
  dart.addTypeTests(wrappers.DelegatingList, _is_DelegatingList_default);
  var _setBase = dart.privateName(wrappers, "_setBase");
  const _is_DelegatingSet_default = Symbol('_is_DelegatingSet_default');
  wrappers.DelegatingSet$ = dart.generic(E => {
    var SetOfEL = () => (SetOfEL = dart.constFn(core.Set$(E)))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(E)))();
    var DelegatingSetOfEL = () => (DelegatingSetOfEL = dart.constFn(wrappers.DelegatingSet$(E)))();
    class DelegatingSet extends wrappers.DelegatingIterable$(E) {
      static typed(E, base) {
        return base.cast(E);
      }
      get [_setBase]() {
        return SetOfEL().as(this[_base$]);
      }
      add(value) {
        E.as(value);
        return this[_setBase].add(value);
      }
      addAll(elements) {
        IterableOfEL().as(elements);
        this[_setBase].addAll(elements);
      }
      cast(T) {
        return this[_setBase].cast(T);
      }
      clear() {
        this[_setBase].clear();
      }
      containsAll(other) {
        return this[_setBase].containsAll(other);
      }
      difference(other) {
        return this[_setBase].difference(other);
      }
      intersection(other) {
        return this[_setBase].intersection(other);
      }
      lookup(element) {
        return this[_setBase].lookup(element);
      }
      remove(value) {
        return this[_setBase].remove(value);
      }
      removeAll(elements) {
        this[_setBase].removeAll(elements);
      }
      removeWhere(test) {
        this[_setBase].removeWhere(test);
      }
      retainAll(elements) {
        this[_setBase].retainAll(elements);
      }
      retype(T) {
        return this.cast(T);
      }
      retainWhere(test) {
        this[_setBase].retainWhere(test);
      }
      union(other) {
        SetOfEL().as(other);
        return this[_setBase].union(other);
      }
      toSet() {
        return new (DelegatingSetOfEL()).new(this[_setBase].toSet());
      }
    }
    (DelegatingSet.new = function(base) {
      DelegatingSet.__proto__.new.call(this, base);
      ;
    }).prototype = DelegatingSet.prototype;
    dart.addTypeTests(DelegatingSet);
    DelegatingSet.prototype[_is_DelegatingSet_default] = true;
    dart.addTypeCaches(DelegatingSet);
    DelegatingSet[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(DelegatingSet, () => ({
      __proto__: dart.getMethods(DelegatingSet.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      union: dart.fnType(core.Set$(E), [core.Object])
    }));
    dart.setGetterSignature(DelegatingSet, () => ({
      __proto__: dart.getGetters(DelegatingSet.__proto__),
      [_setBase]: core.Set$(E)
    }));
    dart.setLibraryUri(DelegatingSet, L2);
    dart.defineExtensionMethods(DelegatingSet, ['cast', 'toSet']);
    return DelegatingSet;
  });
  wrappers.DelegatingSet = wrappers.DelegatingSet$();
  dart.addTypeTests(wrappers.DelegatingSet, _is_DelegatingSet_default);
  var _baseQueue = dart.privateName(wrappers, "_baseQueue");
  const _is_DelegatingQueue_default = Symbol('_is_DelegatingQueue_default');
  wrappers.DelegatingQueue$ = dart.generic(E => {
    var QueueOfEL = () => (QueueOfEL = dart.constFn(collection.Queue$(E)))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(E)))();
    class DelegatingQueue extends wrappers.DelegatingIterable$(E) {
      static typed(E, base) {
        return base.cast(E);
      }
      get [_baseQueue]() {
        return QueueOfEL().as(this[_base$]);
      }
      add(value) {
        E.as(value);
        this[_baseQueue].add(value);
      }
      addAll(iterable) {
        IterableOfEL().as(iterable);
        this[_baseQueue].addAll(iterable);
      }
      addFirst(value) {
        E.as(value);
        this[_baseQueue].addFirst(value);
      }
      addLast(value) {
        E.as(value);
        this[_baseQueue].addLast(value);
      }
      cast(T) {
        return this[_baseQueue].cast(T);
      }
      clear() {
        this[_baseQueue].clear();
      }
      remove(object) {
        return this[_baseQueue].remove(object);
      }
      removeWhere(test) {
        this[_baseQueue].removeWhere(test);
      }
      retainWhere(test) {
        this[_baseQueue].retainWhere(test);
      }
      retype(T) {
        return this.cast(T);
      }
      removeFirst() {
        return this[_baseQueue].removeFirst();
      }
      removeLast() {
        return this[_baseQueue].removeLast();
      }
    }
    (DelegatingQueue.new = function(queue) {
      DelegatingQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = DelegatingQueue.prototype;
    dart.addTypeTests(DelegatingQueue);
    DelegatingQueue.prototype[_is_DelegatingQueue_default] = true;
    dart.addTypeCaches(DelegatingQueue);
    DelegatingQueue[dart.implements] = () => [collection.Queue$(E)];
    dart.setMethodSignature(DelegatingQueue, () => ({
      __proto__: dart.getMethods(DelegatingQueue.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      addFirst: dart.fnType(dart.void, [core.Object]),
      addLast: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [collection.Queue$(T), []]),
      [$cast]: dart.gFnType(T => [collection.Queue$(T), []]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retype: dart.gFnType(T => [collection.Queue$(T), []]),
      removeFirst: dart.fnType(E, []),
      removeLast: dart.fnType(E, [])
    }));
    dart.setGetterSignature(DelegatingQueue, () => ({
      __proto__: dart.getGetters(DelegatingQueue.__proto__),
      [_baseQueue]: collection.Queue$(E)
    }));
    dart.setLibraryUri(DelegatingQueue, L2);
    dart.defineExtensionMethods(DelegatingQueue, ['cast']);
    return DelegatingQueue;
  });
  wrappers.DelegatingQueue = wrappers.DelegatingQueue$();
  dart.addTypeTests(wrappers.DelegatingQueue, _is_DelegatingQueue_default);
  const _is_DelegatingMap_default = Symbol('_is_DelegatingMap_default');
  var _base$1 = dart.privateName(wrappers, "DelegatingMap._base");
  wrappers.DelegatingMap$ = dart.generic((K, V) => {
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(K, V)))();
    var MapEntryOfKL$VL = () => (MapEntryOfKL$VL = dart.constFn(core.MapEntry$(K, V)))();
    var IterableOfMapEntryLOfKL$VL = () => (IterableOfMapEntryLOfKL$VL = dart.constFn(core.Iterable$(MapEntryOfKL$VL())))();
    var KLAndVLToLVL = () => (KLAndVLToLVL = dart.constFn(dart.fnType(V, [K, V])))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.fnType(V, [])))();
    var VLToLVL = () => (VLToLVL = dart.constFn(dart.fnType(V, [V])))();
    class DelegatingMap extends core.Object {
      get [_base$]() {
        return this[_base$1];
      }
      set [_base$](value) {
        super[_base$] = value;
      }
      static typed(K, V, base) {
        return base[$cast](K, V);
      }
      _get(key) {
        return this[_base$][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        K.as(key);
        V.as(value);
        this[_base$][$_set](key, value);
        return value$;
      }
      addAll(other) {
        MapOfKL$VL().as(other);
        this[_base$][$addAll](other);
      }
      addEntries(entries) {
        IterableOfMapEntryLOfKL$VL().as(entries);
        this[_base$][$addEntries](entries);
      }
      clear() {
        this[_base$][$clear]();
      }
      cast(K2, V2) {
        return this[_base$][$cast](K2, V2);
      }
      containsKey(key) {
        return this[_base$][$containsKey](key);
      }
      containsValue(value) {
        return this[_base$][$containsValue](value);
      }
      get entries() {
        return this[_base$][$entries];
      }
      forEach(f) {
        this[_base$][$forEach](f);
      }
      get isEmpty() {
        return this[_base$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base$][$isNotEmpty];
      }
      get keys() {
        return this[_base$][$keys];
      }
      get length() {
        return this[_base$][$length];
      }
      map(K2, V2, transform) {
        return this[_base$][$map](K2, V2, transform);
      }
      putIfAbsent(key, ifAbsent) {
        K.as(key);
        VoidToLVL().as(ifAbsent);
        return this[_base$][$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        return this[_base$][$remove](key);
      }
      removeWhere(test) {
        return this[_base$][$removeWhere](test);
      }
      retype(K2, V2) {
        return this.cast(K2, V2);
      }
      get values() {
        return this[_base$][$values];
      }
      toString() {
        return dart.toString(this[_base$]);
      }
      update(key, update, opts) {
        K.as(key);
        VLToLVL().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToLVL().as(ifAbsent);
        return this[_base$][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        KLAndVLToLVL().as(update);
        return this[_base$][$updateAll](update);
      }
    }
    (DelegatingMap.new = function(base) {
      this[_base$1] = base;
      ;
    }).prototype = DelegatingMap.prototype;
    DelegatingMap.prototype[dart.isMap] = true;
    dart.addTypeTests(DelegatingMap);
    DelegatingMap.prototype[_is_DelegatingMap_default] = true;
    dart.addTypeCaches(DelegatingMap);
    DelegatingMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(DelegatingMap, () => ({
      __proto__: dart.getMethods(DelegatingMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}, {}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}, {}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(DelegatingMap, () => ({
      __proto__: dart.getGetters(DelegatingMap.__proto__),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V)),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V)
    }));
    dart.setLibraryUri(DelegatingMap, L2);
    dart.setFieldSignature(DelegatingMap, () => ({
      __proto__: dart.getFields(DelegatingMap.__proto__),
      [_base$]: dart.finalFieldType(core.Map$(K, V))
    }));
    dart.defineExtensionMethods(DelegatingMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'clear',
      'cast',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(DelegatingMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return DelegatingMap;
  });
  wrappers.DelegatingMap = wrappers.DelegatingMap$();
  dart.addTypeTests(wrappers.DelegatingMap, _is_DelegatingMap_default);
  var _baseMap = dart.privateName(wrappers, "_baseMap");
  const _is_UnmodifiableSetMixin_default = Symbol('_is_UnmodifiableSetMixin_default');
  unmodifiable_wrappers.UnmodifiableSetMixin$ = dart.generic(E => {
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(E)))();
    class UnmodifiableSetMixin extends core.Object {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Set"));
      }
      add(value) {
        E.as(value);
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(core.bool);
      }
      addAll(elements) {
        IterableOfEL().as(elements);
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      remove(value) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(core.bool);
      }
      removeAll(elements) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      retainAll(elements) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      removeWhere(test) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      retainWhere(test) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      clear() {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (UnmodifiableSetMixin.new = function() {
      ;
    }).prototype = UnmodifiableSetMixin.prototype;
    dart.addTypeTests(UnmodifiableSetMixin);
    UnmodifiableSetMixin.prototype[_is_UnmodifiableSetMixin_default] = true;
    dart.addTypeCaches(UnmodifiableSetMixin);
    UnmodifiableSetMixin[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(UnmodifiableSetMixin, () => ({
      __proto__: dart.getMethods(UnmodifiableSetMixin.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable]),
      retainAll: dart.fnType(dart.void, [core.Iterable]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      clear: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(UnmodifiableSetMixin, L3);
    return UnmodifiableSetMixin;
  });
  unmodifiable_wrappers.UnmodifiableSetMixin = unmodifiable_wrappers.UnmodifiableSetMixin$();
  dart.addTypeTests(unmodifiable_wrappers.UnmodifiableSetMixin, _is_UnmodifiableSetMixin_default);
  const _is_MapKeySet_default = Symbol('_is_MapKeySet_default');
  wrappers.MapKeySet$ = dart.generic(E => {
    var ELToboolL = () => (ELToboolL = dart.constFn(dart.fnType(core.bool, [E])))();
    var SetOfEL = () => (SetOfEL = dart.constFn(core.Set$(E)))();
    const _DelegatingIterableBase_UnmodifiableSetMixin$36 = class _DelegatingIterableBase_UnmodifiableSetMixin extends wrappers._DelegatingIterableBase$(E) {};
    (_DelegatingIterableBase_UnmodifiableSetMixin$36.new = function() {
      _DelegatingIterableBase_UnmodifiableSetMixin$36.__proto__.new.call(this);
    }).prototype = _DelegatingIterableBase_UnmodifiableSetMixin$36.prototype;
    dart.applyMixin(_DelegatingIterableBase_UnmodifiableSetMixin$36, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class MapKeySet extends _DelegatingIterableBase_UnmodifiableSetMixin$36 {
      get [_base$]() {
        return this[_baseMap][$keys];
      }
      cast(T) {
        if (wrappers.MapKeySet$(T).is(this)) {
          return wrappers.MapKeySet$(T).as(this);
        }
        return core.Set.castFrom(E, T, this);
      }
      contains(element) {
        return this[_baseMap][$containsKey](element);
      }
      get isEmpty() {
        return this[_baseMap][$isEmpty];
      }
      get isNotEmpty() {
        return this[_baseMap][$isNotEmpty];
      }
      get length() {
        return this[_baseMap][$length];
      }
      toString() {
        return "{" + dart.str(this[_base$][$join](", ")) + "}";
      }
      containsAll(other) {
        return other[$every](dart.bind(this, 'contains'));
      }
      difference(other) {
        return this.where(dart.fn(element => !dart.test(other.contains(element)), ELToboolL()))[$toSet]();
      }
      intersection(other) {
        return this.where(dart.bind(other, 'contains'))[$toSet]();
      }
      lookup(element) {
        return dart.throw(new core.UnsupportedError.new("MapKeySet doesn't support lookup()."));
      }
      retype(T) {
        return core.Set.castFrom(E, T, this);
      }
      union(other) {
        let t0;
        SetOfEL().as(other);
        t0 = this.toSet();
        t0.addAll(other);
        return t0;
      }
    }
    (MapKeySet.new = function(base) {
      this[_baseMap] = base;
      MapKeySet.__proto__.new.call(this);
      ;
    }).prototype = MapKeySet.prototype;
    dart.addTypeTests(MapKeySet);
    MapKeySet.prototype[_is_MapKeySet_default] = true;
    dart.addTypeCaches(MapKeySet);
    dart.setMethodSignature(MapKeySet, () => ({
      __proto__: dart.getMethods(MapKeySet.__proto__),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      union: dart.fnType(core.Set$(E), [core.Object])
    }));
    dart.setGetterSignature(MapKeySet, () => ({
      __proto__: dart.getGetters(MapKeySet.__proto__),
      [_base$]: core.Iterable$(E)
    }));
    dart.setLibraryUri(MapKeySet, L2);
    dart.setFieldSignature(MapKeySet, () => ({
      __proto__: dart.getFields(MapKeySet.__proto__),
      [_baseMap]: dart.finalFieldType(core.Map$(E, dart.dynamic))
    }));
    dart.defineExtensionMethods(MapKeySet, ['cast', 'contains', 'toString']);
    dart.defineExtensionAccessors(MapKeySet, ['isEmpty', 'isNotEmpty', 'length']);
    return MapKeySet;
  });
  wrappers.MapKeySet = wrappers.MapKeySet$();
  dart.addTypeTests(wrappers.MapKeySet, _is_MapKeySet_default);
  var _keyForValue = dart.privateName(wrappers, "_keyForValue");
  const _is_MapValueSet_default = Symbol('_is_MapValueSet_default');
  wrappers.MapValueSet$ = dart.generic((K, V) => {
    var KLAndVLToNullN = () => (KLAndVLToNullN = dart.constFn(dart.fnType(core.Null, [K, V])))();
    var VoidToVL = () => (VoidToVL = dart.constFn(dart.fnType(V, [])))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(V)))();
    var VLToboolL = () => (VLToboolL = dart.constFn(dart.fnType(core.bool, [V])))();
    var _IdentityHashSetOfVL = () => (_IdentityHashSetOfVL = dart.constFn(collection._IdentityHashSet$(V)))();
    var SetOfVL = () => (SetOfVL = dart.constFn(core.Set$(V)))();
    class MapValueSet extends wrappers._DelegatingIterableBase$(V) {
      get [_base$]() {
        return this[_baseMap][$values];
      }
      cast(T) {
        if (core.Set$(T).is(this)) {
          return core.Set$(T).as(this);
        }
        return core.Set.castFrom(V, T, this);
      }
      contains(element) {
        let t0;
        if (element != null && !V.is(element)) return false;
        let key = (t0 = V.as(element), this[_keyForValue](t0));
        return this[_baseMap][$containsKey](key);
      }
      get isEmpty() {
        return this[_baseMap][$isEmpty];
      }
      get isNotEmpty() {
        return this[_baseMap][$isNotEmpty];
      }
      get length() {
        return this[_baseMap][$length];
      }
      toString() {
        return dart.toString(this.toSet());
      }
      add(value) {
        let t0;
        V.as(value);
        let key = (t0 = value, this[_keyForValue](t0));
        let result = false;
        this[_baseMap][$putIfAbsent](key, dart.fn(() => {
          result = true;
          return value;
        }, VoidToVL()));
        return result;
      }
      addAll(elements) {
        IterableOfVL().as(elements);
        return elements[$forEach](dart.bind(this, 'add'));
      }
      clear() {
        return this[_baseMap][$clear]();
      }
      containsAll(other) {
        return other[$every](dart.bind(this, 'contains'));
      }
      difference(other) {
        return this.where(dart.fn(element => !dart.test(other.contains(element)), VLToboolL()))[$toSet]();
      }
      intersection(other) {
        return this.where(dart.bind(other, 'contains'))[$toSet]();
      }
      lookup(element) {
        let t0;
        if (element != null && !V.is(element)) return null;
        let key = (t0 = V.as(element), this[_keyForValue](t0));
        return this[_baseMap][$_get](key);
      }
      remove(element) {
        let t0;
        if (element != null && !V.is(element)) return false;
        let key = (t0 = V.as(element), this[_keyForValue](t0));
        if (!dart.test(this[_baseMap][$containsKey](key))) return false;
        this[_baseMap][$remove](key);
        return true;
      }
      removeAll(elements) {
        return elements[$forEach](dart.bind(this, 'remove'));
      }
      removeWhere(test) {
        let toRemove = [];
        this[_baseMap][$forEach](dart.fn((key, value) => {
          if (dart.test(test(value))) toRemove[$add](key);
        }, KLAndVLToNullN()));
        toRemove[$forEach](dart.bind(this[_baseMap], $remove));
      }
      retainAll(elements) {
        let t0;
        let valuesToRetain = new (_IdentityHashSetOfVL()).new();
        for (let element of elements) {
          if (element != null && !V.is(element)) continue;
          let key = (t0 = V.as(element), this[_keyForValue](t0));
          if (!dart.test(this[_baseMap][$containsKey](key))) continue;
          valuesToRetain.add(this[_baseMap][$_get](key));
        }
        let keysToRemove = [];
        this[_baseMap][$forEach](dart.fn((k, v) => {
          if (!dart.test(valuesToRetain.contains(v))) keysToRemove[$add](k);
        }, KLAndVLToNullN()));
        keysToRemove[$forEach](dart.bind(this[_baseMap], $remove));
      }
      retainWhere(test) {
        return this.removeWhere(dart.fn(element => !dart.test(test(element)), VLToboolL()));
      }
      retype(T) {
        return core.Set.castFrom(V, T, this);
      }
      union(other) {
        let t0;
        SetOfVL().as(other);
        t0 = this.toSet();
        t0.addAll(other);
        return t0;
      }
    }
    (MapValueSet.new = function(base, keyForValue) {
      this[_baseMap] = base;
      this[_keyForValue] = keyForValue;
      MapValueSet.__proto__.new.call(this);
      ;
    }).prototype = MapValueSet.prototype;
    dart.addTypeTests(MapValueSet);
    MapValueSet.prototype[_is_MapValueSet_default] = true;
    dart.addTypeCaches(MapValueSet);
    MapValueSet[dart.implements] = () => [core.Set$(V)];
    dart.setMethodSignature(MapValueSet, () => ({
      __proto__: dart.getMethods(MapValueSet.__proto__),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      lookup: dart.fnType(V, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      union: dart.fnType(core.Set$(V), [core.Object])
    }));
    dart.setGetterSignature(MapValueSet, () => ({
      __proto__: dart.getGetters(MapValueSet.__proto__),
      [_base$]: core.Iterable$(V)
    }));
    dart.setLibraryUri(MapValueSet, L2);
    dart.setFieldSignature(MapValueSet, () => ({
      __proto__: dart.getFields(MapValueSet.__proto__),
      [_baseMap]: dart.finalFieldType(core.Map$(K, V)),
      [_keyForValue]: dart.finalFieldType(dart.fnType(K, [V]))
    }));
    dart.defineExtensionMethods(MapValueSet, ['cast', 'contains', 'toString']);
    dart.defineExtensionAccessors(MapValueSet, ['isEmpty', 'isNotEmpty', 'length']);
    return MapValueSet;
  });
  wrappers.MapValueSet = wrappers.MapValueSet$();
  dart.addTypeTests(wrappers.MapValueSet, _is_MapValueSet_default);
  const _is_NonGrowableListMixin_default = Symbol('_is_NonGrowableListMixin_default');
  unmodifiable_wrappers.NonGrowableListMixin$ = dart.generic(E => {
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(E)))();
    class NonGrowableListMixin extends core.Object {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot change the length of a fixed-length list"));
      }
      set length(newLength) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      add(value) {
        E.as(value);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(core.bool);
      }
      addAll(iterable) {
        IterableOfEL().as(iterable);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      insert(index, element) {
        E.as(element);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      insertAll(index, iterable) {
        IterableOfEL().as(iterable);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      remove(value) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(core.bool);
      }
      removeAt(index) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(E);
      }
      removeLast() {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(E);
      }
      removeWhere(test) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      retainWhere(test) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      removeRange(start, end) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      replaceRange(start, end, iterable) {
        IterableOfEL().as(iterable);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      clear() {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (NonGrowableListMixin.new = function() {
      ;
    }).prototype = NonGrowableListMixin.prototype;
    NonGrowableListMixin.prototype[dart.isList] = true;
    dart.addTypeTests(NonGrowableListMixin);
    NonGrowableListMixin.prototype[_is_NonGrowableListMixin_default] = true;
    dart.addTypeCaches(NonGrowableListMixin);
    NonGrowableListMixin[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(NonGrowableListMixin, () => ({
      __proto__: dart.getMethods(NonGrowableListMixin.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      [$add]: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(NonGrowableListMixin, () => ({
      __proto__: dart.getSetters(NonGrowableListMixin.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(NonGrowableListMixin, L3);
    dart.defineExtensionMethods(NonGrowableListMixin, [
      'add',
      'addAll',
      'insert',
      'insertAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'removeRange',
      'replaceRange',
      'clear'
    ]);
    dart.defineExtensionAccessors(NonGrowableListMixin, ['length']);
    return NonGrowableListMixin;
  });
  unmodifiable_wrappers.NonGrowableListMixin = unmodifiable_wrappers.NonGrowableListMixin$();
  dart.addTypeTests(unmodifiable_wrappers.NonGrowableListMixin, _is_NonGrowableListMixin_default);
  const _is_NonGrowableListView_default = Symbol('_is_NonGrowableListView_default');
  unmodifiable_wrappers.NonGrowableListView$ = dart.generic(E => {
    const DelegatingList_NonGrowableListMixin$36 = class DelegatingList_NonGrowableListMixin extends wrappers.DelegatingList$(E) {};
    (DelegatingList_NonGrowableListMixin$36.new = function(base) {
      DelegatingList_NonGrowableListMixin$36.__proto__.new.call(this, base);
    }).prototype = DelegatingList_NonGrowableListMixin$36.prototype;
    dart.applyMixin(DelegatingList_NonGrowableListMixin$36, unmodifiable_wrappers.NonGrowableListMixin$(E));
    class NonGrowableListView extends DelegatingList_NonGrowableListMixin$36 {}
    (NonGrowableListView.new = function(listBase) {
      NonGrowableListView.__proto__.new.call(this, listBase);
      ;
    }).prototype = NonGrowableListView.prototype;
    dart.addTypeTests(NonGrowableListView);
    NonGrowableListView.prototype[_is_NonGrowableListView_default] = true;
    dart.addTypeCaches(NonGrowableListView);
    dart.setLibraryUri(NonGrowableListView, L3);
    return NonGrowableListView;
  });
  unmodifiable_wrappers.NonGrowableListView = unmodifiable_wrappers.NonGrowableListView$();
  dart.addTypeTests(unmodifiable_wrappers.NonGrowableListView, _is_NonGrowableListView_default);
  const _is_UnmodifiableSetView_default = Symbol('_is_UnmodifiableSetView_default');
  unmodifiable_wrappers.UnmodifiableSetView$ = dart.generic(E => {
    const DelegatingSet_UnmodifiableSetMixin$36 = class DelegatingSet_UnmodifiableSetMixin extends wrappers.DelegatingSet$(E) {};
    (DelegatingSet_UnmodifiableSetMixin$36.new = function(base) {
      DelegatingSet_UnmodifiableSetMixin$36.__proto__.new.call(this, base);
    }).prototype = DelegatingSet_UnmodifiableSetMixin$36.prototype;
    dart.applyMixin(DelegatingSet_UnmodifiableSetMixin$36, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class UnmodifiableSetView extends DelegatingSet_UnmodifiableSetMixin$36 {}
    (UnmodifiableSetView.new = function(setBase) {
      UnmodifiableSetView.__proto__.new.call(this, setBase);
      ;
    }).prototype = UnmodifiableSetView.prototype;
    dart.addTypeTests(UnmodifiableSetView);
    UnmodifiableSetView.prototype[_is_UnmodifiableSetView_default] = true;
    dart.addTypeCaches(UnmodifiableSetView);
    dart.setLibraryUri(UnmodifiableSetView, L3);
    return UnmodifiableSetView;
  });
  unmodifiable_wrappers.UnmodifiableSetView = unmodifiable_wrappers.UnmodifiableSetView$();
  dart.addTypeTests(unmodifiable_wrappers.UnmodifiableSetView, _is_UnmodifiableSetView_default);
  const _is_UnmodifiableMapMixin_default = Symbol('_is_UnmodifiableMapMixin_default');
  unmodifiable_wrappers.UnmodifiableMapMixin$ = dart.generic((K, V) => {
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(K, V)))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.fnType(V, [])))();
    class UnmodifiableMapMixin extends core.Object {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Map"));
      }
      _set(key, value$) {
        let value = value$;
        K.as(key);
        V.as(value);
        unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
        return value$;
      }
      putIfAbsent(key, ifAbsent) {
        K.as(key);
        VoidToLVL().as(ifAbsent);
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(V);
      }
      addAll(other) {
        MapOfKL$VL().as(other);
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      remove(key) {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(V);
      }
      clear() {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      set first(_) {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      set last(_) {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
    }
    (UnmodifiableMapMixin.new = function() {
      ;
    }).prototype = UnmodifiableMapMixin.prototype;
    UnmodifiableMapMixin.prototype[dart.isMap] = true;
    dart.addTypeTests(UnmodifiableMapMixin);
    UnmodifiableMapMixin.prototype[_is_UnmodifiableMapMixin_default] = true;
    dart.addTypeCaches(UnmodifiableMapMixin);
    UnmodifiableMapMixin[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(UnmodifiableMapMixin, () => ({
      __proto__: dart.getMethods(UnmodifiableMapMixin.__proto__),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(UnmodifiableMapMixin, () => ({
      __proto__: dart.getSetters(UnmodifiableMapMixin.__proto__),
      first: dart.dynamic,
      last: dart.dynamic
    }));
    dart.setLibraryUri(UnmodifiableMapMixin, L3);
    dart.defineExtensionMethods(UnmodifiableMapMixin, [
      '_set',
      'putIfAbsent',
      'addAll',
      'remove',
      'clear'
    ]);
    return UnmodifiableMapMixin;
  });
  unmodifiable_wrappers.UnmodifiableMapMixin = unmodifiable_wrappers.UnmodifiableMapMixin$();
  dart.addTypeTests(unmodifiable_wrappers.UnmodifiableMapMixin, _is_UnmodifiableMapMixin_default);
  var _base$2 = dart.privateName(empty_unmodifiable_set, "_base");
  var C0;
  var _setBase$ = dart.privateName(empty_unmodifiable_set, "_setBase");
  var C1;
  const _is_EmptyUnmodifiableSet_default = Symbol('_is_EmptyUnmodifiableSet_default');
  empty_unmodifiable_set.EmptyUnmodifiableSet$ = dart.generic(E => {
    var EmptyIterableOfEL = () => (EmptyIterableOfEL = dart.constFn(_internal.EmptyIterable$(E)))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(E)))();
    var LinkedHashSetOfEL = () => (LinkedHashSetOfEL = dart.constFn(collection.LinkedHashSet$(E)))();
    var VoidToLEL = () => (VoidToLEL = dart.constFn(dart.fnType(E, [])))();
    var SetOfEL = () => (SetOfEL = dart.constFn(core.Set$(E)))();
    class EmptyUnmodifiableSet extends collection.IterableBase$(E) {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Set"));
      }
      get iterator() {
        return new (EmptyIterableOfEL()).new()[$iterator];
      }
      get length() {
        return 0;
      }
      cast(T) {
        return new (empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      contains(element) {
        return false;
      }
      containsAll(other) {
        return other[$isEmpty];
      }
      followedBy(other) {
        IterableOfEL().as(other);
        return LinkedHashSetOfEL().from(other);
      }
      lookup(element) {
        return null;
      }
      retype(T) {
        return new (empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return super[$singleWhere](test);
      }
      whereType(T) {
        return new (empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      toSet() {
        return LinkedHashSetOfEL().new();
      }
      union(other) {
        SetOfEL().as(other);
        return LinkedHashSetOfEL().from(other);
      }
      intersection(other) {
        return LinkedHashSetOfEL().new();
      }
      difference(other) {
        return LinkedHashSetOfEL().new();
      }
      add(value) {
        E.as(value);
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(core.bool);
      }
      addAll(elements) {
        IterableOfEL().as(elements);
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      clear() {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      remove(element) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(core.bool);
      }
      removeAll(elements) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      removeWhere(test) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      retainWhere(test) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      retainAll(elements) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      get [_base$]() {
        return IterableOfEL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
      }
      get [_setBase]() {
        return SetOfEL().as(this[$noSuchMethod](new core._Invocation.getter(C1 || CT.C1)));
      }
    }
    (EmptyUnmodifiableSet.new = function() {
      EmptyUnmodifiableSet.__proto__.new.call(this);
      ;
    }).prototype = EmptyUnmodifiableSet.prototype;
    dart.addTypeTests(EmptyUnmodifiableSet);
    EmptyUnmodifiableSet.prototype[_is_EmptyUnmodifiableSet_default] = true;
    dart.addTypeCaches(EmptyUnmodifiableSet);
    EmptyUnmodifiableSet[dart.implements] = () => [unmodifiable_wrappers.UnmodifiableSetView$(E)];
    dart.setMethodSignature(EmptyUnmodifiableSet, () => ({
      __proto__: dart.getMethods(EmptyUnmodifiableSet.__proto__),
      cast: dart.gFnType(T => [empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []]),
      [$cast]: dart.gFnType(T => [empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []]),
      union: dart.fnType(core.Set$(E), [core.Object]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)])
    }));
    dart.setGetterSignature(EmptyUnmodifiableSet, () => ({
      __proto__: dart.getGetters(EmptyUnmodifiableSet.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      [_base$]: core.Iterable$(E),
      [_setBase]: core.Set$(E)
    }));
    dart.setLibraryUri(EmptyUnmodifiableSet, L4);
    dart.defineExtensionMethods(EmptyUnmodifiableSet, [
      'cast',
      'contains',
      'followedBy',
      'singleWhere',
      'whereType',
      'toSet'
    ]);
    dart.defineExtensionAccessors(EmptyUnmodifiableSet, ['iterator', 'length']);
    return EmptyUnmodifiableSet;
  });
  empty_unmodifiable_set.EmptyUnmodifiableSet = empty_unmodifiable_set.EmptyUnmodifiableSet$();
  dart.addTypeTests(empty_unmodifiable_set.EmptyUnmodifiableSet, _is_EmptyUnmodifiableSet_default);
  dart.trackLibraries("packages/collection/src/canonicalized_map", {
    "package:collection/src/canonicalized_map.dart": canonicalized_map,
    "package:collection/src/wrappers.dart": wrappers,
    "package:collection/src/unmodifiable_wrappers.dart": unmodifiable_wrappers,
    "package:collection/src/empty_unmodifiable_set.dart": empty_unmodifiable_set
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["canonicalized_map.dart","wrappers.dart","unmodifiable_wrappers.dart","empty_unmodifiable_set.dart"],"names":[],"mappings":"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","file":"canonicalized_map.ddc.js"}');
  // Exports:
  return {
    src__canonicalized_map: canonicalized_map,
    src__wrappers: wrappers,
    src__unmodifiable_wrappers: unmodifiable_wrappers,
    src__empty_unmodifiable_set: empty_unmodifiable_set
  };
});

//# sourceMappingURL=canonicalized_map.ddc.js.map
