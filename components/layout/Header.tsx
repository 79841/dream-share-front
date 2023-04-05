import styles from "@/styles/layout/Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <i className="fa-solid fa-d"></i>
      </div>
    </div>
  );
};

export default Header;
