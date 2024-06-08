import { app } from "./app.js";


console.log("Aplikacija paleista");

app.listen(3998, ()=>{
    console.log("Express serveris paleistas, ant uosto 3998");
})