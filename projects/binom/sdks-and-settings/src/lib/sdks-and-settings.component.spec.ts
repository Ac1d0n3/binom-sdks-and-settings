import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdksAndSettingsComponent } from './sdks-and-settings.component';

describe('SdksAndSettingsComponent', () => {
  let component: SdksAndSettingsComponent;
  let fixture: ComponentFixture<SdksAndSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdksAndSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdksAndSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
