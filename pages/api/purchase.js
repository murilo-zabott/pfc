import nc from "next-connect";
import { upload } from "../../utils/multer";
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

const purchaseSchema = new mongoose.Schema({
  clientEmail: {
    type: String,
    lowercase: true,
  },
  files: [String],
})

const Purchase = mongoose.models.purchases || mongoose.model('purchases', purchaseSchema)

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
})

handler.use(upload.array('files'))

handler.post(async (req, res) => {
  let ntEmail = req.body.email
  let reqEmail = ntEmail.toLowerCase()
  let reqPhone = req.body.phone
  let reqFiles = []
  for (let i = 0; i < req.files.length; i++) {
    reqFiles[i] = req.files[i].location
  }
  let bool = await !User.exists({email: reqEmail})

  if(!bool){
    let usuario = new User({
      email: reqEmail,
      phone: reqPhone,
      isAdm: false,
    })

    await usuario.save()
  }

  let compra = new Purchase({
    clientEmail: reqEmail,
    files: reqFiles,
  })

  await compra.save()

  res.send("Compra cadastrada")
})

export default handler;

export const config = {
  api: {
    bodyParser: false
  }
}