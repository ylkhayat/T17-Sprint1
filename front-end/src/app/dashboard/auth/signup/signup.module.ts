import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ItemsService} from './items.service';
import { FormsModule } from '@angular/forms';
import { regService } from '../reg.service';
@NgModule({
  imports: [ThemeModule, ItemsRoutingModule, FormsModule],
  declarations: [ItemsComponent],
  providers: [regService]
})
export class SignupModule {}
