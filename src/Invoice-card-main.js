function InvoiceCardMain (props) {
    return (
        <div>
            <h2>{props.items.id}</h2>
            <h3>{props.items.username}</h3>
            <h4>${props.items.value}</h4>
            <p>Status: {props.items.status}</p>
        </div>
    )
}

export {InvoiceCardMain}