import { getBackgroundImage } from "../../../utils/expeditionImage";
import type { ExpeditionResumeImageProps } from "./ExpeditionResumeImage.types";
import './ExpeditionResumeImage.styles.css'
export function ExpeditionResumeImage({
  biome,
  dayTime,
  phase,
}: ExpeditionResumeImageProps) {
  const src = getBackgroundImage(biome, phase, dayTime, 'small');

  return (
    <div className="expedition-resume-bg">
      <img
        src={src}
        alt="resumo da expedição"
        className="expedition-resume-img"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
}
