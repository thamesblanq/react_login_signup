import Login from "./Login";
import Layout from "./Layout";
import Home from "./Home";
import SignUp from "./SignUp";
import Missing from "./Missing";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} /> 
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  )
}

export default App
