import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {


  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService,
              private router: Router) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then((res: Hero[]) => {
      this.heroes = res;
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    // stub
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


