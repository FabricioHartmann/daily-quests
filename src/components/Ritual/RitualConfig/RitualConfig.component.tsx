import "./RitualConfig.styles.css";
import { Button, RenderIf, Select, Text } from "../../GenericComponents";
import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { Checkbox } from "../../GenericComponents";
import { RITUAL_COOLDOWN_OPTIONS } from "../../../store/rituals/constants";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { generateRitualExp } from "../../../domain/ritual/ritualExp";
import { useProfileStore } from "../../../store/profile/profile.store";
import { useCallback } from "react";
import { toast } from "sonner";
import { useShallow } from "zustand/shallow";

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
  } = useRitualsStore(
    useShallow((s) => ({
      rituals: s.rituals,
      phase: s.phase,
      cooldownInMinutes: s.cooldownInMinutes,
      xpPerHour: s.xpPerHour,
      setCooldownInMinutes: s.setCooldownInMinutes,
      startRitual: s.startRitual,
      cancelRitual: s.cancelRitual,
      finishRitual: s.finishRitual,
      toggleRitualActive: s.toggleRitualActive,
    })),
  );
  const { expGained } = generateRitualExp({
    cooldownInMinutes,
    xpPerHour,
  });

  const finishAndGetReward = useCallback(() => {
    if (phase !== "finished") return;
    finishRitual();
    addExp(expGained);
    toast("Ritual concluído", {
      description: `Você adquiriu ${expGained} XP`,
      position: "bottom-right",
    });
  }, [phase, expGained]);

  const hasAnyRitualActive = rituals.some((item) => item.isActive);

  return (
    <div className="ritual-config">
      <div className="ritual-config-content">
        <div>
          <div className="active-rituals">
            <div className="ritual-checkboxes">
              {rituals.map((ritual) => (
                <Checkbox
                  disabled={phase !== "idle"}
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
                disabled={phase !== "idle"}
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
              disabled={!hasAnyRitualActive}
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
