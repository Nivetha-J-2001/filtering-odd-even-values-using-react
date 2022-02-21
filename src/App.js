import React,{useState} from 'react';
import "./app.css"
function App (){
  const [state, setState] = useState(
    {
      arr:[],
      odd:[],
      even:[]
    }
)
    const [showvalue,setshowvalve]=useState(false);
    const [showodd,setshowodd]=useState(false);
    const [showeven,setshoweven]=useState(false);
    const changenumberHandler= (e) => {
    setState({
      arr:e.target.value.split(',')
    });
    }
    const handleSubmitClick= (e) => {
      e.preventDefault();
      console.log(state.arr);
      setshowvalve(true);
    }
    const handleoddclick = (e) => {
      e.preventDefault();
      console.log("odd numbers : ");
      state.odd=state.arr.filter(n => n%2 !== 0);
      setshowodd(true);
    }
    const handleevenclick = (e) => {
      e.preventDefault();
      console.log("even numbers : ");
      state.even=state.arr.filter(n => n%2 === 0 );
      setshoweven(true);
    }
        return (
          <div id="content">
            <br/>
            <div>
              <input type="text" placeholder ="Enter the numbers"
                value={state.arr} onChange={changenumberHandler}/>
              <br /><br/>
               <button type="submit" className="btn btn-success" id="GenerateNumber" onClick={handleSubmitClick}>Generate Random number</button>
              <br /><br/>
              {showvalue && <div id="originalList">{state.arr.map( x => <dl>{x}</dl>)}</div>}
              <div>
                <button type="submit" className="btn btn-success" id='oddnumber' onClick={handleoddclick}>ODD</button>
                <button type="submit" className="btn btn-success" id='evennumber' onClick={handleevenclick}>EVEN</button>
              </div>
              <br/><br/>
              <h1><b>Filtered Array</b></h1>
              <br/><br/>
              <div>
               {showodd && <div id="filteredList"><h3>Odd Numbers : </h3>{state.odd.map( x => <dl>{x}</dl>)}</div>}
               </div>
               <div>
               {showeven && <div id="filteredList"><h3>Even Numbers : </h3>{state.even.map( x => <dl>{x}</dl>)}</div>}
               </div>
              </div>
        </div>
        )
}

export  default App;