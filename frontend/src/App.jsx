import { HashRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ContactUs,
  Careers,
  CaseStudies,
  Page404,
  About,
  Technologies,
  IndividualCaseStudy,
  Services,
  SharedLayout,
} from "./pages";
import { WinSizeProvider } from "./context/winSizeContext";


function App() {
  

  return (
    <HashRouter>
      <WinSizeProvider>
      <Routes>
        <Route exact path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route exact path="services" element={<Services />} />
          <Route exact path="technologies" element={<Technologies />} />
          {/* CHANGE FOR RESUME */}
          <Route exact path="about" element={<About />} />
          <Route exact path="case-studies" element={<CaseStudies />} />
          <Route exact path="case-studies/:id" element={<IndividualCaseStudy />} />
          <Route exact path="contact" element={<ContactUs />} />
          <Route exact path="careers" element={<Careers />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      </WinSizeProvider>
    </HashRouter>

  );
}

export default App;
