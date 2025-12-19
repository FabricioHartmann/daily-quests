import { ExperienceBar } from "../";
import { RenderIf, Text } from "../../Generic";
import { useProfileStore } from "../../../store/profile/profile.store";
import { GiFire, GiSparkles } from "react-icons/gi";
import "./ProfileCard.styles.css";
import type { ProfileCardProps } from "./ProfileCard.types";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiPencilAlt } from "react-icons/hi";
import { FaPencilRuler } from "react-icons/fa";

export function ProfileCard({ canEdit = false }: ProfileCardProps) {
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
        <div className="profile-card-header">
          <Text size="lg" color="var(--black)">
            {profile?.name}
          </Text>
          <RenderIf condition={canEdit}>
            <HiPencilAlt size={28} color="black" />
          </RenderIf>
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
            <GiFire size={20} color="var(--black)" />
            <GiSparkles size={20} color="var(--black)" />
          </div>
          <div className="profile-card-title-wrapper">
            <Text italic color="var(--black)">
              {profile?.title}
            </Text>
            <RenderIf condition={canEdit}>
              <RiArrowDownSFill color="var(--black)" />
            </RenderIf>
          </div>
        </div>
      </div>
    </div>
  );
}
