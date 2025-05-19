import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-logos3',
  templateUrl: 'logos3.component.html',
  styleUrls: ['logos3.component.css'],
})
export class Logos3 {
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('heading11')
  heading11: TemplateRef<any>
  @Input()
  logo7Alt: string = 'Logo'
  @Input()
  logo10Alt: string = 'Logo'
  @Input()
  logo5Alt: string = 'Logo'
  @Input()
  logo6Alt: string = 'Logo'
  @Input()
  logo2Alt: string = 'Custom Software Development Logo'
  @Input()
  logo9Alt: string = 'Logo'
  @Input()
  logo4Alt: string = 'Cloud Solutions Logo'
  @Input()
  logo8Alt: string = 'Logo'
  @Input()
  logo1Alt: string = 'Feelix Consultancy Services Limited Logo'
  @Input()
  logo3Alt: string = 'Mobile App Development Logo'
  constructor() {}
}
