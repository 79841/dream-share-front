import { useQuery } from "react-query";
import { getAllDiaries } from "../../lib/queries/diary";
import { diariesState, filteredDiariesState } from "@/lib/store/diary";
import { useRecoilValue, useSetRecoilState } from "recoil";
import DiaryPreview from "@/components/diary/DiaryPreview";

import Diary from "@/interfaces/Diary.interface";
import styles from "@/styles/home/DiaryList.module.css";

const page = 0;
const size = 10;

const DiaryList = () => {
  const setDiaries = useSetRecoilState(diariesState);

  const { data, isLoading, isError, error } = useQuery<Diary[], Error>(
    "allDiaries",
    () => getAllDiaries(page, size),
    {
      onSuccess: (data) => {
        setDiaries(data);
      },
    }
  );

  const filteredDiaries = useRecoilValue(filteredDiariesState);

  return (
    <>
      <div className={`${styles.container} ${styles.diary__boxes}`}>
        {filteredDiaries?.map((diary: Diary) => (
          <DiaryPreview key={diary.id as React.Key} diary={diary} />
        ))}
      </div>
    </>
  );
};

export default DiaryList;
