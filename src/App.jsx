import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {

  return (
    <div>
    <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>tesetee</main>
      </div>
    </div>
  )
}

export default App
