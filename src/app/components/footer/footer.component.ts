import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  link3: string = 'Careers'
  @Input()
  column1Title: string = 'Company'
  @Input()
  content3: string =
    '&copy; 2023 Feelix Consultancy Services Limited. All rights reserved.'
  @Input()
  link4: string = 'Blog'
  @Input()
  link6: string = 'Consulting Services'
  @Input()
  link10: string = 'Events'
  @Input()
  link5: string = 'Software Development'
  @Input()
  link7: string = 'Innovation Solutions'
  @Input()
  link2: string = 'Contact Us'
  @Input()
  cookiesLink: string = 'Cookie Policy'
  @Input()
  column2Title: string = 'Services'
  @Input()
  socialLinkTitleCategory: string = 'Follow Us'
  @Input()
  content2: string = 'Stay up to date with our latest news and updates.'
  @Input()
  link9: string = 'Partnerships'
  @Input()
  termsLink: string = 'Terms of Use'
  @Input()
  action1: string = 'Subscribe'
  @Input()
  link1: string = 'About Us'
  @Input()
  privacyLink: string = 'Privacy Policy'
  @Input()
  link8: string = 'Client Success Stories'
  @Input()
  logoSrc: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  logoAlt: string = 'logo'
  constructor() {}
}
