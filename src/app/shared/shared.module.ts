import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent } from './components';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [MaterialModule],
  exports: [HeaderComponent, FooterComponent, MaterialModule],
})
export class SharedModule {}
