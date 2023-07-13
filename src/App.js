import logo from './logo.svg';
import './App.css';
import DigiNavbar from './DigiNavbar';
import DigiFooter from './DigiFooter';
import DigiHome from './DigiHome';

function App() {
  // this app is an example of converting a basic HTML app into a React app
  // We do this by splitting the html app into components.  In this case, we choose 
  // navbar, main (home) section, and footer.
  // The original HTML project is in DigitalProfile directory.
  
  return (
    <div className="App">
      <h1>Welcome to DigiProfile</h1>
      <DigiNavbar/>
      <DigiHome/>
      <DigiFooter/>

    </div>
  );
}

export default App;
