import * as express from 'express';
import { codeCheck } from '../../utils/code_check';
import multer from 'multer';

export const router = express.Router();

router
    .post('/', (req, res) => {
        const { code } = req.body;

        try {
            const message = codeCheck(code);
            res.send(message);
        } catch (e) {
            res.status(400).send(e);
        }
    })
    .post('/file', multer().single('file'), (req, res) => {
        const { originalname, buffer } = req.file;

        if (/main\.js/.test(originalname)) {
            const code = buffer.toString();
            const message = codeCheck(code);

            res.send(message);
        } else {
            throw new Error('Wrong file name');
        }
    });
