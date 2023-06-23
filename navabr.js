import {Link} from 'react-router-dom'
import l1 from './logo1.png'
const s1={border:'solid 3px black'}
const s2={color:'rgb(248, 105, 10)'}
const s3={backgroundColor:'rgb(23, 23, 23)'}
const s4={float:'right'}


function Navbar(){
    return (
        <>
        <div className="sticky-top ">
        <div className="container-fluid" style={s3}>
            <div className="row">
                <div className="col-12">
                    <a href="#"><img src={l1} style={s4} /></a>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg sticky-top" style={s1}>
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/" id="gamestore">Game<span style={s2}>Store</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item">
          <Link className="nav-link active mx-5" aria-current="page" to="/" id="home">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="text-dark nav-link dropdown-toggle mx-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="browse">
          Browse games
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><Link className="dropdown-item text-light" to="/browsegames/fifa" id="dropmenu">Fifa 22</Link></li>
            <li><Link className="dropdown-item text-light" to="/browsegames/battlefield" id="dropmenu">Battlefield 1</Link></li>
            <li><Link className="dropdown-item text-light" to="/browsegames/apex" id="dropmenu">Apex Legends</Link></li>
            <li><Link className="dropdown-item text-light" to="/browsegames/grid" id="dropmenu">Grid Legends</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="text-dark nav-link dropdown-toggle mx-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="platforms">
            Platforms
          </a>
          <ul className="dropdown-menu bg-dark ">
            <li><Link className="dropdown-item text-light" to="/platforms/pc" id="dropmenu">PC</Link></li>
            <li><Link className="dropdown-item text-light" to="/platforms/playstation" id="dropmenu">PlayStaion</Link></li>
            <li><Link className="dropdown-item text-light" to="/platforms/mobile" id="dropmenu">Mobile</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-5" aria-current="page" to="/aboutus" id="about">About Us</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
        </>
    )
}
export default Navbar