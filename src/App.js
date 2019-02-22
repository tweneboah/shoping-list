import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    buyItems:['Milk', 'Soap', 'Gari'],
    message: ''
    
  }

  //Add new items
  addNewItem = (e) => {
   e.preventDefault()
   
   const {buyItems, message} = this.state;
   const newItem = this.newItem.value;
   
   const isOnTheList = buyItems.includes(newItem)

   if(isOnTheList){
    this.setState({
      message: 'This item already exist',
      
    })
   }else{
    newItem !=='' && this.setState({
      buyItems: [...this.state.buyItems, newItem],
      message: ''
     })
    
   }
   //Reseting input field
     this.addForm.reset()
}

    //Deleting /removing
    removeItem = (items)=>{
      const newItems = this.state.buyItems.filter((buyItem) =>{
        return buyItem !== items;
      })

      this.setState({
        buyItems: newItems
      })
      console.log('Remove', items)
    }

    display =() => {
        return (
         <div className="alert alert-danger " role="alert">
            <h4 className="alert-heading">Error</h4>
            <p>{this.state.message}</p>
         </div>

        );
    }

  render() { 
    //destructuring
    const {buyItems, message} = this.state

 
    return (
      <div className="App">
        <h1 className='text-danger'>SHOPPING CART</h1>
        <h3>Your total items is {buyItems.length}</h3>
        <hr/>
           {
             message !=='' && this.display()
           }
        <form onSubmit={this.addNewItem} ref={(input)=>{this.addForm =input}}>
           <div className='form-group'>
             <label className='sr-only'>Add New Item</label>
               <input type='text' placeholder='Enter item' id='newItemInput' ref={(input)=>{this.newItem =input}}/>
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
                    <tr key={item}>
                    <th scope="row">-></th>
                    <td>{item}</td>
                    <td><button type= 'button' onClick={() => this.removeItem(item)} className='btn btn-danger btn-sm'>Remove</button></td>
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
