import express from "express"
import cors from "cors"
import ImageKit from "imagekit";
const port = process.env.PORT || 3000;

const app = express();

app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
  );

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGEKIT_ENDPOINT, // https://ik.imagekit.io/your_imagekit_id
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
  });

  app.get('/some-route', (req, res) => {
    res.send('Hello from /some-route');
  });

app.listen(port, () =>{
    console.log("server running on 3000")
})