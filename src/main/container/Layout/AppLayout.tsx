import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./AppLayout.scss";

interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__content">{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
