import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: 'cta.component.html',
  styleUrls: ['cta.component.css'],
})
export class CTA {
  @Input()
  content1: string =
    'At Feelix Consultancy Services Limited, we are committed to leading the way in innovation by providing cutting-edge software solutions that drive business growth and success.'
  @Input()
  action1: string = 'Learn More'
  @Input()
  heading1: string =
    'Transforming the Future with Innovative Software Solutions'
  constructor() {}
}
