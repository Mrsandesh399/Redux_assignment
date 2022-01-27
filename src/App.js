// import logo from './logo.svg';
// import './App.css';
// import {connect} from 'react-redux'

// function App(props)
// {
//   return (
//     <div className="App">
//       <h2>Redux Counter Example</h2>
//       <p>{props.mycounter}</p>
//       <button onClick={()=>props.counter()}>Addition</button><br/><br/>
//       <button onClick={()=>props.counter1()}>Subtraction</button><br/><br/>
//       <button onClick={()=>props.reset()}>Reset</button><br/><br/>
//     </div>
//   );
// }

// const mapStateToProps=(state)=>{
//   return{
//      mycounter:state.count
//   }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return{
//     counter:function(){
//       dispatch({type:'INC',payload:2})
//     },
//     counter1:function(){
//       dispatch({type:'DEC',payload:2})
//     },
//     reset:function(){
//       dispatch({type:'RESET'})
//     }
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);

//---------------------------------- using hooks -------------------------------
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import postData from "./middleware/thunk";

function App(props) {
    const mycounter = useSelector((state) => state.count);
    const postdata = useSelector((state) => state.postdata);
    console.log(postdata);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h2>Redux Counter Example</h2>
            <p>{mycounter}</p>
            <button onClick={() => dispatch({ type: "INC", payload: 2 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "DEC", payload: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            {/* {postdata != undefined && 
      postdata.map(post=>
        <p>{post.title}</p>)
      } */}
        </div>
    );
}
export default App;

// const mapStateToProps=(state)=>{
//   return{
//      mycounter:state.count
//   }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return{
//     counter:function(){
//       dispatch({type:'INC',payload:2})
//     },
//     counter1:function(){
//       dispatch({type:'DEC',payload:2})
//     },
//     reset:function(){
//       dispatch({type:'RESET'})
//     }
//   }
// }

// export default (App);
