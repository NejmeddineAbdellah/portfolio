import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function Projet() {


  const tic = (
    <img alt="Card" src={require('../images/project/tictactoe.png')} style={{ height: 300 }} />
  );
  const pok = (
    <img alt="Card" src={require('../images/project/pok1 (1).png')} style={{ height: 300 }} />
  );
  const lib = (
    <img alt="Card" src={require('../images/project/gestion_librairie.png')} style={{ height: 300 }} />
  );
  const smart = (
    <img alt="Card" src={require('../images/project/smarthome.png')} style={{ height: 300 }} />
  );
  return (
    <div class='container w-100'>
      <div class='project-container row' style={{ marginTop: 40 }}>

        <div className='project-card col-lg-4 col-md-4 col-sm-12 mb-4'>
          <Card header={tic} className="card" >
            <div className='project-title card-title h5' style={{ textAlign: "left" }}>
              Tic-Tac-Toe game
            </div>
            <br />
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              React
            </div>
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              <br />

              <Button label="Code source" severity="success" >
                <a href="https://github.com/NejmeddineAbdellah/tictactoe" target="_blank" rel="noopener noreferrer"></a>
              </Button>
            </div>
          </Card>
        </div>

        <div className='project-card col-lg-4 col-md-4 col-sm-12 mb-4'>
          <Card header={pok} className="card" >
            <div className='project-title card-title h5' style={{ textAlign: "left" }}>
              Application Android Pokemon API
            </div>
            <br />
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              JAVA api
            </div>
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              <br />

              <Button label="Code source" severity="success" >
                <a href="https://github.com/NejmeddineAbdellah/pokemon" target="_blank" rel="noopener noreferrer"></a>
              </Button>
            </div>
          </Card>
        </div>

        <div className='project-card col-lg-4 col-md-4 col-sm-12 mb-4'>
          <Card header={lib} className="card" >
            <div className='project-title card-title h5' style={{ textAlign: "left" }}>
              Application Gestion librairie
            </div>
            <br />
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              C#
            </div>
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              <br />

              <Button label="Code source" severity="success" >
                <a href="https://github.com/NejmeddineAbdellah/Gestion_Librairie" target="_blank" rel="noopener noreferrer"></a>
              </Button>
            </div>
          </Card>
        </div>

        <div className='project-card col-lg-4 col-md-4 col-sm-12 mb-4'>
          <Card header={smart} className="card" >
            <div className='project-title card-title h5' style={{ textAlign: "left" }}>
              Smarthome desktop application
            </div>
            <br />
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              C#
            </div>
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              <br />
              <Button label="Code source" severity="success" >
                <a href="https://github.com/NejmeddineAbdellah/smarthome" target="_blank" rel="noopener noreferrer"></a>
              </Button>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );





}
