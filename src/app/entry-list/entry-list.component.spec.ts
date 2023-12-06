import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntryListComponent } from './entry-list.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EntryListComponent', () => {
  let component: EntryListComponent;
  let fixture: ComponentFixture<EntryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryListComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ categoryName: 'Animals' }) // Mock the params observable
          }
        }
      ],
      imports: [HttpClientTestingModule] 
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});