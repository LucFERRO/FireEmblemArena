import { FighterIRepository, IRepository } from "../core/respository.interface";
import { FighterIService } from "../core/service.interface";
import { Character } from "../model/character.model";

export class FighterService implements FighterIService {

    private characterRepository: IRepository<Character>;

    private finalSpeed = (speed: number, strength: number, weight: number) => {
        let strengthImpact = Math.floor(strength / 5)
        if (strengthImpact > weight) strengthImpact = weight
        let finalSpeed = speed - (weight - strengthImpact)
        if (finalSpeed < 0) finalSpeed = 0
        return finalSpeed
    }

    constructor(_characterRepository: IRepository<Character>) {
        this.characterRepository = _characterRepository;
    }

    async getFighter(id: number): Promise<any> {
        let character: any
        let classs: any
        let weapon: any
        await this.characterRepository.findById(id).then(char => {
            character = char?.get({ plain: true })
            classs = char?.get({ plain: true }).class
            weapon = char?.get({ plain: true }).weapon
        })

        const fighter = {
            name: character.name,
            class: classs.class_name,
            weapon: weapon.weapon_name,
            sprite: character.sprite,
            level: character.level,
            atk: character.base_str + classs.bonus_str + weapon.mt,
            hp: character.base_hp + classs.bonus_hp,
            str: character.base_str + classs.bonus_str,
            mag: character.base_mag + classs.bonus_mag,
            dex: character.base_dex + classs.bonus_dex,
            spd: this.finalSpeed(character.base_spd + classs.bonus_spd, character.base_str + classs.bonus_str, weapon.wt),
            def: character.base_def + classs.bonus_def,
            res: character.base_res + classs.bonus_res,
            lck: character.base_lck + classs.bonus_lck,
            hit: Math.floor(weapon.hit + (character.base_dex + classs.bonus_dex) * 2 + (character.base_lck + classs.bonus_lck) / 2),
            crit: Math.floor(weapon.crit + (character.base_dex + classs.bonus_dex) / 2),
            avo: Math.floor((character.base_spd + classs.bonus_spd) * 2 + (character.base_lck + classs.bonus_lck) / 2)
        }
        return fighter
    }

}