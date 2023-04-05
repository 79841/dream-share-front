import Diary from "@/interfaces/Diary.interface";
import { atom, selector } from "recoil";
import { searchKeywordState } from "./search";

const diariesState = atom({
  key: "diariesState",
  default: <Diary[]>[],
});

const filteredDiariesState = selector({
  key: "filteredDiariesState",
  get: ({ get }) => {
    const filter = get(searchKeywordState);
    let diaries = get(diariesState);

    if (filter) {
      diaries = diaries.filter(
        (diary: Diary) =>
          diary.title.includes(filter) ||
          diary.content.includes(filter) ||
          diary.hashtagList.join("").includes(filter)
      );
    }
    return diaries;
  },
});

export { diariesState, filteredDiariesState };
