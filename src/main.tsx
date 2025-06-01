import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-qfr5nzvjnqf502sp.us.auth0.com"
    clientId="s59fSHV75rpaXeFzuDGi2aDqWkGip6Bk"
    authorizationParams={{
    redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
)
