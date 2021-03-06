import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

import {Hero} from './hero';



@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
  `
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; // adding this line made it work. Just this line!
    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
