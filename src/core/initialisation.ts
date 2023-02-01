import { CharacterRepository } from "../repository/character.repository";
import { CharacterService } from "../service/character.service";
import { CharacterHandler } from "../handler/character.handler";

export const characterHandler = new CharacterHandler(new CharacterService(new CharacterRepository));

