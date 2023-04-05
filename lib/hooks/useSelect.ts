import { useEffect, useState } from "react";

const useSelect = <E extends string, T extends Object>(
  initialVal: E,
  data: T,
  refs: React.MutableRefObject<HTMLElement[] | null[]>,
  styles: any
): { selected: E; handleSelect: Function } => {
  const [selected, setSelected] = useState<E>(initialVal);

  // todo : styled component 적용 시 바꿔야할 로직
  useEffect(() => {
    refs.current.map((ref, i) => {
      if (ref && Object.keys(data).indexOf(selected) == i) {
        ref.className = styles.selected;
      } else if (ref) {
        ref.className = styles.unselected;
      }
    });
  }, [selected]);

  const handleSelect = async (s: E) => {
    setSelected(s);
  };

  return { selected, handleSelect };
};

export default useSelect;
