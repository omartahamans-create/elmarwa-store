function __deps_home_v2() {
  var { Icon, Button, SectionHeading, OrnamentDivider } = window.__ELMARWA__;
  var { ProductTile, CategoryTile, Countdown, TrustRow, Price } = window.__ELMARWA__;
  var { CATEGORIES, PRODUCTS } = window.__STORE__;
  return { Icon, Button, SectionHeading, OrnamentDivider, ProductTile, CategoryTile, Countdown, TrustRow, Price, CATEGORIES, PRODUCTS };
}

const MARBLE = 'radial-gradient(120% 100% at 78% 20%, rgba(255,255,255,.95) 0%, rgba(255,255,255,0) 60%), linear-gradient(115deg,#FDFBF6 0%,#F6EEDC 45%,#EFE2C6 100%)';
const GOLD_TEXT = 'linear-gradient(180deg,#E7C877 0%,#B8892F 48%,#8C6420 52%,#E3C476 100%)';

const PAY = ['Google Pay', 'Apple Pay', 'Mastercard', 'PayPal', 'VISA'];

const BANNERS = [
  {
    eyebrow: 'عروض المروة',
    title: 'سفرتك سر أناقة بيتك',
    sub: 'خصومات تصل إلى',
    big: '40', unit: '٪',
    cta: 'تسوق الآن', route: 'flash',
    image: '/assets/cutouts/eldahan-pots.png', scene: 'gold'
  },
  {
    eyebrow: 'عروض الصيف',
    title: 'شحن مجاني',
    sub: 'عند الدفع الإلكتروني',
    note: 'لكل محافظات مصر على أي طلب فوق 3000 جنيه',
    cta: 'تسوق الآن', route: 'listing',
    image: '/assets/cutouts/korkmaz-alfa.png', scene: 'ink'
  },
  {
    eyebrow: 'أطقم الهدايا',
    title: 'هدية تفرح من أول نظرة',
    sub: 'أطقم كريستال تبدأ من',
    big: '2,350', unit: 'ج',
    cta: 'شوف الأطقم', route: 'listing', params: { cat: 'gifts' },
    image: '/assets/cutouts/rcr-athena.png', scene: 'night'
  },
  {
    eyebrow: 'أواني الفرن',
    title: 'زجاج فرنسي يستحمل الفرن',
    sub: 'خصومات تصل إلى',
    big: '35', unit: '٪',
    cta: 'تسوق أواني الفرن', route: 'listing', params: { cat: 'kitchen' },
    image: '/assets/cutouts/pyrex-trays.png', scene: 'ink'
  }
];

