import { useEffect, useState } from "react";
import type { TypewriterTextProps } from "./TextWriter.types";
import { Text } from "../Text/Text.component";

export function TextWriter({
  text,
  onComplete,
  active = true,
  classNameAndIndex,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!active) return;

    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, 25);

    return () => clearInterval(interval);
  }, [text, onComplete, active]);

  return (
    <Text className={classNameAndIndex} style={{ position: "relative" }}>
      <span style={{ visibility: "hidden" }}>{text}</span>
      <span
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        {displayedText}
      </span>
    </Text>
  );
}
