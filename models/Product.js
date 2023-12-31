// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // defines columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // defines a product_name column
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    // defines a price column
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate:{
        isDecimal: true,
      },
    },
    // defines a stock column
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate:{
        isNumeric: true,
      },
    },
    // defines a category_id column
    category_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'category',
        key: 'id',
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
