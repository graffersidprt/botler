import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
// import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';
import { I18nextProvider } from 'react-i18next';
import i18next from './i18next';
import { Provider } from 'react-redux';
import { store } from './app/store';
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={ store }>
    <I18nextProvider i18n={ i18next }>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nextProvider>
  </Provider>
);
