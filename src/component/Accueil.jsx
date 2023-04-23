
import { Card } from 'primereact/card';


function Accueil() {

  return (

    <div className="card" class="row" style={{ width: '100%', margin: 'auto', marginTop: 120 }}>
      <div className='text-center mb-4' class="col-4">
        <img alt="Card" src={require('../images/profile.jpeg')} className='rounded-circle profile-img' style={{ height: 360, width: 300 }} />
      </div>
      <div class="col-7">
        <Card title="Accueil">
          <p className="m-0">
            NEJMEDDINE Abdellah is a dedicated software engineering student with a passion for programming and technology. They are currently pursuing a Engineering in Computer Science, and have gained experience in various programming languages such as Java, Python, and C# . They have completed several software projects, including web development, Desktop application . NEJMEDDINE is also familiar with agile methodologies and software development lifecycle. They are always looking for new challenges to learn and improve their skills in software engineering.

          </p>
        </Card>
      </div>
    </div>
  )
}



export default Accueil;

