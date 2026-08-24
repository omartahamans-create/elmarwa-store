/* @ds-bundle: {"format":4,"namespace":"ElMarwaGlassDesignSystem_d79c81","components":[{"name":"GoldFrame","sourcePath":"components/brand/GoldFrame.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"OrnamentDivider","sourcePath":"components/brand/OrnamentDivider.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Accordion","sourcePath":"components/commerce/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/commerce/Breadcrumb.jsx"},{"name":"CategoryTile","sourcePath":"components/commerce/CategoryTile.jsx"},{"name":"Countdown","sourcePath":"components/commerce/Countdown.jsx"},{"name":"FreeShipMeter","sourcePath":"components/commerce/FreeShipMeter.jsx"},{"name":"Modal","sourcePath":"components/commerce/Modal.jsx"},{"name":"Price","sourcePath":"components/commerce/Price.jsx"},{"name":"ProductTile","sourcePath":"components/commerce/ProductTile.jsx"},{"name":"QuantityStepper","sourcePath":"components/commerce/QuantityStepper.jsx"},{"name":"Rating","sourcePath":"components/commerce/Rating.jsx"},{"name":"TrustRow","sourcePath":"components/commerce/TrustRow.jsx"},{"name":"ContactPill","sourcePath":"components/content/ContactPill.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/brand/GoldFrame.jsx":"c39b523cac4c","components/brand/Logo.jsx":"6543564a16d0","components/brand/OrnamentDivider.jsx":"ba3d2fc12966","components/brand/SectionHeading.jsx":"af2cb2fdef64","components/commerce/Accordion.jsx":"cc083e2dda13","components/commerce/Breadcrumb.jsx":"a614683efd3b","components/commerce/CategoryTile.jsx":"6aa4b710370f","components/commerce/Countdown.jsx":"9a378ae22a9c","components/commerce/FreeShipMeter.jsx":"ec99706494f4","components/commerce/Modal.jsx":"7b91676b7f08","components/commerce/Price.jsx":"a49b8292872e","components/commerce/ProductTile.jsx":"88f2f08f2194","components/commerce/QuantityStepper.jsx":"3f10f26ea22e","components/commerce/Rating.jsx":"c8973c1c4e8d","components/commerce/TrustRow.jsx":"be714e70272e","components/content/ContactPill.jsx":"d3e59a85676c","components/content/ProductCard.jsx":"70e31f20f25f","components/content/StatBlock.jsx":"0cf2807f8d5d","components/core/Badge.jsx":"c30414ee1b81","components/core/Button.jsx":"212d45f5d1eb","components/core/Icon.jsx":"b0af97b05cf2","components/core/IconButton.jsx":"e7fd62f4edbf","components/core/Tag.jsx":"54e57112b66c","components/forms/Input.jsx":"317e5e87eab0","components/forms/Select.jsx":"4d85ff0782b1","components/forms/Textarea.jsx":"a6cba55bdc7b","ui_kits/store-v2/Home2.jsx":"ebfae480cf4b","ui_kits/store-v3/Chrome3.jsx":"7f8cfb61a006","ui_kits/store-v3/Home3.jsx":"6d1c62af3007","ui_kits/store/Cart.jsx":"66810033e579","ui_kits/store/Checkout.jsx":"0af68de001b5","ui_kits/store/Chrome.jsx":"067bcee0b5d0","ui_kits/store/Cro.jsx":"19bf0a9dec17","ui_kits/store/Home.jsx":"94c844ba6ce6","ui_kits/store/Listing.jsx":"824ba477dad1","ui_kits/store/Pages.jsx":"e8cbd8e4144b","ui_kits/store/Product.jsx":"90007c22f1e1","ui_kits/store/data.js":"1adaa287f370","ui_kits/website/Catalogue.jsx":"c5400b82a084","ui_kits/website/Contact.jsx":"5e4be06248c4","ui_kits/website/Footer.jsx":"17a4a2cb01b0","ui_kits/website/Header.jsx":"9b65620f77e5","ui_kits/website/Landing.jsx":"b30a3c484271"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElMarwaGlassDesignSystem_d79c81 = window.ElMarwaGlassDesignSystem_d79c81 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GoldFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The printed card sits inside a double gold border with a marble ground.
   GoldFrame is that container, reusable for hero blocks, certificates and cards. */
function GoldFrame({
  tone = 'marble',
  padding = 'var(--space-7)',
  backgroundImage,
  children,
  style,
  ...rest
}) {
  const grounds = {
    marble: {
      background: 'var(--gradient-marble)',
      color: 'var(--text-body)'
    },
    ink: {
      background: 'var(--gradient-ink)',
      color: 'var(--text-on-inverse)'
    },
    plain: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      padding: 6,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--gradient-gold)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding,
      borderRadius: 1,
      border: 'var(--border-thin) solid rgba(212,164,55,.55)',
      backgroundImage: backgroundImage ? 'url(' + backgroundImage + ')' : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      ...(backgroundImage ? {
        color: 'var(--text-body)'
      } : grounds[tone])
    }
  }, children));
}
Object.assign(__ds_scope, { GoldFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GoldFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The real mark is a custom-lettered gold logotype supplied as artwork (assets/logo-*.jpg).
   Pass `src` to use it. With no `src` this renders the typographic fallback lockup —
   never a redrawn version of the glass-and-circle emblem. */
function Logo({
  src,
  tone = 'gold',
  size = 'md',
  showArabic = true,
  style,
  ...rest
}) {
  const scale = {
    sm: 0.62,
    md: 1,
    lg: 1.6
  }[size] || 1;
  const goldText = tone === 'gold' ? {
    background: 'var(--gradient-gold)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  } : {
    color: tone === 'ink' ? 'var(--ink-900)' : 'var(--marble-000)'
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: "El Marwa for Glass",
      style: {
        display: 'block',
        height: 96 * scale,
        width: 'auto',
        objectFit: 'contain',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 40 * scale,
      letterSpacing: '.04em',
      ...goldText
    }
  }, "ELMARWA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 15 * scale,
      letterSpacing: '.42em',
      marginTop: 6 * scale,
      paddingLeft: '.42em',
      ...goldText
    }
  }, "FOR GLASS"), showArabic && /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 15 * scale,
      marginTop: 7 * scale,
      ...goldText
    }
  }, "\u0627\u0644\u0645\u0631\u0648\u0629 \u0644\u0632\u062E\u0631\u0641\u0629 \u0627\u0644\u0632\u062C\u0627\u062C \u0648 \u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/OrnamentDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The printed card rules the page with a thin gold line broken by a small lozenge.
   This reproduces that rule using type and borders only. */
function OrnamentDivider({
  tone = 'gold',
  width = '100%',
  label,
  style,
  ...rest
}) {
  const line = tone === 'gold' ? 'linear-gradient(90deg,transparent,var(--gold-400) 22%,var(--gold-300) 50%,var(--gold-400) 78%,transparent)' : 'linear-gradient(90deg,transparent,var(--marble-300) 50%,transparent)';
  const dot = tone === 'gold' ? 'var(--gold-400)' : 'var(--marble-300)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: line
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      background: dot,
      transform: 'rotate(45deg)'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--ls-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, label), label && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      background: dot,
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: line
    }
  }));
}
Object.assign(__ds_scope, { OrnamentDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/OrnamentDivider.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  dir,
  style,
  ...rest
}) {
  const inverse = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", _extends({
    dir: dir,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: align === 'center' ? 'center' : align === 'end' ? 'flex-end' : 'flex-start',
      textAlign: align === 'center' ? 'center' : align === 'end' ? 'right' : 'left',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: dir === 'rtl' ? 'var(--font-sans-ar)' : 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: dir === 'rtl' ? 'normal' : 'var(--ls-caption)',
      textTransform: dir === 'rtl' ? 'none' : 'uppercase',
      color: inverse ? 'var(--gold-300)' : 'var(--gold-600)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: dir === 'rtl' ? 'var(--font-display-ar)' : 'var(--font-display)',
      fontSize: 'var(--text-title)',
      lineHeight: 'var(--lh-title)',
      letterSpacing: dir === 'rtl' ? 'normal' : 'var(--ls-title)',
      textTransform: dir === 'rtl' ? 'none' : 'uppercase',
      color: inverse ? 'var(--marble-000)' : 'var(--text-heading)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.OrnamentDivider, {
    width: 140,
    tone: "gold"
  }), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-body)',
      color: inverse ? 'var(--text-muted-on-inverse)' : 'var(--text-muted)'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: "rtl",
    style: {
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), items.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '18px 4px',
      textAlign: 'right',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)',
      fontSize: 20,
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  }, "+")), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 4px 20px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      lineHeight: 1.8,
      color: 'var(--text-muted)'
    }
  }, a))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    dir: "rtl",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)',
      ...style
    }
  }, rest), items.map(([label, route], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "\u2039"), route ? /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate && onNavigate(route),
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)',
      border: 'none',
      textDecoration: 'none'
    }
  }, label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-heading)'
    }
  }, label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CategoryTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CategoryTile({
  image,
  title,
  count,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    dir: "rtl",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      border: '1px solid ' + (hover ? 'var(--gold-400)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      padding: 0,
      aspectRatio: '4 / 3',
      background: 'var(--marble-100)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect-bottom)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 0,
      bottom: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      fontWeight: 'var(--weight-bold)',
      color: '#fff'
    }
  }, title), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 12,
      color: 'var(--gold-200)'
    }
  }, count, " \u0645\u0646\u062A\u062C")));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Countdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Countdown({
  seconds = 3600,
  tone = 'light',
  label = 'العرض ينتهي خلال',
  style,
  ...rest
}) {
  const [left, setLeft] = React.useState(seconds);
  React.useEffect(() => {
    const t = setInterval(() => setLeft(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = n => String(n).padStart(2, '0');
  const h = pad(Math.floor(left / 3600)),
    m = pad(Math.floor(left % 3600 / 60)),
    s = pad(left % 60);
  const inverse = tone === 'dark';
  const cell = {
    minWidth: 44,
    padding: '7px 8px',
    borderRadius: 'var(--radius-sm)',
    textAlign: 'center',
    background: inverse ? 'rgba(255,255,255,.10)' : 'var(--gold-100)',
    border: inverse ? 'none' : '1px solid var(--gold-300)',
    color: inverse ? 'var(--gold-200)' : 'var(--gold-800)',
    fontFamily: 'var(--font-sans)',
    fontSize: 19,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: "rtl",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: inverse ? 'var(--gold-200)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cell
  }, h), /*#__PURE__*/React.createElement("span", {
    style: cell
  }, m), /*#__PURE__*/React.createElement("span", {
    style: cell
  }, s)));
}
Object.assign(__ds_scope, { Countdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Countdown.jsx", error: String((e && e.message) || e) }); }

// components/commerce/FreeShipMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CRO: progress toward the free-shipping threshold. Shown in the cart, the mini-cart
   and as a sticky bar. Turns gold-filled and switches copy when the threshold is met. */
function FreeShipMeter({
  subtotal = 0,
  threshold = 3000,
  style,
  ...rest
}) {
  const remaining = Math.max(0, threshold - subtotal);
  const pct = Math.min(100, subtotal / threshold * 100);
  const fmt = n => n.toLocaleString('en-US');
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: "rtl",
    style: {
      fontFamily: 'var(--font-sans-ar)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: remaining ? 'var(--text-body)' : 'var(--success)',
      fontWeight: 'var(--weight-medium)'
    }
  }, remaining ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u0646\u0627\u0642\u0635\u0643 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--gold-700)'
    }
  }, fmt(remaining), " \u062C\u0646\u064A\u0647"), " \u0648\u062A\u0627\u062E\u062F \u0634\u062D\u0646 \u0645\u062C\u0627\u0646\u064A") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u0645\u0628\u0631\u0648\u0643 \u2014 \u0627\u0644\u0634\u062D\u0646 \u0645\u062C\u0627\u0646\u064A \u0639\u0644\u0649 \u0637\u0644\u0628\u0643")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--marble-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: remaining ? 'var(--gradient-gold-soft)' : 'var(--success)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { FreeShipMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/FreeShipMeter.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Popup shell used for the welcome-code offer, the exit-intent save, and the
   cross-sell "أضيف للسلة" sheet. Marble ground, gold frame edge, one clear action. */
function Modal({
  open,
  onClose,
  width = 460,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(14,13,12,.62)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-5)',
      animation: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    dir: "rtl",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      borderTop: '4px solid transparent',
      borderImage: 'var(--gradient-gold) 1',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0625\u063A\u0644\u0627\u0642",
    style: {
      position: 'absolute',
      top: 10,
      insetInlineEnd: 12,
      background: 'none',
      border: 'none',
      fontSize: 22,
      lineHeight: 1,
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, "\xD7"), children));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Modal.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Price.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Egyptian pound, Arabic store convention: current price large in ink,
   original price struck through and muted, discount percentage in a red pill. */
function Price({
  current,
  original,
  size = 'md',
  showPercent = true,
  style,
  ...rest
}) {
  const sizes = {
    sm: 15,
    md: 19,
    lg: 26
  };
  const fs = sizes[size] || sizes.md;
  const pct = original && original > current ? Math.round((1 - current / original) * 100) : 0;
  const fmt = n => n.toLocaleString('en-US', {
    minimumFractionDigits: 0
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: "rtl",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans-ar)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, fmt(current), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs * 0.62,
      fontWeight: 'var(--weight-medium)'
    }
  }, "\u062C\u0646\u064A\u0647")), pct > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs * 0.7,
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, fmt(original)), pct > 0 && showPercent && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--sale)',
      background: 'var(--sale-bg)',
      borderRadius: 'var(--radius-sm)',
      padding: '2px 7px'
    }
  }, "\u062E\u0635\u0645 ", pct, "%"));
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Price.jsx", error: String((e && e.message) || e) }); }

// components/commerce/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  style,
  ...rest
}) {
  const btn = {
    width: 36,
    height: 36,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: 18,
    color: 'var(--text-body)',
    fontFamily: 'var(--font-sans-ar)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: "rtl",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => onChange && onChange(Math.max(min, value - 1)),
    "aria-label": "\u0646\u0627\u0642\u0635"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 36,
      textAlign: 'center',
      fontFamily: 'var(--font-sans-ar)',
      fontWeight: 'var(--weight-bold)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => onChange && onChange(Math.min(max, value + 1)),
    "aria-label": "\u0632\u0627\u0626\u062F"
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rating({
  value = 5,
  count,
  size = 14,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: "rtl",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 1,
      direction: 'ltr'
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: size,
      lineHeight: 1,
      color: i <= Math.round(value) ? 'var(--gold-400)' : 'var(--marble-300)'
    }
  }, "\u2605"))), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Rating.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Catalogue tile for the shop. Ribbon top-right (RTL: top-left of the image),
   quick-add revealed on hover, low-stock nudge under the price. */
function ProductTile({
  image,
  title,
  brand,
  current,
  original,
  rating,
  reviews,
  ribbon,
  stockLeft,
  onAdd,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pct = original && original > current ? Math.round((1 - current / original) * 100) : 0;
  return /*#__PURE__*/React.createElement("article", _extends({
    dir: "rtl",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid ' + (hover ? 'var(--gold-300)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      background: 'var(--marble-050)',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.04)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--ink-300)',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13
    }
  }, "\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0646\u062A\u062C"), (ribbon || pct > 0) && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      insetInlineStart: 10,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 12,
      fontWeight: 'var(--weight-bold)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      background: ribbon ? 'var(--gradient-gold-soft)' : 'var(--sale)',
      color: ribbon ? 'var(--ink-900)' : '#fff'
    }
  }, ribbon || 'خصم ' + pct + '%'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInline: 10,
      bottom: 10,
      opacity: hover ? 1 : 0,
      transform: hover ? 'translateY(0)' : 'translateY(6px)',
      transition: 'all var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onAdd && onAdd();
    },
    style: {
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      padding: '11px 0',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--gradient-gold-soft)',
      color: 'var(--ink-900)',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      fontWeight: 'var(--weight-bold)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, "\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, brand && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, brand), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.5,
      color: 'var(--text-heading)',
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, title), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Price, {
    current: current,
    original: original
  })), stockLeft != null && stockLeft <= 5 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 12,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--stock-low)'
    }
  }, "\u0628\u0627\u0642\u064A ", stockLeft, " \u0642\u0637\u0639 \u0628\u0633")));
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The printed card sets each phone number inside a gold-edged capsule with a phone glyph.
   Numbers are always shown LTR even inside Arabic layouts. */
