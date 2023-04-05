import { useRef } from "react";
import Diary from "@/interfaces/Diary.interface";
import styles from "@/styles/home/DiaryPreview.module.css";
import { useRouter } from "next/router";
import emotionEmojis from "@/lib/statics/emotionEmojis";

const DiaryPreview = ({ diary }: { diary: Diary }) => {
  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLDivElement> | undefined = (
    e
  ) => {
    router.push(`/diary/edit/${diary.id}`);
  };

  return (
    <div
      className={`${styles.diary} ${styles.diary__boxes}`}
      onClick={handleClick}
    >
      <div className={styles.diary__title}>{diary.title}</div>
      <pre className={styles.diary__content}>
        {diary.content.slice(0, 1000)}
      </pre>
      <div className={styles.footer}>
        <div className={styles.diary__date}>
          {Intl.DateTimeFormat("kr").format(
            new Date(String(diary.createdTime))
          )}
        </div>
        <div className={styles.emotion}>{emotionEmojis[diary.emotion]}</div>
      </div>
    </div>
  );
};
export default DiaryPreview;
