import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './components/comp/store';

import './styles/styles.scss';

const app = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}

export default app