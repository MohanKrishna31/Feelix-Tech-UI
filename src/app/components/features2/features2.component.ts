import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features2',
  templateUrl: 'features2.component.html',
  styleUrls: ['features2.component.css'],
})
export class Features2 {
  @Input()
  feature3Title: string = 'Cloud Solutions'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1620424680976-8e32ec4bf844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1Description: string =
    'Tailored software solutions to meet your unique business needs.'
  @Input()
  feature2Description: string =
    'Innovative mobile applications for seamless user experiences.'
  @Input()
  feature1ImgAlt: string = 'Custom Software Development Image Alt Text'
  @Input()
  feature3Description: string =
    'Scalable cloud services for enhanced flexibility and efficiency.'
  @Input()
  feature3ImgAlt: string = 'Cloud Solutions Image Alt Text'
  @Input()
  feature1Title: string = 'Custom Software Development'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1554850502-76a4b03e3ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1583400512534-75c2cb09f2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImgAlt: string = 'Mobile App Development Image Alt Text'
  @Input()
  feature2Title: string = 'Mobile App Development'
  activeTab: number = 0
  constructor() {}
}
