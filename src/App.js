import React from 'react'

import './App.css';
import {Navbar} from './Navbar';
import {MainPage} from './Mainpage'

function App() {
  const [invoiceList, setInvoiceList] = React.useState([])
  console.log(invoiceList)

  return (
    <div className="App">
      <Navbar />
      <MainPage 
      invoiceList = {invoiceList}
      setInvoiceList = {setInvoiceList}
      />
    </div>
  );
}

export default App;
