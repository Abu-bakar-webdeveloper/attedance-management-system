import express from "express";
import cors from "cors";


const app = express();

app.use(cors())

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Server is ready")
})

app.get("/api/test", (req, res) => {
    const data = [
        {
            data: 1,
            desc: "this is data1"
        },
        {
            data: 2,
            desc: "this is data2"
        }
    ]
    res.send(data)
})


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})