import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LearningsComponent } from './learnings.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LearningsService } from '../core/services/learnings.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { SnackBarService } from '../core/services/snack-bar.service';

describe('LearningsComponent', () => {
  let component: LearningsComponent;
  let fixture: ComponentFixture<LearningsComponent>;
  let learningsService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ LearningsComponent ],
      providers: [
        { provide: LearningsService, useValue: learningsService },
        { provide: SnackBarService, useValue: SnackBarServiceMock },
        { provide: MatDialog, useClass: MatDialogMock },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningsComponent);
    component = fixture.componentInstance;
  });
  it('should create UsersList component', () => {
    expect(component).toBeTruthy();
  });
  it('should call getUsers and get response as array', fakeAsync(() => {
    jasmine.createSpy('getLearnings').and.callThrough();
    expect(component.learnings.length).toBe(0);
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
