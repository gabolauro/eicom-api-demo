"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class EicomRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Ruta Eicom'));
    }
}
const eicomRoutes = new EicomRoutes();
exports.default = eicomRoutes.router;
