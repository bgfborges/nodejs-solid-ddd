import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('api-status')
export class forecastController {

    @Get('')
    public getForecastForLoggedUser(_: Request, res: Response): void {
        res.json({message: 'up-to-date'});
    }

}