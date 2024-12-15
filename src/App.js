import logo from './img/coyote/coyotes/logo2.png';
import './App.css';

import * as React from "react";

import AudioPlayer from './components/audioplayer';
// import song from "./audio/espanol.wav";

import manifest from "./audio/manifest.json";

const getSongFiles = async function () {

  let result = []

  for (const v of manifest) {
    let songTrack = await import("./audio/" + v.file)

    result.push({
      title: v.title,
      artist: v.artist,
      song: songTrack.default
    })
  }

  return result;
  
}

function App() {

  const [songFiles, setSongFiles] = React.useState([]);

  React.useEffect(()=>{
    async function load() {
      const result = await getSongFiles();
      setSongFiles(result)
    }

    load();
  }, [setSongFiles])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          songFiles.map((v,i)=> {
            return <AudioPlayer 
              key={i} 
              title={v.title} 
              artist={v.artist}
              audioSrc={v.song}/>
          })
        }
        
      </header>
    </div>
  );
}

export default App;
