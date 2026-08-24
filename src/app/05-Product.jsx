function __deps_ui_kits_store_Product_jsx() {
  var { Button, Icon, Badge } = window.__ELMARWA__;
  var { Price, Rating, QuantityStepper, Breadcrumb, Accordion, ProductTile, TrustRow } = window.__ELMARWA__;
  var { PRODUCTS, SHIPPING_THRESHOLD } = window.__STORE__;
  return { Button, Icon, Badge, Price, Rating, QuantityStepper, Breadcrumb, Accordion, ProductTile, TrustRow, PRODUCTS, SHIPPING_THRESHOLD };
}

function Product({ product, onNavigate, onAdd, onOpen }) {
  const { Button, Icon, Badge, Price, Rating, QuantityStepper, Breadcrumb, Accordion, ProductTile, TrustRow, PRODUCTS, SHIPPING_THRESHOLD } = __deps_ui_kits_store_Product_jsx();
  const p = product || PRODUCTS[4];
  const [qty, setQty] = React.useState(1);
  const [img, setImg] = React.useState(0);
  const gallery = [p.image, '/assets/products/crystal-detail.jpg', '/assets/products/storefront-daylight.jpg'];
  const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const bundle = PRODUCTS.filter(x => x.id !== p.id).slice(0, 2);
  const bundleTotal = [p, ...bundle].reduce((s, x) => s + x.current, 0);
  const bundlePrice = Math.round(bundleTotal * 0.88);

  return (
    <main dir="rtl" style={{ background: 'var(--surface-page)' }}>
      <div style={{ background: 'var(--marble-000)', borderBottom: '1px solid var(--border-hairline)', padding: '16px 24px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Breadcrumb items={[['الرئيسية', 'home'], ['المنتجات', 'listing'], [p.title]]} onNavigate={onNavigate} />
        </div>
      </div>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
        <div style={{ display: 'flex', gap: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {gallery.map((g, i) => (
              <img key={i} src={g} onClick={() => setImg(i)} alt="" style={{ width: 74, height: 74, objectFit: 'cover', borderRadius: 'var(--radius-sm)', cursor: 'pointer', border: '2px solid ' + (img === i ? 'var(--gold-400)' : 'var(--border-hairline)') }} />
            ))}
          </div>
          <div style={{ flex: 1, position: 'relative', background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <img src={gallery[img]} alt={p.title} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
            {p.original && <span style={{ position: 'absolute', top: 14, insetInlineStart: 14, background: 'var(--sale)', color: '#fff', fontFamily: 'var(--font-sans-ar)', fontSize: 13, fontWeight: 700, padding: '5px 12px', borderRadius: 'var(--radius-sm)' }}>خصم {Math.round((1 - p.current / p.original) * 100)}%</span>}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 30, fontWeight: 800, lineHeight: 1.4, textTransform: 'none', letterSpacing: 'normal' }}>{p.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Rating value={p.rating || 5} count={p.reviews} size={16} />
            <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--success)' }}>✓ متاح للشحن</span>
          </div>
          <Price current={p.current} original={p.original} size="lg" />
          {p.stockLeft && (
            <div style={{ background: 'var(--sale-bg)', border: '1px solid #F0D3CB', borderRadius: 'var(--radius-sm)', padding: '10px 14px', fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--sale)', fontWeight: 700 }}>
              🔥 باقي {p.stockLeft} قطع بس — 7 أشخاص بيشوفوا المنتج ده دلوقتي
            </div>
          )}
          <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 16, lineHeight: 1.95, color: 'var(--text-muted)' }}>
            قطعة مشغولة بعناية، مناسبة للتقديم اليومي وللمناسبات. تتغلف تغليف مزدوج ومؤمنة ضد الكسر أثناء الشحن.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <QuantityStepper value={qty} onChange={setQty} />
            <Button variant="primary" size="lg" style={{ flex: 1 }} onClick={() => onAdd(p, qty)}>أضف للسلة</Button>
          </div>
          <Button variant="outline" size="lg" fullWidth onClick={() => { onAdd(p, qty); onNavigate('checkout'); }}>اشتري دلوقتي</Button>
          <a href="https://wa.me/201007022631" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: '13px', fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--text-body)', textDecoration: 'none' }}>
            <Icon name="message-circle" size={19} color="var(--whatsapp)" /> اسأل عن المنتج على واتساب
          </a>

          {/* Cross-sell bundle */}
          <div style={{ border: '1px solid var(--gold-200)', background: 'var(--gold-50)', borderRadius: 'var(--radius-md)', padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 16, fontWeight: 800, color: 'var(--gold-700)' }}>خدهم مع بعض ووفّر 12٪</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {[p, ...bundle].map((x, i) => (
                <React.Fragment key={x.id}>
                  {i > 0 && <span style={{ color: 'var(--gold-600)', fontSize: 18 }}>+</span>}
                  <img src={x.image} alt="" style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gold-200)', background: '#fff' }} />
                </React.Fragment>
              ))}
              <div style={{ marginInlineStart: 'auto', textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--text-muted)', textDecoration: 'line-through' }}>{bundleTotal.toLocaleString('en-US')} جنيه</div>
                <div style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 20, fontWeight: 800, color: 'var(--gold-700)' }}>{bundlePrice.toLocaleString('en-US')} جنيه</div>
              </div>
            </div>
            <Button variant="primary" fullWidth onClick={() => [p, ...bundle].forEach(x => onAdd(x))}>أضف الثلاثة للسلة</Button>
          </div>

          <TrustRow items={[['truck', 'شحن 2–5 أيام'], ['shield-check', 'مؤمن ضد الكسر'], ['rotate-ccw', 'استبدال 14 يوم']]} />

          <Accordion items={[
            ['تفاصيل المنتج', 'الخامة والمقاسات بتختلف حسب الموديل. كل قطعة بتتفحص قبل الشحن. للاستفسار عن مقاس معيّن كلمنا على 010070226313.'],
            ['الشحن والتوصيل', 'التوصيل من 2 لـ 5 أيام عمل لكل محافظات مصر. الشحن مجاني فوق 3000 جنيه. الدفع عند الاستلام متاح.'],
            ['الاستبدال والاسترجاع', 'عندك 14 يوم من الاستلام للاستبدال أو الاسترجاع، بشرط إن المنتج بحالته وبعلبته الأصلية.']
          ]} />
        </div>
      </div>

      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '48px 24px 0' }}>
        <h2 style={{ margin: '0 0 20px', fontFamily: 'var(--font-sans-ar)', fontSize: 24, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>ممكن يعجبك كمان</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          {related.map(r => <ProductTile key={r.id} {...r} onAdd={() => onAdd(r)} onClick={() => onOpen(r)} />)}
        </div>
      </section>
    </main>
  );
}

window.__KIT__ = Object.assign(window.__KIT__ || {}, { Product });
