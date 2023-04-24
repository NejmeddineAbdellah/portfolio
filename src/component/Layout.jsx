import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import "../styles/footer.css"
import { TiSocialLinkedin } from "react-icons/ti";
import { TabMenu } from 'primereact/tabmenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(null);


    const items = [
        { label: 'Accueil', icon: 'pi pi-fw pi-home', command: () => { navigate('/') } },
        { label: 'Formations', icon: 'pi pi-fw pi-calendar', command: () => { navigate('/formation') } },
        { label: 'Experiences', icon: 'pi pi-fw pi-pencil', command: () => { navigate('/experience') } },
        { label: 'Projects', icon: 'pi pi-fw pi-microsoft', command: () => { navigate('/project') } },
        { label: 'Certifications', icon: 'pi pi-fw pi-book', command: () => { navigate('/certificat') } }
    ];

    const handleTabChange = (event) => {
        setActiveItem(event.value);
    }

    return (
        <div className="card">
            <TabMenu model={items} activeItem={activeItem} onTabChange={handleTabChange} />
        </div>
    )
}

export default function Footer() {

    const [email] = useState('');
    const [subject] = useState('');
    const [message] = useState('');

    const [setLoading] = useState(false);




    return (
        <div className="footer-dark fixed-bottom" style={{ marginTop: "8%", position: 'relative' }}>
            <footer>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}></div>
                <div className="mx-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                </div>


                <div style={{ display: 'grid', justifyContent: 'center' }}>

                    <div className="text-center mt-5">
                        <div className=" item text tex">

                            <h3>Call Me</h3>
                            <p>Feel free to reach out to me .</p>
                        </div>



                        <div className="col item social">
                            <a href="https://www.linkedin.com/in/abdellahnejmeddine/"><TiSocialLinkedin /></a>
                        </div>
                    </div>

                    <p className="copyright">NEJMEDDINE © 2023</p>
                </div>


            </footer>
        </div>
    );
}

export { Header, Footer };