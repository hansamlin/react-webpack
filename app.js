import "./app.scss";
import logo from "./public/logo512.png";
import banner from "./public/art_museum_large.jpg";
import Hello from "./src/components/hello";

const App = () => {
  return (
    <>
      <Hello />
      <div className="logoPng">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
    </>
  );
};

export default App;
