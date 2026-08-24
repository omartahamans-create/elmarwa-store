function __deps_ui_kits_store_Cro_jsx() {
  var { Button, Icon } = window.__ELMARWA__;
  var { Modal, Countdown, Price, ProductTile, FreeShipMeter } = window.__ELMARWA__;
  var { PRODUCTS, SHIPPING_THRESHOLD } = window.__STORE__;
  return { Button, Icon, Modal, Countdown, Price, ProductTile, FreeShipMeter, PRODUCTS, SHIPPING_THRESHOLD };
}

/* Welcome offer — fires 15s after landing, once per session. */
function WelcomeOffer({ open, onClose }) {
  const { Button, Icon, Modal, Countdown, Price, ProductTile, FreeShipMeter, PRODUCTS, SHIPPING_THRESHOLD } = __deps_ui_kits_store_Cro_jsx();
  const [phone, setPhone] = React.useState('');
  const [done, setDone] = React.useState(false);
  return (
    <Modal open={open} onClose={onClose} width={720}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <img src="/assets/products/promo-laroos-crystal-gift.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 300 }} />
        <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
          {done ? (
            <>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 24, fontWeight: 900, textTransform: 'none', letterSpacing: 'normal' }}>كودك جاهز</h2>
              <div style={{ border: '2px dashed var(--gold-400)', borderRadius: 'var(--radius-sm)', padding: '14px', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 24, fontWeight: 700, letterSpacing: '.2em', color: 'var(--gold-700)', background: 'var(--gold-50)' }}>FIRST10</div>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--text-muted)' }}>استخدمه في السلة على أول طلب. صالح 48 ساعة.</p>
              <Button variant="primary" size="lg" onClick={onClose}>يلا نتسوق</Button>
            </>
          ) : (
            <>
              <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 14, fontWeight: 700, color: 'var(--gold-600)' }}>عرض أول طلب</span>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 28, fontWeight: 900, lineHeight: 1.35, textTransform: 'none', letterSpacing: 'normal' }}>خصم 10٪ على<br />أول طلب ليك</h2>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)' }}>سيب رقمك ونبعتلك الكود، وكمان أول ما ينزل عرض جديد.</p>
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="01000000000" style={{ padding: '13px 14px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans-ar)', fontSize: 16, outline: 'none' }} />
              <Button variant="primary" size="lg" fullWidth onClick={() => setDone(true)}>هاتلي الكود</Button>
              <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--text-muted)' }}>لا شكراً، هكمل تسوق</button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}

/* Cross-sell sheet — fires on add-to-cart. */
function AddedSheet({ open, onClose, product, subtotal, onAdd, onNavigate }) {
  const { Button, Icon, Modal, Countdown, Price, ProductTile, FreeShipMeter, PRODUCTS, SHIPPING_THRESHOLD } = __deps_ui_kits_store_Cro_jsx();
  if (!product) return null;
  const suggestions = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
  return (
    <Modal open={open} onClose={onClose} width={560}>
      <div style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 34, height: 34, borderRadius: 999, background: 'var(--gold-50)', display: 'grid', placeItems: 'center' }}><Icon name="check" size={19} color="var(--gold-600)" /></span>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 18, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>اتضاف للسلة</h3>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', background: 'var(--marble-050)', borderRadius: 'var(--radius-sm)', padding: 12 }}>
          <img src={product.image} alt="" style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }} />
          <span style={{ flex: 1, fontFamily: 'var(--font-sans-ar)', fontSize: 15 }}>{product.title}</span>
          <Price current={product.current} size="sm" showPercent={false} />
        </div>
        <FreeShipMeter subtotal={subtotal} threshold={SHIPPING_THRESHOLD} />
        <div>
          <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 15, fontWeight: 700, display: 'block', marginBottom: 10 }}>ضيفهم وكمّل الشحن المجاني</span>
          <div style={{ display: 'flex', gap: 10 }}>
            {suggestions.map(s => (
              <div key={s.id} style={{ flex: 1, border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <img src={s.image} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 4 }} />
                <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 12, lineHeight: 1.4, height: 34, overflow: 'hidden' }}>{s.title}</span>
                <button onClick={() => onAdd(s)} style={{ border: '1px solid var(--gold-400)', background: 'var(--gold-50)', color: 'var(--gold-700)', borderRadius: 4, padding: '6px 0', cursor: 'pointer', fontFamily: 'var(--font-sans-ar)', fontSize: 12, fontWeight: 700 }}>+ ضيف</button>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>كمّل تسوق</Button>
          <Button variant="primary" style={{ flex: 1 }} onClick={() => { onClose(); onNavigate('cart'); }}>روح للسلة</Button>
        </div>
      </div>
    </Modal>
  );
}

