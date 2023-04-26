import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.content().subscribe((res) => {console.log(res)})
  }

}
