import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import graphqlServer from './graphql/graphqlServer';

dotenv.config();

const app: Application = express();

dotenv.config();

app.use(cors());

async function startServer() {
    await graphqlServer.start();
    graphqlServer.applyMiddleware({
        app,
    });
}

startServer();

const port: number | string = 5000 || process.env.PORT ;

// error-handling middleware to catch and handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        // tslint:disable-next-line:no-console
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server running on http://localhost:${port}/graphql`);
});

export default app;