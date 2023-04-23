import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import "../styles/footer.css"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import { TabMenu } from 'primereact/tabmenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const items = [
        { label: 'Accueil', icon: 'pi pi-fw pi-home',command: () => {navigate('/')}},
        { label: 'Formations', icon: 'pi pi-fw pi-calendar',command: () => {navigate('/formation')} },
        { label: 'Experiences', icon: 'pi pi-fw pi-pencil',command: () => {navigate('/experience')} },
        { label: 'Projects', icon: 'pi pi-fw pi-file' },
        { label: 'Certifications', icon: 'pi pi-fw pi-cog',command: () => {navigate('/certificat')}}
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}

export default function Footer() {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    function handleSubmit() {
        if (email.trim() === '' || subject.trim() === '' || message.trim() === '') {
            const confirmed = window.confirm('Please fill in all fields before submitting.');
            if (!confirmed) {
                return;
            }
        }

        setLoading(true);

        // do your form submission logic here, e.g. with axios
    }

    return (
        <div className="footer-dark fixed-bottom" style={{ marginTop: "50px",position: 'relative',bottom:0}}>
            <footer>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}></div>
                <div className="mx-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                </div>


                <div style={{ display: 'grid', justifyContent: 'center' }}>

                    <div className="text-center mt-5">
                        <div className=" item text tex">

                            <h3>Contact Me</h3>
                            <p>Feel free to reach out to me if you have any questions or if you'd like to work together on a project.</p>
                        </div>



                        <div className="col item social">
                            <a href="#"><RiTelegramFill /></a>
                            <a href="https://www.linkedin.com/in/abdellahnejmeddine/"><TiSocialLinkedin /></a>
                            <a href="https://twitter.com/Badr66270786"><AiFillTwitterCircle /></a>
                        </div>
                    </div>

                    <p className="copyright">B.A.H © 2023</p>
                </div>


            </footer>
        </div>
    );
}

export { Header, Footer };