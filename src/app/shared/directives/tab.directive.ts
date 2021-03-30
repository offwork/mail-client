import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({ selector: 'app-tab-tpl' })
export class TabDirective {
  @ContentChild(TemplateRef) template: TemplateRef<any>;
}
