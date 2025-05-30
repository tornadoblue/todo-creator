import * as O from "react";
import rr, { useState as Wr } from "react";
var he = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Dr() {
  if (Je) return ie;
  Je = 1;
  var r = rr, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, f, b) {
    var g, h = {}, C = null, j = null;
    b !== void 0 && (C = "" + b), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (j = f.ref);
    for (g in f) n.call(f, g) && !i.hasOwnProperty(g) && (h[g] = f[g]);
    if (l && l.defaultProps) for (g in f = l.defaultProps, f) h[g] === void 0 && (h[g] = f[g]);
    return { $$typeof: t, type: l, key: C, ref: j, props: h, _owner: s.current };
  }
  return ie.Fragment = o, ie.jsx = u, ie.jsxs = u, ie;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function $r() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = rr, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), A = Symbol.iterator, S = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = A && e[A] || e[S];
      return typeof a == "function" ? a : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), d = 1; d < a; d++)
          c[d - 1] = arguments[d];
        Y("error", e, c);
      }
    }
    function Y(e, a, c) {
      {
        var d = k.ReactDebugCurrentFrame, y = d.getStackAddendum();
        y !== "" && (a += "%s", c = c.concat([y]));
        var E = c.map(function(v) {
          return String(v);
        });
        E.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var W = !1, K = !1, de = !1, fe = !1, pe = !1, X;
    X = Symbol.for("react.module.reference");
    function te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === i || pe || e === s || e === b || e === g || fe || e === j || W || K || de || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === h || e.$$typeof === u || e.$$typeof === l || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function oe(e, a, c) {
      var d = e.displayName;
      if (d)
        return d;
      var y = a.displayName || a.name || "";
      return y !== "" ? c + "(" + y + ")" : c;
    }
    function R(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case o:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case b:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var a = e;
            return R(a) + ".Consumer";
          case u:
            var c = e;
            return R(c._context) + ".Provider";
          case f:
            return oe(e, e.render, "ForwardRef");
          case h:
            var d = e.displayName || null;
            return d !== null ? d : V(e.type) || "Memo";
          case C: {
            var y = e, E = y._payload, v = y._init;
            try {
              return V(v(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, $ = 0, B, ne, H, G, ae, N, je;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function fr() {
      {
        if ($ === 0) {
          B = console.log, ne = console.info, H = console.warn, G = console.error, ae = console.group, N = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function pr() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: B
            }),
            info: M({}, e, {
              value: ne
            }),
            warn: M({}, e, {
              value: H
            }),
            error: M({}, e, {
              value: G
            }),
            group: M({}, e, {
              value: ae
            }),
            groupCollapsed: M({}, e, {
              value: N
            }),
            groupEnd: M({}, e, {
              value: je
            })
          });
        }
        $ < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = k.ReactCurrentDispatcher, xe;
    function be(e, a, c) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (y) {
            var d = y.stack.trim().match(/\n( *(at )?)/);
            xe = d && d[1] || "";
          }
        return `
` + xe + e;
      }
    }
    var we = !1, ge;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new br();
    }
    function Ae(e, a) {
      if (!e || we)
        return "";
      {
        var c = ge.get(e);
        if (c !== void 0)
          return c;
      }
      var d;
      we = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = ye.current, ye.current = null, fr();
      try {
        if (a) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (z) {
              d = z;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (z) {
              d = z;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            d = z;
          }
          e();
        }
      } catch (z) {
        if (z && d && typeof z.stack == "string") {
          for (var m = z.stack.split(`
`), I = d.stack.split(`
`), T = m.length - 1, P = I.length - 1; T >= 1 && P >= 0 && m[T] !== I[P]; )
            P--;
          for (; T >= 1 && P >= 0; T--, P--)
            if (m[T] !== I[P]) {
              if (T !== 1 || P !== 1)
                do
                  if (T--, P--, P < 0 || m[T] !== I[P]) {
                    var F = `
` + m[T].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, F), F;
                  }
                while (T >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        we = !1, ye.current = E, pr(), Error.prepareStackTrace = y;
      }
      var Q = e ? e.displayName || e.name : "", J = Q ? be(Q) : "";
      return typeof e == "function" && ge.set(e, J), J;
    }
    function gr(e, a, c) {
      return Ae(e, !1);
    }
    function mr(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function me(e, a, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, mr(e));
      if (typeof e == "string")
        return be(e);
      switch (e) {
        case b:
          return be("Suspense");
        case g:
          return be("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return gr(e.render);
          case h:
            return me(e.type, a, c);
          case C: {
            var d = e, y = d._payload, E = d._init;
            try {
              return me(E(y), a, c);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, Ie = {}, ze = k.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var a = e._owner, c = me(e.type, e._source, a ? a.type : null);
        ze.setExtraStackFrame(c);
      } else
        ze.setExtraStackFrame(null);
    }
    function vr(e, a, c, d, y) {
      {
        var E = Function.call.bind(se);
        for (var v in e)
          if (E(e, v)) {
            var m = void 0;
            try {
              if (typeof e[v] != "function") {
                var I = Error((d || "React class") + ": " + c + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              m = e[v](a, v, d, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              m = T;
            }
            m && !(m instanceof Error) && (ve(y), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", c, v, typeof m), ve(null)), m instanceof Error && !(m.message in Ie) && (Ie[m.message] = !0, ve(y), x("Failed %s type: %s", c, m.message), ve(null));
          }
      }
    }
    var hr = Array.isArray;
    function Re(e) {
      return hr(e);
    }
    function yr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, c = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function xr(e) {
      try {
        return Me(e), !1;
      } catch {
        return !0;
      }
    }
    function Me(e) {
      return "" + e;
    }
    function Ne(e) {
      if (xr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(e)), Me(e);
    }
    var Fe = k.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, We;
    function Rr(e) {
      if (se.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Er(e) {
      if (se.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Cr(e, a) {
      typeof e.ref == "string" && Fe.current;
    }
    function _r(e, a) {
      {
        var c = function() {
          Ve || (Ve = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function kr(e, a) {
      {
        var c = function() {
          We || (We = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Sr = function(e, a, c, d, y, E, v) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: c,
        props: v,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Tr(e, a, c, d, y) {
      {
        var E, v = {}, m = null, I = null;
        c !== void 0 && (Ne(c), m = "" + c), Er(a) && (Ne(a.key), m = "" + a.key), Rr(a) && (I = a.ref, Cr(a, y));
        for (E in a)
          se.call(a, E) && !wr.hasOwnProperty(E) && (v[E] = a[E]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (E in T)
            v[E] === void 0 && (v[E] = T[E]);
        }
        if (m || I) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && _r(v, P), I && kr(v, P);
        }
        return Sr(e, m, I, y, d, Fe.current, v);
      }
    }
    var Ee = k.ReactCurrentOwner, De = k.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var a = e._owner, c = me(e.type, e._source, a ? a.type : null);
        De.setExtraStackFrame(c);
      } else
        De.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function $e() {
      {
        if (Ee.current) {
          var e = V(Ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Pr(e) {
      return "";
    }
    var Ge = {};
    function jr(e) {
      {
        var a = $e();
        if (!a) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (a = `

Check the top-level render call using <` + c + ">.");
        }
        return a;
      }
    }
    function Le(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = jr(a);
        if (Ge[c])
          return;
        Ge[c] = !0;
        var d = "";
        e && e._owner && e._owner !== Ee.current && (d = " It was passed a child from " + V(e._owner.type) + "."), Z(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, d), Z(null);
      }
    }
    function Ue(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Re(e))
          for (var c = 0; c < e.length; c++) {
            var d = e[c];
            _e(d) && Le(d, a);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = w(e);
          if (typeof y == "function" && y !== e.entries)
            for (var E = y.call(e), v; !(v = E.next()).done; )
              _e(v.value) && Le(v.value, a);
        }
      }
    }
    function Or(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var c;
        if (typeof a == "function")
          c = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === h))
          c = a.propTypes;
        else
          return;
        if (c) {
          var d = V(a);
          vr(c, e.props, "prop", d, e);
        } else if (a.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var y = V(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(e) {
      {
        for (var a = Object.keys(e.props), c = 0; c < a.length; c++) {
          var d = a[c];
          if (d !== "children" && d !== "key") {
            Z(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    var Ye = {};
    function Be(e, a, c, d, y, E) {
      {
        var v = te(e);
        if (!v) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = Pr();
          I ? m += I : m += $e();
          var T;
          e === null ? T = "null" : Re(e) ? T = "array" : e !== void 0 && e.$$typeof === t ? (T = "<" + (V(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, m);
        }
        var P = Tr(e, a, c, y, E);
        if (P == null)
          return P;
        if (v) {
          var F = a.children;
          if (F !== void 0)
            if (d)
              if (Re(F)) {
                for (var Q = 0; Q < F.length; Q++)
                  Ue(F[Q], e);
                Object.freeze && Object.freeze(F);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(F, e);
        }
        if (se.call(a, "key")) {
          var J = V(e), z = Object.keys(a).filter(function(Vr) {
            return Vr !== "key";
          }), ke = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[J + ke]) {
            var Fr = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ke, J, Fr, J), Ye[J + ke] = !0;
          }
        }
        return e === n ? Ar(P) : Or(P), P;
      }
    }
    function Ir(e, a, c) {
      return Be(e, a, c, !0);
    }
    function zr(e, a, c) {
      return Be(e, a, c, !1);
    }
    var Mr = zr, Nr = Ir;
    le.Fragment = n, le.jsx = Mr, le.jsxs = Nr;
  }()), le;
}
var Ke;
function Gr() {
  return Ke || (Ke = 1, process.env.NODE_ENV === "production" ? he.exports = Dr() : he.exports = $r()), he.exports;
}
var q = Gr();
function Xe(r, t) {
  if (typeof r == "function")
    return r(t);
  r != null && (r.current = t);
}
function Lr(...r) {
  return (t) => {
    let o = !1;
    const n = r.map((s) => {
      const i = Xe(s, t);
      return !o && typeof i == "function" && (o = !0), i;
    });
    if (o)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          typeof i == "function" ? i() : Xe(r[s], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Ur(r) {
  const t = /* @__PURE__ */ Br(r), o = O.forwardRef((n, s) => {
    const { children: i, ...u } = n, l = O.Children.toArray(i), f = l.find(qr);
    if (f) {
      const b = f.props.children, g = l.map((h) => h === f ? O.Children.count(b) > 1 ? O.Children.only(null) : O.isValidElement(b) ? b.props.children : null : h);
      return /* @__PURE__ */ q.jsx(t, { ...u, ref: s, children: O.isValidElement(b) ? O.cloneElement(b, void 0, g) : null });
    }
    return /* @__PURE__ */ q.jsx(t, { ...u, ref: s, children: i });
  });
  return o.displayName = `${r}.Slot`, o;
}
var Yr = /* @__PURE__ */ Ur("Slot");
// @__NO_SIDE_EFFECTS__
function Br(r) {
  const t = O.forwardRef((o, n) => {
    const { children: s, ...i } = o;
    if (O.isValidElement(s)) {
      const u = Xr(s), l = Kr(i, s.props);
      return s.type !== O.Fragment && (l.ref = n ? Lr(n, u) : u), O.cloneElement(s, l);
    }
    return O.Children.count(s) > 1 ? O.Children.only(null) : null;
  });
  return t.displayName = `${r}.SlotClone`, t;
}
var Jr = Symbol("radix.slottable");
function qr(r) {
  return O.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === Jr;
}
function Kr(r, t) {
  const o = { ...t };
  for (const n in t) {
    const s = r[n], i = t[n];
    /^on[A-Z]/.test(n) ? s && i ? o[n] = (...l) => {
      i(...l), s(...l);
    } : s && (o[n] = s) : n === "style" ? o[n] = { ...s, ...i } : n === "className" && (o[n] = [s, i].filter(Boolean).join(" "));
  }
  return { ...r, ...o };
}
function Xr(r) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : n.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? r.ref : (t = (s = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : s.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? r.props.ref : r.props.ref || r.ref);
}
function tr(r) {
  var t, o, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var s = r.length;
    for (t = 0; t < s; t++) r[t] && (o = tr(r[t])) && (n && (n += " "), n += o);
  } else for (o in r) r[o] && (n && (n += " "), n += o);
  return n;
}
function or() {
  for (var r, t, o = 0, n = "", s = arguments.length; o < s; o++) (r = arguments[o]) && (t = tr(r)) && (n && (n += " "), n += t);
  return n;
}
const He = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Ze = or, Hr = (r, t) => (o) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Ze(r, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: s, defaultVariants: i } = t, u = Object.keys(s).map((b) => {
    const g = o == null ? void 0 : o[b], h = i == null ? void 0 : i[b];
    if (g === null) return null;
    const C = He(g) || He(h);
    return s[b][C];
  }), l = o && Object.entries(o).reduce((b, g) => {
    let [h, C] = g;
    return C === void 0 || (b[h] = C), b;
  }, {}), f = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((b, g) => {
    let { class: h, className: C, ...j } = g;
    return Object.entries(j).every((A) => {
      let [S, w] = A;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...l
      }[S]) : {
        ...i,
        ...l
      }[S] === w;
    }) ? [
      ...b,
      h,
      C
    ] : b;
  }, []);
  return Ze(r, u, f, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, Pe = "-", Zr = (r) => {
  const t = et(r), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = r;
  return {
    getClassGroupId: (u) => {
      const l = u.split(Pe);
      return l[0] === "" && l.length !== 1 && l.shift(), nr(l, t) || Qr(u);
    },
    getConflictingClassGroupIds: (u, l) => {
      const f = o[u] || [];
      return l && n[u] ? [...f, ...n[u]] : f;
    }
  };
}, nr = (r, t) => {
  var u;
  if (r.length === 0)
    return t.classGroupId;
  const o = r[0], n = t.nextPart.get(o), s = n ? nr(r.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = r.join(Pe);
  return (u = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : u.classGroupId;
}, Qe = /^\[(.+)\]$/, Qr = (r) => {
  if (Qe.test(r)) {
    const t = Qe.exec(r)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, et = (r) => {
  const {
    theme: t,
    prefix: o
  } = r, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return tt(Object.entries(r.classGroups), o).forEach(([i, u]) => {
    Te(u, n, i, t);
  }), n;
}, Te = (r, t, o, n) => {
  r.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : er(t, s);
      i.classGroupId = o;
      return;
    }
    if (typeof s == "function") {
      if (rt(s)) {
        Te(s(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: o
      });
      return;
    }
    Object.entries(s).forEach(([i, u]) => {
      Te(u, er(t, i), o, n);
    });
  });
}, er = (r, t) => {
  let o = r;
  return t.split(Pe).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, rt = (r) => r.isThemeGetter, tt = (r, t) => t ? r.map(([o, n]) => {
  const s = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([u, l]) => [t + u, l])) : i);
  return [o, s];
}) : r, ot = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (i, u) => {
    o.set(i, u), t++, t > r && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let u = o.get(i);
      if (u !== void 0)
        return u;
      if ((u = n.get(i)) !== void 0)
        return s(i, u), u;
    },
    set(i, u) {
      o.has(i) ? o.set(i, u) : s(i, u);
    }
  };
}, ar = "!", nt = (r) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = r, n = t.length === 1, s = t[0], i = t.length, u = (l) => {
    const f = [];
    let b = 0, g = 0, h;
    for (let w = 0; w < l.length; w++) {
      let k = l[w];
      if (b === 0) {
        if (k === s && (n || l.slice(w, w + i) === t)) {
          f.push(l.slice(g, w)), g = w + i;
          continue;
        }
        if (k === "/") {
          h = w;
          continue;
        }
      }
      k === "[" ? b++ : k === "]" && b--;
    }
    const C = f.length === 0 ? l : l.substring(g), j = C.startsWith(ar), A = j ? C.substring(1) : C, S = h && h > g ? h - g : void 0;
    return {
      modifiers: f,
      hasImportantModifier: j,
      baseClassName: A,
      maybePostfixModifierPosition: S
    };
  };
  return o ? (l) => o({
    className: l,
    parseClassName: u
  }) : u;
}, at = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let o = [];
  return r.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}, st = (r) => ({
  cache: ot(r.cacheSize),
  parseClassName: nt(r),
  ...Zr(r)
}), it = /\s+/, lt = (r, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = t, i = [], u = r.trim().split(it);
  let l = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const b = u[f], {
      modifiers: g,
      hasImportantModifier: h,
      baseClassName: C,
      maybePostfixModifierPosition: j
    } = o(b);
    let A = !!j, S = n(A ? C.substring(0, j) : C);
    if (!S) {
      if (!A) {
        l = b + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (S = n(C), !S) {
        l = b + (l.length > 0 ? " " + l : l);
        continue;
      }
      A = !1;
    }
    const w = at(g).join(":"), k = h ? w + ar : w, x = k + S;
    if (i.includes(x))
      continue;
    i.push(x);
    const Y = s(S, A);
    for (let W = 0; W < Y.length; ++W) {
      const K = Y[W];
      i.push(k + K);
    }
    l = b + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function ct() {
  let r = 0, t, o, n = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (o = sr(t)) && (n && (n += " "), n += o);
  return n;
}
const sr = (r) => {
  if (typeof r == "string")
    return r;
  let t, o = "";
  for (let n = 0; n < r.length; n++)
    r[n] && (t = sr(r[n])) && (o && (o += " "), o += t);
  return o;
};
function ut(r, ...t) {
  let o, n, s, i = u;
  function u(f) {
    const b = t.reduce((g, h) => h(g), r());
    return o = st(b), n = o.cache.get, s = o.cache.set, i = l, l(f);
  }
  function l(f) {
    const b = n(f);
    if (b)
      return b;
    const g = lt(f, o);
    return s(f, g), g;
  }
  return function() {
    return i(ct.apply(null, arguments));
  };
}
const _ = (r) => {
  const t = (o) => o[r] || [];
  return t.isThemeGetter = !0, t;
}, ir = /^\[(?:([a-z-]+):)?(.+)\]$/i, dt = /^\d+\/\d+$/, ft = /* @__PURE__ */ new Set(["px", "full", "screen"]), pt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, mt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, D = (r) => ee(r) || ft.has(r) || dt.test(r), L = (r) => re(r, "length", _t), ee = (r) => !!r && !Number.isNaN(Number(r)), Se = (r) => re(r, "number", ee), ce = (r) => !!r && Number.isInteger(Number(r)), ht = (r) => r.endsWith("%") && ee(r.slice(0, -1)), p = (r) => ir.test(r), U = (r) => pt.test(r), yt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xt = (r) => re(r, yt, lr), wt = (r) => re(r, "position", lr), Rt = /* @__PURE__ */ new Set(["image", "url"]), Et = (r) => re(r, Rt, St), Ct = (r) => re(r, "", kt), ue = () => !0, re = (r, t, o) => {
  const n = ir.exec(r);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, _t = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  bt.test(r) && !gt.test(r)
), lr = () => !1, kt = (r) => mt.test(r), St = (r) => vt.test(r), Tt = () => {
  const r = _("colors"), t = _("spacing"), o = _("blur"), n = _("brightness"), s = _("borderColor"), i = _("borderRadius"), u = _("borderSpacing"), l = _("borderWidth"), f = _("contrast"), b = _("grayscale"), g = _("hueRotate"), h = _("invert"), C = _("gap"), j = _("gradientColorStops"), A = _("gradientColorStopPositions"), S = _("inset"), w = _("margin"), k = _("opacity"), x = _("padding"), Y = _("saturate"), W = _("scale"), K = _("sepia"), de = _("skew"), fe = _("space"), pe = _("translate"), X = () => ["auto", "contain", "none"], te = () => ["auto", "hidden", "clip", "visible", "scroll"], oe = () => ["auto", p, t], R = () => [p, t], V = () => ["", D, L], M = () => ["auto", ee, p], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["solid", "dashed", "dotted", "double", "none"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", p], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [ee, p];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ue],
      spacing: [D, L],
      blur: ["none", "", U, p],
      brightness: N(),
      borderColor: [r],
      borderRadius: ["none", "", "full", U, p],
      borderSpacing: R(),
      borderWidth: V(),
      contrast: N(),
      grayscale: G(),
      hueRotate: N(),
      invert: G(),
      gap: R(),
      gradientColorStops: [r],
      gradientColorStopPositions: [ht, L],
      inset: oe(),
      margin: oe(),
      opacity: N(),
      padding: R(),
      saturate: N(),
      scale: N(),
      sepia: G(),
      skew: N(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", p]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [U]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...$(), p]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: te()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": te()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": te()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: X()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": X()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": X()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ce, p]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: oe()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", p]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ce, p]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ue]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ce, p]
        }, p]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ue]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ce, p]
        }, p]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", p]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", p]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [C]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [C]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [C]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...H()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...H(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [fe]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [fe]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", p, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [p, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [p, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [U]
        }, U]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [p, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [p, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [p, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [p, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", U, L]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", p]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ee, Se]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", D, p]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", p]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", p]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", D, L]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", D, p]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", p]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", p]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [k]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...$(), wt]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", xt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Et]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [A]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [A]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [j]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [j]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [j]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...B(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: B()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...B()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [D, p]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [D, L]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: V()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [D, L]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", U, Ct]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ue]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", U, p]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [K]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [K]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", p]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: N()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", p]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: N()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", p]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ce, p]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [pe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [pe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [de]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [de]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", p]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", p]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", p]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [D, L, Se]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Pt = /* @__PURE__ */ ut(Tt);
function cr(...r) {
  return Pt(or(r));
}
const jt = Hr(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ur = O.forwardRef(
  ({ className: r, variant: t, size: o, asChild: n = !1, ...s }, i) => {
    const u = n ? Yr : "button";
    return /* @__PURE__ */ q.jsx(
      u,
      {
        className: cr(jt({ variant: t, size: o, className: r })),
        ref: i,
        ...s
      }
    );
  }
);
ur.displayName = "Button";
const dr = O.forwardRef(
  ({ className: r, type: t, ...o }, n) => /* @__PURE__ */ q.jsx(
    "input",
    {
      type: t,
      className: cr(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        r
      ),
      ref: n,
      ...o
    }
  )
);
dr.displayName = "Input";
const At = ({ onCreateTodo: r }) => {
  const [t, o] = Wr(""), n = (s) => {
    if (s.preventDefault(), !t.trim()) return;
    const i = {
      id: crypto.randomUUID(),
      // Modern way to generate a unique ID
      text: t.trim(),
      completed: !1,
      createdAt: /* @__PURE__ */ new Date()
    };
    r(i), o(""), console.log("TodoCreator: New todo created and callback invoked:", i);
  };
  return /* @__PURE__ */ q.jsxs("form", { onSubmit: n, className: "flex w-full max-w-sm items-center space-x-2 p-4 border rounded-lg shadow-md", children: [
    /* @__PURE__ */ q.jsx(
      dr,
      {
        type: "text",
        placeholder: "Enter a new todo...",
        value: t,
        onChange: (s) => o(s.target.value),
        className: "flex-grow"
      }
    ),
    /* @__PURE__ */ q.jsx(ur, { type: "submit", children: "Add Todo" })
  ] });
};
export {
  At as TodoCreator
};
//# sourceMappingURL=todo-creator.es.js.map
