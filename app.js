import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Indexbody2 from './indexbody2'
import Fifa from './fifa'
import Battlefield from './battlefield'
import Apex from './apex'
import Grid from './grid'
import Pc from './pc'
import Ps from './ps' 
import Mobile from './mobile'
import About from './about'
function App(){
    return (
        <>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Indexbody2 />}></Route>
            <Route path='/browsegames/fifa' element={<Fifa />}></Route>
            <Route path='/browsegames/battlefield' element={<Battlefield />}></Route>
            <Route path='/browsegames/apex' element={<Apex />}></Route>
            <Route path='/browsegames/grid' element={<Grid />}></Route>
            <Route path='/platforms/pc' element={<Pc />}></Route>
            <Route path='/platforms/playstation' element={<Ps />}></Route>
            <Route path='/platforms/mobile' element={<Mobile />}></Route>
            <Route path='/aboutus' element={<About />}></Route>
          </Routes>
          </BrowserRouter>
        </>
    )
}
export default App