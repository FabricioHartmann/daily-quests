import { useRef } from "react";
import { convertAndResizeFile } from "../../../utils/convertAndResizeFile";
import "./ProfilePhoto.styles.css";
import { useProfileStore } from "../../../store/profile/profile.store";
import type { ProfilePhotoProps } from "./ProfilePhotoProps.types";

export function ProfilePhoto({ canEdit }: ProfilePhotoProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const profile = useProfileStore((s) => s.profile);
  const setProfile = useProfileStore((s) => s.setProfile);

  const openFilePicker = () => {
    if (!canEdit) return;
    inputRef.current?.click();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const base64 = await convertAndResizeFile(file);

    setProfile({
      ...profile,
      photo: base64,
    });
  };

  return (
    <>
      <img
        src={profile.photo || "/images/avatar-placeholder.png"}
        alt="profile photo"
        onClick={openFilePicker}
        className={`profile-photo ${canEdit ? "edit" : ""}`}
      />

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      />
    </>
  );
}