function ContactPill({
  icon,
  value,
  label,
  tone = 'ink',
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--gold-200)',
      border: 'var(--border-thin) solid var(--gold-600)'
    },
    light: {
      background: 'var(--marble-000)',
      color: 'var(--gold-700)',
      border: 'var(--border-thin) solid var(--gold-300)'
    }
  };
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '10px 18px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      boxShadow: hover ? 'var(--shadow-gold-glow)' : 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur-base) var(--ease-standard)',
      ...tones[tone],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), icon, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.25
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      letterSpacing: 'var(--ls-caption)',
      textTransform: 'uppercase',
      opacity: .7
    }
  }, label), /*#__PURE__*/React.createElement("bdi", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      fontSize: '17px',
      letterSpacing: '.04em',
      direction: 'ltr'
    }
  }, value)));
}
Object.assign(__ds_scope, { ContactPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactPill.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* No product photography was supplied with the brand materials. With no `image`,
   the card renders a labelled placeholder rather than inventing artwork. */
function ProductCard({
  image,
  title,
  titleAr,
  meta,
  badges = [],
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-thin) solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      borderColor: hover ? 'var(--gold-300)' : 'var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: image ? 'var(--marble-100)' : 'var(--gradient-marble)',
      backgroundImage: image ? 'url(' + image + ')' : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--ls-caption)',
      textTransform: 'uppercase',
      color: 'var(--ink-300)'
    }
  }, "Product photo")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, badges.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-1)'
    }
  }, badges), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, title), titleAr && /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-body)'
    }
  }, titleAr), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  tone = 'light',
  dir,
  style,
  ...rest
}) {
  const inverse = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: dir,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      lineHeight: 1,
      background: 'var(--gradient-gold-soft)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: dir === 'rtl' ? 'var(--font-sans-ar)' : 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: dir === 'rtl' ? 'normal' : 'var(--ls-caption)',
      textTransform: dir === 'rtl' ? 'none' : 'uppercase',
      color: inverse ? 'var(--text-muted-on-inverse)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  gold: {
    background: 'var(--gold-50)',
    color: 'var(--gold-700)',
    borderColor: 'var(--gold-200)'
  },
  ink: {
    background: 'var(--ink-900)',
    color: 'var(--gold-300)',
    borderColor: 'var(--gold-700)'
  },
  glass: {
    background: 'var(--glass-100)',
    color: 'var(--glass-700)',
    borderColor: 'var(--glass-300)'
  },
  neutral: {
    background: 'var(--marble-100)',
    color: 'var(--ink-500)',
    borderColor: 'var(--marble-300)'
  }
};
function Badge({
  tone = 'gold',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--ls-caption)',
      textTransform: 'uppercase',
      fontWeight: 'var(--weight-medium)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-thin) solid transparent',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-medium)',
  textTransform: 'uppercase',
  letterSpacing: '.14em',
  border: 'var(--border-thin) solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)'
};
const sizes = {
  sm: {
    fontSize: '12px',
    padding: '8px 18px'
  },
  md: {
    fontSize: '13px',
    padding: '13px 28px'
  },
  lg: {
    fontSize: '15px',
    padding: '17px 40px'
  }
};
const variants = {
  primary: {
    background: 'var(--gradient-gold-soft)',
    color: 'var(--ink-900)',
    boxShadow: 'var(--shadow-sm)'
  },
  secondary: {
    background: 'var(--ink-900)',
    color: 'var(--gold-300)',
    borderColor: 'var(--gold-600)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--gold-600)',
    borderColor: 'var(--gold-400)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    borderColor: 'transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    transform: down ? 'translateY(1px)' : 'none',
    ...(hover && !disabled ? hoverStyle(variant) : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: s,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  }, rest), iconLeft, children, iconRight);
}
function hoverStyle(variant) {
  if (variant === 'primary') return {
    background: 'var(--gradient-gold)',
    boxShadow: 'var(--shadow-gold-glow)'
  };
  if (variant === 'secondary') return {
    background: 'var(--ink-700)',
    color: 'var(--gold-200)'
  };
  if (variant === 'outline') return {
    background: 'var(--gold-50)',
    color: 'var(--gold-700)'
  };
  return {
    background: 'var(--marble-100)'
  };
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Intentional addition: the brand ships no icon set. Icons are Lucide (1.5px stroke,
   rounded caps), fetched as real SVG markup and inlined so they inherit brand colour
   and survive static capture. */
const CACHE = {};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(CACHE[name] || null);
  React.useEffect(() => {
    if (CACHE[name]) {
      setSvg(CACHE[name]);
      return;
    }
    let live = true;
    fetch('/icons/' + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
      const inner = t.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
      CACHE[name] = inner;
      if (live) setSvg(inner);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    "aria-hidden": "true",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg || ''
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/TrustRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULTS = [['truck', 'شحن سريع لكل المحافظات'], ['shield-check', 'مؤمن ضد الكسر'], ['banknote', 'الدفع عند الاستلام'], ['phone-call', 'دعم على الواتساب']];
function TrustRow({
  items = DEFAULTS,
  tone = 'light',
  style,
  ...rest
}) {
  const inverse = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: "rtl",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + items.length + ',1fr)',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), items.map(([icon, text]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: inverse ? 'var(--gold-300)' : 'var(--gold-500)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      fontWeight: 'var(--weight-medium)',
      color: inverse ? 'var(--text-muted-on-inverse)' : 'var(--text-body)'
    }
  }, text))));
}
Object.assign(__ds_scope, { TrustRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/TrustRow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  variant = 'outline',
  size = 'md',
  label,
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const tones = {
    solid: {
      background: 'var(--gradient-gold-soft)',
      color: 'var(--ink-900)',
      borderColor: 'transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--gold-600)',
      borderColor: 'var(--gold-400)'
    },
    inverse: {
      background: 'var(--ink-800)',
      color: 'var(--gold-300)',
      borderColor: 'var(--border-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-thin) solid transparent',
      cursor: 'pointer',
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...tones[variant],
      boxShadow: hover ? 'var(--shadow-gold-glow)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  active = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-small)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '9px 18px',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      border: 'var(--border-thin) solid ' + (active ? 'var(--gold-400)' : 'var(--marble-300)'),
      background: active ? 'var(--gold-50)' : hover ? 'var(--marble-100)' : 'transparent',
      color: active ? 'var(--gold-700)' : 'var(--text-muted)',
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  dir,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    dir: dir,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: dir === 'rtl' ? 'var(--font-sans-ar)' : 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: dir === 'rtl' ? 'normal' : 'var(--ls-caption)',
      textTransform: dir === 'rtl' ? 'none' : 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'inherit',
      fontSize: 'var(--text-body)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      padding: '12px 14px',
      border: 'var(--border-thin) solid ' + (error ? 'var(--danger)' : focus ? 'var(--gold-400)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-gold-glow)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-small)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  dir,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    dir: dir,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: dir === 'rtl' ? 'var(--font-sans-ar)' : 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: dir === 'rtl' ? 'normal' : 'var(--ls-caption)',
      textTransform: dir === 'rtl' ? 'none' : 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'inherit',
      fontSize: 'var(--text-body)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      padding: '12px 14px',
      appearance: 'none',
      border: 'var(--border-thin) solid ' + (focus ? 'var(--gold-400)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-gold-glow)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  rows = 4,
  dir,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    dir: dir,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: dir === 'rtl' ? 'var(--font-sans-ar)' : 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: dir === 'rtl' ? 'normal' : 'var(--ls-caption)',
      textTransform: dir === 'rtl' ? 'none' : 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'inherit',
      fontSize: 'var(--text-body)',
      color: 'var(--text-body)',
      resize: 'vertical',
      background: 'var(--surface-card)',
      padding: '12px 14px',
      border: 'var(--border-thin) solid ' + (focus ? 'var(--gold-400)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-gold-glow)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store-v2/Home2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function __deps_home_v2() {
  var {
    Icon,
    Button,
    SectionHeading,
    OrnamentDivider
  } = window.__ELMARWA__;
  var {
    ProductTile,
    CategoryTile,
    Countdown,
    TrustRow,
    Price
  } = window.__ELMARWA__;
  var {
    CATEGORIES,
    PRODUCTS
  } = window.__STORE__;
  return {
    Icon,
    Button,
    SectionHeading,
    OrnamentDivider,
    ProductTile,
    CategoryTile,
    Countdown,
    TrustRow,
    Price,
    CATEGORIES,
    PRODUCTS
  };
}
const MARBLE = 'radial-gradient(120% 100% at 78% 20%, rgba(255,255,255,.95) 0%, rgba(255,255,255,0) 60%), linear-gradient(115deg,#FDFBF6 0%,#F6EEDC 45%,#EFE2C6 100%)';
const GOLD_TEXT = 'linear-gradient(180deg,#E7C877 0%,#B8892F 48%,#8C6420 52%,#E3C476 100%)';
const PAY = ['Google Pay', 'Apple Pay', 'Mastercard', 'PayPal', 'VISA'];
const BANNERS = [{
  eyebrow: 'عروض المروة',
  title: 'سفرتك سر أناقة بيتك',
  sub: 'خصومات تصل إلى',
  big: '40',
  unit: '٪',
  cta: 'تسوق الآن',
  route: 'flash',
  image: '/assets/products/porcelain-dinner-set-gold.jpg'
}, {
  eyebrow: 'عروض الصيف',
  title: 'شحن مجاني',
  sub: 'عند الدفع الإلكتروني',
  note: 'لكل محافظات مصر على أي طلب فوق 3000 جنيه',
  cta: 'تسوق الآن',
  route: 'listing',
  image: '/assets/products/steel-tea-kettle-set.jpg'
}, {
  eyebrow: 'أطقم الهدايا',
  title: 'هدية تفرح من أول نظرة',
  sub: 'أطقم كريستال تبدأ من',
  big: '2,350',
  unit: 'ج',
  cta: 'شوف الأطقم',
  route: 'listing',
  params: {
    cat: 'gifts'
  },
  image: '/assets/products/promo-laroos-crystal-gift.jpg'
}, {
  eyebrow: 'الزجاج والكريستال',
  title: 'كريستال يليق بضيوفك',
  sub: 'خصومات تصل إلى',
  big: '35',
  unit: '٪',
  cta: 'تسوق الكريستال',
  route: 'listing',
  params: {
    cat: 'crystal'
  },
  image: '/assets/products/crystal-tier-stand-2.jpg'
}];
function PayStripV2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'center',
      background: 'rgba(255,255,255,.82)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 18px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, "\u0645\u062A\u0627\u062D \u0627\u0644\u062A\u0642\u0633\u064A\u0637 \u0648\u0627\u0644\u062F\u0641\u0639 \u0628\u0627\u0644\u0641\u064A\u0632\u0627"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, PAY.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: '.04em',
      color: 'var(--ink-600)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 6,
      padding: '4px 7px',
      background: '#fff',
      whiteSpace: 'nowrap'
    }
  }, p))));
}
function HeroSliderV2({
  onNavigate
}) {
  const {
    Button,
    Countdown
  } = __deps_home_v2();
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(v => (v + 1) % BANNERS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const go = n => setI((n + BANNERS.length) % BANNERS.length);
  const arrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 42,
    height: 42,
    borderRadius: 999,
    border: '1px solid var(--gold-300)',
    background: 'rgba(255,255,255,.9)',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    fontSize: 20,
    color: 'var(--gold-700)',
    zIndex: 3
  };
  return /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      maxWidth: 1320,
      margin: '20px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--gold-200)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 420
    }
  }, BANNERS.map((b, n) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      position: n === i ? 'relative' : 'absolute',
      inset: n === i ? 'auto' : 0,
      opacity: n === i ? 1 : 0,
      pointerEvents: n === i ? 'auto' : 'none',
      transition: 'opacity var(--dur-slow) var(--ease-out)',
      background: MARBLE,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      padding: '28px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 340,
      height: 340,
      borderRadius: 999,
      background: 'radial-gradient(circle,rgba(226,196,118,.35) 0%,rgba(226,196,118,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: b.image,
    alt: "",
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 330,
      aspectRatio: '1',
      objectFit: 'cover',
      borderRadius: 'var(--radius-md)',
      border: '6px solid var(--marble-000)',
      boxShadow: 'var(--shadow-md)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 48px 40px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      fontWeight: 800,
      color: 'var(--gold-800)',
      background: 'rgba(255,255,255,.8)',
      border: '1px solid var(--gold-300)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px'
    }
  }, b.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 44,
      lineHeight: 1.3,
      fontWeight: 900,
      color: 'var(--ink-800)',
      textTransform: 'none',
      letterSpacing: 'normal',
      maxWidth: 480
    }
  }, b.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: 'var(--gold-300)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 20,
      fontWeight: 800,
      color: 'var(--ink-700)'
    }
  }, b.sub), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: 'var(--gold-300)'
    }
  })), b.big && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 88,
      fontWeight: 900,
      lineHeight: 1,
      backgroundImage: GOLD_TEXT,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontVariantNumeric: 'tabular-nums',
      filter: 'drop-shadow(0 6px 10px rgba(140,100,32,.28))'
    }
  }, b.big), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 34,
      fontWeight: 900,
      backgroundImage: GOLD_TEXT,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      marginTop: 8
    }
  }, b.unit)), b.note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--ink-600)',
      maxWidth: 420
    }
  }, b.note), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate(b.route, b.params || {})
  }, b.cta), /*#__PURE__*/React.createElement(PayStripV2, null))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i - 1),
    style: {
      ...arrow,
      insetInlineEnd: 16
    },
    "aria-label": "\u0627\u0644\u0633\u0627\u0628\u0642"
  }, "\u203A"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i + 1),
    style: {
      ...arrow,
      insetInlineStart: 16
    },
    "aria-label": "\u0627\u0644\u062A\u0627\u0644\u064A"
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInline: 0,
      bottom: 16,
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      zIndex: 3
    }
  }, BANNERS.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    "aria-label": 'بانر ' + (n + 1),
    style: {
      width: n === i ? 26 : 9,
      height: 9,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: n === i ? 'var(--gold-600)' : 'var(--gold-300)',
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Countdown, {
    seconds: 9 * 3600 + 42 * 60,
    label: "\u0627\u0644\u0639\u0631\u0636 \u064A\u0646\u062A\u0647\u064A \u062E\u0644\u0627\u0644"
  })));
}

/* Promo strip shown between product rows: product shot + marketing copy + gold marble background */
function PromoStripV2({
  eyebrow,
  title,
  note,
  big,
  unit,
  cta,
  image,
  onClick,
  flip
}) {
  const {
    Button
  } = __deps_home_v2();
  return /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '48px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: flip ? '1fr 1.1fr' : '1.1fr 1fr',
      alignItems: 'center',
      background: MARBLE,
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      minHeight: 240,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 2 : 1,
      padding: '30px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 12,
      fontWeight: 800,
      color: 'var(--gold-800)',
      background: 'rgba(255,255,255,.8)',
      border: '1px solid var(--gold-300)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 30,
      fontWeight: 900,
      lineHeight: 1.35,
      color: 'var(--ink-800)',
      textTransform: 'none',
      letterSpacing: 'normal',
      maxWidth: 460
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, big && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 54,
      fontWeight: 900,
      lineHeight: 1,
      backgroundImage: GOLD_TEXT,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontVariantNumeric: 'tabular-nums'
    }
  }, big, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, unit)), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      lineHeight: 1.9,
      color: 'var(--ink-600)',
      maxWidth: 380
    }
  }, note)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClick
  }, cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 1 : 2,
      position: 'relative',
      height: '100%',
      minHeight: 240,
      display: 'grid',
      placeItems: 'center',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 240,
      height: 240,
      borderRadius: 999,
      background: 'radial-gradient(circle,rgba(226,196,118,.32) 0%,rgba(226,196,118,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 220,
      aspectRatio: '1',
      objectFit: 'cover',
      borderRadius: 'var(--radius-md)',
      border: '5px solid var(--marble-000)',
      boxShadow: 'var(--shadow-md)'
    }
  }))));
}

/* One rotating row of 5 products. Items shift automatically every few seconds. */
function AutoRowV2({
  title,
  subtitle,
  pool,
  offset,
  tick,
  onAdd,
  onOpen,
  action
}) {
  const {
    ProductTile
  } = __deps_home_v2();
  const step = (offset + tick * 2) % pool.length;
  const items = Array.from({
    length: 5
  }, (_, k) => pool[(step + k) % pool.length]);
  return /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '48px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 26,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal',
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, subtitle)), action && /*#__PURE__*/React.createElement("button", {
    onClick: action,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--gold-700)'
    }
  }, "\u0634\u0648\u0641 \u0627\u0644\u0643\u0644 \u2039")), /*#__PURE__*/React.createElement("div", {
    key: step,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 18,
      animation: 'marwaFade var(--dur-slow) var(--ease-out)'
    }
  }, items.map((p, k) => /*#__PURE__*/React.createElement(ProductTile, _extends({
    key: p.id + '-' + k
  }, p, {
    onAdd: () => onAdd(p),
    onClick: () => onOpen(p)
  })))));
}
const ROWS = [{
  title: 'الأكثر مبيعاً',
  subtitle: 'اللي العملاء بيطلبوه أكتر حاجة'
}, {
  title: 'وصل حديثاً',
  subtitle: 'أحدث ما وصل المعرض'
}, {
  title: 'زجاج وكريستال',
  subtitle: 'تخصص المروة الأساسي',
  cat: 'crystal'
}, {
  title: 'أطقم السفرة',
  subtitle: 'بورسلين مذهب لكل المناسبات',
  cat: 'sofra'
}, {
  title: 'عروض الأسبوع',
  subtitle: 'خصومات محدودة المدة',
  deal: true
}, {
  title: 'أدوات المطبخ',
  subtitle: 'ستانلس وسيراميك يستحمل',
  cat: 'kitchen'
}, {
  title: 'أطقم الهدايا',
  subtitle: 'جاهزة للتغليف والإهداء',
  cat: 'gifts'
}, {
  title: 'حافظات الطعام',
  subtitle: 'تنظيم مطبخك بسهولة',
  cat: 'storage'
}, {
  title: 'اختيارات المعرض',
  subtitle: 'مختارة من فرع جراح'
}, {
  title: 'تحت 1000 جنيه',
  subtitle: 'قطع مميزة بسعر لطيف',
  max: 1000
}];
const STRIPS = [{
  eyebrow: 'عرض الأسبوع',
  title: 'اشتري طقمين والتالت بنص التمن',
  note: 'على كل أطقم الهدايا والكريستال — الخصم بيتحسب تلقائي في السلة.',
  cta: 'شوف أطقم الهدايا',
  image: '/assets/products/promo-laroos-crystal-gift.jpg',
  route: 'listing',
  params: {
    cat: 'gifts'
  }
}, {
  eyebrow: 'شحن مجاني',
  title: 'الشحن علينا فوق 3000 جنيه',
  note: 'توصيل لكل محافظات مصر خلال 2–5 أيام عمل، وتغليف مؤمن ضد الكسر.',
  cta: 'ابدأ التسوق',
  image: '/assets/products/steel-turkish-tea-set.jpg',
  route: 'listing',
  flip: true
}, {
  eyebrow: 'خصم خاص',
  title: 'أطقم أواني الطهي',
  big: '30',
  unit: '٪',
  cta: 'تسوق المطبخ',
  image: '/assets/products/ceramic-cookware.jpg',
  route: 'listing',
  params: {
    cat: 'kitchen'
  }
}, {
  eyebrow: 'عروض الكريستال',
  title: 'شيالات كريستال بقاعدة ذهبية',
  note: 'تبدأ من 980 جنيه بدل 1,250 جنيه — كميات محدودة.',
  cta: 'تسوق الكريستال',
  image: '/assets/products/crystal-stand-gold.jpg',
  route: 'listing',
  params: {
    cat: 'crystal'
  },
  flip: true
}, {
  eyebrow: 'الدفع عند الاستلام',
  title: 'ادفع لما توصلك بالسلامة',
  note: 'متاح في كل المحافظات، مع إمكانية الاستبدال خلال 14 يوم.',
  cta: 'اطلب دلوقتي',
  image: '/assets/products/porcelain-teapot-gold.jpg',
  route: 'listing'
}];
function HomeV2({
  onNavigate,
  onAdd,
  onOpen
}) {
  const {
    Button,
    CategoryTile,
    TrustRow,
    CATEGORIES,
    PRODUCTS
  } = __deps_home_v2();
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTick(v => v + 1), 7000);
    return () => clearInterval(t);
  }, []);
  const poolFor = r => {
    let list = PRODUCTS;
    if (r.cat) list = PRODUCTS.filter(p => p.cat === r.cat);
    if (r.deal) list = PRODUCTS.filter(p => p.original);
    if (r.max) list = PRODUCTS.filter(p => p.current <= r.max);
    return list.length >= 5 ? list : PRODUCTS;
  };
  const blocks = [];
  ROWS.forEach((r, n) => {
    blocks.push(/*#__PURE__*/React.createElement(AutoRowV2, {
      key: 'row' + n,
      title: r.title,
      subtitle: r.subtitle,
      pool: poolFor(r),
      offset: n * 3,
      tick: tick,
      onAdd: onAdd,
      onOpen: onOpen,
      action: () => onNavigate('listing', r.cat ? {
        cat: r.cat
      } : {})
    }));
    if (n % 2 === 1 && STRIPS[(n - 1) / 2]) {
      const s = STRIPS[(n - 1) / 2];
      blocks.push(/*#__PURE__*/React.createElement(PromoStripV2, _extends({
        key: 'strip' + n
      }, s, {
        onClick: () => onNavigate(s.route, s.params || {})
      })));
    }
  });
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes marwaFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}'), /*#__PURE__*/React.createElement(HeroSliderV2, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      borderBlock: '1px solid var(--border-hairline)',
      padding: '22px 24px',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(TrustRow, null))), /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '48px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 26,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u062A\u0633\u0648\u0642 \u062D\u0633\u0628 \u0627\u0644\u0642\u0633\u0645"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 18
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryTile, _extends({
    key: c.id
  }, c, {
    onClick: () => onNavigate('listing', {
      cat: c.id
    })
  }))))), blocks, /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '64px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'center',
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/storefront-night.jpg",
    alt: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0648\u0629",
    style: {
      width: '100%',
      height: 360,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 32px 32px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 28,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0645\u0639\u0631\u0636 \u062D\u0642\u064A\u0642\u064A\u060C \u0645\u0634 \u0635\u0641\u062D\u0629 \u0628\u0633"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--text-muted)'
    }
  }, "\u0645\u0639\u0631\u0636\u0646\u0627 \u0641\u064A \u062C\u0631\u0627\u062D \u2014 \u0623\u062C\u0627 \u2014 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629 \u0645\u0641\u062A\u0648\u062D \u064A\u0648\u0645\u064A\u0627\u064B. \u062A\u0642\u062F\u0631 \u062A\u0634\u0648\u0641 \u0627\u0644\u0645\u0646\u062A\u062C \u0628\u0646\u0641\u0633\u0643 \u0642\u0628\u0644 \u0645\u0627 \u062A\u0634\u062A\u0631\u064A\u060C \u0623\u0648 \u062A\u0637\u0644\u0628 \u0623\u0648\u0646\u0644\u0627\u064A\u0646 \u0648\u0646\u0648\u0635\u0644\u0651\u0643."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('about')
  }, "\u0627\u0639\u0631\u0641 \u0623\u0643\u062A\u0631 \u0639\u0646\u0646\u0627")))));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  HomeV2,
  HeroSliderV2,
  PromoStripV2,
  AutoRowV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store-v2/Home2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store-v3/Chrome3.jsx
