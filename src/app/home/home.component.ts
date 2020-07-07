import { Component, ViewEncapsulation } from '@angular/core';

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
  productList = [
    {
      id: 1,
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing.",      
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita, hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam, consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint. ",
      gender: 'MEN',
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
  productChosenList = []


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
  horizontalScroll(event: any, isButtonSearch?: boolean) {
    event.preventDefault()
    if (isButtonSearch) {
      event.deltaY > 0 ? event.target.parentElement.scrollLeft += 10 : event.target.parentElement.scrollLeft -= 10
    } else {
      event.deltaY > 0 ? event.target.scrollLeft += 10 : event.target.scrollLeft -= 10
    }
  }
  addProductToCart(productInfo: any, quantity?: any, size?: any) {    
    let productEntity = {...productInfo}
    productEntity.quantity = quantity || 1
    productEntity.sizeChosen = size || productInfo.size.small
    this.productChosenList.push(productEntity)
    this.totalPrice += productEntity.quantity * productEntity.sizeChosen.price
  }
}
