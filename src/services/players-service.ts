import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data =  await PlayerRepository.findAllPlayers();
    let response = null;

    if(data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data =  await PlayerRepository.findPlayerById(id);
    let response = null;

    if(data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    let response;

    if(Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);

        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
}

export const deletePlayerService = async (id: number) => {
    let response;
    
    const isdeleted = await PlayerRepository.deleteOnePlayer(id);

    if (isdeleted) {
        response = await HttpResponse.ok({ message: "deleted" })
    } else {
        response = await HttpResponse.badRequest()
    }
    
    return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    let response = null;

    if (Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest();
    } else {
        response = await HttpResponse.ok(data);
    }

    return response;
}