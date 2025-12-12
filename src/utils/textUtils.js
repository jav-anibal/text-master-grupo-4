/**
 * Invierte una cadena de texto
 * @param {string} text - Texto a invertir
 * @returns {string} Texto invertido
 */
function reverseText(text) {
    if (typeof text !== 'string') {
        throw new TypeError('El parámetro debe ser una cadena de texto');
    }
    return text.split('').reverse().join('');
}

/**
 * Analiza un texto y devuelve estadísticas
 * @param {string} text - Texto a analizar
 * @returns {object} Objeto con estadísticas
 */
function analyzeText(text) {
    if (typeof text !== 'string') {
        throw new TypeError('El parámetro debe ser una cadena de texto');
    }

    const length = text.length;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const word_count = words.length;
    const has_numbers = /\d/.test(text);

    return {
        length,
        word_count,
        has_numbers
    };
}
/**
 * Transforma texto según la acción especificada
 * @param {string} text - Texto a transformar
 * @param {string} action - Acción: 'upper' o 'lower'
 * @returns {string} Texto transformado
 */
function transformText(text, action) {
  if (typeof text !== 'string') {
    throw new TypeError('El parámetro text debe ser una cadena');
  }

  if (!action) {
    throw new Error('Se requiere especificar una acción');
  }

  const validActions = ['upper', 'lower'];
  if (!validActions.includes(action.toLowerCase())) {
    throw new Error(`Acción inválida. Acciones válidas: ${validActions.join(', ')}`);
  }

  switch (action.toLowerCase()) {
    case 'upper':
      return text.toUpperCase();
    case 'lower':
      return text.toLowerCase();
    default:
      throw new Error('Acción no implementada');
  }
}

module.exports = {
  reverseText,
  analyzeText,
  transformText
};
