import logo from './logo.svg';
import './App.css';
import CampaignCardContainer from './components/CampaignCardContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RPG Campaign Store
        </p>
        <CampaignCardContainer></CampaignCardContainer>
      </header>
    </div>
  );
}

export default App;
