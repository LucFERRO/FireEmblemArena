import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/methods"

export class Character extends Model {
    character_id!: number
    name!: string
    level!: number
    class_id!: number
    weapon_id!: number
    base_hp!: number
    base_str!: number
    base_mag!: number
    base_dex!: number
    base_spd!: number
    base_def!: number
    base_res!: number
    base_lck!: number
    sprite!: string
}

Character.init({
    character_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Name') },
            notEmpty: { msg: concatRequiredMessage('Name') }
        }
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Level') },
            notEmpty: { msg: concatRequiredMessage('Level') }
        }
    },
    class_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Class') },
            notEmpty: { msg: concatRequiredMessage('Class') }
        }
    },
    weapon_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Weapon') },
            notEmpty: { msg: concatRequiredMessage('Weapon') }
        }
    },
    base_hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Base HP') },
            notEmpty: { msg: concatRequiredMessage('Base HP') }
        }
    },
    base_str: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Base STR') },
            notEmpty: { msg: concatRequiredMessage('Base STR') }
        }
    },
    base_mag: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Base MAG') },
            notEmpty: { msg: concatRequiredMessage('Base MAG') }
        }
    },
    base_dex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Base DEX') },
            notEmpty: { msg: concatRequiredMessage('Base DEX') }
        }
    },
    base_spd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Base SPD') },
            notEmpty: { msg: concatRequiredMessage('Base SPD') }
        }
    },
    base_def: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Base DEF') },
            notEmpty: { msg: concatRequiredMessage('Base DEF') }
        }
    },
    base_res: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Base RES') },
            notEmpty: { msg: concatRequiredMessage('Base RES') }
        }
    },
    base_lck: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Base LCK') },
            notEmpty: { msg: concatRequiredMessage('Base LCK') }
        }
    },
    sprite: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Sprite') },
            notEmpty: { msg: concatRequiredMessage('Sprite') }
        }
    },
},
    {
        sequelize,
        freezeTableName: true,
        tableName: "characters",
        underscored: true,
        timestamps: false
    }
);