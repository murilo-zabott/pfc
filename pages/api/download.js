import nc from "next-connect";
import { download } from '../../utils/multer';

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
  const texto = download(req.body.key)
  res.send(texto)
})


export default handler;