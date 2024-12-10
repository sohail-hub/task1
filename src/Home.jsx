import veg from './images/veg.jpg'
import nonveg from './images/dish3.jpg'
import muttan from './images/dish2.jpg'
import nehari from './images/dish3.jpg'
import chicken from './images/chicken.jpg'
import aloosamosa from './images/dish4.jpg'
import biryani from './images/dish6.jpg'
import chanay from './images/dish5.jpg'
function Home(){
    return(
        <>
        <div className="container mt-5 ">
    <div className="row size">
      <div className="col-sm-6 ">
        <h3>VEG</h3><a href="#">
        
        <img src={veg} height="300" width="500" alt="images" />
        </a>
      </div>
      <div className="col-sm-6"> 
        <h3>NON VEG</h3><a href="#">
        <img src={nonveg} height="300" width="500" alt="images"/></a>
      </div>
      </div>

        </div>
        <div className="container mt-5">
  <div className="row size">
    <div className="col-sm-4">
      <h3>Muttan Khari</h3><a href="#">
      
      <img src={muttan} height="200" width="400" alt="images" />
      <p></p></a>
    </div>
    <div className="col-sm-4"> 
      <h3>Nehari</h3><a href="#">
      <img src={nehari}height="200" width="400" alt="images"/></a>
    </div>
    <div className="col-sm-4"> 
      <h3>Chicken Khari</h3><a href="#">        
      <img src={chicken}height="200" width="400" alt="images"/></a>
    </div>
  </div>
</div>


<div className="container mt-5">
  <div className="row size">
    <div className="col-sm-4">
      <h3>Aloo Samosa</h3><a href="#">
      
      <img src={aloosamosa} height="200" width="400" alt="images"/></a>
    </div>
    <div className="col-sm-4"> 
      <h3>Chicken biryani</h3><a href="#">
      <img src={biryani} height="200" width="400" alt="images"/></a>
    </div>
    <div className="col-sm-4">
      <h3>Lahori Chanay</h3><a href="#">      
      <img src={chanay} height="200" width="400" alt="images"/></a>
    </div>
  </div>
</div>
        </>
    )
}
export default Home