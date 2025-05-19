import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features23',
  templateUrl: 'features23.component.html',
  styleUrls: ['features23.component.css'],
})
export class Features23 {
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @Input()
  feature1ImageAlt: string = 'Custom Software Development Image'
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature2ImageAlt: string = 'Mobile App Development Image'
  constructor() {}
}
