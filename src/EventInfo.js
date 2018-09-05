import React from 'react';

export const EventInfo = (props) => {
    const { events, eventNumber, closeModal } = props
    const { name, description, venue } = events[eventNumber]
    const { name: venueName, address_1 } = venue
    
    return (
        <div id='events-info'>
            <h2>{name}</h2>
            <h3>Opis</h3>
            <p>{description.replace(/<(?:.|\n)*?>/gm, '')}</p>
            <div id='events-location'>
                <h3>Lokacija u Beogradu</h3>
                <p>Ulica: {address_1}</p>
                <p>Prostor: {venueName}</p>
            </div>
            <button onClick={closeModal}>Close</button>
        </div>
    )
}
