export interface Product{
    pId: number;
    name: string;
    description: string;
    rating: number;
    link: string;
    image: string;
    likes: number;
    price: number;
    isDiscounted: boolean;
}

export interface Category{
    cId: number;
    items: Product[];
}



