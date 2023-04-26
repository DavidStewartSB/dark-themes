import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.content().subscribe(res=> {console.log(res)})
  }


}
