import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Navbar } from './navbar/navbar.component'
import { CTA } from './cta/cta.component'
import { Features1 } from './features1/features1.component'
import { Steps } from './steps/steps.component'
import { Footer } from './footer/footer.component'
import { Testimonial } from './testimonial/testimonial.component'
import { Contact } from './contact/contact.component'
import { Features2 } from './features2/features2.component'
import { Hero } from './hero/hero.component'

@NgModule({
  declarations: [
    Navbar,
    CTA,
    Features1,
    Steps,
    Footer,
    Testimonial,
    Contact,
    Features2,
    Hero,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Navbar,
    CTA,
    Features1,
    Steps,
    Footer,
    Testimonial,
    Contact,
    Features2,
    Hero,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
