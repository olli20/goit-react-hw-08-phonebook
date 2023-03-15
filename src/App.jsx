import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import MainNavbar from './modules/MainNavbar/MainNavbar';
import UserRoutes from './UserRoutes';
import AuthLayout from 'modules/AuthLayout/AuthLayout';

import {store, persistor} from './redux/store';

const App = () => {
    return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>  
              <AuthLayout>
                  <BrowserRouter basename="goit-react-hw-08-phonebook">       
                      <MainNavbar />
                      <UserRoutes />
                  </BrowserRouter>
              </AuthLayout> 
          </PersistGate>
      </Provider>
    );
};

export default App;