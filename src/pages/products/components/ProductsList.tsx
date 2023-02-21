import { FC, useState } from 'react';
import { IProduct } from '../../../redux/products/product.types';
import ProductItem from './ProductItem';
import SortDropdown from './SortDropdown';

import '../products.css';

interface IProductsListProps {
  products: IProduct[] | undefined;
}

const ProductsList: FC<IProductsListProps> = ({ products = [] }) => {
  const [selectedFilter, setSelectedFilter] = useState('price-asc');
  const filters = [
    {
      id: 'price-asc',
      text: 'Price (ASC)',
      callback: (first: IProduct, second: IProduct) => (first.price - second.price),
    },
    {
      id: 'price-desc',
      text: 'Price (DESC)',
      callback: (first: IProduct, second: IProduct) => (second.price - first.price),
    },
    {
      id: 'rating-asc',
      text: 'Rating (ASC)',
      callback: (first: IProduct, second: IProduct) => (first.price - second.price),
    },
    {
      id: 'rating-desc',
      text: 'Rating (DESC)',
      callback: (first: IProduct, second: IProduct) => (second.price - first.price),
    },
  ];
  const selectedFilterCallback = filters.find(filter => filter.id === selectedFilter)?.callback;
  const sortedProducts = products?.slice().sort(selectedFilterCallback);

  return (
    <div className='products-list-main'>
      <SortDropdown
        selected={selectedFilter}
        filters={filters}
        setFilter={setSelectedFilter}
      />
      <div className='products-list'>
        {sortedProducts?.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
