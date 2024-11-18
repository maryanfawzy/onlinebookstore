import logo from './logo.svg';
import './App.css';
import AllRoutes from './route/AllRoutes';
import Header from './component/LayOuts/Header';
import Footer from './component/LayOuts/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
