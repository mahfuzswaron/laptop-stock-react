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
import RequireAuth from './components/shared/RequireAuth/RequireAuth';
import Blogs from './components/pages/Blogs/Blogs';
import AddItem from './components/pages/AddItem/AddItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './components/shared/Firebase/firebase.init';
import Spinner from './components/shared/Spinner/Spinner';
function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Spinner />
  }
  return (
    <div className='m-0'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <InventoryDetails></InventoryDetails>
        </RequireAuth>}></Route>
        <Route path='/manageinventories' element={<RequireAuth>
          <ManageInventories></ManageInventories>
        </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <ManageInventories></ManageInventories>
        </RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>

        <Route path='/registar' element={<Registar></Registar>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
