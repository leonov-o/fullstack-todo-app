import "dotenv/config";
import express from 'express';
import morgan from "morgan";
// import mongoose from 'mongoose';


const app = express();

app.use(morgan('dev'));
app.use(express.json());

async function main() {
    try {

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}


main();
