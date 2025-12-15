import { useState, Children, type ReactElement} from "react";
import { TextWriter } from "../TextWriter";
import type {
  TextWriterGroupChild,
  TextWriterGroupProps,
} from "./TextWriterGroup.types";

export function TextWriterGroup({
  children,
  onComplete,
  className,
}: TextWriterGroupProps) {
  const items = Children.toArray(
    children
  ) as ReactElement<TextWriterGroupChild>[];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {items.map((child, index) => {
        const text = child.props.children;
        if (typeof text !== "string") return null;

        return (
          <TextWriter
            key={index}
            text={text}
            active={index === currentIndex}
            onComplete={() => {
              if (index < items.length - 1) {
                setCurrentIndex((i) => i + 1);
              } else {
                onComplete?.();
              }
            }}
            classNameAndIndex={`${className}-${index}`}
          />
        );
      })}
    </>
  );
}
