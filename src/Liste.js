import React from 'react';
import Eintrag from './Eintrag.js'
class Liste extends React.Component {
constructor(props) {
super(props);
this.loeschen = this.loeschen.bind(this);
this.state = {
    
meineKontakte: [
    { vorname: 'Hans', name: 'Meier', telefon:'111/1111', id: 1, 
    loeschen: this.loeschen },
    { vorname: 'Max', name: 'Müller', telefon:'222/2222', id: 2, 
    loeschen: this.loeschen},
    { vorname: 'Sabine', name: 'Schmitz', telefon:'333/3333', id: 3, 
    loeschen: this.loeschen }
],
//für einen neuen Eintrag
id: 4,
vorname: '',
name: '',
telefon: ''
};
//die Methoden binden
this.handleChange = this.handleChange.bind(this);
this.handleClick = this.handleClick.bind(this);
}
//die Methoden für die Ereignisbehandlung
//bei Veränderungen wird der State über setState() angepasst
handleChange(event) {
//das Element abhängig vom Namen setzen
this.setState({ [event.target.name]: event.target.value });
}
//für das Anklicken der Schaltfläche
handleClick(event) {
//ein neues Objekt mit den Daten erzeugen
let neuerEintrag = { vorname: this.state.vorname, name: 
this.state.name, telefon: this.state.telefon, id: 
this.state.id, loeschen: this.loeschen };
//ein neues Array erzeugen
let neueListe = this.state.meineKontakte.concat(neuerEintrag);
//und dem State zuweisen
this.setState({meineKontakte: neueListe});
//die ID um 1 erhöhen
this.setState({id: this.state.id + 1});
//die Felder wieder leeren
this.setState({vorname: ''});
this.setState({name: ''});
this.setState({telefon: ''});
event.preventDefault();
}
loeschen(id) {
    //die Liste filtern
    let neueListe = this.state.meineKontakte.
    filter(function(eintrag) {
    return eintrag.id !== id});
    //und dem State zuweisen
    this.setState({meineKontakte: neueListe});
    }
render() {
return (
<div className='wrapper'>
        <h1>Meine Kontakte</h1>
        <form>
            <label>
            Vorname
                <input type="text" name="vorname" 
                value={this.state.vorname} 
                onChange={this.handleChange} />
            </label>
            <label>
            Name
                <input type="text" name="name" 
                value={this.state.name} onChange=
                {this.handleChange} />
            </label>
            <label>
            Telefon
                <input type="text" name="telefon" 
                value={this.state.telefon} 
                onChange={this.handleChange} />
                </label>
                <button className="btn eingabe-btn"onClick={this.handleClick}>Neuer 
            Eintrag</button>
        </form>
        <ul>
        {this.state.meineKontakte.map(function(kontakt) {
            return <li key={kontakt.id}> <Eintrag {...kontakt}/> 
            </li>
            })}
        </ul>

</div>
);
}
}
export default Liste;