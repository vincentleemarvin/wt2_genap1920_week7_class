import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  hero: Hero = {
    _id: '',
    heroName: '',
    realName: '',
    universe: 'MCU',
    skill: ''
  };
  id = null;
  error = false;
  update = true;

  constructor(
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // jika ada parameter id di URL
      if (params.get('id')) {
        this.id = params.get('id');

        this.ds.getHero(this.id).subscribe(
          response => {
            this.hero = response as Hero;
          },
          err => {
            console.log(err);
            this.error = true;
          }
        );
      } else {
        this.update = false;
      }
    });
  }

  postHero() {
    this.ds.postHero(this.hero).subscribe(response => {
      // tampilkan notifikasi
      this.router.navigate(['/main']);
    });
  }

  deleteHero() {
    this.ds.deleteHero(this.hero).subscribe(
      response => {
        // tampilkan notifikasi
        this.router.navigate(['/main']);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateHero() {
    this.ds.updateHero(this.hero).subscribe(
      response => {
        // tampilkan notifikasi
        this.router.navigate(['/main']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
