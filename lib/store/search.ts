import { atom } from "recoil";

const searchKeywordState = atom({
  key: "searchKeywordState",
  default: "",
});

export { searchKeywordState };
