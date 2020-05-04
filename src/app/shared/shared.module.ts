import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent } from './components';
import { MaterialModule } from '../material.module';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MobileMenuComponent],
  imports: [MaterialModule],
  exports: [HeaderComponent, FooterComponent, MaterialModule, MobileMenuComponent],
})
export class SharedModule { }
