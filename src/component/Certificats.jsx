import { Card } from 'primereact/card';



function Certification() {
  const office = (
    <img alt="Card" src={require('../images/Cert9792259747.jpg')} style={{ heigh:300 }} />
  );
  const react = (
    <img alt="Card" src={require('../images/Coursera FullStackWeb.jpg')} style={{ height: 300 }} />
  );  
  const devops = (
    <img alt="Card" src={require('../images/Devops.jpg')} style={{ height: 300 }} />
  );


  return (
    <div className='container mt-4'>
      <section className='section' >
        <div className='project-container row'>

          <div className='project-card col-12 col-md-4 mb-4'>
            <Card header={office} className="card" >
              <div className='project-title card-title h5' style={{ textAlign: "left" }}>
                Microsoft Office Specialist Expert
              </div>
              <br />
              <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
                 Microsoft
              </div>
              <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
                date de délivrance : févr. 2018
              </div>
            </Card>
          </div>



          <div className='project-card col-12 col-md-4 mb-4'>
            <Card header={devops} className="card" >
              <div className='project-title card-title h5' style={{ textAlign: "left" }}>
                  Spécialisation DevOps, Cloud, and Agile Foundations
              </div>
              <br />
              <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
                 IBM
              </div>
              <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
                date de délivrance : mars 2023
              </div>
            </Card>
          </div>

          
          <div className='project-card col-12 col-md-4 mb-4'>
            <Card header={react} className="card" >
              <div className='project-title card-title h5' style={{ textAlign: "left" }}>
                Full-Stack Web Development with React
              </div>
              <br/>
              <br/>
              <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
                 IBM
              </div>
              <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
                date de délivrance : janv. 2023
              </div>
            </Card>
          </div>


        </div>
      </section>
    </div>
  )
}



export default Certification;


