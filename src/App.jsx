import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/nav';
import Sec1 from './components/section1';
import Add1 from './components/add1';
import Sec2Part1 from './components/sec2part1'; 
import Sec2Part2 from './components/sec2part2';
import Sec2Part3 from './components/sec2part3';
import Sec3Part1 from './components/sec3part1';
import Sec3Part2 from './components/sec3part2';
import Sec3Part3 from './components/sec3part3';
import Sec4part1 from './components/sec4part1';
import Sec4part2 from './components/sec4part2';
import Sec4part3 from './components/sec4part3';
import Sec4part4 from './components/sec4part4';
import Sec4add from './components/sec4add';
import Sec5part1 from './components/sec5p1';
import Sec5 from './components/sec5';
import { Sec6one,Sec6two } from './components/sec6';
import Sec6add from './components/sec6add';
import Sec7part1 from './components/sec7part1';
import Sec7 from './components/sec7';
import Sec7part3 from './components/sec7part3';
import Sec8part1 from './components/sec8part1';
import Sec8add1 from './components/sec8add1';
import Sec8add2 from './components/sec8add2';
import Footer from './components/footer';
import NewSec1part1 from './components/newsec1part1';
import NewSec1part2 from './components/newsec1part2';
import NewSec1part3 from './components/newsec1part3';
import NewAdd1 from './components/newadd1';
import NewSec1part4 from './components/newsec1part4';
import NewSec2 from './components/newsec2';
import NewSec2part3 from './components/necsec2part3';
import NewSec3 from './components/newsec3';
import NewAdd2 from './components/newadd2';
import NewSec4 from './components/newsec4';
import NewSec5 from './components/newsec5';
import NewSec5add from './components/newsec1part5add';
import NewSec3Part5 from './components/newsec3part5';

function App() {

  return (
    <div>
    <Nav></Nav>
    <Sec1></Sec1>
    <Add1></Add1>
    <div id="section2">
    <Sec2Part1></Sec2Part1>
    <Sec2Part2></Sec2Part2>
    <Sec2Part3></Sec2Part3>
    </div>
    <div id="section3">
      <Sec3Part1></Sec3Part1>
      <Sec3Part2></Sec3Part2>
      <Sec3Part3></Sec3Part3>
    </div>

    <div  id="section4">
    <div>
    <Sec4part1></Sec4part1>
    <Sec4part2></Sec4part2>
    <Sec4part3></Sec4part3>
    <Sec4part4></Sec4part4>
    </div>
    <div>
      <Sec4add></Sec4add>
    </div>
    </div>
    
    <div id="section5">

    </div>
    <Sec5part1></Sec5part1>
    <div>
    <Sec5></Sec5>
    </div>

    <div id="section6">
      <div>
      <Sec6one></Sec6one>
      <Sec6two></Sec6two>
      </div>
      <div>
       <Sec6add></Sec6add>
      </div>
    </div>
    <div id="section7">

    </div>
    <Sec7part1></Sec7part1>
    <div>
    <Sec7></Sec7>
    </div>
    <div>
    <Sec7part3></Sec7part3>
    </div>

    <div id="section8">
      <div>
      <Sec8part1></Sec8part1>
      <Sec8add1></Sec8add1>
      </div>
      <Sec8add2></Sec8add2>

    </div>
    <div>
    <Footer></Footer>
    </div>



    <div  id="newsec1">
    <div>
    <NewSec1part1></NewSec1part1>
    <NewSec1part2></NewSec1part2>
    <NewSec1part3></NewSec1part3>
    <NewSec1part4></NewSec1part4>
    </div>
    <div>
      <NewAdd1></NewAdd1>
    </div>
    </div>
    <Sec7part1></Sec7part1>
    <NewSec2></NewSec2>
    <NewSec2part3></NewSec2part3>

    <div id="newsec3">
      <div>
    <Sec4part2></Sec4part2>
    <NewSec3Part5></NewSec3Part5>

    </div>
    <NewAdd2></NewAdd2>
    </div>
    <Sec5part1></Sec5part1>
    <NewSec4></NewSec4>

    <div id="newsec3">
    <NewSec5></NewSec5>
    <NewSec5add></NewSec5add>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default App
