import express from 'express';
import 'dotenv/config';
const app = express();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hope is the mind killer, hope is the last to die',
    });
});
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
