// theme.js
export const theme = {
  colors: {
    primary: '#4169E1',   // Royal Blue para destaques e botões
    secondary: '#FFFFFF', // Branco para fundos ou textos claros
    background: '#121212', // Fundo escuro padrão
    text: '#ADB7BE',      // Cor de texto clara para contraste com o fundo escuro
    border: '#33353F',    // Cor de borda sutil
  },
  font: {
    sizes: {
      small: '0.875rem',  // 14px - Tamanho de texto pequeno
      medium: '1rem',     // 16px - Tamanho de texto base
      large: '1.25rem',   // 20px - Tamanho de texto grande
    },
    family: 'Arial, sans-serif', // Família de fonte padrão
  },
  media: {
    small: '(max-width: 640px)', // Para telas pequenas
    medium: '(max-width: 768px)', // Para tablets
    large: '(max-width: 1024px)', // Para desktops
  },
};
