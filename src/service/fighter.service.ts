import { FighterIRepository, IRepository } from "../core/respository.interface";
import { FighterIService } from "../core/service.interface";
import { Character } from "../model/character.model";

export class FighterService implements FighterIService {

    private characterRepository: IRepository<Character>;

    constructor(_characterRepository: IRepository<Character>) {
        this.characterRepository = _characterRepository;
    }

    private finalSpeed = (speed: number, strength: number, weight: number) => {
        let strengthImpact = Math.floor(strength / 5)
        if (strengthImpact > weight) strengthImpact = weight
        let finalSpeed = speed - (weight - strengthImpact)
        if (finalSpeed < 0) finalSpeed = 0
        return finalSpeed
    }

    private calcHit = (weap_hit: number, dex: number, luck: number) => {
        let finalHit = Math.floor(weap_hit + dex * 2 + luck / 2)
        return finalHit
    }

    private calcCrit = (weap_crit: number, dex: number) => {
        let finalCrit = Math.floor(weap_crit + dex / 2)
        return finalCrit
    }

    private calcAvo = (speed: number, luck: number) => {
        let finalAvo = Math.floor(speed * 2 + luck / 2)
        return finalAvo
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
            hit: this.calcHit(weapon.hit, character.base_dex + classs.bonus_dex, character.base_lck + classs.bonus_lck),
            crit: this.calcCrit(weapon.crit, character.base_dex + classs.bonus_dex),
            avo: this.calcAvo(character.base_spd + classs.bonus_spd, character.base_lck + classs.bonus_lck)
        }
        return fighter
    }

}