/* Generated banner backdrops: a lit stage built from gradients, product cut-outs sit on top of it. */
const SCENES = {
  gold: {
    bg: 'radial-gradient(90% 80% at 72% 8%, #FFFAEE 0%, #F7EAD0 40%, #E8D2A2 78%, #D9BC7F 100%)',
    floor: 'linear-gradient(180deg, rgba(122,86,20,.13) 0%, rgba(122,86,20,.03) 60%, rgba(122,86,20,0) 100%)',
    glow: 'radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(255,255,255,0) 70%)',
    text: 'var(--ink-800)', muted: 'var(--ink-600)', chipBg: 'rgba(255,255,255,.86)', chipBorder: 'var(--gold-300)', chipText: 'var(--gold-800)', rule: 'var(--gold-300)', shadow: 'rgba(90,62,12,.34)'
  },
  ink: {
    bg: 'radial-gradient(85% 75% at 70% 10%, #38414E 0%, #232B36 45%, #151A22 100%)',
    floor: 'linear-gradient(180deg, rgba(226,196,118,.12) 0%, rgba(0,0,0,.28) 100%)',
    glow: 'radial-gradient(circle, rgba(226,196,118,.30) 0%, rgba(226,196,118,0) 70%)',
    text: '#FBF5E7', muted: 'rgba(251,245,231,.76)', chipBg: 'rgba(255,255,255,.10)', chipBorder: 'rgba(226,196,118,.5)', chipText: '#E7C877', rule: 'rgba(226,196,118,.45)', shadow: 'rgba(0,0,0,.55)'
  },
  night: {
    bg: 'radial-gradient(80% 80% at 68% 12%, #4A2E33 0%, #2B191F 48%, #170D12 100%)',
    floor: 'linear-gradient(180deg, rgba(226,196,118,.14) 0%, rgba(0,0,0,.34) 100%)',
    glow: 'radial-gradient(circle, rgba(255,236,190,.34) 0%, rgba(255,236,190,0) 70%)',
    text: '#FBF5E7', muted: 'rgba(251,245,231,.74)', chipBg: 'rgba(255,255,255,.10)', chipBorder: 'rgba(226,196,118,.5)', chipText: '#E7C877', rule: 'rgba(226,196,118,.45)', shadow: 'rgba(0,0,0,.6)'
  },
  marble: {
    bg: 'radial-gradient(95% 85% at 74% 6%, #FFFFFF 0%, #F4F6F7 45%, #E4E9EC 100%)',
    floor: 'linear-gradient(180deg, rgba(40,55,66,.10) 0%, rgba(40,55,66,.02) 70%, rgba(40,55,66,0) 100%)',
    glow: 'radial-gradient(circle, rgba(255,255,255,.95) 0%, rgba(255,255,255,0) 70%)',
    text: 'var(--ink-800)', muted: 'var(--ink-600)', chipBg: 'rgba(255,255,255,.9)', chipBorder: 'var(--gold-300)', chipText: 'var(--gold-800)', rule: 'var(--gold-300)', shadow: 'rgba(30,45,60,.30)'
  }
};

/* Product cut-out standing on the generated stage, with contact shadow + reflection. */
function StageShotV3({ image, sc, size = 320 }) {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'grid', placeItems: 'center', padding: '26px 18px' }}>
      <div style={{ position: 'absolute', width: size * 1.15, height: size * 1.15, borderRadius: 999, background: sc.glow }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={image} alt="" style={{ position: 'relative', display: 'block', maxWidth: '100%', maxHeight: size, objectFit: 'contain', filter: 'drop-shadow(0 22px 22px ' + sc.shadow + ')' }} />
        <div style={{ width: size * 0.78, height: 16, marginTop: -6, borderRadius: 999, background: 'radial-gradient(closest-side, ' + sc.shadow + ' 0%, rgba(0,0,0,0) 100%)', filter: 'blur(3px)' }} />
      </div>
    </div>
  );
}

function PayStripV2() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', background: 'rgba(255,255,255,.82)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-md)', padding: '10px 18px', boxShadow: 'var(--shadow-sm)' }}>
      <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, fontWeight: 700, color: 'var(--ink-700)' }}>متاح التقسيط والدفع بالفيزا</span>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        {PAY.map(p => (
          <span key={p} style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 800, letterSpacing: '.04em', color: 'var(--ink-600)', border: '1px solid var(--border-hairline)', borderRadius: 6, padding: '4px 7px', background: '#fff', whiteSpace: 'nowrap' }}>{p}</span>
        ))}
      </div>
    </div>
  );
}

