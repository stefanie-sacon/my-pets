import { PetStatus } from "../models/Pet";

export const getPetStatusText = (status: PetStatus) => {
  const texts = {
    [PetStatus.ADOPTION]: "Adoção",
    [PetStatus.FOUND]: "Encontrado",
    [PetStatus.LOOKING_FOR_OWNER]: "Procura-se tutor",
    [PetStatus.LOST]: "Perdido",
  };
  return texts[status];
};
