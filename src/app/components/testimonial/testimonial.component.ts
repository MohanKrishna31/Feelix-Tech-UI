import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class Testimonial {
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Position: string = 'CEO, Tech Co.'
  @Input()
  content1: string =
    'See what our clients have to say about their experience working with Feelix Consultancy Services Limited.'
  @Input()
  review3: string =
    'We are extremely satisfied with the software solutions delivered by Feelix Consultancy Services Limited. Their ability to tailor solutions to our specific needs was impressive, and we look forward to future collaborations.'
  @Input()
  author2Alt: string = 'Image of Jane Smith'
  @Input()
  author2Name: string = 'Jane Smith'
  @Input()
  author3Name: string = 'David Johnson'
  @Input()
  author4Alt: string = 'Image of Sarah Williams'
  @Input()
  author4Name: string = 'Sarah Williams'
  @Input()
  review2: string =
    "Working with Feelix Consultancy Services Limited was a game-changer for us. Their team's expertise and professionalism exceeded our expectations, and we are thrilled with the results."
  @Input()
  review4: string =
    'Feelix Consultancy Services Limited stands out for their creativity and technical expertise. They not only met but exceeded our project requirements, and we highly recommend their services.'
  @Input()
  author2Src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  author1Name: string = 'John Doe'
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1460904577954-8fadb262612c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  review1: string =
    'Feelix Consultancy Services Limited provided us with top-notch software solutions that transformed our business operations. Their innovative approach and dedication to excellence are truly commendable.'
  @Input()
  author3Position: string = 'CFO, Data Solutions Inc.'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMzNzQ0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author2Position: string = 'CTO, Digital Corp.'
  @Input()
  author3Alt: string = 'Image of David Johnson'
  @Input()
  author1Alt: string = 'Image of John Doe'
  @Input()
  author4Position: string = 'CMO, Marketing Experts Co.'
  @Input()
  heading1: string = 'Testimonials'
  constructor() {}
}
