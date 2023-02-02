import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/methods"

export class CharacterClass extends Model {
    class_id!: number
    class_name!: string
    available_weap!: string[]
    bonus_hp!: number
    bonus_str!: number
    bonus_mag!: number
    bonus_dex!: number
    bonus_spd!: number
    bonus_def!: number
    bonus_res!: number
    bonus_lck!: number
}

CharacterClass.init({
    class_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    class_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Class name') },
            notEmpty: { msg: concatRequiredMessage('Class name') }
        }
    },
    available_weap: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Available weapons') },
            notEmpty: { msg: concatRequiredMessage('Available weapons') }
        }
    },
    bonus_hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Bonus HP') },
            notEmpty: { msg: concatRequiredMessage('Bonus HP') }
        }
    },
    bonus_str: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Bonus STR') },
            notEmpty: { msg: concatRequiredMessage('Bonus STR') }
        }
    },
    bonus_mag: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Bonus MAG') },
            notEmpty: { msg: concatRequiredMessage('Bonus MAG') }
        }
    },
    bonus_dex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Bonus DEX') },
            notEmpty: { msg: concatRequiredMessage('Bonus DEX') }
        }
    },
    bonus_spd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Bonus SPD') },
            notEmpty: { msg: concatRequiredMessage('Bonus SPD') }
        }
    },
    bonus_def: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Bonus DEF') },
            notEmpty: { msg: concatRequiredMessage('Bonus DEF') }
        }
    },
    bonus_res: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Bonus RES') },
            notEmpty: { msg: concatRequiredMessage('Bonus RES') }
        }
    },
    bonus_lck: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Bonus LCK') },
            notEmpty: { msg: concatRequiredMessage('Bonus LCK') }
        }
    },
},
    {
        sequelize,
        freezeTableName: true,
        tableName: "classes",
        underscored: true,
        timestamps: false
    }
);