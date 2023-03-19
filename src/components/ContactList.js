import React, { useEffect, useState } from 'react'
import { data_contact } from '../data/sample-chat-data'
import ContactRow from './ContactRow'

const ContactList = () => {

    const [contacts, setContacts] = useState(data_contact ?? {})
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setContacts(data_contact)
        setLoaded(true)
    }, [contacts])

    return (
        <>
            <div className='w-full p-2 contact-filter bg-slate-600 absolute z-30 top-0 left-0 contact-filter'>
                Sort
            </div>
            <div className='w-full h-full overflow-auto contact-list-inner'>

                {
                    loaded ?
                    
                    contacts?.length > 0
                        ?
                        contacts?.map(contact => (
                            <ContactRow key={contact.uid} contact={contact} />
                        )
                        )
                        :
                        ""
                    :
                    "Loading..."
                }
            </div>

        </>
    )
}

export default ContactList