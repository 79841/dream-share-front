import React, { useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createDiary, editDiary, removeDiary } from "@/lib/queries/diary";
import { useRouter } from "next/router";

import styles from "@/styles/diary/Diary.module.css";
import type Diary from "@/interfaces/Diary.interface";
import emotionEmojis from "@/lib/statics/emotionEmojis";
import openScopes from "@/lib/statics/openScopes";
import useSelect from "@/lib/hooks/useSelect";

type Emotion = Diary["emotion"];
type OpenScope = Diary["openScope"];

const Diary = ({ diary }: { diary: Diary | undefined }) => {
  const router = useRouter();

  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
  const hashtag = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (diary) {
      if (title.current) {
        title.current.value = diary.title;
      }
      if (content.current) {
        content.current.value = diary.content;
      }
      if (hashtag.current) {
        hashtag.current.value = diary?.hashtagList.map((s) => `#${s}`).join("");
      }
    }
  }, [diary]);

  const handleResizeHeight = () => {
    if (content?.current) {
      content.current.style.height = "50rem";
      content.current.style.height = content.current.scrollHeight + "px";
    }
  };

  const initEmotion = diary
    ? diary.emotion
    : (Object.keys(emotionEmojis)[0] as Emotion);
  const emotionBtnRef = useRef<HTMLButtonElement[] | null[]>([]);
  const { selected: selectedEmotion, handleSelect: handleEmotionSelect } =
    useSelect(initEmotion, emotionEmojis, emotionBtnRef, styles);

  const initScope =
    diary?.openScope || (Object.keys(openScopes)[0] as OpenScope);
  const scopeBtnRef = useRef<HTMLButtonElement[] | null[]>([]);
  const { selected: selectedScope, handleSelect: handleScopeSelect } =
    useSelect(initScope, openScopes, scopeBtnRef, styles);

  const queryClient = useQueryClient();

  const saveDiary = diary ? editDiary : createDiary;
  const { mutate: mutateSave } = useMutation(saveDiary, {
    onSuccess: () => {
      router.push("/");
      return queryClient.invalidateQueries(["diaryDetail", "allDiaries"]);
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const updatedDiary: Diary = {
      title: title.current?.value ?? "",
      content: content.current?.value ?? "",
      hashtagList: hashtag.current?.value.split("#").splice(1) ?? [],
      emotion: selectedEmotion as Emotion,
      openScope: selectedScope as OpenScope,
    };
    if (diary) {
      updatedDiary.id = diary.id;
    }
    mutateSave(updatedDiary);
  };

  const { mutate: mutateRemove } = useMutation(removeDiary, {
    onSuccess: () => {
      router.push("/");
      return queryClient.invalidateQueries(["diaryDetail", "allDiaries"]);
    },
  });

  const handleRemove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (diary && diary.id) {
      mutateRemove(diary.id);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.title}>
            <input ref={title} type="text" placeholder="title" />
          </div>
          <div className={styles.content}>
            <textarea
              ref={content}
              onChange={handleResizeHeight}
              placeholder="content"
              spellCheck={false}
            ></textarea>
          </div>
          <div className={styles.hashtag}>
            <input ref={hashtag} type="text" placeholder="#hashtag" />
          </div>
          <div className={styles.emotion}>
            {Object.entries(emotionEmojis).map(([key, val], i) => (
              <button
                type="button"
                name={key}
                key={key}
                onClick={() => handleEmotionSelect(key)}
                ref={(el) => (emotionBtnRef.current[i] = el)}
              >
                {val}
              </button>
            ))}
          </div>
          <div className={styles.openscope}>
            {Object.entries(openScopes).map(([key, val], i) => (
              <button
                type="button"
                key={key}
                onClick={() => handleScopeSelect(key)}
                ref={(el) => (scopeBtnRef.current[i] = el)}
              >
                {val}
              </button>
            ))}
          </div>
          <div className={styles.submit}>
            <button type="submit">SAVE</button>
          </div>
          <div className={styles.remove}>
            <button type="button" onClick={handleRemove}>
              REMOVE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Diary;
