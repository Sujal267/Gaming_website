import Navbar from './navabr'
import Footer from './footer'
import m1 from './pcgames/m1.png'
import m2 from './pcgames/m2.png'
import m3 from './pcgames/m3.png'
import m4 from './pcgames/m4.png'
import m5 from './pcgames/m5.png'
import m6 from './pcgames/m6.png'
import m7 from './pcgames/m7.png'
import m8 from './pcgames/m8.png'
import m9 from './pcgames/m9.png'
const s1={height:'300px'}

function Mobile(){
    return (
        <>
        <Navbar />
        <div className='container-fluid' id='body3'>
            <div className='row'>
                <div className='col-12'>
                    <h3 className='text-warning p-4 ms-5'>Mobile Games</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                <div className="card-group m-4">
  <div className="card m-2">
    <img src={m1} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Butter Royale</h5>
      <p className="card-text">Butter Royale is essentially a wacky, off-the-wall food fight where your weapons are all centered around food.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={m2} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Cat quest 2</h5>
      <p className="card-text">Cat Quest 2, as you might guess, is the follow-up to the beloved "meow-vellous" action RPG, Cat Quest. Cat Quest 2 picks up where the original game left off</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={m3} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Dead cells</h5>
      <p className="card-text">Dead Cells will give your mobile device an action game for the ages. The "Metroidvania" gameplay has plenty of depth</p>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                <div className="card-group m-4">
  <div className="card m-2">
    <img src={m4} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Alto's Odyssey</h5>
      <p className="card-text">Dozens of games are similar to Alto's Odyssey, but none of them are quite as compelling. This relaxing endless runner has players snowboarding down gorgeous</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={m5} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Monument Valley 2</h5>
      <p className="card-text">With no shortage of puzzle games on mobile storefronts, Monument Valley and its sequel are some of the most unique experiences in the genre.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={m6} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Shadowgun Legends</h5>
      <p className="card-text">something you already own on a console. However, sometimes you just want to play a shooter on your phone, and this scratches that itch.</p>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                <div className="card-group m-4">
  <div className="card m-2">
    <img src={m7} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Spaceteam</h5>
      <p className="card-text">some of the most popular mobile games are the ones you play with the people around you. Instead of recommending a reliable game of headbands or charades, you might want to try Spaceteam.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={m8} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Pokémon GO</h5>
      <p className="card-text"> Pokémon GO was an inherently great concept when it first launched, and the game has only improved since.</p>
    </div>
  </div>
  <div className="card m-2">
    <img src={m9} className="card-img-top" style={s1}/>
    <div className="card-body">
      <h5 className="card-title">Pocket City</h5>
      <p className="card-text">Plenty of city builders and "idle" games flood app stores week to week. While most of them are just vehicles for advertisements and microtransactions, Pocket City is probably the closest thing to a proper Tycoon game on mobile</p>
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
export default Mobile