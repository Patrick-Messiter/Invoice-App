import {InvoiceCardMain} from './Invoice-card-main'


function MainPage (props) {
    
    function testButton () {
        props.setInvoiceList(prevState => {
            return (
                [...prevState, 
                {
                    id: "#VZ8465",
                    username: "Delilah Ridings",
                    value: 312,
                    status: "pending",
                }]
            )
        })
    }

    const mapInvoices = props.invoiceList.map(currentInv => {
        return <InvoiceCardMain items={currentInv} />
    })
    
    return (
        <main>
            <h1>Invoices</h1>
            <button onClick={testButton}>Click for Invoice!</button>
            {mapInvoices}
        </main>
    )
}

export {MainPage}