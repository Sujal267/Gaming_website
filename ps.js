import Navbar from './navabr'
import Footer from './footer'
import s1 from './pcgames/s1.png'
import s2 from './pcgames/s2.png'
import s3 from './pcgames/s3.png'
import s4 from './pcgames/s4.png'
import s5 from './pcgames/s5.png'
import s6 from './pcgames/s6.png'
import s7 from './pcgames/s7.png'
import s8 from './pcgames/s8.png'
import s9 from './pcgames/s9.png'
const t1={height:'300px'}

function Ps(){
    return (
        <>
        <Navbar />
        <div className='container-fluid' id='body3'>
            <div className='row'>
                <div className='col-12'>
                    <h3 className='text-warning p-4 ms-5'>PlayStation Games</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                <div className="card-group m-4">
  <div className="card m-2">
    <img src={s1} className="card-img-top" style={t1}/>
    <div className="card-body">
      <h5 className="card-title">God of War</h5>
      <p className="card-text">God of War Ragnarök is an upcoming action-adventure game developed by Santa Monica Studio and will be published by Sony Interactive Entertainment</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={s2} className="card-img-top" style={t1}/>
    <div className="card-body">
      <h5 className="card-title">NBA 2k23</h5>
      <p className="card-text">NBA 2K23 is the latest official title in the world-renowned, best-selling NBA 2K series, create your own legacy on the blacktop check out all the features .</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={s3} className="card-img-top" style={t1}/>
    <div className="card-body">
      <h5 className="card-title">Assassin's Creed Valhalla</h5>
      <p className="card-text">Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft.</p>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                <div className="card-group m-4">
  <div className="card m-2">
    <img src={s4} className="card-img-top" style={t1}/>
    <div className="card-body">
      <h5 className="card-title">Call of Duty MW</h5>
      <p className="card-text">Call of Duty: Modern Warfare is a 2019 first-person shooter game developed by Infinity Ward and published by Activision.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={s5} className="card-img-top" style={t1}/>
    <div className="card-body">
      <h5 className="card-title">Farcry 6</h5>
      <p className="card-text">Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto and published by Ubisoft.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={s6} className="card-img-top" style={t1}/>
    <div className="card-body">
      <h5 className="card-title">W2k22</h5>
      <p className="card-text">WWE 2K22 is a 2022 professional wrestling sports simulation video game developed by Visual Concepts and published by 2K Sports.</p>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                <div className="card-group m-4">
  <div className="card m-2">
    <img src={s7} className="card-img-top" style={t1}/>
    <div className="card-body">
      <h5 className="card-title">Hitman 3</h5>
      <p className="card-text">Hitman 3 is a 2021 stealth game developed and published by IO Interactive. It is the sequel to the 2018 video game Hitman 2,</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={s8} className="card-img-top" style={t1}/>
    <div className="card-body">
      <h5 className="card-title">Call of Duty: Black Ops Cold War</h5>
      <p className="card-text">Call of Duty: Black Ops Cold War is a 2020 first-person shooter video game developed by Treyarch and Raven Software and published by Activision.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={s9} className="card-img-top" style={t1}/>
    <div className="card-body">
      <h5 className="card-title">Red Dead Redemption 2</h5>
      <p className="card-text">Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.</p>
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
export default Ps