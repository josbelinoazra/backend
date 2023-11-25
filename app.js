require('dotenv').config()

const express = require('express');
const adminRouter = require('./routes/adminRouter');
const companyRouter = require('./routes/companyRouter');
const userRouter = require('./routes/userRouter');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', adminRouter);
app.use('/api', companyRouter);
app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.send("Hello Teungku Rafky");
})


app.listen(port, () => {
    console.log(`Aplikasi berjalan pada port ${port}`);
})