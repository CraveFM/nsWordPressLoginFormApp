import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { UserService } from "../shared/user.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    message = "You have successfully authenticated. This is where you build your core application functionality.";

    constructor(private userService: UserService, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    logout() {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }
}
