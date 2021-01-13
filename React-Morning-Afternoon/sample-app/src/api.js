import { v4 as uuidv4 } from 'uuid';
 
const idOne = uuidv4();
const idTwo = uuidv4();
const idThree = uuidv4();
const idFour = uuidv4();
 
let users = {
  [idOne]: {
    id: idOne,
    firstName: 'K',
    lastName: 'Sai Vamsi',
    email: 'ksaivamsi27@gmail.com'
  },
  [idTwo]: {
    id: idTwo,
    firstName: 'K',
    lastName: 'Manikanta',
    email: 'kmanikanta@gmail.com'
  },
  [idThree]: {
    id: idThree,
    firstName: 'P',
    lastName: 'raviteja',
    email: 'raviteja@gmail.com'
  },
  [idFour]: {
    id: idFour,
    firstName: 'T',
    lastName: 'Srikanth',
    email: 'srikantht@gmail.com'
  },
};

export const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
      return setTimeout(
        () => reject(new Error('Users not found')),
        250
      );
    }

    setTimeout(() => resolve(Object.values(users)), 250);
});

const loadUsers = async () => {
    try{
        const res = await getUsers();
        console.log(res);
    } catch(error){
        console.log(error);
    }
};
loadUsers();

export const deleteUser = (id) =>
  new Promise((resolve, reject) => {
    const { [id]: user, ...rest } = users;
    if (!user) {
      return setTimeout(
        () => reject(new Error('User not found')),
        250
      );
    }
    users = { ...rest };
    return setTimeout(() => resolve(true), 250);
});