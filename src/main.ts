import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import * as Boom from '@hapi/boom';
import { router } from './router';

const app = express();

app.use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use('/', router)
    .use((_req, _res, next) => next(Boom.notFound('Endpoint not found')))
    .use((error: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
        if (error.isBoom) {
            sendError(res, error);
        } else {
            console.error(error.stack || error);
            sendError(res, Boom.internal());
        }
    });

function sendError(res: express.Response, error: Boom.Boom): void {
    res.status(error.output.statusCode).json(error.output.payload);
}

if (!module.parent) {
    const port = process.env.NODEJS_PORT || 8080;

    app.listen(port, () => {
        console.info(`Application started on port ${port}`);
    });
}
