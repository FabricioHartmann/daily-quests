export const questValidations = {
  title: {
    required: "Campo obrigatório",
    maxLength: { value: 50, message: "Máximo 50 caracteres" },
  },
  description: {
    required: "Campo obrigatório",
    minLength: { value: 10, message: "Mínimo 10 caracteres" },
  },
  points: (maxPoints: number) => ({
    required: "Campo obrigatório",
    min: { value: 1, message: "Tá me zoando?" },
    max: { value: maxPoints, message: `XP limite: ${maxPoints}` },
  }),
  category: {
    required: "Campo obrigatório",
  },
};