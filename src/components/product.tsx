import Image from "next/image";
import { Product } from "@/types/product";

interface ProductDataProps {
    id: string;
    image: string;
    name: string;
    category: string;
    price: number;
    sold: number;
    profit: number;
}
export const productData: ProductDataProps[] = [
  { 
    id: '1',
    image: "/images/product/garri.jpg",
    name: "Bag of Garri",
    category: "food",
    price: 100000,
    sold: 22,
    profit: 45,
  },
  { id: '2',
    image: "/images/product/rice.jpg",
    name: "Bag of Rice",
    category: "food",
    price: 100000,
    sold: 12,
    profit: 125,
  },
  { id: '3',
    image: "/images/product/beans.jpeg",
    name: "Bag of Beans",
    category: "food",
    price: 270000,
    sold: 64,
    profit: 247,
  },
  { id: '4',
    image: "/images/product/yam.jpeg",
    name: "Tuber of Yam",
    category: "food",
    price: 1000,
    sold: 72,
    profit: 103,
  },
];

const ProductDisplay = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Currently Available Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Sold</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={product.image}
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.category}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              N{product.price}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.sold}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">N{product.profit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
