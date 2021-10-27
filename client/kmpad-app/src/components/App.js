
import './App.css';

function panellogin(){
  return (
    
    <div style="display: flex;align-items: baseline; padding-top: 7%; width: 50%; height: 620px; justify-content: center;height: 80%;  ">
      <div className="shadow rounded "style="position: absolute; background-color:#ffffff;  display:flex; width: 350px;; height: 500px;   flex-direction: column;flex-wrap: wrap; justify-content:center; align-items: center;" >
        <div style="top:0; padding-left:10% ; padding-right:10% ;">
          <img  Style = "padding-bottom:3% ;position: relative;  width: 200px; height:120px;" src={"./img/image 1.png"} alt={"Logo Misión tic"}/>
        </div>
        <div style="width: 80%; align-items: center;height: 100px; position: relative;">
          <div style="text-align: center; color:#3B63AC  ; height: fit-content;   ">
            <h2 >KMPAD</h2>
          </div>
          <div style="font-family: 'Glegoo', serif;text-align: center; color:#7a7a7a  ; height: fit-content;  ">
            <h2> Iniciar Seción</h2>
          </div>
        </div>
        <div className="px-5"Style = "position: relative;align-items: center; height: 50px; ">
          <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark">
          </div>
        </div>
        <div style="padding-bottom: 5%; ">            
        </div>
        <div class="px-5" style="height: fit-content;">
          <img src="./img/image 2.png" alt="Escudo universidad de antioquia"/>
        </div>
      </div>
    </div>

  )
}
function App() {
  return (
    <div  >
      <h2>Hola mundo</h2>
      <panellogin/>
    </div>
  )
}

export default App;
