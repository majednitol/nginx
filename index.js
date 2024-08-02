const express = require("express")
const app = express()

app.get("/", () => {
    console.log("Hello, World!")
})
const PORT = process.env.PORT || 8080
app.listen(8080, () => {
    console.log(`Server is running on port ${PORT}`)
})