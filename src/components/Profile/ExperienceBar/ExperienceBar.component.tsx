import "./ExperienceBar.styles.css";
import { Text } from "../..";
import { useProfileStore } from "../../../store/profile/profile.store";

export function ExperienceBar() {
  const { profile } = useProfileStore();
  return (
    <div className="experience-wrapper">
      <div className="experience-bar"></div>
      <Text weight={"bold"} size="sm" color="var(--black)">
        {profile?.experience}/50 xp
      </Text>
    </div>
  );
}
