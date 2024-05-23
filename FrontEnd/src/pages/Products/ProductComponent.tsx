import React, { Fragment, useEffect } from 'react';
import { HomepageProps } from './types/homePage.ts';

const ProductComponent: React.FC<HomepageProps> = (props: any) => {
  const { getProducts,products, productLoading } = props;


  useEffect(() => {
    getProducts();
  }, []);


  console.log('rpr',products)

  return <Fragment>{productLoading === false && <div style={{width: '100%', height: '100%'}} >
    <div className={'ps-4'}>
      <h1 className={'ms-4'}>
      Latest Products
    </h1>

      <div style={{
        display:'flex',
        gap:'90px',
        width:'1711px',
        flexWrap:'wrap',
        height:'calc(100vh - 48px)',
        overflow:'auto'
      }}
           className={'ms-4'}
      >
        { products?.map((productObject)=>{
          return(
              <div id={productObject?._id} key={productObject?._id} >

                <div className="card" style={{width: "499px"}}>
                  <img src={`${productObject?.image}`} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"><a  href="/google.com" target="_blank"    rel="noopener noreferrer">{`${productObject?.name}`}</a></h5>
                    <p className="card-text">{`${productObject?.description}`}</p>
                  </div>
                </div>

              </div>
          )
        })}

    </div>


    </div>

  </div>}</Fragment>;
};

export default ProductComponent;
