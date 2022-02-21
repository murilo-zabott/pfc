import nc from "next-connect";
import mongoose from "mongoose"

mongoose.connect(process.env.DB_URI)

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
  },
  phone: Number,
  isAdm: Boolean,
})

const User = mongoose.models.users || mongoose.model('users', userSchema)

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
})

handler.post(async (req, res) => {
  const profile = await User.findOne({email: req.body.email, phone: req.body.phone})

  if(profile){
    res.send(profile)
  } else {
    res.send(false)
  }
})

export default handler;