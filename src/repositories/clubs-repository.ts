import { ClubModel } from "../models/club-model";

const database = [
    {
        id: 1,
        name: "Real Madri"
    }
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database;
}