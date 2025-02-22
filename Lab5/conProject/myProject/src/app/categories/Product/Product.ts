export interface Product{
    pId: number;
    name: string;
    description: string;
    rating: number;
    link: string;
    image: string;
}

export interface Category{
    cId: number;
    items: Product[];
}