import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema(

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
        message: "O nome não pode iniciar com números",
      },
    },

    status: {
      type: String,
    },
  },

);

export const categories = mongoose.model("categories1", CategorieSchema);
