function MainPageInvoiceCard (props) {
    return (
        <div onClick = {props.toggleToSelectedInvoice}>
            <h2>#{props.items.id}</h2>
            <h3>{props.items.username}</h3>
            <h4>${props.items.value}</h4>
            <p>Status: {props.items.status}</p>
            <p>{props.items.address}, {props.items.city}</p>
        </div>
    )
}

export {MainPageInvoiceCard}