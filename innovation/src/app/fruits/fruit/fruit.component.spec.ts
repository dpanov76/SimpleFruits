import {FruitComponent} from "./fruit.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {of} from "rxjs/internal/observable/of";
import {Store} from "@ngrx/store";
import {RouterTestingModule} from "@angular/router/testing";
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('FruitComponent self written mock', () => {
  let component: FruitComponent;
  let fixture: ComponentFixture<FruitComponent>;
  const initialState = {};
  let store: MockStore;

  const storeMock = {
    select() {
      return of({ fruits: [{
          name: 'Apple',
          img: 'apple.jpg',
          url: 'apple',
          price: 0.50,
          description: 'Apple'
        }], sortBy: 'price', selectedFruit: null, basketTotal:0 });
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [FruitComponent],
      providers: [
        {
          provide: Store,
          useValue: storeMock
        },
        provideMockStore({ initialState }),
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(FruitComponent);
    component = fixture.componentInstance;
    component.fruit = {
      name: 'Apple',
      img: 'apple.jpg',
      url: 'apple',
      price: 0.5,
      description: 'Apple'
    }
  }));

  it('should render product', async () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    await fixture.whenStable();
    const totalBasket: HTMLElement = fixture.nativeElement.getElementsByClassName(
       'card-title'
     )[0].innerText;
    expect(totalBasket.toString()).toContain('Apple');
  });
  it('should call onAddToBasket(price) function', async () => {
    fixture.detectChanges();
    expect(component.onAddToBasket(1)).toBe(1);
  });

});
