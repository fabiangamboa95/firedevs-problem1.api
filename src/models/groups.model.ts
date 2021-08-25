// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/lib/hooks";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const groups = sequelizeClient.define(
    "groups",
    {
      nombre: { type: DataTypes.STRING, allowNull: false },
      guiaId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: "professors" },
      },
      profesores: { type: DataTypes.JSON, allowNull: true },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (groups as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    groups.hasMany(models.students, {
      foreignKey: { name: "groupId", allowNull: true },
    });
  };

  return groups;
}
