import { ClarityIcons, bellIcon, calendarIcon, logoutIcon, plusIcon, talkBubblesIcon, userIcon, usersIcon } from '@cds/core/icon';
import { Component } from '@angular/core';
import catBodyIcons from '../assets/icons/cat-body-icons';
import catHeadIcons from '../assets/icons/cat-head-icons';
import logoChatLibre from '../assets/icons/logo-chat-libre';

ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(bellIcon);
ClarityIcons.addIcons(calendarIcon);
ClarityIcons.addIcons(usersIcon);
ClarityIcons.addIcons(talkBubblesIcon);
ClarityIcons.addIcons(plusIcon);
ClarityIcons.addIcons(logoutIcon);
Object.entries(catBodyIcons).forEach(([name, svg]) => ClarityIcons.addIcons([name, svg]));
Object.entries(catHeadIcons).forEach(([name, svg]) => ClarityIcons.addIcons([name, svg]));
ClarityIcons.addIcons(['logo-chat-libre', logoChatLibre]);

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
}