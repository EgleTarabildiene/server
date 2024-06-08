import { Response } from "express";

export class SkaiciuokleController{
   static apskaiciuoti(req:any, res:any ){
        console.log("Skaiciuojami rezultatai");
        const svoris=parseInt(req.body.x);
        const ugis=parseInt(req.body.y);
        console.log();
        res.json({
            "rezultatas":(svoris/((ugis/100)*(ugis/100))).toFixed(2)
        });

   } 
}