import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUsersPageComponent } from './search-users-page.component';

describe('SearchUsersPageComponent', () => {
  let component: SearchUsersPageComponent;
  let fixture: ComponentFixture<SearchUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUsersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