function HeroSliderV2({ onNavigate }) {
  const { Button, Countdown } = __deps_home_v2();
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(v => (v + 1) % BANNERS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const go = n => setI((n + BANNERS.length) % BANNERS.length);
  const arrow = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: 42, height: 42,
    borderRadius: 999, border: '1px solid var(--gold-300)', background: 'rgba(255,255,255,.9)',
    cursor: 'pointer', display: 'grid', placeItems: 'center', fontSize: 20, color: 'var(--gold-700)', zIndex: 3
  };
  return (
    <section dir="rtl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      style={{ maxWidth: 1320, margin: '20px auto 0', padding: '0 24px' }}>
      <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--gold-200)', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ position: 'relative', minHeight: 420 }}>
          {BANNERS.map((b, n) => {
            const sc = SCENES[b.scene];
            return (
            <div key={n} style={{
              position: n === i ? 'relative' : 'absolute', inset: n === i ? 'auto' : 0,
              opacity: n === i ? 1 : 0, pointerEvents: n === i ? 'auto' : 'none',
              transition: 'opacity var(--dur-slow) var(--ease-out)', background: sc.bg,
              display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', minHeight: 420
            }}>
              <div style={{ position: 'absolute', insetInline: 0, bottom: 0, height: '34%', background: sc.floor, pointerEvents: 'none' }} />
              <StageShotV3 image={b.image} sc={sc} size={330} />
              <div style={{ position: 'relative', padding: '40px 48px 40px 24px', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 13, fontWeight: 800, color: sc.chipText, background: sc.chipBg, border: '1px solid ' + sc.chipBorder, borderRadius: 'var(--radius-pill)', padding: '6px 14px' }}>{b.eyebrow}</span>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 44, lineHeight: 1.3, fontWeight: 900, color: sc.text, textTransform: 'none', letterSpacing: 'normal', maxWidth: 480 }}>{b.title}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', maxWidth: 420 }}>
                  <span style={{ height: 1, flex: 1, background: sc.rule }} />
                  <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 20, fontWeight: 800, color: sc.text }}>{b.sub}</span>
                  <span style={{ height: 1, flex: 1, background: sc.rule }} />
                </div>
                {b.big && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 88, fontWeight: 900, lineHeight: 1, backgroundImage: GOLD_TEXT, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontVariantNumeric: 'tabular-nums', filter: 'drop-shadow(0 6px 10px rgba(140,100,32,.28))' }}>{b.big}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 34, fontWeight: 900, backgroundImage: GOLD_TEXT, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginTop: 8 }}>{b.unit}</span>
                  </div>
                )}
                {b.note && <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 16, lineHeight: 1.9, color: sc.muted, maxWidth: 420 }}>{b.note}</p>}
                <Button variant="primary" size="lg" onClick={() => onNavigate(b.route, b.params || {})}>{b.cta}</Button>
                <PayStripV2 />
              </div>
            </div>
          )})}
        </div>
        <button onClick={() => go(i - 1)} style={{ ...arrow, insetInlineEnd: 16 }} aria-label="السابق">›</button>
        <button onClick={() => go(i + 1)} style={{ ...arrow, insetInlineStart: 16 }} aria-label="التالي">‹</button>
        <div style={{ position: 'absolute', insetInline: 0, bottom: 16, display: 'flex', justifyContent: 'center', gap: 8, zIndex: 3 }}>
          {BANNERS.map((_, n) => (
            <button key={n} onClick={() => setI(n)} aria-label={'بانر ' + (n + 1)} style={{
              width: n === i ? 26 : 9, height: 9, borderRadius: 999, border: 'none', cursor: 'pointer',
              background: n === i ? 'var(--gold-600)' : 'var(--gold-300)',
              transition: 'width var(--dur-base) var(--ease-standard)'
            }} />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
        <Countdown seconds={9 * 3600 + 42 * 60} label="العرض ينتهي خلال" />
      </div>
    </section>
  );
}

/* Promo strip shown between product rows: product shot + marketing copy + gold marble background */
function PromoStripV2({ eyebrow, title, note, big, unit, cta, image, onClick, flip, scene }) {
  const { Button } = __deps_home_v2();
  const sc = SCENES[scene || 'gold'];
  return (
    <section dir="rtl" style={{ maxWidth: 1320, margin: '48px auto 0', padding: '0 24px' }}>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: flip ? '1fr 1.1fr' : '1.1fr 1fr', alignItems: 'center', background: sc.bg, border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-md)', overflow: 'hidden', minHeight: 240, boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ position: 'absolute', insetInline: 0, bottom: 0, height: '34%', background: sc.floor, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', order: flip ? 2 : 1, padding: '30px 40px', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 12, fontWeight: 800, color: sc.chipText, background: sc.chipBg, border: '1px solid ' + sc.chipBorder, borderRadius: 'var(--radius-pill)', padding: '5px 12px' }}>{eyebrow}</span>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 30, fontWeight: 900, lineHeight: 1.35, color: sc.text, textTransform: 'none', letterSpacing: 'normal', maxWidth: 460 }}>{title}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {big && (
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 54, fontWeight: 900, lineHeight: 1, backgroundImage: GOLD_TEXT, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontVariantNumeric: 'tabular-nums' }}>{big}<span style={{ fontSize: 24 }}>{unit}</span></span>
            )}
            {note && <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 15, lineHeight: 1.9, color: sc.muted, maxWidth: 380 }}>{note}</p>}
          </div>
          <Button variant="primary" onClick={onClick}>{cta}</Button>
        </div>
        <div style={{ order: flip ? 1 : 2, position: 'relative', height: '100%', minHeight: 240 }}>
          <StageShotV3 image={image} sc={sc} size={196} />
        </div>
      </div>
    </section>
  );
}

