import * as express from 'express';
import { router as codeCheckRouter } from './code-check';

export const router = express.Router();

router
    .get('/ping', (_req, res) => {
        res.send('Hello from backend');
    })
    .use('/code_check', codeCheckRouter);
