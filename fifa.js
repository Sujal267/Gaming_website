import Navbar from './navabr'
import Footer from './footer'
import p1 from './fifa1.png'
import p2 from './fifa2.png'
import p3 from './fifa3.png'
const s2={color:'rgb(248, 105, 10)'}
const s1={listStyle:'none'}

function Fifa(){
    return (
        <>
        <Navbar />
        <div className='container-fluid ' id='body2'>
            <div className='row'>
                <div className='col-12'>
                <h3 className='text-center m-5' style={s2}>Fifa 22</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-light text-center p-3 lh-lg'>FIFA 22 Download Game was released on 27 September 2021. FIFA 22 Pc Game is a game<br></br> developed by EA Vancouver, EA Romania, and published by Electronic Arts. If You Love Playing world-famous <br></br>sports games, then the FIFA 22 game is Perfect. This terrifying world-famous sports Game<br></br> theme is given, which made this game very liked. It will be playing football video<br></br> games. The game FIFA 22 free download PC is available on Platforms here on PlayStation 4, <br></br>PlayStation 5, Xbox One, Xbox Series X and Series S, Nintendo Switch.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 ' id='carousel'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active ">
      <img src={p3} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={p1} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={p2} className="d-block w-100" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className='col-12' id='table'>
                <table class="table table-dark table-hover text-light w-50 m-5" >
                    <thead>
                        <tr>
                            <th>Game Name</th>
                            <th>Fifa 22</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Release date</td>
                            <td>27 September 2021</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>Electronics Arts</td>
                        </tr>
                        <tr>
                            <td>Game Style</td>
                            <td>Sports Video Game, Simulation Game</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 text-light text-center'>
                    <h3>FIFA 22 System Requirements</h3>
                    <ul style={s1}>
                        <li className='text-light text-center'>OS: Windows 8</li>
                        <li className='text-light text-center'>RAM: 8 GB.</li>
                        <li className='text-light text-center'>Processor: Core i3-7300 or better.</li>
                        <li className='text-light text-center'>Graphics CARD: Radeon /GeForce</li>
                        <li className='text-light text-center'>Hard Drive: 50GB available space</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <button type="button" class="btn btn-primary" id='button'>Buy Now</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Fifa