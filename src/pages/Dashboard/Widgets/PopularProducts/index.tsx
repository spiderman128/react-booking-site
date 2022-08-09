// Dependencies
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { Card } from '../../../../components';
import { Avatar, Divider, Stack } from '@mui/material';

// Styles
import * as S from './styles';

// Constants
const data = [
  {
    img: 'product1.png',
    title: 'Crypter - NFT',
    desc: 'UI kit',
    price: '2, 453.80',
    active: true
  },
  {
    img: 'product2.png',
    title: 'Bento Matte 3D',
    desc: 'illustration 1.0',
    price: '105.60',
    active: false
  },
  {
    img: 'product3.png',
    title: 'Excellent material',
    desc: '3D chair',
    price: '648.60',
    active: true
  },
  {
    img: 'product4.png',
    title: 'Fleet - travel',
    desc: 'shopping kit',
    price: '648.60',
    active: true
  }
]

// Export popular-products widget
export const PopularProductsWidget: FC = () => {
  const { t } = useTranslation();

  const ProductItem = ({img, title, desc, price, active}) => {
    return (
      <S.ProductItemWrapper>
        <div className='me-3'>
          <Avatar alt={title} src={`/assets/images/dashboard/${img}`} sx={{ width: 64, height: 64 }} className='rounded-8' />
        </div>
        <div className='me-auto'>
          <div>{title}</div>
          <div>{desc}</div>
        </div>
        <div className='text-end'>
          <div>${price}</div>
          {active
            ? <div className='product-status active badge'>Active</div>
            : <div className='product-status deactive badge'>Deactive</div>
          }
        </div>
      </S.ProductItemWrapper>
    )
  }

  // Return popular-products widget
  return (
    <Card
      title={t('dashboard.popular_products')}
      titleColor='#B1E5FC'
    >
      <div className='d-flex font-size-13 mt-2'>
        <span className='me-auto'>Products</span>
        <span>Earning</span>
      </div>
      <Divider variant='middle' className='my-3' />
      <Stack spacing={30}>
        {data.map((item, index) => (
          <ProductItem {...item} key={index} />
        ))}
      </Stack>
      <S.BlockButton>
        All products
      </S.BlockButton>
    </Card>
  );
};
