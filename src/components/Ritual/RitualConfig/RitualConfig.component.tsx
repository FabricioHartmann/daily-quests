import "./RitualConfig.styles.css";
import { Button, RenderIf, Select, Text } from "../../Generic";
import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { Checkbox } from "../../Generic/Checkbox/Checkbox.component";
import { RITUAL_COOLDOWN_OPTIONS } from "../../../store/rituals/constants";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";

export function RitualConfig() {
  const isMobile = useIsMobile();

  const {
    rituals,
    phase,
    cooldownInMinutes,
    setCooldownInMinutes,
    startRitual,
    cancelRitual,
    finishRitual,
  } = useRitualsStore();

  const toggleRitualActive = useRitualsStore((s) => s.toggleRitualActive);

  return (
    <div className="ritual-config">
      <div className="ritual-config-content">
        <div>
          <div className="active-rituals">
            <div className="ritual-checkboxes">
              {rituals.map((ritual) => (
                <Checkbox
                  disabled
                  key={ritual.id}
                  checked={ritual.isActive}
                  label={ritual.name}
                  onChange={() => toggleRitualActive(ritual.id)}
                />
              ))}
            </div>
            <div className="ritual-cd-select">
              <Select
                label="Cooldown"
                options={RITUAL_COOLDOWN_OPTIONS}
                value={String(cooldownInMinutes)}
                disabled={phase === "started"}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setCooldownInMinutes(value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="ritual-config-action">
          <Text size="sm">XP/hora: 20</Text>
          <RenderIf condition={phase === "idle"}>
            <Button
              onClick={startRitual}
              fullWidth={isMobile}
              variant="primary"
              size="sm"
            >
              Iniciar ritual
            </Button>
          </RenderIf>
          <RenderIf condition={phase === "finished"}>
            <Button
              onClick={finishRitual}
              fullWidth={isMobile}
              variant="primary"
              size="sm"
            >
              Finalizar e reiniciar
            </Button>
          </RenderIf>
          <RenderIf condition={phase === "started"}>
            <Button
              onClick={cancelRitual}
              fullWidth={isMobile}
              variant="danger"
              size="sm"
            >
              Cancelar ritual
            </Button>
          </RenderIf>
        </div>
      </div>
    </div>
  );
}
