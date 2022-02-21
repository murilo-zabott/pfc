import nc from "next-connect";
import mongoose from 'mongoose'

import { upload } from "../../utils/multer";

mongoose.connect(process.env.DB_URI)

const pictureSchema = new mongoose.Schema({
  url: String,
})

const Picture = mongoose.models.pictures || mongoose.model('pictures', pictureSchema)

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
})

handler.use(upload.array('files'))

handler.get(async (req, res) => {
  const imagensGaleria = await Picture.find()
  res.send(imagensGaleria)
})

handler.post((req, res) => {
  let files = req.files

  files.forEach(async (file) => {

    let item = new Picture({
      url: file.location
    })

    await item.save()
  })

  res.send(req.files)
  return
})

handler.delete(async (req, res) => {
  await Picture.deleteOne({ _id: req.body.id })
  res.send("Imagem deletada da galeria")
})

export default handler;

export const config = {
  api: {
    bodyParser: false,
  }
}