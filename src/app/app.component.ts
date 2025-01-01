import { Component } from '@angular/core';
import 'hammerjs';
import { CoreComponent } from './components/core/core.component';

@Component({
  selector: 'app-root',
  imports: [CoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
