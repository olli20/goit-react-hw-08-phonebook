import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';
import AuthLayout from 'modules/AuthLayout/AuthLayout';

import {store, persistor} from './redux/store';

const App = () => {
    return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>  
              <AuthLayout>
                  <BrowserRouter basename="goit-react-hw-08-phonebook">       
                      <Navbar />
                      <UserRoutes />
                  </BrowserRouter>
              </AuthLayout> 
          </PersistGate>
      </Provider>
    );
};

export default App;