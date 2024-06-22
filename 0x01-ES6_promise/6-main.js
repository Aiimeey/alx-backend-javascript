import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

// handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg")
//   .then(results => {
//     console.log(results);
//   })
//   .catch(error => {
//     console.error('Error in handleProfileSignup:', error);
//   });
// to have thit output:
// [
//     {
//       status: 'fulfilled',
//       value: { firstName: 'Bob', lastName: 'Dylan' }
//     },
//     {
//       status: 'rejected',
//       value: 'Error: bob_dylan.jpg cannot be processed'
//     }
//   ]
