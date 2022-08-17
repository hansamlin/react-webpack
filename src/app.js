import { styled } from '@stitches/react';
import logo from '../public/logo512.png';
import banner from '../public/art_museum_large.jpg';
import Hello from './components/hello';
// import './app.css';
const Img = styled('img', {
  height: '100%',
});

const ImgContainer = styled('div', {
  height: '100px',
});

function App() {
  return (
    <>
      {/* <h1 className="text-primary text-4xl font-bold">Hello world! I am using React</h1> */}
      <Hello />
      <ImgContainer>
        <Img src={logo} alt="Logo" />
      </ImgContainer>
      <ImgContainer>
        <Img src={banner} alt="Banner" />
      </ImgContainer>
    </>
  );
}

export default App;
