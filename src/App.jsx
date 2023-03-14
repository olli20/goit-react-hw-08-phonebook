
import NavBar from './modules/NavBar/NavBar';
import UserRoutes from './UserRoutes';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <UserRoutes />
    </div>
  );
};

export default App;