import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from './About';
import { Products } from './Products';
import { Contact } from './Contact';
import { Singleproduct } from './Singleproduct';
import { Cart } from './Cart';
import { ErrorPage } from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "#fff",
      footerbg: "#0a1435",
      btn: "rgb(98,84,243,)",
      border: "rgba(98,84,243,0.5)",
      hr: "#fffff",
      gradient: "liner-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px opx 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16)0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/singleproduct/:id" element={<Singleproduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
