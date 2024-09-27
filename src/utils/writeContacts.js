import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const dataToWrite = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf-8');
    console.log('Contacts updated successfully');
  } catch (error) {
    console.log('Error writing files', error.message);
  }
};
