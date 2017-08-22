import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class ProductGuardService implements CanActivate {

    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        console.log(route);
        let id = +route.params['id'];
        if (isNaN(id) || id < 1) {
            alert("Invalid product Id");
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}