import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationsService {
  constructor() {
    AnimationsService.routeAnimationType = 'NONE';
  }

  private static routeAnimationType: RouteAnimationType = 'ALL';

  static isRouteAnimationsType(type: RouteAnimationType) {
    return AnimationsService.routeAnimationType === type;
  }

  updateRouteAnimationType(pageAnimations: boolean) {
    AnimationsService.routeAnimationType = pageAnimations ? 'ALL' : 'NONE';
  }
}

export type RouteAnimationType = 'ALL' | 'PAGE' | 'ELEMENTS' | 'NONE';
