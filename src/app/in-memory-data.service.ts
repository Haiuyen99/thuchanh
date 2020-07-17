import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Staff } from './staff';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];
    return {staffs};
  }

  // Overrides the genId method to ensure that a staff always has an id.
  // If the staffs array is empty,
  // the method below returns the initial number (11).
  // if the staff array is not empty, the method below returns the highest
  // staff id + 1.
  genId(staffs: Staff[]): number {
    return staffs.length > 0 ? Math.max(...staffs.map(staff => staff.id)) + 1 : 11;
  }
}


