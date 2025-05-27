
import { Routes, Route, Link, useNavigate } from 'react-router';
import Info from './Info';
function Practice06(){

    let navigate = useNavigate();

    return(
        <div>
            {/* <button><Link to = '/'>Main</Link></button>
            <button><Link to = '/info'>/info</Link></button>
            <button><Link to = '/mypage'>/mypage</Link></button>
            <button><Link to = '/cart'>/cart</Link></button> */}
            
            <button onClick={()=>{navigate("/")}}>Main</button>
            <button onClick={()=>{navigate("/info")}}>/info</button>
            <button onClick={()=>{navigate("/mypage")}}>/mypage</button>
            <button onClick={()=>{navigate("/cart")}}>/cart</button>
            
            <Routes>
                <Route path='/' element={<Info text='Main' />}></Route>
                <Route path='/info' element={<Info text='info 공간입니다' />}></Route>
                <Route path='/mypage' element={<Info text='mypage 공간입니다' />}></Route>
                <Route path='/cart' element={<Info text='cart 공간입니다' />}></Route>
            </Routes>
        </div>

        
    );
}

export default Practice06;