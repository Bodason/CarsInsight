import { Component, OnInit } from '@angular/core';
import { TopNavBarRoute } from './top-nav-bar-route';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  Routes: TopNavBarRoute[] = [
    { Name: 'Assignment A', Url: '/A', IsSelected: false},
    { Name: 'Assignment B', Url: '/B', IsSelected: false},
    { Name: 'Assignment C', Url: '/C', IsSelected: false},
  ];

  constructor( private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const currentRoute = this.activatedRoute.snapshot.url[0].path;
    const route = this.Routes.find(x => x.Url === ('/' + currentRoute));
    route.IsSelected = true;
  }

  SelectedRouteChanged(route: TopNavBarRoute) {
    const initialSelectedRouteIndex: number = this.Routes.findIndex(x => x.IsSelected);
    const currentlySelectedRouteIndex: number = this.Routes.findIndex(x => x.Name === route.Name);

    if (this.Routes[currentlySelectedRouteIndex] !== this.Routes[initialSelectedRouteIndex]) {
      this.router.navigateByUrl(route.Url);
    }

  }

}
