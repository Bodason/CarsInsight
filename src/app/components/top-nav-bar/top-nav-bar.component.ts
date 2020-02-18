import { Component, OnInit } from '@angular/core';
import { TopNavBarRoute } from './top-nav-bar-route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  Routes: TopNavBarRoute[] = [
    { Name: 'Assignment A', Url: '/A', IsSelected: true},
    { Name: 'Assignment B', Url: '/B', IsSelected: false},
    { Name: 'Assignment C', Url: '/C', IsSelected: false},
  ];

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  SelectedRouteChanged(route: TopNavBarRoute) {
    const initialSelectedRouteIndex: number = this.Routes.findIndex(x => x.IsSelected);
    const currentlySelectedRouteIndex: number = this.Routes.findIndex(x => x.Name === route.Name);

    if (this.Routes[initialSelectedRouteIndex] !== route) {
      this.Routes.forEach(x => x.IsSelected = false );
      this.Routes[currentlySelectedRouteIndex].IsSelected = true;

      this.router.navigateByUrl(this.Routes[currentlySelectedRouteIndex].Url);

    }

  }

}
