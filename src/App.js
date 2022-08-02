import React from 'react';

import './App.css';
import {Navbar} from './Navbar';
import {MainPage} from './Mainpage';
import {InvoicePage} from './InvoicePage';

function App() {
  // Invoice data section
  const [invoiceList, setInvoiceList] = React.useState([])
  const [selectedInvoice, setSelectedInvoice] = React.useState()

  // Toggling for dark and light mode

  const [toggleDarkMode, setToggleDarkMode] = React.useState(false)


  // Toggle states for different major sections of the app
  const [mainSectionToggle, setMainSectionToggle] = React.useState(true)
  const [formSectionToggle, setFormSectionToggle] = React.useState(false)
  const [invoiceSectionToggle, setInvoiceSectionToggle] = React.useState(false)

  console.log(selectedInvoice)

  //Update the current invoice selected if editing from the Invoice Page
  React.useEffect (()=> {
    if (selectedInvoice) {
      invoiceList.map(currentInv => {
        if (currentInv.id === selectedInvoice.id) {
          setSelectedInvoice(currentInv)
        }
      })
    }
  }, [invoiceList]) 


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
        invoice = {selectedInvoice}
        setSelectedInvoice = {setSelectedInvoice}
        setMainSectionToggle = {setMainSectionToggle}
        formSectionToggle = {formSectionToggle}
        setFormSectionToggle = {setFormSectionToggle}
        setInvoiceSectionToggle = {setInvoiceSectionToggle}
      />}
      {invoiceSectionToggle && 
      <InvoicePage
        invoiceList = {invoiceList}
        setInvoiceList = {setInvoiceList}
        invoice = {selectedInvoice}
        setSelectedInvoice = {setSelectedInvoice}
        setInvoiceSectionToggle = {setInvoiceSectionToggle}
        setMainSectionToggle = {setMainSectionToggle}
        formSectionToggle = {formSectionToggle}
        setFormSectionToggle = {setFormSectionToggle}
      />}
    </div>
  );
}

export default App;
