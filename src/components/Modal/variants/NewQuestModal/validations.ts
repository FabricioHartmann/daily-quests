export const questValidations = {
  title: {
    required: "Campo obrigatório",
    maxLength: { value: 25, message: "Máximo 25 caracteres" },
  },
  description: {
    required: "Campo obrigatório",
    maxLength: { value: 50, message: "Máximo 50 caracteres" },
  },
  points: (maxPoints: number) => ({
    required: "Campo obrigatório",
    valueAsNumber: true,
    min: { value: 1, message: "Tá me zoando?" },
    max: { value: maxPoints, message: `XP limite: ${maxPoints}` },
  }),
  category: {
    required: "Campo obrigatório",
  },
};
