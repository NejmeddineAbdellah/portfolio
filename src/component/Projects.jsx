import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";


const breakPoints = [
  { width: 400, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
];
const glib = (
  <img alt="Card" src={require('../images/project/gestion_librairie.png')} style={{ height: 250 }} />
);
const smarthome = (
  <img alt="Card" src={require('../images/project/smarthome.png')} style={{ height: 250 }} />
);
const pok1 = (
  <img alt="Card" src={require('../images/project/pok1 (1).png')} style={{ height: 250 }} />
);
const pok2 = (
  <img alt="Card" src={require('../images/project/pok1 (2).png')} style={{ height: 250 }} />
);
const tic = (
  <img alt="Card" src={require('../images/project/tictactoe.png')} style={{ height: 250 }} />
);
export default function Projet() {

  return (

    <div className="App" style={{ marginTop: 40 }}>
      <Carousel breakPoints={breakPoints} className='project-container rows'>
        <div className='project-card col-12 col-md-10 mb-4'>
          <Card header={smarthome} className="card" >
            <div className='project-title card-title h5' style={{ textAlign: "left" }}>
              Smarthome application 
            </div>
            <br />
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              C#
            </div>
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              <br />
              <Link to="https://github.com/NejmeddineAbdellah/Smarthome">
                <Button  icon="pi pi-search" size="small" aria-label="Filter" label="Voir le projet" severity="success" />
              </Link>
            </div>

          </Card>
        </div>
        <div className='project-card col-12 col-md-10 mb-4'>
          <Card header={glib} className="card" >
            <div className='project-title card-title h5' style={{ textAlign: "left" }}>
              Desktop application Gestion_Librairie 
            </div>
            <br />
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              C#, LinqToSql

            </div>
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              <br />
              <Link to="https://github.com/NejmeddineAbdellah/Gestion_Librairie">
              <Button  icon="pi pi-search" size="small" aria-label="Filter" label="Voir le projet" severity="success" />
              </Link>

            </div>

          </Card>
        </div>
        <div className='project-card col-12 col-md-10 mb-4'>
          <Card header={pok1} className="card" >
            <div className='project-title card-title h5' style={{ textAlign: "left" }}>
              Pokemon Application APi mobile version
            </div>
            <br />
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              JAVA - android
            </div>
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              <br />
              <Link to="https://github.com/NejmeddineAbdellah/pokemon">
              <Button  icon="pi pi-search" size="small" aria-label="Filter" label="Voir le projet" severity="success" />
              </Link>
            </div>

          </Card>
        </div>
        <div className='project-card col-12 col-md-10 mb-4'>
          <Card header={tic} className="card" >
            <div className='project-title card-title h5' style={{ textAlign: "left" }}>
            Tic-Tac-Toe Game
            </div>
            <br />
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              React
            </div>
            <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
              <br />
              <Link to="https://github.com/NejmeddineAbdellah/tictactoe" >
              <Button  icon="pi pi-search" size="small" aria-label="Filter" label="Voir le projet" severity="success" />
              </Link>
              
            </div>

          </Card>
        </div>
      </Carousel>
    </div>

  );
}
