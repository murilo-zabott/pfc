import nc from "next-connect";
import { upload } from "../../utils/multer";
import mongoose from "mongoose"

mongoose.connect(process.env.DB_URI)

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
    if(!!req.body.email){
        const compras = await Purchase.find({clientEmail: req.body.email})
        res.send(compras)
    } else {
        const compras = await Purchase.findOne({_id: req.body.id})
        res.send(compras)
    }    
})

export default handler;