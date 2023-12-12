import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  { 
    doctor: {
     type:String,
      required: true,
    },
    user: {
      type:String,
      required: true,
    },
    date: {
      type:String,
      required: true}

    
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
