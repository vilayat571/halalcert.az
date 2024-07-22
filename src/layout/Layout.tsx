import React, { ReactNode } from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../atoms/Footer/Footer";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col items-center tracking-wider">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
