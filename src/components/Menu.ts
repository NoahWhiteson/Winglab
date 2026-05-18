export function createMenu(): string {
  const menuData = [
    {
      category: "Signature Combos",
      items: [
        {
          name: "Lab Box",
          price: "$21.99",
          description: "1 lb Wings, Choice of Regular Fire Fries or Garlic Parmesan Fries, and a Pop",
          popular: true,
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/aa2a534f-bd73-4abd-bb0f-082f72352c26-retina-large.jpg"
        },
        {
          name: "The Vortex",
          price: "$23.99",
          description: "1/2 lb Traditional Wings, your choice of any Burger or Chicken Sandwich, Regular Fire Fries or Garlic Parmesan Fries, and a Pop",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/7870def8-0c2b-4169-86b3-1ecb5edcb57b-retina-large.jpg"
        },
        {
          name: "Nashville Hot Box",
          price: "$23.99",
          description: "1 Nashville Tender, 1 Texas Toast, 1 Nashville Chicken Sandwich, Regular Lab Fries, Pickles, Coleslaw, Lab sauce and a Pop",
          image: "https://tb-static.uber.com/prod/image-proc/processed_images/d6616c0e58a0895c410670f791613287/70aa2a4db7f990373ca9c376323e3dea.jpeg"
        },
        {
          name: "Lab’s Scientific Duo",
          price: "$42.99",
          description: "2 lbs Wings, Large Fire Fries or Garlic Parmesan Fries, and 2 Pops",
          image: "https://tb-static.uber.com/prod/image-proc/processed_images/0967f7d91704895357502fc367a75d7b/70aa2a4db7f990373ca9c376323e3dea.jpeg"
        },
        {
          name: "The Atomicc Feast",
          price: "$94.99",
          description: "3 lbs Wings, 6 Nashville Tenders, 2 Large Sides, and 5 Pops",
          image: "https://tb-static.uber.com/prod/image-proc/processed_images/c446de6f0ad443ddcf18304c63db9033/70aa2a4db7f990373ca9c376323e3dea.jpeg"
        }
      ]
    },
    {
      category: "Just Wings",
      items: [
        {
          name: "1 LB Wings",
          price: "$21.99",
          description: "A pound of juicy wings waiting to be devoured.",
          popular: true,
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/d03af714-91ad-4685-b964-225546d033ce-retina-large.png"
        },
        {
          name: "2 LB Wings",
          price: "$30.99",
          description: "2 pounds of juicy wings waiting to be devoured.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/77650a3b-fe68-48bc-a8ae-b3e3ec00b6ba-retina-large.png"
        },
        {
          name: "3 LB Wings",
          price: "$45.99",
          description: "Three pounds of juicy wings.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/89b4dd6a-d1e2-4937-b377-43e617c099c6-retina-large.png"
        },
        {
          name: "4 LB Wings",
          price: "$60.99",
          description: "Four pounds of juicy wings.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/f70a2345-269d-4d78-ad9e-6bbf0a301e73-retina-large.png"
        },
        {
          name: "5 LB Wings",
          price: "$74.99",
          description: "A generous serving of chicken wings.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/1b99cd85-17b5-41f4-b899-cbbbec611f80-retina-large.png"
        }
      ]
    },
    {
      category: "Tenders",
      items: [
        {
          name: "Original Tenders",
          price: "$15.99",
          description: "3 crispy chicken tenders served with Lab sauce, Texas toast, pickles, and coleslaw.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/6bdcbddd-a489-4167-ad01-0170f4e2eca2-retina-large.jpg",
          combo: {
            price: "$20.99",
            description: "3 crispy chicken tenders served with Lab sauce, Texas toast, pickles, coleslaw, classic fries and your choice of pop."
          }
        },
        {
          name: "Nashville Tenders",
          price: "$15.99",
          description: "3 crispy Nashville chicken tenders served with Lab sauce, Texas toast, pickles, and coleslaw.",
          popular: true,
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/22df8d42-405b-4fce-b7cc-aa91d9c65382-retina-large.jpg",
          combo: {
            price: "$20.99",
            description: "3 crispy Nashville chicken tenders served with Lab sauce, Texas toast, pickles, coleslaw, classic fries and your choice of pop."
          }
        }
      ]
    },
    {
      category: "Burgers & Sandwiches",
      items: [
        {
          name: "The Lab Burger",
          price: "$8.99",
          description: "3 oz smashed patty with American cheese, lettuce, tomato, pickles, and burger sauce, served on a potato bun.",
          image: "https://tb-static.uber.com/prod/image-proc/processed_images/79849de90a7f8cba86c7c5dbc7e84a21/70aa2a4db7f990373ca9c376323e3dea.jpeg",
          combo: {
            price: "$13.99",
            description: "3 oz smashed patty with American cheese, lettuce, tomato, pickles, and burger sauce, served on a potato bun with classic fries and your choice of pop."
          }
        },
        {
          name: "OG Cheeseburger",
          price: "$8.99",
          description: "3 oz smashed patty with American cheese, sliced onions, pickles, ketchup, and mustard, served on a potato bun.",
          image: "https://tb-static.uber.com/prod/image-proc/processed_images/340b1a193322dfe2effeaa3d226333bb/70aa2a4db7f990373ca9c376323e3dea.jpeg",
          combo: {
            price: "$13.99",
            description: "3 oz smashed patty with American cheese, sliced onions, pickles, ketchup, and mustard, served on a potato bun with classic fries and your choice of pop."
          }
        },
        {
          name: "Oklahoma Burger",
          price: "$8.99",
          description: "3 oz smashed patty with American cheese, grilled onions, pickles, and burger sauce, served on a potato bun.",
          image: "https://tb-static.uber.com/prod/image-proc/processed_images/2483a225366d981fb1179b1d9a53eb8f/70aa2a4db7f990373ca9c376323e3dea.jpeg",
          combo: {
            price: "$13.99",
            description: "3 oz smashed patty with American cheese, grilled onions, pickles, and burger sauce, served on a potato bun with classic fries and your choice of pop."
          }
        },
        {
          name: "OG Sando",
          price: "$9.99",
          description: "Crispy fried chicken with lettuce, tomato, Lab sauce, and pickles on a brioche bun.",
          image: "https://tb-static.uber.com/prod/image-proc/processed_images/4be5ea3a89b68a327153564c89b7f8d9/70aa2a4db7f990373ca9c376323e3dea.jpeg",
          combo: {
            price: "$14.99",
            description: "Crispy fried chicken with lettuce, tomato, Lab sauce, and pickles on a brioche bun served with classic fries and your choice of pop."
          }
        },
        {
          name: "Hot Honey Sando",
          price: "$9.99",
          description: "Crispy fried chicken tossed in our Hot Honey sauce, with coleslaw, spicy aioli, and pickles on a brioche bun.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/17aa98cf-7a9e-4e3a-9bcc-76c68b0706ca-retina-large.jpg",
          combo: {
            price: "$14.99",
            description: "Crispy fried chicken tossed in our Hot Honey sauce, with coleslaw, spicy aioli, and pickles on a brioche bun served with classic fries and your choice of pop."
          }
        },
        {
          name: "Nashville Sando",
          price: "$9.99",
          description: "Crispy fried chicken dipped in our Nashville oil, dusted with your choice of spice level, topped with coleslaw, Lab sauce, and pickles on a brioche bun.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/0bb24197-eb8f-4927-b51e-efec13051a2f-retina-large.jpg",
          combo: {
            price: "$14.99",
            description: "Crispy fried chicken dipped in our Nashville oil, dusted with your choice of spice level, topped with coleslaw, Lab sauce, and pickles on a brioche bun served with classic fries and your choice of pop."
          }
        }
      ]
    },
    {
      category: "Fries",
      items: [
        {
          name: "Classic Fries",
          price: "$7.99",
          description: "Golden and crispy, our classic skin-on fries served with ketchup.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/a301ccbf-2c35-4276-b6f5-28a6e097bddb-retina-large.jpg"
        },
        {
          name: "Fire Fries",
          price: "$7.99",
          description: "Crispy, golden fries topped with buttermilk ranch, red onions, chillies, and roasted garlic seasoning.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/99817a54-a504-4a17-8b95-619dbbe853de-retina-large.jpg"
        },
        {
          name: "Sweet Potato Fries",
          price: "$7.99",
          description: "Sweet and savoury sweet potato fries served with spicy aioli.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/b248a7f3-df08-44ad-93f2-b11236e42102-retina-large.jpg"
        },
        {
          name: "Garlic Parmesan Fries",
          price: "$7.99",
          description: "Crispy, golden fries topped with garlic dressing, roasted garlic aioli, grated Parmesan cheese, and roasted garlic seasoning.",
          image: "https://tb-static.uber.com/prod/image-proc/processed_images/19b5f8fc5ca051ea8963798c2dd019a7/70aa2a4db7f990373ca9c376323e3dea.jpeg"
        }
      ]
    },
    {
      category: "Poutine",
      items: [
        {
          name: "Traditional Poutine",
          price: "$7.99",
          description: "Crispy, golden fries topped with fresh, squeaky cheese curds and vegetarian gravy.",
          popular: true,
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/659c16c2-7f36-4952-93de-39d44d197748-retina-large.jpg"
        },
        {
          name: "Buffalo Parm Poutine",
          price: "$10.99",
          description: "Crispy fries topped with cheese curds, gravy, buffalo sauce, and parmesan.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/74dc6786-4e06-4018-842d-bca053f26834-retina-large.jpg"
        },
        {
          name: "Garlic Parm Poutine",
          price: "$10.99",
          description: "Crispy fries topped with cheese curds, gravy, and garlic parmesan seasoning.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/f968fce4-18ff-40a1-af4f-5dda91faa5f8-retina-large.jpg"
        }
      ]
    },
    {
      category: "Mac & Cheese",
      items: [
        {
          name: "Classic Mac",
          price: "$7.99",
          description: "Cavatappi pasta in our homemade cheese sauce, topped with shredded cheese and baked until golden.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/5e7572a4-62ba-4da4-ad0d-e77bc323cb26-retina-large.jpg"
        },
        {
          name: "Jerk Chicken Mac",
          price: "$10.99",
          description: "Our classic Mac & Cheese topped with spicy jerk chicken.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/5cbf69a1-f043-45d6-a5e0-52c8f06a340e-retina-large.jpg"
        },
        {
          name: "Buffalo Chicken Mac",
          price: "$10.99",
          description: "Our classic Mac & Cheese topped with crispy buffalo chicken.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/49e5e12c-21e6-4a05-9582-b6f3012be43a-retina-large.jpg"
        },
        {
          name: "Garlic Parm Mac",
          price: "$10.99",
          description: "Our classic Mac & Cheese topped with garlic parmesan seasoning.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/b30548ed-c761-4d58-877c-49d578c67abf-retina-large.jpg"
        }
      ]
    },
    {
      category: "Sides & Dips",
      items: [
        {
          name: "Veggie Sticks",
          price: "$7.99",
          description: "Fresh carrots and celery sticks served with buttermilk ranch.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/d047c250-8db5-44fa-a418-63924a52815e-retina-large.jpg"
        },
        {
          name: "Coleslaw",
          price: "$7.99",
          description: "Crisp, shredded cabbage and carrots tossed in a creamy coleslaw dressing.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/b2386f59-33e8-4c2d-af5f-cc4ef35254c5-retina-large.jpg"
        },
        {
          name: "Onion Rings",
          price: "$7.99",
          description: "Crispy and golden-brown classic onion rings served with ketchup.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/506d3cad-7bfe-49ce-baed-ff74e20ac26a-retina-large.jpg"
        },
        {
          name: "Buttermilk Ranch",
          price: "$2.49",
          description: "Creamy dip with a tangy flavour.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/67232902-1586-42be-8b69-49c24b59dc4f-retina-large.jpg"
        },
        {
          name: "Blue Cheese",
          price: "$2.49",
          description: "Rich and creamy dip with a pungent blue cheese flavour.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/8bf5ff82-93da-4ed8-9c4b-8cc86c30d9e7-retina-large.jpg"
        },
        {
          name: "Lab Sauce",
          price: "$2.49",
          description: "Rich and creamy dip infused with garlic.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/b2a1e9eb-122a-4dc6-a50d-00852b048ab0-retina-large.jpg"
        },
        {
          name: "Spicy Aioli",
          price: "$2.49",
          description: "Spicy and creamy condiment with a kick.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/a2acdea1-afb3-4d66-a38b-fb276bf584f5-retina-large.jpg"
        }
      ]
    },
    {
      category: "Dessert",
      items: [
        {
          name: "NY Cheesecake",
          price: "$7.99",
          description: "Smooth and creamy cheesecake on a classic graham crumb base, topped with powdered sugar, whipped cream, and a fresh strawberry compote.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/8fd6ad8e-efa6-4293-80f3-0fac508a4436-retina-large.jpg"
        },
        {
          name: "Banana Pudding",
          price: "$6.99",
          description: "Vanilla custard topped with fresh bananas, graham cracker crumbs, and cookie crumble."
        }
      ]
    },
    {
      category: "Milkshakes & Beverages",
      items: [
        {
          name: "Vanilla Shake",
          price: "$6.99",
          description: "Classic vanilla milkshake made with rich, premium ice cream, topped with whipped cream and sprinkles",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/b17805e7-8e53-4970-897a-6a04ea29da9d-retina-large.jpg"
        },
        {
          name: "Chocolate Shake",
          price: "$6.99",
          description: "Classic chocolate milkshake blended with our rich, premium ice cream, topped with whipped cream and chocolate syrup.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/7c96f84d-5565-4275-8415-816b70e3fa25-retina-large.jpg"
        },
        {
          name: "Strawberry Shake",
          price: "$6.99",
          description: "Classic strawberry milkshake blended with our rich, premium ice cream, topped with whipped cream and strawberry compote.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/e1d9cec9-fe2e-4e21-8731-3b0e88a82a7e-retina-large.jpg"
        },
        {
          name: "Cookies N Cream Shake",
          price: "$6.99",
          description: "Classic Cookies and Cream milkshake blended with our rich, premium ice cream, topped with whipped cream and Oreo cookie crumbs.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/ab476706-2959-4056-9de1-89243a420f68-retina-large.jpg"
        },
        {
          name: "Mango Shake",
          price: "$6.99",
          description: "Classic mango milkshake blended with our rich, premium ice cream, topped with whipped cream and a drizzle of our mango puree.",
          image: "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/1ff1df55-21ae-4747-9170-9e5c81fea733-retina-large.jpg"
        },
        {
          name: "Pop",
          price: "$2.99",
          description: "Coca-Cola, diet Coke, ginger ale, Sprite, Nestea, crush orange, crush grape, crush cream soda, and root beer.",
          popular: true
        },
        {
          name: "Jarritos",
          price: "$4.99",
          description: "Pineapple, lime, and mandarin."
        },
        {
          name: "Bottled Water",
          price: "$2.49",
          description: "Refreshing and thirst-quenching water."
        }
      ]
    }
  ];

  const half = Math.ceil(menuData.length / 2);
  const leftColumn = menuData.slice(0, half);
  const rightColumn = menuData.slice(half);

  const renderItem = (item: any) => {
    const hasCombo = !!item.combo;
    const defaultPrice = hasCombo ? item.combo.price : item.price;
    const defaultDesc = hasCombo ? item.combo.description : item.description;
    const singlePrice = item.price;
    const singleDesc = item.description;

    return `
      <div class="menu-item ${hasCombo ? 'has-combo' : ''}" 
           ${hasCombo ? `
             data-single-price="${singlePrice}" 
             data-single-desc="${singleDesc}"
             data-combo-price="${item.combo.price}"
             data-combo-desc="${item.combo.description}"
           ` : ''}>
        ${item.popular ? `<span class="popular-badge">POPULAR</span>` : ''}
        <div class="item-header">
          <div class="item-name-group">
            <h4 class="item-name">${item.name}</h4>
            ${hasCombo ? `
              <div class="combo-toggle">
                <button class="toggle-btn active" data-type="combo">Combo</button>
                <button class="toggle-btn" data-type="single">Single</button>
              </div>
            ` : ''}
          </div>
          <span class="item-price">${defaultPrice}</span>
        </div>
        <div class="item-content-wrapper">
          <p class="item-description">${defaultDesc}</p>
          ${item.image ? `<img data-src="${item.image}" alt="${item.name}" class="item-image lazy-menu-image" />` : ''}
        </div>
      </div>
    `;
  };

  return `
    <section class="menu-section" id="menu">
      <div class="menu-container">
        <h2 class="menu-title">OUR MENU</h2>
        
        <div class="menu-columns">
          <div class="menu-column">
            ${leftColumn.map((cat, index) => `
              <div class="menu-category-wrapper" data-category="left-${index}">
                <div class="category-header">
                  <h3 class="category-name">${cat.category}</h3>
                  <i class="fas fa-chevron-down category-icon"></i>
                </div>
                <div class="category-content">
                  <div class="menu-grid">
                    ${cat.items.map(item => renderItem(item)).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div class="menu-column">
            ${rightColumn.map((cat, index) => `
              <div class="menu-category-wrapper" data-category="right-${index}">
                <div class="category-header">
                  <h3 class="category-name">${cat.category}</h3>
                  <i class="fas fa-chevron-down category-icon"></i>
                </div>
                <div class="category-content">
                  <div class="menu-grid">
                    ${cat.items.map(item => renderItem(item)).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
