import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatCheckboxModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule { }
