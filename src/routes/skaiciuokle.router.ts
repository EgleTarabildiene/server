import express from 'express';

import { SkaiciuokleController } from '../conrollers/skaiciuokle.controller.js';
const skaiciuokleRouter=express.Router();

skaiciuokleRouter.post('/kmi', SkaiciuokleController.apskaiciuoti);


export {skaiciuokleRouter};