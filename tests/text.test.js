const { reverseText, analyzeText } = require('../src/utils/textUtils');

describe('Utilidades de Texto', () => {

    describe('reverseText', () => {
        it('debería invertir una cadena simple', () => {
            expect(reverseText('hola')).toBe('aloh');
        });

        it('debería invertir una cadena con espacios', () => {
            expect(reverseText('hola mundo')).toBe('odnum aloh');
        });

        it('debería manejar cadenas vacías', () => {
            expect(reverseText('')).toBe('');
        });

        it('debería lanzar error si no es string', () => {
            expect(() => reverseText(123)).toThrow(TypeError);
        });
    });

    describe('analyzeText', () => {
        it('debería contar correctamente longitud y palabras', () => {
            const result = analyzeText('hola mundo');
            expect(result.length).toBe(10);
            expect(result.word_count).toBe(2);
            expect(result.has_numbers).toBe(false);
        });

        it('debería detectar números en el texto', () => {
            const result = analyzeText('hola123');
            expect(result.has_numbers).toBe(true);
        });

        it('debería manejar texto sin números', () => {
            const result = analyzeText('solo texto');
            expect(result.has_numbers).toBe(false);
        });

        it('debería contar palabras correctamente con múltiples espacios', () => {
            const result = analyzeText('hola   mundo');
            expect(result.word_count).toBe(2);
        });

        it('debería lanzar error si no es string', () => {
            expect(() => analyzeText(123)).toThrow(TypeError);
        });
    });
    
    describe('transformText', () => {
  it('debería convertir a mayúsculas', () => {
    expect(transformText('hola', 'upper')).toBe('HOLA');
  });

  it('debería convertir a minúsculas', () => {
    expect(transformText('HOLA', 'lower')).toBe('hola');
  });

  it('debería manejar acción en cualquier capitalización', () => {
    expect(transformText('test', 'UPPER')).toBe('TEST');
    expect(transformText('TEST', 'Lower')).toBe('test');
  });

  it('debería lanzar error si falta acción', () => {
    expect(() => transformText('hola', '')).toThrow('Se requiere especificar una acción');
  });

  it('debería lanzar error con acción inválida', () => {
    expect(() => transformText('hola', 'invalid')).toThrow('Acción inválida');
  });

  it('debería lanzar error si text no es string', () => {
    expect(() => transformText(123, 'upper')).toThrow(TypeError);
  });

  it('debería transformar texto con espacios y caracteres especiales', () => {
    expect(transformText('Hola Mundo!', 'upper')).toBe('HOLA MUNDO!');
    expect(transformText('HOLA MUNDO!', 'lower')).toBe('hola mundo!');
  });
});

});
