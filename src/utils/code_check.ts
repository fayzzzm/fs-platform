import { transformSync } from '@babel/core';

export const codeCheck = (code: string) => {
    const tests = ['assert.equal(pow(2), 4);', 'assert.equal(pow(3), 9);', 'assert.equal(pow(4), 16);'];
    const testsPassed = Array.from({ length: tests.length }, () => false);

    try {
        const result = transformSync(code);

        tests.forEach((test, idx) => {
            eval(`const assert = require('assert');${(result as any).code}${test}`);
            testsPassed[idx] = true;
        });
    } catch (e) {
        throw {
            message: e,
            testsPassed,
        };
    }

    return {
        message: 'OK',
        testsPassed,
    };
};
