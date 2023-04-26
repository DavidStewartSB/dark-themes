import { Component, OnInit } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public icon: string = ETheme.ICON_SUN

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
   const theme = document.body.classList.toggle('dark-theme')

   if(theme) {
    return this.icon = 'sun'
   } return this.icon = 'moon'
  }

}
