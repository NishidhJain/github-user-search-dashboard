import './App.css';

import { GithubProvider } from './context/context';
import Dashboard from './Dashboard';

function App() {

  return (
    <div className="App">
      <h1 className="app__title">Github User Dashboard</h1>
      <GithubProvider>
        <Dashboard />
      </GithubProvider>
    </div>
  );
}

export default App;
