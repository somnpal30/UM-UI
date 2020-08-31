import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  links = [['submission', 'My Submission'], ['approval', 'My Approval']]
  activeLink: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit (): void {
    this.links.forEach(link => {
      if (this.router.url.indexOf(link[0]) > -1) {
        this.activeLink = link[0];
      }
    })

  }

  displayChild = (tabselected) => {

    this.activeLink = tabselected
    var route: string;
    this.router.navigate([tabselected], {relativeTo: this.route})
  }

}
