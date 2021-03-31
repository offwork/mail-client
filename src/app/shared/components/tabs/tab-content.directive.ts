import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'app-tab-content-tpl'
})
export class TabContentDirective {
  @ContentChild(TemplateRef) template: TemplateRef<any>;
}
