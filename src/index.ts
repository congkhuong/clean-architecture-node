import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Container } from "typedi";

import TranslationController from './module/translation/controllers/translation.controller';
const translationController = Container.get(TranslationController);

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/translate', (req, res) => translationController.translate(req, res));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
