import './App.css';
import Info from './components/Info';
import Search from './components/Search'
import { GithubProvider } from './context/context';

function App() {
  return (
    <div className="App">
      <h1>Github User Dashboard</h1>
      <GithubProvider>
        <Search />
        <Info />
      </GithubProvider>
    </div>
  );
}

export default App;
