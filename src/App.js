import logo from './img/coyote/coyotes/logo.png';
import './App.css';

import AudioPlayer from './components/audioplayer';
import song from "./audio/espanol.wav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AudioPlayer audioSrc={song}/>
      </header>
    </div>
  );
}

export default App;
