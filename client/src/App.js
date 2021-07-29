import './App.scss';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="content">
        <Sidebar />
        <Dashboard />
      </div>
    

    </div>
  );
}

export default App;
