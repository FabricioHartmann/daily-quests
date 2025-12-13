import "./ExperienceBar.styles.css";
import { Text } from "../..";

export function ExperienceBar() {
  return (
    <div className="experience-wrapper">
      <div className="experience-bar"></div>
      <Text weight={'bold'} size="sm" color="var(--black)">0/50</Text>
    </div>
  );
}
