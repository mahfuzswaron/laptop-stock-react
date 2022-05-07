import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../src/components/shared/Header/Header';
import Home from '../src/components/pages/Home/Home ';
import NotFound from '../src/components/pages/NotFound/NotFound';
import Footer from '../src/components/shared/Footer/Footer';
import Inventories from './components/pages/Inventories/Inventories';
import InventoryDetails from './components/pages/InventoryDetails/InventoryDetails';
import ManageInventories from './components/pages/ManageInventories/ManageInventories';
import Registar from './components/pages/Registar/Registar';
import Login from './components/pages/Login/Login';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:id' element={<InventoryDetails></InventoryDetails>}></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/registar' element={<Registar></Registar>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
