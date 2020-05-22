import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MatTabsModule, MatExpansionModule, MatCardModule, MatGridListModule, MatDividerModule, MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatListModule  } from '@angular/material';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SidenavListComponent } from './nav/sidenav-list/sidenav-list.component';
const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'instruments', component: InstrumentsComponent },
  { path: 'gallery', component: GalleryComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    InstrumentsComponent,
    GalleryComponent,
    SidenavListComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,  
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, MatTabsModule,  MatSidenavModule, MatToolbarModule, MatButtonModule,
    MatIconModule, MatListModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
