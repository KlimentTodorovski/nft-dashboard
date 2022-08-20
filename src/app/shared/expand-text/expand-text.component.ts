import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expand-text',
  templateUrl: './expand-text.component.html',
  styleUrls: ['./expand-text.component.scss']
})
export class ExpandTextComponent implements OnInit {

  @Input() description: string = '';
  @Input() truncateSize: number = 0;

  public _description: string = '';
  public isDescriptionExpanded: boolean = false;
  public show: string = 'Show more';
  public faIcon = faAngleDown;

  constructor() { }

  ngOnInit(): void {
    if (!this.description) {
      this.description = '';
    }

    if (this.description.length > this.truncateSize) {
      this._description = this.description.slice(0, this.truncateSize) + '...';
    }
  }

  public expandDescription(): void {
    if (this.isDescriptionExpanded) {
      if (this.description.length > this.truncateSize) {
        this._description = this.description.slice(0,this.truncateSize) + '...';
      }

      this.isDescriptionExpanded = false;
      this.faIcon = faAngleDown;
      this.show = 'Show more'
    } else {
      if (this.description.length > this.truncateSize) {
        this._description = this.description;
      }

      this.isDescriptionExpanded = true;
      this.faIcon = faAngleUp;
      this.show = 'Show less'
    }
  }
}
