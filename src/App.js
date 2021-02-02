import './App.css';
import Search from './components/Search'
import Info from './components/Info';
import User from './components/User'
import { GithubProvider } from './context/context';

function App() {
  return (
    <div className="App">
      <h1>Github User Dashboard</h1>
      <GithubProvider>
        <Search />
        <Info />
        <User />
      </GithubProvider>
    </div>
  );
}

export default App;
