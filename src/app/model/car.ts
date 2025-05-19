
export interface Icar {

    id: number,
    trueCard?: boolean,
    name: string,
    description: string,
    exterior: string,
    interior: string,
    engine: string,
    drivetrain: string,
    transmission: string,
    duelEfficiency: string,
    keyFeatures: string[],

    longDescription:string,
    imgUrl: string,

    premiumOptionsAndPackages: string[],
    bodystyle: string,
    counts: number
}