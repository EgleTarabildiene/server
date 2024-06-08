"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkaiciuokleController = void 0;
class SkaiciuokleController {
    static apskaiciuoti(req, res) {
        console.log("Skaiciuojami rezultatai");
        const svoris = parseInt(req.body.x);
        const ugis = parseInt(req.body.y);
        console.log();
        res.json({
            "rezultatas": (svoris / ((ugis / 100) * (ugis / 100))).toFixed(2)
        });
    }
}
exports.SkaiciuokleController = SkaiciuokleController;
