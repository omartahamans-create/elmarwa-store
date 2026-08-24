function __deps_ui_kits_store_Pages_jsx() {
  var { Button, Icon, OrnamentDivider } = window.__ELMARWA__;
  var { Accordion, TrustRow, Breadcrumb, ProductTile } = window.__ELMARWA__;
  var { FAQ, PRODUCTS, GOVERNORATES } = window.__STORE__;
  return { Button, Icon, OrnamentDivider, Accordion, TrustRow, Breadcrumb, ProductTile, FAQ, PRODUCTS, GOVERNORATES };
}

function PageShell({ title, lede, children, onNavigate }) {
  const { Button, Icon, OrnamentDivider, Accordion, TrustRow, Breadcrumb, ProductTile, FAQ, PRODUCTS, GOVERNORATES } = __deps_ui_kits_store_Pages_jsx();
  const isMobile = window.__RESP__.useMobile();
  return (
    <main dir="rtl" style={{ background: 'var(--surface-page)' }}>
      <div style={{ background: 'var(--marble-000)', borderBottom: '1px solid var(--border-hairline)', padding: isMobile ? '12px 14px' : '16px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}><Breadcrumb items={[['الرئيسية', 'home'], [title]]} onNavigate={onNavigate} /></div>
      </div>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: isMobile ? '24px 14px 4px' : '40px 24px 8px' }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: isMobile ? 24 : 32, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>{title}</h1>
        {lede && <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-sans-ar)', fontSize: isMobile ? 15 : 17, lineHeight: 1.9, color: 'var(--text-muted)', maxWidth: 640 }}>{lede}</p>}
        <OrnamentDivider width={160} style={{ marginTop: 18 }} />
      </div>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: isMobile ? '18px 14px' : '24px' }}>{children}</div>
    </main>
  );
}

function About({ onNavigate }) {
  const { Button, Icon, OrnamentDivider, Accordion, TrustRow, Breadcrumb, ProductTile, FAQ, PRODUCTS, GOVERNORATES } = __deps_ui_kits_store_Pages_jsx();
  const isMobile = window.__RESP__.useMobile();
  return (
    <PageShell onNavigate={onNavigate} title="من نحن" lede="مصنع ومعرض المروة لزخرفة الزجاج والكريستال — جراح، أجا، الدقهلية.">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 20 : 32, alignItems: 'center' }}>
        <img src="/assets/storefront-night.jpg" alt="معرض المروة" style={{ width: '100%', height: isMobile ? 230 : 420, objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-hairline)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 16, lineHeight: 2, color: 'var(--text-body)' }}>
            بدأنا شغل الزجاج والكريستال في الدقهلية وكبرنا بمعرض على الطريق في جراح — أجا. بنقص ونزخرف الزجاج والكريستال، وبنبيع جملة وقطاعي، وبنستورد أدوات منزلية مختارة.
          </p>
          <p style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 16, lineHeight: 2, color: 'var(--text-body)' }}>
            المتجر الإلكتروني ده امتداد للمعرض: نفس المنتجات، نفس الأسعار، وتوصيل لكل محافظات مصر بتغليف مؤمن ضد الكسر.
          </p>
          <div style={{ display: 'flex', gap: 32, marginTop: 8 }}>
            {[['1000+', 'منتج في المعرض'], ['27', 'محافظة بنشحن ليها'], ['14 يوم', 'حق استبدال']].map(([v, l]) => (
              <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: isMobile ? 23 : 28, fontWeight: 900, color: 'var(--gold-600)' }}>{v}</span>
                <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 14, color: 'var(--text-muted)' }}>{l}</span>
              </div>
            ))}
          </div>
          <Button variant="primary" size="lg" style={{ alignSelf: 'flex-start' }} onClick={() => onNavigate('listing')}>تسوق من المعرض</Button>
        </div>
      </div>
      <div style={{ marginTop: 40 }}><TrustRow /></div>
    </PageShell>
  );
}

