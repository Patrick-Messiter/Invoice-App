import React from 'react'

import './App.css';
import {Navbar} from './Navbar';
import {MainPage} from './Mainpage';
import {FormPage} from './FormPage';

function App() {
  const [invoiceList, setInvoiceList] = React.useState([])

  // Toggle states for different major sections of the app
  const [mainSectionToggle, setMainSectionToggle] = React.useState(true)
  const [formSectionToggle, setFormSectionToggle] = React.useState(false)
  const [invoiceSectionToggle, setInvoiceSectionToggle] = React.useState(false)

  return (
    <div className="App">
      <Navbar />
      {mainSectionToggle && 
      <MainPage 
        invoiceList = {invoiceList}
        setInvoiceList = {setInvoiceList}
        setMainSectionToggle = {setMainSectionToggle}
        setFormSectionToggle = {setFormSectionToggle}
        setInvoiceSectionToggle = {setInvoiceSectionToggle}
      />}
      {formSectionToggle && 
      <FormPage 
        setInvoiceList = {setInvoiceList}
        setMainSectionToggle = {setMainSectionToggle}
        setFormSectionToggle = {setFormSectionToggle}
        setInvoiceSectionToggle = {setInvoiceSectionToggle}
      />
      }
    </div>
  );
}

export default App;
