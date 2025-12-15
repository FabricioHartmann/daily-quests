import { ExperienceBar } from "../";
import { Text } from "../../Generic";
import { useProfileStore } from "../../../store/profile/profile.store";
import "./ProfileCard.styles.css";

export function ProfileCard() {
  const { profile, leveledUp } = useProfileStore();

  return (
    <div className={`profile-card`}>
      <div className="photo-wrapper">
        <img
          height="120px"
          width="120px"
          src={profile?.photo ?? ""}
          alt="profile-photo"
        />
      </div>
      <div className="card-content">
        <div className="header">
          <Text size="lg" color="var(--black)">
            {profile?.name}
          </Text>
          <Text size="sm" color="var(--black)" italic>
            {profile?.title}
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
        <div className="footer">
          <div className="buffs-wrapper">
            <div className="buff-icon" />
            <div className="buff-icon" />
            <div className="buff-icon" />
          </div>
          <div className="achievments-wrapper">
            <Text size="sm" color="var(--black)">
              Conquistas: {profile?.achievments?.length}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
