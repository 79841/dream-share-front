import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "dream-share",
  storage: sessionStorage,
});

const sessionState = atom({
  key: "session",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export default sessionState;
