export enum PetStatus {
  ADOPTION = "ADOPTION",
  LOST = "LOST",
  LOOKING_FOR_OWNER = "LOOKING_FOR_OWNER",
  FOUND = "FOUND",
}

// TODO: ajustar tipagem
export interface Pet {
  id: string;
  status: PetStatus;
  name: string;
  image_url: string;
  size: string;
  race: string;
  gender: string;
  age: number;
  color: string;
  deficiencia: string;
  vacinado: string;
  castrado: string;
  address: string;
  about: string;
  kind: string;
  created_at: string;
}
