import nc from "next-connect";
import mongoose from 'mongoose'

import { upload } from "../../utils/multer";

mongoose.connect(process.env.DB_URI)

const slideSchema = new mongoose.Schema({
  url: String,
})

const Slide = mongoose.models.slides || mongoose.model('slides', slideSchema)

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

handler.get(async (req, res) => {
  const imagensSlider = await Slide.find()
  res.send(imagensSlider)
})

handler.post((req, res) => {
    let files = req.files
    
    files.forEach(async (file)=>{
      
      let item = new Slide ({
        url: file.location
      })

      await item.save()
    })

    res.send(req.files)
})

handler.delete(async (req, res) => {
  await Slide.deleteOne({ _id: req.body.id })
  res.send("Imagem removida do slider")
})

export default handler;

export const config = {
  api: {
    bodyParser: false
  }
}