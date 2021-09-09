const createApp = require("./index")
const port = (process.env.PORT || 4300)
const db = require("./db")

const app = createApp(db)
app.listen(port)