import { findAllClubs } from "../repositories/clubs-repository";
import * as HttpResponse from "../utils/http-helper";

export const getClubsService = async () => {
    const data = await findAllClubs();
    
    const response = await HttpResponse.ok(data);
    

    return response;
}