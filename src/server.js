require("dotenv").config()

const app = require("./app.js")

app.listen(3000, () => {
    "srv running on 3000"
})