export interface PopulationData {
  region: string;
  year: number;
  population: number;
}

export interface ApiPopulationResponse {
  Nombre: string;
  Data: { Anyo: number; Valor: number }[];
}
