import { TestBed } from '@angular/core/testing';

import { SdksAndSettingsService } from './sdks-and-settings.service';

describe('SdksAndSettingsService', () => {
  let service: SdksAndSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdksAndSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
