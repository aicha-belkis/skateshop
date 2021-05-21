import React from 'react'
import './product.css';
import CardView from '../card/CardView';
import Pagination from '../pagination/Pagination';
import Aside from '../aside/Aside';
import { ProductList } from '../../data/ProductList';
import { Search } from '../search/Search';


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      holdAllProductList: [],
      options: {
        limit: 10,
        page: 1,
        totalCount: 0
      },
    }
  }
  componentDidMount() {
    const holdAllProductList = ProductList,
      { productList, totalCount, page } = this.getUpdatedProductList(holdAllProductList)

    if (totalCount) {
      this.setState((prev) => {
        return {
          holdAllProductList,
          productList,
          options: {
            ...prev.options,
            totalCount,
            page
          }
        }
      })
    }
  }
  onChange(data) {
    const { options: { limit: preLimit, page: prePage }, holdAllProductList } = this.state,
      { limit = preLimit, page = prePage } = data,
      start = (limit * page) - limit, end = start + limit,
      productList = holdAllProductList.slice(start, end);
    this.setState({ productList, options: Object.assign(this.state.options, data) })
  }
  getUpdatedProductList(holdAllProductList) {
    let totalCount = holdAllProductList.length,
      { limit, page } = this.state.options,
      start = (limit * page) - limit, end = start + limit,
      productList = holdAllProductList.slice(start, end);
    if (!productList.length) {
      page = page - 1 || 1;
      start = (limit * page) - limit;
      end = start + limit;
      productList = holdAllProductList.slice(start, end);
    }
    return {
      productList,
      totalCount,
      page
    }
  }
  render() {
    let { productList, options } = this.state;

    return (
      <div className="row">
        <div className="col-md-3">
          <Search />
          <Aside />
        </div>
        <div className="col-md-9">
          <Pagination
            options={options}
            onChange={this.onChange.bind(this)}
          > </Pagination>
          <div className="product-list">

            {productList.map((product, index) => {
              return (
                <CardView key={index} product={product} />
              )
            }
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
