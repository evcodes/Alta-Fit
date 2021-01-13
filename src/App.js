import logo from './logo.svg';
import { withAuthenticator,AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import './App.css';
Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <AmplifySignOut/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App)

