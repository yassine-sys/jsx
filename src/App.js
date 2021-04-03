import './App.css';
import imageInSrc from './imageInSrc.png';
import './style.css'
function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Your name here</h1>
      <br></br>
      <img src={imageInSrc} ></img>
      <br></br>
      <img src="/imageInPublic.png" style={{width:'25%'}} ></img>
      </div>
      <video width="320" height="240" controls>
      <source src="myVideo.mp4" type="video/mp4"></source>
      </video>
   


    </div>
  );
}

export default App;
