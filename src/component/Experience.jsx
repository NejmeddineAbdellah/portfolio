
import { Accordion, AccordionTab } from 'primereact/accordion';


function Experience() {

  return (
    <div className="card" style={{width:'95%',margin:'auto',marginTop:50,textAlign:'left'}}>

      <Accordion activeIndex={0}>
        <AccordionTab header="Développeur">
          <p className="m-0">
          <h2>NJT GROUP</h2>
          Realisation un site web de recherche d'emploie 
            <ul>
              <li>Laravel API</li>
              <li>Vuejs</li>
              <li>Bootstrap</li>
            </ul>
           </p>
        </AccordionTab> 
        <AccordionTab header="Développeur applications">
          <p className="m-0">
          <h2>Ministère de la jeunesse, de la Culture et de la Communication</h2>
          Réalisation d'une application de bureau
          permet de gérer les livrables avec les Languages 
            <ul>
              <li>C#</li>
              <li>SQL</li>
            </ul> 
          </p>
        </AccordionTab>
        <AccordionTab header="Développeur web">
          <p className="m-0">
          <h2>ORMVA Souss Massa</h2>
          Réalisation d'un site web ORMVAO avec les languages
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>Bootstrap</li>
            </ul>
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  )
}



export default Experience;

