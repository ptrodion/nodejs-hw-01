import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts.length;
  } catch (error) {
    console.error('Error getting all contacts:', error.message);
    return 0;
  }
};

console.log(await countContacts());
