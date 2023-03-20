import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor() {}

  getProducts() {
    return [
      {
        product_id: 'P-101',
        product_name: 'Logitech Mouse',
        product_desc: '6 Button Mechanical Mouse',
        product_price: '899.00',
      },
      {
        product_id: 'P-102',
        product_name: 'JBL BT Speaker',
        product_desc: 'Waterproof Radio 360 Surround',
        product_price: '1,099',
      },
      {
        product_id: 'P-103',
        product_name: 'Mechanical Keyboard',
        product_desc: 'Hot-swappable RGB Backlit',
        product_price: '2,395.00',
      },
      {
        product_id: 'P-104',
        product_name: 'Oculus Meta',
        product_desc: 'All-in-one Gaming Headset',
        product_price: '22,450.00',
      },
    ];
  }
}
