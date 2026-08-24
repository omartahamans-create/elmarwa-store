const { Header, Footer, MiniCart, HomeV2, Listing, Product, Cart, Checkout, About, Contact, Faq, Policy, Search,
        WelcomeOffer, AddedSheet, ExitOffer, StickyBar, ProofToast, WhatsAppFab } = window.__KIT__;
const { PRODUCTS } = window.__STORE__;

export default function App() {
  const [route, setRoute] = React.useState('home');
  const [params, setParams] = React.useState({});
  const [product, setProduct] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [miniCart, setMiniCart] = React.useState(false);
  const [welcome, setWelcome] = React.useState(false);
  const [added, setAdded] = React.useState(null);
  const [exit, setExit] = React.useState(false);
  const exitFired = React.useRef(false);

  const subtotal = items.reduce((s, i) => s + i.current * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  const navigate = (r, p = {}) => { setRoute(r); setParams(p); window.scrollTo(0, 0); };
  const openProduct = p => { setProduct(p); navigate('product'); };
  const add = (p, qty = 1) => {
    setItems(cur => {
      const found = cur.find(i => i.id === p.id);
      return found ? cur.map(i => i.id === p.id ? { ...i, qty: i.qty + qty } : i) : [...cur, { ...p, qty }];
    });
    setAdded(p);
  };
  const setQty = (id, v) => setItems(cur => v <= 0 ? cur.filter(i => i.id !== id) : cur.map(i => i.id === id ? { ...i, qty: v } : i));
  const remove = id => setItems(cur => cur.filter(i => i.id !== id));

  React.useEffect(() => { const t = setTimeout(() => setWelcome(true), 15000); return () => clearTimeout(t); }, []);
  React.useEffect(() => {
    const h = e => { if (e.clientY <= 0 && !exitFired.current && route !== 'checkout') { exitFired.current = true; setExit(true); } };
    document.addEventListener('mouseout', h);
    return () => document.removeEventListener('mouseout', h);
  }, [route]);

  let Screen;
  if (route === 'home') Screen = <HomeV2 onNavigate={navigate} onAdd={add} onOpen={openProduct} />;
  else if (route === 'listing') Screen = <Listing params={params} onNavigate={navigate} onAdd={add} onOpen={openProduct} />;
  else if (route === 'flash') Screen = <Listing flash title="العروض والخصومات" items={PRODUCTS.filter(p => p.original)} onNavigate={navigate} onAdd={add} onOpen={openProduct} />;
  else if (route === 'product') Screen = <Product product={product} onNavigate={navigate} onAdd={add} onOpen={openProduct} />;
  else if (route === 'cart') Screen = <Cart items={items} subtotal={subtotal} onQty={setQty} onRemove={remove} onNavigate={navigate} onAdd={add} onOpen={openProduct} />;
  else if (route === 'checkout') Screen = <Checkout items={items} subtotal={subtotal} onNavigate={navigate} />;
  else if (route === 'about') Screen = <About onNavigate={navigate} />;
  else if (route === 'contact') Screen = <Contact onNavigate={navigate} />;
  else if (route === 'faq') Screen = <Faq onNavigate={navigate} />;
  else if (route === 'policy') Screen = <Policy onNavigate={navigate} />;
  else Screen = <Search query={query} onNavigate={navigate} onAdd={add} onOpen={openProduct} />;

  return (
    <div>
      <Header route={route} onNavigate={navigate} cartCount={count} onOpenCart={() => setMiniCart(true)} query={query} onQuery={setQuery} />
      {Screen}
      <Footer onNavigate={navigate} />
      <MiniCart open={miniCart} onClose={() => setMiniCart(false)} items={items} onQty={setQty} subtotal={subtotal} onNavigate={navigate} />
      <WelcomeOffer open={welcome} onClose={() => setWelcome(false)} />
      <AddedSheet open={!!added} product={added} subtotal={subtotal} onClose={() => setAdded(null)} onAdd={add} onNavigate={navigate} />
      <ExitOffer open={exit} onClose={() => setExit(false)} onNavigate={navigate} />
      {route !== 'checkout' && <StickyBar subtotal={subtotal} count={count} onNavigate={navigate} />}
      {route !== 'checkout' && <ProofToast />}
      <WhatsAppFab />
    </div>
  );
}
