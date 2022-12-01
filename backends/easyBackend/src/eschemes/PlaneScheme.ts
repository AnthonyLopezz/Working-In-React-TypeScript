import { Schema, model } from "mongoose";
import PlaneEntity from "../entities/PlaneEntity";

//Allow to manage the mongo db connection
const PlaneScheme = new Schema<PlaneEntity>(
  {
    planeType: { type: Number, enum: [1, 2, 3, 4], default: 1 },
    planeCompany: { type: String, required: true, trim: true },
    planeAvailability: { type: Number, enum: [1, 2 ], default: 1 },

  },
  { versionKey: false }
);

export default model("Example", PlaneScheme, "Example");
