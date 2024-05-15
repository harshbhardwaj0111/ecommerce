import Carousel from 'react-bootstrap/Carousel';
import Shoe5 from './Shoe5.jpg';
import Shoe2 from './Shoe2.jpg';
import Shoe3 from './Shoe3.jpg';
import Shoe6 from './Shoe6.jpg';
import './Slider.css';
function Sliders()
{
    return(
      <div>
        <Carousel >
          <Carousel.Item>
            <img src={Shoe6} width={"1550px"} height={"650px"} /> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={Shoe2} width={"1550px"} height={"650px"} /> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={Shoe3} width={"1550px"} height={"650px"} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Shoe5} width={"1550px"} height={"650px"} />
          </Carousel.Item>
        </Carousel>
        <h1 ><u>THE MEHTA SHOE CAMP</u></h1>
      </div>
    )
}
export default Sliders;