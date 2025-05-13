import {Component} from '@angular/core';
import {BerlinClockComponent} from './berlin-clock/berlin-clock.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, BerlinClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userTime: string = '';
}
