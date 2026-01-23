export type TypewriterTextProps = {
  text: string;
  active: boolean;
  size?: 'xs' | 'sm' | 'md'
  onComplete?: () => void;
  classNameAndIndex?: string
};
