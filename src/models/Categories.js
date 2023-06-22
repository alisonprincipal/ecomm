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
        message: "The name cannot start with numbers",
      },
    },

    status: {
      type: String,
      required: true,
    },
  },

);

export const categories = mongoose.model("categories", CategorieSchema);
