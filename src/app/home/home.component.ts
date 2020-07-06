import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor() {
    let categoryList = [],
        brandList = [],
        currentCategory = '',
        currentBrand = '',
        searchContent = ''
  }
  categoryList = ['ALL', 'FAVORITE', 'MEN', 'WOMEN']
  brandList = ['ALL', 'MONTBLANC', 'DIOR', 'GUCCI', 'CHANNEL', 'TOM FORD', 'LE LABO', 'HUGO']
  currentCategory = 'ALL'
  currentBrand = 'ALL'
  searchContent = ''

  changeCategory(newCategory) {
    this.currentCategory = newCategory
  }
  changeBrand(newBrand) {
    this.currentBrand = newBrand
  }
  searchName(event: any) {
    this.searchContent = event.target.value
    console.log(this.searchContent)
  }
}
