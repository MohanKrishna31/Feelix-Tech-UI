import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1493624339732-8064c0bb6aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1Title: string = 'Leading Innovation'
  @Input()
  feature3ImgAlt: string = 'Customized Solutions'
  @Input()
  feature2ImgAlt: string = 'Industry Expertise'
  @Input()
  feature3Description: string =
    'Cutting-edge technology solutions tailored to your needs.'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1590935217281-8f102120d683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgAlt: string = 'Innovative Solutions'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1580983696793-3500a8a0b7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Title: string = 'Diverse Industry Solutions'
  @Input()
  feature3Title: string = 'Customized Solutions'
  @Input()
  feature2Description: string =
    'Expertise in a wide range of industries for comprehensive solutions.'
  @Input()
  feature1Description: string =
    'Pioneering the way in software innovation to drive success.'
  activeTab: number = 0
  constructor() {}
}