try { (() => {
function __deps_chrome() {
  var {
    Icon,
    Button,
    OrnamentDivider
  } = window.__ELMARWA__;
  var {
    FreeShipMeter,
    Price,
    QuantityStepper,
    TrustRow
  } = window.__ELMARWA__;
  var {
    CATEGORIES,
    SHIPPING_THRESHOLD
  } = window.__STORE__;
  return {
    Icon,
    Button,
    OrnamentDivider,
    FreeShipMeter,
    Price,
    QuantityStepper,
    TrustRow,
    CATEGORIES,
    SHIPPING_THRESHOLD
  };
}
function PromoBar() {
  const msgs = [['شحن مجاني على الطلبات فوق ', '3000', ' جنيه'], ['كود ', 'FIRST10', ' — خصم ', '10', '٪ على أول طلب'], ['الدفع عند الاستلام في كل المحافظات']];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % msgs.length), 4000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      background: 'var(--gold-100)',
      color: 'var(--gold-800)',
      textAlign: 'center',
      padding: '9px 16px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      fontWeight: 'var(--weight-medium)',
      borderBottom: '1px solid var(--gold-200)'
    }
  }, msgs[i].map((part, n) => /^[A-Z0-9]/.test(part) ? /*#__PURE__*/React.createElement("b", {
    key: n,
    style: {
      fontWeight: 800,
      fontVariantNumeric: 'tabular-nums'
    }
  }, part) : /*#__PURE__*/React.createElement("span", {
    key: n
  }, part)));
}
function Header({
  route,
  onNavigate,
  cartCount,
  onOpenCart,
  query,
  onQuery
}) {
  const {
    Icon,
    Button,
    CATEGORIES
  } = __deps_chrome();
  const [menu, setMenu] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    dir: "rtl",
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(PromoBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '0 24px',
      height: 92,
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-elmarwa.svg",
    alt: "\u0627\u0644\u0645\u0631\u0648\u0629 \u0644\u0644\u0632\u062C\u0627\u062C",
    onClick: () => onNavigate('home'),
    style: {
      height: 76,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onNavigate('search');
    },
    style: {
      flex: 1,
      maxWidth: 560,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => onQuery(e.target.value),
    placeholder: "\u0627\u0628\u062D\u062B \u0639\u0646 \u0637\u0642\u0645\u060C \u0643\u0631\u064A\u0633\u062A\u0627\u0644\u060C \u062D\u0644\u0629\u2026",
    style: {
      width: '100%',
      height: 48,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--gold-300)',
      background: 'var(--marble-050)',
      color: 'var(--text-body)',
      padding: '0 46px 0 14px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInlineStart: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: "var(--gold-600)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginInlineStart: 'auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:01007022631",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 800,
      direction: 'ltr',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "010 070 226 313")), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCart,
    style: {
      position: 'relative',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 26,
    color: "var(--gold-600)"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      insetInlineStart: -4,
      minWidth: 20,
      height: 20,
      borderRadius: 999,
      background: 'var(--sale)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 800,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, cartCount))))), /*#__PURE__*/React.createElement("nav", {
    onMouseLeave: () => setMenu(null),
    style: {
      background: 'var(--marble-050)',
      borderBottom: '1px solid var(--border-hairline)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onMouseEnter: () => setMenu(c.id),
    onClick: () => onNavigate('listing', {
      cat: c.id
    }),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      fontWeight: 'var(--weight-medium)',
      color: menu === c.id ? 'var(--gold-700)' : 'var(--text-body)',
      borderBottom: '2px solid ' + (menu === c.id ? 'var(--gold-400)' : 'transparent')
    }
  }, c.title)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('flash'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--sale)'
    }
  }, "\u0627\u0644\u0639\u0631\u0648\u0636"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('about'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, "\u0645\u0646 \u0646\u062D\u0646")), menu && (() => {
    const c = CATEGORIES.find(x => x.id === menu);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        insetInline: 0,
        top: '100%',
        background: 'var(--marble-000)',
        boxShadow: 'var(--shadow-lg)',
        borderTop: '2px solid var(--gold-400)',
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1320,
        margin: '0 auto',
        padding: 28,
        display: 'grid',
        gridTemplateColumns: '1fr 260px',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '10px 24px'
      }
    }, c.children.map(s => /*#__PURE__*/React.createElement("a", {
      key: s,
      onClick: () => onNavigate('listing', {
        cat: c.id,
        sub: s
      }),
      style: {
        cursor: 'pointer',
        border: 'none',
        fontFamily: 'var(--font-sans-ar)',
        fontSize: 15,
        color: 'var(--text-body)',
        padding: '4px 0'
      }
    }, s))), /*#__PURE__*/React.createElement("img", {
      src: c.image,
      alt: "",
      style: {
        width: '100%',
        height: 170,
        objectFit: 'cover',
        borderRadius: 'var(--radius-md)'
      }
    })));
  })()));
}
function MiniCart({
  open,
  onClose,
  items,
  onQty,
  subtotal,
  onNavigate
}) {
  const {
    Button,
    FreeShipMeter,
    Price,
    QuantityStepper,
    SHIPPING_THRESHOLD
  } = __deps_chrome();
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'rgba(58,38,7,.28)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    dir: "rtl",
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      insetInlineStart: 0,
      top: 0,
      bottom: 0,
      width: 400,
      maxWidth: '92vw',
      background: 'var(--marble-000)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 18,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 24,
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--gold-50)'
    }
  }, /*#__PURE__*/React.createElement(FreeShipMeter, {
    subtotal: subtotal,
    threshold: SHIPPING_THRESHOLD
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      color: 'var(--text-muted)'
    }
  }, "\u0633\u0644\u062A\u0643 \u0641\u0627\u0636\u064A\u0629."), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: "",
    style: {
      width: 68,
      height: 68,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      lineHeight: 1.4
    }
  }, it.title), /*#__PURE__*/React.createElement(Price, {
    current: it.current,
    size: "sm",
    showPercent: false
  }), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: it.qty,
    onChange: v => onQty(it.id, v)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans-ar)',
      fontWeight: 800,
      fontSize: 17
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, subtotal.toLocaleString('en-US'), " \u062C\u0646\u064A\u0647")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      onClose();
      onNavigate('checkout');
    }
  }, "\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onClose();
      onNavigate('cart');
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\u0639\u0631\u0636 \u0627\u0644\u0633\u0644\u0629"))));
}
function Footer({
  onNavigate
}) {
  const {
    Icon,
    TrustRow
  } = __deps_chrome();
  const cols = [['تسوق', ['أطقم السفرة', 'الزجاج والكريستال', 'أدوات المطبخ', 'حافظات الطعام', 'أطقم الهدايا']], ['المتجر', ['من نحن', 'تواصل معنا', 'الأسئلة الشائعة', 'سياسة الشحن والاسترجاع']]];
  return /*#__PURE__*/React.createElement("footer", {
    dir: "rtl",
    style: {
      background: 'var(--marble-100)',
      color: 'var(--text-body)',
      marginTop: 64,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--marble-300)',
      padding: '28px 24px',
      background: 'var(--marble-050)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(TrustRow, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '48px 24px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-elmarwa.svg",
    alt: "",
    style: {
      height: 112,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      lineHeight: 1.9,
      color: 'var(--text-muted)'
    }
  }, "\u0645\u0635\u0646\u0639 \u0648\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0648\u0629 \u0644\u0632\u062E\u0631\u0641\u0629 \u0627\u0644\u0632\u062C\u0627\u062C \u0648\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644. \u062C\u0645\u0644\u0629 \u0648\u0642\u0637\u0627\u0639\u064A \u0648\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0623\u062F\u0648\u0627\u062A \u0645\u0646\u0632\u0644\u064A\u0629."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--gold-700)'
    }
  }, "\u062C\u0631\u0627\u062D \u2014 \u0623\u062C\u0627 \u2014 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629")), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--gold-700)',
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, h), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNavigate(l === 'من نحن' ? 'about' : l === 'تواصل معنا' ? 'contact' : l === 'الأسئلة الشائعة' ? 'faq' : l === 'سياسة الشحن والاسترجاع' ? 'policy' : 'listing'),
    style: {
      cursor: 'pointer',
      border: 'none',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--gold-700)',
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"), ['010 070 226 313', '012 056 044 90', '012 000 92 546'].map(n => /*#__PURE__*/React.createElement("b", {
    key: n,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--text-heading)',
      direction: 'ltr',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=61554717004094",
    style: {
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 22,
    color: "var(--gold-600)"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/elmarwa_glass_/",
    style: {
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 22,
    color: "var(--gold-600)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--marble-300)',
      padding: '18px 24px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\xA9 ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 800,
      fontFamily: 'var(--font-sans)'
    }
  }, "2026"), " \u0627\u0644\u0645\u0631\u0648\u0629 \u0644\u0644\u0632\u062C\u0627\u062C \u0648\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644 \u2014 \u0643\u0644 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629"));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  Header,
  Footer,
  MiniCart,
  PromoBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store-v3/Chrome3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store-v3/Home3.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function __deps_home_v2() {
  var {
    Icon,
    Button,
    SectionHeading,
    OrnamentDivider
  } = window.__ELMARWA__;
  var {
    ProductTile,
    CategoryTile,
    Countdown,
    TrustRow,
    Price
  } = window.__ELMARWA__;
  var {
    CATEGORIES,
    PRODUCTS
  } = window.__STORE__;
  return {
    Icon,
    Button,
    SectionHeading,
    OrnamentDivider,
    ProductTile,
    CategoryTile,
    Countdown,
    TrustRow,
    Price,
    CATEGORIES,
    PRODUCTS
  };
}
const MARBLE = 'radial-gradient(120% 100% at 78% 20%, rgba(255,255,255,.95) 0%, rgba(255,255,255,0) 60%), linear-gradient(115deg,#FDFBF6 0%,#F6EEDC 45%,#EFE2C6 100%)';
const GOLD_TEXT = 'linear-gradient(180deg,#E7C877 0%,#B8892F 48%,#8C6420 52%,#E3C476 100%)';
const PAY = ['Google Pay', 'Apple Pay', 'Mastercard', 'PayPal', 'VISA'];
const BANNERS = [{
  eyebrow: 'عروض المروة',
  title: 'سفرتك سر أناقة بيتك',
  sub: 'خصومات تصل إلى',
  big: '40',
  unit: '٪',
  cta: 'تسوق الآن',
  route: 'flash',
  image: '/assets/cutouts/eldahan-pots.png',
  scene: 'gold'
}, {
  eyebrow: 'عروض الصيف',
  title: 'شحن مجاني',
  sub: 'عند الدفع الإلكتروني',
  note: 'لكل محافظات مصر على أي طلب فوق 3000 جنيه',
  cta: 'تسوق الآن',
  route: 'listing',
  image: '/assets/cutouts/korkmaz-alfa.png',
  scene: 'ink'
}, {
  eyebrow: 'أطقم الهدايا',
  title: 'هدية تفرح من أول نظرة',
  sub: 'أطقم كريستال تبدأ من',
  big: '2,350',
  unit: 'ج',
  cta: 'شوف الأطقم',
  route: 'listing',
  params: {
    cat: 'gifts'
  },
  image: '/assets/cutouts/rcr-athena.png',
  scene: 'night'
}, {
  eyebrow: 'أواني الفرن',
  title: 'زجاج فرنسي يستحمل الفرن',
  sub: 'خصومات تصل إلى',
  big: '35',
  unit: '٪',
  cta: 'تسوق أواني الفرن',
  route: 'listing',
  params: {
    cat: 'kitchen'
  },
  image: '/assets/cutouts/pyrex-trays.png',
  scene: 'ink'
}];

/* Generated banner backdrops: a lit stage built from gradients, product cut-outs sit on top of it. */
const SCENES = {
  gold: {
    bg: 'radial-gradient(90% 80% at 72% 8%, #FFFAEE 0%, #F7EAD0 40%, #E8D2A2 78%, #D9BC7F 100%)',
    floor: 'linear-gradient(180deg, rgba(122,86,20,.13) 0%, rgba(122,86,20,.03) 60%, rgba(122,86,20,0) 100%)',
    glow: 'radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(255,255,255,0) 70%)',
    text: 'var(--ink-800)',
    muted: 'var(--ink-600)',
    chipBg: 'rgba(255,255,255,.86)',
    chipBorder: 'var(--gold-300)',
    chipText: 'var(--gold-800)',
    rule: 'var(--gold-300)',
    shadow: 'rgba(90,62,12,.34)'
  },
  ink: {
    bg: 'radial-gradient(85% 75% at 70% 10%, #38414E 0%, #232B36 45%, #151A22 100%)',
    floor: 'linear-gradient(180deg, rgba(226,196,118,.12) 0%, rgba(0,0,0,.28) 100%)',
    glow: 'radial-gradient(circle, rgba(226,196,118,.30) 0%, rgba(226,196,118,0) 70%)',
    text: '#FBF5E7',
    muted: 'rgba(251,245,231,.76)',
    chipBg: 'rgba(255,255,255,.10)',
    chipBorder: 'rgba(226,196,118,.5)',
    chipText: '#E7C877',
    rule: 'rgba(226,196,118,.45)',
    shadow: 'rgba(0,0,0,.55)'
  },
  night: {
    bg: 'radial-gradient(80% 80% at 68% 12%, #4A2E33 0%, #2B191F 48%, #170D12 100%)',
    floor: 'linear-gradient(180deg, rgba(226,196,118,.14) 0%, rgba(0,0,0,.34) 100%)',
    glow: 'radial-gradient(circle, rgba(255,236,190,.34) 0%, rgba(255,236,190,0) 70%)',
    text: '#FBF5E7',
    muted: 'rgba(251,245,231,.74)',
    chipBg: 'rgba(255,255,255,.10)',
    chipBorder: 'rgba(226,196,118,.5)',
    chipText: '#E7C877',
    rule: 'rgba(226,196,118,.45)',
    shadow: 'rgba(0,0,0,.6)'
  },
  marble: {
    bg: 'radial-gradient(95% 85% at 74% 6%, #FFFFFF 0%, #F4F6F7 45%, #E4E9EC 100%)',
    floor: 'linear-gradient(180deg, rgba(40,55,66,.10) 0%, rgba(40,55,66,.02) 70%, rgba(40,55,66,0) 100%)',
    glow: 'radial-gradient(circle, rgba(255,255,255,.95) 0%, rgba(255,255,255,0) 70%)',
    text: 'var(--ink-800)',
    muted: 'var(--ink-600)',
    chipBg: 'rgba(255,255,255,.9)',
    chipBorder: 'var(--gold-300)',
    chipText: 'var(--gold-800)',
    rule: 'var(--gold-300)',
    shadow: 'rgba(30,45,60,.30)'
  }
};

/* Product cut-out standing on the generated stage, with contact shadow + reflection. */
function StageShotV3({
  image,
  sc,
  size = 320
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      padding: '26px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: size * 1.15,
      height: size * 1.15,
      borderRadius: 999,
      background: sc.glow
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'relative',
      display: 'block',
      maxWidth: '100%',
      maxHeight: size,
      objectFit: 'contain',
      filter: 'drop-shadow(0 22px 22px ' + sc.shadow + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size * 0.78,
      height: 16,
      marginTop: -6,
      borderRadius: 999,
      background: 'radial-gradient(closest-side, ' + sc.shadow + ' 0%, rgba(0,0,0,0) 100%)',
      filter: 'blur(3px)'
    }
  })));
}
function PayStripV2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'center',
      background: 'rgba(255,255,255,.82)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 18px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, "\u0645\u062A\u0627\u062D \u0627\u0644\u062A\u0642\u0633\u064A\u0637 \u0648\u0627\u0644\u062F\u0641\u0639 \u0628\u0627\u0644\u0641\u064A\u0632\u0627"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, PAY.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: '.04em',
      color: 'var(--ink-600)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 6,
      padding: '4px 7px',
      background: '#fff',
      whiteSpace: 'nowrap'
    }
  }, p))));
}
function HeroSliderV2({
  onNavigate
}) {
  const {
    Button,
    Countdown
  } = __deps_home_v2();
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(v => (v + 1) % BANNERS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const go = n => setI((n + BANNERS.length) % BANNERS.length);
  const arrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 42,
    height: 42,
    borderRadius: 999,
    border: '1px solid var(--gold-300)',
    background: 'rgba(255,255,255,.9)',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    fontSize: 20,
    color: 'var(--gold-700)',
    zIndex: 3
  };
  return /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      maxWidth: 1320,
      margin: '20px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--gold-200)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 420
    }
  }, BANNERS.map((b, n) => {
    const sc = SCENES[b.scene];
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        position: n === i ? 'relative' : 'absolute',
        inset: n === i ? 'auto' : 0,
        opacity: n === i ? 1 : 0,
        pointerEvents: n === i ? 'auto' : 'none',
        transition: 'opacity var(--dur-slow) var(--ease-out)',
        background: sc.bg,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        minHeight: 420
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        insetInline: 0,
        bottom: 0,
        height: '34%',
        background: sc.floor,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement(StageShotV3, {
      image: b.image,
      sc: sc,
      size: 330
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: '40px 48px 40px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans-ar)',
        fontSize: 13,
        fontWeight: 800,
        color: sc.chipText,
        background: sc.chipBg,
        border: '1px solid ' + sc.chipBorder,
        borderRadius: 'var(--radius-pill)',
        padding: '6px 14px'
      }
    }, b.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-sans-ar)',
        fontSize: 44,
        lineHeight: 1.3,
        fontWeight: 900,
        color: sc.text,
        textTransform: 'none',
        letterSpacing: 'normal',
        maxWidth: 480
      }
    }, b.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        maxWidth: 420
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        flex: 1,
        background: sc.rule
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans-ar)',
        fontSize: 20,
        fontWeight: 800,
        color: sc.text
      }
    }, b.sub), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        flex: 1,
        background: sc.rule
      }
    })), b.big && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 88,
        fontWeight: 900,
        lineHeight: 1,
        backgroundImage: GOLD_TEXT,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontVariantNumeric: 'tabular-nums',
        filter: 'drop-shadow(0 6px 10px rgba(140,100,32,.28))'
      }
    }, b.big), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 34,
        fontWeight: 900,
        backgroundImage: GOLD_TEXT,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        marginTop: 8
      }
    }, b.unit)), b.note && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-sans-ar)',
        fontSize: 16,
        lineHeight: 1.9,
        color: sc.muted,
        maxWidth: 420
      }
    }, b.note), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNavigate(b.route, b.params || {})
    }, b.cta), /*#__PURE__*/React.createElement(PayStripV2, null)));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i - 1),
    style: {
      ...arrow,
      insetInlineEnd: 16
    },
    "aria-label": "\u0627\u0644\u0633\u0627\u0628\u0642"
  }, "\u203A"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i + 1),
    style: {
      ...arrow,
      insetInlineStart: 16
    },
    "aria-label": "\u0627\u0644\u062A\u0627\u0644\u064A"
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInline: 0,
      bottom: 16,
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      zIndex: 3
    }
  }, BANNERS.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    "aria-label": 'بانر ' + (n + 1),
    style: {
      width: n === i ? 26 : 9,
      height: 9,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: n === i ? 'var(--gold-600)' : 'var(--gold-300)',
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Countdown, {
    seconds: 9 * 3600 + 42 * 60,
    label: "\u0627\u0644\u0639\u0631\u0636 \u064A\u0646\u062A\u0647\u064A \u062E\u0644\u0627\u0644"
  })));
}

/* Promo strip shown between product rows: product shot + marketing copy + gold marble background */
function PromoStripV2({
  eyebrow,
  title,
  note,
  big,
  unit,
  cta,
  image,
  onClick,
  flip,
  scene
}) {
  const {
    Button
  } = __deps_home_v2();
  const sc = SCENES[scene || 'gold'];
  return /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '48px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: flip ? '1fr 1.1fr' : '1.1fr 1fr',
      alignItems: 'center',
      background: sc.bg,
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      minHeight: 240,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInline: 0,
      bottom: 0,
      height: '34%',
      background: sc.floor,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      order: flip ? 2 : 1,
      padding: '30px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 12,
      fontWeight: 800,
      color: sc.chipText,
      background: sc.chipBg,
      border: '1px solid ' + sc.chipBorder,
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 30,
      fontWeight: 900,
      lineHeight: 1.35,
      color: sc.text,
      textTransform: 'none',
      letterSpacing: 'normal',
      maxWidth: 460
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, big && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 54,
      fontWeight: 900,
      lineHeight: 1,
      backgroundImage: GOLD_TEXT,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontVariantNumeric: 'tabular-nums'
    }
  }, big, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, unit)), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      lineHeight: 1.9,
      color: sc.muted,
      maxWidth: 380
    }
  }, note)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClick
  }, cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 1 : 2,
      position: 'relative',
      height: '100%',
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement(StageShotV3, {
    image: image,
    sc: sc,
    size: 196
  }))));
}

/* One rotating row of 5 products. Items shift automatically every few seconds. */
function AutoRowV2({
  title,
  subtitle,
  pool,
  offset,
  tick,
  onAdd,
  onOpen,
  action
}) {
  const {
    ProductTile
  } = __deps_home_v2();
  const step = (offset + tick * 2) % pool.length;
  const items = Array.from({
    length: 5
  }, (_, k) => pool[(step + k) % pool.length]);
  return /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '48px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 26,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal',
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, subtitle)), action && /*#__PURE__*/React.createElement("button", {
    onClick: action,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--gold-700)'
    }
  }, "\u0634\u0648\u0641 \u0627\u0644\u0643\u0644 \u2039")), /*#__PURE__*/React.createElement("div", {
    key: step,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 18,
      animation: 'marwaFade var(--dur-slow) var(--ease-out)'
    }
  }, items.map((p, k) => /*#__PURE__*/React.createElement(ProductTile, _extends({
    key: p.id + '-' + k
  }, p, {
    onAdd: () => onAdd(p),
    onClick: () => onOpen(p)
  })))));
}
const ROWS = [{
  title: 'الأكثر مبيعاً',
  subtitle: 'اللي العملاء بيطلبوه أكتر حاجة'
}, {
  title: 'وصل حديثاً',
  subtitle: 'أحدث ما وصل المعرض'
}, {
  title: 'زجاج وكريستال',
  subtitle: 'تخصص المروة الأساسي',
  cat: 'crystal'
}, {
  title: 'أطقم السفرة',
  subtitle: 'بورسلين مذهب لكل المناسبات',
  cat: 'sofra'
}, {
  title: 'عروض الأسبوع',
  subtitle: 'خصومات محدودة المدة',
  deal: true
}, {
  title: 'أدوات المطبخ',
  subtitle: 'ستانلس وسيراميك يستحمل',
  cat: 'kitchen'
}, {
  title: 'أطقم الهدايا',
  subtitle: 'جاهزة للتغليف والإهداء',
  cat: 'gifts'
}, {
  title: 'حافظات الطعام',
  subtitle: 'تنظيم مطبخك بسهولة',
  cat: 'storage'
}, {
  title: 'اختيارات المعرض',
  subtitle: 'مختارة من فرع جراح'
}, {
  title: 'تحت 1000 جنيه',
  subtitle: 'قطع مميزة بسعر لطيف',
  max: 1000
}];
const STRIPS = [{
  eyebrow: 'عرض الأسبوع',
  title: 'اشتري طقمين والتالت بنص التمن',
  note: 'على كل أطقم الهدايا والكريستال — الخصم بيتحسب تلقائي في السلة.',
  cta: 'شوف أطقم الهدايا',
  image: '/assets/cutouts/rcr-athena.png',
  scene: 'night',
  route: 'listing',
  params: {
    cat: 'gifts'
  }
}, {
  eyebrow: 'شحن مجاني',
  title: 'الشحن علينا فوق 3000 جنيه',
  note: 'توصيل لكل محافظات مصر خلال 2–5 أيام عمل، وتغليف مؤمن ضد الكسر.',
  cta: 'ابدأ التسوق',
  image: '/assets/cutouts/korkmaz-alfa.png',
  scene: 'ink',
  route: 'listing',
  flip: true
}, {
  eyebrow: 'خصم خاص',
  title: 'أطقم أواني الطهي',
  big: '30',
  unit: '٪',
  cta: 'تسوق المطبخ',
  image: '/assets/cutouts/eldahan-pots.png',
  scene: 'gold',
  route: 'listing',
  params: {
    cat: 'kitchen'
  }
}, {
  eyebrow: 'أواني الفرن',
  title: 'زجاج مقاوم للحرارة بضمان 10 سنوات',
  note: 'من –ف4٠° حتى +٣٠٠° — يدخل الفرن والفريزر والغسالة.',
  cta: 'تسوق أواني الفرن',
  image: '/assets/cutouts/pyrex-trays.png',
  scene: 'night',
  route: 'listing',
  params: {
    cat: 'kitchen'
  },
  flip: true
}, {
  eyebrow: 'الدفع عند الاستلام',
  title: 'ادفع لما توصلك بالسلامة',
  note: 'متاح في كل المحافظات، مع إمكانية الاستبدال خلال 14 يوم.',
  cta: 'اطلب دلوقتي',
  image: '/assets/cutouts/eldahan-pots.png',
  scene: 'marble',
  route: 'listing'
}];
function HomeV2({
  onNavigate,
  onAdd,
  onOpen
}) {
  const {
    Button,
    CategoryTile,
    TrustRow,
    CATEGORIES,
    PRODUCTS
  } = __deps_home_v2();
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTick(v => v + 1), 7000);
    return () => clearInterval(t);
  }, []);
  const poolFor = r => {
    let list = PRODUCTS;
    if (r.cat) list = PRODUCTS.filter(p => p.cat === r.cat);
    if (r.deal) list = PRODUCTS.filter(p => p.original);
    if (r.max) list = PRODUCTS.filter(p => p.current <= r.max);
    return list.length >= 5 ? list : PRODUCTS;
  };
  const blocks = [];
  ROWS.forEach((r, n) => {
    blocks.push(/*#__PURE__*/React.createElement(AutoRowV2, {
      key: 'row' + n,
      title: r.title,
      subtitle: r.subtitle,
      pool: poolFor(r),
      offset: n * 3,
      tick: tick,
      onAdd: onAdd,
      onOpen: onOpen,
      action: () => onNavigate('listing', r.cat ? {
        cat: r.cat
      } : {})
    }));
    if (n % 2 === 1 && STRIPS[(n - 1) / 2]) {
      const s = STRIPS[(n - 1) / 2];
      blocks.push(/*#__PURE__*/React.createElement(PromoStripV2, _extends({
        key: 'strip' + n
      }, s, {
        onClick: () => onNavigate(s.route, s.params || {})
      })));
    }
  });
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes marwaFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}'), /*#__PURE__*/React.createElement(HeroSliderV2, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      borderBlock: '1px solid var(--border-hairline)',
      padding: '22px 24px',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(TrustRow, null))), /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '48px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 26,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u062A\u0633\u0648\u0642 \u062D\u0633\u0628 \u0627\u0644\u0642\u0633\u0645"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 18
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryTile, _extends({
    key: c.id
  }, c, {
    onClick: () => onNavigate('listing', {
      cat: c.id
    })
  }))))), blocks, /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '64px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'center',
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/storefront-night.jpg",
    alt: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0648\u0629",
    style: {
      width: '100%',
      height: 360,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 32px 32px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 28,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0645\u0639\u0631\u0636 \u062D\u0642\u064A\u0642\u064A\u060C \u0645\u0634 \u0635\u0641\u062D\u0629 \u0628\u0633"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--text-muted)'
    }
  }, "\u0645\u0639\u0631\u0636\u0646\u0627 \u0641\u064A \u062C\u0631\u0627\u062D \u2014 \u0623\u062C\u0627 \u2014 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629 \u0645\u0641\u062A\u0648\u062D \u064A\u0648\u0645\u064A\u0627\u064B. \u062A\u0642\u062F\u0631 \u062A\u0634\u0648\u0641 \u0627\u0644\u0645\u0646\u062A\u062C \u0628\u0646\u0641\u0633\u0643 \u0642\u0628\u0644 \u0645\u0627 \u062A\u0634\u062A\u0631\u064A\u060C \u0623\u0648 \u062A\u0637\u0644\u0628 \u0623\u0648\u0646\u0644\u0627\u064A\u0646 \u0648\u0646\u0648\u0635\u0644\u0651\u0643."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('about')
  }, "\u0627\u0639\u0631\u0641 \u0623\u0643\u062A\u0631 \u0639\u0646\u0646\u0627")))));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  HomeV2,
  HeroSliderV2,
  PromoStripV2,
  AutoRowV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store-v3/Home3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Cart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function __deps_ui_kits_store_Cart_jsx() {
  var {
    Button,
    Input,
    Icon
  } = window.__ELMARWA__;
  var {
    Price,
    QuantityStepper,
    FreeShipMeter,
    ProductTile,
    TrustRow
  } = window.__ELMARWA__;
  var {
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = window.__STORE__;
  return {
    Button,
    Input,
    Icon,
    Price,
    QuantityStepper,
    FreeShipMeter,
    ProductTile,
    TrustRow,
    PRODUCTS,
    SHIPPING_THRESHOLD
  };
}
function Cart({
  items,
  subtotal,
  onQty,
  onRemove,
  onNavigate,
  onAdd,
  onOpen
}) {
  const {
    Button,
    Input,
    Icon,
    Price,
    QuantityStepper,
    FreeShipMeter,
    ProductTile,
    TrustRow,
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = __deps_ui_kits_store_Cart_jsx();
  const [code, setCode] = React.useState('');
  const [applied, setApplied] = React.useState(false);
  const discount = applied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : 85;
  const total = subtotal - discount + (items.length ? shipping : 0);
  const suggestions = PRODUCTS.filter(p => !items.some(i => i.id === p.id)).slice(0, 4);
  return /*#__PURE__*/React.createElement("main", {
    dir: "rtl",
    style: {
      background: 'var(--surface-page)',
      minHeight: '60vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 30,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A"), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 56,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 17,
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, "\u0633\u0644\u062A\u0643 \u0644\u0633\u0647 \u0641\u0627\u0636\u064A\u0629."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('listing')
  }, "\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0633\u0648\u0642")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(FreeShipMeter, {
    subtotal: subtotal,
    threshold: SHIPPING_THRESHOLD
  })), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 16,
      padding: 20,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: "",
    style: {
      width: 104,
      height: 104,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      fontWeight: 500
    }
  }, it.title), /*#__PURE__*/React.createElement(Price, {
    current: it.current,
    original: it.original,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: it.qty,
    onChange: v => onQty(it.id, v)
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(it.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\u0625\u0632\u0627\u0644\u0629"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 18,
      fontWeight: 800
    }
  }, (it.current * it.qty).toLocaleString('en-US'), " \u062C\u0646\u064A\u0647")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'sticky',
      top: 200
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 18,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0645\u0644\u062E\u0635 \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: code,
    onChange: e => setCode(e.target.value),
    placeholder: "\u0643\u0648\u062F \u0627\u0644\u062E\u0635\u0645",
    style: {
      flex: 1,
      padding: '11px 12px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setApplied(code.trim().toUpperCase() === 'FIRST10')
  }, "\u062A\u0641\u0639\u064A\u0644")), applied && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--success)'
    }
  }, "\u2713 \u0627\u062A\u0641\u0639\u0644 \u0643\u0648\u062F FIRST10 \u2014 \u062E\u0635\u0645 10\u066A"), code && !applied && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\u062C\u0631\u0651\u0628 \u0643\u0648\u062F FIRST10"), [['المجموع', subtotal], ...(discount ? [['الخصم', -discount]] : []), ['الشحن', shipping || 'مجاني']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", null, typeof v === 'number' ? v.toLocaleString('en-US') + ' جنيه' : v))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 14,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 19,
      fontWeight: 800
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"), /*#__PURE__*/React.createElement("span", null, total.toLocaleString('en-US'), " \u062C\u0646\u064A\u0647")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onNavigate('checkout')
  }, "\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement(TrustRow, {
    items: [['banknote', 'الدفع عند الاستلام'], ['shield-check', 'مؤمن ضد الكسر']],
    style: {
      gridTemplateColumns: '1fr',
      gap: 8
    }
  }))), items.length > 0 && /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 22,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0643\u0645\u0651\u0644 \u0637\u0644\u0628\u0643 \u0628\u064A\u0647\u0645"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, suggestions.map(p => /*#__PURE__*/React.createElement(ProductTile, _extends({
    key: p.id
  }, p, {
    onAdd: () => onAdd(p),
    onClick: () => onOpen(p)
  })))))));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  Cart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Checkout.jsx
try { (() => {
function __deps_ui_kits_store_Checkout_jsx() {
  var {
    Button,
    Input,
    Select,
    Textarea,
    Icon
  } = window.__ELMARWA__;
  var {
    Price,
    FreeShipMeter
  } = window.__ELMARWA__;
  var {
    GOVERNORATES,
    SHIPPING_THRESHOLD,
    PRODUCTS
  } = window.__STORE__;
  return {
    Button,
    Input,
    Select,
    Textarea,
    Icon,
    Price,
    FreeShipMeter,
    GOVERNORATES,
    SHIPPING_THRESHOLD,
    PRODUCTS
  };
}
function Checkout({
  items,
  subtotal,
  onNavigate
}) {
  const {
    Button,
    Input,
    Select,
    Textarea,
    Icon,
    Price,
    FreeShipMeter,
    GOVERNORATES,
    SHIPPING_THRESHOLD,
    PRODUCTS
  } = __deps_ui_kits_store_Checkout_jsx();
  const [pay, setPay] = React.useState('cod');
  const [done, setDone] = React.useState(false);
  const [upsell, setUpsell] = React.useState(false);
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : 85;
  const gift = PRODUCTS[16];
  const total = subtotal + shipping + (upsell ? gift.current : 0);
  if (done) return /*#__PURE__*/React.createElement("main", {
    dir: "rtl",
    style: {
      background: 'var(--surface-page)',
      padding: '80px 24px',
      minHeight: '60vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      background: 'var(--marble-000)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      padding: 40,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 999,
      background: 'var(--gold-50)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    color: "var(--gold-600)"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 26,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--text-muted)'
    }
  }, "\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628 ", /*#__PURE__*/React.createElement("b", null, "#EM-10428"), ". \u0647\u0646\u0643\u0644\u0645\u0643 \u062E\u0644\u0627\u0644 \u0633\u0627\u0639\u062A\u064A\u0646 \u0644\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628 \u0648\u0627\u0644\u0639\u0646\u0648\u0627\u0646."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('home')
  }, "\u0627\u0631\u062C\u0639 \u0644\u0644\u0645\u062A\u062C\u0631")));
  const field = {
    padding: '12px 14px',
    border: '1px solid var(--border-hairline)',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-sans-ar)',
    fontSize: 15,
    outline: 'none',
    width: '100%'
  };
  return /*#__PURE__*/React.createElement("main", {
    dir: "rtl",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 28,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "\u062E\u0637\u0648\u0629 \u0648\u0627\u062D\u062F\u0629 \u0628\u0633 \u2014 \u0645\u0646 \u063A\u064A\u0631 \u062D\u0633\u0627\u0628 \u0648\u0644\u0627 \u062A\u0633\u062C\u064A\u0644."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 17,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0648\u0635\u064A\u0644"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644",
    style: field
  }), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644",
    style: field
  }), /*#__PURE__*/React.createElement("select", {
    style: field
  }, GOVERNORATES.map(g => /*#__PURE__*/React.createElement("option", {
    key: g
  }, g))), /*#__PURE__*/React.createElement("input", {
    placeholder: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629 / \u0627\u0644\u0645\u0631\u0643\u0632",
    style: field
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u062A\u0641\u0635\u064A\u0644",
    style: {
      ...field,
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement("textarea", {
    rows: 2,
    placeholder: "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0637\u0644\u0628 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
    style: {
      ...field,
      gridColumn: '1 / -1',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 17,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639"), [['cod', 'الدفع عند الاستلام', 'ادفع كاش للمندوب لما يوصلك'], ['card', 'فيزا / ماستركارد', 'دفع آمن أونلاين'], ['wallet', 'محفظة الموبايل', 'فودافون كاش أو إنستاباي']].map(([id, t, s]) => /*#__PURE__*/React.createElement("label", {
    key: id,
    onClick: () => setPay(id),
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      cursor: 'pointer',
      padding: 14,
      border: '1px solid ' + (pay === id ? 'var(--gold-400)' : 'var(--border-hairline)'),
      background: pay === id ? 'var(--gold-50)' : 'transparent',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      borderRadius: 999,
      border: '2px solid ' + (pay === id ? 'var(--gold-500)' : 'var(--marble-300)'),
      background: pay === id ? 'var(--gold-400)' : 'transparent'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, s)))), /*#__PURE__*/React.createElement("label", {
    onClick: () => setUpsell(!upsell),
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      cursor: 'pointer',
      padding: 14,
      border: '1px dashed var(--gold-400)',
      background: 'var(--gold-50)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      borderRadius: 3,
      border: '1px solid var(--gold-500)',
      background: upsell ? 'var(--gold-400)' : 'transparent',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontSize: 12
    }
  }, upsell ? '✓' : ''), /*#__PURE__*/React.createElement("img", {
    src: gift.image,
    alt: "",
    style: {
      width: 46,
      height: 46,
      objectFit: 'cover',
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--gold-700)'
    }
  }, "\u0636\u064A\u0641 ", gift.title, " \u0628\u0640 ", gift.current, " \u062C\u0646\u064A\u0647 \u0628\u0633"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\u0627\u0644\u0639\u0631\u0636 \u062F\u0647 \u0645\u062A\u0627\u062D \u0645\u0639 \u0627\u0644\u0637\u0644\u0628 \u062F\u0647 \u0628\u0633"))), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setDone(true)
  }, "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "\u0628\u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628 \u0623\u0646\u062A \u0645\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0634\u062D\u0646 \u0648\u0627\u0644\u0627\u0633\u062A\u0631\u062C\u0627\u0639.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'sticky',
      top: 200
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 17,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0637\u0644\u0628\u0643"), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: "",
    style: {
      width: 52,
      height: 52,
      objectFit: 'cover',
      borderRadius: 4,
      border: '1px solid var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14
    }
  }, it.title, " \xD7 ", it.qty), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      fontWeight: 700
    }
  }, (it.current * it.qty).toLocaleString('en-US')))), upsell && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gift.image,
    alt: "",
    style: {
      width: 52,
      height: 52,
      objectFit: 'cover',
      borderRadius: 4,
      border: '1px solid var(--gold-300)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--gold-700)'
    }
  }, gift.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      fontWeight: 700
    }
  }, gift.current)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0634\u062D\u0646"), /*#__PURE__*/React.createElement("span", null, shipping ? shipping + ' جنيه' : 'مجاني')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 19,
      fontWeight: 800
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"), /*#__PURE__*/React.createElement("span", null, total.toLocaleString('en-US'), " \u062C\u0646\u064A\u0647"))), /*#__PURE__*/React.createElement(FreeShipMeter, {
    subtotal: subtotal,
    threshold: SHIPPING_THRESHOLD
  })))));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  Checkout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Chrome.jsx
