import { Component, OnInit } from '@angular/core';
import { HeaderserviceComponent } from '../../service/headerservice/headerservice.component';
import { Header } from '../../model/header/header';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css'],
})
export class HeadercomponentComponent implements OnInit {
  public headers: Header[];
  public roles: string[];
  public selectedNavIndex;

  constructor(private headerService: HeaderserviceComponent) {
  }

  ngOnInit(): void {
    this.headerService.loadHeaderData().subscribe(
      data => {
        this.headers = data;
        this.selectedNavIndex = 0
        this.roles = this.headers[this.selectedNavIndex].roles;
      },
      error => {
        console.log(error);
      },
    );
  }

  updateRole = (selectedIndex) => {
    this.selectedNavIndex = selectedIndex;
    this.roles = this.headers[selectedIndex].roles;
  };

  saveSelectedOption = (selectedIndex) => {
    //console.log(selectedIndex);
  }

}
