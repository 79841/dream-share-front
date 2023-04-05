import Header from "./Header";
import styles from "@/styles/layout/Layout.module.css";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <div id="portal"></div>
    </>
  );
};

export default Layout;
