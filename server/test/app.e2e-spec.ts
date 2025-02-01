import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from './../src/app.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  interface Superhero {
    name: string;
    superpower: string;
    humilityScore: number;
  }
  
  let appService = { 
    getSuperheroes: (): Superhero[] => [], 
    addSuperhero: jest.fn() 
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
    .overrideProvider(AppService)
    .useValue(appService)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/superheroes (GET)', () => {
    appService.getSuperheroes = () => [];
    return request(app.getHttpServer())
      .get('/superheroes')
      .expect(200)
      .expect([]);
  });

  it('/superheroes (GET) with mock data', () => {
    appService.getSuperheroes = () => [
      { name: 'Batman', superpower: 'Martial Arts', humilityScore: 4 },
      { name: 'Superman', superpower: 'Super Strength', humilityScore: 8 }
    ];
    return request(app.getHttpServer())
      .get('/superheroes')
      .expect(200)
      .expect(appService.getSuperheroes());
  });
});
