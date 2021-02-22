
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";//here install(react particals js) and import
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
    {/* start pricals */}
    <Particles
    className="Particles-canvas"
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"star",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}
    // end particals
    />
    <Navbar />
    <Header />
    </>
  );
}
export default App;