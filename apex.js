import Navbar from './navabr'
import Footer from './footer'
import p1 from './a1.png'
import p2 from './a2.png'
import p3 from './a3.png'
const s2={color:'rgb(248, 105, 10)'}
const s1={listStyle:'none'}

function Apex(){
    return (
        <>
        <Navbar />
        <div className='container-fluid ' id='body2'>
            <div className='row'>
                <div className='col-12'>
                <h3 className='text-center m-5' style={s2}>Apex Legends</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-light text-center p-3 lh-lg'>Conquer with character in Apex Legends, a free-to-play* Hero shooter<br></br> where legendary characters with powerful abilities team up to battle for fame & fortune<br></br> on the fringes of the Frontier.
Master an ever-growing roster<br></br> of diverse Legends, deep-tactical squad play, and bold, new innovations that <br></br>go beyond the Battle Royale experience — all within a rugged world where anything<br></br> goes. Welcome to the next evolution of Hero Shooter.</p>
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
                            <th>Apex Legends</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Release date</td>
                            <td>5 November 2020</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>Electronics Arts</td>
                        </tr>
                        <tr>
                            <td>Game Style</td>
                            <td>Action game, Adventure game</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 text-light text-center'>
                    <h3>Apex Legends System Requirements</h3>
                    <ul style={s1}>
                        <li className='text-light text-center'>OS: 64-bit Windows 7</li>
                        <li className='text-light text-center'>RAM: 8 GB.</li>
                        <li className='text-light text-center'>Processor: Core i3-7300 or better.</li>
                        <li className='text-light text-center'>Graphics CARD: Radeon /GeForce</li>
                        <li className='text-light text-center'>Hard Drive: 76GB available space</li>
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
export default Apex