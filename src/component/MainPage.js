import React from 'react';
import Modal from 'react-modal';
import { EventInfo } from './EventInfo';
import { modalStyle } from '../util/constants';

export const MainPage = ({ events, eventNumber, openModal, modalIsOpen, closeModal }) => {
    return (
        <main id='events-list-container'>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyle}
                ariaHideApp={false}
            >
                <EventInfo
                    events={events}
                    closeModal={closeModal}
                    eventNumber={eventNumber}
                />

            </Modal>

            <div id='events-number'>
                <h3>Currently there is <span>{events.length} meetups</span> in Belgrade</h3>
            </div>

            {events.map((event, i) => {
                const { name, local_date, local_time } = event

                return (
                    <div className='events-preview' index={i} key={i} onClick={openModal}>
                        <h2 index={i}> {name} </h2>
                        <h3 index={i}>Datum: {local_date}</h3>
                        <h3 index={i}>Vreme: {local_time}</h3>
                    </div>
                )
            })
            }
        </main>
    )
}