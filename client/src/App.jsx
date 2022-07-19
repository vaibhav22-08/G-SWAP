/* import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Welcome from './components/Welcome'; */
import { Navbar, Welcome, Services, Transactions, Footer, Loader } from './components';
function App() {
  return (
    <div className='min-h-screen bg-[#ECE8DF]'>
      <div className='gradient-bg-welcome '>
        <Navbar />
        <Welcome />
      </div>
      {/* <Services /> */}
      <Transactions />
      <Footer />
    </div>
  );
}
export default App;