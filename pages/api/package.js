import nc from "next-connect";
import mongoose from 'mongoose'

import { upload } from "../../utils/multer";

mongoose.connect(process.env.DB_URI)

const packageSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: String
})

const Package = mongoose.models.packages || mongoose.model('packages', packageSchema)

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
})

handler.use(upload.single('file'))

handler.get(async (req, res) => {
  const pacotes = await Package.find()
  res.send(pacotes)
})

handler.post(async (req, res) => {
  let { title, price } = req.body
  let item = new Package({
    image: req.file.location,
    title: title,
    price: price,
  })

  await item.save()

  res.send(item)
})

handler.delete(async (req, res) => {
  await Package.deleteOne({ _id: req.body.id })
  res.send("Pacote deletado da exposição")
})

export default handler;

export const config = {
  api: {
    bodyParser: false
  }
}