import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewDetailsPageRoutingModule } from './view-details-routing.module';

import { ViewDetailsPage } from './view-details.page';

describe('ViewDetailsPage', () => {
  let component: ViewDetailsPage;
  let fixture: ComponentFixture<ViewDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailsPage ],
      imports: [IonicModule.forRoot(), ViewDetailsPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
