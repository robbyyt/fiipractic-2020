import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule { }
