"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const skaiciuokle_router_1 = require("./routes/skaiciuokle.router");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log("CORS");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});
app.use('/skaiciuokle', skaiciuokle_router_1.skaiciuokleRouter);
