import { Text } from "../../Generic";
import "./RitualTipsContent.styles.css";

export function RitualTipsContent() {
  return (
    <div className="ritual-tips-text">
      <Text size="sm">
        Rituais são pequenas ações diárias que te ajudam nas suas batalhas.
      </Text>
      <Text size="sm">
        São apenas lembretes. Você não precisa por exemplo beber água apenas no
        momento que o ritual indica.
      </Text>
      <Text size="sm">
        Você pode personalizar o cooldown do ritual para que se adeque à sua
        realidade ou para concluir todos juntos num só momento.
      </Text>
      <Text italic size="xs">
        Dica: Você pode integrar RITUAIS e EXPEDIÇÕES, basta lembrar de
        realizá-los na etapa de Descanso.
      </Text>
    </div>
  );
}
