import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/global/Navigation/Navbar';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
