import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { HttpModule} from '@angular/http';
>>>>>>> c2e71c5e4d7a8e2711a641d0676e24b8e94e7b76
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';
import { regService} from '../app/services/reg.services' ;
import { UserOb} from '../app/objects/UserObject';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [regService,{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {}
