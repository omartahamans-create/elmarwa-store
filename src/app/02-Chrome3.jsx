function __deps_chrome() {
  var { Icon, Button, OrnamentDivider } = window.__ELMARWA__;
  var { FreeShipMeter, Price, QuantityStepper, TrustRow } = window.__ELMARWA__;
  var { CATEGORIES, SHIPPING_THRESHOLD } = window.__STORE__;
  return { Icon, Button, OrnamentDivider, FreeShipMeter, Price, QuantityStepper, TrustRow, CATEGORIES, SHIPPING_THRESHOLD };
}

function PromoBar() {
  const msgs = [
    ['شحن مجاني على الطلبات فوق ', '3000', ' جنيه'],
    ['كود ', 'FIRST10', ' — خصم ', '10', '٪ على أول طلب'],
    ['الدفع عند الاستلام في كل المحافظات']
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => { const t = setInterval(() => setI(v => (v + 1) % msgs.length), 4000); return () => clearInterval(t); }, []);
  return (
    <div dir="rtl" style={{ background: 'var(--gold-100)', color: 'var(--gold-800)', textAlign: 'center', padding: '9px 16px', fontFamily: 'var(--font-sans-ar)', fontSize: 14, fontWeight: 'var(--weight-medium)', borderBottom: '1px solid var(--gold-200)' }}>
      {msgs[i].map((part, n) => /^[A-Z0-9]/.test(part)
        ? <b key={n} style={{ fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>{part}</b>
        : <span key={n}>{part}</span>)}
    </div>
  );
}

function MobileDrawer({ open, onClose, onNavigate }) {
  const { Icon, CATEGORIES } = __deps_chrome();
  const { useLockScroll } = window.__RESP__;
  const [openCat, setOpenCat] = React.useState(null);
  useLockScroll(open);
  if (!open) return null;
  const go = (route, params) => { onClose(); onNavigate(route, params); };
  const PAGES = [
    ['العروض والخصومات', 'flash'],
    ['من نحن', 'about'],
    ['تواصل معنا', 'contact'],
    ['الأسئلة الشائعة', 'faq'],
    ['سياسة الشحن والاسترجاع', 'policy']
  ];
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 95, background: 'rgba(58,38,7,.34)' }}>
      <aside dir="rtl" onClick={e => e.stopPropagation()} style={{
        position: 'absolute', insetInlineStart: 0, top: 0, bottom: 0, width: 320, maxWidth: '86vw',
        background: 'var(--marble-000)', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-lg)'
      }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <img src="/assets/logo-elmarwa.svg" alt="المروة للزجاج" onClick={() => go('home')} style={{ height: 46, cursor: 'pointer', mixBlendMode: 'multiply' }} />
          <button onClick={onClose} aria-label="إغلاق القائمة" style={{ background: 'none', border: 'none', fontSize: 30, lineHeight: 1, cursor: 'pointer', color: 'var(--text-muted)', padding: '4px 8px' }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
          {CATEGORIES.map(c => {
            const isOpen = openCat === c.id;
            return (
              <div key={c.id} style={{ borderBottom: '1px solid var(--border-hairline)' }}>
                <div style={{ display: 'flex', alignItems: 'stretch' }}>
                  <button onClick={() => go('listing', { cat: c.id })} style={{
                    flex: 1, textAlign: 'start', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '15px 16px', fontFamily: 'var(--font-sans-ar)', fontSize: 16,
                    fontWeight: 'var(--weight-medium)', color: 'var(--text-body)'
                  }}>{c.title}</button>
                  <button onClick={() => setOpenCat(isOpen ? null : c.id)} aria-label="عرض الأقسام الفرعية" style={{
                    background: 'none', border: 'none', cursor: 'pointer', padding: '0 16px',
                    color: 'var(--gold-600)', fontSize: 18, transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform .18s ease'
                  }}>⌄</button>
                </div>
                {isOpen && (
                  <div style={{ padding: '2px 16px 12px', display: 'flex', flexDirection: 'column', background: 'var(--marble-050)' }}>
                    {c.children.map(sub => (
                      <a key={sub} onClick={() => go('listing', { cat: c.id, sub })} style={{
                        cursor: 'pointer', border: 'none', padding: '10px 8px',
                        fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--text-muted)'
                      }}>{sub}</a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {PAGES.map(([label, route]) => (
            <button key={route} onClick={() => go(route)} style={{
              display: 'block', width: '100%', textAlign: 'start', background: 'none', border: 'none',
              borderBottom: '1px solid var(--border-hairline)', cursor: 'pointer', padding: '15px 16px',
              fontFamily: 'var(--font-sans-ar)', fontSize: 16,
              color: route === 'flash' ? 'var(--sale)' : 'var(--text-body)',
              fontWeight: route === 'flash' ? 800 : 'var(--weight-regular)'
            }}>{label}</button>
          ))}
        </div>

        <div style={{ padding: 16, borderTop: '1px solid var(--border-hairline)', background: 'var(--marble-050)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href="tel:01007022631" style={{ display: 'flex', alignItems: 'center', gap: 10, border: 'none', color: 'var(--text-body)', fontFamily: 'var(--font-sans-ar)', fontSize: 15 }}>
            <Icon name="phone" size={18} color="var(--gold-600)" />
            <b style={{ fontWeight: 800, direction: 'ltr', fontVariantNumeric: 'tabular-nums' }}>010 070 226 313</b>
          </a>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://www.facebook.com/profile.php?id=61554717004094" style={{ border: 'none' }}><Icon name="facebook" size={22} color="var(--gold-600)" /></a>
            <a href="https://www.instagram.com/elmarwa_glass_/" style={{ border: 'none' }}><Icon name="instagram" size={22} color="var(--gold-600)" /></a>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Header({ route, onNavigate, cartCount, onOpenCart, query, onQuery }) {
  const { Icon, CATEGORIES } = __deps_chrome();
  // القائمة الجانبية بتشتغل على الموبايل والتابلت — قائمة الأقسام الأفقية بتزحم تحت 1024
  const isMobile = window.__RESP__.useNarrow();
  const [menu, setMenu] = React.useState(null);
  const [drawer, setDrawer] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  React.useEffect(() => { setDrawer(false); setSearchOpen(false); }, [route]);

  const CartButton = (
    <button onClick={onOpenCart} aria-label="السلة" style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
      <Icon name="shopping-bag" size={isMobile ? 24 : 26} color="var(--gold-600)" />
      {cartCount > 0 && <span style={{ position: 'absolute', top: -2, insetInlineStart: -4, minWidth: 20, height: 20, borderRadius: 999, background: 'var(--sale)', color: '#fff', fontSize: 12, fontWeight: 800, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-sans)' }}>{cartCount}</span>}
    </button>
  );

  const SearchField = (
    <form onSubmit={e => { e.preventDefault(); setSearchOpen(false); onNavigate('search'); }} style={{ flex: 1, maxWidth: isMobile ? 'none' : 560, position: 'relative' }}>
      <input value={query} onChange={e => onQuery(e.target.value)} placeholder="ابحث عن طقم، كريستال، حلة…" style={{
        width: '100%', height: 48, borderRadius: 'var(--radius-sm)', border: '1px solid var(--gold-300)',
        background: 'var(--marble-050)', color: 'var(--text-body)', padding: '0 46px 0 14px',
        fontFamily: 'var(--font-sans-ar)', fontSize: 15, outline: 'none'
      }} />
      <span style={{ position: 'absolute', insetInlineStart: 14, top: 14 }}><Icon name="search" size={20} color="var(--gold-600)" /></span>
    </form>
  );

  if (isMobile) {
    return (
      <header dir="rtl" style={{ position: 'sticky', top: 0, zIndex: drawer ? 100 : 40 }}>
        <PromoBar />
        <div style={{ background: 'var(--marble-000)', borderBottom: '1px solid var(--border-hairline)' }}>
          <div style={{ padding: '0 12px', height: 62, display: 'flex', alignItems: 'center', gap: 6 }}>
            <button onClick={() => setDrawer(true)} aria-label="القائمة" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'grid', gap: 5 }}>
              {[0, 1, 2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 2, background: 'var(--gold-700)', borderRadius: 2 }} />)}
            </button>
            <img src="/assets/logo-elmarwa.svg" alt="المروة للزجاج" onClick={() => onNavigate('home')} style={{ height: 44, cursor: 'pointer', marginInlineEnd: 'auto', mixBlendMode: 'multiply' }} />
            <button onClick={() => setSearchOpen(v => !v)} aria-label="بحث" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
              <Icon name="search" size={22} color="var(--gold-600)" />
            </button>
            <a href="tel:01007022631" aria-label="اتصل بنا" style={{ border: 'none', padding: 8, display: 'grid', placeItems: 'center' }}>
              <Icon name="phone" size={21} color="var(--gold-600)" />
            </a>
            {CartButton}
          </div>
          {searchOpen && (
            <div style={{ padding: '0 12px 12px', display: 'flex' }}>{SearchField}</div>
          )}
        </div>
        <MobileDrawer open={drawer} onClose={() => setDrawer(false)} onNavigate={onNavigate} />
      </header>
    );
  }

  return (
    <header dir="rtl" style={{ position: 'sticky', top: 0, zIndex: 40 }}>
      <PromoBar />
      <div style={{ background: 'var(--marble-000)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 24px', height: 92, display: 'flex', alignItems: 'center', gap: 24 }}>
          <img src="/assets/logo-elmarwa.svg" alt="المروة للزجاج" onClick={() => onNavigate('home')} style={{ height: 76, cursor: 'pointer' }} />
          {SearchField}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginInlineStart: 'auto' }}>
            <a href="tel:01007022631" style={{ display: 'flex', alignItems: 'center', gap: 8, border: 'none', color: 'var(--text-body)', fontFamily: 'var(--font-sans-ar)', fontSize: 15 }}>
              <Icon name="phone" size={18} color="var(--gold-600)" />
              <b style={{ fontWeight: 800, direction: 'ltr', fontVariantNumeric: 'tabular-nums' }}>010 070 226 313</b>
            </a>
            {CartButton}
          </div>
        </div>
      </div>
      <nav onMouseLeave={() => setMenu(null)} style={{ background: 'var(--marble-050)', borderBottom: '1px solid var(--border-hairline)', position: 'relative' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 4, alignItems: 'center' }}>
          {CATEGORIES.map(c => (
            <button key={c.id} onMouseEnter={() => setMenu(c.id)} onClick={() => onNavigate('listing', { cat: c.id })} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '14px 16px',
              fontFamily: 'var(--font-sans-ar)', fontSize: 15, fontWeight: 'var(--weight-medium)',
              color: menu === c.id ? 'var(--gold-700)' : 'var(--text-body)',
              borderBottom: '2px solid ' + (menu === c.id ? 'var(--gold-400)' : 'transparent')
            }}>{c.title}</button>
          ))}
          <button onClick={() => onNavigate('flash')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '14px 16px', fontFamily: 'var(--font-sans-ar)', fontSize: 15, fontWeight: 800, color: 'var(--sale)' }}>العروض</button>
          <button onClick={() => onNavigate('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '14px 16px', fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--text-body)' }}>من نحن</button>
        </div>
        {menu && (() => {
          const c = CATEGORIES.find(x => x.id === menu);
          return (
            <div style={{ position: 'absolute', insetInline: 0, top: '100%', background: 'var(--marble-000)', boxShadow: 'var(--shadow-lg)', borderTop: '2px solid var(--gold-400)', zIndex: 50 }}>
              <div style={{ maxWidth: 1320, margin: '0 auto', padding: 28, display: 'grid', gridTemplateColumns: '1fr 260px', gap: 32 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px 24px' }}>
                  {c.children.map(s => (
                    <a key={s} onClick={() => onNavigate('listing', { cat: c.id, sub: s })} style={{ cursor: 'pointer', border: 'none', fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--text-body)', padding: '4px 0' }}>{s}</a>
                  ))}
                </div>
                <img src={c.image} alt="" style={{ width: '100%', height: 170, objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
              </div>
            </div>
          );
        })()}
      </nav>
    </header>
  );
}

function MiniCart({ open, onClose, items, onQty, subtotal, onNavigate }) {
  const { Button, FreeShipMeter, Price, QuantityStepper, SHIPPING_THRESHOLD } = __deps_chrome();
  const isMobile = window.__RESP__.useMobile();
  window.__RESP__.useLockScroll(open);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 90, background: 'rgba(58,38,7,.28)' }}>
      <aside dir="rtl" onClick={e => e.stopPropagation()} style={{
        position: 'absolute', insetInlineStart: 0, top: 0, bottom: 0, width: isMobile ? '100%' : 400, maxWidth: isMobile ? '100%' : '92vw',
        background: 'var(--marble-000)', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-lg)'
      }}>
        <div style={{ padding: 20, borderBottom: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 18, textTransform: 'none', letterSpacing: 'normal' }}>سلة المشتريات</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: 'var(--text-muted)' }}>×</button>
        </div>
        <div style={{ padding: 20, borderBottom: '1px solid var(--border-hairline)', background: 'var(--gold-50)' }}>
          <FreeShipMeter subtotal={subtotal} threshold={SHIPPING_THRESHOLD} />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {items.length === 0 && <p style={{ fontFamily: 'var(--font-sans-ar)', color: 'var(--text-muted)' }}>سلتك فاضية.</p>}
          {items.map(it => (
            <div key={it.id} style={{ display: 'flex', gap: 12 }}>
              <img src={it.image} alt="" style={{ width: 68, height: 68, objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 14, lineHeight: 1.4 }}>{it.title}</span>
                <Price current={it.current} size="sm" showPercent={false} />
                <QuantityStepper value={it.qty} onChange={v => onQty(it.id, v)} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: 20, borderTop: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans-ar)', fontWeight: 800, fontSize: 17 }}>
            <span>الإجمالي</span><span style={{ fontVariantNumeric: 'tabular-nums' }}>{subtotal.toLocaleString('en-US')} جنيه</span>
          </div>
          <Button variant="primary" size="lg" fullWidth onClick={() => { onClose(); onNavigate('checkout'); }}>إتمام الطلب</Button>
          <button onClick={() => { onClose(); onNavigate('cart'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--text-muted)' }}>عرض السلة</button>
        </div>
      </aside>
    </div>
  );
}

function Footer({ onNavigate }) {
  const { Icon, TrustRow } = __deps_chrome();
  const isMobile = window.__RESP__.useMobile();
  const cols = [
    ['تسوق', ['أطقم السفرة', 'الزجاج والكريستال', 'أدوات المطبخ', 'حافظات الطعام', 'أطقم الهدايا']],
    ['المتجر', ['من نحن', 'تواصل معنا', 'الأسئلة الشائعة', 'سياسة الشحن والاسترجاع']]
  ];
  return (
    <footer dir="rtl" style={{ background: 'var(--marble-100)', color: 'var(--text-body)', marginTop: isMobile ? 40 : 64, paddingBottom: isMobile ? 120 : 0, borderTop: '1px solid var(--border-hairline)' }}>
      <div style={{ borderBottom: '1px solid var(--marble-300)', padding: isMobile ? '20px 16px' : '28px 24px', background: 'var(--marble-050)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}><TrustRow /></div>
      </div>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: isMobile ? '32px 16px' : '48px 24px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr 1fr 1.2fr', gap: isMobile ? 28 : 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <img src="/assets/logo-elmarwa.svg" alt="" style={{ height: isMobile ? 84 : 112, alignSelf: isMobile ? 'center' : 'flex-start' }} />
          <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 14, lineHeight: 1.9, color: 'var(--text-muted)' }}>مصنع ومعرض المروة لزخرفة الزجاج والكريستال. جملة وقطاعي واستيراد أدوات منزلية.</p>
          <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--gold-700)' }}>جراح — أجا — الدقهلية</span>
        </div>
        {cols.map(([h, links]) => (
          <div key={h} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--gold-700)', textTransform: 'none', letterSpacing: 'normal' }}>{h}</h4>
            {links.map(l => <a key={l} onClick={() => onNavigate(l === 'من نحن' ? 'about' : l === 'تواصل معنا' ? 'contact' : l === 'الأسئلة الشائعة' ? 'faq' : l === 'سياسة الشحن والاسترجاع' ? 'policy' : 'listing')} style={{ cursor: 'pointer', border: 'none', fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--text-muted)' }}>{l}</a>)}
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h4 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--gold-700)', textTransform: 'none', letterSpacing: 'normal' }}>تواصل معنا</h4>
          {['010 070 226 313', '012 056 044 90', '012 000 92 546'].map(n => (
            <b key={n} style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 800, color: 'var(--text-heading)', direction: 'ltr', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{n}</b>
          ))}
          <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
            <a href="https://www.facebook.com/profile.php?id=61554717004094" style={{ border: 'none' }}><Icon name="facebook" size={22} color="var(--gold-600)" /></a>
            <a href="https://www.instagram.com/elmarwa_glass_/" style={{ border: 'none' }}><Icon name="instagram" size={22} color="var(--gold-600)" /></a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--marble-300)', padding: '18px 24px', textAlign: 'center', fontFamily: 'var(--font-sans-ar)', fontSize: 13, color: 'var(--text-muted)' }}>
        © <b style={{ fontWeight: 800, fontFamily: 'var(--font-sans)' }}>2026</b> المروة للزجاج والكريستال — كل الحقوق محفوظة
      </div>
    </footer>
  );
}

window.__KIT__ = Object.assign(window.__KIT__ || {}, { Header, Footer, MiniCart, PromoBar });
