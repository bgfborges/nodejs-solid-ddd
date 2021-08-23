import './utils/module-alias';
import { Server } from '@overnightjs/core';
import * as bodyParser from 'body-parser';
import { forecastController } from './controllers/apiStatus';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const foreCastController = new forecastController();
    this.addControllers([foreCastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
