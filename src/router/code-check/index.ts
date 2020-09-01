import * as express from 'express';
import { codeCheck } from './code_check';

export const router = express.Router();

router.post('/', (req, res) => {
    const { code } = req.body;

    try {
        const message = codeCheck(code);
        res.send(message);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});