function Contact({ onNavigate }) {
  const { Button, Icon, OrnamentDivider, Accordion, TrustRow, Breadcrumb, ProductTile, FAQ, PRODUCTS, GOVERNORATES } = __deps_ui_kits_store_Pages_jsx();
  const isMobile = window.__RESP__.useMobile();
  const [sent, setSent] = React.useState(false);
  const field = { padding: '12px 14px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans-ar)', fontSize: 15, outline: 'none', width: '100%' };
  return (
    <PageShell onNavigate={onNavigate} title="تواصل معنا" lede="اسأل عن أي منتج، أو اطلب سعر جملة. بنرد في نفس اليوم.">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 380px', gap: isMobile ? 18 : 28, alignItems: 'start' }}>
        <div style={{ background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: isMobile ? 16 : 24 }}>
          {sent ? (
            <p style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 16, color: 'var(--gold-700)', margin: 0 }}>وصلتنا رسالتك — هنرد عليك في أقرب وقت.</p>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
              <input required placeholder="الاسم" style={field} />
              <input required placeholder="رقم الموبايل" style={field} />
              <input placeholder="الموضوع" style={{ ...field, gridColumn: '1 / -1' }} />
              <textarea rows={5} placeholder="رسالتك" style={{ ...field, gridColumn: '1 / -1', resize: 'vertical' }} />
              <Button type="submit" variant="primary" size="lg" style={{ gridColumn: '1 / -1' }} onClick={() => setSent(true)}>إرسال</Button>
            </form>
          )}
        </div>
        <aside style={{ background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-md)', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <img src="/assets/logo-gold-on-paper.jpg" alt="" style={{ width: 180, alignSelf: 'center', mixBlendMode: 'multiply' }} />
          {['010070226313', '01205604490', '01200092546'].map(n => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-heading)', fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 800, direction: 'ltr', justifyContent: 'flex-end' }}>
              <Icon name="phone" size={18} color="var(--gold-600)" />{n}
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-body)', fontFamily: 'var(--font-sans-ar)', fontSize: 15 }}>
            <Icon name="map-pin" size={18} color="var(--gold-600)" />جراح — أجا — الدقهلية
          </div>
          <a href="https://wa.me/201007022631" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: 'var(--whatsapp)', color: '#0E0D0C', border: 'none', borderRadius: 'var(--radius-sm)', padding: 13, fontFamily: 'var(--font-sans-ar)', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
            <Icon name="message-circle" size={19} color="#0E0D0C" /> كلمنا على واتساب
          </a>
        </aside>
      </div>
    </PageShell>
  );
}

