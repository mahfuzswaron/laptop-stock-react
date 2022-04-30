import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../src/components/shared/Header/Header';
import Home from '../src/components/pages/Home/Home ';
import NotFound from '../src/components/pages/NotFound/NotFound';
import Footer from '../src/components/shared/Footer/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
