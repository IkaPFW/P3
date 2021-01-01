const express = require("express");
const cors = require("cors");
const app = express();

require("./configuration/connect");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Please use /api/user or /api/catalogue or /api/table");
});

app.use("/api/user", require('./router/userRoute'));
app.use("/api/table", require('./router/table'));
app.use("/api/catalogue", require('./router/alternatif'));
app.use("/api/criteria", require('./router/kriteria'));
app.use("/api/subcritcategory", require('./router/subcritCategory'));
app.use("/api/subcritbrand", require('./router/subcritBrand'));
app.use("/api/subcritprice", require('./router/subcritPrice'));
app.use("/api/subcritguarantee", require('./router/subcritGaransi'));
app.use("/api/topsis", require('./router/topsisRoute'));
app.use("/api/saw", require('./router/sawRoute'));

app.listen(8086, () => {
    console.log("http://localhost:8086");
});
