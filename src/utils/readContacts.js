import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const data = JSON.parse(contacts);
    return data;
  } catch (error) {
    console.error('Error parsing JSON:', error.message);
    return [];
  }
};

readContacts().catch((error) => console.log(error));
