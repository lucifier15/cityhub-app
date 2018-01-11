import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAccPage } from './user-acc';

@NgModule({
  declarations: [
    UserAccPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAccPage),
  ],
})
export class UserAccPageModule {}
