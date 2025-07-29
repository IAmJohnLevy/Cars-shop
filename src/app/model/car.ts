export interface ICar {
  id: number;
  trueCard?: boolean;
  name: string;
  automaker: string;
  description: string;
  exteriorColor: string;
  interior: string;
  engine: string;
  drivetrain: string;
  transmission: string;
  fuelEfficiency: string;
  features: string[];

  longDescription: string;
  imgUrl: string;

  premiumOptionsAndPackages: string[];
  bodystyle: string;
  price: number;
  counts: number;
  year: number;
}
