"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        // res.send('Hello')
        res.json({ text: 'API esta en /api/v1/alertas' });
    }
}
const indexControler = new IndexController();
exports.default = indexControler;
