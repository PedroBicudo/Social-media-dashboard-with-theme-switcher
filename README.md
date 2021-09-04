# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Links

- Live Site URL: [Site no netlify](https://social-media-theme-switcher.netlify.app/)

## My process

### Built with
- HTML5 Tags
- Flexbox 
- Grid
- Mobile-first 

### What I learned

Eu aprendi que usar variáveis para armazenar fontes é algo benéfico caso você queira modificar um tamanho especifico de fonte que se repete pelo arquivo inteiro.
```css
body {
  --base: 1rem;
}

.texto-1 {
  font-size: var(--base);
}

.texto-2 {
  font-size: var(--base);
}
```

Eu aprendi a selecionar elementos usando o atributo data-* da tag como filtro. Nesse site, eu consegui usar modificar o tema usando esse atributo.
```html
<body data-theme="light"></body>
```
```css
[data-theme="light"] {}
```

### Continued development
- Existe uma *media feature* chamada *preferes-color-scheme*, eu poderia ter usado ela para trocar os temas de acordo com o tema padrão do sistema do usuário.

- Eu ainda não sei definir o que exatamente pode ser um h2,h3 de modo a não afetar 
a hierarquia de texto, eu fiquei em dúvida se eu usava o número de seguidos do followers-card como título.

- Eu quero aprender mais sobre acessibilidade em sites, eu ainda não tenho muito conhecimento acerca desse tópico.
