import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {Routes} from '@angular/router';
import {ParticipantsComponent} from './participants/participants.component';
import {EntriesComponent} from './entries/entries.component';
import {XtrasComponent} from './xtras/xtras.component';
import {RecoverComponent} from './recover/recover.component';
import {SummaryComponent} from './summary/summary.component';
import {SupportComponent} from './support/support.component';

export const routeConfigMock: Routes =
  [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'participants',
      component: ParticipantsComponent
    },
    {
      path: 'entries',
      component: EntriesComponent
    },
    {
      path: 'xtras',
      component: XtrasComponent
    },
    {
      path: 'summary',
      component: SummaryComponent
    },
    {
      path: 'recover',
      component: RecoverComponent
    },
    {
      path: 'support',
      component: SupportComponent
    },
    {
      path: '**',
      component: HomeComponent
    }
  ]
