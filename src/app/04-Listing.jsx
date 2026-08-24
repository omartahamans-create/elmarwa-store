function __deps_ui_kits_store_Listing_jsx() {
  var { Button, Tag, Icon } = window.__ELMARWA__;
  var { ProductTile, Breadcrumb, Countdown } = window.__ELMARWA__;
  var { CATEGORIES, PRODUCTS } = window.__STORE__;
  return { Button, Tag, Icon, ProductTile, Breadcrumb, Countdown, CATEGORIES, PRODUCTS };
}

function FilterGroup({ title, children }) {
  const { Button, Tag, Icon, ProductTile, Breadcrumb, Countdown, CATEGORIES, PRODUCTS } = __deps_ui_kits_store_Listing_jsx();
  return (
    <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid var(--border-hairline)' }}>
      <h4 style={{ margin: '0 0 12px', fontFamily: 'var(--font-sans-ar)', fontSize: 15, fontWeight: 700, textTransform: 'none', letterSpacing: 'normal' }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>{children}</div>
    </div>
  );
}

function Check({ label, count }) {
  const { Button, Tag, Icon, ProductTile, Breadcrumb, Countdown, CATEGORIES, PRODUCTS } = __deps_ui_kits_store_Listing_jsx();
  const [on, setOn] = React.useState(false);
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--text-body)' }}>
      <span onClick={() => setOn(!on)} style={{ width: 17, height: 17, borderRadius: 3, border: '1px solid ' + (on ? 'var(--gold-500)' : 'var(--marble-300)'), background: on ? 'var(--gold-400)' : 'transparent', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 12 }}>{on ? '✓' : ''}</span>
      <span style={{ flex: 1 }}>{label}</span>
      {count != null && <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>{count}</span>}
    </label>
  );
}

function Listing({ params = {}, onNavigate, onAdd, onOpen, title, items, flash }) {
  const { Button, Tag, Icon, ProductTile, Breadcrumb, Countdown, CATEGORIES, PRODUCTS } = __deps_ui_kits_store_Listing_jsx();
  const cat = CATEGORIES.find(c => c.id === params.cat);
  const list = items || (cat ? PRODUCTS.filter(p => p.cat === cat.id) : PRODUCTS);
  const heading = title || (cat ? cat.title : 'كل المنتجات');
  const [sort, setSort] = React.useState('الأحدث');
  return (
    <main dir="rtl" style={{ background: 'var(--surface-page)', paddingBottom: 40 }}>
      {flash ? (
        <div style={{ background: 'var(--gold-50)', borderBottom: '1px solid var(--gold-200)', padding: '36px 24px' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 34, fontWeight: 900, color: 'var(--ink-800)', textTransform: 'none', letterSpacing: 'normal' }}>العروض والخصومات</h1>
              <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-sans-ar)', fontSize: 16, color: 'var(--ink-600)' }}>خصومات لحد 35٪ — الكميات محدودة</p>
            </div>
            <Countdown seconds={9 * 3600 + 42 * 60} label="العرض ينتهي خلال" />
          </div>
        </div>
      ) : (
        <div style={{ background: 'var(--marble-000)', borderBottom: '1px solid var(--border-hairline)', padding: '16px 24px' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <Breadcrumb items={[['الرئيسية', 'home'], ...(cat ? [[cat.title]] : [['كل المنتجات']])]} onNavigate={onNavigate} />
          </div>
        </div>
      )}

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '28px 24px', display: 'grid', gridTemplateColumns: '250px 1fr', gap: 32, alignItems: 'start' }}>
        <aside style={{ background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 20, position: 'sticky', top: 200 }}>
          <FilterGroup title="القسم">
            {(cat ? cat.children : CATEGORIES.map(c => c.title)).slice(0, 7).map(s => <Check key={s} label={s} count={Math.floor(Math.random() * 24) + 4} />)}
          </FilterGroup>
          <FilterGroup title="السعر">
            <div style={{ display: 'flex', gap: 8 }}>
              <input placeholder="من" style={{ width: '50%', padding: '9px 10px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans-ar)', fontSize: 14 }} />
              <input placeholder="إلى" style={{ width: '50%', padding: '9px 10px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans-ar)', fontSize: 14 }} />
            </div>
          </FilterGroup>
          <FilterGroup title="الخامة">
            {['كريستال', 'بورسلين', 'زجاج', 'ستانلس ستيل', 'سيراميك'].map(s => <Check key={s} label={s} />)}
          </FilterGroup>
          <FilterGroup title="العروض">
            <Check label="عليه خصم" /><Check label="وصل حديثاً" /><Check label="متاح للشحن السريع" />
          </FilterGroup>
          <Button variant="outline" fullWidth>طبّق الفلاتر</Button>
        </aside>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 26, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>{heading}</h1>
              <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--text-muted)' }}>{list.length} منتج</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['الأحدث', 'الأقل سعراً', 'الأعلى سعراً', 'الأكثر مبيعاً'].map(s => <Tag key={s} active={sort === s} onClick={() => setSort(s)}>{s}</Tag>)}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
            {list.map(p => <ProductTile key={p.id} {...p} onAdd={() => onAdd(p)} onClick={() => onOpen(p)} />)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
            {[1, 2, 3].map(n => <Tag key={n} active={n === 1}>{n}</Tag>)}
          </div>
        </div>
      </div>
    </main>
  );
}

window.__KIT__ = Object.assign(window.__KIT__ || {}, { Listing });
