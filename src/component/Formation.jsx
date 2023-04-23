
import { Panel } from 'primereact/panel';


function Formation() {

  return (
    <div className="card" style={{width:'90%',margin:'auto',marginTop:50,textAlign:"left"}}>
      <Panel header="Formation 1">
        <h1>ISTA Ouarzazate</h1>
        <h3>Developpment Informatique</h3>
        <h4>2016-2018</h4>
      </Panel>
      <Panel header="Formation 2">
        <h1>Université Privée de Marrakech</h1>
        <h3>Licence Informatique</h3>
        <h4>2021-2022</h4>
      </Panel>
      <Panel header="Formation 3">
        <h1>Ecole Marocaine des Sciences de l'ingénieur</h1>
        <h3>Ingénierie informatique (MIAGE)</h3>
        <h4>2022-Aujourd'hui</h4>
      </Panel>
    </div>
  )
}



export default Formation;


