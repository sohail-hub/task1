import fimg from './images/download.jpg'
function Footer(){
    return(
        <>
        <hr/>
        <footer className="container-fluid text-center fstyle">
  <div className="row">
      <div className="col-sm-3"></div>
    <div className="col-sm-3">
     
<img src={fimg} className="fimg" alt=""/>

    </div>
    <div className="col-sm-3">
<p><b>Address:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
<p><b>Contact num:</b> +92-362-9838870 </p>
<p><b>E.mail:</b> heaven@g.mail.com </p>
    
</div>
<div className="col-sm-3"></div>
  </div>
  
</footer>

        </>
    )

}
export default Footer