import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatailsPage } from './datails.page';

describe('DatailsPage', () => {
  let component: DatailsPage;
  let fixture: ComponentFixture<DatailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