try { (() => {
function __deps_chrome() {
  var {
    Icon,
    Button,
    OrnamentDivider
  } = window.__ELMARWA__;
  var {
    FreeShipMeter,
    Price,
    QuantityStepper,
    TrustRow
  } = window.__ELMARWA__;
  var {
    CATEGORIES,
    SHIPPING_THRESHOLD
  } = window.__STORE__;
  return {
    Icon,
    Button,
    OrnamentDivider,
    FreeShipMeter,
    Price,
    QuantityStepper,
    TrustRow,
    CATEGORIES,
    SHIPPING_THRESHOLD
  };
}
function PromoBar() {
  const msgs = [['شحن مجاني على الطلبات فوق ', '3000', ' جنيه'], ['كود ', 'FIRST10', ' — خصم ', '10', '٪ على أول طلب'], ['الدفع عند الاستلام في كل المحافظات']];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % msgs.length), 4000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      background: 'var(--gold-100)',
      color: 'var(--gold-800)',
      textAlign: 'center',
      padding: '9px 16px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      fontWeight: 'var(--weight-medium)',
      borderBottom: '1px solid var(--gold-200)'
    }
  }, msgs[i].map((part, n) => /^[A-Z0-9]/.test(part) ? /*#__PURE__*/React.createElement("b", {
    key: n,
    style: {
      fontWeight: 800,
      fontVariantNumeric: 'tabular-nums'
    }
  }, part) : /*#__PURE__*/React.createElement("span", {
    key: n
  }, part)));
}
function Header({
  route,
  onNavigate,
  cartCount,
  onOpenCart,
  query,
  onQuery
}) {
  const {
    Icon,
    Button,
    CATEGORIES
  } = __deps_chrome();
  const [menu, setMenu] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    dir: "rtl",
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(PromoBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '0 24px',
      height: 92,
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-gold-on-paper.jpg",
    alt: "\u0627\u0644\u0645\u0631\u0648\u0629 \u0644\u0644\u0632\u062C\u0627\u062C",
    onClick: () => onNavigate('home'),
    style: {
      height: 74,
      cursor: 'pointer',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onNavigate('search');
    },
    style: {
      flex: 1,
      maxWidth: 560,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => onQuery(e.target.value),
    placeholder: "\u0627\u0628\u062D\u062B \u0639\u0646 \u0637\u0642\u0645\u060C \u0643\u0631\u064A\u0633\u062A\u0627\u0644\u060C \u062D\u0644\u0629\u2026",
    style: {
      width: '100%',
      height: 48,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--gold-300)',
      background: 'var(--marble-050)',
      color: 'var(--text-body)',
      padding: '0 46px 0 14px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInlineStart: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: "var(--gold-600)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginInlineStart: 'auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:01007022631",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 800,
      direction: 'ltr',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "010 070 226 313")), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCart,
    style: {
      position: 'relative',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 26,
    color: "var(--gold-600)"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      insetInlineStart: -4,
      minWidth: 20,
      height: 20,
      borderRadius: 999,
      background: 'var(--sale)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 800,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, cartCount))))), /*#__PURE__*/React.createElement("nav", {
    onMouseLeave: () => setMenu(null),
    style: {
      background: 'var(--marble-050)',
      borderBottom: '1px solid var(--border-hairline)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onMouseEnter: () => setMenu(c.id),
    onClick: () => onNavigate('listing', {
      cat: c.id
    }),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      fontWeight: 'var(--weight-medium)',
      color: menu === c.id ? 'var(--gold-700)' : 'var(--text-body)',
      borderBottom: '2px solid ' + (menu === c.id ? 'var(--gold-400)' : 'transparent')
    }
  }, c.title)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('flash'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--sale)'
    }
  }, "\u0627\u0644\u0639\u0631\u0648\u0636"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('about'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, "\u0645\u0646 \u0646\u062D\u0646")), menu && (() => {
    const c = CATEGORIES.find(x => x.id === menu);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        insetInline: 0,
        top: '100%',
        background: 'var(--marble-000)',
        boxShadow: 'var(--shadow-lg)',
        borderTop: '2px solid var(--gold-400)',
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1320,
        margin: '0 auto',
        padding: 28,
        display: 'grid',
        gridTemplateColumns: '1fr 260px',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '10px 24px'
      }
    }, c.children.map(s => /*#__PURE__*/React.createElement("a", {
      key: s,
      onClick: () => onNavigate('listing', {
        cat: c.id,
        sub: s
      }),
      style: {
        cursor: 'pointer',
        border: 'none',
        fontFamily: 'var(--font-sans-ar)',
        fontSize: 15,
        color: 'var(--text-body)',
        padding: '4px 0'
      }
    }, s))), /*#__PURE__*/React.createElement("img", {
      src: c.image,
      alt: "",
      style: {
        width: '100%',
        height: 170,
        objectFit: 'cover',
        borderRadius: 'var(--radius-md)'
      }
    })));
  })()));
}
function MiniCart({
  open,
  onClose,
  items,
  onQty,
  subtotal,
  onNavigate
}) {
  const {
    Button,
    FreeShipMeter,
    Price,
    QuantityStepper,
    SHIPPING_THRESHOLD
  } = __deps_chrome();
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'rgba(58,38,7,.28)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    dir: "rtl",
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      insetInlineStart: 0,
      top: 0,
      bottom: 0,
      width: 400,
      maxWidth: '92vw',
      background: 'var(--marble-000)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 18,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 24,
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--gold-50)'
    }
  }, /*#__PURE__*/React.createElement(FreeShipMeter, {
    subtotal: subtotal,
    threshold: SHIPPING_THRESHOLD
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      color: 'var(--text-muted)'
    }
  }, "\u0633\u0644\u062A\u0643 \u0641\u0627\u0636\u064A\u0629."), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: "",
    style: {
      width: 68,
      height: 68,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      lineHeight: 1.4
    }
  }, it.title), /*#__PURE__*/React.createElement(Price, {
    current: it.current,
    size: "sm",
    showPercent: false
  }), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: it.qty,
    onChange: v => onQty(it.id, v)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans-ar)',
      fontWeight: 800,
      fontSize: 17
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, subtotal.toLocaleString('en-US'), " \u062C\u0646\u064A\u0647")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      onClose();
      onNavigate('checkout');
    }
  }, "\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onClose();
      onNavigate('cart');
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\u0639\u0631\u0636 \u0627\u0644\u0633\u0644\u0629"))));
}
function Footer({
  onNavigate
}) {
  const {
    Icon,
    TrustRow
  } = __deps_chrome();
  const cols = [['تسوق', ['أطقم السفرة', 'الزجاج والكريستال', 'أدوات المطبخ', 'حافظات الطعام', 'أطقم الهدايا']], ['المتجر', ['من نحن', 'تواصل معنا', 'الأسئلة الشائعة', 'سياسة الشحن والاسترجاع']]];
  return /*#__PURE__*/React.createElement("footer", {
    dir: "rtl",
    style: {
      background: 'var(--marble-100)',
      color: 'var(--text-body)',
      marginTop: 64,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--marble-300)',
      padding: '28px 24px',
      background: 'var(--marble-050)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(TrustRow, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '48px 24px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-gold-on-paper.jpg",
    alt: "",
    style: {
      height: 104,
      alignSelf: 'flex-start',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      lineHeight: 1.9,
      color: 'var(--text-muted)'
    }
  }, "\u0645\u0635\u0646\u0639 \u0648\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0648\u0629 \u0644\u0632\u062E\u0631\u0641\u0629 \u0627\u0644\u0632\u062C\u0627\u062C \u0648\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644. \u062C\u0645\u0644\u0629 \u0648\u0642\u0637\u0627\u0639\u064A \u0648\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0623\u062F\u0648\u0627\u062A \u0645\u0646\u0632\u0644\u064A\u0629."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--gold-700)'
    }
  }, "\u062C\u0631\u0627\u062D \u2014 \u0623\u062C\u0627 \u2014 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629")), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--gold-700)',
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, h), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNavigate(l === 'من نحن' ? 'about' : l === 'تواصل معنا' ? 'contact' : l === 'الأسئلة الشائعة' ? 'faq' : l === 'سياسة الشحن والاسترجاع' ? 'policy' : 'listing'),
    style: {
      cursor: 'pointer',
      border: 'none',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--gold-700)',
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"), ['010 070 226 313', '012 056 044 90', '012 000 92 546'].map(n => /*#__PURE__*/React.createElement("b", {
    key: n,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--text-heading)',
      direction: 'ltr',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=61554717004094",
    style: {
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 22,
    color: "var(--gold-600)"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/elmarwa_glass_/",
    style: {
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 22,
    color: "var(--gold-600)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--marble-300)',
      padding: '18px 24px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\xA9 ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 800,
      fontFamily: 'var(--font-sans)'
    }
  }, "2026"), " \u0627\u0644\u0645\u0631\u0648\u0629 \u0644\u0644\u0632\u062C\u0627\u062C \u0648\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644 \u2014 \u0643\u0644 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629"));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  Header,
  Footer,
  MiniCart,
  PromoBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Cro.jsx
try { (() => {
function __deps_ui_kits_store_Cro_jsx() {
  var {
    Button,
    Icon
  } = window.__ELMARWA__;
  var {
    Modal,
    Countdown,
    Price,
    ProductTile,
    FreeShipMeter
  } = window.__ELMARWA__;
  var {
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = window.__STORE__;
  return {
    Button,
    Icon,
    Modal,
    Countdown,
    Price,
    ProductTile,
    FreeShipMeter,
    PRODUCTS,
    SHIPPING_THRESHOLD
  };
}

/* Welcome offer — fires 15s after landing, once per session. */
function WelcomeOffer({
  open,
  onClose
}) {
  const {
    Button,
    Icon,
    Modal,
    Countdown,
    Price,
    ProductTile,
    FreeShipMeter,
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = __deps_ui_kits_store_Cro_jsx();
  const [phone, setPhone] = React.useState('');
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    width: 720
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/products/promo-laroos-crystal-gift.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      minHeight: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      justifyContent: 'center'
    }
  }, done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 24,
      fontWeight: 900,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0643\u0648\u062F\u0643 \u062C\u0627\u0647\u0632"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px dashed var(--gold-400)',
      borderRadius: 'var(--radius-sm)',
      padding: '14px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '.2em',
      color: 'var(--gold-700)',
      background: 'var(--gold-50)'
    }
  }, "FIRST10"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\u0627\u0633\u062A\u062E\u062F\u0645\u0647 \u0641\u064A \u0627\u0644\u0633\u0644\u0629 \u0639\u0644\u0649 \u0623\u0648\u0644 \u0637\u0644\u0628. \u0635\u0627\u0644\u062D 48 \u0633\u0627\u0639\u0629."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onClose
  }, "\u064A\u0644\u0627 \u0646\u062A\u0633\u0648\u0642")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--gold-600)'
    }
  }, "\u0639\u0631\u0636 \u0623\u0648\u0644 \u0637\u0644\u0628"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 28,
      fontWeight: 900,
      lineHeight: 1.35,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u062E\u0635\u0645 10\u066A \u0639\u0644\u0649", /*#__PURE__*/React.createElement("br", null), "\u0623\u0648\u0644 \u0637\u0644\u0628 \u0644\u064A\u0643"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      lineHeight: 1.8,
      color: 'var(--text-muted)'
    }
  }, "\u0633\u064A\u0628 \u0631\u0642\u0645\u0643 \u0648\u0646\u0628\u0639\u062A\u0644\u0643 \u0627\u0644\u0643\u0648\u062F\u060C \u0648\u0643\u0645\u0627\u0646 \u0623\u0648\u0644 \u0645\u0627 \u064A\u0646\u0632\u0644 \u0639\u0631\u0636 \u062C\u062F\u064A\u062F."), /*#__PURE__*/React.createElement("input", {
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "01000000000",
    style: {
      padding: '13px 14px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setDone(true)
  }, "\u0647\u0627\u062A\u0644\u064A \u0627\u0644\u0643\u0648\u062F"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\u0644\u0627 \u0634\u0643\u0631\u0627\u064B\u060C \u0647\u0643\u0645\u0644 \u062A\u0633\u0648\u0642")))));
}

/* Cross-sell sheet — fires on add-to-cart. */
function AddedSheet({
  open,
  onClose,
  product,
  subtotal,
  onAdd,
  onNavigate
}) {
  const {
    Button,
    Icon,
    Modal,
    Countdown,
    Price,
    ProductTile,
    FreeShipMeter,
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = __deps_ui_kits_store_Cro_jsx();
  if (!product) return null;
  const suggestions = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    width: 560
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 999,
      background: 'var(--gold-50)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 19,
    color: "var(--gold-600)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 18,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0627\u062A\u0636\u0627\u0641 \u0644\u0644\u0633\u0644\u0629")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      background: 'var(--marble-050)',
      borderRadius: 'var(--radius-sm)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: "",
    style: {
      width: 60,
      height: 60,
      objectFit: 'cover',
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15
    }
  }, product.title), /*#__PURE__*/React.createElement(Price, {
    current: product.current,
    size: "sm",
    showPercent: false
  })), /*#__PURE__*/React.createElement(FreeShipMeter, {
    subtotal: subtotal,
    threshold: SHIPPING_THRESHOLD
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      fontWeight: 700,
      display: 'block',
      marginBottom: 10
    }
  }, "\u0636\u064A\u0641\u0647\u0645 \u0648\u0643\u0645\u0651\u0644 \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0645\u062C\u0627\u0646\u064A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      flex: 1,
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.image,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1',
      objectFit: 'cover',
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 12,
      lineHeight: 1.4,
      height: 34,
      overflow: 'hidden'
    }
  }, s.title), /*#__PURE__*/React.createElement("button", {
    onClick: () => onAdd(s),
    style: {
      border: '1px solid var(--gold-400)',
      background: 'var(--gold-50)',
      color: 'var(--gold-700)',
      borderRadius: 4,
      padding: '6px 0',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 12,
      fontWeight: 700
    }
  }, "+ \u0636\u064A\u0641"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "\u0643\u0645\u0651\u0644 \u062A\u0633\u0648\u0642"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      flex: 1
    },
    onClick: () => {
      onClose();
      onNavigate('cart');
    }
  }, "\u0631\u0648\u062D \u0644\u0644\u0633\u0644\u0629"))));
}

/* Exit intent — fires once when the pointer leaves the top of the viewport. */
function ExitOffer({
  open,
  onClose,
  onNavigate
}) {
  const {
    Button,
    Icon,
    Modal,
    Countdown,
    Price,
    ProductTile,
    FreeShipMeter,
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = __deps_ui_kits_store_Cro_jsx();
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    width: 480
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 26,
      fontWeight: 900,
      lineHeight: 1.4,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0627\u0633\u062A\u0646\u0649 \u2014 \u0627\u0644\u0634\u062D\u0646", /*#__PURE__*/React.createElement("br", null), "\u0639\u0644\u064A\u0643 \u0645\u062C\u0627\u0646\u064A \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      lineHeight: 1.85,
      color: 'var(--text-muted)'
    }
  }, "\u0639\u0644\u0649 \u0623\u064A \u0637\u0644\u0628 \u0641\u0648\u0642 2000 \u062C\u0646\u064A\u0647 \u0628\u062F\u0644 3000\u060C \u0644\u062D\u062F \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u064A\u0648\u0645."), /*#__PURE__*/React.createElement(Countdown, {
    seconds: 2 * 3600 + 15 * 60,
    label: "\u064A\u0646\u062A\u0647\u064A \u062E\u0644\u0627\u0644"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      onClose();
      onNavigate('flash');
    }
  }, "\u0634\u0648\u0641 \u0627\u0644\u0639\u0631\u0648\u0636"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\u0644\u0627 \u0634\u0643\u0631\u0627\u064B")));
}

/* Sticky bottom bar — mobile-first CRO, always one tap from the cart. */
function StickyBar({
  subtotal,
  count,
  onNavigate
}) {
  const {
    Button,
    Icon,
    Modal,
    Countdown,
    Price,
    ProductTile,
    FreeShipMeter,
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = __deps_ui_kits_store_Cro_jsx();
  if (!count) return null;
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      position: 'fixed',
      insetInline: 0,
      bottom: 0,
      zIndex: 60,
      background: 'var(--marble-000)',
      borderTop: '2px solid var(--gold-400)',
      boxShadow: '0 -6px 20px rgba(58,38,7,.10)',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(FreeShipMeter, {
    subtotal: subtotal,
    threshold: SHIPPING_THRESHOLD,
    style: {
      color: 'var(--text-body)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: () => onNavigate('checkout')
  }, "\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u2014 ", subtotal.toLocaleString('en-US'), " \u062C\u0646\u064A\u0647"));
}

/* Social proof toast — recent order notifications, bottom-right. */
function ProofToast() {
  const {
    Button,
    Icon,
    Modal,
    Countdown,
    Price,
    ProductTile,
    FreeShipMeter,
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = __deps_ui_kits_store_Cro_jsx();
  const events = [['منى من المنصورة', 'طقم شاي وجاتوه بورسلين مذهب'], ['أحمد من طنطا', 'شيالة كريستال دورين'], ['سارة من القاهرة', 'طقم أواني طهي سيراميك'], ['محمود من دمياط', 'طقم حافظات طعام EasyBox']];
  const [i, setI] = React.useState(-1);
  React.useEffect(() => {
    let n = 0;
    const show = () => {
      setI(n % events.length);
      n++;
      setTimeout(() => setI(-1), 5000);
    };
    const t0 = setTimeout(show, 6000);
    const t = setInterval(show, 16000);
    return () => {
      clearTimeout(t0);
      clearInterval(t);
    };
  }, []);
  if (i < 0) return null;
  const [who, what] = events[i];
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      position: 'fixed',
      bottom: 96,
      insetInlineEnd: 24,
      zIndex: 55,
      maxWidth: 300,
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      padding: 14,
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: 'var(--gold-50)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 16,
    color: "var(--gold-600)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("b", null, who), " \u0637\u0644\u0628 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-700)'
    }
  }, what), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "\u0645\u0646 12 \u062F\u0642\u064A\u0642\u0629")));
}

