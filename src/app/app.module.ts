//Angular Core Components
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

//Custom Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PolicecontrolroomComponent } from './policecontrolroom/policecontrolroom.component';
import { LoginFailedComponent } from './login-failed/login-failed.component';
import { LoadingCircularComponent } from './loading/loading-circular/loading-circular.component'
import { TestComponent } from './test/test.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateButtonComponent } from './uttilitycomponent/update-button/update-button.component';
import { ViewButtonComponent } from './uttilitycomponent/view-button/view-button.component';

//NgForm Components
import { NgxFormsModule } from '@ngx-plus/ngx-forms';


// AGM map Components
import { AgmCoreModule} from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmDirectionModule } from 'agm-direction';


//Routing Components
import {Routes, RouterModule} from "@angular/router";


//Service Components
import { LoginService } from './services/login.service';
import { IsUserLoggedInService } from './services/is-user-logged-in.service'
import { GetUtilityService } from './services/get-utility.service'
import { GetSosdataService } from './services/get-sosdata.service'
import { IsProxyEnableService } from './services/is-proxy-enable.service'
import { SingletonutilityService } from './singletonservices/singletonutility.service'
import { EncryptionService } from './services/encryption.service'


//Gaurd Components
import { UserLoginGuard } from './guard/user-login.guard';


//Cookies Component
import { CookieService } from 'ngx-cookie-service';


//data-tables
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EncryptionComponent } from './encryption/encryption.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'policecontrolroom', component: PolicecontrolroomComponent ,canActivate : [UserLoginGuard]},
  { path: 'test' , component : TestComponent},
  { path: 'encryption', component : EncryptionComponent}
 ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PolicecontrolroomComponent,
    LoginFailedComponent,
    LoadingCircularComponent,
    TestComponent,
    MenuComponent,
    UpdateButtonComponent,
    ViewButtonComponent,
    EncryptionComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,NgxFormsModule.forRoot(),FormsModule,
    AgmCoreModule.forRoot({ apiKey : 'AIzaSyAa7EOA-VrQj64CI_LUdh1cXlms27VISVE '}) , AgmSnazzyInfoWindowModule,
    RouterModule.forRoot(routes, {useHash: true}),MatDialogModule,HttpClientModule,MatProgressBarModule,
    MatProgressSpinnerModule,Ng2SmartTableModule,NgxDatatableModule,AgmDirectionModule
  ],
  entryComponents : [
    LoginFailedComponent,LoadingCircularComponent,UpdateButtonComponent,ViewButtonComponent
  ],
  providers: [LoginService,UserLoginGuard,CookieService,GetUtilityService,
              IsUserLoggedInService, GetSosdataService,IsProxyEnableService,SingletonutilityService,
              EncryptionService
            
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
