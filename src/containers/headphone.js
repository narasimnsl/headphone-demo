import React, { Component } from 'react';
import Conditional from '../hoc/conditional'
import Blackphone from '../images/ath-msr7-black.jpg';
import Brownphone from '../images/ath-msr7-brown.jpg';
import ImageLoader from '../components/imageLoader'
import TabItem from '../components/tabItem'
import SelectItem from '../components/selectInput'
import CartHandler from '../components/cartHandler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Scroll from 'react-scroll';

/* Headpohone Container  which pulls in all individual components*/
class headphone extends Component {
  /* State object to determine the image load and Add to card status*/
  state={
    image_src:Blackphone,
    cart:{txt:'Add to Cart',loading:false,viewcart:false}
  
  }
/* Function to  handle select button and load appropriate Image */
  inputChangedHandler =(ev)=>{
    let ch = ev.target.value
    ch === 'Black'? this.setState({image_src:Blackphone}):this.setState({image_src:Brownphone})
  }

/* Function to handle the cart button and change content accordingly*/
  cartClickHandler = () => {
    if(!this.state.cart.loading){
       let nstat = {...this.state.cart}
       nstat = {txt:'Loading....',loadding:true,viewcart:false}
       this.setState({cart:nstat})
      setTimeout(() => {
        let nstat = {...this.state.cart}
        nstat = {txt:'View Cart',loadding:true,viewcart:true}
        this.setState({cart:nstat})
        let scroll  = Scroll.animateScroll;
        scroll.scrollToBottom();
      }, 2000);
    }
  }

  render() {
   
    return (
      <div className='Container'>
        <div className='top-container'>
            <p className='backNav'><FontAwesomeIcon icon="arrow-left" /> All products</p>
            <h1>Audio-Technica ATH-MSR7</h1>
            <p>2017 Best Headphone of the Year Award Winner</p>
        </div>
        <div className="img-container">
            <SelectItem clName="sel-item-mobile"  selectOptions={['Black','Brown']} changed={this.inputChangedHandler}/>
            <ImageLoader imgSource={this.state.image_src}/>
        </div>
        <div className="tab-container">
            <TabItem/>
        </div>
        <div className="dol-container">
            <p className='curVal'>$59.99</p><p><strike>$89.99</strike></p>
        </div>
        <div className="sel-container">
           <SelectItem clName="sel-item-desk"  selectOptions={['Black','Brown']} changed={this.inputChangedHandler}/>
        </div>
        <div className="cart-container">
            <CartHandler click={this.cartClickHandler} >{this.state.cart.txt}</CartHandler>
            <Conditional if={this.state.cart.viewcart}>
              <p className='chOutText'>Item added to cart!</p>  
            </Conditional>
           
        </div>

      </div>
    );
  }
}

export default headphone;