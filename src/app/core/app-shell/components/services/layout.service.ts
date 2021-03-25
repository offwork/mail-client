import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class LayoutServices {
  getMainMenuList(): Observable<any[]> {
    return of([
      {
        label: 'Geleneler',
        link: '/mail/inbox',
      },
      {
        label: 'Gonderilenler',
        link: '/mail/send',
      },
      {
        label: 'Cop Kutusu',
        link: '/mail/trash',
      },
    ]);
  }
}
