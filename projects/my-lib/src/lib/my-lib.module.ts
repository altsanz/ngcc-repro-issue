import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [MyLibComponent],
  imports: [
    MatTabsModule
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
