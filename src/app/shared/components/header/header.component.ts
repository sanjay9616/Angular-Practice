import { Component } from '@angular/core';
import { MENUBAR_CONFIG } from '../../config/menu-bar.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  routes: Array<any> = MENUBAR_CONFIG

  constructor() { }

  ngOnInit() { }

}
