export const OrderItem = (props) => {

console.log(props.item);
    return (
        <>

        <div style={{border: "1px solid pink", margin: "15px", fontSize: 17, paddingBottom: 20}}>
            <p>{props.item[0]} - {props.item[1].join(', ')}</p>
        </div>

    </>  
    )
}