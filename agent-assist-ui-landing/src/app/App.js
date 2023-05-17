
import '../App.css';
import LandingApp from './components/apps/Landing';
import Provider from "react-redux/es/components/Provider";
import store from "./stores";


function App() {
  // only for location analysis in url
console.log("window",window.location)

  return (
    <div className="App">
     <Provider store={store}>
   
       <LandingApp/>
    
     </Provider>
    </div>
  );
}

export default App;
