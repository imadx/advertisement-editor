import { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../store/hooks";
import styles from "./Preview.module.css";

export const Preview = () => {
  const content = useAppSelector((state) => state.advertisement.content);
  const title = useAppSelector((state) => state.advertisement.title);
  const callToActionText = useAppSelector(
    (state) => state.advertisement.callToActionText,
  );
  const callToActionLink = useAppSelector(
    (state) => state.advertisement.callToActionLink,
  );

  const letterSpacing = useAppSelector(
    (state) => state.advertisement.letterSpacing,
  );

  const lineSpacing = useAppSelector(
    (state) => state.advertisement.lineSpacing,
  );
  const advertisementWidth = useAppSelector(
    (state) => state.advertisement.advertisementWidth,
  );

  const [contentLines, setContentLines] = useState<string[]>([]);

  const textRenderPlaceholderRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const getWidthForText = (text: string) => {
      const textRenderPlaceholder = textRenderPlaceholderRef.current;
      if (!textRenderPlaceholder) return -1;
      textRenderPlaceholder.textContent = text;
      return textRenderPlaceholder.getBoundingClientRect().width;
    };

    const getWrappedTextLines = (
      text: string,
      maxWidth: number,
      fontSize: number,
    ) => {
      const words = text.split(" ");
      let line = "";
      let lines = [];

      words.forEach((word) => {
        const testLine = line + word + " ";
        const testWidth = getWidthForText(testLine);

        if (testWidth > maxWidth && line.length > 0) {
          lines.push(line);
          line = word + " ";
        } else {
          line = testLine;
        }
      });

      lines.push(line);

      return lines;
    };

    const _lines = getWrappedTextLines(content, advertisementWidth, 16);
    setContentLines(_lines);
  }, [content, advertisementWidth, letterSpacing, lineSpacing]);

  const advertisementHeight = contentLines.length * 16 * lineSpacing + 120;
  const lineHeightDelta = `${lineSpacing}em`;

  return (
    <div className={styles.container} data-test-id="advertisement-preview">
      <div className={styles.display}>
        <h2>Preview</h2>
        <div
          className={styles.displayOutput}
          style={{ width: advertisementWidth }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: advertisementHeight }}
          >
            <text
              ref={textRenderPlaceholderRef}
              letterSpacing={letterSpacing}
              opacity="0"
            ></text>
            <text y="0" letterSpacing={letterSpacing}>
              <tspan x="0" dy={"1em"} fontSize={24}>
                {title}
              </tspan>

              {contentLines.map((line, index) => (
                <tspan
                  x="0"
                  dy={index > 0 ? lineHeightDelta : "3em"}
                  key={index}
                >
                  {line}
                </tspan>
              ))}

              <tspan x="0" dy={"3em"}>
                <a
                  href={callToActionLink}
                  target="_blank"
                  style={{ fill: "#6f52f2" }}
                >
                  {callToActionText}
                </a>
              </tspan>
            </text>
          </svg>
        </div>
      </div>

      <div className={styles.properties}>
        <h2>Output properties</h2>
        <div>
          <span>Letter Spacing</span>
          <span>{letterSpacing}em</span>
        </div>
        <div>
          <span>Line Spacing</span>
          <span>{lineSpacing}em</span>
        </div>
        <div>
          <span>Advertisement Width</span>
          <span>{advertisementWidth}px</span>
        </div>
      </div>
    </div>
  );
};
