export class Product {
  constructor(productID: number, name: string, price: number) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }
 
  productID: number;
  name: string;
  price: number;
}
 
export class ProductService {
  public getProducts() {
    return products;
  }
 
  public getProduct(id: any) {
    return products.find((prd) => prd.productID == id);
  }
}
 
const products = [
  new Product(1, 'Memory Card', 500),
  new Product(2, 'Pen Drive', 750),
  new Product(3, 'Power Bank', 100),
];