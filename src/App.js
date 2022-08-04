import React from 'react';

import './App.css';
import {Navbar} from './Navbar';
import {MainPage} from './Mainpage';
import {InvoicePage} from './InvoicePage';
import { filterProps } from 'framer-motion';

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

  //Update the current invoice selected if editing from the Invoice Page
  React.useEffect (()=> {
    if (selectedInvoice) {
      invoiceList.map(currentInv => {
        if (currentInv.id === selectedInvoice.id) {
          setSelectedInvoice(currentInv)
        }
      })
    }
    return () => {setSelectedInvoice()}
  }, [invoiceList]) 

  // Filtering state and functionality section

  const [filteredListChoice, setFilteredListChoice] = React.useState()
  const [filteredList, setFilteredList] = React.useState()
  console.log(filteredList)

  function filterList () {

    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth()
    let currentYear = currentDate.getFullYear()

    if (filteredListChoice === "Less than $100") {
      setFilteredList(invoiceList.filter(currentItem => currentItem.paymentTotal < 100))
      }
  
    if (filteredListChoice ==="Greater than $100") {
      setFilteredList(invoiceList.filter(currentItem => currentItem.paymentTotal > 100))
      }

    if (filteredListChoice === "Outstanding") {
      setFilteredList(invoiceList.filter(currentItem => currentItem.status === "Outstanding"))
    }

    if (filteredListChoice === "Paid") {
      setFilteredList(invoiceList.filter(currentItem => currentItem.status === "Paid"))
    }

    if (filteredListChoice === "Overdue") {
      setFilteredList(invoiceList.filter(currentItem => {
        if (currentItem.invoiceDate.year < currentYear) {
          return currentItem
        }
        if (currentItem.invoiceDate.year === currentYear) {
          if (currentItem.invoiceDate.month < currentMonth) {
            return currentItem
          }
          if (currentItem.invoiceDate.month === currentMonth) {
            if (currentItem.invoiceDate.day < currentDay){
              return currentItem
            }
          }
        }
      }))
    }
    if (filteredListChoice === "None") {
      setFilteredList(invoiceList)
    }
  }

  // Sorting state and functionality section
  const [sortedListChoice, setSortedListChoice] = React.useState()

  function sortingList () {
      /*if (filteredListChoice === "Status") {
          WORK SOMETHING OUT FOR THIS AS CURRENTLY JUST PUSHING AN OBJECT  OBJECT
          const filteredItems = props.invoiceList.filter(currentItem => currentItem.status !== "Outstanding")
          console.log(`These are the ${filteredItems}`)
          props.setInvoiceList(prevList => {
              return [
                  ...prevList,
                  prevList.push(filteredItems)
              ]
          })
      } */

      // Still need to work out mounting and unmounting by adding new items to a list or editing an invoice when filter and sort have already been donw

      const copy = [...invoiceList]
      if (sortedListChoice === "Total Value") {
        copy.sort((a,b) => a.paymentTotal - b.paymentTotal)
      }

      if (sortedListChoice === "Due Date") {
        copy.sort((a,b) => {
          if (a.invoiceDate.year === b.invoiceDate.year) {
              if (a.invoiceDate.month === b.invoiceDate.month) {
                  return a.invoiceDate.day - b.invoiceDate.day
              } 
              return a.invoiceDate.month - b.invoiceDate.month
          }
          return a.invoiceDate.year - b.invoiceDate.year
        })
      }
      setInvoiceList(copy)
  }

  React.useEffect(()=> {
    sortingList()
    filterList() 

    return () => {setFilteredList([])}
  }, [sortedListChoice, filteredListChoice])


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
        sortedListChoice = {sortedListChoice}
        setSortedListChoice = {setSortedListChoice}
        filteredListChoice = {filteredListChoice}
        setFilteredListChoice = {setFilteredListChoice}
        filteredList = {filteredList}
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
