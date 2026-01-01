import { Text } from "../../Generic";
import "./InformationContent.styles.css";

export function InformationContent() {
  return (
     <div className="expedition-information-text">
        <Text size="sm">
          As expedições são inspiradas na técnica de Pomodoro, para te ajudar a
          focar nas suas tarefas, trabalho, estudo, etc.
        </Text>

        <Text size="sm">
          Ao iniciar, você entra em um período de 25 minutos de foco total,
          seguido por 5 minutos de descanso para recuperar suas forças.
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
