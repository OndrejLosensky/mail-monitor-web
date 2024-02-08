import "../src/index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import HowToUse from "./components/HowToUse";

function App() {
  return (
    <div className="bg-appBg">
        <Header/>
        <Body/>
        <HowToUse/>
        <div className="mx-auto">
          <Footer/>
        </div>  
    </div>
  );
}

export default App;
