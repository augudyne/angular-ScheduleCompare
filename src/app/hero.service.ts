import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES); // immediately resolves with the given data (simulate promise)
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then((heroes) => heroes.find((hero) => hero.id === id));
  }
}
