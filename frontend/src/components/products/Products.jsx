import React, { Component } from 'react'
import './Products.css';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

export default class Products extends Component {
   constructor(props){
     super(props);
     this.state = {
      setProducts:{
      flag: false, 
      productsList: null
    }
  }
 }
  
 async componentDidMount() {
  await this.getData();
}

  async getData() {
    let backend_url = 'http://localhost:3300/products';
    let response = await fetch(backend_url);
    if(response.ok){
    let responseData = await response.json();
    this.setState({
    setProducts: { flag: true, productsList: responseData['productItems'] },
    })
    }
    else{
      console.log('error');
    }
  }

 
 render(){

      const {flag, productsList}= this.state.setProducts;
  return (
    (flag) ?
    <div className='products-container'>
      <div className="sort-button">
        <Dropdown>
          <Dropdown.Toggle variant="success" id='drowpdown-basic'>
            Sort By
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={null}>A -to- Z</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={null}>Z -to- A</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3" onClick={null}>High to Low</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={null}>Low to High</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='products'>
        {productsList.map(item => {
          return (
            <div className='card' key={item.name}>
              <div>
                <img className='product-image' src={item.image} alt={item.image} />
              </div>
              <div>
                <h2 className='product-name'>{item.name}</h2>
              </div>
              <div className='product-price'>
                {item.price}/-
              </div>
              <div>
                <button className='product-add-button'
                  onClick={() => this.handleAddProduct(item)}>Add to Cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div> : <div><h1>Loading..!!</h1></div>
  );
}
}
