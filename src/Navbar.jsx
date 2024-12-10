import logo from './images/download.jpg'
function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html"><img src={logo} width="70px" height="50px"/></a>
      <button className="navbar-toggler btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="menu.html">MENU</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">ABOUT</a>
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="review.html">REVIEW</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="contact.html">CONTACT US</a>
          </li> 
        </ul>
      </div>
    </div>
  </nav>
        
    </>
)
}

export default Navbar