import { Component } from '@angular/core';
import { PageLink } from '../../enums/page-link';
import { PageName } from '../../enums/page-name';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  pageLink = PageLink;
  pageName = PageName;

  navLinkClicked(link:string) {
    console.log(`clicked! ${link}`);
  }
}