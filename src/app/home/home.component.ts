import { Component } from '@angular/core';


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
  autoSearch: any
  productList = [
    {
      id: 1,
      name: "MONTB 10 MEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'MEN',
      views: 10,
      brand: 'MONTBLANC',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 2,
      name: "DIOR 30 MEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'MEN',
      views: 30,
      brand: 'DIOR',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 3,
      name: "GUCCI 20 MEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'MEN',
      views: 20,
      brand: 'GUCCI',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 4,
      name: "CHANNEL 50 WOMEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'WOMEN',
      views: 50,
      brand: 'CHANNEL',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 5,
      name: "TF 40 WOMEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'WOMEN',
      views: 40,
      brand: 'TOM FORD',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 6,
      name: "LE LA 70 WOMEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'WOMEN',
      views: 70,
      brand: 'LE LABO',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 7,
      name: "HUGO 60 WOMEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'WOMEN',
      views: 60,
      brand: 'HUGO',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 8,
      name: "MONTB 90 WOMEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'WOMEN',
      views: 90,
      brand: 'MONTBLANC',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 9,
      name: "DIOR 80 WOMEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'WOMEN',
      views: 80,
      brand: 'DIOR',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 10,
      name: "GUCCI 110 MEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'MEN',
      views: 110,
      brand: 'GUCCI',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 11,
      name: "CHANNEL 100 MEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'MEN',
      views: 100,
      brand: 'CHANNEL',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
    {
      id: 12,
      name: "TF 130 MEN",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'MEN',
      views: 130,
      brand: 'TOM FORD',
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
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
          'https://dummyimage.com/100x100/dddddd/fff.png',
        ]
      },
    },
  ]
  productListFilter = [...this.productList]
  tempBrandSearch = [...this.productList]
  productChosenList = []
  showProductDetailModal = false
  productDetail: any
  currentproductDetailPhoto = 'https://dummyimage.com/500x500/dddddd/fff.png'


  toggleModal(product?: any) {
    if (product) {
      this.productDetail = {
        ...product,
        sizeChosen: 'small',
        price: product.size.small.price,
        quantity: 1
      }
    }
    this.showProductDetailModal = !this.showProductDetailModal
  }
  changeCategory(newCategory) {
    if (newCategory != 'SEARCH') {
      if (this.categoryList.indexOf('SEARCH') != -1) {
        this.categoryList.splice(this.categoryList.indexOf('SEARCH'), 1)
      }
    }
    this.currentCategory = newCategory
    this.currentBrand = 'ALL'
    this.changeCategoryFilter()
  }
  changeBrand(newBrand) {
    this.currentBrand = newBrand
    this.changeBrandFilter()
  }
  changeSize(newSize: any) {
    this.productDetail.sizeChosen = newSize
  }
  changeQuantity(type?: any) {
    if (type == 'ADD') {
      this.productDetail.quantity += 1
    } else {
      this.productDetail.quantity -= 1
    }
    this.productDetail.price = this.productDetail.size[this.productDetail.sizeChosen].price * this.productDetail.quantity
  }

  changeCategoryFilter() {
    if (this.currentCategory == 'ALL') {
      this.productListFilter = [...this.productList]
    } else if (this.currentCategory == 'FAVORITE') {
      this.loadCategoryFilterData('views', 'DESC', false, true)
    } else if (this.currentCategory == 'MEN') {
      this.loadCategoryFilterData('gender', 'MEN')
    } else if (this.currentCategory == 'WOMEN') {
      this.loadCategoryFilterData('gender', 'WOMEN')
    } else if (this.currentCategory == 'SEARCH') {
      this.loadCategoryFilterData('name', this.searchContent, true)
    }
    this.tempBrandSearch = [...this.productListFilter]
    this.loadBrandList()
  }
  changeBrandFilter() {
    this.productListFilter = []
    if (this.currentBrand == 'ALL') {
      return this.productListFilter = [...this.tempBrandSearch]
    } else {
      for (let product of this.tempBrandSearch) {
        if (this.currentBrand == product.brand) this.productListFilter.push(product)
      }
      console.log(this.productListFilter)
    }
  }
  searchName(event: any) {
    if (this.autoSearch) {
      clearTimeout(this.autoSearch)
    }
    if (event.keyCode == 13) {
      this.searchContent = event.target.value
      if (this.categoryList.indexOf('SEARCH') == -1) {
        this.categoryList.push('SEARCH')
      }
      this.changeCategory('SEARCH')
    } else {
      this.autoSearch = setTimeout(() => {
        this.searchContent = event.target.value
        if (this.categoryList.indexOf('SEARCH') == -1) {
          this.categoryList.push('SEARCH')
        }
        this.changeCategory('SEARCH')
        console.log(1)
      }, 1500);
    }
  }

  loadCategoryFilterData(field: any, condition: any, isInclude?: boolean, isSort?: boolean) {
    this.productListFilter = []
    for (let product of this.productList) {
      if (isInclude) {
        if (product[field].toLowerCase().includes(this.searchContent.toLowerCase())) {
          this.productListFilter.push(product)
        }
      } else if (isSort) {
        this.productListFilter = [...this.productList]
        if (condition == 'DESC') {
          this.productListFilter.sort((a, b) => b[field] - a[field])
        } else {
          this.productListFilter.sort((a, b) => a[field] - b[field])
        }
      } else {
        if (product[field] == condition) {
          this.productListFilter.push(product)
        }
      }
    }
  }
  loadBrandList() {
    this.brandList = ['ALL']
    for (let product of this.productListFilter) {
      if (this.brandList.indexOf(product.brand) == -1) {
        this.brandList.push(product.brand)
      }
    }
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
  addProductToCart(productInfo: any) {
    let productEntity = { ...productInfo }
    for (let product of this.productChosenList) {
      if (product.id == productEntity.id) {
        productEntity.quantity ? product.quantity = productEntity.quantity : product.quantity += 1
        product.sizeChosen = productEntity.sizeChosen || 'small'      
        product.price = product.size[product.sizeChosen].price * product.quantity
        this.checkProductChosen()
        this.showProductDetailModal = false
        return
      }
    }
    productEntity.quantity = productEntity.quantity || 1
    productEntity.sizeChosen = productEntity.sizeChosen || 'small'
    productEntity.price = productEntity.price || productEntity.size.small.price
    this.productChosenList.push(productEntity)    
    this.checkProductChosen()
    this.showProductDetailModal = false
  }
  checkProductChosen() {
    this.totalPrice = 0
    for (let product of this.productChosenList) {
      this.totalPrice += product.price
    }
  }
}
