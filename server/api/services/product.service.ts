import L from '../../common/logger';
import { Connection, Request } from 'tedious';
import { getConfig } from '../../../utils/sqlServerUtil';

let id = 0;
interface Product {
  ProductID: number;
  Name: string;
  ProductNumber: string;
  MakeFlag: boolean;
  FinishedGoodsFlag: boolean;
  SafetyStockLevel?: number;
  ReorderPoint?: number;
  StandardCost?: number;
  ListPrice?: number;
  DaysToManufacture?: number;
  SellStartDate?: Date;
  //rowguid?: "694215B7-08F7-4C0D-ACB1-D734BA44C0C8",
  ModifiedDate?: Date;
  ProductPhotoID?: number;
  ThumbNailPhoto?: string;
  ThumbnailPhotoFileName?: string;
  LargePhoto?: string;
  LargePhotoFileName?: string;
}

const products: Product[] = [
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
  {
    ProductID: id++,
    Name: `product ${id - 1}`,
    ProductNumber: `productNum${id - 1}`,
    MakeFlag: false,
    FinishedGoodsFlag: false,
  },
];

const connection = new Connection(getConfig());

export class ProductsService {
  all(): Promise<Product[]> {
      
    function executeStatement() {
        return Promise.resolve(products);
    }

    L.info(products, 'fetch all products');

    connection.on('connect', (err) => {
      if (err) {
        console.log('Connection Failed');
        throw err;
      }

      executeStatement();
    });

    connection.connect();
  }

  //   byId(id: number): Promise<Product> {
  //     L.info(`fetch product with id ${id}`);
  //     return this.all().then((r) => (r.filter((item) => item.id === id)[0]));
  //   }

  //   create(name: string): Promise<Product> {
  //     L.info(`create product with name ${name}`);
  //     const product: Product = {
  //       id: id++,
  //       name,
  //     };
  //     products.push(product);
  //     return Promise.resolve(product);
  //   }

  //   delete(id: number): Promise<Product> {
  //     L.info(`delete product with id ${id}`);
  //     return this.all().then((r) => {
  //       const idx = r.findIndex((item) => item.id === id);
  //       return products.splice(idx, 1)[0];
  //     })
  //   }
}

export default new ProductsService();
