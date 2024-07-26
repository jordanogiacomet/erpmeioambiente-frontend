// theme.js
export const theme = {
  colors: {
    primary: '#000000',    // Manter o azul para destaques e botões
    secondary: '#FFFFFF',  // Manter o branco para fundos ou textos claros
    background: '#E0F2F1', // Verde claro para o fundo principal
    text: '#004D40',       // Verde escuro para o texto
    border: '#80CBC4',     // Verde para bordas sutis
    focus: '#004D40',      // Cor de foco, pode ser usada para bordas ao focar no input
  },
  font: {
    sizes: {
      small: '1rem',
      medium: '1.2rem',
      large: '1.6rem',
      xlarge: '2rem',
      huge: '2.4rem',
      xhuge: '3rem',
    },
  },
  media: {
    min: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      xxl: '(min-width: 1536px)',
    },
    max: {
      sm: '(max-width: 640px)',
      md: '(max-width: 768px)',
      lg: '(max-width: 1024px)',
      xl: '(max-width: 1280px)',
      xxl: '(max-width: 1536px)',
    }
  },
};
