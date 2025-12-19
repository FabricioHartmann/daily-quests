import { ProfileCard } from "../../components/Profile";

export function MyProfile() {
  return (
      <div className="profile-page-container">
        <div className="header">
          <ProfileCard canEdit/>
        </div>
      </div>
    );
}
