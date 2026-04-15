import { add, divide } from './utils/math';
import { getUser } from './services/user-service';

console.log('2 + 3 =', add(2, 3));
console.log('10 / 2 =', divide(10, 2));

getUser(1).then((user) => {
  console.log('User:', user.name, user.email);
});
