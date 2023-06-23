import Navbar from './navabr'
import Footer from './footer'
import g1 from './pcgames/g1.png'
import g2 from './pcgames/g2.png'
import g3 from './pcgames/g3.png'
import g4 from './pcgames/g4.png'
import g5 from './pcgames/g5.png'
import g6 from './pcgames/g6.png'
import g7 from './pcgames/g7.png'
import g8 from './pcgames/g8.png'
import g9 from './pcgames/g9.png'
const s1={height:'300px'}

function Pc(){
    return (
        <>
        <Navbar />
        <div className='container-fluid' id='body3'>
            <div className='row'>
                <div className='col-12'>
                    <h3 className='text-warning p-4 ms-5'>PC Games</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                <div className="card-group m-4">
  <div className="card m-2">
    <img src={g1} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Forza Horizon 4</h5>
      <p className="card-text">Forza Horizon 4 is a 2018 racing video game developed by Playground Games and published by Microsoft Studios. It was released on 2 October 2018 on Xbox One and Microsoft Windows after being announced at Xbox's E3 2018 conference.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={g2} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Gears of war 4</h5>
      <p className="card-text">Gears of War 4 is a 2016 third-person shooter video game developed by The Coalition and published by Microsoft Studios for Microsoft Windows and Xbox One</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={g3} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Rise of the Tomb Raider</h5>
      <p className="card-text">Rise of the Tomb Raider is a 2015 action-adventure video game developed by Crystal Dynamics and published by Microsoft Studios and Square Enix's European subsidiary.</p>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                <div className="card-group m-4">
  <div className="card m-2">
    <img src={g4} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Quantum Break</h5>
      <p className="card-text">Quantum Break is a 2016 science fiction action-adventure third-person shooter video game developed by Remedy Entertainment and published by Microsoft Studios for Microsoft Windows</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={g5} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Tom Clancy's Rainbow Six Siege</h5>
      <p className="card-text">Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={g6} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Cyberpunk 2077</h5>
      <p className="card-text">Cyberpunk 2077 is an action role-playing video game developed by CD Projekt Red and published by CD Projekt. </p>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                <div className="card-group m-4">
  <div className="card m-2">
    <img src={g7} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Hitman Boold money</h5>
      <p className="card-text">Hitman: Blood Money is a 2006 stealth video game developed by IO Interactive and published by Eidos Interactive.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={g8} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">GTA V</h5>
      <p className="card-text">Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={g9} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Avengers</h5>
      <p className="card-text">Marvel's Avengers is a 2020 action-adventure brawler game developed by Crystal Dynamics and published by Square Enix's European subsidiary</p>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>




        <Footer />
        </>
    )
}
export default Pc