import { Text } from "../../Generic";
import "./InformationContent.styles.css";

export function InformationContent() {
  return (
     <div className="expedition-information-text">
        <Text size="sm">
          As expedições irão te ajudar a
          focar nas suas batalhas usando a técnica Pomodoro.
        </Text>

        <Text size="sm">
          Ao iniciar, você entra em um período de 25 minutos de foco total,
          seguido por 5 minutos de descanso.
        </Text>
        <Text size="sm">
          Complete expedições para ganhar experiência e aumentar sua
          produtividade no dia a dia.
        </Text>
        <Text italic size="xs">
          As expedições são ilimitadas, mas você só poderá receber X recompensas
          por dia.
        </Text>
      </div>
  );
}
