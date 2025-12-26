import { QuestList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import "./Home.styles.css";

export function Home() {

  return (
    <div className="home-page-container">
      <div className="header">
        <ProfileCard/>
      </div>
      <QuestList />
    </div>
  );
}
