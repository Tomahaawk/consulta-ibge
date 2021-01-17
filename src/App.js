import Search from './pages/Search';
import { GlobalStyle } from './styles/global';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Search />
      <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
    </>
  );
}

export default App;
