define(['dart_sdk', 'packages/collection/src/comparators'], function(dart_sdk, packages__collection__src__comparators) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const equality = packages__collection__src__comparators.src__equality;
  var version_union = Object.create(dart.library);
  var version_range = Object.create(dart.library);
  var version_constraint = Object.create(dart.library);
  var version$ = Object.create(dart.library);
  var patterns = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var pub_semver = Object.create(dart.library);
  var $any = dartx.any;
  var $iterator = dartx.iterator;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $single = dartx.single;
  var $first = dartx.first;
  var $last = dartx.last;
  var $join = dartx.join;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $every = dartx.every;
  var $compareTo = dartx.compareTo;
  var $trim = dartx.trim;
  var $substring = dartx.substring;
  var $startsWith = dartx.startsWith;
  var $isNotEmpty = dartx.isNotEmpty;
  var $expand = dartx.expand;
  var $toList = dartx.toList;
  var $sort = dartx.sort;
  var $_set = dartx._set;
  var $split = dartx.split;
  var $map = dartx.map;
  var $_get = dartx._get;
  var $noSuchMethod = dartx.noSuchMethod;
  var VersionRangeLToboolL = () => (VersionRangeLToboolL = dart.constFn(dart.fnType(core.bool, [version_range.VersionRange])))();
  var JSArrayOfVersionRangeL = () => (JSArrayOfVersionRangeL = dart.constFn(_interceptors.JSArray$(version_range.VersionRange)))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(core.bool, [])))();
  var __ToboolL = () => (__ToboolL = dart.constFn(dart.fnType(core.bool, [], {includeCurrent: core.bool}, {})))();
  var JSArrayOfVersionConstraintL = () => (JSArrayOfVersionConstraintL = dart.constFn(_interceptors.JSArray$(version_constraint.VersionConstraint)))();
  var DefaultEqualityOfNullN = () => (DefaultEqualityOfNullN = dart.constFn(equality.DefaultEquality$(core.Null)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToVersionL = () => (VoidToVersionL = dart.constFn(dart.fnType(version$.Version, [])))();
  var VoidToVersionRangeL = () => (VoidToVersionRangeL = dart.constFn(dart.fnType(version_range.VersionRange, [])))();
  var VoidToVersionConstraintL = () => (VoidToVersionConstraintL = dart.constFn(dart.fnType(version_constraint.VersionConstraint, [])))();
  var ListOfVersionRangeL = () => (ListOfVersionRangeL = dart.constFn(core.List$(version_range.VersionRange)))();
  var VersionConstraintLToListLOfVersionRangeL = () => (VersionConstraintLToListLOfVersionRangeL = dart.constFn(dart.fnType(ListOfVersionRangeL(), [version_constraint.VersionConstraint])))();
  var StringLToObjectL = () => (StringLToObjectL = dart.constFn(dart.fnType(core.Object, [core.String])))();
  const CT = Object.create(null);
  var L4 = "package:pub_semver/src/version_constraint.dart";
  var L3 = "package:pub_semver/src/version_range.dart";
  var L0 = "file:///private/var/folders/7w/q7gbtlmj7jd5j1gvyhp2p8880000gn/T/scratch_space5vCb0r/packages/pub_semver/src/version_union.dart";
  var L2 = "file:///private/var/folders/7w/q7gbtlmj7jd5j1gvyhp2p8880000gn/T/scratch_space5vCb0r/packages/pub_semver/src/version_range.dart";
  var L5 = "package:pub_semver/src/version.dart";
  var L1 = "package:pub_semver/src/version_union.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: DefaultEqualityOfNullN().prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: equality.ListEquality.prototype,
        [ListEquality__elementEquality]: C1 || CT.C1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Cannot parse an empty string."
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: version_constraint._EmptyVersion.prototype
      });
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_compareMax', _compareMax$));
    },
    get C5() {
      return C5 = dart.const({
        __proto__: equality.IterableEquality.prototype,
        [IterableEquality__elementEquality]: C1 || CT.C1
      });
    }
  }, false);
  var _rangesFor = dart.privateName(version_union, "_rangesFor");
  var C1;
  var ListEquality__elementEquality = dart.privateName(equality, "ListEquality._elementEquality");
  var C0;
  var ranges$ = dart.privateName(version_union, "VersionUnion.ranges");
  version_union.VersionUnion = class VersionUnion extends core.Object {
    get ranges() {
      return this[ranges$];
    }
    set ranges(value) {
      super.ranges = value;
    }
    get isEmpty() {
      return false;
    }
    get isAny() {
      return false;
    }
    allows(version) {
      return this.ranges[$any](dart.fn(constraint => constraint.allows(version), VersionRangeLToboolL()));
    }
    allowsAll(other) {
      let ourRanges = this.ranges[$iterator];
      let theirRanges = this[_rangesFor](other)[$iterator];
      ourRanges.moveNext();
      theirRanges.moveNext();
      while (ourRanges.current != null && theirRanges.current != null) {
        if (dart.test(ourRanges.current.allowsAll(theirRanges.current))) {
          theirRanges.moveNext();
        } else {
          ourRanges.moveNext();
        }
      }
      return theirRanges.current == null;
    }
    allowsAny(other) {
      let ourRanges = this.ranges[$iterator];
      let theirRanges = this[_rangesFor](other)[$iterator];
      ourRanges.moveNext();
      theirRanges.moveNext();
      while (ourRanges.current != null && theirRanges.current != null) {
        if (dart.test(ourRanges.current.allowsAny(theirRanges.current))) {
          return true;
        }
        if (dart.test(utils.allowsHigher(theirRanges.current, ourRanges.current))) {
          ourRanges.moveNext();
        } else {
          theirRanges.moveNext();
        }
      }
      return false;
    }
    intersect(other) {
      let ourRanges = this.ranges[$iterator];
      let theirRanges = this[_rangesFor](other)[$iterator];
      let newRanges = JSArrayOfVersionRangeL().of([]);
      ourRanges.moveNext();
      theirRanges.moveNext();
      while (ourRanges.current != null && theirRanges.current != null) {
        let intersection = ourRanges.current.intersect(theirRanges.current);
        if (!dart.test(intersection.isEmpty)) newRanges[$add](version_range.VersionRange.as(intersection));
        if (dart.test(utils.allowsHigher(theirRanges.current, ourRanges.current))) {
          ourRanges.moveNext();
        } else {
          theirRanges.moveNext();
        }
      }
      if (dart.test(newRanges[$isEmpty])) return version_constraint.VersionConstraint.empty;
      if (newRanges[$length] === 1) return newRanges[$single];
      return new version_union.VersionUnion.fromRanges(newRanges);
    }
    difference(other) {
      let ourRanges = this.ranges[$iterator];
      let theirRanges = this[_rangesFor](other)[$iterator];
      let newRanges = JSArrayOfVersionRangeL().of([]);
      ourRanges.moveNext();
      theirRanges.moveNext();
      let current = ourRanges.current;
      function theirNextRange() {
        if (dart.test(theirRanges.moveNext())) return true;
        newRanges[$add](current);
        while (dart.test(ourRanges.moveNext())) {
          newRanges[$add](ourRanges.current);
        }
        return false;
      }
      dart.fn(theirNextRange, VoidToboolL());
      function ourNextRange(opts) {
        let includeCurrent = opts && 'includeCurrent' in opts ? opts.includeCurrent : true;
        if (dart.test(includeCurrent)) newRanges[$add](current);
        if (!dart.test(ourRanges.moveNext())) return false;
        current = ourRanges.current;
        return true;
      }
      dart.fn(ourNextRange, __ToboolL());
      for (;;) {
        if (dart.test(utils.strictlyLower(theirRanges.current, current))) {
          if (!dart.test(theirNextRange())) break;
          continue;
        }
        if (dart.test(utils.strictlyHigher(theirRanges.current, current))) {
          if (!dart.test(ourNextRange())) break;
          continue;
        }
        let difference = current.difference(theirRanges.current);
        if (version_union.VersionUnion.is(difference)) {
          if (!(difference.ranges[$length] === 2)) dart.assertFailed(null, L0, 171, 16, "difference.ranges.length == 2");
          newRanges[$add](difference.ranges[$first]);
          current = difference.ranges[$last];
          if (!dart.test(theirNextRange())) break;
        } else if (dart.test(difference.isEmpty)) {
          if (!dart.test(ourNextRange({includeCurrent: false}))) break;
        } else {
          current = version_range.VersionRange.as(difference);
          if (dart.test(utils.allowsHigher(current, theirRanges.current))) {
            if (!dart.test(theirNextRange())) break;
          } else {
            if (!dart.test(ourNextRange())) break;
          }
        }
      }
      if (dart.test(newRanges[$isEmpty])) return version_constraint.VersionConstraint.empty;
      if (newRanges[$length] === 1) return newRanges[$single];
      return new version_union.VersionUnion.fromRanges(newRanges);
    }
    [_rangesFor](constraint) {
      if (dart.test(constraint.isEmpty)) return JSArrayOfVersionRangeL().of([]);
      if (version_union.VersionUnion.is(constraint)) return constraint.ranges;
      if (version_range.VersionRange.is(constraint)) return JSArrayOfVersionRangeL().of([constraint]);
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(constraint) + "."));
    }
    union(other) {
      return version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraintL().of([this, other]));
    }
    _equals(other) {
      if (other == null) return false;
      return version_union.VersionUnion.is(other) && dart.test((C0 || CT.C0).equals(this.ranges, other.ranges));
    }
    get hashCode() {
      return (C0 || CT.C0).hash(this.ranges);
    }
    toString() {
      return this.ranges[$join](" or ");
    }
  };
  (version_union.VersionUnion.fromRanges = function(ranges) {
    this[ranges$] = ranges;
    ;
  }).prototype = version_union.VersionUnion.prototype;
  dart.addTypeTests(version_union.VersionUnion);
  dart.addTypeCaches(version_union.VersionUnion);
  version_union.VersionUnion[dart.implements] = () => [version_constraint.VersionConstraint];
  dart.setMethodSignature(version_union.VersionUnion, () => ({
    __proto__: dart.getMethods(version_union.VersionUnion.__proto__),
    allows: dart.fnType(core.bool, [version$.Version]),
    allowsAll: dart.fnType(core.bool, [version_constraint.VersionConstraint]),
    allowsAny: dart.fnType(core.bool, [version_constraint.VersionConstraint]),
    intersect: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    difference: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    [_rangesFor]: dart.fnType(core.List$(version_range.VersionRange), [version_constraint.VersionConstraint]),
    union: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(version_union.VersionUnion, () => ({
    __proto__: dart.getGetters(version_union.VersionUnion.__proto__),
    isEmpty: core.bool,
    isAny: core.bool
  }));
  dart.setLibraryUri(version_union.VersionUnion, L1);
  dart.setFieldSignature(version_union.VersionUnion, () => ({
    __proto__: dart.getFields(version_union.VersionUnion.__proto__),
    ranges: dart.finalFieldType(core.List$(version_range.VersionRange))
  }));
  dart.defineExtensionMethods(version_union.VersionUnion, ['_equals', 'toString']);
  dart.defineExtensionAccessors(version_union.VersionUnion, ['hashCode']);
  var _compareMax = dart.privateName(version_range, "_compareMax");
  var min$ = dart.privateName(version_range, "VersionRange.min");
  var max$ = dart.privateName(version_range, "VersionRange.max");
  var includeMin$ = dart.privateName(version_range, "VersionRange.includeMin");
  var includeMax$ = dart.privateName(version_range, "VersionRange.includeMax");
  version_range.VersionRange = class VersionRange extends core.Object {
    get min() {
      return this[min$];
    }
    set min(value) {
      super.min = value;
    }
    get max() {
      return this[max$];
    }
    set max(value) {
      super.max = value;
    }
    get includeMin() {
      return this[includeMin$];
    }
    set includeMin(value) {
      super.includeMin = value;
    }
    get includeMax() {
      return this[includeMax$];
    }
    set includeMax(value) {
      super.includeMax = value;
    }
    static new(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      let includeMin = opts && 'includeMin' in opts ? opts.includeMin : false;
      let includeMax = opts && 'includeMax' in opts ? opts.includeMax : false;
      let alwaysIncludeMaxPreRelease = opts && 'alwaysIncludeMaxPreRelease' in opts ? opts.alwaysIncludeMaxPreRelease : false;
      if (min != null && max != null && dart.test(min['>'](max))) {
        dart.throw(new core.ArgumentError.new("Minimum version (\"" + dart.str(min) + "\") must be less than maximum (\"" + dart.str(max) + "\")."));
      }
      if (!dart.test(alwaysIncludeMaxPreRelease) && !dart.test(includeMax) && max != null && !dart.test(max.isPreRelease) && dart.test(max.build[$isEmpty]) && (min == null || !dart.test(min.isPreRelease) || !dart.test(utils.equalsWithoutPreRelease(min, max)))) {
        max = max.firstPreRelease;
      }
      return new version_range.VersionRange.__(min, max, includeMin, includeMax);
    }
    _equals(other) {
      if (other == null) return false;
      if (!version_range.VersionRange.is(other)) return false;
      return dart.equals(this.min, dart.dload(other, 'min')) && dart.equals(this.max, dart.dload(other, 'max')) && dart.equals(this.includeMin, dart.dload(other, 'includeMin')) && dart.equals(this.includeMax, dart.dload(other, 'includeMax'));
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.min)) ^ dart.notNull(dart.hashCode(this.max)) * 3 ^ dart.hashCode(this.includeMin) * 5 ^ dart.hashCode(this.includeMax) * 7) >>> 0;
    }
    get isEmpty() {
      return false;
    }
    get isAny() {
      return this.min == null && this.max == null;
    }
    allows(other) {
      if (this.min != null) {
        if (dart.test(other['<'](this.min))) return false;
        if (!dart.test(this.includeMin) && dart.equals(other, this.min)) return false;
      }
      if (this.max != null) {
        if (dart.test(other['>'](this.max))) return false;
        if (!dart.test(this.includeMax) && dart.equals(other, this.max)) return false;
      }
      return true;
    }
    allowsAll(other) {
      if (dart.test(other.isEmpty)) return true;
      if (version$.Version.is(other)) return this.allows(other);
      if (version_union.VersionUnion.is(other)) {
        return other.ranges[$every](dart.bind(this, 'allowsAll'));
      }
      if (version_range.VersionRange.is(other)) {
        return !dart.test(utils.allowsLower(other, this)) && !dart.test(utils.allowsHigher(other, this));
      }
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(other) + "."));
    }
    allowsAny(other) {
      if (dart.test(other.isEmpty)) return false;
      if (version$.Version.is(other)) return this.allows(other);
      if (version_union.VersionUnion.is(other)) {
        return other.ranges[$any](dart.bind(this, 'allowsAny'));
      }
      if (version_range.VersionRange.is(other)) {
        return !dart.test(utils.strictlyLower(other, this)) && !dart.test(utils.strictlyHigher(other, this));
      }
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(other) + "."));
    }
    intersect(other) {
      if (dart.test(other.isEmpty)) return other;
      if (version_union.VersionUnion.is(other)) return other.intersect(this);
      if (version$.Version.is(other)) {
        return dart.test(this.allows(other)) ? other : version_constraint.VersionConstraint.empty;
      }
      if (version_range.VersionRange.is(other)) {
        let intersectMin = null;
        let intersectIncludeMin = null;
        if (dart.test(utils.allowsLower(this, other))) {
          if (dart.test(utils.strictlyLower(this, other))) return version_constraint.VersionConstraint.empty;
          intersectMin = other.min;
          intersectIncludeMin = other.includeMin;
        } else {
          if (dart.test(utils.strictlyLower(other, this))) return version_constraint.VersionConstraint.empty;
          intersectMin = this.min;
          intersectIncludeMin = this.includeMin;
        }
        let intersectMax = null;
        let intersectIncludeMax = null;
        if (dart.test(utils.allowsHigher(this, other))) {
          intersectMax = other.max;
          intersectIncludeMax = other.includeMax;
        } else {
          intersectMax = this.max;
          intersectIncludeMax = this.includeMax;
        }
        if (intersectMin == null && intersectMax == null) {
          return version_range.VersionRange.new();
        }
        if (dart.equals(intersectMin, intersectMax)) {
          if (!(dart.test(intersectIncludeMin) && dart.test(intersectIncludeMax))) dart.assertFailed(null, L2, 201, 16, "intersectIncludeMin && intersectIncludeMax");
          return intersectMin;
        }
        return version_range.VersionRange.new({min: intersectMin, max: intersectMax, includeMin: intersectIncludeMin, includeMax: intersectIncludeMax, alwaysIncludeMaxPreRelease: true});
      }
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(other) + "."));
    }
    union(other) {
      if (version$.Version.is(other)) {
        if (dart.test(this.allows(other))) return this;
        if (dart.equals(other, this.min)) {
          return version_range.VersionRange.new({min: this.min, max: this.max, includeMin: true, includeMax: this.includeMax, alwaysIncludeMaxPreRelease: true});
        }
        if (dart.equals(other, this.max)) {
          return version_range.VersionRange.new({min: this.min, max: this.max, includeMin: this.includeMin, includeMax: true, alwaysIncludeMaxPreRelease: true});
        }
        return version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraintL().of([this, other]));
      }
      if (version_range.VersionRange.is(other)) {
        let edgesTouch = this.max != null && dart.equals(this.max, other.min) && (dart.test(this.includeMax) || dart.test(other.includeMin)) || this.min != null && dart.equals(this.min, other.max) && (dart.test(this.includeMin) || dart.test(other.includeMax));
        if (!edgesTouch && !dart.test(this.allowsAny(other))) {
          return version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraintL().of([this, other]));
        }
        let unionMin = null;
        let unionIncludeMin = null;
        if (dart.test(utils.allowsLower(this, other))) {
          unionMin = this.min;
          unionIncludeMin = this.includeMin;
        } else {
          unionMin = other.min;
          unionIncludeMin = other.includeMin;
        }
        let unionMax = null;
        let unionIncludeMax = null;
        if (dart.test(utils.allowsHigher(this, other))) {
          unionMax = this.max;
          unionIncludeMax = this.includeMax;
        } else {
          unionMax = other.max;
          unionIncludeMax = other.includeMax;
        }
        return version_range.VersionRange.new({min: unionMin, max: unionMax, includeMin: unionIncludeMin, includeMax: unionIncludeMax, alwaysIncludeMaxPreRelease: true});
      }
      return version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraintL().of([this, other]));
    }
    difference(other) {
      let t0;
      if (dart.test(other.isEmpty)) return this;
      if (version$.Version.is(other)) {
        if (!dart.test(this.allows(other))) return this;
        if (dart.equals(other, this.min)) {
          if (!dart.test(this.includeMin)) return this;
          return version_range.VersionRange.new({min: this.min, max: this.max, includeMin: false, includeMax: this.includeMax, alwaysIncludeMaxPreRelease: true});
        }
        if (dart.equals(other, this.max)) {
          if (!dart.test(this.includeMax)) return this;
          return version_range.VersionRange.new({min: this.min, max: this.max, includeMin: this.includeMin, includeMax: false, alwaysIncludeMaxPreRelease: true});
        }
        return new version_union.VersionUnion.fromRanges(JSArrayOfVersionRangeL().of([version_range.VersionRange.new({min: this.min, max: other, includeMin: this.includeMin, includeMax: false, alwaysIncludeMaxPreRelease: true}), version_range.VersionRange.new({min: other, max: this.max, includeMin: false, includeMax: this.includeMax, alwaysIncludeMaxPreRelease: true})]));
      } else if (version_range.VersionRange.is(other)) {
        if (!dart.test(this.allowsAny(other))) return this;
        let before = null;
        if (!dart.test(utils.allowsLower(this, other))) {
          before = null;
        } else if (dart.equals(this.min, other.min)) {
          if (!(dart.test(this.includeMin) && !dart.test(other.includeMin))) dart.assertFailed(null, L2, 333, 16, "includeMin && !other.includeMin");
          if (!(this.min != null)) dart.assertFailed(null, L2, 334, 16, "min != null");
          before = this.min;
        } else {
          before = version_range.VersionRange.new({min: this.min, max: other.min, includeMin: this.includeMin, includeMax: !dart.test(other.includeMin), alwaysIncludeMaxPreRelease: true});
        }
        let after = null;
        if (!dart.test(utils.allowsHigher(this, other))) {
          after = null;
        } else if (dart.equals(this.max, other.max)) {
          if (!(dart.test(this.includeMax) && !dart.test(other.includeMax))) dart.assertFailed(null, L2, 349, 16, "includeMax && !other.includeMax");
          if (!(this.max != null)) dart.assertFailed(null, L2, 350, 16, "max != null");
          after = this.max;
        } else {
          after = version_range.VersionRange.new({min: other.max, max: this.max, includeMin: !dart.test(other.includeMax), includeMax: this.includeMax, alwaysIncludeMaxPreRelease: true});
        }
        if (before == null && after == null) return version_constraint.VersionConstraint.empty;
        if (before == null) return after;
        if (after == null) return before;
        return new version_union.VersionUnion.fromRanges(JSArrayOfVersionRangeL().of([before, after]));
      } else if (version_union.VersionUnion.is(other)) {
        let ranges = JSArrayOfVersionRangeL().of([]);
        let current = this;
        for (let range of other.ranges) {
          if (dart.test(utils.strictlyLower(range, current))) continue;
          if (dart.test(utils.strictlyHigher(range, current))) break;
          let difference = current.difference(range);
          if (dart.test(difference.isEmpty)) {
            return version_constraint.VersionConstraint.empty;
          } else if (version_union.VersionUnion.is(difference)) {
            if (!(difference.ranges[$length] === 2)) dart.assertFailed(null, L2, 383, 18, "difference.ranges.length == 2");
            ranges[$add](difference.ranges[$first]);
            current = difference.ranges[$last];
          } else {
            current = version_range.VersionRange.as(difference);
          }
        }
        if (dart.test(ranges[$isEmpty])) return current;
        return new version_union.VersionUnion.fromRanges((t0 = ranges, t0[$add](current), t0));
      }
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(other) + "."));
    }
    compareTo(other) {
      version_range.VersionRange.as(other);
      if (this.min == null) {
        if (other.min == null) return this[_compareMax](other);
        return -1;
      } else if (other.min == null) {
        return 1;
      }
      let result = this.min.compareTo(other.min);
      if (result !== 0) return result;
      if (!dart.equals(this.includeMin, other.includeMin)) return dart.test(this.includeMin) ? -1 : 1;
      return this[_compareMax](other);
    }
    [_compareMax](other) {
      if (this.max == null) {
        if (other.max == null) return 0;
        return 1;
      } else if (other.max == null) {
        return -1;
      }
      let result = this.max.compareTo(other.max);
      if (result !== 0) return result;
      if (!dart.equals(this.includeMax, other.includeMax)) return dart.test(this.includeMax) ? 1 : -1;
      return 0;
    }
    toString() {
      let t0, t0$;
      let buffer = new core.StringBuffer.new();
      if (this.min != null) {
        t0 = buffer;
        t0.write(dart.test(this.includeMin) ? ">=" : ">");
        t0.write(this.min);
        t0;
      }
      if (this.max != null) {
        if (this.min != null) buffer.write(" ");
        if (dart.test(this.includeMax)) {
          t0$ = buffer;
          t0$.write("<=");
          t0$.write(this.max);
          t0$;
        } else {
          buffer.write("<");
          if (dart.test(this.max.isFirstPreRelease)) {
            buffer.write(dart.str(this.max.major) + "." + dart.str(this.max.minor) + "." + dart.str(this.max.patch));
          } else {
            buffer.write(this.max);
            let minIsPreReleaseOfMax = this.min != null && dart.test(this.min.isPreRelease) && dart.test(utils.equalsWithoutPreRelease(this.min, this.max));
            if (!dart.test(this.max.isPreRelease) && dart.test(this.max.build[$isEmpty]) && !minIsPreReleaseOfMax) {
              buffer.write("-∞");
            }
          }
        }
      }
      if (this.min == null && this.max == null) buffer.write("any");
      return buffer.toString();
    }
  };
  (version_range.VersionRange.__ = function(min, max, includeMin, includeMax) {
    this[min$] = min;
    this[max$] = max;
    this[includeMin$] = includeMin;
    this[includeMax$] = includeMax;
    ;
  }).prototype = version_range.VersionRange.prototype;
  dart.addTypeTests(version_range.VersionRange);
  dart.addTypeCaches(version_range.VersionRange);
  version_range.VersionRange[dart.implements] = () => [core.Comparable$(version_range.VersionRange), version_constraint.VersionConstraint];
  dart.setMethodSignature(version_range.VersionRange, () => ({
    __proto__: dart.getMethods(version_range.VersionRange.__proto__),
    allows: dart.fnType(core.bool, [version$.Version]),
    allowsAll: dart.fnType(core.bool, [version_constraint.VersionConstraint]),
    allowsAny: dart.fnType(core.bool, [version_constraint.VersionConstraint]),
    intersect: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    union: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    difference: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    [_compareMax]: dart.fnType(core.int, [version_range.VersionRange])
  }));
  dart.setGetterSignature(version_range.VersionRange, () => ({
    __proto__: dart.getGetters(version_range.VersionRange.__proto__),
    isEmpty: core.bool,
    isAny: core.bool
  }));
  dart.setLibraryUri(version_range.VersionRange, L3);
  dart.setFieldSignature(version_range.VersionRange, () => ({
    __proto__: dart.getFields(version_range.VersionRange.__proto__),
    min: dart.finalFieldType(version$.Version),
    max: dart.finalFieldType(version$.Version),
    includeMin: dart.finalFieldType(core.bool),
    includeMax: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(version_range.VersionRange, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(version_range.VersionRange, ['hashCode']);
  version_range.CompatibleWithVersionRange = class CompatibleWithVersionRange extends version_range.VersionRange {
    toString() {
      return "^" + dart.str(this.min);
    }
  };
  (version_range.CompatibleWithVersionRange.new = function(version) {
    version_range.CompatibleWithVersionRange.__proto__.__.call(this, version, version.nextBreaking.firstPreRelease, true, false);
    ;
  }).prototype = version_range.CompatibleWithVersionRange.prototype;
  dart.addTypeTests(version_range.CompatibleWithVersionRange);
  dart.addTypeCaches(version_range.CompatibleWithVersionRange);
  dart.setLibraryUri(version_range.CompatibleWithVersionRange, L3);
  dart.defineExtensionMethods(version_range.CompatibleWithVersionRange, ['toString']);
  var FormatException_offset = dart.privateName(core, "FormatException.offset");
  var FormatException_source = dart.privateName(core, "FormatException.source");
  var FormatException_message = dart.privateName(core, "FormatException.message");
  var C2;
  var C3;
  version_constraint.VersionConstraint = class VersionConstraint extends core.Object {
    static parse(text) {
      let t0;
      let originalText = text;
      function skipWhitespace() {
        text = text[$trim]();
      }
      dart.fn(skipWhitespace, VoidTovoid());
      skipWhitespace();
      if (text === "any") return version_constraint.VersionConstraint.any;
      function matchVersion() {
        let version = patterns.startVersion.firstMatch(text);
        if (version == null) return null;
        text = text[$substring](version.end);
        return version$.Version.parse(version._get(0));
      }
      dart.fn(matchVersion, VoidToVersionL());
      function matchComparison() {
        let comparison = patterns.startComparison.firstMatch(text);
        if (comparison == null) return null;
        let op = comparison._get(0);
        text = text[$substring](comparison.end);
        skipWhitespace();
        let version = matchVersion();
        if (version == null) {
          dart.throw(new core.FormatException.new("Expected version number after \"" + dart.str(op) + "\" in " + "\"" + dart.str(originalText) + "\", got \"" + dart.str(text) + "\"."));
        }
        switch (op) {
          case "<=":
          {
            return version_range.VersionRange.new({max: version, includeMax: true});
          }
          case "<":
          {
            return version_range.VersionRange.new({max: version, includeMax: false, alwaysIncludeMaxPreRelease: true});
          }
          case ">=":
          {
            return version_range.VersionRange.new({min: version, includeMin: true});
          }
          case ">":
          {
            return version_range.VersionRange.new({min: version, includeMin: false});
          }
        }
        dart.throw(new core.FallThroughError.new());
      }
      dart.fn(matchComparison, VoidToVersionRangeL());
      function matchCompatibleWith() {
        if (!text[$startsWith]("^")) return null;
        text = text[$substring]("^".length);
        skipWhitespace();
        let version = matchVersion();
        if (version == null) {
          dart.throw(new core.FormatException.new("Expected version number after " + "\"" + "^" + "\" in \"" + dart.str(originalText) + "\", got \"" + dart.str(text) + "\"."));
        }
        if (text[$isNotEmpty]) {
          dart.throw(new core.FormatException.new("Cannot include other constraints with " + "\"" + "^" + "\" constraint in \"" + dart.str(originalText) + "\"."));
        }
        return version_constraint.VersionConstraint.compatibleWith(version);
      }
      dart.fn(matchCompatibleWith, VoidToVersionConstraintL());
      let compatibleWith = matchCompatibleWith();
      if (compatibleWith != null) return compatibleWith;
      let min = null;
      let includeMin = false;
      let max = null;
      let includeMax = false;
      for (;;) {
        skipWhitespace();
        if (text[$isEmpty]) break;
        let newRange = (t0 = matchVersion(), t0 == null ? matchComparison() : t0);
        if (newRange == null) {
          dart.throw(new core.FormatException.new("Could not parse version \"" + dart.str(originalText) + "\". " + "Unknown text at \"" + dart.str(text) + "\"."));
        }
        if (newRange.min != null) {
          if (min == null || dart.test(newRange.min['>'](min))) {
            min = newRange.min;
            includeMin = newRange.includeMin;
          } else if (dart.equals(newRange.min, min) && !dart.test(newRange.includeMin)) {
            includeMin = false;
          }
        }
        if (newRange.max != null) {
          if (max == null || dart.test(newRange.max['<'](max))) {
            max = newRange.max;
            includeMax = newRange.includeMax;
          } else if (dart.equals(newRange.max, max) && !dart.test(newRange.includeMax)) {
            includeMax = false;
          }
        }
      }
      if (min == null && max == null) {
        dart.throw(C2 || CT.C2);
      }
      if (min != null && max != null) {
        if (dart.test(min['>'](max))) return version_constraint.VersionConstraint.empty;
        if (dart.equals(min, max)) {
          if (dart.test(includeMin) && dart.test(includeMax)) return min;
          return version_constraint.VersionConstraint.empty;
        }
      }
      return version_range.VersionRange.new({min: min, includeMin: includeMin, max: max, includeMax: includeMax});
    }
    static compatibleWith(version) {
      return new version_range.CompatibleWithVersionRange.new(version);
    }
    static intersection(constraints) {
      let constraint = version_range.VersionRange.new();
      for (let other of constraints) {
        constraint = version_range.VersionRange.as(constraint.intersect(other));
      }
      return constraint;
    }
    static unionOf(constraints) {
      let flattened = constraints[$expand](version_range.VersionRange, dart.fn(constraint => {
        if (dart.test(constraint.isEmpty)) return JSArrayOfVersionRangeL().of([]);
        if (version_union.VersionUnion.is(constraint)) return constraint.ranges;
        if (version_range.VersionRange.is(constraint)) return JSArrayOfVersionRangeL().of([constraint]);
        dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(constraint) + "."));
      }, VersionConstraintLToListLOfVersionRangeL()))[$toList]();
      if (dart.test(flattened[$isEmpty])) return version_constraint.VersionConstraint.empty;
      if (dart.test(flattened[$any](dart.fn(constraint => constraint.isAny, VersionRangeLToboolL())))) {
        return version_constraint.VersionConstraint.any;
      }
      flattened[$sort]();
      let merged = JSArrayOfVersionRangeL().of([]);
      for (let constraint of flattened) {
        if (dart.test(merged[$isEmpty]) || !dart.test(merged[$last].allowsAny(constraint)) && !dart.test(utils.areAdjacent(merged[$last], constraint))) {
          merged[$add](constraint);
        } else {
          merged[$_set](dart.notNull(merged[$length]) - 1, version_range.VersionRange.as(merged[$last].union(constraint)));
        }
      }
      if (merged[$length] === 1) return merged[$single];
      return new version_union.VersionUnion.fromRanges(merged);
    }
  };
  (version_constraint.VersionConstraint[dart.mixinNew] = function() {
  }).prototype = version_constraint.VersionConstraint.prototype;
  dart.addTypeTests(version_constraint.VersionConstraint);
  dart.addTypeCaches(version_constraint.VersionConstraint);
  dart.setLibraryUri(version_constraint.VersionConstraint, L4);
  dart.defineLazy(version_constraint.VersionConstraint, {
    /*version_constraint.VersionConstraint.any*/get any() {
      return version_range.VersionRange.new();
    },
    set any(_) {},
    /*version_constraint.VersionConstraint.empty*/get empty() {
      return C3 || CT.C3;
    },
    set empty(_) {}
  }, true);
  version_constraint._EmptyVersion = class _EmptyVersion extends core.Object {
    get isEmpty() {
      return true;
    }
    get isAny() {
      return false;
    }
    allows(other) {
      return false;
    }
    allowsAll(other) {
      return other.isEmpty;
    }
    allowsAny(other) {
      return false;
    }
    intersect(other) {
      return this;
    }
    union(other) {
      return other;
    }
    difference(other) {
      return this;
    }
    toString() {
      return "<empty>";
    }
  };
  (version_constraint._EmptyVersion.new = function() {
    ;
  }).prototype = version_constraint._EmptyVersion.prototype;
  dart.addTypeTests(version_constraint._EmptyVersion);
  dart.addTypeCaches(version_constraint._EmptyVersion);
  version_constraint._EmptyVersion[dart.implements] = () => [version_constraint.VersionConstraint];
  dart.setMethodSignature(version_constraint._EmptyVersion, () => ({
    __proto__: dart.getMethods(version_constraint._EmptyVersion.__proto__),
    allows: dart.fnType(core.bool, [version$.Version]),
    allowsAll: dart.fnType(core.bool, [version_constraint.VersionConstraint]),
    allowsAny: dart.fnType(core.bool, [version_constraint.VersionConstraint]),
    intersect: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    union: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    difference: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint])
  }));
  dart.setGetterSignature(version_constraint._EmptyVersion, () => ({
    __proto__: dart.getGetters(version_constraint._EmptyVersion.__proto__),
    isEmpty: core.bool,
    isAny: core.bool
  }));
  dart.setLibraryUri(version_constraint._EmptyVersion, L4);
  dart.defineExtensionMethods(version_constraint._EmptyVersion, ['toString']);
  var _text$ = dart.privateName(version$, "_text");
  var _incrementMajor = dart.privateName(version$, "_incrementMajor");
  var _incrementMinor = dart.privateName(version$, "_incrementMinor");
  var _incrementPatch = dart.privateName(version$, "_incrementPatch");
  var _compareLists = dart.privateName(version$, "_compareLists");
  var _compareMax$ = dart.privateName(version$, "_compareMax");
  var C4;
  var major$ = dart.privateName(version$, "Version.major");
  var minor$ = dart.privateName(version$, "Version.minor");
  var patch$ = dart.privateName(version$, "Version.patch");
  var preRelease$ = dart.privateName(version$, "Version.preRelease");
  var build$ = dart.privateName(version$, "Version.build");
  version$.Version = class Version extends core.Object {
    get major() {
      return this[major$];
    }
    set major(value) {
      super.major = value;
    }
    get minor() {
      return this[minor$];
    }
    set minor(value) {
      super.minor = value;
    }
    get patch() {
      return this[patch$];
    }
    set patch(value) {
      super.patch = value;
    }
    get preRelease() {
      return this[preRelease$];
    }
    set preRelease(value) {
      super.preRelease = value;
    }
    get build() {
      return this[build$];
    }
    set build(value) {
      super.build = value;
    }
    static get none() {
      return version$.Version.new(0, 0, 0);
    }
    static prioritize(a, b) {
      if (dart.test(a.isPreRelease) && !dart.test(b.isPreRelease)) return -1;
      if (!dart.test(a.isPreRelease) && dart.test(b.isPreRelease)) return 1;
      return a.compareTo(b);
    }
    static antiprioritize(a, b) {
      if (dart.test(a.isPreRelease) && !dart.test(b.isPreRelease)) return -1;
      if (!dart.test(a.isPreRelease) && dart.test(b.isPreRelease)) return 1;
      return b.compareTo(a);
    }
    get min() {
      return this;
    }
    get max() {
      return this;
    }
    get includeMin() {
      return true;
    }
    get includeMax() {
      return true;
    }
    static new(major, minor, patch, opts) {
      let pre = opts && 'pre' in opts ? opts.pre : null;
      let build = opts && 'build' in opts ? opts.build : null;
      let text = dart.str(major) + "." + dart.str(minor) + "." + dart.str(patch);
      if (pre != null) text = text + ("-" + dart.str(pre));
      if (build != null) text = text + ("+" + dart.str(build));
      return new version$.Version.__(major, minor, patch, pre, build, text);
    }
    static parse(text) {
      let match = patterns.completeVersion.firstMatch(text);
      if (match == null) {
        dart.throw(new core.FormatException.new("Could not parse \"" + dart.str(text) + "\"."));
      }
      try {
        let major = core.int.parse(match._get(1));
        let minor = core.int.parse(match._get(2));
        let patch = core.int.parse(match._get(3));
        let preRelease = match._get(5);
        let build = match._get(8);
        return new version$.Version.__(major, minor, patch, preRelease, build, text);
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.FormatException.is(ex)) {
          dart.throw(new core.FormatException.new("Could not parse \"" + dart.str(text) + "\"."));
        } else
          throw e;
      }
    }
    static primary(versions) {
      let primary = null;
      for (let version of versions) {
        if (primary == null || !dart.test(version.isPreRelease) && dart.test(primary.isPreRelease) || dart.equals(version.isPreRelease, primary.isPreRelease) && dart.test(version['>'](primary))) {
          primary = version;
        }
      }
      return primary;
    }
    static _splitParts(text) {
      return text[$split](".")[$map](core.Object, dart.fn(part => {
        let t2;
        t2 = core.int.tryParse(part);
        return t2 == null ? part : t2;
      }, StringLToObjectL()))[$toList]();
    }
    _equals(other) {
      if (other == null) return false;
      return version$.Version.is(other) && this.major == other.major && this.minor == other.minor && this.patch == other.patch && dart.test(version$._equality.equals(this.preRelease, other.preRelease)) && dart.test(version$._equality.equals(this.build, other.build));
    }
    get hashCode() {
      return (dart.notNull(this.major) ^ dart.notNull(this.minor) ^ dart.notNull(this.patch) ^ dart.notNull(version$._equality.hash(this.preRelease)) ^ dart.notNull(version$._equality.hash(this.build))) >>> 0;
    }
    ['<'](other) {
      return dart.notNull(this.compareTo(other)) < 0;
    }
    ['>'](other) {
      return dart.notNull(this.compareTo(other)) > 0;
    }
    ['<='](other) {
      return dart.notNull(this.compareTo(other)) <= 0;
    }
    ['>='](other) {
      return dart.notNull(this.compareTo(other)) >= 0;
    }
    get isAny() {
      return false;
    }
    get isEmpty() {
      return false;
    }
    get isPreRelease() {
      return this.preRelease[$isNotEmpty];
    }
    get nextMajor() {
      if (dart.test(this.isPreRelease) && this.minor === 0 && this.patch === 0) {
        return version$.Version.new(this.major, this.minor, this.patch);
      }
      return this[_incrementMajor]();
    }
    get nextMinor() {
      if (dart.test(this.isPreRelease) && this.patch === 0) {
        return version$.Version.new(this.major, this.minor, this.patch);
      }
      return this[_incrementMinor]();
    }
    get nextPatch() {
      if (dart.test(this.isPreRelease)) {
        return version$.Version.new(this.major, this.minor, this.patch);
      }
      return this[_incrementPatch]();
    }
    get nextBreaking() {
      if (this.major === 0) {
        return this[_incrementMinor]();
      }
      return this[_incrementMajor]();
    }
    get firstPreRelease() {
      return version$.Version.new(this.major, this.minor, this.patch, {pre: "0"});
    }
    get isFirstPreRelease() {
      return this.preRelease[$length] === 1 && dart.equals(this.preRelease[$first], 0);
    }
    [_incrementMajor]() {
      return version$.Version.new(dart.notNull(this.major) + 1, 0, 0);
    }
    [_incrementMinor]() {
      return version$.Version.new(this.major, dart.notNull(this.minor) + 1, 0);
    }
    [_incrementPatch]() {
      return version$.Version.new(this.major, this.minor, dart.notNull(this.patch) + 1);
    }
    allows(other) {
      return this._equals(other);
    }
    allowsAll(other) {
      return dart.test(other.isEmpty) || dart.equals(other, this);
    }
    allowsAny(other) {
      return other.allows(this);
    }
    intersect(other) {
      return dart.test(other.allows(this)) ? this : version_constraint.VersionConstraint.empty;
    }
    union(other) {
      if (dart.test(other.allows(this))) return other;
      if (version_range.VersionRange.is(other)) {
        if (dart.equals(other.min, this)) {
          return version_range.VersionRange.new({min: other.min, max: other.max, includeMin: true, includeMax: other.includeMax, alwaysIncludeMaxPreRelease: true});
        }
        if (dart.equals(other.max, this)) {
          return version_range.VersionRange.new({min: other.min, max: other.max, includeMin: other.includeMin, includeMax: true, alwaysIncludeMaxPreRelease: true});
        }
      }
      return version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraintL().of([this, other]));
    }
    difference(other) {
      return dart.test(other.allows(this)) ? version_constraint.VersionConstraint.empty : this;
    }
    compareTo(other) {
      version_range.VersionRange.as(other);
      if (version$.Version.is(other)) {
        if (this.major != other.major) return this.major[$compareTo](other.major);
        if (this.minor != other.minor) return this.minor[$compareTo](other.minor);
        if (this.patch != other.patch) return this.patch[$compareTo](other.patch);
        if (!dart.test(this.isPreRelease) && dart.test(other.isPreRelease)) return 1;
        if (!dart.test(other.isPreRelease) && dart.test(this.isPreRelease)) return -1;
        let comparison = this[_compareLists](this.preRelease, other.preRelease);
        if (comparison !== 0) return comparison;
        if (dart.test(this.build[$isEmpty]) && dart.test(other.build[$isNotEmpty])) return -1;
        if (dart.test(other.build[$isEmpty]) && dart.test(this.build[$isNotEmpty])) return 1;
        return this[_compareLists](this.build, other.build);
      } else {
        return -dart.notNull(other.compareTo(this));
      }
    }
    toString() {
      return this[_text$];
    }
    [_compareLists](a, b) {
      for (let i = 0; i < math.max(core.num, a[$length], b[$length]); i = i + 1) {
        let aPart = i < dart.notNull(a[$length]) ? a[$_get](i) : null;
        let bPart = i < dart.notNull(b[$length]) ? b[$_get](i) : null;
        if (dart.equals(aPart, bPart)) continue;
        if (aPart == null) return -1;
        if (bPart == null) return 1;
        if (typeof aPart == 'number') {
          if (typeof bPart == 'number') {
            return aPart[$compareTo](bPart);
          } else {
            return -1;
          }
        } else {
          if (typeof bPart == 'number') {
            return 1;
          } else {
            return core.String.as(aPart)[$compareTo](core.String.as(bPart));
          }
        }
      }
      return 0;
    }
    [_compareMax](other) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C4 || CT.C4, null, [other])));
    }
  };
  (version$.Version.__ = function(major, minor, patch, preRelease, build, _text) {
    this[major$] = major;
    this[minor$] = minor;
    this[patch$] = patch;
    this[_text$] = _text;
    this[preRelease$] = preRelease == null ? [] : version$.Version._splitParts(preRelease);
    this[build$] = build == null ? [] : version$.Version._splitParts(build);
    if (dart.notNull(this.major) < 0) dart.throw(new core.ArgumentError.new("Major version must be non-negative."));
    if (dart.notNull(this.minor) < 0) dart.throw(new core.ArgumentError.new("Minor version must be non-negative."));
    if (dart.notNull(this.patch) < 0) dart.throw(new core.ArgumentError.new("Patch version must be non-negative."));
  }).prototype = version$.Version.prototype;
  dart.addTypeTests(version$.Version);
  dart.addTypeCaches(version$.Version);
  version$.Version[dart.implements] = () => [version_constraint.VersionConstraint, version_range.VersionRange];
  dart.setMethodSignature(version$.Version, () => ({
    __proto__: dart.getMethods(version$.Version.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    '<': dart.fnType(core.bool, [version$.Version]),
    '>': dart.fnType(core.bool, [version$.Version]),
    '<=': dart.fnType(core.bool, [version$.Version]),
    '>=': dart.fnType(core.bool, [version$.Version]),
    [_incrementMajor]: dart.fnType(version$.Version, []),
    [_incrementMinor]: dart.fnType(version$.Version, []),
    [_incrementPatch]: dart.fnType(version$.Version, []),
    allows: dart.fnType(core.bool, [version$.Version]),
    allowsAll: dart.fnType(core.bool, [version_constraint.VersionConstraint]),
    allowsAny: dart.fnType(core.bool, [version_constraint.VersionConstraint]),
    intersect: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    union: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    difference: dart.fnType(version_constraint.VersionConstraint, [version_constraint.VersionConstraint]),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    [_compareLists]: dart.fnType(core.int, [core.List, core.List]),
    [_compareMax]: dart.fnType(core.int, [version_range.VersionRange])
  }));
  dart.setGetterSignature(version$.Version, () => ({
    __proto__: dart.getGetters(version$.Version.__proto__),
    min: version$.Version,
    max: version$.Version,
    includeMin: core.bool,
    includeMax: core.bool,
    isAny: core.bool,
    isEmpty: core.bool,
    isPreRelease: core.bool,
    nextMajor: version$.Version,
    nextMinor: version$.Version,
    nextPatch: version$.Version,
    nextBreaking: version$.Version,
    firstPreRelease: version$.Version,
    isFirstPreRelease: core.bool
  }));
  dart.setLibraryUri(version$.Version, L5);
  dart.setFieldSignature(version$.Version, () => ({
    __proto__: dart.getFields(version$.Version.__proto__),
    major: dart.finalFieldType(core.int),
    minor: dart.finalFieldType(core.int),
    patch: dart.finalFieldType(core.int),
    preRelease: dart.finalFieldType(core.List),
    build: dart.finalFieldType(core.List),
    [_text$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(version$.Version, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(version$.Version, ['hashCode']);
  var IterableEquality__elementEquality = dart.privateName(equality, "IterableEquality._elementEquality");
  var C5;
  dart.defineLazy(version$, {
    /*version$._equality*/get _equality() {
      return C5 || CT.C5;
    }
  }, true);
  dart.defineLazy(patterns, {
    /*patterns.startVersion*/get startVersion() {
      return core.RegExp.new("^" + "(\\d+).(\\d+).(\\d+)" + "(-([0-9A-Za-z-]+(\\.[0-9A-Za-z-]+)*))?" + "(\\+([0-9A-Za-z-]+(\\.[0-9A-Za-z-]+)*))?");
    },
    /*patterns.completeVersion*/get completeVersion() {
      return core.RegExp.new(dart.str(patterns.startVersion.pattern) + "$");
    },
    /*patterns.startComparison*/get startComparison() {
      return core.RegExp.new("^[<>]=?");
    },
    /*patterns.compatibleWithChar*/get compatibleWithChar() {
      return "^";
    }
  }, true);
  utils.areAdjacent = function areAdjacent(range1, range2) {
    if (!dart.equals(range1.max, range2.min)) return false;
    return dart.test(range1.includeMax) && !dart.test(range2.includeMin) || !dart.test(range1.includeMax) && dart.test(range2.includeMin);
  };
  utils.allowsLower = function allowsLower(range1, range2) {
    if (range1.min == null) return range2.min != null;
    if (range2.min == null) return false;
    let comparison = range1.min.compareTo(range2.min);
    if (comparison === -1) return true;
    if (comparison === 1) return false;
    return dart.test(range1.includeMin) && !dart.test(range2.includeMin);
  };
  utils.allowsHigher = function allowsHigher(range1, range2) {
    if (range1.max == null) return range2.max != null;
    if (range2.max == null) return false;
    let comparison = range1.max.compareTo(range2.max);
    if (comparison === 1) return true;
    if (comparison === -1) return false;
    return dart.test(range1.includeMax) && !dart.test(range2.includeMax);
  };
  utils.strictlyLower = function strictlyLower(range1, range2) {
    if (range1.max == null || range2.min == null) return false;
    let comparison = range1.max.compareTo(range2.min);
    if (comparison === -1) return true;
    if (comparison === 1) return false;
    return !dart.test(range1.includeMax) || !dart.test(range2.includeMin);
  };
  utils.strictlyHigher = function strictlyHigher(range1, range2) {
    return utils.strictlyLower(range2, range1);
  };
  utils.equalsWithoutPreRelease = function equalsWithoutPreRelease(version1, version2) {
    return version1.major == version2.major && version1.minor == version2.minor && version1.patch == version2.patch;
  };
  dart.trackLibraries("packages/pub_semver/pub_semver", {
    "package:pub_semver/src/version_union.dart": version_union,
    "package:pub_semver/src/version_range.dart": version_range,
    "package:pub_semver/src/version_constraint.dart": version_constraint,
    "package:pub_semver/src/version.dart": version$,
    "package:pub_semver/src/patterns.dart": patterns,
    "package:pub_semver/src/utils.dart": utils,
    "package:pub_semver/pub_semver.dart": pub_semver
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/version_union.dart","src/version_range.dart","src/version_constraint.dart","src/version.dart","src/patterns.dart","src/utils.dart"],"names":[],"mappings":"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","file":"pub_semver.ddc.js"}');
  // Exports:
  return {
    src__version_union: version_union,
    src__version_range: version_range,
    src__version_constraint: version_constraint,
    src__version: version$,
    src__patterns: patterns,
    src__utils: utils,
    pub_semver: pub_semver
  };
});

//# sourceMappingURL=pub_semver.ddc.js.map
