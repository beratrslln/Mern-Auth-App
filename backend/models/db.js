//db.js
const mongoose = require("mongoose");

// Linki .env içindeki MONGODB_URI'den çekiyoruz
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("db bağlantısı kuruldu");
})
.catch((err) => {
    console.log(`db connect hata :${err}`);
});


