import go from 'C:/Users/hp/Desktop/welcome.jpg';
function Example2()
{
    function show()
    {
        alert("Hello Buddy");
        console.warn("dikat h bhai esme koi");
    }
    return(
        <div>
            <h1 className="a">Softech Infoways</h1>
            <img src={go} className='Image' />
            <button onClick={show}>Press here</button>
        </div>
    )
}

export default Example2;