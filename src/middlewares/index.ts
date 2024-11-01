import express, { Application } from "express";

export const applyMiddleware = (app: Application): void => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
