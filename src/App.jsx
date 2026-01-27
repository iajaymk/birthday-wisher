import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WishPage from './pages/WishPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wish" element={<WishPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
