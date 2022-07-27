function MainPageInvoiceCard (props) {
    return (
        <div className={"MainPage-Invoice-Card glassMinor"} onClick = {props.toggleToSelectedInvoice}>
            <h2>#{props.invoice.id}</h2>
            <p>Due {`${props.invoice.invoiceDate.day} ${props.invoice.invoiceDate.monthName} ${props.invoice.invoiceDate.year}`} </p>
            <p>{props.invoice.toName}</p>
            <h3>${props.invoice.paymentTotal}</h3>
            <p>Status: {props.invoice.status}</p>
        </div>
    )
}

export {MainPageInvoiceCard}