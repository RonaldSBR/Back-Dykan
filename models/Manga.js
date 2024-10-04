import mongoose from "../config/mongoose.config.js";

const mangasSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },

    favorite: {
        type: mongoose.Types.ObjectId,
        ref: "Favorite",
      },
  
    type: [
      {
        type: mongoose.Types.ObjectId,
         required: true, 
        ref: "Type",
      },
    ],

    genre: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Genre",
      },
    ],

    review: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
  
  
    state: [
      {
        type: mongoose.Types.ObjectId,
         required: true, 
        ref: "State",
      },
    ],
   
    synopsis: [
      {
        type: String,
        required: true,
        unique: true,
      },
    ],
  
    cover:[
      {
        type: String,
        required: true,
      },
    ],
  
    date: {
      type: String,
      required: true,
    },
  
    chapters: [
      {
        type: String,
        required: true,
      },
    ],

    staff: [
        {
          type: mongoose.Types.ObjectId,
           required: true, 
          ref: "Staff",
        },
      ],
  });
  
  
  
  const Mangas = mongoose.model("Mangas", mangasSchema);
  
  export default Mangas;
  