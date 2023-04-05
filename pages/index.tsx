import DiaryList from "../components/diary/DiaryList";
import Search from "@/components/search/Search";
import NewDiary from "@/components/tools/NewDiary";
import styles from "@/styles/home/Home.module.css";
import Link from "next/link";
import Portal from "@/components/modal/Portal";
import { useState, useEffect } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [portalShow, setPortalShow] = useState(false);

  const handleClick = () => {
    setPortalShow(!portalShow);
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 1900);
    } else {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Search />
      </div>
      <DiaryList />
      <div className={styles.new__diary}>
        <NewDiary />
      </div>

      <Portal selector="#portal">
        {isOpen ? (
          <div
            className={`${styles.test__div} ${
              portalShow ? styles.show : styles.hide
            }`}
          >
            <div></div>
          </div>
        ) : null}
      </Portal>
    </div>
  );
};

export default Home;
