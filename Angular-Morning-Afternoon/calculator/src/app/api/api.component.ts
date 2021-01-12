import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Album } from '../album';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  albumList: Album[] = [];
  constructor(private apiService: ApiService) {
    this.apiService.getAlbums().subscribe((data) => {
      this.albumList = data;
      console.log("the length:" + this.albumList.length);
    });
   }

  ngOnInit(): void {
  }

}
