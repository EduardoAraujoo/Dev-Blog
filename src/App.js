import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import AboutMe from "./Pages/AboutMe";
import MainPage from "./Pages/Main/MainPage";
import PostsPage from "./Pages/PostsPage";
import './Styles/GlobalStyles.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<MainPage />} /> 
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="posts/:id" element={<PostsPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;