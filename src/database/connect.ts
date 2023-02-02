import { sequelize } from "./sequelize"

import { characters } from "./mocks/mock-character"
import { classes } from "./mocks/mock-class"
import { weapons } from "./mocks/mock-weapon"

import { Character } from "../model/character.model"
import { CharacterClass } from "../model/class.model"
import { Weapon } from "../model/weapon.model"

sequelize.authenticate()
    .then(() => console.log('Successfully connected to database.'))
    .catch((error: Error) => console.error(`Could not connect to database: ${error}`)
    )

Character.hasOne(CharacterClass, { as: 'class', onDelete: 'cascade', foreignKey: 'class_id' })
CharacterClass.belongsTo(Character, { onDelete: 'cascade', foreignKey: 'class_id' })

Character.hasOne(Weapon, { as: 'weapon', onDelete: 'cascade', foreignKey: 'weapon_id' })
Weapon.belongsTo(Character, { onDelete: 'cascade', foreignKey: 'weapon_id' })

export const initDb = async () => {

    return sequelize.sync({ force: true }).then(() => {

        characters.map(character => {
            Character.create({
                character_id: character.character_id,
                name: character.name,
                level: character.level,
                class_id: character.class_id,
                weapon_id: character.weapon_id,
                base_hp: character.base_hp,
                base_str: character.base_str,
                base_mag: character.base_mag,
                base_dex: character.base_dex,
                base_spd: character.base_spd,
                base_def: character.base_def,
                base_res: character.base_res,
                base_lck: character.base_lck,
                sprite: character.sprite,
            }).then((response: { toJSON: () => string }) => {
                console.log('Character', response.toJSON())
            })
        })

        weapons.map(weapon => {
            Weapon.create({
                weapon_id: weapon.weapon_id,
                weapon_name: weapon.weapon_name,
                weapon_type: weapon.weapon_type,
                mt: weapon.mt,
                hit: weapon.hit,
                crit: weapon.crit,
                wt: weapon.wt
            }).then((response: { toJSON: () => string }) => {
                console.log('Weapon', response.toJSON())
            })
        })

        classes.map(classs => {
            CharacterClass.create({
                class_id: classs.class_id,
                class_name: classs.class_name,
                available_weap: classs.available_weap,
                bonus_hp: classs.bonus_hp,
                bonus_str: classs.bonus_str,
                bonus_mag: classs.bonus_mag,
                bonus_dex: classs.bonus_dex,
                bonus_spd: classs.bonus_spd,
                bonus_def: classs.bonus_def,
                bonus_res: classs.bonus_res,
                bonus_lck: classs.bonus_lck,
            }).then((response: { toJSON: () => string }) => {
                console.log('Class', response.toJSON())
            })
        })

    })
}