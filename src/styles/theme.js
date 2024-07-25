// theme.js
export const theme = {
  colors: {
    primary: '#4169E1',    // Manter o azul para destaques e botões
    secondary: '#FFFFFF',  // Manter o branco para fundos ou textos claros
    background: '#E0F2F1', // Verde claro para o fundo principal
    text: '#004D40',       // Verde escuro para o texto
    border: '#80CBC4',     // Verde para bordas sutis
    focus: '#004D40',      // Cor de foco, pode ser usada para bordas ao focar no input
  },
  font: {
    sizes: {
      small: '0.875rem',  // 14px - Tamanho de texto pequeno
      medium: '1rem',     // 16px - Tamanho de texto base
      large: '1.25rem',   // 20px - Tamanho de texto grande
    },
  },
  media: {
    small: '(max-width: 640px)',  // Para telas pequenas
    medium: '(max-width: 768px)', // Para tablets
    large: '(max-width: 1024px)', // Para desktops
  },
};