/* Floating WhatsApp — the store's real support channel. */
function WhatsAppFab() {
  const {
    Button,
    Icon,
    Modal,
    Countdown,
    Price,
    ProductTile,
    FreeShipMeter,
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = __deps_ui_kits_store_Cro_jsx();
  return /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/201007022631",
    style: {
      position: 'fixed',
      bottom: 96,
      insetInlineStart: 24,
      zIndex: 55,
      width: 54,
      height: 54,
      borderRadius: 999,
      background: 'var(--whatsapp)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--shadow-md)',
      border: 'none'
    },
    "aria-label": "\u0648\u0627\u062A\u0633\u0627\u0628"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 26,
    color: "#0E0D0C"
  }));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  WelcomeOffer,
  AddedSheet,
  ExitOffer,
  StickyBar,
  ProofToast,
  WhatsAppFab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Cro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function __deps_home() {
  var {
    Icon,
    Button,
    SectionHeading,
    OrnamentDivider
  } = window.__ELMARWA__;
  var {
    ProductTile,
    CategoryTile,
    Countdown,
    TrustRow,
    Price
  } = window.__ELMARWA__;
  var {
    CATEGORIES,
    PRODUCTS
  } = window.__STORE__;
  return {
    Icon,
    Button,
    SectionHeading,
    OrnamentDivider,
    ProductTile,
    CategoryTile,
    Countdown,
    TrustRow,
    Price,
    CATEGORIES,
    PRODUCTS
  };
}
const BANNERS = [{
  eyebrow: 'عروض السنة الجديدة',
  title: 'سفرتك تستاهل أحلى كريستال',
  body: 'خصومات لحد',
  strong: '35٪',
  bodyAfter: 'على أطقم الكريستال والبورسلين',
  cta: 'تسوق العروض',
  route: 'flash',
  image: '/assets/products/crystal-tier-stand-2.jpg',
  bg: 'linear-gradient(90deg,#FDF7E7 0%,#F7E9C4 100%)'
}, {
  eyebrow: 'شحن مجاني',
  title: 'اطلب فوق 3000 جنيه والشحن علينا',
  body: 'توصيل لكل محافظات مصر خلال',
  strong: '2–5',
  bodyAfter: 'أيام عمل، وتغليف مؤمن ضد الكسر',
  cta: 'ابدأ التسوق',
  route: 'listing',
  image: '/assets/products/porcelain-dinner-set-gold.jpg',
  bg: 'linear-gradient(90deg,#F3F0EB 0%,#E8F0EF 100%)'
}, {
  eyebrow: 'أطقم الهدايا',
  title: 'هدية تفرح — طقم لاروس كريستال',
  body: 'ابتداءً من',
  strong: '2,350',
  bodyAfter: 'جنيه بدل 3,100 جنيه',
  cta: 'شوف أطقم الهدايا',
  route: 'listing',
  params: {
    cat: 'gifts'
  },
  image: '/assets/products/promo-laroos-crystal-gift.jpg',
  bg: 'linear-gradient(90deg,#FAF8F5 0%,#F7E9C4 100%)'
}];
function HeroSlider({
  onNavigate
}) {
  const {
    Button,
    Countdown
  } = __deps_home();
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(v => (v + 1) % BANNERS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  const go = n => setI((n + BANNERS.length) % BANNERS.length);
  const arrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 42,
    height: 42,
    borderRadius: 999,
    border: '1px solid var(--gold-300)',
    background: 'rgba(255,255,255,.9)',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    fontSize: 20,
    color: 'var(--gold-700)',
    zIndex: 3
  };
  return /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      maxWidth: 1320,
      margin: '20px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--gold-200)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 380
    }
  }, BANNERS.map((b, n) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      position: n === i ? 'relative' : 'absolute',
      inset: n === i ? 'auto' : 0,
      opacity: n === i ? 1 : 0,
      pointerEvents: n === i ? 'auto' : 'none',
      transition: 'opacity var(--dur-slow) var(--ease-out)',
      background: b.bg,
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      alignItems: 'center',
      minHeight: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '44px 56px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      fontWeight: 800,
      color: 'var(--gold-800)',
      background: 'rgba(255,255,255,.75)',
      border: '1px solid var(--gold-300)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px'
    }
  }, b.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 40,
      lineHeight: 1.35,
      fontWeight: 900,
      color: 'var(--ink-800)',
      textTransform: 'none',
      letterSpacing: 'normal',
      maxWidth: 460
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 17,
      lineHeight: 1.9,
      color: 'var(--ink-600)',
      maxWidth: 440
    }
  }, b.body, " ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 21,
      color: 'var(--gold-700)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, b.strong), " ", b.bodyAfter), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate(b.route, b.params || {})
  }, b.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: b.image,
    alt: "",
    style: {
      width: '100%',
      maxWidth: 320,
      aspectRatio: '1',
      objectFit: 'cover',
      borderRadius: 'var(--radius-md)',
      border: '5px solid var(--marble-000)',
      boxShadow: 'var(--shadow-md)'
    }
  }))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i - 1),
    style: {
      ...arrow,
      insetInlineEnd: 16
    },
    "aria-label": "\u0627\u0644\u0633\u0627\u0628\u0642"
  }, "\u203A"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i + 1),
    style: {
      ...arrow,
      insetInlineStart: 16
    },
    "aria-label": "\u0627\u0644\u062A\u0627\u0644\u064A"
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInline: 0,
      bottom: 16,
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      zIndex: 3
    }
  }, BANNERS.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    "aria-label": 'بانر ' + (n + 1),
    style: {
      width: n === i ? 26 : 9,
      height: 9,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: n === i ? 'var(--gold-600)' : 'var(--gold-300)',
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Countdown, {
    seconds: 9 * 3600 + 42 * 60,
    label: "\u0627\u0644\u0639\u0631\u0636 \u064A\u0646\u062A\u0647\u064A \u062E\u0644\u0627\u0644"
  })));
}
function Rail({
  title,
  subtitle,
  products,
  onAdd,
  onOpen,
  action
}) {
  const {
    ProductTile
  } = __deps_home();
  return /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '56px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 26,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal',
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, subtitle)), action && /*#__PURE__*/React.createElement("button", {
    onClick: action,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--gold-700)'
    }
  }, "\u0634\u0648\u0641 \u0627\u0644\u0643\u0644 \u2039")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 18
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductTile, _extends({
    key: p.id
  }, p, {
    onAdd: () => onAdd(p),
    onClick: () => onOpen(p)
  })))));
}
function Home({
  onNavigate,
  onAdd,
  onOpen
}) {
  const {
    Button,
    CategoryTile,
    TrustRow,
    CATEGORIES,
    PRODUCTS
  } = __deps_home();
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(HeroSlider, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      borderBlock: '1px solid var(--border-hairline)',
      padding: '22px 24px',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(TrustRow, null))), /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '56px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 26,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u062A\u0633\u0648\u0642 \u062D\u0633\u0628 \u0627\u0644\u0642\u0633\u0645"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 18
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryTile, _extends({
    key: c.id
  }, c, {
    onClick: () => onNavigate('listing', {
      cat: c.id
    })
  }))))), /*#__PURE__*/React.createElement(Rail, {
    title: "\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0628\u064A\u0639\u0627\u064B",
    subtitle: "\u0627\u0644\u0644\u064A \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0628\u064A\u0637\u0644\u0628\u0648\u0647 \u0623\u0643\u062A\u0631 \u062D\u0627\u062C\u0629",
    products: PRODUCTS.slice(0, 5),
    onAdd: onAdd,
    onOpen: onOpen,
    action: () => onNavigate('listing')
  }), /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      marginTop: 56,
      background: 'var(--gold-50)',
      borderBlock: '1px solid var(--gold-200)',
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/products/promo-laroos-crystal-gift.jpg",
    alt: "\u0637\u0642\u0645 \u0647\u062F\u064A\u0629 \u0644\u0627\u0631\u0648\u0633",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--gold-200)',
      background: '#fff'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--gold-700)'
    }
  }, "\u0628\u0627\u0646\u062F\u0644 \u0627\u0644\u0647\u062F\u0627\u064A\u0627"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 34,
      fontWeight: 900,
      color: 'var(--ink-800)',
      textTransform: 'none',
      letterSpacing: 'normal',
      lineHeight: 1.35
    }
  }, "\u0627\u0634\u062A\u0631\u064A \u0637\u0642\u0645\u064A\u0646", /*#__PURE__*/React.createElement("br", null), "\u0648\u0627\u0644\u062A\u0627\u0644\u062A \u0628\u0646\u0635 \u0627\u0644\u062A\u0645\u0646"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--ink-600)',
      maxWidth: 420
    }
  }, "\u0639\u0644\u0649 \u0643\u0644 \u0623\u0637\u0642\u0645 \u0627\u0644\u0647\u062F\u0627\u064A\u0627 \u0648\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644. \u0627\u0644\u062E\u0635\u0645 \u0628\u064A\u062A\u062D\u0633\u0628 \u062A\u0644\u0642\u0627\u0626\u064A \u0641\u064A \u0627\u0644\u0633\u0644\u0629."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('listing', {
      cat: 'gifts'
    })
  }, "\u0634\u0648\u0641 \u0623\u0637\u0642\u0645 \u0627\u0644\u0647\u062F\u0627\u064A\u0627")))), /*#__PURE__*/React.createElement(Rail, {
    title: "\u0648\u0635\u0644 \u062D\u062F\u064A\u062B\u0627\u064B",
    subtitle: "\u0623\u062D\u062F\u062B \u0645\u0627 \u0648\u0635\u0644 \u0627\u0644\u0645\u0639\u0631\u0636",
    products: PRODUCTS.slice(5, 10),
    onAdd: onAdd,
    onOpen: onOpen,
    action: () => onNavigate('listing')
  }), /*#__PURE__*/React.createElement(Rail, {
    title: "\u0632\u062C\u0627\u062C \u0648\u0643\u0631\u064A\u0633\u062A\u0627\u0644",
    subtitle: "\u062A\u062E\u0635\u0635 \u0627\u0644\u0645\u0631\u0648\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A",
    products: PRODUCTS.filter(p => p.cat === 'crystal').slice(0, 5),
    onAdd: onAdd,
    onOpen: onOpen,
    action: () => onNavigate('listing', {
      cat: 'crystal'
    })
  }), /*#__PURE__*/React.createElement("section", {
    dir: "rtl",
    style: {
      maxWidth: 1320,
      margin: '64px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'center',
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/storefront-night.jpg",
    alt: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0648\u0629",
    style: {
      width: '100%',
      height: 360,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 32px 32px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 28,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0645\u0639\u0631\u0636 \u062D\u0642\u064A\u0642\u064A\u060C \u0645\u0634 \u0635\u0641\u062D\u0629 \u0628\u0633"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--text-muted)'
    }
  }, "\u0645\u0639\u0631\u0636\u0646\u0627 \u0641\u064A \u062C\u0631\u0627\u062D \u2014 \u0623\u062C\u0627 \u2014 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629 \u0645\u0641\u062A\u0648\u062D \u064A\u0648\u0645\u064A\u0627\u064B. \u062A\u0642\u062F\u0631 \u062A\u0634\u0648\u0641 \u0627\u0644\u0645\u0646\u062A\u062C \u0628\u0646\u0641\u0633\u0643 \u0642\u0628\u0644 \u0645\u0627 \u062A\u0634\u062A\u0631\u064A\u060C \u0623\u0648 \u062A\u0637\u0644\u0628 \u0623\u0648\u0646\u0644\u0627\u064A\u0646 \u0648\u0646\u0648\u0635\u0644\u0651\u0643."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('about')
  }, "\u0627\u0639\u0631\u0641 \u0623\u0643\u062A\u0631 \u0639\u0646\u0646\u0627")))));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  Home,
  Rail,
  HeroSlider
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Listing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function __deps_ui_kits_store_Listing_jsx() {
  var {
    Button,
    Tag,
    Icon
  } = window.__ELMARWA__;
  var {
    ProductTile,
    Breadcrumb,
    Countdown
  } = window.__ELMARWA__;
  var {
    CATEGORIES,
    PRODUCTS
  } = window.__STORE__;
  return {
    Button,
    Tag,
    Icon,
    ProductTile,
    Breadcrumb,
    Countdown,
    CATEGORIES,
    PRODUCTS
  };
}
function FilterGroup({
  title,
  children
}) {
  const {
    Button,
    Tag,
    Icon,
    ProductTile,
    Breadcrumb,
    Countdown,
    CATEGORIES,
    PRODUCTS
  } = __deps_ui_kits_store_Listing_jsx();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 20,
      marginBottom: 20,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, children));
}
function Check({
  label,
  count
}) {
  const {
    Button,
    Tag,
    Icon,
    ProductTile,
    Breadcrumb,
    Countdown,
    CATEGORIES,
    PRODUCTS
  } = __deps_ui_kits_store_Listing_jsx();
  const [on, setOn] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOn(!on),
    style: {
      width: 17,
      height: 17,
      borderRadius: 3,
      border: '1px solid ' + (on ? 'var(--gold-500)' : 'var(--marble-300)'),
      background: on ? 'var(--gold-400)' : 'transparent',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontSize: 12
    }
  }, on ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, count));
}
function Listing({
  params = {},
  onNavigate,
  onAdd,
  onOpen,
  title,
  items,
  flash
}) {
  const {
    Button,
    Tag,
    Icon,
    ProductTile,
    Breadcrumb,
    Countdown,
    CATEGORIES,
    PRODUCTS
  } = __deps_ui_kits_store_Listing_jsx();
  const cat = CATEGORIES.find(c => c.id === params.cat);
  const list = items || (cat ? PRODUCTS.filter(p => p.cat === cat.id) : PRODUCTS);
  const heading = title || (cat ? cat.title : 'كل المنتجات');
  const [sort, setSort] = React.useState('الأحدث');
  return /*#__PURE__*/React.createElement("main", {
    dir: "rtl",
    style: {
      background: 'var(--surface-page)',
      paddingBottom: 40
    }
  }, flash ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gold-50)',
      borderBottom: '1px solid var(--gold-200)',
      padding: '36px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 34,
      fontWeight: 900,
      color: 'var(--ink-800)',
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0627\u0644\u0639\u0631\u0648\u0636 \u0648\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      color: 'var(--ink-600)'
    }
  }, "\u062E\u0635\u0648\u0645\u0627\u062A \u0644\u062D\u062F 35\u066A \u2014 \u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0645\u062D\u062F\u0648\u062F\u0629")), /*#__PURE__*/React.createElement(Countdown, {
    seconds: 9 * 3600 + 42 * 60,
    label: "\u0627\u0644\u0639\u0631\u0636 \u064A\u0646\u062A\u0647\u064A \u062E\u0644\u0627\u0644"
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      borderBottom: '1px solid var(--border-hairline)',
      padding: '16px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [['الرئيسية', 'home'], ...(cat ? [[cat.title]] : [['كل المنتجات']])],
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '28px 24px',
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 20,
      position: 'sticky',
      top: 200
    }
  }, /*#__PURE__*/React.createElement(FilterGroup, {
    title: "\u0627\u0644\u0642\u0633\u0645"
  }, (cat ? cat.children : CATEGORIES.map(c => c.title)).slice(0, 7).map(s => /*#__PURE__*/React.createElement(Check, {
    key: s,
    label: s,
    count: Math.floor(Math.random() * 24) + 4
  }))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "\u0627\u0644\u0633\u0639\u0631"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "\u0645\u0646",
    style: {
      width: '50%',
      padding: '9px 10px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "\u0625\u0644\u0649",
    style: {
      width: '50%',
      padding: '9px 10px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14
    }
  }))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "\u0627\u0644\u062E\u0627\u0645\u0629"
  }, ['كريستال', 'بورسلين', 'زجاج', 'ستانلس ستيل', 'سيراميك'].map(s => /*#__PURE__*/React.createElement(Check, {
    key: s,
    label: s
  }))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "\u0627\u0644\u0639\u0631\u0648\u0636"
  }, /*#__PURE__*/React.createElement(Check, {
    label: "\u0639\u0644\u064A\u0647 \u062E\u0635\u0645"
  }), /*#__PURE__*/React.createElement(Check, {
    label: "\u0648\u0635\u0644 \u062D\u062F\u064A\u062B\u0627\u064B"
  }), /*#__PURE__*/React.createElement(Check, {
    label: "\u0645\u062A\u0627\u062D \u0644\u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u0631\u064A\u0639"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true
  }, "\u0637\u0628\u0651\u0642 \u0627\u0644\u0641\u0644\u0627\u062A\u0631")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 26,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, heading), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, list.length, " \u0645\u0646\u062A\u062C")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['الأحدث', 'الأقل سعراً', 'الأعلى سعراً', 'الأكثر مبيعاً'].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    active: sort === s,
    onClick: () => setSort(s)
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductTile, _extends({
    key: p.id
  }, p, {
    onAdd: () => onAdd(p),
    onClick: () => onOpen(p)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 32
    }
  }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement(Tag, {
    key: n,
    active: n === 1
  }, n))))));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  Listing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Listing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Pages.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function __deps_ui_kits_store_Pages_jsx() {
  var {
    Button,
    Icon,
    OrnamentDivider
  } = window.__ELMARWA__;
  var {
    Accordion,
    TrustRow,
    Breadcrumb,
    ProductTile
  } = window.__ELMARWA__;
  var {
    FAQ,
    PRODUCTS,
    GOVERNORATES
  } = window.__STORE__;
  return {
    Button,
    Icon,
    OrnamentDivider,
    Accordion,
    TrustRow,
    Breadcrumb,
    ProductTile,
    FAQ,
    PRODUCTS,
    GOVERNORATES
  };
}
function PageShell({
  title,
  lede,
  children,
  onNavigate
}) {
  const {
    Button,
    Icon,
    OrnamentDivider,
    Accordion,
    TrustRow,
    Breadcrumb,
    ProductTile,
    FAQ,
    PRODUCTS,
    GOVERNORATES
  } = __deps_ui_kits_store_Pages_jsx();
  return /*#__PURE__*/React.createElement("main", {
    dir: "rtl",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      borderBottom: '1px solid var(--border-hairline)',
      padding: '16px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [['الرئيسية', 'home'], [title]],
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '40px 24px 8px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 32,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 17,
      lineHeight: 1.9,
      color: 'var(--text-muted)',
      maxWidth: 640
    }
  }, lede), /*#__PURE__*/React.createElement(OrnamentDivider, {
    width: 160,
    style: {
      marginTop: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '24px'
    }
  }, children));
}
function About({
  onNavigate
}) {
  const {
    Button,
    Icon,
    OrnamentDivider,
    Accordion,
    TrustRow,
    Breadcrumb,
    ProductTile,
    FAQ,
    PRODUCTS,
    GOVERNORATES
  } = __deps_ui_kits_store_Pages_jsx();
  return /*#__PURE__*/React.createElement(PageShell, {
    onNavigate: onNavigate,
    title: "\u0645\u0646 \u0646\u062D\u0646",
    lede: "\u0645\u0635\u0646\u0639 \u0648\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0648\u0629 \u0644\u0632\u062E\u0631\u0641\u0629 \u0627\u0644\u0632\u062C\u0627\u062C \u0648\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644 \u2014 \u062C\u0631\u0627\u062D\u060C \u0623\u062C\u0627\u060C \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/storefront-night.jpg",
    alt: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0648\u0629",
    style: {
      width: '100%',
      height: 420,
      objectFit: 'cover',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      lineHeight: 2,
      color: 'var(--text-body)'
    }
  }, "\u0628\u062F\u0623\u0646\u0627 \u0634\u063A\u0644 \u0627\u0644\u0632\u062C\u0627\u062C \u0648\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644 \u0641\u064A \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629 \u0648\u0643\u0628\u0631\u0646\u0627 \u0628\u0645\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642 \u0641\u064A \u062C\u0631\u0627\u062D \u2014 \u0623\u062C\u0627. \u0628\u0646\u0642\u0635 \u0648\u0646\u0632\u062E\u0631\u0641 \u0627\u0644\u0632\u062C\u0627\u062C \u0648\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644\u060C \u0648\u0628\u0646\u0628\u064A\u0639 \u062C\u0645\u0644\u0629 \u0648\u0642\u0637\u0627\u0639\u064A\u060C \u0648\u0628\u0646\u0633\u062A\u0648\u0631\u062F \u0623\u062F\u0648\u0627\u062A \u0645\u0646\u0632\u0644\u064A\u0629 \u0645\u062E\u062A\u0627\u0631\u0629."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      lineHeight: 2,
      color: 'var(--text-body)'
    }
  }, "\u0627\u0644\u0645\u062A\u062C\u0631 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u062F\u0647 \u0627\u0645\u062A\u062F\u0627\u062F \u0644\u0644\u0645\u0639\u0631\u0636: \u0646\u0641\u0633 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0646\u0641\u0633 \u0627\u0644\u0623\u0633\u0639\u0627\u0631\u060C \u0648\u062A\u0648\u0635\u064A\u0644 \u0644\u0643\u0644 \u0645\u062D\u0627\u0641\u0638\u0627\u062A \u0645\u0635\u0631 \u0628\u062A\u063A\u0644\u064A\u0641 \u0645\u0624\u0645\u0646 \u0636\u062F \u0627\u0644\u0643\u0633\u0631."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      marginTop: 8
    }
  }, [['1000+', 'منتج في المعرض'], ['27', 'محافظة بنشحن ليها'], ['14 يوم', 'حق استبدال']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 28,
      fontWeight: 900,
      color: 'var(--gold-600)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      alignSelf: 'flex-start'
    },
    onClick: () => onNavigate('listing')
  }, "\u062A\u0633\u0648\u0642 \u0645\u0646 \u0627\u0644\u0645\u0639\u0631\u0636"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(TrustRow, null)));
}
function Contact({
  onNavigate
}) {
  const {
    Button,
    Icon,
    OrnamentDivider,
    Accordion,
    TrustRow,
    Breadcrumb,
    ProductTile,
    FAQ,
    PRODUCTS,
    GOVERNORATES
  } = __deps_ui_kits_store_Pages_jsx();
  const [sent, setSent] = React.useState(false);
  const field = {
    padding: '12px 14px',
    border: '1px solid var(--border-hairline)',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-sans-ar)',
    fontSize: 15,
    outline: 'none',
    width: '100%'
  };
  return /*#__PURE__*/React.createElement(PageShell, {
    onNavigate: onNavigate,
    title: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
    lede: "\u0627\u0633\u0623\u0644 \u0639\u0646 \u0623\u064A \u0645\u0646\u062A\u062C\u060C \u0623\u0648 \u0627\u0637\u0644\u0628 \u0633\u0639\u0631 \u062C\u0645\u0644\u0629. \u0628\u0646\u0631\u062F \u0641\u064A \u0646\u0641\u0633 \u0627\u0644\u064A\u0648\u0645."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 24
    }
  }, sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      color: 'var(--gold-700)',
      margin: 0
    }
  }, "\u0648\u0635\u0644\u062A\u0646\u0627 \u0631\u0633\u0627\u0644\u062A\u0643 \u2014 \u0647\u0646\u0631\u062F \u0639\u0644\u064A\u0643 \u0641\u064A \u0623\u0642\u0631\u0628 \u0648\u0642\u062A.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "\u0627\u0644\u0627\u0633\u0645",
    style: field
  }), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644",
    style: field
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "\u0627\u0644\u0645\u0648\u0636\u0648\u0639",
    style: {
      ...field,
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    placeholder: "\u0631\u0633\u0627\u0644\u062A\u0643",
    style: {
      ...field,
      gridColumn: '1 / -1',
      resize: 'vertical'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    style: {
      gridColumn: '1 / -1'
    },
    onClick: () => setSent(true)
  }, "\u0625\u0631\u0633\u0627\u0644"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--gold-50)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-gold-on-paper.jpg",
    alt: "",
    style: {
      width: 180,
      alignSelf: 'center',
      mixBlendMode: 'multiply'
    }
  }), ['010070226313', '01205604490', '01200092546'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-heading)',
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      fontWeight: 800,
      direction: 'ltr',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    color: "var(--gold-600)"
  }), n)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18,
    color: "var(--gold-600)"
  }), "\u062C\u0631\u0627\u062D \u2014 \u0623\u062C\u0627 \u2014 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/201007022631",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      background: 'var(--whatsapp)',
      color: '#0E0D0C',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: 13,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      fontWeight: 700,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 19,
    color: "#0E0D0C"
  }), " \u0643\u0644\u0645\u0646\u0627 \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628"))));
}
function Faq({
  onNavigate
}) {
  const {
    Button,
    Icon,
    OrnamentDivider,
    Accordion,
    TrustRow,
    Breadcrumb,
    ProductTile,
    FAQ,
    PRODUCTS,
    GOVERNORATES
  } = __deps_ui_kits_store_Pages_jsx();
  return /*#__PURE__*/React.createElement(PageShell, {
    onNavigate: onNavigate,
    title: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    lede: "\u0623\u0643\u062A\u0631 \u062D\u0627\u062C\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0628\u064A\u0633\u0623\u0644\u0648\u0627 \u0639\u0646\u0647\u0627."
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: FAQ
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      background: 'var(--gold-50)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      color: 'var(--gold-700)'
    }
  }, "\u0644\u0633\u0647 \u0639\u0646\u062F\u0643 \u0633\u0624\u0627\u0644\u061F \u0643\u0644\u0645\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628 \u0648\u0647\u0646\u0631\u062F \u0639\u0644\u064A\u0643 \u0641\u0648\u0631\u0627\u064B."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('contact')
  }, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627")));
}
function Policy({
  onNavigate
}) {
  const {
    Button,
    Icon,
    OrnamentDivider,
    Accordion,
    TrustRow,
    Breadcrumb,
    ProductTile,
    FAQ,
    PRODUCTS,
    GOVERNORATES
  } = __deps_ui_kits_store_Pages_jsx();
  return /*#__PURE__*/React.createElement(PageShell, {
    onNavigate: onNavigate,
    title: "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0634\u062D\u0646 \u0648\u0627\u0644\u0627\u0633\u062A\u0631\u062C\u0627\u0639",
    lede: "\u0643\u0644 \u062D\u0627\u062C\u0629 \u0639\u0646 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0628\u062F\u0627\u0644\u060C \u0645\u0643\u062A\u0648\u0628\u0629 \u0628\u0648\u0636\u0648\u062D."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, [['truck', 'الشحن والتوصيل', ['التوصيل من 2 لـ 5 أيام عمل حسب المحافظة.', 'الشحن مجاني على الطلبات فوق 3000 جنيه.', 'مصاريف الشحن 85 جنيه لما الطلب أقل من كده.', 'بنشحن لكل محافظات مصر.']], ['shield-check', 'التغليف والتأمين', ['كل القطع بتتغلف تغليف مزدوج.', 'الشحن مؤمن ضد الكسر.', 'لو وصلتك قطعة مكسورة، صوّرها وابعتلنا خلال 24 ساعة.', 'بنستبدل القطعة المكسورة على حسابنا.']], ['rotate-ccw', 'الاستبدال والاسترجاع', ['عندك 14 يوم من تاريخ الاستلام.', 'المنتج لازم يكون بحالته وبعلبته الأصلية.', 'مصاريف الشحن في حالة تغيير الرأي على العميل.', 'المبلغ بيرجع خلال 7 أيام عمل.']], ['banknote', 'الدفع', ['الدفع عند الاستلام متاح في كل المحافظات.', 'فيزا وماستركارد أونلاين.', 'محافظ الموبايل وإنستاباي.', 'أسعار الجملة بتتفق عليها بالتليفون.']]].map(([icon, h, list]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 18,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, h)), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingInlineStart: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, list.map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      lineHeight: 1.8,
      color: 'var(--text-body)'
    }
  }, l)))))));
}
function Search({
  query,
  onNavigate,
  onAdd,
  onOpen
}) {
  const {
    Button,
    Icon,
    OrnamentDivider,
    Accordion,
    TrustRow,
    Breadcrumb,
    ProductTile,
    FAQ,
    PRODUCTS,
    GOVERNORATES
  } = __deps_ui_kits_store_Pages_jsx();
  const q = (query || '').trim();
  const results = q ? PRODUCTS.filter(p => p.title.includes(q)) : [];
  return /*#__PURE__*/React.createElement(PageShell, {
    onNavigate: onNavigate,
    title: q ? 'نتائج البحث عن «' + q + '»' : 'البحث',
    lede: q ? results.length + ' نتيجة' : 'اكتب اسم المنتج في خانة البحث فوق.'
  }, q && results.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      color: 'var(--text-muted)',
      margin: '0 0 8px'
    }
  }, "\u0645\u0644\u0642\u0646\u0627\u0634 \u0646\u062A\u0627\u0626\u062C \u0644\u0640 \xAB", q, "\xBB."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, "\u062C\u0631\u0651\u0628 \u0643\u0644\u0645\u0629 \u0623\u0642\u0635\u0631\u060C \u0623\u0648 \u062A\u0635\u0641\u0651\u062D \u0627\u0644\u0623\u0642\u0633\u0627\u0645."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('listing')
  }, "\u062A\u0635\u0641\u0651\u062D \u0643\u0644 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, (results.length ? results : PRODUCTS.slice(0, 8)).map(p => /*#__PURE__*/React.createElement(ProductTile, _extends({
    key: p.id
  }, p, {
    onAdd: () => onAdd(p),
    onClick: () => onOpen(p)
  })))), q && results.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 22,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0645\u0645\u0643\u0646 \u064A\u0639\u062C\u0628\u0643 \u0643\u0645\u0627\u0646"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, PRODUCTS.filter(p => !results.includes(p)).slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProductTile, _extends({
    key: p.id
  }, p, {
    onAdd: () => onAdd(p),
    onClick: () => onOpen(p)
  }))))));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  About,
  Contact,
  Faq,
  Policy,
  Search,
  PageShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Product.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function __deps_ui_kits_store_Product_jsx() {
  var {
    Button,
    Icon,
    Badge
  } = window.__ELMARWA__;
  var {
    Price,
    Rating,
    QuantityStepper,
    Breadcrumb,
    Accordion,
    ProductTile,
    TrustRow
  } = window.__ELMARWA__;
  var {
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = window.__STORE__;
  return {
    Button,
    Icon,
    Badge,
    Price,
    Rating,
    QuantityStepper,
    Breadcrumb,
    Accordion,
    ProductTile,
    TrustRow,
    PRODUCTS,
    SHIPPING_THRESHOLD
  };
}
function Product({
  product,
  onNavigate,
  onAdd,
  onOpen
}) {
  const {
    Button,
    Icon,
    Badge,
    Price,
    Rating,
    QuantityStepper,
    Breadcrumb,
    Accordion,
    ProductTile,
    TrustRow,
    PRODUCTS,
    SHIPPING_THRESHOLD
  } = __deps_ui_kits_store_Product_jsx();
  const p = product || PRODUCTS[4];
  const [qty, setQty] = React.useState(1);
  const [img, setImg] = React.useState(0);
  const gallery = [p.image, '/assets/products/crystal-detail.jpg', '/assets/products/storefront-daylight.jpg'];
  const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const bundle = PRODUCTS.filter(x => x.id !== p.id).slice(0, 2);
  const bundleTotal = [p, ...bundle].reduce((s, x) => s + x.current, 0);
  const bundlePrice = Math.round(bundleTotal * 0.88);
  return /*#__PURE__*/React.createElement("main", {
    dir: "rtl",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--marble-000)',
      borderBottom: '1px solid var(--border-hairline)',
      padding: '16px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [['الرئيسية', 'home'], ['المنتجات', 'listing'], [p.title]],
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '32px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: g,
    onClick: () => setImg(i),
    alt: "",
    style: {
      width: 74,
      height: 74,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '2px solid ' + (img === i ? 'var(--gold-400)' : 'var(--border-hairline)')
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      background: 'var(--marble-000)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[img],
    alt: p.title,
    style: {
      width: '100%',
      aspectRatio: '1',
      objectFit: 'cover'
    }
  }), p.original && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      insetInlineStart: 14,
      background: 'var(--sale)',
      color: '#fff',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      fontWeight: 700,
      padding: '5px 12px',
      borderRadius: 'var(--radius-sm)'
    }
  }, "\u062E\u0635\u0645 ", Math.round((1 - p.current / p.original) * 100), "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 30,
      fontWeight: 800,
      lineHeight: 1.4,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: p.rating || 5,
    count: p.reviews,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--success)'
    }
  }, "\u2713 \u0645\u062A\u0627\u062D \u0644\u0644\u0634\u062D\u0646")), /*#__PURE__*/React.createElement(Price, {
    current: p.current,
    original: p.original,
    size: "lg"
  }), p.stockLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sale-bg)',
      border: '1px solid #F0D3CB',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14,
      color: 'var(--sale)',
      fontWeight: 700
    }
  }, "\uD83D\uDD25 \u0628\u0627\u0642\u064A ", p.stockLeft, " \u0642\u0637\u0639 \u0628\u0633 \u2014 7 \u0623\u0634\u062E\u0627\u0635 \u0628\u064A\u0634\u0648\u0641\u0648\u0627 \u0627\u0644\u0645\u0646\u062A\u062C \u062F\u0647 \u062F\u0644\u0648\u0642\u062A\u064A"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      lineHeight: 1.95,
      color: 'var(--text-muted)'
    }
  }, "\u0642\u0637\u0639\u0629 \u0645\u0634\u063A\u0648\u0644\u0629 \u0628\u0639\u0646\u0627\u064A\u0629\u060C \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u0644\u0644\u0645\u0646\u0627\u0633\u0628\u0627\u062A. \u062A\u062A\u063A\u0644\u0641 \u062A\u063A\u0644\u064A\u0641 \u0645\u0632\u062F\u0648\u062C \u0648\u0645\u0624\u0645\u0646\u0629 \u0636\u062F \u0627\u0644\u0643\u0633\u0631 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0634\u062D\u0646."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => onAdd(p, qty)
  }, "\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      onAdd(p, qty);
      onNavigate('checkout');
    }
  }, "\u0627\u0634\u062A\u0631\u064A \u062F\u0644\u0648\u0642\u062A\u064A"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/201007022631",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '13px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 19,
    color: "var(--whatsapp)"
  }), " \u0627\u0633\u0623\u0644 \u0639\u0646 \u0627\u0644\u0645\u0646\u062A\u062C \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--gold-200)',
      background: 'var(--gold-50)',
      borderRadius: 'var(--radius-md)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--gold-700)'
    }
  }, "\u062E\u062F\u0647\u0645 \u0645\u0639 \u0628\u0639\u0636 \u0648\u0648\u0641\u0651\u0631 12\u066A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, [p, ...bundle].map((x, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: x.id
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      fontSize: 18
    }
  }, "+"), /*#__PURE__*/React.createElement("img", {
    src: x.image,
    alt: "",
    style: {
      width: 64,
      height: 64,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--gold-200)',
      background: '#fff'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginInlineStart: 'auto',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 13,
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, bundleTotal.toLocaleString('en-US'), " \u062C\u0646\u064A\u0647"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 20,
      fontWeight: 800,
      color: 'var(--gold-700)'
    }
  }, bundlePrice.toLocaleString('en-US'), " \u062C\u0646\u064A\u0647"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => [p, ...bundle].forEach(x => onAdd(x))
  }, "\u0623\u0636\u0641 \u0627\u0644\u062B\u0644\u0627\u062B\u0629 \u0644\u0644\u0633\u0644\u0629")), /*#__PURE__*/React.createElement(TrustRow, {
    items: [['truck', 'شحن 2–5 أيام'], ['shield-check', 'مؤمن ضد الكسر'], ['rotate-ccw', 'استبدال 14 يوم']]
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [['تفاصيل المنتج', 'الخامة والمقاسات بتختلف حسب الموديل. كل قطعة بتتفحص قبل الشحن. للاستفسار عن مقاس معيّن كلمنا على 010070226313.'], ['الشحن والتوصيل', 'التوصيل من 2 لـ 5 أيام عمل لكل محافظات مصر. الشحن مجاني فوق 3000 جنيه. الدفع عند الاستلام متاح.'], ['الاستبدال والاسترجاع', 'عندك 14 يوم من الاستلام للاستبدال أو الاسترجاع، بشرط إن المنتج بحالته وبعلبته الأصلية.']]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '48px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 20px',
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 24,
      fontWeight: 800,
      textTransform: 'none',
      letterSpacing: 'normal'
    }
  }, "\u0645\u0645\u0643\u0646 \u064A\u0639\u062C\u0628\u0643 \u0643\u0645\u0627\u0646"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, related.map(r => /*#__PURE__*/React.createElement(ProductTile, _extends({
    key: r.id
  }, r, {
    onAdd: () => onAdd(r),
    onClick: () => onOpen(r)
  }))))));
}
window.__KIT__ = Object.assign(window.__KIT__ || {}, {
  Product
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/data.js
try { (() => {
/* Catalogue data for the El Marwa store kit.
   Categories follow the real Egyptian homeware-store tree (see research/bayoumistore-reference.md),
   minus electrical appliances — the owner does not sell them.
   Prices are plausible EGP placeholders, NOT the shop's real prices. */
(function () {
  const P = '/assets/products/';
  const CATEGORIES = [{
    id: 'sofra',
    title: 'أطقم السفرة',
    count: 86,
    image: P + 'porcelain-dinner-set-gold.jpg',
    children: ['أطقم عشاء بورسلين', 'أطقم الشاي والجاتوه', 'بورسلين بالقطعة', 'شوك ومعالق', 'سرفيس تقديم', 'صواني التقديم', 'شيالات الكحك وأطباق الفاكهة', 'أطقم الميلامين', 'أطقم التوزيع']
  }, {
    id: 'crystal',
    title: 'الزجاج والكريستال',
    count: 64,
    image: P + 'crystal-detail.jpg',
    children: ['أطقم الجاتوه', 'أطقم الشربات', 'أطقم الكاسات والأكواب', 'أطقم شاي', 'أطقم الخشاف', 'شيالات كريستال']
  }, {
    id: 'kitchen',
    title: 'أدوات المطبخ',
    count: 112,
    image: P + 'ceramic-cookware.jpg',
    children: ['أطقم أواني الطهي', 'أواني الطهي بالقطعة', 'أطقم السكاكين', 'أطقم الشوربة', 'أطقم المجات والقهوة', 'أطقم التوابل', 'طواجن الفرن', 'قوالب الكيك', 'رفايع المطبخ']
  }, {
    id: 'storage',
    title: 'حافظات الطعام',
    count: 38,
    image: P + 'easybox-square.jpg',
    children: ['حافظ طعام', 'حافظات بلاستيك', 'أدوات أخرى للمنزل والمطبخ']
  }, {
    id: 'gifts',
    title: 'أطقم الهدايا',
    count: 24,
    image: P + 'promo-laroos-crystal-gift.jpg',
    children: ['أطقم هدايا 3 قطع', 'هدايا المناسبات', 'هدايا الأفراح']
  }];
  const PRODUCTS = [{
    id: 1,
    title: 'طقم عشاء بورسلين مذهب 60 قطعة',
    brand: 'Porcelain',
    cat: 'sofra',
    image: P + 'porcelain-dinner-set-gold.jpg',
    current: 8450,
    original: 10900,
    rating: 5,
    reviews: 24,
    stockLeft: 3
  }, {
    id: 2,
    title: 'طقم شاي وجاتوه بورسلين مذهب',
    brand: 'Porcelain',
    cat: 'sofra',
    image: P + 'porcelain-teapot-gold.jpg',
    current: 4200,
    original: 5300,
    rating: 5,
    reviews: 17
  }, {
    id: 3,
    title: 'طبق تقديم بورسلين بحواف مذهبة',
    brand: 'Porcelain',
    cat: 'sofra',
    image: P + 'porcelain-plate-gold.jpg',
    current: 690,
    original: 850,
    rating: 4,
    reviews: 9
  }, {
    id: 4,
    title: 'فنجان قهوة بورسلين بطبق وردة',
    cat: 'sofra',
    image: P + 'pink-cup-saucer.jpg',
    current: 320,
    rating: 5,
    reviews: 6,
    ribbon: 'وصل حديثاً'
  }, {
    id: 5,
    title: 'شيالة كريستال دورين بقاعدة ذهبية',
    cat: 'crystal',
    image: P + 'crystal-tier-stand-2.jpg',
    current: 1450,
    original: 1900,
    rating: 5,
    reviews: 12,
    stockLeft: 4
  }, {
    id: 6,
    title: 'شيالة كريستال دورين — موديل الوردة',
    cat: 'crystal',
    image: P + 'crystal-tier-stand-3.jpg',
    current: 1650,
    original: 2100,
    rating: 5,
    reviews: 8
  }, {
    id: 7,
    title: 'شيالة كريستال دور واحد ذهبي',
    cat: 'crystal',
    image: P + 'crystal-stand-gold.jpg',
    current: 980,
    original: 1250,
    rating: 5,
    reviews: 15,
    stockLeft: 2
  }, {
    id: 8,
    title: 'طقم سلطانيات زجاج شفاف 6 قطع',
    cat: 'crystal',
    image: P + 'glass-bowls.jpg',
    current: 540,
    original: 700,
    rating: 4,
    reviews: 21
  }, {
    id: 9,
    title: 'طقم مجات زجاج مع إبريق',
    cat: 'crystal',
    image: P + 'glass-mug-pitcher.jpg',
    current: 780,
    original: 950,
    rating: 5,
    reviews: 11
  }, {
    id: 10,
    title: 'طقم هدية لاروس كريستال 3 قطع',
    cat: 'gifts',
    image: P + 'promo-laroos-crystal-gift.jpg',
    current: 2350,
    original: 3100,
    rating: 5,
    reviews: 19,
    ribbon: 'الأكثر مبيعاً'
  }, {
    id: 11,
    title: 'طقم براد شاي ستانلس ستيل قطعتين',
    brand: 'Steel',
    cat: 'kitchen',
    image: P + 'steel-tea-kettle-set.jpg',
    current: 1890,
    original: 2400,
    rating: 5,
    reviews: 33
  }, {
    id: 12,
    title: 'براد شاي تركي ستانلس ستيل',
    brand: 'Steel',
    cat: 'kitchen',
    image: P + 'steel-turkish-tea-set.jpg',
    current: 2150,
    original: 2650,
    rating: 5,
    reviews: 14,
    stockLeft: 5
  }, {
    id: 13,
    title: 'سكرية ستانلس ستيل بغطاء',
    brand: 'Steel',
    cat: 'kitchen',
    image: P + 'steel-sugar-pot.jpg',
    current: 480,
    rating: 4,
    reviews: 7
  }, {
    id: 14,
    title: 'طقم أواني طهي سيراميك 5 قطع',
    cat: 'kitchen',
    image: P + 'ceramic-cookware.jpg',
    current: 3900,
    original: 4800,
    rating: 5,
    reviews: 28,
    stockLeft: 3
  }, {
    id: 15,
    title: 'طقم حافظات طعام EasyBox مربع',
    brand: 'Softchef',
    cat: 'storage',
    image: P + 'easybox-square.jpg',
    current: 620,
    original: 780,
    rating: 4,
    reviews: 41
  }, {
    id: 16,
    title: 'طقم حافظات طعام EasyBox مستطيل',
    brand: 'Softchef',
    cat: 'storage',
    image: P + 'easybox-rect.jpg',
    current: 680,
    original: 850,
    rating: 4,
    reviews: 36
  }, {
    id: 17,
    title: 'حافظ بيض 24 عين بغطاء',
    cat: 'storage',
    image: P + 'egg-keeper.jpg',
    current: 190,
    original: 240,
    rating: 4,
    reviews: 52
  }, {
    id: 18,
    title: 'قطعة كريستال مزخرفة بحواف ذهبية',
    cat: 'crystal',
    image: P + 'crystal-detail.jpg',
    current: 1100,
    original: 1400,
    rating: 5,
    reviews: 5
  }];
  const FAQ = [['بتشحنوا لكل المحافظات؟', 'أيوه، بنشحن لكل محافظات مصر. التوصيل من 2 لـ 5 أيام عمل حسب المحافظة، والقاهرة والدقهلية أسرع.'], ['الشحن مؤمن ضد الكسر؟', 'كل الطلبات بتتغلف بتغليف مزدوج ومؤمنة ضد الكسر. لو وصلك أي قطعة مكسورة، صوّرها وابعتلنا خلال 24 ساعة وهنستبدلها.'], ['أقدر أدفع عند الاستلام؟', 'أيوه، الدفع عند الاستلام متاح في كل المحافظات. وكمان تقدر تدفع أونلاين بالفيزا أو محفظة الموبايل.'], ['الشحن مجاني إمتى؟', 'الشحن مجاني على أي طلب فوق 3000 جنيه.'], ['أقدر أستبدل أو أرجّع المنتج؟', 'عندك 14 يوم من تاريخ الاستلام للاستبدال أو الاسترجاع، بشرط إن المنتج بحالته وبعلبته الأصلية.'], ['عندكم فرع أقدر أشوف المنتجات فيه؟', 'أيوه، المعرض في جراح — أجا — الدقهلية. مفتوح يومياً، وتقدر تتصل بينا قبل ما تيجي.'], ['بتبيعوا جملة؟', 'أيوه، عندنا أسعار جملة للمحلات والموزعين. كلمنا على 010070226313.']];
  const GOVERNORATES = ['الدقهلية', 'القاهرة', 'الجيزة', 'الإسكندرية', 'الشرقية', 'الغربية', 'المنوفية', 'القليوبية', 'دمياط', 'كفر الشيخ', 'بورسعيد', 'أسيوط'];
  const SHIPPING_THRESHOLD = 3000;
  window.__STORE__ = {
    CATEGORIES,
    PRODUCTS,
    FAQ,
    GOVERNORATES,
    SHIPPING_THRESHOLD,
    P
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Catalogue.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function __deps_ui_kits_website_Catalogue_jsx() {
  var {
    Tag,
    Badge,
    ProductCard,
    SectionHeading
  } = window.__ELMARWA__;
  return {
    Tag,
    Badge,
    ProductCard,
    SectionHeading
  };
}
const ITEMS = [{
  title: 'Wall Mirror',
  titleAr: 'مراية حائط',
  meta: 'Bevelled edge',
  cat: 'Mirrors',
  badges: ['جملة']
}, {
  title: 'Engraved Mirror',
  titleAr: 'مراية محفورة',
  meta: 'Sandblast pattern',
  cat: 'Mirrors',
  badges: []
}, {
  title: 'Shower Screen',
  titleAr: 'كابينة شور',
  meta: '8 mm tempered',
  cat: 'Screens',
  badges: ['8 mm']
}, {
  title: 'Glass Partition',
  titleAr: 'فاصل زجاجي',
  meta: '10 mm clear',
  cat: 'Screens',
  badges: ['10 mm']
}, {
  title: 'Crystal Table',
  titleAr: 'ترابيزة كريستال',
  meta: 'Made to measure',
  cat: 'Crystal',
  badges: []
}, {
  title: 'Serving Set',
  titleAr: 'طقم تقديم',
  meta: 'Imported',
  cat: 'Homeware',
  badges: ['قطاعي']
}];
function Catalogue() {
  const {
    Tag,
    Badge,
    ProductCard,
    SectionHeading
  } = __deps_ui_kits_website_Catalogue_jsx();
  const cats = ['All', 'Mirrors', 'Screens', 'Crystal', 'Homeware'];
  const [cat, setCat] = React.useState('All');
  const shown = cat === 'All' ? ITEMS : ITEMS.filter(i => i.cat === cat);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-9) var(--space-6)',
      background: 'var(--surface-page)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Catalogue",
    title: "What we make",
    subtitle: "Photography has not been supplied yet \u2014 tiles show placeholders on purpose."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    active: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, shown.map(i => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: i.title
  }, i, {
    badges: i.badges.map((b, n) => /*#__PURE__*/React.createElement(Badge, {
      key: n,
      tone: /mm/.test(b) ? 'glass' : 'gold'
    }, b))
  }))))));
}
window.__ELMARWA_KIT__ = Object.assign(window.__ELMARWA_KIT__ || {}, {
  Catalogue
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Catalogue.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function __deps_ui_kits_website_Contact_jsx() {
  var {
    Button,
    Input,
    Select,
    Textarea,
    SectionHeading,
    ContactPill,
    Icon,
    GoldFrame
  } = window.__ELMARWA__;
  return {
    Button,
    Input,
    Select,
    Textarea,
    SectionHeading,
    ContactPill,
    Icon,
    GoldFrame
  };
}
function Contact() {
  const {
    Button,
    Input,
    Select,
    Textarea,
    SectionHeading,
    ContactPill,
    Icon,
    GoldFrame
  } = __deps_ui_kits_website_Contact_jsx();
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-9) var(--space-6)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "start",
    eyebrow: "\u0644\u0644\u062A\u0648\u0627\u0635\u0644 \u0648 \u0627\u0644\u0637\u0644\u0628",
    title: "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631",
    dir: "rtl"
  }), sent ? /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      background: 'var(--gold-50)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)',
      fontFamily: 'var(--font-sans-ar)',
      color: 'var(--gold-700)'
    }
  }, "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643. \u0647\u0646\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0627\u0643 \u0641\u064A \u0623\u0642\u0631\u0628 \u0648\u0642\u062A.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0627\u0644\u0627\u0633\u0645",
    dir: "rtl",
    placeholder: "\u0627\u0643\u062A\u0628 \u0627\u0633\u0645\u0643",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644",
    dir: "rtl",
    placeholder: "010 000 0000",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0646\u0648\u0639 \u0627\u0644\u0645\u0646\u062A\u062C",
    dir: "rtl",
    options: [{
      value: 'm',
      label: 'مرايات'
    }, {
      value: 's',
      label: 'كابينة شور'
    }, {
      value: 'c',
      label: 'كريستال'
    }, {
      value: 'h',
      label: 'أدوات منزلية'
    }],
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "\u0627\u0644\u0645\u0642\u0627\u0633\u0627\u062A \u0648 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
    dir: "rtl",
    rows: 4,
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    style: {
      gridColumn: '1 / -1'
    },
    onClick: () => setSent(true)
  }, "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628"))), /*#__PURE__*/React.createElement(GoldFrame, {
    tone: "ink",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-gold-on-black.jpg",
    alt: "",
    style: {
      width: 180
    }
  }), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "var(--gold-300)"
    }),
    label: "\u0644\u0644\u062A\u0648\u0627\u0635\u0644 \u0648 \u0627\u0644\u0637\u0644\u0628",
    value: "010 070 226 313",
    href: "tel:010070226313"
  }), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "var(--gold-300)"
    }),
    value: "012 056 044 90",
    href: "tel:01205604490"
  }), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "var(--gold-300)"
    }),
    value: "012 000 92 546",
    href: "tel:01200092546"
  }), /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      fontFamily: 'var(--font-sans-ar)',
      color: 'var(--gold-200)',
      fontSize: 15
    }
  }, "\u062C\u0631\u0627\u062D \u2014 \u0623\u062C\u0627 \u2014 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629")))));
}
window.__ELMARWA_KIT__ = Object.assign(window.__ELMARWA_KIT__ || {}, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function __deps_ui_kits_website_Footer_jsx() {
  var {
    ContactPill,
    Icon,
    OrnamentDivider
  } = window.__ELMARWA__;
  return {
    ContactPill,
    Icon,
    OrnamentDivider
  };
}
function Footer() {
  const {
    ContactPill,
    Icon,
    OrnamentDivider
  } = __deps_ui_kits_website_Footer_jsx();
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-muted-on-inverse)',
      padding: 'var(--space-8) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-gold-on-black.jpg",
    alt: "",
    style: {
      height: 96
    }
  }), /*#__PURE__*/React.createElement(OrnamentDivider, {
    width: 280
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "var(--gold-300)"
    }),
    value: "010 070 226 313",
    href: "tel:010070226313"
  }), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "var(--gold-300)"
    }),
    value: "012 056 044 90",
    href: "tel:01205604490"
  }), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "var(--gold-300)"
    }),
    value: "012 000 92 546",
    href: "tel:01200092546"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=61554717004094",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      color: 'var(--gold-300)',
      fontSize: 13,
      letterSpacing: '.1em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 18,
    color: "var(--gold-300)"
  }), "\u0627\u0644\u0645\u0631\u0648\u0647 \u0644\u0644\u0632\u062C\u0627\u062C Elmarwa"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/elmarwa_glass_/",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      color: 'var(--gold-300)',
      fontSize: 13,
      letterSpacing: '.1em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 18,
    color: "var(--gold-300)"
  }), "elmarwa_glass_")), /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 14
    }
  }, "\u062C\u0631\u0627\u062D \u2014 \u0623\u062C\u0627 \u2014 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0629")));
}
window.__ELMARWA_KIT__ = Object.assign(window.__ELMARWA_KIT__ || {}, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function __deps_ui_kits_website_Header_jsx() {
  var {
    Button,
    Icon,
    Logo
  } = window.__ELMARWA__;
  return {
    Button,
    Icon,
    Logo
  };
}
function Header({
  route,
  onNavigate
}) {
  const {
    Button,
    Icon,
    Logo
  } = __deps_ui_kits_website_Header_jsx();
  const items = [['home', 'Home', 'الرئيسية'], ['catalogue', 'Catalogue', 'المنتجات'], ['contact', 'Contact', 'اتصل بنا']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--ink-900)',
      borderBottom: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--space-6)',
      height: 84,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNavigate('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-gold-on-black.jpg",
    alt: "El Marwa for Glass",
    style: {
      height: 62,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginInlineStart: 'auto'
    }
  }, items.map(([id, en, ar]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNavigate(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: route === id ? 'var(--gold-300)' : 'var(--ink-200)',
      borderBottom: '1px solid ' + (route === id ? 'var(--gold-400)' : 'transparent'),
      transition: 'color var(--dur-base) var(--ease-standard)'
    }
  }, en, /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      fontFamily: 'var(--font-sans-ar)',
      letterSpacing: 'normal',
      marginInlineStart: 8,
      opacity: .6
    }
  }, ar)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15,
      color: "var(--ink-900)"
    }),
    onClick: () => onNavigate('contact')
  }, "Order")));
}
window.__ELMARWA_KIT__ = Object.assign(window.__ELMARWA_KIT__ || {}, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Landing.jsx
try { (() => {
function __deps_ui_kits_website_Landing_jsx() {
  var {
    Button,
    Badge,
    Icon,
    SectionHeading,
    GoldFrame,
    ProductCard,
    StatBlock,
    OrnamentDivider
  } = window.__ELMARWA__;
  return {
    Button,
    Badge,
    Icon,
    SectionHeading,
    GoldFrame,
    ProductCard,
    StatBlock,
    OrnamentDivider
  };
}
function Home({
  onNavigate
}) {
  const {
    Button,
    Badge,
    Icon,
    SectionHeading,
    GoldFrame,
    ProductCard,
    StatBlock,
    OrnamentDivider
  } = __deps_ui_kits_website_Landing_jsx();
  const services = [['ruler', 'Cut to measure', 'قص و تفصيل حسب المقاس'], ['sparkles', 'Decoration & engraving', 'زخرفة و حفر على الزجاج'], ['package', 'Wholesale & retail', 'جملة و قطاعي'], ['truck', 'Household imports', 'إستيراد أدوات منزلية']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'url(/assets/logo-on-marble.jpg) center/cover',
      padding: 'var(--space-10) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(GoldFrame, {
    tone: "marble",
    padding: "var(--space-8)",
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-gold-on-paper.jpg",
    alt: "El Marwa for Glass",
    style: {
      width: 300,
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("p", {
    dir: "rtl",
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 20,
      color: 'var(--ink-700)'
    }
  }, "\u0645\u0635\u0646\u0639 \u0627\u0644\u0645\u0631\u0648\u0629 \u0644\u0632\u062E\u0631\u0641\u0629 \u0627\u0644\u0632\u062C\u0627\u062C \u0648 \u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644"), /*#__PURE__*/React.createElement(OrnamentDivider, {
    width: 200
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Request a quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNavigate('catalogue')
  }, "See the catalogue")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) var(--space-6)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "Glass, cut and finished",
    subtitle: "Wholesale, retail, and imported household goods \u2014 from a workshop in Jarah, Aga, Dakahlia."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)'
    }
  }, services.map(([icon, en, ar]) => /*#__PURE__*/React.createElement("div", {
    key: en,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26,
    color: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      letterSpacing: '.05em',
      textTransform: 'uppercase'
    }
  }, en), /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      fontFamily: 'var(--font-sans-ar)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, ar)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) var(--space-6)',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "\u0645\u0646\u062A\u062C\u0627\u062A\u0646\u0627",
    title: "\u0632\u062C\u0627\u062C \u0648 \u0643\u0631\u064A\u0633\u062A\u0627\u0644",
    dir: "rtl"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    title: "Wall Mirrors",
    titleAr: "\u0645\u0631\u0627\u064A\u0627\u062A \u062F\u064A\u0643\u0648\u0631",
    meta: "Bevelled and engraved",
    badges: [/*#__PURE__*/React.createElement(Badge, {
      key: "1",
      tone: "gold"
    }, "\u062C\u0645\u0644\u0629")],
    onClick: () => onNavigate('catalogue')
  }), /*#__PURE__*/React.createElement(ProductCard, {
    title: "Shower Screens",
    titleAr: "\u0643\u0627\u0628\u064A\u0646\u0629 \u0634\u0648\u0631",
    meta: "8 mm tempered",
    badges: [/*#__PURE__*/React.createElement(Badge, {
      key: "2",
      tone: "glass"
    }, "8 mm")],
    onClick: () => onNavigate('catalogue')
  }), /*#__PURE__*/React.createElement(ProductCard, {
    title: "Crystal Tables",
    titleAr: "\u062A\u0631\u0627\u0628\u064A\u0632\u0627\u062A \u0643\u0631\u064A\u0633\u062A\u0627\u0644",
    meta: "Made to measure",
    onClick: () => onNavigate('catalogue')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "3",
    label: "Contact lines"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "2",
    label: "Social channels"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "1",
    label: "Workshop \u2014 Aga"
  })))));
}
window.__ELMARWA_KIT__ = Object.assign(window.__ELMARWA_KIT__ || {}, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Landing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GoldFrame = __ds_scope.GoldFrame;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.OrnamentDivider = __ds_scope.OrnamentDivider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.Countdown = __ds_scope.Countdown;

__ds_ns.FreeShipMeter = __ds_scope.FreeShipMeter;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.TrustRow = __ds_scope.TrustRow;

__ds_ns.ContactPill = __ds_scope.ContactPill;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
