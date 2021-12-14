import './App.css';
import Header from './Component/Header';
import ImageScrapper from './Component/ImageScrapper';
import VideoScrapper from './Component/VideoScrapper';
import ImageContent from './content/ImageContent';
import VideoContent from './content/VideoContent';

function App() {
  return (
    <div className="App">
        <Header />
        
        <h2 className="textCenter">Images</h2>
        <ImageScrapper images={ImageContent}/>

        <h2 className="textCenter">Videos</h2>
        <VideoScrapper videos={VideoContent} />
    </div>
  );
}

export default App;
