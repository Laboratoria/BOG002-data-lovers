import {  orderAlfab } from '../src/data.js';
const dataMuestra =[{
  "name": "Giovanni Abagnale", "sport": "Rowing","team": "Italy", "medal": "Bronze"
}]
const ordenarAlfab = [
  {"name": "Giovanni Abagnale","sport": "Rowing","team": "Italy","medal": "Bronze"},
  {"name": "Luc Abalo","sport": "Handball","team": "France","medal": "Silver"},
  {"name": "Patimat Abakarova","sport": "Taekwondo","team": "Azerbaijan","medal": "Bronze"
  }]


describe('Organizar alfabeticamente', () => {
  it('is a function', () => {
   expect(typeof orderAlfab).toBe('function');
   });
 
   it('debería retornar "atletas en orden a-z" para la opción ordenar AZ - ZA con una condicion A-Z', () => { 
       expect(orderAlfab(dataMuestra)).toEqual(ordenarAlfab);
   });
 });
