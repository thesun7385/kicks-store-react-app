
export const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
];


export const subCategories = [
    { name: "Sneakers", href: "#" },
    { name: "Running Shoes", href: "#" },
    { name: "Casual Shoes", href: "#" },
    { name: "Training Shoes", href: "#" },
    { name: "Slippers", href: "#" },
];


export const filters = [
    {
        id: "size",
        name: "Size",
        options: [
            { value: "6", label: "6", checked: false },
            { value: "7", label: "7", checked: false },
            { value: "8", label: "8", checked: false },
            { value: "9", label: "9", checked: false },
            { value: "10", label: "10", checked: false },
            { value: "11", label: "11", checked: false },
        ],
    },
    {
        id: "brand",
        name: "Brand",
        options: [
            { value: "nike", label: "Nike", checked: false },
            { value: "adidas", label: "Adidas", checked: false },
            { value: "puma", label: "Puma", checked: false },
            { value: "reebok", label: "Reebok", checked: false },
            { value: "new-balance", label: "New Balance", checked: false },
            { value: "converse", label: "Converse", checked: false },
        ],
    },
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White", checked: false },
            { value: "black", label: "Black", checked: false },
            { value: "red", label: "Red", checked: false },
            { value: "blue", label: "Blue", checked: false },
            { value: "green", label: "Green", checked: false },
            { value: "yellow", label: "Yellow", checked: false },
        ],
    },
    {
        id: "price",
        name: "Price Range",
        options: [
            { value: "under-50", label: "Under $50", checked: false },
            { value: "50-100", label: "$50 - $100", checked: false },
            { value: "100-200", label: "$100 - $200", checked: false },
            { value: "200-300", label: "$200 - $300", checked: false },
            { value: "300+", label: "Above $300", checked: false },
        ],
    },
];
