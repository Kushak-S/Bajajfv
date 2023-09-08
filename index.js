const express = require('express');
const app = express();
const appRoutes = require("./routers/app.routes");
app.use(express.json());
const port = 3000;

app.get('/',async (req,res)=>{res.status(200).send('<html><body><h1>Server Running ...</h1><h2>Github link: https://github.com/Kushak-S/Bajajfv</h2><h2>API Link: https://determined-foal-sari.cyclic.app/bghl</h2></body></html>')})
app.use(appRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port : ${port}`)
})
