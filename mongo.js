import mongoose from 'mongoose';
mongoose.connect("mongodb://127.0.0.1:27017/urlshortener-discord");

const urlSchema  = new mongoose.Schema({
  shortId:{
    type:String,
    unique:true,
    required:true
  },
  redirectURL:{
    type:String,
    required:true
  },
  visitHistory:[{ timestamp: {type:Number }}],
},
{
  timestamps:true
}
);

// mongo.js


export default mongoose.model("URL", urlSchema);