import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  @Input()
  content4: string =
    'Stay connected with us on social media for updates and more.'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  content5: string = 'Follow us:'
  @Input()
  email1: string = 'info@feelixconsultancy.com'
  @Input()
  phone1: string = '+1-123-456-7890'
  @Input()
  content2: string = 'Feel free to drop us a message or give us a call.'
  @Input()
  content3: string = 'Our team is ready to assist you.'
  @Input()
  address1: string = '123 Innovation Street, Cityville, Country'
  @Input()
  content1: string =
    'We would love to hear from you. Reach out to us for any inquiries or to start a project.'
  constructor() {}
}