function Faq({ onNavigate }) {
  const { Button, Icon, OrnamentDivider, Accordion, TrustRow, Breadcrumb, ProductTile, FAQ, PRODUCTS, GOVERNORATES } = __deps_ui_kits_store_Pages_jsx();
  const isMobile = window.__RESP__.useMobile();
  return (
    <PageShell onNavigate={onNavigate} title="الأسئلة الشائعة" lede="أكتر حاجات العملاء بيسألوا عنها.">
      <Accordion items={FAQ} />
      <div style={{ marginTop: 32, background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-md)', padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 16, color: 'var(--gold-700)' }}>لسه عندك سؤال؟ كلمنا على الواتساب وهنرد عليك فوراً.</span>
        <Button variant="primary" onClick={() => onNavigate('contact')}>تواصل معنا</Button>
      </div>
    </PageShell>
  );
}

function Policy({ onNavigate }) {
  const { Button, Icon, OrnamentDivider, Accordion, TrustRow, Breadcrumb, ProductTile, FAQ, PRODUCTS, GOVERNORATES } = __deps_ui_kits_store_Pages_jsx();
  const isMobile = window.__RESP__.useMobile();
  return (
    <PageShell onNavigate={onNavigate} title="سياسة الشحن والاسترجاع" lede="كل حاجة عن التوصيل والاستبدال، مكتوبة بوضوح.">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 14 : 24 }}>
        {[
          ['truck', 'الشحن والتوصيل', ['التوصيل من 2 لـ 5 أيام عمل حسب المحافظة.', 'الشحن مجاني على الطلبات فوق 3000 جنيه.', 'مصاريف الشحن 85 جنيه لما الطلب أقل من كده.', 'بنشحن لكل محافظات مصر.']],
          ['shield-check', 'التغليف والتأمين', ['كل القطع بتتغلف تغليف مزدوج.', 'الشحن مؤمن ضد الكسر.', 'لو وصلتك قطعة مكسورة، صوّرها وابعتلنا خلال 24 ساعة.', 'بنستبدل القطعة المكسورة على حسابنا.']],
          ['rotate-ccw', 'الاستبدال والاسترجاع', ['عندك 14 يوم من تاريخ الاستلام.', 'المنتج لازم يكون بحالته وبعلبته الأصلية.', 'مصاريف الشحن في حالة تغيير الرأي على العميل.', 'المبلغ بيرجع خلال 7 أيام عمل.']],
          ['banknote', 'الدفع', ['الدفع عند الاستلام متاح في كل المحافظات.', 'فيزا وماستركارد أونلاين.', 'محافظ الموبايل وإنستاباي.', 'أسعار الجملة بتتفق عليها بالتليفون.']]
        ].map(([icon, h, list]) => (
          <div key={h} style={{ background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Icon name={icon} size={22} color="var(--gold-500)" />
              <h3 style={{ margin: 0, fontFamily: 'var(--font-sans-ar)', fontSize: 18, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>{h}</h3>
            </div>
            <ul style={{ margin: 0, paddingInlineStart: 18, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {list.map(l => <li key={l} style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-body)' }}>{l}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function Search({ query, onNavigate, onAdd, onOpen }) {
  const { Button, Icon, OrnamentDivider, Accordion, TrustRow, Breadcrumb, ProductTile, FAQ, PRODUCTS, GOVERNORATES } = __deps_ui_kits_store_Pages_jsx();
  const isMobile = window.__RESP__.useMobile();
  const q = (query || '').trim();
  const results = q ? PRODUCTS.filter(p => p.title.includes(q)) : [];
  return (
    <PageShell onNavigate={onNavigate} title={q ? 'نتائج البحث عن «' + q + '»' : 'البحث'} lede={q ? results.length + ' نتيجة' : 'اكتب اسم المنتج في خانة البحث فوق.'}>
      {q && results.length === 0 ? (
        <div style={{ background: 'var(--marble-000)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 40, textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 16, color: 'var(--text-muted)', margin: '0 0 8px' }}>ملقناش نتائج لـ «{q}».</p>
          <p style={{ fontFamily: 'var(--font-sans-ar)', fontSize: 15, color: 'var(--text-muted)', margin: '0 0 20px' }}>جرّب كلمة أقصر، أو تصفّح الأقسام.</p>
          <Button variant="primary" onClick={() => onNavigate('listing')}>تصفّح كل المنتجات</Button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile ? 10 : 18 }}>
          {(results.length ? results : PRODUCTS.slice(0, 8)).map(p => <ProductTile key={p.id} {...p} onAdd={() => onAdd(p)} onClick={() => onOpen(p)} />)}
        </div>
      )}
      {q && results.length > 0 && (
        <div style={{ marginTop: 40 }}>
          <h2 style={{ margin: '0 0 18px', fontFamily: 'var(--font-sans-ar)', fontSize: 22, fontWeight: 800, textTransform: 'none', letterSpacing: 'normal' }}>ممكن يعجبك كمان</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile ? 10 : 18 }}>
            {PRODUCTS.filter(p => !results.includes(p)).slice(0, 4).map(p => <ProductTile key={p.id} {...p} onAdd={() => onAdd(p)} onClick={() => onOpen(p)} />)}
          </div>
        </div>
      )}
    </PageShell>
  );
}

window.__KIT__ = Object.assign(window.__KIT__ || {}, { About, Contact, Faq, Policy, Search, PageShell });
