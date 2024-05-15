function User(props)
{
    return(
        <div>
            <table className='tab2' cellPadding={10}cellSpacing={0} border="5">
                <tbody>
                <tr><td>Name</td><td>{props.name}</td></tr>
                <tr><td>Age</td><td>{props.age}</td></tr>
                <tr><td>Address</td><td>{props.address}</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default User;