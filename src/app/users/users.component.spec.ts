import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersComponent } from './users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../core/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { SnackBarService } from '../core/services/snack-bar.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ UsersComponent ],
      providers: [
        { provide: UsersService, useValue: usersService },
        { provide: SnackBarService, useValue: SnackBarServiceMock },
        { provide: MatDialog, useClass: MatDialogMock },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });
  it('should create UsersList component', () => {
    expect(component).toBeTruthy();
  });
  it('should call getUsers and get response as array', fakeAsync(() => {
    jasmine.createSpy('getUsers').and.callThrough();
    expect(component.users.length).toBe(0);
  }));
  
});
export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({ action: true }),
    };
  }
}
class SnackBarServiceMock { }
