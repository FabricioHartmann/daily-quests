import { QuestList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import { ExpeditionResume } from "../../components/Expedition";
import { useRitualsStore } from "../../store/rituals/rituals.store";
import { RenderIf } from "../../components/GenericComponents";
import { RitualResume } from "../../components/Ritual";
import { Text } from "../../components/GenericComponents";
import "./Home.styles.css";

export function Home() {
  const rituals = useRitualsStore((s) => s.rituals);
  const phase = useRitualsStore((s) => s.phase);
  const filteredRituals = rituals.filter((ritual) => ritual.isActive);

  return (
    <div className="home-page-container">
      <div className="home-header">
        <Text size="lg">My Daily Quests</Text>
        <ProfileCard />
        <div className="expedition-and-ritual-wrapper">
          <ExpeditionResume />
          <RenderIf condition={!!filteredRituals.length && phase !== "idle"}>
            <RitualResume />
          </RenderIf>
        </div>
      </div>

      <QuestList />
    </div>
  );
}
