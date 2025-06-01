import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { Auth0Provider } from '@auth0/auth0-react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-qfr5nzvjnqf502sp.us.auth0.com"
    clientId="s59fSHV75rpaXeFzuDGi2aDqWkGip6Bk"
    authorizationParams={{
    redirect_uri: window.location.origin,
    }}
  >
    <Header/>
    <App />
    <Footer/>
  </Auth0Provider>
)
