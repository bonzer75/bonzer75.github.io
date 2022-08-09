import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
