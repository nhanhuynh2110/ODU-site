import React from 'react'
import conf from '../../../config'
import Paging from './paging'
const domain = conf.server.domain

export default class FeatureItems extends React.PureComponent {
  render () {
    const {categories = [], products, page, isPaging, pageSize, total, onChangePaging} = this.props
    return (
      <div className='features_items'>
          <h2 className='title text-center'>Features Items</h2>
          {products.map(el => {
            const cat = categories.find(cate => cate._id === el.categoryId)
            const catLink = _.get(cat, 'link')
            return (
              <div key={el._id} className='col-sm-4'>
                <div className='product-image-wrapper'>
                  <div className='single-products'>
                      <div className='productinfo text-center'>
                        <img src={`${domain}/${el.image}`} alt='' />
                        <h2>${el.price}</h2>
                        <p>{el.title}</p>
                        <a href={`/${catLink}/${el.link}-${el._id}`} className='btn btn-default add-to-cart'><i className='fa fa-shopping-cart'></i>View More</a>
                      </div>
                      {/* <div className='product-overlay'>
                        <div className='overlay-content'>
                          <h2>$56</h2>
                          <p>{el.title}</p>
                          <a href='#' className='btn btn-default add-to-cart'><i className='fa fa-shopping-cart'></i>Add to cart</a>
                        </div>
                      </div> */}
                  </div>
                  <div className='choose'>
                    <ul className='nav nav-pills nav-justified'>
                      <li><a href='#'><i className='fa fa-plus-square'></i>Add to wishlist</a></li>
                      <li><a href='#'><i className='fa fa-plus-square'></i>Add to compare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
          
          {isPaging && total > 0 && <div className='col-sm-12'><Paging page={page} total={total} pageSize={pageSize} changePage={onChangePaging} /></div>}
        </div>
    )
  }
}