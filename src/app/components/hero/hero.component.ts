import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
})
export class Hero {
  @Input()
  image2Alt: string = 'Hero Image'
  @Input()
  image3Alt: string = 'Hero Image'
  @ContentChild('text')
  text: TemplateRef<any>
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1719990971695-2309058a2f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Alt: string = 'Hero Image'
  @Input()
  image6Alt: string = 'Hero Image'
  @Input()
  heading1: string = 'Leading the Way in Innovation in Software Solutions'
  @Input()
  action1: string = 'Learn More'
  @Input()
  action2: string = 'Contact Us'
  @Input()
  image4Alt: string = 'Hero Image'
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1565276386516-da2232e7d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ1MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1564100842-06f5dcd6f8c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image1Alt: string = 'Feelix Consultancy Services Limited'
  @Input()
  image5Src: string =
    'https://images.unsplash.com/photo-1660752484961-5e34b5ee0a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ1MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image6Src: string =
    'https://images.unsplash.com/photo-1531694611353-d4758f86fa6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ1MHw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
