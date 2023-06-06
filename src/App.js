import MainPage from "./Pages/Main/MainPage";
import './Styles/GlobalStyles.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainPage/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;