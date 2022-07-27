import React from 'react';

import './App.css';
import {Navbar} from './Navbar';
import {MainPage} from './Mainpage';
import {FormPage} from './FormPage';
import {InvoicePage} from './InvoicePage';

function App() {
  // Invoice data section
  const [invoiceList, setInvoiceList] = React.useState([])
  const [selectedInvoice, setSelectedInvoice] = React.useState()

  // Toggling for dark and light mode

  const [toggleDarkMode, setToggleDarkMode] = React.useState(false)
  console.log(toggleDarkMode)


  // Toggle states for different major sections of the app
  const [mainSectionToggle, setMainSectionToggle] = React.useState(true)
  const [formSectionToggle, setFormSectionToggle] = React.useState(false)
  const [invoiceSectionToggle, setInvoiceSectionToggle] = React.useState(false)

  return (
    <div className={toggleDarkMode ? "App darkMajor" : "App lightMajor"}>
      <Navbar 
        setToggleDarkMode = {setToggleDarkMode}
      />
      {mainSectionToggle && 
      <MainPage 
        invoiceList = {invoiceList}
        toggleDarkMode = {toggleDarkMode}
        setInvoiceList = {setInvoiceList}
        setSelectedInvoice = {setSelectedInvoice}
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
      {invoiceSectionToggle && 
      <InvoicePage
        invoiceList = {invoiceList}
        invoice = {selectedInvoice}
        setSelectedInvoice = {setSelectedInvoice}
        setInvoiceSectionToggle = {setInvoiceSectionToggle}
        setMainSectionToggle = {setMainSectionToggle}
        setFormSectionToggle = {setFormSectionToggle}
      />}
    </div>
  );
}

export default App;