/* Exit intent — fires once when the pointer leaves the top of the viewport. */
function ExitOffer({ open, onClose, onNavigate }) {
  const { Button, Icon, Modal, Countdown, Price, ProductTile, FreeShipMeter, PRODUCTS, SHIPPING_THRESHOLD } = __deps_ui_kits_store_Cro_jsx();
  return (
    <Modal open={open} onClose={onClose} width={480}>
      <div style={{ padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 26, fontWeight: 900, lineHeight: 1.4, textTransform: 'none', letterSpacing: 'normal' }}>استنى — الشحن<br />عليك مجاني النهارده</h2>
        <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 15, lineHeight: 1.85, color: 'var(--text-muted)' }}>على أي طلب فوق 2000 جنيه بدل 3000، لحد نهاية اليوم.</p>
        <Countdown seconds={2 * 3600 + 15 * 60} label="ينتهي خلال" />
        <Button variant="primary" size="lg" fullWidth onClick={() => { onClose(); onNavigate('flash'); }}>شوف العروض</Button>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--text-muted)' }}>لا شكراً</button>
      </div>
    </Modal>
  );
}

/* Sticky bottom bar — mobile-first CRO, always one tap from the cart. */
function StickyBar({ subtotal, count, onNavigate }) {
  const { Button, Icon, Modal, Countdown, Price, ProductTile, FreeShipMeter, PRODUCTS, SHIPPING_THRESHOLD } = __deps_ui_kits_store_Cro_jsx();
  if (!count) return null;
  return (
    <div dir="rtl" style={{
      position: 'fixed', insetInline: 0, bottom: 0, zIndex: 60, background: 'var(--marble-000)',
      borderTop: '2px solid var(--gold-400)', boxShadow: '0 -6px 20px rgba(58,38,7,.10)', padding: '12px 24px',
      display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center'
    }}>
      <div style={{ flex: 1, maxWidth: 420 }}><FreeShipMeter subtotal={subtotal} threshold={SHIPPING_THRESHOLD} style={{ color: 'var(--text-body)' }} /></div>
      <Button variant="primary" size="md" onClick={() => onNavigate('checkout')}>إتمام الطلب — {subtotal.toLocaleString('en-US')} جنيه</Button>
    </div>
  );
}

/* Social proof toast — recent order notifications, bottom-right. */
function ProofToast() {
  const { Button, Icon, Modal, Countdown, Price, ProductTile, FreeShipMeter, PRODUCTS, SHIPPING_THRESHOLD } = __deps_ui_kits_store_Cro_jsx();
  const events = [
    ['منى من المنصورة', 'طقم شاي وجاتوه بورسلين مذهب'],
    ['أحمد من طنطا', 'شيالة كريستال دورين'],
    ['سارة من القاهرة', 'طقم أواني طهي سيراميك'],
    ['محمود من دمياط', 'طقم حافظات طعام EasyBox']
  ];
  const [i, setI] = React.useState(-1);
  React.useEffect(() => {
    let n = 0;
    const show = () => { setI(n % events.length); n++; setTimeout(() => setI(-1), 5000); };
    const t0 = setTimeout(show, 6000);
    const t = setInterval(show, 16000);
    return () => { clearTimeout(t0); clearInterval(t); };
  }, []);
  if (i < 0) return null;
  const [who, what] = events[i];
  return (
    <div dir="rtl" style={{
      position: 'fixed', bottom: 96, insetInlineEnd: 24, zIndex: 55, maxWidth: 300,
      background: 'var(--marble-000)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: 14,
      display: 'flex', gap: 10, alignItems: 'center'
    }}>
      <span style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--gold-50)', display: 'grid', placeItems: 'center', flex: 'none' }}><Icon name="shopping-bag" size={16} color="var(--gold-600)" /></span>
      <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, lineHeight: 1.6, color: 'var(--text-body)' }}>
        <b>{who}</b> طلب <span style={{ color: 'var(--gold-700)' }}>{what}</span>
        <span style={{ display: 'block', fontSize: 11, color: 'var(--text-muted)' }}>من 12 دقيقة</span>
      </span>
    </div>
  );
}

/* Floating WhatsApp — the store's real support channel. */
function WhatsAppFab() {
  const { Button, Icon, Modal, Countdown, Price, ProductTile, FreeShipMeter, PRODUCTS, SHIPPING_THRESHOLD } = __deps_ui_kits_store_Cro_jsx();
  return (
    <a href="https://wa.me/201007022631" style={{
      position: 'fixed', bottom: 96, insetInlineStart: 24, zIndex: 55, width: 54, height: 54,
      borderRadius: 999, background: 'var(--whatsapp)', display: 'grid', placeItems: 'center',
      boxShadow: 'var(--shadow-md)', border: 'none'
    }} aria-label="واتساب"><Icon name="message-circle" size={26} color="#0E0D0C" /></a>
  );
}

window.__KIT__ = Object.assign(window.__KIT__ || {}, { WelcomeOffer, AddedSheet, ExitOffer, StickyBar, ProofToast, WhatsAppFab });
