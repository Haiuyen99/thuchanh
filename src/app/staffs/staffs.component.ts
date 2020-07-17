import { Component, OnInit } from '@angular/core';

import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {
  staffs: Staff[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.getStaffs();
  }

  getStaffs(): void {
    this.staffService.getStaffs()
    .subscribe(staffs => this.staffs = staffs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.staffService.addStaff({ name } as Staff)
      .subscribe(staff => {
        this.staffs.push(staff);
      });
  }

  delete(staff: Staff): void {
    this.staffs = this.staffs.filter(h => h !== staff);
    this.staffService.deleteStaff(staff).subscribe();
  }

}