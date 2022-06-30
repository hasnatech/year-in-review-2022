import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './common/menu/menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { SanitizeHtmlPipe } from './pipe/sanitizeHtml.pipe';
import { Section2Component } from './pages/section2/section2.component';
import { Section3Component } from './pages/section3/section3.component';
import { Section4Component } from './pages/section4/section4.component';
import { Section5Component } from './pages/section5/section5.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Section6Component } from './pages/section6/section6.component';
import { MouseScrollComponent } from './components/mouse-scroll/mouse-scroll.component';
import { TexthComponent } from './components/texth/texth.component';
import { FloatingBtnComponent } from './components/floating-btn/floating-btn.component';
import { HorizonComponent } from './components/horizon/horizon.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { KeySuccessComponent } from './components/key-success/key-success.component';
import { SliderContactsComponent } from './components/slider-contacts/slider-contacts.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FlipClickComponent } from './components/flip-click/flip-click.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    SanitizeHtmlPipe,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    MouseScrollComponent,
    TexthComponent,
    FloatingBtnComponent,
    HorizonComponent,
    TabsComponent,
    KeySuccessComponent,
    SliderContactsComponent,
    TestimonialComponent,
    FlipClickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
