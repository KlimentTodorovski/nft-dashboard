import { Component, Input, OnInit } from '@angular/core';
import { Trait } from 'src/shared/models/asset.interface';

@Component({
  selector: 'asset-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss']
})
export class TraitsComponent implements OnInit {

  @Input() traits: Trait[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
