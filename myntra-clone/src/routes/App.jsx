import FetchItems from "../components/FetchItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Outlet} from 'react-router-dom';
import { useSelector } from "react-redux";
//pleaes create loading Spinner and add it to the place where loading is written .

function App() {
  const fetchStatus = useSelector(store => store.fetchStatus);

  return (
    <>
     <Header/>
     <FetchItems></FetchItems>
     {!fetchStatus.currentlyFetching ? <h1>loading</h1> :<Outlet/>}
     
     <Footer/>
    </>
  )
}

export default App;
