global.window = global;
// global.assert = require('chai').assert;}
require('../src/data');
require('./data.spec.js');
const data = [{
  'id': 146,
  'num': '146',
  'name': 'Moltres',
  'img': 'http://www.serebii.net/pokemongo/pokemon/146.png',
  'type': [
    'Fire',
    'Flying'
  ],
  'height': '2.01 m',
  'weight': '60.0 kg',
  'candy': 'None',
  'egg': 'Not in Eggs',
  'spawn_chance': 0,
  'avg_spawns': 0,
  'spawn_time': 'N/A',
  'multipliers': null,
  'weaknesses': [
    'Water',
    'Electric',
    'Rock'
  ]
}, {
  'id': 144,
  'num': '144',
  'name': 'Articuno',
  'img': 'http://www.serebii.net/pokemongo/pokemon/144.png',
  'type': [
    'Ice',
    'Flying'
  ],
  'height': '1.70 m',
  'weight': '55.4 kg',
  'candy': 'None',
  'egg': 'Not in Eggs',
  'spawn_chance': 0,
  'avg_spawns': 0,
  'spawn_time': 'N/A',
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Electric',
    'Rock',
    'Steel'
  ]
}
];
describe('Realizando test a las funciones', () => {
  it('debería ser una función', () => {
    expect(typeof GlobalFunctions.filterPokemons).toBe('function');
  });

  it('La funcion filter deberia retornar filtrado de Fire ', () => {
    expect(GlobalFunctions.filterPokemons(data, 'Fire')).toEqual([{
      'id': 146,
      'num': '146',
      'name': 'Moltres',
      'img': 'http://www.serebii.net/pokemongo/pokemon/146.png',
      'type': [
        'Fire',
        'Flying'
      ],
      'height': '2.01 m',
      'weight': '60.0 kg',
      'candy': 'None',
      'egg': 'Not in Eggs',
      'spawn_chance': 0,
      'avg_spawns': 0,
      'spawn_time': 'N/A',
      'multipliers': null,
      'weaknesses': [
        'Water',
        'Electric',
        'Rock'
      ]
    }]);
  });


  it('debería ser una función', () => {
    expect(typeof GlobalFunctions.average).toBe('function');
  });
  it('La funcion average deberia retornar calculo del peso total de los pokemones ', () => {
    expect(GlobalFunctions.average(data, 'weight')).toEqual(57.7);
  });

  it('debería ser una función', () => {
    expect(typeof GlobalFunctions.compareNames).toBe('function');
  });
  it('La funcion  deber ordenar por nombre', () => {
    expect(data.sort(GlobalFunctions.compareNames)).toEqual([{
      'id': 144,
      'num': '144',
      'name': 'Articuno',
      'img': 'http://www.serebii.net/pokemongo/pokemon/144.png',
      'type': [
        'Ice',
        'Flying'
      ],
      'height': '1.70 m',
      'weight': '55.4 kg',
      'candy': 'None',
      'egg': 'Not in Eggs',
      'spawn_chance': 0,
      'avg_spawns': 0,
      'spawn_time': 'N/A',
      'multipliers': null,
      'weaknesses': [
        'Fire',
        'Electric',
        'Rock',
        'Steel'
      ]
    }, {
      'id': 146,
      'num': '146',
      'name': 'Moltres',
      'img': 'http://www.serebii.net/pokemongo/pokemon/146.png',
      'type': [
        'Fire',
        'Flying'
      ],
      'height': '2.01 m',
      'weight': '60.0 kg',
      'candy': 'None',
      'egg': 'Not in Eggs',
      'spawn_chance': 0,
      'avg_spawns': 0,
      'spawn_time': 'N/A',
      'multipliers': null,
      'weaknesses': [
        'Water',
        'Electric',
        'Rock'
      ]
    }]);
  });
  it('debería ser una función', () => {
    expect(typeof GlobalFunctions.printPokemons).toBe('function');
  });


  it('La funcion deveria pintar los pokemones', () => {
    expect(typeof GlobalFunctions.printPokemons(data)).toBe('string');
  });
});