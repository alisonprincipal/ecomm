import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(

  {
    id: {
      type: String,
    },
    nome: {
      type: String,
      required: true,
      min: 3,
      validate: {
        validator(value) {
          return /^[^0-9].*$/.test(value);
        },
        message: "The name cannot start with numbers",
      },
    },
    descricao: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      validate: {
        validator(value) {
          return /^[a-zA-Z0-9-]+$/.test(value);
        },
        message: "O slug deve conter apenas letras, números e hífens.",
      },
    },
    preco: {
      type: Number,
      min: 1,
      required: true,
    },
    estoque: {
      type: Number,
      min: 1,
      max: 10000,
      required: true,
    },
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
  },

);

export const products = mongoose.model("Products", ProductSchema);
