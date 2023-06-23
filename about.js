import Footer from './footer'  
import Navbar from './navabr'
import {Link} from 'react-router-dom'
import {BsPersonCircle} from 'react-icons/bs'
import {BsLock} from 'react-icons/bs'
const s1={width:'450px',height:'500px'}
const s2={textDecoration:'none'}


function About(){
    return (
        <>
        <Navbar />
        < div className='container-fluid' id='body4'>
            <div className='row'>
                <div className='col-12'>
                    <div className='container bg-dark ' id='box' style={s1}>
                        <form action='/' method='post'>
                        <div className='row'>
                            <div className='col-12'>
                                <h3 className='text-light text-center m-4'>Login</h3>
                            </div>
                        </div>
                        <div className='row m-5'>
                            <div className='col-12'>
                            <div class="input-group input-group-lg">
                                <span class="input-group-text" id="basic-addon1"><BsPersonCircle size={20} /></span>
                                <input type="text " className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            </div>
                        </div>
                        <div className='row m-5'>
                            <div className='col-12'>
                            <div class="input-group input-group-lg">
                                <span class="input-group-text" id="basic-addon1"><BsLock size={20} /></span>
                                <input type="text " className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                            <div class="d-grid gap-2 col-6 m-4 mx-auto">
                                <button class="btn btn-primary" type="button">Sign In</button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <a href='#'  id='forgot' style={s2}>Forgot your Password</a>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        <Footer /> 
        </>
    )
}
export default About