import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarritoDeComprasSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CarritoDeComprasSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class CarritoDeComprasHomeModule {}
