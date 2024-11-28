export enum PetStatus {
  ADOPTION = "ADOPTION",
  LOST = "LOST",
  LOOKING_FOR_OWNER = "LOOKING_FOR_OWNER",
  FOUND = "FOUND",
}

export interface Pet {
  id: string;
  status: PetStatus;
  name: string | null;
  ngo_id?: string | null;
  image_url: string;
  size: string;
  race: string | null;
  gender: string;
  age: number;
  color: string | null;
  disability: string;
  vaccinated: string;
  neutered: string;
  address: string;
  about: string | null;
  kind: string;
  created_at: string;
}
