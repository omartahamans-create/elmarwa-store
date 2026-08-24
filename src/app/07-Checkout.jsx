function __deps_ui_kits_store_Checkout_jsx() {
  var { Button, Input, Select, Textarea, Icon } = window.__ELMARWA__;
  var { Price, FreeShipMeter } = window.__ELMARWA__;
  var { GOVERNORATES, SHIPPING_THRESHOLD, PRODUCTS } = window.__STORE__;
  return { Button, Input, Select, Textarea, Icon, Price, FreeShipMeter, GOVERNORATES, SHIPPING_THRESHOLD, PRODUCTS };
}

function Checkout({ items, subtotal, onNavigate }) {
  const { Button, Input, Select, Textarea, Icon, Price, FreeShipMeter, GOVERNORATES, SHIPPING_THRESHOLD, PRODUCTS } = __deps_ui_kits_store_Checkout_jsx();
  const [pay, setPay] = React.useState('cod');
  const [done, setDone] = React.useState(false);
  const [upsell, setUpsell] = React.useState(false);
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : 85;
  const gift = PRODUCTS[16];
  const total = subtotal + shipping + (upsell ? gift.current : 0);

  if (done) return (
    <main dir="rtl" style={{ background: 'var(--surface-page)', padding: '80px 24px', minHeight: '60vh' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', background: 'var(--marble-000)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-md)', padding: 40, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--gold-50)', display: 'grid', placeItems: 'center' }}><Icon name="check" size={32} color="var(--gold-600)" /></span>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 26, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>تم استلام طلبك</h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 16, lineHeight: 1.9, color: 'var(--text-muted)' }}>رقم الطلب <b>#EM-10428</b>. هنكلمك خلال ساعتين لتأكيد الطلب والعنوان.</p>
        <Button variant="primary" size="lg" onClick={() => onNavigate('home')}>ارجع للمتجر</Button>
      </div>
    </main>
  );

  const field = { padding: '12px 14px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans-ar)', fontSize: 15, outline: 'none', width: '100%' };

  return (
    <main dir="rtl" style={{ background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ margin: '0 0 8px', fontFamily: 'var(--font-sans-ar)', fontSize: 28, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>إتمام الطلب</h1>
        <p style={{ margin: '0 0 24px', fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--text-muted)' }}>خطوة واحدة بس — من غير حساب ولا تسجيل.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 28, alignItems: 'start' }}>
          <form onSubmit={e => { e.preventDefault(); setDone(true); }} style={{ background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 17, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>بيانات التوصيل</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <input required placeholder="الاسم بالكامل" style={field} />
              <input required placeholder="رقم الموبايل" style={field} />
              <select style={field}>{GOVERNORATES.map(g => <option key={g}>{g}</option>)}</select>
              <input placeholder="المدينة / المركز" style={field} />
              <input placeholder="العنوان بالتفصيل" style={{ ...field, gridColumn: '1 / -1' }} />
              <textarea rows={2} placeholder="ملاحظات على الطلب (اختياري)" style={{ ...field, gridColumn: '1 / -1', resize: 'vertical' }} />
            </div>

            <h3 style={{ margin: '8px 0 0', fontFamily: 'var(--font-sans-ar)', fontSize: 17, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>طريقة الدفع</h3>
            {[['cod', 'الدفع عند الاستلام', 'ادفع كاش للمندوب لما يوصلك'], ['card', 'فيزا / ماستركارد', 'دفع آمن أونلاين'], ['wallet', 'محفظة الموبايل', 'فودافون كاش أو إنستاباي']].map(([id, t, s]) => (
              <label key={id} onClick={() => setPay(id)} style={{
                display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer', padding: 14,
                border: '1px solid ' + (pay === id ? 'var(--gold-400)' : 'var(--border-hairline)'),
                background: pay === id ? 'var(--gold-50)' : 'transparent', borderRadius: 'var(--radius-sm)'
              }}>
                <span style={{ width: 17, height: 17, borderRadius: 999, border: '2px solid ' + (pay === id ? 'var(--gold-500)' : 'var(--marble-300)'), background: pay === id ? 'var(--gold-400)' : 'transparent' }} />
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <b style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 15 }}>{t}</b>
                  <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--text-muted)' }}>{s}</span>
                </span>
              </label>
            ))}

            {/* Order-bump upsell */}
            <label onClick={() => setUpsell(!upsell)} style={{ display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer', padding: 14, border: '1px dashed var(--gold-400)', background: 'var(--gold-50)', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ width: 17, height: 17, borderRadius: 3, border: '1px solid var(--gold-500)', background: upsell ? 'var(--gold-400)' : 'transparent', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 12 }}>{upsell ? '✓' : ''}</span>
              <img src={gift.image} alt="" style={{ width: 46, height: 46, objectFit: 'cover', borderRadius: 4 }} />
              <span style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <b style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--gold-700)' }}>ضيف {gift.title} بـ {gift.current} جنيه بس</b>
                <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--text-muted)' }}>العرض ده متاح مع الطلب ده بس</span>
              </span>
            </label>

            <Button type="submit" variant="primary" size="lg" fullWidth onClick={() => setDone(true)}>تأكيد الطلب</Button>
            <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>بالضغط على تأكيد الطلب أنت موافق على سياسة الشحن والاسترجاع.</span>
          </form>

          <aside style={{ background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 22, display: 'flex', flexDirection: 'column', gap: 14, position: 'sticky', top: 200 }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 17, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>طلبك</h3>
            {items.map(it => (
              <div key={it.id} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <img src={it.image} alt="" style={{ width: 52, height: 52, objectFit: 'cover', borderRadius: 4, border: '1px solid var(--border-hairline)' }} />
                <span style={{ flex: 1, fontFamily: 'var(--font-sans-ar)', fontSize: 14 }}>{it.title} × {it.qty}</span>
                <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 14, fontWeight: 700 }}>{(it.current * it.qty).toLocaleString('en-US')}</span>
              </div>
            ))}
            {upsell && (
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <img src={gift.image} alt="" style={{ width: 52, height: 52, objectFit: 'cover', borderRadius: 4, border: '1px solid var(--gold-300)' }} />
                <span style={{ flex: 1, fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--gold-700)' }}>{gift.title}</span>
                <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 14, fontWeight: 700 }}>{gift.current}</span>
              </div>
            )}
            <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--text-muted)' }}><span>الشحن</span><span>{shipping ? shipping + ' جنيه' : 'مجاني'}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans-ar)', fontSize: 19, fontWeight: 800 }}><span>الإجمالي</span><span>{total.toLocaleString('en-US')} جنيه</span></div>
            </div>
            <FreeShipMeter subtotal={subtotal} threshold={SHIPPING_THRESHOLD} />
          </aside>
        </div>
      </div>
    </main>
  );
}

window.__KIT__ = Object.assign(window.__KIT__ || {}, { Checkout });
