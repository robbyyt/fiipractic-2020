import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent } from './components';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
