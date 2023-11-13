import Je, { useRef as L, useState as ne, useEffect as K } from "react";
import p, { css as S } from "styled-components";
import Pr from "react-dom";
var xe = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Fr() {
  if (Ne)
    return H;
  Ne = 1;
  var r = Je, i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, m = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(x, d, h) {
    var k, $ = {}, E = null, v = null;
    h !== void 0 && (E = "" + h), d.key !== void 0 && (E = "" + d.key), d.ref !== void 0 && (v = d.ref);
    for (k in d)
      u.call(d, k) && !R.hasOwnProperty(k) && ($[k] = d[k]);
    if (x && x.defaultProps)
      for (k in d = x.defaultProps, d)
        $[k] === void 0 && ($[k] = d[k]);
    return { $$typeof: i, type: x, key: E, ref: v, props: $, _owner: m.current };
  }
  return H.Fragment = l, H.jsx = w, H.jsxs = w, H;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Dr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Je, i = Symbol.for("react.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), x = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), D = Symbol.iterator, A = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = D && e[D] || e[A];
      return typeof t == "function" ? t : null;
    }
    var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        Qe("error", e, n);
      }
    }
    function Qe(e, t, n) {
      {
        var o = I.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (t += "%s", n = n.concat([f]));
        var g = n.map(function(c) {
          return String(c);
        });
        g.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var er = !1, rr = !1, tr = !1, nr = !1, or = !1, $e;
    $e = Symbol.for("react.module.reference");
    function ar(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === R || or || e === m || e === h || e === k || nr || e === v || er || rr || tr || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === $ || e.$$typeof === w || e.$$typeof === x || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === $e || e.getModuleId !== void 0));
    }
    function ir(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var f = t.displayName || t.name || "";
      return f !== "" ? n + "(" + f + ")" : n;
    }
    function ye(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case l:
          return "Portal";
        case R:
          return "Profiler";
        case m:
          return "StrictMode";
        case h:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return ye(t) + ".Consumer";
          case w:
            var n = e;
            return ye(n._context) + ".Provider";
          case d:
            return ir(e, e.render, "ForwardRef");
          case $:
            var o = e.displayName || null;
            return o !== null ? o : O(e.type) || "Memo";
          case E: {
            var f = e, g = f._payload, c = f._init;
            try {
              return O(c(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, V = 0, ke, Ee, we, Re, Ce, je, _e;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function sr() {
      {
        if (V === 0) {
          ke = console.log, Ee = console.info, we = console.warn, Re = console.error, Ce = console.group, je = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
        V++;
      }
    }
    function lr() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: ke
            }),
            info: z({}, e, {
              value: Ee
            }),
            warn: z({}, e, {
              value: we
            }),
            error: z({}, e, {
              value: Re
            }),
            group: z({}, e, {
              value: Ce
            }),
            groupCollapsed: z({}, e, {
              value: je
            }),
            groupEnd: z({}, e, {
              value: _e
            })
          });
        }
        V < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = I.ReactCurrentDispatcher, ce;
    function J(e, t, n) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            ce = o && o[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var ue = !1, X;
    {
      var cr = typeof WeakMap == "function" ? WeakMap : Map;
      X = new cr();
    }
    function Se(e, t) {
      if (!e || ue)
        return "";
      {
        var n = X.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ue = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = le.current, le.current = null, sr();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (P) {
              o = P;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (P) {
              o = P;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            o = P;
          }
          e();
        }
      } catch (P) {
        if (P && o && typeof P.stack == "string") {
          for (var s = P.stack.split(`
`), j = o.stack.split(`
`), b = s.length - 1, y = j.length - 1; b >= 1 && y >= 0 && s[b] !== j[y]; )
            y--;
          for (; b >= 1 && y >= 0; b--, y--)
            if (s[b] !== j[y]) {
              if (b !== 1 || y !== 1)
                do
                  if (b--, y--, y < 0 || s[b] !== j[y]) {
                    var T = `
` + s[b].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, T), T;
                  }
                while (b >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ue = !1, le.current = g, lr(), Error.prepareStackTrace = f;
      }
      var M = e ? e.displayName || e.name : "", Ve = M ? J(M) : "";
      return typeof e == "function" && X.set(e, Ve), Ve;
    }
    function ur(e, t, n) {
      return Se(e, !1);
    }
    function dr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Z(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, dr(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case h:
          return J("Suspense");
        case k:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ur(e.render);
          case $:
            return Z(e.type, t, n);
          case E: {
            var o = e, f = o._payload, g = o._init;
            try {
              return Z(g(f), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Oe = {}, Pe = I.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var t = e._owner, n = Z(e.type, e._source, t ? t.type : null);
        Pe.setExtraStackFrame(n);
      } else
        Pe.setExtraStackFrame(null);
    }
    function fr(e, t, n, o, f) {
      {
        var g = Function.call.bind(Q);
        for (var c in e)
          if (g(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var j = Error((o || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              s = e[c](t, c, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              s = b;
            }
            s && !(s instanceof Error) && (ee(f), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof s), ee(null)), s instanceof Error && !(s.message in Oe) && (Oe[s.message] = !0, ee(f), C("Failed %s type: %s", n, s.message), ee(null));
          }
      }
    }
    var pr = Array.isArray;
    function de(e) {
      return pr(e);
    }
    function gr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function mr(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function De(e) {
      if (mr(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Fe(e);
    }
    var N = I.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Be, fe;
    fe = {};
    function xr(e) {
      if (Q.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vr(e) {
      if (Q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function br(e, t) {
      if (typeof e.ref == "string" && N.current && t && N.current.stateNode !== t) {
        var n = O(N.current.type);
        fe[n] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(N.current.type), e.ref), fe[n] = !0);
      }
    }
    function $r(e, t) {
      {
        var n = function() {
          ze || (ze = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function yr(e, t) {
      {
        var n = function() {
          Be || (Be = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var kr = function(e, t, n, o, f, g, c) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: c,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function Er(e, t, n, o, f) {
      {
        var g, c = {}, s = null, j = null;
        n !== void 0 && (De(n), s = "" + n), vr(t) && (De(t.key), s = "" + t.key), xr(t) && (j = t.ref, br(t, f));
        for (g in t)
          Q.call(t, g) && !hr.hasOwnProperty(g) && (c[g] = t[g]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (g in b)
            c[g] === void 0 && (c[g] = b[g]);
        }
        if (s || j) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && $r(c, y), j && yr(c, y);
        }
        return kr(e, s, j, f, o, N.current, c);
      }
    }
    var pe = I.ReactCurrentOwner, Ae = I.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var t = e._owner, n = Z(e.type, e._source, t ? t.type : null);
        Ae.setExtraStackFrame(n);
      } else
        Ae.setExtraStackFrame(null);
    }
    var ge;
    ge = !1;
    function me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Ie() {
      {
        if (pe.current) {
          var e = O(pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var We = {};
    function Rr(e) {
      {
        var t = Ie();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Me(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = Rr(t);
        if (We[n])
          return;
        We[n] = !0;
        var o = "";
        e && e._owner && e._owner !== pe.current && (o = " It was passed a child from " + O(e._owner.type) + "."), W(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), W(null);
      }
    }
    function Le(e, t) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            me(o) && Me(o, t);
          }
        else if (me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = G(e);
          if (typeof f == "function" && f !== e.entries)
            for (var g = f.call(e), c; !(c = g.next()).done; )
              me(c.value) && Me(c.value, t);
        }
      }
    }
    function Cr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === $))
          n = t.propTypes;
        else
          return;
        if (n) {
          var o = O(t);
          fr(n, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !ge) {
          ge = !0;
          var f = O(t);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var o = t[n];
          if (o !== "children" && o !== "key") {
            W(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Ye(e, t, n, o, f, g) {
      {
        var c = ar(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = wr(f);
          j ? s += j : s += Ie();
          var b;
          e === null ? b = "null" : de(e) ? b = "array" : e !== void 0 && e.$$typeof === i ? (b = "<" + (O(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, s);
        }
        var y = Er(e, t, n, f, g);
        if (y == null)
          return y;
        if (c) {
          var T = t.children;
          if (T !== void 0)
            if (o)
              if (de(T)) {
                for (var M = 0; M < T.length; M++)
                  Le(T[M], e);
                Object.freeze && Object.freeze(T);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(T, e);
        }
        return e === u ? jr(y) : Cr(y), y;
      }
    }
    function _r(e, t, n) {
      return Ye(e, t, n, !0);
    }
    function Tr(e, t, n) {
      return Ye(e, t, n, !1);
    }
    var Sr = Tr, Or = _r;
    U.Fragment = u, U.jsx = Sr, U.jsxs = Or;
  }()), U;
}
process.env.NODE_ENV === "production" ? xe.exports = Fr() : xe.exports = Dr();
var a = xe.exports;
const Ue = (r) => r == "circle", qe = (r) => r == "rounded", zr = p.button`

    display: flex;

    justify-content: center;
    align-items: center;

    cursor: pointer;

    margin: 0px;
    padding: 8px;
    
    white-space: nowrap; 
    height: fit-content;
    width: ${(r) => r.$sz};

    color: ${(r) => r.$makup.item.hout.fg};
    background-color: ${(r) => r.$makup.item.hout.bg};

    border-radius: 0px;
    
    ${(r) => Ue(r.$makup.kind) && S`
        border-radius: calc( ${r.$sz}/2);
        height: ${r.$sz};
    `}

    ${(r) => qe(r.$makup.kind) && S`
        border-radius: calc( ${r.$sz}/3);
    `}

    &:hover {
      
      color: ${(r) => r.$makup.item.hover.fg};
      background-color: ${(r) => r.$makup.item.hover.bg};

      ${(r) => Ue(r.$makup.kind) && S`
        border-radius: calc( ${r.$sz}/2);
      `}
    
      ${(r) => qe(r.$makup.kind) && S`
        border-radius: calc( ${r.$sz}/3);
      `}

    }

`, Br = {
  container: zr
}, $t = ({ sz: r, makup: i, onClick: l, children: u }) => {
  const m = () => {
    l && l();
  };
  return /* @__PURE__ */ a.jsx(Br.container, { $sz: r, $makup: i, onClick: () => m(), children: u });
}, Ke = (r, i, l = 1) => ({ fg: r, bg: i, alpha: l }), Ar = (r) => {
  const i = Ke(r.fg, r.bg, 0.8), l = Ke(r.fg, r.hg, 0.5);
  return {
    hout: i,
    hover: l
  };
}, yt = (r = { fg: "#CBD3D4", bg: "#5C5853", hg: "#B4B2B0" }, i = "square") => ({
  item: Ar(r),
  kind: i
}), Ir = "36px", Wr = "22px", B = (r) => r ? Wr : Ir, Y = "13px", Mr = p.div`
  display: flex;
  min-height: ${(r) => B(r.$small)};
  max-height: ${(r) => B(r.$small)};
  align-items: center;
  padding-left: ${Y};
  justify-content: flex-start;
  
  &:hover {
    background: #282831;
  }
`, Lr = p.div`
  
  position: absolute;

  width: calc( ${(r) => r.$sz} + ${Y} );
  white-space: nowrap;

  background: #454550;
  list-style: none;
  white-space: nowrap;
  border-top-left-radius: ${({ $dropUp: r }) => r ? "10px" : "0px"};
  border-top-right-radius: ${({ $dropUp: r }) => r ? "10px" : "0px"};
  border-bottom-left-radius: ${({ $dropUp: r }) => r ? "0px" : "10px"};
  border-bottom-right-radius: ${({ $dropUp: r }) => r ? "0px" : "10px"};

  & > div:first-child {
    &:hover {
      border-top-left-radius: ${({ $dropUp: r }) => r ? "10px" : "0px"};
      border-top-right-radius: ${({ $dropUp: r }) => r ? "10px" : "0px"};
    }
  }

  & > div:last-child {
    &:hover {
      border-bottom-left-radius: ${({ $dropUp: r }) => r ? "0px" : "10px"};
      border-bottom-right-radius: ${({ $dropUp: r }) => r ? "0px" : "10px"};
    }
  }

  top: ${({ $dropUp: r, $small: i }) => {
  const l = B(i);
  return r ? "calc((" + l + " * 2) * -1)" : l;
}};
  left: 0;
`, Yr = p.div`
  display: flex;
  align-items: center;
  padding-left: ${Y};
  justify-content: flex-start;
  width: calc( ${(r) => r.$sz} + ${Y} );
  white-space: nowrap;
`, Vr = p(Yr)`
  min-height: ${(r) => B(r.$small)};
  max-height: ${(r) => B(r.$small)};
  
  & > div {
    width: 100%;
    height: 100%;
    padding-left: ${Y};
  }

  &:hover {
    background-color: ${(r) => r.open ? "" : "#50505B"};
    border-radius: ${(r) => r.open ? "" : "10px"};
  }

  &::after {
    content: "";
    top: ${(r) => r.$small ? r.open ? "10px" : "6px" : r.open ? "15px" : "8px"};
    right: ${(r) => r.$small ? "10px" : "25px"};
    border: solid #fff;
    padding: ${(r) => r.$small ? "3px" : "5px"};
    display: inline-block;
    position: absolute;
    border-width: 0 2px 2px 0;

    transform: rotate(${(r) => r.open ? "225deg" : "45deg"});
    -webkit-transform: rotate(${(r) => r.open ? "225deg" : "45deg"});

    transition: 0.5s;
  }
`, Nr = (r, i) => r ? `
      border-top-left-radius: ${i ? "0px" : "10px"};
      border-top-right-radius: ${i ? "0px" : "10px"};
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    ` : `
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: ${i ? "0px" : "10px"};
      border-bottom-right-radius: ${i ? "0px" : "10px"};
  `, Hr = p.div`
  cursor: pointer;
  width: calc( ${(r) => r.$sz} + ${Y} );
  color: #99999f;
  z-index: 1;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  position: relative;
  min-width: ${(r) => r.$small ? "60px" : "80px"};
  min-height: ${(r) => B(r.$small)};
  max-height: ${(r) => B(r.$small)};
  background: #454550;

  ${(r) => Nr(r.$dropUp, r.open)}

  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${(r) => r.open ? "0px" : "10px"};
  border-bottom-right-radius: ${(r) => r.open ? "0px" : "10px"}; */
`, kt = ({ items: r, onSelect: i, initialValue: l, sz: u = "64px", small: m = !1, dropUp: R = !1 }) => {
  const w = L(null), [x, d] = ne(!1), [h, k] = ne(l), $ = (v) => {
    w.current.contains(v.target) || d(!1);
  }, E = (v) => {
    d(!1), k(v), i && i(v);
  };
  return K(() => (document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $);
  }), []), /* @__PURE__ */ a.jsxs(Hr, { ref: w, open: x, $small: m, $dropUp: R, $sz: u, children: [
    /* @__PURE__ */ a.jsx(Vr, { open: x, $small: m, $sz: u, onClick: () => d(!x), children: h }),
    /* @__PURE__ */ a.jsx(Lr, { $dropUp: R, $small: m, $sz: u, children: x && r.filter((v) => v !== h).map((v, D, A) => /* @__PURE__ */ a.jsx(
      Mr,
      {
        $small: m,
        $last: D === A.length - 1,
        $dropUp: R,
        onClick: () => E(v),
        children: v
      },
      `select-item-${D}`
    )) })
  ] });
}, Ur = p.div`
    display: flex;

    flex-direction: ${(r) => r.$dir == "col" ? "row" : "column"};

    height: 100%;
    width: 100%;

    margin: 0px;
    padding: 0px;
    
`, qr = p.div`
    display: flex;
    
    width: ${(r) => r.$sz};

    height: 100%;
`, Kr = p.div`
    display: flex;
    
    width: 100%;
    
    height: ${(r) => r.$sz};
`, q = {
  container: Ur,
  col: qr,
  row: Kr
}, Et = ({ sz: r, dir: i, one: l, two: u }) => /* @__PURE__ */ a.jsxs(q.container, { $dir: i, children: [
  i == "col" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(q.col, { $sz: r, $bg: "#454545", children: l }),
    /* @__PURE__ */ a.jsx(q.col, { $sz: `calc(100% - ${r})`, $bg: "#0A9729", children: u })
  ] }),
  i == "row" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(q.row, { $sz: r, $bg: "#454545", children: l }),
    /* @__PURE__ */ a.jsx(q.row, { $sz: `calc(100% - ${r})`, $bg: "#0A9729", children: u })
  ] })
] }), ae = (r) => r == "vertical", ie = (r) => r == "horizontal", oe = "16px", re = "4px", ve = "8px", Gr = p.div`
    
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: ${(r) => r.$makup.bg};
    color: ${(r) => r.$makup.fg};
    opacity: ${(r) => r.$makup.alpha};
    
    user-select: none;

    padding: 0px;
    margin: 0px;

    ${(r) => ae(r.$align) && S`
        flex-direction: column;
        width: ${r.$makup.sz};
        height: 100%;
    `}

    ${(r) => ie(r.$align) && S`
        flex-direction: row;
        width: 100%;
        height: ${r.$makup.sz};
    `}    

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Safari */
    -khtml-user-select: none;   /* Konqueror HTML */
    -moz-user-select: none;   /* Old versions of Firefox */
    -ms-user-select: none;   /* Internet Explorer/Edge */
    user-select: none;   /* Non-prefixed version supported by Chrome, Edge, Opera and Firefox */

`, Jr = p.div`
    display: flex;
 
    justify-content: flex-start;
    align-items: center;
    
    width: 100%; 
    height: 100%; 
    
    margin: 0px;
    gap: ${ve};

    ${(r) => ae(r.$align) && S`
        flex-direction: column;
        margin-top: ${oe};
    `}

    ${(r) => ie(r.$align) && S`
        flex-direction: row;
        margin-left: ${oe};
    `}   
    
`, Xr = p.div`
    display: flex;

    justify-content: center;
    align-items: center;
    
    width: 100%; 
    height: 100%; 
    
    margin: 0px;
    gap: ${ve};

    ${(r) => ae(r.$align) && S`
        flex-direction: column;
        margin-top: ${re};
        margin-bottom: ${re};
    `}

    ${(r) => ie(r.$align) && S`
        flex-direction: row;
        margin-left: ${re};
        margin-right: ${re};
    `}   

`, Zr = p.div`
    display: flex;
    
    justify-content: flex-end;
    align-items: center;
    
    margin: 0px;
    gap: ${ve};

    width: 100%; 
    height: 100%; 

    ${(r) => ae(r.$align) && S`
        flex-direction: column;
        margin-bottom: ${oe};
    `}

    ${(r) => ie(r.$align) && S`
        flex-direction: row;
        margin-right: ${oe};
    `}   

`, te = {
  container: Gr,
  head: Jr,
  midst: Xr,
  tail: Zr
}, wt = ({ align: r, makup: i, head: l, midst: u, tail: m }) => {
  const R = () => /* @__PURE__ */ a.jsx(a.Fragment, { children: " " }), w = () => l || /* @__PURE__ */ a.jsx(R, {}), x = () => u || /* @__PURE__ */ a.jsx(R, {}), d = () => m || /* @__PURE__ */ a.jsx(R, {});
  return /* @__PURE__ */ a.jsxs(te.container, { $align: r, $makup: i, children: [
    /* @__PURE__ */ a.jsx(te.head, { $align: r, children: /* @__PURE__ */ a.jsx(w, {}) }),
    /* @__PURE__ */ a.jsx(te.midst, { $align: r, children: /* @__PURE__ */ a.jsx(x, {}) }),
    /* @__PURE__ */ a.jsx(te.tail, { $align: r, children: /* @__PURE__ */ a.jsx(d, {}) })
  ] });
}, Rt = () => {
  const [r, i] = ne(!1);
  return { open: r, toggle: () => i(!r) };
}, Qr = (r = "portal") => {
  const [i, l] = ne(null);
  return K(() => {
    let u = document.getElementById(r), m = !1;
    return u || (m = !0, u = et(r)), l(u), () => {
      m && u.parentNode && u.parentNode.removeChild(u);
    };
  }, [r]), i;
};
function et(r) {
  const i = document.createElement("div");
  return i.setAttribute("id", r), document.body.appendChild(i), i;
}
const be = "#1C1C1C", se = "#F2F2F2", Xe = "#2F2F2F", rt = p.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;    
`, tt = p.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 700;
	width: inherit;
	outline: 0;
`, nt = p.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(32, 32, 32, 0.3);
	z-index: 500;
`, ot = p.div`
	z-index: 100;
	color: ${se};
    background-color: ${be};
	position: relative;
	margin: auto;
	border-radius: 8px;
    min-width: 16rem;
`, at = p.div`
	
	display: flex;

	justify-content: flex-start;
	align-items: center;

	padding: 0.3rem;
	color: ${se};
	background-color: ${Xe};

	border-radius: 8px 8px 0 0;

    overflow: hidden;
`, it = p.div`
    display: flex;
    flex: 1;
    justify-content: center;
`, st = p.button`

	display: flex;
    justify-content: center;

    font-size: 0.8rem;
    background: none;

    color: ${se};
    background-color: ${be};

    &:hover {
        cursor: pointer;
    }

	width: 1.6rem;

    border: none;
    border-style: solid ;
    border-width: 1px;
    border-color: ${Xe};
    border-radius: 0.8rem;

    margin: 0px;
	padding: 4px;
`, lt = p.div`
	display: flex;
    flex: 1;
        
    flex-direction: column ;

    justify-content: flex-start;
    align-items: center;
    
    color: ${se};
    background-color: ${be};
    
    overflow-x: hidden;
    overflow-y: auto;

    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;    

	max-height: 30rem;
`, F = {
  container: rt,
  wrapper: tt,
  backdrop: nt,
  styledmodal: ot,
  header: at,
  title: it,
  closebtn: st,
  content: lt
}, Ct = ({ open: r, title: i, hide: l, children: u, focusitems: m = [], freeze: R = !0 }) => {
  const w = Qr("modal"), x = L(null), d = L([]), h = L(-1);
  K(() => {
    h.current = m.length > 0 ? 0 : -1, d.current = [], m.forEach(($) => {
      const E = document.getElementById($);
      E && d.current.push(E);
    }), h.current >= 0 && d.current.length > 0 && d.current[h.current].focus();
  }, [m]), K(() => {
    const $ = x.current, E = (v) => {
      const D = m.length, A = h.current, G = d.current;
      if (v.key === "Tab") {
        if (!v.shiftKey)
          return A + 1 === D ? h.current = 0 : h.current += 1, G[h.current].focus(), v.preventDefault();
        if (v.shiftKey)
          return A - 1 < 0 ? h.current = D - 1 : h.current -= 1, G[h.current].focus(), v.preventDefault();
      }
      v.key === "Escape" && l();
    };
    if ($)
      return h.current >= 0 && d.current.length > 0 && d.current[h.current].focus(), $.addEventListener("keydown", E), () => {
        $.removeEventListener("keydown", E);
      };
  }, [m.length, l, r]);
  const k = () => /* @__PURE__ */ a.jsxs(F.container, { role: "dialog", "aria-modal": "true", ref: x, children: [
    R ? /* @__PURE__ */ a.jsx(F.backdrop, {}) : /* @__PURE__ */ a.jsx(F.backdrop, { onClick: l }),
    /* @__PURE__ */ a.jsx(F.wrapper, { children: /* @__PURE__ */ a.jsxs(F.styledmodal, { children: [
      /* @__PURE__ */ a.jsxs(F.header, { children: [
        /* @__PURE__ */ a.jsx(F.title, { children: i }),
        /* @__PURE__ */ a.jsx(F.closebtn, { onClick: l, children: "✕" })
      ] }),
      /* @__PURE__ */ a.jsx(F.content, { children: u })
    ] }) })
  ] });
  return r && w ? Pr.createPortal(/* @__PURE__ */ a.jsx(k, {}), w) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}, ct = "#2B2929", Ge = "#B3B7B4", ut = p.div`
	display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0.5rem;
  column-gap: 1rem;
`, dt = p.div`
	display: flex;
  flex-direction: row;
  column-gap: 1rem;
`, ft = p.div`
	font-size: 0.9rem;
	margin-bottom: 10px;
	text-align: center;
`, Ze = p.button`
  display: flex;
	margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: ${ct};
  background-color: ${Ge};
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background-color: ${Ge};
  }
`, pt = Ze, jt = ({ onCancel: r, onConfirm: i, message: l }) => /* @__PURE__ */ a.jsxs(ut, { children: [
  l && /* @__PURE__ */ a.jsx(ft, { children: l }),
  /* @__PURE__ */ a.jsxs(dt, { children: [
    /* @__PURE__ */ a.jsx(Ze, { onClick: i, children: "✔️" }),
    /* @__PURE__ */ a.jsx(pt, { onClick: r, children: "🗙" })
  ] })
] }), _ = {
  fg: "#D3D0CF",
  bg: "#C7C3C3",
  focusColor: "#24DD34",
  placeColor: "#0B550B",
  padV: "0.2rem",
  padH: "0.3rem",
  fontsz: "0.8rem",
  h: "2rem"
}, gt = p.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: ${(r) => r.makup ? r.makup.fg : _.fg};
    background-color: transparent;
    
    width: calc(100% - 4px);
    min-height: ${(r) => r.makup ? r.makup.h : _.h};

    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    
    font-size: ${(r) => r.makup ? r.makup.fontsz : _.fontsz};
    font-weight: lighter;
`, mt = p.label`  
    color: ${(r) => r.makup ? r.makup.fg : _.fg};  
    padding-left: ${(r) => r.makup ? r.makup.padH : _.padH};
`, ht = p.input`

    color: ${(r) => r.makup ? r.makup.fg : _.placeColor};
    background-color: ${(r) => r.makup ? r.makup.bg : _.bg};

    box-sizing: border-box ;
    border-style: dotted;
    border-width: 1px;
    border-color: ${(r) => r.makup ? r.makup.fg : _.fg};
    border-radius: 8px;
    width: 100%;

    outline: none;

    padding-top: ${(r) => r.makup ? r.makup.padV : _.padV};
    padding-bottom: ${(r) => r.makup ? r.makup.padV : _.padV};
    padding-left: ${(r) => r.makup ? r.makup.padH : _.padH};
    padding-right: ${(r) => r.makup ? r.makup.padH : _.padH};

    &:focus {
        border: 1px dotted ${(r) => r.makup ? r.makup.focusColor : _.focusColor};
    }

    &::placeholder{
        color: ${(r) => r.makup ? r.makup.placeColor : _.placeColor};
        font-weight: lighter;
    }
`, he = {
  root: gt,
  label: mt,
  input: ht
}, _t = ({ label: r, name: i, placehorlder: l, makup: u, handleChange: m, ...R }) => {
  const w = L(null), x = L(), d = (E) => {
    x.current = E.target.value, m && m(E.target.value);
  }, h = () => {
  }, k = () => {
    w.current && w.current.focus();
  }, $ = () => {
  };
  return K(() => {
    x.current = "";
  }, []), /* @__PURE__ */ a.jsxs(he.root, { makup: u, children: [
    /* @__PURE__ */ a.jsx(he.label, { makup: u, htmlFor: i, onClick: () => k(), children: r }),
    /* @__PURE__ */ a.jsx(
      he.input,
      {
        ref: w,
        type: "text",
        id: i,
        value: x.current,
        makup: u,
        placeholder: l,
        onChange: d,
        onFocus: h,
        onBlur: $,
        autoComplete: "off",
        ...R
      },
      i
    )
  ] });
};
export {
  $t as Buttonice,
  kt as Dropdown,
  Ct as Modal,
  jt as ModalReply,
  Et as SplitBoard,
  _t as TextEdit,
  wt as Toolbar,
  Ar as createButtonColor,
  yt as createButtonMakup,
  Rt as useModal,
  Qr as usePortal
};
