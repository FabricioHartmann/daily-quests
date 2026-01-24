import { ExperienceBar } from "../";
import { RenderIf, Text } from "../../GenericComponents";
import { useProfileStore } from "../../../store/profile/profile.store";
import "./ProfileCard.styles.css";
import type { ProfileCardProps } from "./ProfileCard.types";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiPencilAlt } from "react-icons/hi";
import { Menu } from "../../GenericComponents/Menu";
import { TITLES_CATALOG } from "../../../data/titlesCatalog";
import { Buffs } from "../Buffs";
import { useModalStore } from "../../../store/modal/modal.store";
import { ProfileEditModal } from "../../Modal/variants/ProfileEditModal";
import { ProfilePhoto } from "../ProfilePhoto";

export function ProfileCard({ canEdit = false }: ProfileCardProps) {
  const profile = useProfileStore((state) => state.profile);
  const leveledUp = useProfileStore((state) => state.leveledUp);
  const titleOptions = useProfileStore((state) => state.titleOptions);
  const setTitle = useProfileStore((state) => state.setTitle);
  const { openModal } = useModalStore();
  const selectedTitleObj = TITLES_CATALOG[profile.selectedTitle];

  const menuItems = titleOptions
    .slice()
    .sort((a, b) => Number(a.disabled) - Number(b.disabled))
    .map((option) => ({
      label: option.label,
      disabled: option.disabled,
      onClick: () => setTitle(option.value),
    }));

  const openProfileEditModal = () => {
    if (!canEdit) return;
    openModal(<ProfileEditModal />);
  };

  return (
    <div className="profile-card">
      <div className="photo-wrapper">
        <ProfilePhoto canEdit={canEdit} />
      </div>
      <div className="card-content">
        <div className="profile-card-header">
          <div
            onClick={openProfileEditModal}
            className={`profile-card-name ${canEdit ? "edit" : ""}`}
          >
            <Text color="black">{profile?.name}</Text>
            <RenderIf condition={canEdit}>
              <HiPencilAlt />
            </RenderIf>
          </div>

          <Text size="md" color="var(--black)">
            Lv {profile?.level}
          </Text>
        </div>

        <div className="level-wrapper">
          <ExperienceBar
            experience={profile?.experience}
            level={profile?.level}
            leveledUp={leveledUp}
          />
        </div>
        <div className="profile-footer">
          <Buffs />
          <div className="profile-card-title-wrapper">
            <Text size="sm" italic color="var(--black)">
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
