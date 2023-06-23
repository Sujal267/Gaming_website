import Navbar from './navabr'
import Footer from './footer'
import p1 from './b1.png'
import p2 from './b2.png'
import p3 from './b3.png'
const s2={color:'rgb(248, 105, 10)'}
const s1={listStyle:'none'}

function Battlefield(){
    return (
        <>
        <Navbar />
        <div className='container-fluid ' id='body2'>
            <div className='row'>
                <div className='col-12'>
                <h3 className='text-center m-5' style={s2}>Battlefield 1</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-light text-center p-3 lh-lg'>Battlefield 1 has been developed by EA DICE and is published under the banner of Electronic Arts.<br></br> This game was released on 21st October, 2016 worldwide for different platforms which includes PlayStation 4, <br></br>Microsoft Windows and Xbox One. Battlefield 1 is the 15th installment of the famous <br></br>Battlefield series.Just like its predecessors Battlefield 1 is an amazing first person shooter which is set<br></br> in the WWI era. Inspired by the historic events of the deadliest war mankind has ever seen, Battlefield 1 will<br></br> allow you to make use of the weaponry of the World War I which includes semi automatic<br></br> rifles, artillery, bolt action rifles and flamethrowers etc. </p>
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
                            <th>Battlefield 1</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Release date</td>
                            <td>12 june 2017</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>Electronics Arts</td>
                        </tr>
                        <tr>
                            <td>Game Style</td>
                            <td>Action Game</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 text-light text-center'>
                    <h3>Battlefield 1 System Requirements</h3>
                    <ul style={s1}>
                        <li className='text-light text-center'>Operating System: Windows 7/8/8.1/10</li>
                        <li className='text-light text-center'>RAM: 8 GB.</li>
                        <li className='text-light text-center'>CPU: Intel Core i5 or later.</li>
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
export default Battlefield