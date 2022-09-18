import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { VoterChildComponent } from './voter-child/voter-child.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    VoterChildComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
