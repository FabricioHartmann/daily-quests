import { ExperienceBar } from "../";
import { Text } from "../../Generic";
import { useProfileStore } from "../../../store/profile/profile.store";
import { GiFire, GiSparkles } from "react-icons/gi";
import "./ProfileCard.styles.css";

export function ProfileCard() {
  const { profile, leveledUp } = useProfileStore();

  return (
    <div className={`profile-card`}>
      <div className="photo-wrapper">
        <img
          height="84px"
          width="84px"
          src={profile?.photo ?? ""}
          alt="profile-photo"
        />
      </div>
      <div className="card-content">
        <div>
          <Text size="lg" color="var(--black)">
            {profile?.name}
          </Text>
        </div>

        <div className="level-wrapper">
          <Text color="var(--black)" renderAs="span">
            Lv: {profile?.level}
          </Text>

          <ExperienceBar
            experience={profile?.experience}
            level={profile?.level}
            leveledUp={leveledUp}
          />
        </div>
        <div className="profile-footer">
          <div className="buffs-wrapper">
            <GiFire size={20} color="var(--black)"/>
            <GiSparkles size={20} color="var(--black)"/>
          </div>
          <div className="achievments-wrapper">
            <Text italic color="var(--black)">
              {profile?.title}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
