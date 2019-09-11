import { TestBed } from '@angular/core/testing';

import { CoreMenuService } from './core-menu.service';

describe('CoreMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreMenuService = TestBed.get(CoreMenuService);
    expect(service).toBeTruthy();
  });
});
