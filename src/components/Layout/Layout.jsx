import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

export default function PrivateLayout() {
  return (
     <div className="App">
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer/>
    </div>
  );
}