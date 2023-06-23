import {Link} from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
const s1={backgroundColor:'rgb(6, 171, 14)',height:'30px'}
const s2={backgroundColor:'rgb(117, 115, 115)'}
const s3={color:'rgb(248, 105, 10)'}
const s4={textDecoration:'none',lineHeight:'35px'}
const s5={float:'right',width:'40px'}
function Footer(){
    return (
        <>
        <div className="container-fluid" style={s1}>
            <div className="row">
                <div className="col-12">
                    <BsInstagram style={s5} size={30}/>
                    <BsFacebook style={s5} size={30}/>
                    <BsTwitter style={s5} size={30}/>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={s2}>
            <div className="row">
                <div className="col-12">
                    <div className="container m-5">
                        <div className="row">
                            <div className="col-3">
                                <h4 className="text-light">Game<span style={s3}>Store</span></h4>
                                <Link to="/" style={s4} className="text-light">Home</Link>
                            </div>
                            <div className="col-3">
                                <h4 className="text-light">Browse Games</h4>
                                <Link to="/browsegames/fifa" style={s4} className="text-light d-block">Fifa 22</Link>
                                <Link to="/browsegames/battlefield" style={s4} className="text-light d-block">Battlefield 1</Link>
                                <Link to="/browsegames/apex" style={s4} className="text-light d-block">Apex Legend</Link>
                                <Link to="/browsegames/grid" style={s4} className="text-light d-block">Grid Legends</Link>
                            </div>
                            <div className="col-3">
                                <h4 className="text-light">Platforms</h4>
                                <Link to="/platforms/pc" style={s4} className="text-light d-block">PC</Link>
                                <Link to="/platforms/playstation" style={s4} className="text-light d-block">PlayStation</Link>
                                <Link to="/platforms/mobile" style={s4} className="text-light d-block">Mobile</Link>
                            </div>
                            <div className="col-3">
                            <h4 className="text-light">About Us</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Footer