/* One rotating row of 5 products. Items shift automatically every few seconds. */
function AutoRowV2({ title, subtitle, pool, offset, tick, onAdd, onOpen, action }) {
  const { ProductTile } = __deps_home_v2();
  const step = (offset + tick * 2) % pool.length;
  const items = Array.from({ length: 5 }, (_, k) => pool[(step + k) % pool.length]);
  return (
    <section dir="rtl" style={{ maxWidth: 1320, margin: '0 auto', padding: '48px 24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 20 }}>
        <div>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 26, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal', color: 'var(--text-heading)' }}>{title}</h2>
          {subtitle && <p style={{ margin: '6px 0 0', fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--text-muted)' }}>{subtitle}</p>}
        </div>
        {action && <button onClick={action} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--gold-700)' }}>شوف الكل ‹</button>}
      </div>
      <div key={step} style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18, animation: 'marwaFade var(--dur-slow) var(--ease-out)' }}>
        {items.map((p, k) => <ProductTile key={p.id + '-' + k} {...p} onAdd={() => onAdd(p)} onClick={() => onOpen(p)} />)}
      </div>
    </section>
  );
}

const ROWS = [
  { title: 'الأكثر مبيعاً', subtitle: 'اللي العملاء بيطلبوه أكتر حاجة' },
  { title: 'وصل حديثاً', subtitle: 'أحدث ما وصل المعرض' },
  { title: 'زجاج وكريستال', subtitle: 'تخصص المروة الأساسي', cat: 'crystal' },
  { title: 'أطقم السفرة', subtitle: 'بورسلين مذهب لكل المناسبات', cat: 'sofra' },
  { title: 'عروض الأسبوع', subtitle: 'خصومات محدودة المدة', deal: true },
  { title: 'أدوات المطبخ', subtitle: 'ستانلس وسيراميك يستحمل', cat: 'kitchen' },
  { title: 'أطقم الهدايا', subtitle: 'جاهزة للتغليف والإهداء', cat: 'gifts' },
  { title: 'حافظات الطعام', subtitle: 'تنظيم مطبخك بسهولة', cat: 'storage' },
  { title: 'اختيارات المعرض', subtitle: 'مختارة من فرع جراح' },
  { title: 'تحت 1000 جنيه', subtitle: 'قطع مميزة بسعر لطيف', max: 1000 }
];

const STRIPS = [
  { eyebrow: 'عرض الأسبوع', title: 'اشتري طقمين والتالت بنص التمن', note: 'على كل أطقم الهدايا والكريستال — الخصم بيتحسب تلقائي في السلة.', cta: 'شوف أطقم الهدايا', image: '/assets/cutouts/rcr-athena.png', scene: 'night', route: 'listing', params: { cat: 'gifts' } },
  { eyebrow: 'شحن مجاني', title: 'الشحن علينا فوق 3000 جنيه', note: 'توصيل لكل محافظات مصر خلال 2–5 أيام عمل، وتغليف مؤمن ضد الكسر.', cta: 'ابدأ التسوق', image: '/assets/cutouts/korkmaz-alfa.png', scene: 'ink', route: 'listing', flip: true },
  { eyebrow: 'خصم خاص', title: 'أطقم أواني الطهي', big: '30', unit: '٪', cta: 'تسوق المطبخ', image: '/assets/cutouts/eldahan-pots.png', scene: 'gold', route: 'listing', params: { cat: 'kitchen' } },
  { eyebrow: 'أواني الفرن', title: 'زجاج مقاوم للحرارة بضمان 10 سنوات', note: 'من –ف4٠° حتى +٣٠٠° — يدخل الفرن والفريزر والغسالة.', cta: 'تسوق أواني الفرن', image: '/assets/cutouts/pyrex-trays.png', scene: 'night', route: 'listing', params: { cat: 'kitchen' }, flip: true },
  { eyebrow: 'الدفع عند الاستلام', title: 'ادفع لما توصلك بالسلامة', note: 'متاح في كل المحافظات، مع إمكانية الاستبدال خلال 14 يوم.', cta: 'اطلب دلوقتي', image: '/assets/cutouts/eldahan-pots.png', scene: 'marble', route: 'listing' }
];

function HomeV2({ onNavigate, onAdd, onOpen }) {
  const { Button, CategoryTile, TrustRow, CATEGORIES, PRODUCTS } = __deps_home_v2();
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
    blocks.push(
      <AutoRowV2 key={'row' + n} title={r.title} subtitle={r.subtitle} pool={poolFor(r)} offset={n * 3} tick={tick}
        onAdd={onAdd} onOpen={onOpen} action={() => onNavigate('listing', r.cat ? { cat: r.cat } : {})} />
    );
    if (n % 2 === 1 && STRIPS[(n - 1) / 2]) {
      const s = STRIPS[(n - 1) / 2];
      blocks.push(<PromoStripV2 key={'strip' + n} {...s} onClick={() => onNavigate(s.route, s.params || {})} />);
    }
  });

  return (
    <main style={{ background: 'var(--surface-page)' }}>
      <style>{'@keyframes marwaFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}'}</style>
      <HeroSliderV2 onNavigate={onNavigate} />

      <div style={{ background: 'var(--marble-000)', borderBlock: '1px solid var(--border-hairline)', padding: '22px 24px', marginTop: 40 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}><TrustRow /></div>
      </div>

      <section dir="rtl" style={{ maxWidth: 1320, margin: '0 auto', padding: '48px 24px 0' }}>
        <h2 style={{ margin: '0 0 24px', fontFamily: 'var(--font-sans-ar)', fontSize: 26, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>تسوق حسب القسم</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}>
          {CATEGORIES.map(c => <CategoryTile key={c.id} {...c} onClick={() => onNavigate('listing', { cat: c.id })} />)}
        </div>
      </section>

      {blocks}

      <section dir="rtl" style={{ maxWidth: 1320, margin: '64px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <img src="/assets/storefront-night.jpg" alt="معرض المروة" style={{ width: '100%', height: 360, objectFit: 'cover' }} />
          <div style={{ padding: '32px 32px 32px 0', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 28, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>معرض حقيقي، مش صفحة بس</h2>
            <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 16, lineHeight: 1.9, color: 'var(--text-muted)' }}>معرضنا في جراح — أجا — الدقهلية مفتوح يومياً. تقدر تشوف المنتج بنفسك قبل ما تشتري، أو تطلب أونلاين ونوصلّك.</p>
            <Button variant="outline" onClick={() => onNavigate('about')}>اعرف أكتر عننا</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.__KIT__ = Object.assign(window.__KIT__ || {}, { HomeV2, HeroSliderV2, PromoStripV2, AutoRowV2 });
