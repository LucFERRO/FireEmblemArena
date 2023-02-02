import { CharacterRepository } from "../repository/character.repository";
import { CharacterService } from "../service/character.service";
import { CharacterHandler } from "../handler/character.handler";
import { ClassHandler } from "../handler/class.handler";
import { ClassService } from "../service/class.service";
import { ClassRepository } from "../repository/class.repository";
import { FighterHandler } from "../handler/fighter.handler";
import { FighterService } from "../service/fighter.service";

export const characterHandler = new CharacterHandler(new CharacterService(new CharacterRepository));

export const classHandler = new ClassHandler(new ClassService(new ClassRepository));

export const fighterHandler = new FighterHandler(new FighterService(new CharacterRepository))
