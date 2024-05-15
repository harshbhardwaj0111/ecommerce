import ShoeCamp from './ShoeCamp.jpg'
function About()
{
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return(
        <div>
            <h1 align="center"><u>About Us</u></h1>
            <h3 style={{color:'red'}}>OUR GOAL :</h3><hr style={{color:'black'}}/>
            {/* <div class="shg-box-overplay"></div> */}
            {/* <div class="shg-box-content">
            <div class='shg-rich-text shg-theme-content'> */}
            <p style={{textAlign:"center"}}>
                <strong>
                    mehtashoe123.com is all about footwear. We have been in the shoe business for over 20 years. Yes, you read that correctly, over two decacdes.<img src={ShoeCamp} width={500} height={500} /><br /> 
                    Today we are proud to offer our best customer service to patrons both online here at mehtashoe123.com and in our shoe stores in the Indianapolis,<br />
                    IN area. For more information about the 130+ history of Mehta's Footwear, visit our history page.
                </strong>
                
            </p>
            {/* </div>
            </div> */}
        </div>
    )
}

export default About;