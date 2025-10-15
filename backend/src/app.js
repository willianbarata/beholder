import express from 'express'

const app = express();

app.use("/", (req, res, next) => {
    res.send("Olá mundo !!!")
})

export default app;