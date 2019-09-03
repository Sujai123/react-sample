import React,{ Component } from "react";
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component{
    render(){
        let text=this.props.text
        let isStock=this.props.isStock
        let rows= []
        let lastCategory = null
        const products = this.props.products
        products.forEach(product => {
            if(isStock && !product.stocked){
                return
            }
            if(product.name.toLowerCase().indexOf(text) === -1){
                return
            }
            if(product.category !== lastCategory){
                rows.push(<ProductCategoryRow 
                category={product.category}
                key={product.category} />)
            }
            rows.push(
                <ProductRow 
                name={product.name} 
                price={product.price}
                key={product.name}
                stocked={product.stocked} />
            )
            lastCategory = product.category
        });
        return(
            <div>
                <table style={{'border':'2px solid black'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable