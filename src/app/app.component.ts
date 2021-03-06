import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nft-dashboard';

  searchByMatLabel: string = 'Collection slug...';
  selectedOption: string = '0';
  searchText: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public selectChange(event: any): void {
    if (event.value === '0') {
      this.selectedOption = '0';
      this.searchByMatLabel = 'Collection slug...';
    } else if (event.value === '1') {
      this.selectedOption = '1';
      this.searchByMatLabel = 'Contract address / token ID...';
    }
  }

  public search(input: string): void {
    if (this.selectedOption === '0') {
      this.router.navigate([`/collections/${input}`]);
    } else if (this.selectedOption === '1') {
      this.router.navigate([`/assets/${input}`]);
    }

    this.searchText = '';
  }
}
