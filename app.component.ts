import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { theme } from './theme';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent {
  title = "stackblitz-angular-tailwind-minimal";

  cbColourCode = theme.colors.cambridge_blue;
}
