import logo from './logo.svg';
import './App.css';

function App() {


    return (
     <>
     <div class = "buttons">
  <button class = 'details' id = "nob">Clone</button>
  <button class = 'details' id = 'delete'>Delete last</button>
  <button class = 'details' id = 'background'>Change Background</button>
  <button class = 'details' id = 'writing'>Change title</button>
</div>
<div class = "card">
  <div class = "card-container">
    <div class = "card-content">
      <h2>Penn State Blue and White Game</h2>
      <img align = "center" src = "https://dgiqkglfef83i.cloudfront.net/images/2023/4/15/Blue-White.png" alt = "B+W Game Image"/>
      <p>With all hype on the upcoming football season, the Blue and White game gives the fans something to look forward to watching in the spring!</p>
      <a class = 'details'>
      <button id = 'details' >Details</button>
      </a>
    </div>
  </div>
</div>
</>
    );
  }

export default App;
