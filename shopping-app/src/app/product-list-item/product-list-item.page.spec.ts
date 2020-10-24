import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductListItemPage } from './product-list-item.page';

describe('ProductListItemPage', () => {
  let component: ProductListItemPage;
  let fixture: ComponentFixture<ProductListItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
