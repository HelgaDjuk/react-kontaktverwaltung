import React from 'react';
class Eintrag extends React.Component {
//der Konstruktor
constructor(props) {
//den Konstruktor der übergeordneten Klasse aufrufen
super(props);
//die Methode binden
this.handleClick = this.handleClick.bind(this);
}
//die Methode zum Löschen
//sie ruft die Methode in der übergeordneten Komponente auf 
//und gibt die ID weiter
handleClick() {
this.props.loeschen(this.props.id);
}
//die Methode render()
render() {
return (
<div className='ausgabe'>
    <div className='ausgabe-item'>
        {this.props.vorname}
    </div>
    <div className='ausgabe-item'>
        {this.props.name} 
    </div>
    <div className='ausgabe-item'>
{       this.props.telefon}
    </div>
    <div>
        <button onClick={this.handleClick} className='btn btn-loeschen'>Löschen</button></div>
    </div>
 

);
}
}
export default Eintrag;