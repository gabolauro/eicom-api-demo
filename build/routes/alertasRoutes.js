"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alertasControllers_1 = __importDefault(require("../controllers/alertasControllers"));
class AlertasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', alertasControllers_1.default.list);
        this.router.get('/:id', alertasControllers_1.default.getone);
        this.router.post('/', alertasControllers_1.default.create);
        this.router.put('/:id', alertasControllers_1.default.update);
        this.router.delete('/:id', alertasControllers_1.default.delete);
    }
}
const alertasRoutes = new AlertasRoutes();
exports.default = alertasRoutes.router;
