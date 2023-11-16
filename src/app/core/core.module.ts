import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { TestErrorComponent } from './test-error/test-error.component';

@NgModule({
  declarations: [
    NavBarComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [NavBarComponent],
})
export class CoreModule {}
