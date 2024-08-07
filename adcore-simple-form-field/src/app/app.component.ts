import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'adcore-simple-form-field';
}
