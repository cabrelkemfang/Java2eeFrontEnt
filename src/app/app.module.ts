import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { FormsModule } from '@angular/forms';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatStepperModule
} from '@angular/material';
import { CoursePageComponent } from './course/course-page/course-page.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { LoginComponent } from './course/login/login.component';
import { CourseComponent } from './admin/course/course.component';
import { HomeComponent } from './admin/home/home.component';
import { NewCourseComponent } from './admin/new-course/new-course.component';
import { ConfirmationComponent } from './admin/confirmation/confirmation.component';


const route: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', component:  HomePageComponent },
  { path: 'home', component:  HomePageComponent },
  { path: 'course', component: CoursePageComponent },
  { path: 'outline', component: AddCourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course_manager', component: CourseComponent },
  { path: 'admin', component: HomeComponent },
  { path: 'new_course', component: NewCourseComponent },
  ]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CoursePageComponent,
    AddCourseComponent,
    LoginComponent,
    CourseComponent,
    HomeComponent,
    NewCourseComponent,
    ConfirmationComponent
  ],
  imports: [HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  entryComponents:[ConfirmationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
