import { searchKeywordState } from "@/lib/store/search";
import { useSetRecoilState } from "recoil";
import styles from "@/styles/home/Search.module.css";

const Search = () => {
  const setSearchKeyword = useSetRecoilState(searchKeywordState);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default Search;
