import "./RitualConfig.styles.css";
import { Button, RenderIf, Select, Text } from "../../Generic";
import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { Checkbox } from "../../Generic/Checkbox/Checkbox.component";
import { RITUAL_COOLDOWN_OPTIONS } from "../../../store/rituals/constants";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { generateRitualExp } from "../../../domain/ritual/ritualExp";
import { useProfileStore } from "../../../store/profile/profile.store";
import { useCallback } from "react";

export function RitualConfig() {
  const isMobile = useIsMobile();
  const addExp = useProfileStore((store) => store.addExp);
  const {
    rituals,
    phase,
    cooldownInMinutes,
    xpPerHour,
    setCooldownInMinutes,
    startRitual,
    cancelRitual,
    finishRitual,
    toggleRitualActive,
  } = useRitualsStore();
  const { expGained } = generateRitualExp({
    cooldownInMinutes,
    xpPerHour,
  });

  const finishAndGetReward = useCallback(() => {
    if (phase !== "finished") return;
    finishRitual();
    addExp(expGained);
    startRitual()
  }, [phase, expGained])

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
          <Text size="sm">XP/hora: 30</Text>
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
              onClick={finishAndGetReward}
              fullWidth={isMobile}
              variant="primary"
              size="sm"
            >
              Resgatar XP
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
