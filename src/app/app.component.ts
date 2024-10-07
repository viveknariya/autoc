import { Component } from '@angular/core';
import { AutocComponent } from './autoc/autoc.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutocComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'autoc';

  users: any[] = [
    { UserID: '12345', Name: 'John Doe' },
    { UserID: '23456', Name: 'Jane Doe' },
    { UserID: '34567', Name: 'Jim Beam' },
  ];

  device: any[] = [
    { DeviceID: '12345', Name: 'devicen Doe' },
    { DeviceID: '23456', Name: 'asdasd Doe' },
    { DeviceID: '34567', Name: 'Jasdasdim Beam' },
  ];

  constructor(private sharedService: SharedService) {
    this.sharedService.parentToChildSource.next({
      UserID: '12345',
      Name: 'John Doe',
    });

    this.sharedService.childToParentSource.subscribe((value) => {
      console.log(value);
      console.log('parent');
    });
  }
}
