import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['steps.component.css'],
})
export class Steps {
  @Input()
  step2Title: string = 'Design & Development'
  @Input()
  step4Description: string =
    'Once the software is ready, we assist in deployment and provide ongoing support to ensure smooth operations.'
  @Input()
  step3Description: string =
    'We ensure the software undergoes rigorous testing and quality checks to deliver a seamless user experience.'
  @Input()
  step2Description: string =
    'Our team of experts will design and develop innovative software solutions that meet your requirements.'
  @Input()
  step1Title: string = 'Initial Consultation'
  @Input()
  step3Title: string = 'Testing & Quality Assurance'
  @Input()
  step4Title: string = 'Deployment & Support'
  @Input()
  step1Description: string =
    'We start by understanding your business needs and goals to provide tailored software solutions.'
  constructor() {}
}
