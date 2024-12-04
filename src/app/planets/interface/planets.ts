export interface Planet {
  id: number;
  name: string;
  description: string;
  image: string; 
}

export interface PlanetResponse {
items: Planet[];
}
