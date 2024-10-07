import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  model,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-autoc',
  standalone: true,
  imports: [NgbModule, FormsModule],
  templateUrl: './autoc.component.html',
  styleUrl: './autoc.component.css',
})
export class AutocComponent implements OnInit {
  @Input() picklistname: string = '';

  @Input() searchid: string = '';
  @Input() searchname: string = '';

  @Input() idvalue: string = '';
  @Input() namevalue: string = '';

  @Input() source: any[] = []; // Assuming an array for source

  @Input() Idmaxlength: number = 0;
  @Input() Namemaxlength: number = 0;

  @Input() isNumeric: boolean = false;
  @Input() IsIdAutoIncrement: boolean = false;

  @Input() placeholderId: string = '';
  @Input() placeholderName: string = '';

  @Input() isIdDisable: boolean = false;

  @Input() required: boolean = false;

  @Input() isidvisible: boolean = false;
  @Input() isnamevisible: boolean = false;

  @Input() allowfilter: boolean = false;

  @Input() idlabel: string = '';
  @Input() namelabel: string = '';

  @Input() pageid: string = '';

  @Input() hiddenfield1: string = '';
  @Input() hiddenfield2: string = '';
  @Input() hiddenfield3: string = '';
  @Input() hiddenfield4: string = '';
  @Input() hiddenfield5: string = '';

  @Input() splitid: string = '';
  @Input() AllowSpecialChar: boolean = false;

  @Input() idarray: any[] = []; // Assuming an array for keydown event parameters
  @Input() namearray: any[] = [];

  @Input() txtfor: string = '';
  @Input() isserverpaging: boolean = false;

  @Input() placeholderid: string = 'Enter ID';
  @Input() placeholdername: string = 'Enter Name';

  model: any = {};

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.model[this.searchid] = '';
    this.model[this.searchname] = '';

    this.sharedService.parentToChildSource.subscribe((value) => {
      if (value) {
        this.model[this.searchid] = value[this.searchid] || '';
        this.model[this.searchname] = value[this.searchname] || '';
      }
    });
  }

  // Placeholder variables

  // Search function for User ID
  searchUserId = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.source
              .filter(
                (item) =>
                  item[this.searchid]
                    .toLowerCase()
                    .indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );

  // Search function for User Name
  searchUserName = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.source
              .filter(
                (item) =>
                  item[this.searchname]
                    .toLowerCase()
                    .indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );

  // Formatter for displaying User ID
  formatterId = (result: any) => result[this.searchid];

  // Formatter for displaying User Name
  formatterName = (result: any) => result[this.searchname];

  onSelect(event: any) {
    const selectedValue = {
      [this.searchid]: event.item[this.searchid],
      [this.searchname]: event.item[this.searchname],
    };
    this.sharedService.childToParentSource.next(selectedValue);
    console.log(selectedValue);
  }

  // Handle the selection of an item from the typeahead
}
