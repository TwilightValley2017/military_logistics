import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'army', // app name registered
    entry: '/army-logistics/',
    container: '#monday',
    activeRule: ['/army/#', '/army'],
  },
]);

console.log("Micro Apps")

start();