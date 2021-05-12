const express = require('express');
const app = express()
const port = 5000
const dbsetup = require('./database/setup');
const profileRoutes = require('./routes/profileRoutes')


app.use(express.json())

//set up DB

dbsetup()

app.use(profileRoutes)





app.listen(port, () => console.log(`app listening to port${port}`));
