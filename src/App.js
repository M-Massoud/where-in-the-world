import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Countries from './components/Countries';
import CountryPage from './pages/Country';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:id" element={<CountryPage />} />
      </Routes>
    </>
  );
}

export default App;
