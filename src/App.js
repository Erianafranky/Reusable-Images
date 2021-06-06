
import './App.css';
import Images from './component/Images';

function App() {
  const imageConstants = [
    {
      src: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f709d82fa4f131fa2114a74%2F0x0.jpg',
      w: 250,
      h: 250,
    },

  ];

  return (
    <div className="image-app">
      {imageConstants.map((ImageItem) => {
        return (
          <Images 
            src={ImageItem.src}
            w={ImageItem.w}
            h={ImageItem.h}
          />

        );
      })}
      
      
    </div>
  );
}

export default App;
