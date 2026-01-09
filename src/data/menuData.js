export const MENU_DATA = [
    {
        categoryId: "specials",
        categoryName: "Special Combos",
        items: [
            {
                id: 1,
                name: "by TR to you Premium",
                description: "Homemade I/Cream (Any flavour) + Premium by TR + 2 pcs Strips + Fries",
                ingredients: ["Use Custom Notes for Flavor", "Premium by TR Burger", "2 pcs Strips", "Fries"],
                price: 30.0,
                image: "/images/chicken/duluxe.png",
                isViral: true,
                isSpicy: false,
                addons: [
                    { id: 101, name: "Spicy", price: 2.0 },
                    { id: 102, name: "Extra Cheese", price: 3.0 },
                    { id: 201, name: "Choice: Ice Cream", price: 0 },
                    { id: 202, name: "Choice: Soft Drink", price: 0 }
                ]
            },
            {
                id: 2,
                name: "by TR to you Smash Beef",
                description: "Homemade I/Cream (Any flavour) + Smash Beef by TR + 2 pcs Strips + Fries",
                ingredients: ["Use Custom Notes for Flavor", "Smash Beef by TR", "2 pcs Strips", "Fries"],
                price: 35.0,
                image: "/images/beef/smash.png",
                isViral: true,
                isSpicy: false,
                addons: [
                    { id: 201, name: "Choice: Ice Cream", price: 0 },
                    { id: 202, name: "Choice: Soft Drink", price: 0 }
                ]
            },
            {
                id: 3,
                name: "Bite Strips",
                description: "Soft Bun filled with crispy By TR Strips (Choice of M-5 or M-7)",
                ingredients: ["Bun", "By TR Strips (M-5 or M-7)"],
                price: 12.0,
                image: "/images/chicken/bite_strips.png",
                isViral: false,
                isSpicy: false,
                addons: [
                    { id: 102, name: "Extra Cheese", price: 3.0 },
                    { id: 103, name: "Extra Sauce", price: 4.0 }
                ]
            },
            {
                id: 4, // Renumbered from 5 to 4 to fill the gap
                name: "Tortilla PREMIUM Sandwich",
                description: "Delicious Tortilla Sandwich",
                ingredients: ["Chicken Wrap", "Fries", "Sauce"],
                price: 10.0,
                image: "/images/chicken/tortilla-sandwich.png",
                isViral: false,
                isSpicy: false,
                addons: [
                    { id: 101, name: "Spicy", price: 2.0 },
                    { id: 102, name: "Extra Cheese", price: 3.0 }
                ]
            }
        ]
    },
    {
        categoryId: "chicken",
        categoryName: "Chicken Burgers",
        items: [
            {
                id: 5,
                name: "Regular by TR",
                description: "Fried Chicken, Bun, Cheddar Cheese, Signature Sauce, Mayo, Lolo Biando, Caramalised Onion, Tomato",
                ingredients: ["Fried Chicken", "Bun", "Cheddar Cheese", "Signature Sauce", "Mayo", "Lolo Biando", "Caramalised Onion", "Tomato"],
                price: 10.0,
                image: "/images/chicken/duluxe.png",
                isViral: false,
                isSpicy: false,
                addons: [
                    { id: 101, name: "Spicy", price: 2.0 },
                    { id: 102, name: "Extra Cheese", price: 3.0 },
                    { id: 103, name: "Extra Sauce", price: 4.0 },
                ]
            },
            {
                id: 6,
                name: "Premium by TR",
                description: "Fresh Chicken Patty, Bun, Cheddar Cheese, Signature Sauce, Mayo, Lolo biando, Caramalised Onion, Tomato",
                ingredients: ["Fresh Chicken Patty", "Bun", "Cheddar Cheese", "Signature Sauce", "Mayo", "Lolo biando", "Caramalised Onion", "Tomato"],
                price: 15.0,
                image: "/images/chicken/duluxe.png",
                isViral: true,
                isSpicy: false,
                addons: [
                    { id: 101, name: "Spicy", price: 2.0 },
                    { id: 102, name: "Extra Cheese", price: 3.0 },
                    { id: 103, name: "Extra Sauce", price: 4.0 },
                ]
            },
            {
                id: 7,
                name: "Supreme by TR",
                description: "Double Fresh Chicken Patty, Bun, Double Cheddar Cheese, Signature Sauce, Mayo, Lolo biando, Caramalised Onion, Tomato, Cucumber Pickle",
                ingredients: ["Double Fresh Chicken Patty", "Bun", "Double Cheddar Cheese", "Signature Sauce", "Mayo", "Lolo biando", "Caramalised Onion", "Tomato", "Cucumber Pickle"],
                price: 25.0,
                image: "/images/chicken/duluxe.png",
                isViral: false,
                isSpicy: false,
                addons: [
                    { id: 101, name: "Spicy", price: 2.0 },
                    { id: 102, name: "Extra Cheese", price: 3.0 },
                    { id: 103, name: "Extra Sauce", price: 4.0 },
                ]
            }
        ]
    },
    {
        categoryId: "beef",
        categoryName: "Beef Burgers",
        items: [
            {
                id: 8,
                name: "Smash Beef by TR",
                description: "Smash Fresh Beef Patty, Bacon, Bun, Cheddar Cheese, Signature Sauce, BBQ Sauce, Lolo Bianado, Caramalised Onion and Tomato",
                ingredients: ["Smash Fresh Beef Patty", "Bacon", "Bun", "Cheddar Cheese", "Signature Sauce", "BBQ Sauce", "Lolo Bianado", "Caramalised Onion", "Tomato"],
                price: 20.0,
                image: "/images/beef/smash.png",
                isViral: true,
                isSpicy: false,
                addons: [
                    { id: 101, name: "Spicy", price: 2.0 },
                    { id: 102, name: "Extra Cheese", price: 3.0 },
                    { id: 103, name: "Extra Sauce", price: 4.0 },
                ]
            },
            {
                id: 9,
                name: "VIP Beef by TR",
                description: "Double Smash Fresh Beef Patty, Bacon, Bun, Cheddar Cheese, Signature Sauce, BBQ Sauce, Lolo Bianado, Caramalised Onion, Tomato, cucumber Pickle",
                ingredients: ["Double Smash Fresh Beef Patty", "Bacon", "Bun", "Cheddar Cheese", "Signature Sauce", "BBQ Sauce", "Lolo Bianado", "Caramalised Onion", "Tomato", "Cucumber Pickle"],
                price: 30.0,
                image: "/images/beef/raman-ham.png",
                isViral: false,
                isSpicy: false,
                addons: [
                    { id: 101, name: "Spicy", price: 2.0 },
                    { id: 102, name: "Extra Cheese", price: 3.0 },
                    { id: 103, name: "Extra Sauce", price: 4.0 },
                ]
            }
        ]
    },
    {
        categoryId: "veg",
        categoryName: "Vegetarian",
        items: [
            {
                id: 10,
                name: "Veg Burger",
                description: "Delicious vegetable patty burger",
                ingredients: ["Veg Patty", "Bun", "Lettuce", "Tomato", "Sauce"],
                price: 10.0,
                image: "/images/beef/taco-beef.png",
                isViral: false,
                isSpicy: false,
                addons: [
                    { id: 101, name: "Spicy", price: 2.0 },
                    { id: 102, name: "Extra Cheese", price: 3.0 }
                ]
            }
        ]
    },
    {
        categoryId: "strips",
        categoryName: "Strips",
        items: [
            {
                id: 11,
                name: "By TR Strips (5pc)",
                description: "5 pieces of crispy chicken strips",
                ingredients: ["5 Chicken Strips", "Dip Sauce"],
                price: 10.0,
                image: "/images/chicken/5strip.png",
                isViral: false,
                isSpicy: false,
                addons: [
                    { id: 103, name: "Extra Sauce", price: 4.0 }
                ]
            },
            {
                id: 12,
                name: "By TR Strips (12pc)",
                description: "12 pieces of crispy chicken strips",
                ingredients: ["12 Chicken Strips", "2 Dip Sauces"],
                price: 20.0,
                image: "/images/chicken/chicken_strips.png",
                isViral: false,
                isSpicy: false,
                addons: [
                    { id: 103, name: "Extra Sauce", price: 4.0 }
                ]
            }
        ]
    },
    {
        categoryId: "sandwich",
        categoryName: "Sandwiches",
        items: [
            {
                id: 13,
                name: "Tortilla PREMIUM Sandwich",
                description: "Delicious Tortilla Sandwich",
                ingredients: ["Tortilla Wrap", "Chicken", "Sauce", "Vegetables"],
                price: 10.0,
                image: "/images/chicken/tortilla-sandwich.png",
                isViral: false,
                isSpicy: false,
                addons: [
                    { id: 101, name: "Spicy", price: 2.0 },
                    { id: 102, name: "Extra Cheese", price: 3.0 }
                ]
            }
        ]
    },
    {
        categoryId: "fries",
        categoryName: "Fries",
        items: [
            {
                id: 14,
                name: "Fries (Medium)",
                description: "Crispy golden fries",
                ingredients: ["Potato", "Salt"],
                price: 7.0,
                image: "/images/sides/fries.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 15,
                name: "Fries (Large)",
                description: "Large portion of crispy fries",
                ingredients: ["Potato", "Salt"],
                price: 11.0,
                image: "/images/sides/largefries.png",
                isViral: false,
                isSpicy: false,
                addons: []
            }
        ]
    },
    {
        categoryId: "sides",
        categoryName: "Sides & Extras",
        items: [
            {
                id: 16,
                name: "With Spicy",
                description: "Add a spicy kick",
                ingredients: ["Spicy Powder/Sauce"],
                price: 2.0,
                image: "/images/sides/spicy.png",
                isViral: false,
                isSpicy: true,
                addons: []
            },
            {
                id: 17,
                name: "Extra Cheese",
                description: "Add extra cheddar cheese",
                ingredients: ["Cheddar Cheese"],
                price: 3.0,
                image: "/images/sides/cheese.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 18,
                name: "Extra Sauce",
                description: "Add extra signature sauce",
                ingredients: ["Signature Sauce"],
                price: 4.0,
                image: "/images/sides/sauce.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 19,
                name: "Bun",
                description: "Extra bun",
                ingredients: ["Bun"],
                price: 2.0,
                image: "/images/sides/bun.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            // {
            //     id: 20,
            //     name: "Make it a Combo",
            //     description: "Add Fries and Drink to your meal",
            //     ingredients: ["Fries", "Drink"],
            //     price: 7.0,
            //     image: "/images/drinks/img-mojito.png",
            //     isViral: false,
            //     isSpicy: false,
            //     addons: []
            // }
        ]
    },
    {
        categoryId: "drinks",
        categoryName: "Drinks",
        items: [
            {
                id: 21,
                name: "Pepsi",
                description: "Chilled soft drinks",
                ingredients: ["Soft Drink"],
                price: 5.0,
                image: "/images/drinks/pepsi.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 22,
                name: "Cola",
                description: "Chilled soft drinks",
                ingredients: ["Soft Drink"],
                price: 5.0,
                image: "/images/drinks/cola.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 23,
                name: "Dew",
                description: "Chilled soft drinks",
                ingredients: ["Soft Drink"],
                price: 5.0,
                image: "/images/drinks/dew.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 24,
                name: "Watermelon Mojito",
                description: "Fresh Watermelon Mojito",
                ingredients: ["Watermelon", "Mint", "Soda", "Lime"],
                price: 5.0,
                image: "/images/drinks/watermelon_mojito.png",
                isViral: false,
                isSpicy: false,
                addons: []
            }
        ]
    },
    {
        categoryId: "ice_cream",
        categoryName: "Ice Creams",
        items: [
            {
                id: 25,
                name: "Vanilla Ice Cream",
                description: "Classic Vanilla",
                ingredients: ["Vanilla Ice Cream"],
                price: 5.0,
                image: "/images/icecream/vanilla.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 26,
                name: "Chocolate Ice Cream",
                description: "Rich Chocolate",
                ingredients: ["Chocolate Ice Cream"],
                price: 8.0,
                image: "/images/icecream/chocolate.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 27,
                name: "Mixed Ice Cream",
                description: "Vanilla and Chocolate Mix",
                ingredients: ["Vanilla Ice Cream", "Chocolate Ice Cream"],
                price: 7.0,
                image: "/images/icecream/mixed.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 28,
                name: "Strawberry",
                description: "Fresh Strawberry Delight",
                ingredients: ["Strawberry Ice Cream"],
                price: 10.0,
                image: "/images/icecream/strawberry.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 29,
                name: "Avocado",
                description: "Creamy Avocado",
                ingredients: ["Avocado Ice Cream"],
                price: 10.0,
                image: "/images/icecream/avocado.png",
                isViral: false,
                isSpicy: false,
                addons: []
            },
            {
                id: 30,
                name: "Coconut",
                description: "Tropical Coconut",
                ingredients: ["Coconut Ice Cream"],
                price: 10.0,
                image: "/images/icecream/coconut.png",
                isViral: false,
                isSpicy: false,
                addons: []
            }
        ]
    }
];