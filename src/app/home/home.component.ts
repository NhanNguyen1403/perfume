import { Component } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  categoryList = ['ALL', 'FAVORITE', 'MEN', 'WOMEN', 'ABOUT US']
  brandList = ['ALL', 'MONT BLANC', 'DIOR', 'GUCCI', 'CHANEL', 'TOM FORD', 'LE LABO']
  currentCategory = 'ALL'
  currentBrand = 'ALL'
  searchContent = ''
  totalPrice = 0
  autoSearch: any
  showMobileCategory = false
  productList = [
    {
      id: 1,
      name: "Mont Blance Explorer",
      description: `Montblanc is a well-known company in the field of writing pens and luxury goods. Founded in 1908 by clerical cleric Claus-Johannes Voss, banker Alfred Nehemias and engineer August Eberstein, the startup as Simplo Filler Pen, manufactures and sells high-quality pens. grant in Hamburg. The company later changed its name to Montblanc, which was inspired by Mont Blanc, the highest mountain in the Alps. Dunhill acquired a majority stake in Montblanc in the 1970s and was later acquired by Richemont Group, supplying Montblanc products along with other luxury brands such as Catier and Van Cleef & Arpels. Richemont's ownership has allowed Montblanc to expand into other items such as jewelry, watches and fragrances. Fragrances are now an important part of the product, with the first female perfume introduced in 2001, and the male fragrance launched in 2005 with the pen of the same name Starwalker and the bronze collection. Hunan Timewalker. Montblanc fragrances are produced in conjunction with Inter parfums Inc.`,
      gender: 'MEN',
      views: 10,
      brand: 'MONT BLANC',
      size: {
        large: {
          quantity: 100,
          price: 899
        },
        medium: {
          quantity: 50,
          price: 399
        },
        small: {
          quantity: 25,
          price: 199
        }
      },
      photos: {
        banner: '../../assets/img/montblanc/explorer/banner.jpg',
        large: [
          '../../assets/img/montblanc/explorer/1.png',
          '../../assets/img/montblanc/explorer/2.png',
          '../../assets/img/montblanc/explorer/3.png',
        ],
        medium: [
          '../../assets/img/montblanc/explorer/1.png',
          '../../assets/img/montblanc/explorer/2.png',
          '../../assets/img/montblanc/explorer/3.png',
        ],
        small: [
          '../../assets/img/montblanc/explorer/1.png',
          '../../assets/img/montblanc/explorer/2.png',
          '../../assets/img/montblanc/explorer/3.png',
        ]
      },
    },
    {
      id: 2,
      name: "Mont Blanc Legend",
      description: `Mont Blanc Legend perfume was created by expert Olivier Pescheux, with the main message is a harmonious combination between classical and modern, towards strong, courageous, confident, passionate people. and ambition. Legend is a refreshing and pleasant scent for the summer, starting with Orange Bergamot, Lavender and some pineapple. The second incense note makes people often associate with the cool, dynamic office space of the workplace, with the scent of Caumarin, Mossy Oak hidden under the scent of Red Apple and Dried Fruit. Legend ends with Sandalwood and Tonka Beans, the "clean" smell of a man who has just shaved, showered to start a new day. If you wear Mont Blanc Legend in the summer, the heat will not make it difficult for you, only the surrounding girls can make it difficult for you.`,
      gender: 'MEN',
      views: 30,
      brand: 'MONT BLANC',
      size: {
        large: {
          quantity: 100,
          price: 899
        },
        medium: {
          quantity: 50,
          price: 449
        },
        small: {
          quantity: 25,
          price: 199
        }
      },
      photos: {
        banner: '../../assets/img/montblanc/legend/banner.png',
        large: [
          '../../assets/img/montblanc/legend/1.png',
          '../../assets/img/montblanc/legend/2.png',
        ],
        medium: [
          '../../assets/img/montblanc/legend/1.png',
          '../../assets/img/montblanc/legend/2.png',
        ],
        small: [
          '../../assets/img/montblanc/legend/1.png',
          '../../assets/img/montblanc/legend/2.png',
        ]
      },
    },
    {
      id: 3,
      name: "Tom Ford Ombré Leather",
      description: `Tom Ford Ombré Leather, I would have to put this perfume bottle in a group with fragrances like Montale Intense Cafe or Ultra Male by Jean Paul Gaultier, simply because these scents remind me of Bad Boy and Bad. Girl Tom Ford Ombré Leather was created for both men and women, and it was also created to make the user himself seduce others with a clear "flesh" scent. Cardamom is the scent of intimacy, warmth, but in the Ombré Leather there is also an intersection of the smell of Leather, the rush of someone's breath on the opponent's neck, stroking and inviting everyone. senses arise. It is not wrong to call this scent sexy, but it is not entirely verbal enough, Tom Ford Ombré Leather is really sexy and attractive, but remember it still has the scent of the word " Bad "too, spoiled and naked, but too forceful and provocative. I still remember the first time I tried Ombré Leather on a small perfume shop in Texas, where I used to live in the US, it was a summer afternoon, the weather was quite humid after a shower. The girl who walked into the store about 10 minutes after me constantly approached me with a question: "What is the scent you are using, can I know what it is?" I talked and went to dinner with her a few times, and only a few times, because you never forget Tom Ford Ombré Leather is a real Bad guy
      `,
      gender: 'MEN',
      views: 20,
      brand: 'TOM FORD',
      size: {
        large: {
          quantity: 100,
          price: 999
        },
        medium: {
          quantity: 50,
          price: 499
        },
        small: {
          quantity: 25,
          price: 299
        }
      },
      photos: {
        banner: '../../assets/img/tomford/ombre/banner.png',
        large: [
          '../../assets/img/tomford/ombre/1.png',
          '../../assets/img/tomford/ombre/2.png',
          '../../assets/img/tomford/ombre/3.png',
        ],
        medium: [
          '../../assets/img/tomford/ombre/1.png',
          '../../assets/img/tomford/ombre/2.png',
          '../../assets/img/tomford/ombre/3.png',
        ],
        small: [
          '../../assets/img/tomford/ombre/1.png',
          '../../assets/img/tomford/ombre/2.png',
          '../../assets/img/tomford/ombre/3.png',
        ]
      },
    },
    {
      id: 4,
      name: "Tom Ford Noir Extreme",
      description: `Charismatic, urbane, and sophisticated, TOM FORD Noir Extreme opens on a devastatingly rich blend of spicy heat and glowing citrus. Dextrous brushstrokes of mandarin oil and neroli oil North Africa orpur provide sharp contrast to the vibrant, synergistic blend of saffron, cardamom and nutmeg. At the heart of the fragrance is tantalizing Indian kulfi—an accord inspired by the ancient royal concoction prepared for 16th century Mughal emperors. This milky creation, which traditionally consists of Himalayan snow combined with hints of pistachio, is delivered unexpectedly into the core of the fragrance via lentisque resinoid, which is chosen for its crisp, cool, yet lactonic effect. an array of floral notes—rose absolute, jasmine accord and orange flower—radiate like rare gems on virgin snow. A woody, amber-drenched impact defines the dry down, where an extreme amber dosage silhouettes the other background notes like dusky sunlight. This addictive amber cushion is studded with elegant sandalwood and a melting vanilla ember, enigmatically sustaining the gem-hard masculine fire.
      `,
      gender: 'MEN',
      views: 50,
      brand: 'TOM FORD',
      size: {
        large: {
          quantity: 100,
          price: 999
        },
        medium: {
          quantity: 50,
          price: 499
        },
        small: {
          quantity: 25,
          price: 299
        }
      },
      photos: {
        banner: '',
        large: [
          '../../assets/img/tomford/noir/1.png',
          '../../assets/img/tomford/noir/2.png',
        ],
        medium: [
          '../../assets/img/tomford/noir/1.png',
          '../../assets/img/tomford/noir/2.png',
        ],
        small: [
          '../../assets/img/tomford/noir/1.png',
          '../../assets/img/tomford/noir/2.png',
        ]
      },
    },
    {
      id: 5,
      name: "Le Labo Santal 33",
      description: `Le Labo Santal 33 perfume is a fragrance of fragrant wooden fragrance for both men and women and was introduced in 2011. The designer of this fragrance is Frank Voelkl. Inspired by Santal 26, one of the lesser-known scents, a scent suitable for both men and women. Santal 33 aims to convey the legend of cowboys: vast lands, hot desert winds, sun saddles, and smoke emanating from the bonfire at night.

      A fragrance can shake the sensual side and fascinate the senses of man as well as of woman. The fragrance uses cardamom, iris, ambroxan to beautify smoked woody notes of Australian sandalwood, papyrus, and cedar, giving them a pungent, mingled flavor. leather flavor. The combination of the above aromas gives a unique unisex aroma and charismatic collection.
      
      You will recognize the distinctive bottle design of the Le Labo brand with the shape of a chemical bottle in laboratories.
      
      This is a scent filled with fun and addictive, it will create an atmosphere like the wild west wherever you go. The perfume is very concentrated and will definitely fragrance for a long time on your skin and clothes.`,
      gender: 'WOMEN MEN',
      views: 40,
      brand: 'LE LABO',
      size: {
        large: {
          quantity: 100,
          price: 2499
        },
        medium: {
          quantity: 50,
          price: 1999
        },
        small: {
          quantity: 25,
          price: 999
        }
      },
      photos: {
        banner: '',
        large: [
          '../../assets/img/lelabo/33/1.png',
          '../../assets/img/lelabo/33/2.png',
        ],
        medium: [
          '../../assets/img/lelabo/33/1.png',
          '../../assets/img/lelabo/33/2.png',
        ],
        small: [
          '../../assets/img/lelabo/33/1.png',
          '../../assets/img/lelabo/33/2.png',
        ]
      },
    },
    {
      id: 6,
      name: "Le Labo Another 13",
      description: `Another Le Labo 13 where the senses allow you to clearly visualize a pristine wooden forest, with its vast, hard-bodied trees giving off an alluring fragrance. The smooth connection from the rich forest named La Labo has successfully portrayed a luxurious and classy style, so that your movements become enchanting and ready to stimulate the opponent.
      Another Le Labo 13 has the Iso E Super fragrance note, which brings the typical breath of cedar wood, but you will be surprised because the fragrance of the wood is so gentle, neutral, enough for the olfactory cells to average. Relax and enjoy the delicacy of the scent. In this fragrance, you also encounter a sense of clarity and closeness because Amyl Salicylate has silently stored scent from peppermint leaves, fading on the skin. The elegant sweetness of Musk and Long Dien Huong, combined with the purity and freshness of the Pear, cleverly intertwined, creating a unique scent.`,
      gender: 'WOMEN MEN',
      views: 70,
      brand: 'LE LABO',
      size: {
        large: {
          quantity: 100,
          price: 2999
        },
        medium: {
          quantity: 50,
          price: 1999
        },
        small: {
          quantity: 25,
          price: 999
        }
      },
      photos: {
        banner: '',
        large: [
          '../../assets/img/lelabo/13/1.png',
          '../../assets/img/lelabo/13/2.png',
          '../../assets/img/lelabo/13/3.png',
        ],
        medium: [
          '../../assets/img/lelabo/13/1.png',
          '../../assets/img/lelabo/13/2.png',
          '../../assets/img/lelabo/13/3.png',
        ],
        small: [
          '../../assets/img/lelabo/13/1.png',
          '../../assets/img/lelabo/13/2.png',
          '../../assets/img/lelabo/13/3.png',
        ]
      },
    },
    {
      id: 7,
      name: "Gucci Bloom Acqua Di Fiori",
      description: `Gucci has launched a new fragrance 'Bloom Acqua di Fiori' for women in 2018. Bloom Acqua di Fiori is positioned as a perfume that expresses the energy and vitality of youth and love. friend. It has a fresh and green aroma, emphasizing innocent beauty in white.

      The fragrance blooms like a flower garden. The top note is a combination of galbanum and sour leaves to create a unique and strange first impression. Jasmine, Tuberose tuberose, honeysuckle flower are sweet trio that make life for the center of incense. The base notes are familiar, but mature, musk and sandalwood. The notes huddled together create an intense emotion for the spirit.
      
      Spring is a good time to use the fragrance when you are at a time of refreshment and freshness.
      
      Alessandro Michele, creative director for Gucci wants to give women a floral fragrance is so delicate and full of sweetness. He believes that beautiful and colorful women like flowers!`,
      gender: 'WOMEN',
      views: 60,
      brand: 'GUCCI',
      size: {
        large: {
          quantity: 100,
          price: 999
        },
        medium: {
          quantity: 50,
          price: 499
        },
        small: {
          quantity: 25,
          price: 199
        }
      },
      photos: {
        banner: '',
        large: [
          '../../assets/img/gucci/bloom/1.png',
          '../../assets/img/gucci/bloom/2.png',
        ],
        medium: [
          '../../assets/img/gucci/bloom/1.png',
          '../../assets/img/gucci/bloom/2.png',
        ],
        small: [
          '../../assets/img/gucci/bloom/1.png',
          '../../assets/img/gucci/bloom/2.png',
        ]
      },
    },
    {
      id: 8,
      name: "Gucci Guilty Intense Pour Homme EDT",
      description: `The opening fragrance of Gucci Guilty Intense Pour Homme captures all your senses with the passionate and tender aroma of Almafi lemon and vivid lavender, interwoven with the bitter note of coriander. The fragrance is refined to appeal as an invitation.

      A stimulating and dreamy orange blossom with the surprisingly masculine neroli essential oil of Gucci Guilty Intense creates. Gucci-inspired patchouli has reached a new level when combined with the aroma of dry amber, leaving a passionate aroma with a bit of earthy and magical cedarwood. sensual.`,
      gender: 'MEN',
      views: 90,
      brand: 'GUCCI',
      size: {
        large: {
          quantity: 100,
          price: 999
        },
        medium: {
          quantity: 50,
          price: 499
        },
        small: {
          quantity: 25,
          price: 199
        }
      },
      photos: {
        banner: '',
        large: [
          '../../assets/img/gucci/guilty/1.png',
          '../../assets/img/gucci/guilty/2.png',
        ],
        medium: [
          '../../assets/img/gucci/guilty/1.png',
          '../../assets/img/gucci/guilty/2.png',
        ],
        small: [
          '../../assets/img/gucci/guilty/1.png',
          '../../assets/img/gucci/guilty/2.png',
        ]
      },
    },
    {
      id: 9,
      name: "Dior Sauvage Eau de Toilette",
      description: `Love it or hate it, then for a lot of people, Dior Sauvage has always been recognized as a classic perfume bottle of the 21st century. If you compare the coverage of Sauvage and look at its release year, the end "2015", you will surely be surprised at the scary popularity of this talented man with many disabilities. People often compare the popularity between the Sauvage of the Dior family and the Chanel Bleu de Chanel, to see who is the stronger, but in the end, it is the 8 who weigh less than half a pound. Rated as a manly, Dior Sauvage carries with him the scent of swag, strong and murderous. As the representative of this perfume bottle, Johnny Depp, the most beloved pirate of all time. Originally Dior Sauvage was like that, with disabilities, Bad boy but everyone loved and obeyed. Francois Demachy, creator of Dior Sauvage cleverly blends Cam Bergamot and Ambroxan fragrance, creating a refreshing green space of the sky, with the strength and warmth of black pepper and Cedarwood, Dior Sauvage become charismatic with no stops. End of a meeting with clever jokes mixed with luxurious, romantic atmosphere of Lavender flowers, all eyes will only turn to this Dior Sauvage guy.`,
      gender: 'MEN',
      views: 80,
      brand: 'DIOR',
      size: {
        large: {
          quantity: 100,
          price: 1999
        },
        medium: {
          quantity: 50,
          price: 1099
        },
        small: {
          quantity: 25,
          price: 399
        }
      },
      photos: {
        banner: '',
        large: [
          '../../assets/img/dior/white/1.png',
          '../../assets/img/dior/white/2.png',
        ],
        medium: [
          '../../assets/img/dior/white/1.png',
          '../../assets/img/dior/white/2.png',
        ],
        small: [
          '../../assets/img/dior/white/1.png',
          '../../assets/img/dior/white/2.png',
        ]
      },
    },
    {
      id: 10,
      name: "Dior Sauvage Eau de Parfum",
      description: `Launched in 2018 - not long after the resounding success of Christian Dior Sauvage EDT - Dior Sauvage EDP comes with improvements in the scent, blending more emotionally for users.

      Inspired by the wildest scenes, Dior Sauvage EDP encapsulates the aroma of spicy, rustic but genuine in itself. Starting with the refreshing Lime, Dior Sauvage EDP does not simply stop there, but meticulously leads us to the enchanting second floor with Lavender, Pepper and Nutmeg.
      
      Like a rough gem, Dior Sauvage EDP shines on a wild charm that is fringed with floral scent, cleverly combined with a little pungency, sweetness of spice, creating a manly and mature personality.
      
      As if bringing us back to the days of camping on the road, the night campfire flared up a little split with purple streaks, Dior Sauvage EDP rekindled us curiosity, excitement and more or less complete satisfaction. enjoy, be conquered, love yourself in every moment.
      
      Ambroxan and Vanilla gently stroked the sense of smell with a gentle, inviting appeal, just like melted marshmallows, Dior Sauvage EDP after the cover is still a considerate guy with a soft, soft, sweet finish. attachment.`,
      gender: 'MEN',
      views: 110,
      brand: 'DIOR',
      size: {
        large: {
          quantity: 100,
          price: 1999
        },
        medium: {
          quantity: 50,
          price: 1099
        },
        small: {
          quantity: 25,
          price: 399
        }
      },
      photos: {
        banner: '',
        large: [
          '../../assets/img/dior/brown/1.png',
          '../../assets/img/dior/brown/2.png',
        ],
        medium: [
          '../../assets/img/dior/brown/1.png',
          '../../assets/img/dior/brown/2.png',
        ],
        small: [
          '../../assets/img/dior/brown/1.png',
          '../../assets/img/dior/brown/2.png',
        ]
      },
    },
    {
      id: 11,
      name: "Chanel Chance Eau Vive",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
    Dolorem officiis incidunt tenetur ipsa velit id voluptates non alias laudantium molestiae rerum, similique enim iusto? Non veniam similique expedita. 
    
    hic nulla ipsam fugit ab ipsum alias perspiciatis repellat molestiae provident architecto tempore minima odio? Quibusdam maiores eos provident, aperiam dolorum asperiores eius officia! Libero deleniti nam. 
    
    consequuntur voluptatum dolorum soluta ullam dicta alias eaque assumenda saepe architecto dignissimos totam, repudiandae necessitatibus iusto. Doloribus fugiat dignissimos nulla soluta unde dolor neque sint.`,
      gender: 'WOMEN',
      views: 100,
      brand: 'CHANEL',
      size: {
        large: {
          quantity: 100,
          price: 1099
        },
        medium: {
          quantity: 50,
          price: 499
        },
        small: {
          quantity: 25,
          price: 149
        }
      },
      photos: {
        banner: '',
        large: [
          '../../assets/img/chanel/auvive/1.png',
          '../../assets/img/chanel/auvive/2.png',
        ],
        medium: [
          '../../assets/img/chanel/auvive/1.png',
          '../../assets/img/chanel/auvive/2.png',
        ],
        small: [
          '../../assets/img/chanel/auvive/1.png',
          '../../assets/img/chanel/auvive/2.png',
        ]
      },
    },
    {
      id: 12,
      name: "Chanel Coco Mademoiselle Intense",
      description: `Chanel's COCO MADEMOISELLE Eau de Parfum Intense is inspired by women who like to be free, confident and bold in expressing their emotions, but still have the charm and attraction of their opponents. unpredictable way. COCO MADEMOISELLE Intense belongs to the oriental fragrance group, with the main notes being patchouli, Calabrian bergamot and Sicili orange. Fresh, energetic but no less attractive with a fruity aroma blended with Tonka Beans and the sweetness of Madagascar Vanilla. CHANEL COCO MADEMOISELLE Intense is the tempting rebellion of stylish girls who always want to be themselves.`,
      gender: 'WOMEN',
      views: 130,
      brand: 'CHANEL',
      size: {
        large: {
          quantity: 100,
          price: 1099
        },
        medium: {
          quantity: 50,
          price: 499
        },
        small: {
          quantity: 25,
          price: 149
        }
      },
      photos: {
        banner: '',
        large: [
          '../../assets/img/chanel/cocomademoise/1.png',
          '../../assets/img/chanel/cocomademoise/2.png',
        ],
        medium: [
          '../../assets/img/chanel/cocomademoise/1.png',
          '../../assets/img/chanel/cocomademoise/2.png',
        ],
        small: [
          '../../assets/img/chanel/cocomademoise/1.png',
          '../../assets/img/chanel/cocomademoise/2.png',
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
  bannerList = [
    {
      id: 1,
      name: "Mont Blance Explorer",
      description: `Montblanc is a well-known company in the field of writing pens and luxury goods. Founded in 1908 by clerical cleric Claus-Johannes Voss, banker Alfred Nehemias and engineer August Eberstein, the startup as Simplo Filler Pen, manufactures and sells high-quality pens. grant in Hamburg. The company later changed its name to Montblanc, which was inspired by Mont Blanc, the highest mountain in the Alps. Dunhill acquired a majority stake in Montblanc in the 1970s and was later acquired by Richemont Group, supplying Montblanc products along with other luxury brands such as Catier and Van Cleef & Arpels. Richemont's ownership has allowed Montblanc to expand into other items such as jewelry, watches and fragrances. Fragrances are now an important part of the product, with the first female perfume introduced in 2001, and the male fragrance launched in 2005 with the pen of the same name Starwalker and the bronze collection. Hunan Timewalker. Montblanc fragrances are produced in conjunction with Inter parfums Inc.`,
      gender: 'MEN',
      views: 10,
      brand: 'MONT BLANC',
      size: {
        large: {
          quantity: 100,
          price: 899
        },
        medium: {
          quantity: 50,
          price: 399
        },
        small: {
          quantity: 25,
          price: 199
        }
      },
      photos: {
        banner: '../../assets/img/montblanc/explorer/banner.jpg',
        large: [
          '../../assets/img/montblanc/explorer/1.png',
          '../../assets/img/montblanc/explorer/2.png',
          '../../assets/img/montblanc/explorer/3.png',
        ],
        medium: [
          '../../assets/img/montblanc/explorer/1.png',
          '../../assets/img/montblanc/explorer/2.png',
          '../../assets/img/montblanc/explorer/3.png',
        ],
        small: [
          '../../assets/img/montblanc/explorer/1.png',
          '../../assets/img/montblanc/explorer/2.png',
          '../../assets/img/montblanc/explorer/3.png',
        ]
      },
    },
    {
      id: 2,
      name: "Mont Blanc Legend",
      description: `Mont Blanc Legend perfume was created by expert Olivier Pescheux, with the main message is a harmonious combination between classical and modern, towards strong, courageous, confident, passionate people. and ambition. Legend is a refreshing and pleasant scent for the summer, starting with Orange Bergamot, Lavender and some pineapple. The second incense note makes people often associate with the cool, dynamic office space of the workplace, with the scent of Caumarin, Mossy Oak hidden under the scent of Red Apple and Dried Fruit. Legend ends with Sandalwood and Tonka Beans, the "clean" smell of a man who has just shaved, showered to start a new day. If you wear Mont Blanc Legend in the summer, the heat will not make it difficult for you, only the surrounding girls can make it difficult for you.`,
      gender: 'MEN',
      views: 30,
      brand: 'MONT BLANC',
      size: {
        large: {
          quantity: 100,
          price: 899
        },
        medium: {
          quantity: 50,
          price: 449
        },
        small: {
          quantity: 25,
          price: 199
        }
      },
      photos: {
        banner: '../../assets/img/montblanc/legend/banner.jpg',
        large: [
          '../../assets/img/montblanc/legend/1.png',
          '../../assets/img/montblanc/legend/2.png',
        ],
        medium: [
          '../../assets/img/montblanc/legend/1.png',
          '../../assets/img/montblanc/legend/2.png',
        ],
        small: [
          '../../assets/img/montblanc/legend/1.png',
          '../../assets/img/montblanc/legend/2.png',
        ]
      },
    },
    {
      id: 3,
      name: "Tom Ford Ombré Leather",
      description: `Tom Ford Ombré Leather, I would have to put this perfume bottle in a group with fragrances like Montale Intense Cafe or Ultra Male by Jean Paul Gaultier, simply because these scents remind me of Bad Boy and Bad. Girl Tom Ford Ombré Leather was created for both men and women, and it was also created to make the user himself seduce others with a clear "flesh" scent. Cardamom is the scent of intimacy, warmth, but in the Ombré Leather there is also an intersection of the smell of Leather, the rush of someone's breath on the opponent's neck, stroking and inviting everyone. senses arise. It is not wrong to call this scent sexy, but it is not entirely verbal enough, Tom Ford Ombré Leather is really sexy and attractive, but remember it still has the scent of the word " Bad "too, spoiled and naked, but too forceful and provocative. I still remember the first time I tried Ombré Leather on a small perfume shop in Texas, where I used to live in the US, it was a summer afternoon, the weather was quite humid after a shower. The girl who walked into the store about 10 minutes after me constantly approached me with a question: "What is the scent you are using, can I know what it is?" I talked and went to dinner with her a few times, and only a few times, because you never forget Tom Ford Ombré Leather is a real Bad guy
      `,
      gender: 'MEN',
      views: 20,
      brand: 'TOM FORD',
      size: {
        large: {
          quantity: 100,
          price: 999
        },
        medium: {
          quantity: 50,
          price: 499
        },
        small: {
          quantity: 25,
          price: 299
        }
      },
      photos: {
        banner: '../../assets/img/tomford/ombre/banner.png',
        large: [
          '../../assets/img/tomford/ombre/1.png',
          '../../assets/img/tomford/ombre/2.png',
          '../../assets/img/tomford/ombre/3.png',
        ],
        medium: [
          '../../assets/img/tomford/ombre/1.png',
          '../../assets/img/tomford/ombre/2.png',
          '../../assets/img/tomford/ombre/3.png',
        ],
        small: [
          '../../assets/img/tomford/ombre/1.png',
          '../../assets/img/tomford/ombre/2.png',
          '../../assets/img/tomford/ombre/3.png',
        ]
      },
    },
  ]
  currentBanner = 0
  bannerInterval = setInterval(() => {this.changeBanner()}, 5000)

  
  toggleMobileCategory() {
    this.showMobileCategory = !this.showMobileCategory
  }

  toggleModal(product?: any, isProductChosen?: boolean) {
    if (product) {
      if (isProductChosen) {
        this.productDetail = { ...product }
      } else {
        this.productDetail = {
          ...product,
          sizeChosen: 'small',
          price: product.size.small.price,
          quantity: 1
        }
      }
      this.currentproductDetailPhoto = product.photos.large[0]
    }
    this.showProductDetailModal = !this.showProductDetailModal
  }
  changeBanner(isBack?: boolean) {
    if (isBack) {
      if (this.currentBanner == 0) {
        this.currentBanner = this.bannerList.length - 1
      } else {
        this.currentBanner -= 1
      }
    } else {
      if (this.currentBanner == this.bannerList.length - 1) {
        this.currentBanner = 0
      } else {
        this.currentBanner += 1
      }
    }
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
  changePhoto(photoPath) {
    this.currentproductDetailPhoto = photoPath
  }
  changeQuantity(type?: any) {
    if (type == 'ADD') {
      this.productDetail.quantity += 1
    } else {
      this.productDetail.quantity -= this.productDetail.quantity == 0 ? 0 : 1
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
      if (product.id == productEntity.id && ((productEntity.sizeChosen && product.sizeChosen == productEntity.sizeChosen) || (!productEntity.sizeChosen && product.sizeChosen == 'small'))) {
        productEntity.quantity || productEntity.quantity == 0 ? product.quantity = productEntity.quantity : product.quantity += 1
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
    for (let [index, product] of this.productChosenList.entries()) {
      this.totalPrice += product.price
      if (product.quantity == 0) {
        this.productChosenList.splice(index, 1)
      }
    }
  }
}
