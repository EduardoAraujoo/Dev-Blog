import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import MainPage from "./Pages/Main/MainPage";
import './Styles/GlobalStyles.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/aboutme" element={<AboutMe />} /> */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;