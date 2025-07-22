import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germani",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
    }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayer = async (
    id: number
): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
}