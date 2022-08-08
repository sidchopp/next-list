import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {/* Here children refers to <Component {...pageProps}>, ie all our pages */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
