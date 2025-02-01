import { BadRequestException, Injectable } from '@nestjs/common';
import { Superhero, SuperheroDto } from './superhero.model';

@Injectable()
export class AppService {
  private superheroes: Superhero[] = [];
  private idCounter = 1;

  getHello(): string {
    return 'Hello World!';
  }

  addSuperhero(superheroDto: SuperheroDto): string {
    if(!superheroDto.name || !superheroDto.superpower || !superheroDto.humilityScore){
      throw new BadRequestException('Invalid superhero data. Fill in all the fields.');
    }
    const newSuperhero: Superhero = { ...superheroDto, id: this.idCounter++ };
    this.superheroes.push(newSuperhero);

    return 'Superhero added successfully';
  }

  getSuperheroes(): SuperheroDto[] {
    return this.superheroes
      .sort((a, b) => b.humilityScore - a.humilityScore)
      .map(({ id, ...rest }) => rest); 
  }
}
