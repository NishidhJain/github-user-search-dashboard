import './App.css';
import Search from './components/Search'
import Info from './components/Info';
import User from './components/User'
import { GithubProvider } from './context/context';
import Repos from './components/Repos';

function App() {
  return (
    <div className="App">
      <h1 className="app__title">Github User Dashboard</h1>
      <GithubProvider>
        <Search />
        <Info />
        <User />
        <Repos />
      </GithubProvider>
    </div>
  );
}

export default App;
