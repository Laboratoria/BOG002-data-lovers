import {  orderAlfab } from '../src/data.js';
const dataMuestra =[
  {"name": "Luc Abalo"},
  {"name": "Patimat Abakarova"},
  { "name": "Giovanni Abagnale"}]
const dataAz = [
  {"name": "Giovanni Abagnale"},
  {"name": "Luc Abalo"},
  {"name": "Patimat Abakarova"},
]
const dataZa = [
  {"name": "Patimat Abakarova"},
  {"name": "Luc Abalo"},
  {"name": "Giovanni Abagnale"},
  
  
]


describe("Organizar alfabeticamente", () => {
  it("is a function", () => {
    expect(typeof orderAlfab).toBe("function");
  });

  it('debería retornar "atletas en orden a-z" para la opción ordenar AZ - ZA con una condicion A-Z', () => {
    expect(orderAlfab(dataMuestra, "asc")).toEqual(dataAz);
  });

  it('debería retornar "atletas en orden z-a" para la condicion "desc" ', () => {
    expect(orderAlfab(dataMuestra, "desc")).toEqual(dataZa);
  })
});
