import { User } from './User';
import { CustomMap } from './CustomMap';
import { Company } from './company';

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);

//CustomMap
// --new
//  |-addMarker

const customMap = new CustomMap('map');


customMap.addMarker(user);
customMap.addMarker(company);
