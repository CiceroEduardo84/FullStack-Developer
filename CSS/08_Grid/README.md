## PROPRIEDADES FUNDAMENTAIS

Todo grid é composto de 2 principais grupos:
`Container: o pai` e `itens: o(s) filhos`

---

### CONTAINER (pai)

- display: grid;
- grid-template;
  - grid-template-columns;
  - grid-template-rows;
  - grid-template-areas;
- gap;
  - row-gap;
  - column-gap;

---

### ITENS (filhos)

- grid-column;
  - grid-column-start;
  - grid-column-end;
- grid-rows;
  - grid-rows-start;
  - grid-rows-end;
- grid-area;

---

### PROPRIEDADES DE ALINHAMENTO

Existem 9 propriedades fundamentais

**6 aplicadas em container**
`align-content`
`justify-content`
`place-content`

`align-items`
`justify-items`
`place-items`

**3 aplicadas em items**
`align-self`
`justify-self`
`place-self`

Então podemos separar em 3 grupos:
`align`, `justify`, `place`

E cada um deles irá observar ou o

- conteúdo do elemento `content`
- itens do elemento `items`
- o próprio elemento `self`

---

### PROPRIEDADES AUTO

- grid-auto-flow
- grid-auto-rows
- grid-auto-columns

### GRID OU FLEX
