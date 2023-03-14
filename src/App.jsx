
import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <UserRoutes />
    </div>
  );
};

export default App;