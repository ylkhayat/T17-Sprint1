import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { SignupComponent } from './signup.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { regService } from '../../../services/reg.services';
@NgModule({
  imports: [ThemeModule, FormsModule],
  declarations: [SignupComponent],
  providers: [regService,SignupService]
})
export class SignupModule {
  
  
}

