import styles from "@/styles/tools/NewDiary.module.css";
import Link from "next/link";

const NewDiary = () => {
  return (
    <div className={styles.container}>
      <Link href="/diary/write" style={{ textDecoration: "none" }}>
        <button className={styles.new__diary}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </Link>
    </div>
  );
};

export default NewDiary;
