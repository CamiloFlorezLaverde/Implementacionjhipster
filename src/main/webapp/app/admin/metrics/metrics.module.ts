import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoDeComprasSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [CarritoDeComprasSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
