"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
console.log("Aplikacija paleista");
app_js_1.app.listen(3998, () => {
    console.log("Express serveris paleistas, ant uosto 3998");
});
