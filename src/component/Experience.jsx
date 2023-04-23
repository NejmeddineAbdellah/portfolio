
import { Accordion, AccordionTab } from 'primereact/accordion';


function Experience() {

  return (
    <div className="card" style={{width:'95%',margin:'auto',marginTop:50}}>

      <Accordion activeIndex={0}>
        <AccordionTab header="Développeur">
          <p className="m-0">
          Realisation un site web de recherche d'emploie 
          Laravel API
          Vuejs
          Bootstrap
          </p>
        </AccordionTab> 
        <AccordionTab header="Développeur applications">
          <p className="m-0">
          Réalisation d'une application de bureau
          permet de gérer les livrables avec les Languages (C# - SQL )
          </p>
        </AccordionTab>
        <AccordionTab header="Développeur web">
          <p className="m-0">
          Réalisation d'un site web ORMVAO avec les languages (HTML-CSS-JS)
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  )
}



export default Experience;

