import type { ReactNode, CSSProperties } from "react";

export type FlexProps = {
  children: ReactNode;
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  wrap?: CSSProperties["flexWrap"];
  gap?: string;
  padding?: string;
  margin?: string;
  mt?: string;
  mb?: string;
  width?: string;
  height?: string;
  className?: string;
  style?: CSSProperties;
};