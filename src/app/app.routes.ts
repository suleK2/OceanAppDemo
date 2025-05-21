import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { CertificateTypeComponent } from './components/certificate-type/certificate-type.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'crew', component: CrewListComponent },
    { path: 'settings/certificate-type', component: CertificateTypeComponent }
];
