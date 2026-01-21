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
        momento do ritual.
      </Text>
      <Text size="sm">
        Você NÃO precisa ativar todos os rituais. Para ganhar a xp basta apenas
        ativar um.
      </Text>
      <Text size="sm">
        Personalize o cooldown dos rituais para que se adeque à sua realidade.
      </Text>
    </div>
  );
}
