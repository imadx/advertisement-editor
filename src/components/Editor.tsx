import { InputSection } from "./InputSection";
import styles from "./Editor.module.css";

import { useDispatch } from "react-redux";
import {
  setCallToActionLink,
  setCallToActionText,
  setContent,
  setTitle,
  setLetterSpacing,
  setLineSpacing,
  setAdvertisementWidth,
} from "../store/slices/advertisement";
import { useAppSelector } from "../store/hooks";
import { IconLink } from "./IconLink";
import { IconType } from "./IconType";

export const Editor = () => {
  const dispatch = useDispatch();

  const handleOnChangeText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    switch (e.target.name) {
      case "title":
        dispatch(setTitle(e.target.value));
        break;
      case "callToActionText":
        dispatch(setCallToActionText(e.target.value));
        break;
      case "callToActionLink":
        dispatch(setCallToActionLink(e.target.value));
        break;
      case "content":
        dispatch(setContent(e.target.value));
        break;
    }
  };

  const handleOnChangeNumeric = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "letterSpacing":
        dispatch(setLetterSpacing(Number(e.target.value)));
        break;
      case "lineSpacing":
        dispatch(setLineSpacing(Number(e.target.value)));
        break;
      case "advertisementWidth":
        dispatch(setAdvertisementWidth(Number(e.target.value)));
        break;
    }
  };

  const advertisement = useAppSelector((state) => state.advertisement);

  return (
    <div className={styles.container}>
      <h2>Content</h2>
      <InputSection
        label="Title"
        input={
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleOnChangeText}
            value={advertisement.title}
          />
        }
      />
      <InputSection
        label="Call to action"
        input={
          <>
            <div className={styles.callToAction}>
              <input
                type="text"
                name="callToActionText"
                placeholder="Label (eg: Click here)"
                onChange={handleOnChangeText}
                value={advertisement.callToActionText}
              />
              <input
                type="text"
                name="callToActionLink"
                placeholder="Link (eg: https://example.com)"
                onChange={handleOnChangeText}
                value={advertisement.callToActionLink}
              />
              <IconType />
              <IconLink />
            </div>
          </>
        }
      />
      <InputSection
        label="Content"
        input={
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleOnChangeText}
            value={advertisement.content}
          />
        }
      />
      <h2>Properties</h2>
      <InputSection
        label="Letter Spacing"
        input={
          <input
            type="range"
            name="letterSpacing"
            onChange={handleOnChangeNumeric}
            value={advertisement.letterSpacing}
            min="0"
            max="10"
          />
        }
      />
      <InputSection
        label="Line spacing"
        input={
          <input
            type="range"
            name="lineSpacing"
            onChange={handleOnChangeNumeric}
            value={advertisement.lineSpacing}
            min="1"
            max="3"
            step={0.1}
          />
        }
      />
      <InputSection
        label="Advertisement width"
        input={
          <input
            type="range"
            name="advertisementWidth"
            onChange={handleOnChangeNumeric}
            value={advertisement.advertisementWidth}
            min="200"
            max="400"
          />
        }
      />
    </div>
  );
};
