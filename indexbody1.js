import {Link} from 'react-router-dom'
const s1={lineHeight:'55px',fontSize:'20px'}
const s3={fontSize:'20px'}
const s2={width:'450px'}
const s4={textDecoration:'none'}
function Indexbody1(){
    return (
        <>
        <div className="container-fluid" id="body1">
            <div className="row">
                <div className="col-12">
                    <p className="text-warning text-center pt-5" style={s3}>GameStore</p>
                    <p className="text-light text-center " style={s3}>Sports</p>
                    <p className="text-light text-center p-4" style={s1}>Play the very best of soccer, football, ice hockey, golf, basketball,<br/> Formula 1® and MMA games with Electronic Arts’ sports titles. Dominate the World's Game in our <br/>FIFA games, rise to gridiron greatness in the Madden NFL series, hit the ice with hockey gameplay so <br/>authentic you might want to bring a mouth guard with our NHL games, and more!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="card mb-3 bg-dark text-light mx-auto" style={s2}>
  <div className="row g-0">
    <div className="col-md-4">
      <Link to='/browsegames/fifa'><img src="fifa.png" className="img-fluid rounded-start"/></Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <Link to='/browsegames/fifa' style={s4} className='text-warning'><h5 className="card-title">Fifa 22</h5></Link>
        <p className="card-text">FIFA 22 is a football simulation video game published by Electronic Arts. It is the 29th installment in the FIFA series, and was released worldwide on 1 October 2021 for Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X/S.</p>
        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="card mb-3 bg-dark text-light mx-auto" style={s2}>
  <div className="row g-0">
    <div className="col-md-4">
      <Link to='/browsegames/battlefield'><img src="battlefiled.png" className="img-fluid rounded-start"/></Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <Link to='/browsegames/battlefield' style={s4} className='text-warning'><h5 className="card-title">Battlefield 1</h5></Link>
        <p className="card-text">Battlefield 1 is a first-person shooter game developed by DICE and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4 and Xbox One in October 2016.</p>
        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="card mb-3 bg-dark text-light mx-auto" style={s2}>
  <div className="row g-0">
    <div className="col-md-4">
      <Link to='/browsegames/apex'><img src="apex.png" className="img-fluid rounded-start"/></Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <Link to='/browsegames/apex' style={s4} className='text-warning'><h5 className="card-title">Apex Legends</h5></Link>
        <p className="card-text">Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One in February 2019, for Nintendo Switch in March 2021</p>
        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="card mb-3 bg-dark text-light mx-auto" style={s2}>
  <div className="row g-0">
    <div className="col-md-4">
      <Link to='/browsegames/grid'><img src="grid.png" className="img-fluid rounded-start"/></Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <Link to='/browsegames/grid' style={s4} className='text-warning'><h5 className="card-title">Grid Legends</h5></Link>
        <p className="card-text">Grid Legends (stylised as GRID Legends) is a 2022 racing video game developed by Codemasters and published by Electronic Arts. It is the fifth installment in the Grid franchise. The game was released for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X/S on February 25, 2022.</p>
        <a className="btn btn-primary" href="#" role="button">Buy Now</a>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}
export default Indexbody1