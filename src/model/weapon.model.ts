import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/methods"

export class Weapon extends Model {
    weapon_id!: number
    weapon_name!: string
    weapon_type!: string
    mt!: number
    hit!: number
    crit!: number
    wt!: number
}

Weapon.init({
    weapon_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    weapon_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Weapon name') },
            notEmpty: { msg: concatRequiredMessage('Weapon name') }
        }
    },
    weapon_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Weapon type') },
            notEmpty: { msg: concatRequiredMessage('Weapon type') }
        }
    },
    mt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Might') },
            notEmpty: { msg: concatRequiredMessage('Might') }
        }
    },
    hit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Hit') },
            notEmpty: { msg: concatRequiredMessage('Hit') }
        }
    },
    crit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Crit') },
            notEmpty: { msg: concatRequiredMessage('Crit') }
        }
    },
    wt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Weight') },
            notEmpty: { msg: concatRequiredMessage('Weight') }
        }
    },
},
    {
        sequelize,
        freezeTableName: true,
        tableName: "weapons",
        underscored: true,
        timestamps: false
    }
);