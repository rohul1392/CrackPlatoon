import './App.css';
import ResponsiveAppBar from './components/AppBar'
import withRoot from './components/withRoot';
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import AppFooter from './components/AppFooter'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <ResponsiveAppBar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  <AppFooter />
  </>
  );
}
export default withRoot(App);