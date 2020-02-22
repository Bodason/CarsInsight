import { TopNavBarRoutes } from './top-nav-bar-routes';
import { TopNavBarRoute } from './top-nav-bar-route.class';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  Routes: TopNavBarRoute[] = TopNavBarRoutes;

  constructor( private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const currentRoute = this.activatedRoute.snapshot.url[0].path;
    const routeRef = this.Routes.find(x => x.Url === ('/' + currentRoute));
    this.Routes.forEach(route => {
      route.IsSelected = false;
    });
    routeRef.IsSelected = true;
  }

  SelectedRouteChanged(route: TopNavBarRoute) {
    const initialSelectedRouteIndex: number = this.Routes.findIndex(x => x.IsSelected);
    const currentlySelectedRouteIndex: number = this.Routes.findIndex(x => x.Name === route.Name);
    if (initialSelectedRouteIndex !== currentlySelectedRouteIndex) {
      this.router.navigateByUrl(route.Url);
    }
  }

}
