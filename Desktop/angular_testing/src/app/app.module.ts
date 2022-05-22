import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { VoteComponent } from './vote/vote.component';
import { ServicetestComponent } from './servicetest/servicetest.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    VoteComponent,
    ServicetestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
