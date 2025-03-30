export interface Product{
    id: number;
    name: string;
    description: string;
    count: number;
    price: number;
    is_active: boolean;
}

export interface Category{
    cId: number;
    items: Product[];
}



