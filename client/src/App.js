

// Styles
import './App.css';

// Components
import NavbarH from './Components/NavbarH';
import NavbarV from './Components/NavbarV';
import Button from './Components/Button';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <NavbarH />
      <NavbarV />
      <Button />
      <Button />
      <Button />
      <Dashboard />
    </div>
  );
}

export default App;
