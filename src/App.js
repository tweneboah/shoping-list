import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    buyItems:['Milk', 'Soap', 'Gari']
    
  }

addNewItem = (e) => {
   e.preventDefault()
   
   const {buyItems} = this.state;
   const newItem = this.newItem.value;
   this.setState({
    buyItems: [...this.state.buyItems, newItem]
   })
     this.addForm.reset()
}

  render() {
    const {buyItems} = this.state
    return (
      <div className="App">
        <h1 className='display-4'>SHOPING CART</h1>

        <form onSubmit={this.addNewItem} ref={(input)=>{this.addForm =input}}>
           <div className='form-group'>
             <label className='sr-only'>Add New Item</label>
               <input type='text' placeholder='Bread' id='newItemInput' ref={(input)=>{this.newItem =input}}/>
               <button className='btn btn-primary'>Add</button>
           </div>
         
        </form>

   <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ITEM</th>
      <th scope="col">ACTION</th>
     
    </tr>
  </thead>
  <tbody>
  {
           buyItems.map((item) => {
             return (
              <tr>
              <th scope="row">1</th>
              <td>{item}</td>
              <td><button className='btn btn-primary btn-sm'>Remove</button></td>
            </tr>
             );
           })
         }
    
   
  </tbody>
</table>
        
        
      </div>
    );
  }
}

export default App;
