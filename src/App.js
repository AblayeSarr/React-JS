import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Card } from 'react-bootstrap';
import Nom from './Nom';
import Prix from './Prix';
import Description from './Description';
import ImageUrl from './ImageUrl';

function App() {
    let prenom = Ablaye;
    return(
        <>
        <p>{firstName} 'Bonjour $ {firstName}!' : {'Bonjour tout le monde!'}</p>
        {firstName && <ImageUrl/>}
            <Card>
            <Nom/>
            <Prix/>
            <Description/>
            <ImageUrl/>
            </Card>
        </>
    )
}
export default App;
