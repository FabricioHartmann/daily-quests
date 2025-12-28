import { Text } from "../../Generic";
import { CircularProgress } from "../CircularProgress/CircularProgress.component";
import "./CentralHud.styles.css";

export function CentralHud() {
  return (
    <div className="expedition-hud-card">
      <div>
        <Text>Fase: Jornada</Text>
      </div>

      <div className="expedition-circular">
        <CircularProgress value={6} />
        <div className="expedition-circular-label">
          <Text>25:00</Text>
        </div>
      </div>
      <div  className="central-hud-footer">
        <Text size="sm">Expedições concluídas hoje: 0</Text>
      </div>
    </div>
  );
}
