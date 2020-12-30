import Homepage from './components/Homepage.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import Calculator from './components/Calculator.vue';

export const routes = [
  {path: '/', component: Homepage, name: 'Homepage'},
  {path: '/account', component: Account, name: 'Account'},
  //{path: '/gradecategory', component: GradeCategory, name: 'GradeCategory'},
  //{path: '/gradeitem', component: GradeItem, name: 'GradeItem'},
  {path: '/login', component: Login, name: 'Login'},
  {path: '/calculator', component: Calculator, name: 'Calculator'},
];
