import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const addedOneContact = [...contacts, createFakeContact()];
    await writeContacts(addedOneContact);
  } catch (error) {
    console.log('Error generating contact', error.message);
  }
};

addOneContact();
