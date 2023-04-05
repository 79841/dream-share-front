import DiaryDetail from "@/components/diary/Diary";
import { useQuery } from "react-query";
import { getDiaryDetail } from "@/lib/queries/diary";
import Diary from "@/interfaces/Diary.interface";
import { useRouter } from "next/router";

const WriteDiary = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: diary,
    isLoading,
    isError,
    error,
  } = useQuery<Diary, Error>(
    "diaryDetail",
    () => getDiaryDetail(id as string),
    {
      cacheTime: 0,
      enabled: !!id,
    }
  );

  return isLoading ? "Loading..." : <DiaryDetail diary={diary} />;
};

export default WriteDiary;
