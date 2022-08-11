function MainPageInvoiceCard (props) {
    return (
        <div className={"MainPage-Invoice-Card glassMinor"} onClick = {props.toggleToSelectedInvoice}>
            <h2 className="Invoice-Card-Id">#{props.invoice.id}</h2>
            <p className="Invoice-Card-Date">Due {`${props.invoice.invoiceDate.day} ${props.invoice.invoiceDate.monthName} ${props.invoice.invoiceDate.year}`} </p>
            <p className="Invoice-Card-Name">{props.invoice.toName}</p>
            <h3 className="Invoice-Card-Price">${props.invoice.paymentTotal}</h3>
            <p className="Invoice-Card-Status">Status: {props.invoice.status}</p>
        </div>
    )
}

export {MainPageInvoiceCard}