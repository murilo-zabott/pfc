import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import fs from 'fs'
import path from 'path'

aws.config.update({
  secretAccessKey: process.env.SAK,
  accessKeyId: process.env.AK,
  region: process.env.REG,
})

const s3 = new aws.S3()

export var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BKT,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})

export const download = async (filename) => {
  const params = {
    Bucket: process.env.BKT,
    Key: filename,
  }

  // const folder = path.join(__dirname, '..', '..', '..', '..', 'public', filename)
  
  // const objeto = await s3.getObject(params, (err, data) => {
  //   if (err) console.error(err);
  //   fs.writeFileSync(folder, data.Body);
  // });

  const texto = ""+__dirname
  return texto
}