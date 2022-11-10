import { DataTypes } from "sequelize";

export const deliveryModel = {
  clientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  deliveryDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  destination: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
};

