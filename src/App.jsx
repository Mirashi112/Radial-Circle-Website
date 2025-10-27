import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Partners from "./components/Partners";
import Forum from "./components/Forum";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import RCTSL from "./components/RCTSL";
import RCMS from "./components/RCMS";
import ROSS from "./components/ROSS";
import WhatWeDo from "./components/WhatWeDo";
import Media from "./components/MediaShowcase";
import CertViewer from "./pages/CertViewer"; 


// ✅ Layout wrapper for Navbar + Footer
const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen font-sans">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

function App() {
  useEffect(() => {
    // prevent duplicate script injection
    if (document.getElementById("smartsupp-script")) return;

    const script = document.createElement("script");
    script.id = "smartsupp-script";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = 'e976b0bf4d7ed8a018326c98406aa93a65d869bf';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c,s);
      })(document);
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Smooth scrolling behaviors */}
      <ScrollToTop />
      <ScrollToHash />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
            </Layout>
          }
        />

        {/* Other routes */}
        <Route path="/rctsl" element={<Layout><RCTSL /></Layout>} />
        <Route path="/rcms" element={<Layout><RCMS /></Layout>} />
        <Route path="/ross" element={<Layout><ROSS /></Layout>} />
        <Route path="/what-we-do" element={<Layout><WhatWeDo /></Layout>} />
        <Route path="/media" element={<Layout><Media /></Layout>} />
        <Route path="/partners" element={<Layout><Partners /></Layout>} />
        <Route path="/forum" element={<Layout><Forum /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/WhoWeAre" element={<Layout><WhoWeAre /></Layout>} />

        {/* ✅ Cert Viewer route */}
      <Route path="/cert/:type" element={<Layout><CertViewer /></Layout>} />
      </Routes>
    </>
  );
}

export default App;
