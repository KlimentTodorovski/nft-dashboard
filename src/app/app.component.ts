import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

  public fa_search = faSearch;

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
      let s = input.replace(/[^a-zA-Z0-9]/g, "");
      this.router.navigate([`/collections/${s}`]);
    } else if (this.selectedOption === '1') {
      if (input.split('/').length === 1) {
        input = input + '/0'
      }

      this.router.navigate([`/assets/${input}`]);
    }

    this.searchText = '';
  }
}
