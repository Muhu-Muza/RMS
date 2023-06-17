import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurant from '../../components/Restaurant';
import './index.css';
import UpdateForm from '../../components/UpdateForm';
import AddForm from '../../components/AddForm';
import DetailsPage from '../../components/DetailsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/form" element={<AddForm />} />
        <Route path="/update" element={<UpdateForm />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
