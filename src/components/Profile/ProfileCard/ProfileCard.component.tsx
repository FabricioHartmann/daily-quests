import { ExperienceBar, Text } from "../..";
import "./ProfileCard.styles.css";

export function ProfileCard() {
  return (
    <div className={`profile-card`}>
      <div className="photo-wrapper">
        <img
          height="120px"
          width="120px"
          src="images/profile-test-image.svg"
          alt="profile-photo"
        />
      </div>
      <div className="card-content">
        <div className="header">
          <Text size="lg" color="var(--black)">
            Fabrício Hartmann
          </Text>
          <Text color="var(--black)" italic>
            Iniciante
          </Text>
        </div>

        <div className="level-wrapper">
          <Text color="var(--black)">Lv: 1</Text>
          <ExperienceBar />
        </div>
        <div className="footer">
          <div className="buffs-wrapper">
            <div className="buff-icon" />
            <div className="buff-icon" />
            <div className="buff-icon" />
          </div>
          <div className="achievments-wrapper">
            <Text size="sm" color="var(--black)">Conquistas: 0</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
