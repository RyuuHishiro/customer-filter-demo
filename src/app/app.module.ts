import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CostumerFilterPage } from './costumer-filter/pages/costumer-filter/costumer-filter.page';
import { FunnelStepComponent } from './costumer-filter/components/funnel-step/funnel-step.component';
import { EnvironmentService } from './costumer-filter/services/environment/environment.service';
import { take } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CostumerFilterModule } from './costumer-filter/costumer-filter.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CostumerFilterPage, FunnelStepComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    CostumerFilterModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
