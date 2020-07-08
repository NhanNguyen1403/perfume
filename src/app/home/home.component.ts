import { Component, ViewEncapsulation } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  categoryList = ['ALL', 'FAVORITE', 'MEN', 'WOMEN', 'ABOUT US']
  brandList = ['ALL', 'MONTBLANC', 'DIOR', 'GUCCI', 'CHANNEL', 'TOM FORD', 'LE LABO', 'HUGO']
  currentCategory = 'ALL'
  currentBrand = 'ALL'
  searchContent = ''
  totalPrice = 0
  filter = ['ALL', 'ALL']
  productList = [
    {
      id: 1,
      name: "MONTB 10 MEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
      views: 10,      
      brand:'MONTBLANC',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 2,
      name: "DIOR 30 MEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
      views: 30,
      brand:'DIOR',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 3,
      name: "GUCCI 20 MEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
      views: 20,
      brand:'GUCCI',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 4,
      name: "CHANNEL 50 WOMEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'WOMEN',
      views: 50,
      brand:'CHANNEL',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 5,
      name: "TF 40 WOMEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'WOMEN',
      views: 40,
      brand:'TOM FORD',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 6,
      name: "LE LA 70 WOMEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'WOMEN',
      views: 70,
      brand:'LE LABO',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 7,
      name: "HUGO 60 WOMEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'WOMEN',
      views: 60,
      brand:'HUGO',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 8,
      name: "MONTB 90 WOMEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'WOMEN',
      views: 90,
      brand:'MONTBLANC',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 9,
      name: "DIOR 80 WOMEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'WOMEN',
      views: 80,
      brand:'DIOR',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 10,
      name: "GUCCI 110 MEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
      views: 110,
      brand:'GUCCI',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 11,
      name: "CHANNEL 100 MEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
      views: 100,
      brand:'CHANNEL',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
    {
      id: 12,
      name: "TF 130 MEN",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
      views: 130,
      brand:'TOM FORD',
      size: {
        large: {
          quantity: 100,
          price: 900
        },
        medium: {
          quantity: 50,
          price: 450
        },
        small: {
          quantity: 25,
          price: 200
        }
      },
      photos: {
        large: [
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',
          'https://dummyimage.com/500x500/dddddd/fff.png',          
        ],
        medium: [
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
          'https://dummyimage.com/200x200/dddddd/fff.png',
        ],
        small: [
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
          'https://dummyimage.com/50x50/dddddd/fff.png',
        ]
      },
    },
  ]  
  productListFilter = [...this.productList]
  productChosenList = []
  showProductDetailModal = false
  productDetail = {
    photos: {
      small: [
        'https://dummyimage.com/50x50/dddddd/fff.png',
        'https://dummyimage.com/50x50/dddddd/fff.png',
        'https://dummyimage.com/50x50/dddddd/fff.png',
        'https://dummyimage.com/50x50/dddddd/fff.png',
        'https://dummyimage.com/50x50/dddddd/fff.png',
        'https://dummyimage.com/50x50/dddddd/fff.png',
        'https://dummyimage.com/50x50/dddddd/fff.png',
      ]
    }
  }
  currentproductDetailPhoto = 'https://dummyimage.com/500x500/dddddd/fff.png'


  toggleModal() {
    this.showProductDetailModal = !this.showProductDetailModal
  }
  changeCategory(newCategory) {
    this.currentCategory = newCategory
    this.currentBrand = 'ALL'
    this.changeCategoryFilter()
  }
  changeBrand(newBrand) {
    this.currentBrand = newBrand
    // this.changeBrandFilter()
  }
  changeCategoryFilter() {
    if (this.currentCategory == 'ALL') {      
      this.productListFilter = [...this.productList]
    } else if (this.currentCategory == 'FAVORITE'){
      this.productListFilter = [...this.productList]
      this.productListFilter.sort((a,b) => b.views - a.views)
    } else if (this.currentCategory == 'MEN') {
      this.productListFilter = []
      for (let product of this.productList) {
        if (product.gender == 'MEN') this.productListFilter.push(product)
      }
    } else if (this.currentCategory == 'WOMEN') {
      this.productListFilter = []
      for (let product of this.productList) {
        if (product.gender == 'WOMEN') this.productListFilter.push(product)
      }
    }
    this.brandList =['ALL']
    for (let product of this.productListFilter) {
      if (!this.brandList.indexOf(product.brand)) {
        this.brandList.push(product.brand)
      }
    }
  }
  change
  searchName(event: any) {
    this.searchContent = event.target.value
    console.log(this.searchContent)
  }
  horizontalScroll(event: any, scrollClass?: any) {
    event.preventDefault()    
    let elementList = event.path,
        scrollUnit = event.deltaY

    for (let element of elementList) {
      if (element.classList && element.classList[0] == scrollClass) {
        scrollUnit > 0 ? element.scrollLeft += 20 : element.scrollLeft -= 20
      }
    }
  }
  addProductToCart(productInfo: any, quantity?: any, size?: any) {    
    let productEntity = {...productInfo}
    for (let product of this.productChosenList) {
      if (product.id == productEntity.id) {
        product.quantity += quantity || 1
        this.totalPrice += quantity || 1 * product.sizeChosen.price
        return
      }
    }
    productEntity.quantity = quantity || 1
    productEntity.sizeChosen = size || productInfo.size.small
    this.productChosenList.push(productEntity)
    this.totalPrice += productEntity.quantity * productEntity.sizeChosen.price
  }
}
