import { ClarityIcons } from '@cds/core/icon';
import { Component } from '@angular/core';
import catBodyIcons from '../assets/icons/cat-body-icons';
import catHeadIcons from '../assets/icons/cat-head-icons';

Object.entries(catBodyIcons).forEach(([name, svg]) => {
  ClarityIcons.addIcons([name, svg])
});
Object.entries(catHeadIcons).forEach(([name, svg]) => {
  ClarityIcons.addIcons([name, svg])
});

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
}