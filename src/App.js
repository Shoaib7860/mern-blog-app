import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";
import IndexPage from './components/pages/IndexPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './components/userContext';
import Add from './components/pages/Add';


function App() {
  axios.defaults.withCredentials = true
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<Add />} />

          </Route>

        </Routes>

      </UserContextProvider>






    </>
  );
}

export default App;
