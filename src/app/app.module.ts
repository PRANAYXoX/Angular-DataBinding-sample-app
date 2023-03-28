import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputBlockComponent } from './output-block/output-block.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, OutputBlockComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
