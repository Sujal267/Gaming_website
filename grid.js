import Navbar from './navabr'
import Footer from './footer'
import p1 from './g1.png'
import p2 from './g2.png'
import p3 from './g3.png'
const s2={color:'rgb(248, 105, 10)'}
const s1={listStyle:'none'}

function Grid(){
    return (
        <>
        <Navbar />
        <div className='container-fluid ' id='body2'>
            <div className='row'>
                <div className='col-12'>
                <h3 className='text-center m-5' style={s2}>Grid Legends</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-light text-center p-3 lh-lg'>GRID Legends delivers thrilling wheel-to-wheel motorsport and edge-of-your-seat action around the globe. <br></br>Create your dream motorsport events, hop into live multiplayer  <br></br>races, be part of the drama in an immersive virtual production story, and embrace the sensation of spectacular action racing.</p>
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
                            <th>Grid Legends</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Release date</td>
                            <td>24 Feb 2022</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>Electronics Arts</td>
                        </tr>
                        <tr>
                            <td>Game Style</td>
                            <td>Sports Video Game,Car Racing Game</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 text-light text-center'>
                    <h3>FIFA 22 System Requirements</h3>
                    <ul style={s1}>
                        <li className='text-light text-center'>OS: 64-bit Windows 10/11</li>
                        <li className='text-light text-center'>RAM: 8 GB.</li>
                        <li className='text-light text-center'>Processor: Core i3-7300 or better.</li>
                        <li className='text-light text-center'>Graphics: NVIDIA GTX 950</li>
                        <li className='text-light text-center'>Hard Drive: 80GB available space</li>
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
export default Grid