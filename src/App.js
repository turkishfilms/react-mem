import React from "react"
import ReactDOM from "react-dom"
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.hello = "nigga"
    this.unroundedNum = 50 //at least this many will be shown
    this.itemRoundNum = 1
    this.state = {
      unroundedNum: 50, //at least this many will be shown
      itemRoundNum: 1, //the multiple of number of items
      itemCount: Math.round(this.unroundedNum / this.itemRoundNum) * this.itemRoundNum,
      itemChoices: [1, 2, 3, 4, 5, 6, 7, 8, 9], //symbol selection
      mode: 0,
      /*
             item schedule : 0,
             grid : 1,
             */
      numItemsShown: 3,
      itemsShownSchedule: [], //this schedule will be repeated
      specialRules: [],
      /*
             trigger value
             if trigger is true, value(s) will be omit from selection
             */
      items: [],
      currentIndex: 0,
      correct: '',
      raw: '',
      shown: 0
    }
  }

  prevItem() {
    if (this.state.currentIndex > 1) {
      let tate
      tate.currentIndex -= this.state.numItemsShown
      this.displayItem()
    }
  }

  nextItem() {
    let tate
    if (!this.state.items.length) return
    if (this.state.currentIndex < this.state.items.length) tate.currentIndex += this.state.numthis.state.ItemsShown
    this.displayItem()
  }

  displayItem() {
    let shownNums = []
    for (let i = 0; i < this.state.numthis.state.ItemsShown; i++) {
      shownNums.push(this.state.items[this.state.currentIndex + i])
    }
    document.getElementById('output').innerHTML = shownNums.join('')
    document.getElementById('output').style.textDecoration = `${this.state.currentIndex % 2 === 0 ? 'none': 'underline'}`
    if (this.state.currentIndex > this.state.itemCount - 1) document.getElementById('output').innerHTML = `Guess`
    else if (this.state.currentIndex < 0) document.getElementById('output').innerHTML = `poop`
  }

  guess(guess) {
    let numberCorrect = 0
    for (let i = 0; i < this.state.itemCount; i++) {
      if (guess.toString()[i] === this.state.items[i]) numberCorrect++
    }
    let percentRight = (numberCorrect / this.state.itemCount).toPrecision(2) * 100
    document.getElementById('output').innerHTML = `You Got ${percentRight}% (${numberCorrect}/${this.state.itemCount}) Right! \n 
  </br> Actual: ${this.state.items.join('')}</br>
  Guess: ${guess}`
    document.getElementById('list').innerHTML += percentRight + '%,'
  }

  updateCount() {
    let tate
    tate.itemCount = Math.round(this.state.unroundedNum / this.state.itemRoundNum) * this.state.itemRoundNum
    document.getElementById('mem').innerHTML = "Memory " + this.state.itemCount
  }

  updateChoices(vals) {
    let tate
    tate.itemChoices = vals.replaceAll(/,+| +/g, '').split('')
  }

  genSeq() {
    let seq = []
    for (let i = 0; i < this.state.itemCount; i++) seq.push(this.state.itemChoices[Math.ceil(Math.random() * this.state.itemChoices.length - 1)])
    return seq
  }

  genButton() {
    let tate
    tate.items = this.genSeq()
    document.getElementById('inputGuess').value = ''
    document.getElementById('genseq').value =
      document.getElementById('genseq').value === "GENERATE NEW SET" ?
      "GENERATE SEQUENCE" : "GENERATE NEW SET"
    this.displayItem()
  }

options(){
  // toggle options
  // when options on --> input off viceversa
}

  render(){
    return(
      <div id="app">
      <div id="title">Memory App {this.state.itemCount}</div>
      <div id="output" onClick={()=>{this.prevItem()}}>Never Will I Care About You</div>
      <button id="gen-seq-button" onClick={()=>this.genSeq()}>Generate Sequence</button>
      <button id="options-button" onClick={()=>this.options()}>Options</button>
      <ul id="options">Options
      <li><label> Number Of Items</label><input type="text" onChange={()=>{console.log("no");}}></input></li>
      <li><label> Items Multiple Of</label><input type="text" onChange={()=>{console.log("no");}}></input></li>
      <li><label> Item Selection</label><input type="text" onChange={()=>{console.log("no");}}></input></li>
      <li><label> Memory Mode</label><input type="text" onChange={()=>{console.log("no");}}></input></li>
      <li><label> Number to Show</label><input type="text" onChange={()=>{console.log("no");}}></input></li>
      <li><label> Special Conditions</label><input type="text" onChange={()=>{console.log("no");}}></input></li>
      </ul>
      <input type="text" id="input" defaultValue='howdy'></input>
      <div id="next-button" onClick={()=>{this.nextItem()}}>Next </div>
      </div>
      )
    }
}

export default App;

ReactDOM.render( 
  <App /> ,
  document.getElementById('root')
)