function __deps_ui_kits_store_Cart_jsx() {
  var { Button, Input, Icon } = window.__ELMARWA__;
  var { Price, QuantityStepper, FreeShipMeter, ProductTile, TrustRow } = window.__ELMARWA__;
  var { PRODUCTS, SHIPPING_THRESHOLD } = window.__STORE__;
  return { Button, Input, Icon, Price, QuantityStepper, FreeShipMeter, ProductTile, TrustRow, PRODUCTS, SHIPPING_THRESHOLD };
}

function Cart({ items, subtotal, onQty, onRemove, onNavigate, onAdd, onOpen }) {
  const isMobile = window.__RESP__.useMobile();
  const { Button, Input, Icon, Price, QuantityStepper, FreeShipMeter, ProductTile, TrustRow, PRODUCTS, SHIPPING_THRESHOLD } = __deps_ui_kits_store_Cart_jsx();
  const [code, setCode] = React.useState('');
  const [applied, setApplied] = React.useState(false);
  const discount = applied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : 85;
  const total = subtotal - discount + (items.length ? shipping : 0);
  const suggestions = PRODUCTS.filter(p => !items.some(i => i.id === p.id)).slice(0, 4);

  return (
    <main dir="rtl" style={{ background: 'var(--surface-page)', minHeight: '60vh' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: isMobile ? '18px 12px' : '32px 24px' }}>
        <h1 style={{ margin: '0 0 24px', fontFamily: 'var(--font-sans-ar)', fontSize: isMobile ? 22 : 30, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>سلة المشتريات</h1>
        {items.length === 0 ? (
          <div style={{ background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 56, textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 17, color: 'var(--text-muted)', margin: '0 0 18px' }}>سلتك لسه فاضية.</p>
            <Button variant="primary" size="lg" onClick={() => onNavigate('listing')}>ابدأ التسوق</Button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 380px', gap: isMobile ? 20 : 28, alignItems: 'start' }}>
            <div style={{ minWidth: 0, background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <div style={{ padding: isMobile ? 14 : 20, borderBottom: '1px solid var(--border-hairline)' }}>
                <FreeShipMeter subtotal={subtotal} threshold={SHIPPING_THRESHOLD} />
              </div>
              {items.map(it => (
                <div key={it.id} style={{ display: 'flex', gap: isMobile ? 12 : 16, padding: isMobile ? 14 : 20, borderBottom: '1px solid var(--border-hairline)' }}>
                  <img src={it.image} alt="" style={{ width: isMobile ? 76 : 104, height: isMobile ? 76 : 104, flex: 'none', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }} />
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: isMobile ? 14 : 16, fontWeight: 500 }}>{it.title}</span>
                    <Price current={it.current} original={it.original} size="sm" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 14, marginTop: 'auto', flexWrap: 'wrap' }}>
                      <QuantityStepper value={it.qty} onChange={v => onQty(it.id, v)} />
                      <button onClick={() => onRemove(it.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--text-muted)' }}>إزالة</button>
                    </div>
                    {isMobile && <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 16, fontWeight: 800 }}>{(it.current * it.qty).toLocaleString('en-US')} جنيه</span>}
                  </div>
                  {!isMobile && <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 18, fontWeight: 800 }}>{(it.current * it.qty).toLocaleString('en-US')} جنيه</span>}
                </div>
              ))}
            </div>

            <aside style={{ minWidth: 0, background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: isMobile ? 16 : 22, display: 'flex', flexDirection: 'column', gap: 14, position: isMobile ? 'static' : 'sticky', top: 200 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 18, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>ملخص الطلب</h3>
              <div style={{ display: 'flex', gap: 8 }}>
                <input value={code} onChange={e => setCode(e.target.value)} placeholder="كود الخصم" style={{ flex: 1, minWidth: 0, padding: '11px 12px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans-ar)', fontSize: 14 }} />
                <Button variant="outline" onClick={() => setApplied(code.trim().toUpperCase() === 'FIRST10')}>تفعيل</Button>
              </div>
              {applied && <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--success)' }}>✓ اتفعل كود FIRST10 — خصم 10٪</span>}
              {code && !applied && <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--text-muted)' }}>جرّب كود FIRST10</span>}
              {[['المجموع', subtotal], ...(discount ? [['الخصم', -discount]] : []), ['الشحن', shipping || 'مجاني']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--text-muted)' }}>
                  <span>{k}</span><span>{typeof v === 'number' ? v.toLocaleString('en-US') + ' جنيه' : v}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans-ar)', fontSize: 19, fontWeight: 800 }}>
                <span>الإجمالي</span><span>{total.toLocaleString('en-US')} جنيه</span>
              </div>
              <Button variant="primary" size="lg" fullWidth onClick={() => onNavigate('checkout')}>إتمام الطلب</Button>
              <TrustRow items={[['banknote', 'الدفع عند الاستلام'], ['shield-check', 'مؤمن ضد الكسر']]} style={{ gridTemplateColumns: '1fr' , gap: 8 }} />
            </aside>
          </div>
        )}

        {items.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <h2 style={{ margin: '0 0 18px', fontFamily: 'var(--font-sans-ar)', fontSize: isMobile ? 19 : 22, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>كمّل طلبك بيهم</h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile ? 10 : 18 }}>
              {suggestions.map(p => <ProductTile key={p.id} {...p} onAdd={() => onAdd(p)} onClick={() => onOpen(p)} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

window.__KIT__ = Object.assign(window.__KIT__ || {}, { Cart });
