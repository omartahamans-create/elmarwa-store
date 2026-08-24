// Order matters: base chrome first, then the v3 overrides.
import './app/01-Chrome.jsx';
import './app/02-Chrome3.jsx';
import './app/03-Home3.jsx';
import './app/04-Listing.jsx';
import './app/05-Product.jsx';
import './app/06-Cart.jsx';
import './app/07-Checkout.jsx';
import './app/08-Pages.jsx';
import './app/09-Cro.jsx';
import App from './App.jsx';

window.ReactDOM.createRoot(document.getElementById('root')).render(<App />);
