import { ExperienceBar } from "../";
import { RenderIf, Text } from "../../Generic";
import { useProfileStore } from "../../../store/profile/profile.store";
import "./ProfileCard.styles.css";
import type { ProfileCardProps } from "./ProfileCard.types";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiPencilAlt } from "react-icons/hi";
import { Menu } from "../../Generic/Menu";
import { TITLES_CATALOG } from "../../../store/profile/titlesCatalog";
import { Buffs } from "../Buffs/Buffs.component";

export function ProfileCard({ canEdit = false }: ProfileCardProps) {
  const { profile, leveledUp, titleOptions, setTitle } = useProfileStore();
  const selectedTitleObj = TITLES_CATALOG[profile.selectedTitle];

  const menuItems = titleOptions.map((option) => ({
    label: option.label,
    disabled: option.disabled,
    onClick: () => setTitle(option.value),
  }));

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
            <HiPencilAlt size={22} color="black" />
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
          <Buffs
            allBuffs={[
              {
                effect: "20% de algo",
                icon: "GiBroadsword",
                id: "initial-iron-sword",
                label: "Espada",
              },
              {
                effect: "10% de algo",
                icon: "GiNinjaArmor",
                id: "initial-light-armor",
                label: "Veste",
              },
            ]}
          />
          <div className="profile-card-title-wrapper">
            <Text italic color="var(--black)">
              {selectedTitleObj.label}
            </Text>
            <Menu
              trigger={<RiArrowDownSFill color="var(--black)" />}
              items={menuItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
