import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SuperheroDto } from './superhero.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('superheroes')
  getSuperheros(): SuperheroDto[] {
    return this.appService.getSuperheroes();
  }

  @Post('superheroes')
  addSuperhero(@Body() superheroDto: SuperheroDto): string {
    return this.appService.addSuperhero(superheroDto);
  }
}


