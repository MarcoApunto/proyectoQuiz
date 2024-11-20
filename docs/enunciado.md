# EXERCISE: Quiz [EN]

**Goal**
- The Quiz will have 10 questions. Each question will have 4 options and only one will be correct.
- Questions can be our own and questions from https://opentdb.com/
- The app must be a **SPA** *(single-page application)*. Only one question at a time on screen.

**Project Requirements**
- Dynamic **DOM** manipulation
- Create a **SPA** for questions
- Use of **ES6**
- **Async** stuff. Use questions API https://opentdb.com/
- HTML5 APIs: Use of **Local storage and charts**, etc...
- No frameworks or external libraries as much as possible
- Project management from start in a single shared repository (as collaborators) on **Github**
- Clean code, **best practices**

**Optional**
- Other APIs, mix of questions from different sources...
- In general, any extra will be welcome for you to research on your own, as long as it makes sense

## PHASES

### PHASE 1: Front design
- Design considering the information we want to show and that it's a SPA


### PHASE 2: JavaScript Logic
- Adapt our app according to what we saw in class: good use of functions, boolean, destructuring and everything you can implement.
- Get our Quiz working with 10 of our own questions, stored in an array of objects.

### PHASE 3: Async
- JavaScript: Handling async stuff. Read 10 random questions from the Questions API to generate the Quiz

### PHASE 4 (advanced) - HTML5 APIs
- Store each game's score in an array of objects `[{..},{..},{..}...{..}]` in Local Storage. Save score and date in each array object

- Show on Home with a chart the results of the last games played (read scores from LocalStorage). Display Date(X axis) vs Score(Y axis)

### Pages

- `home.html`. Welcome page + chart of latest results
- `question.html` SPA. Page to render the 10 different questions 
- `results.html` Page to show quiz result

---

# EJERCICIO: Quiz [ES]

**Objetivo**
- El Quiz constará de 10 preguntas. Cada pregunta tendrá 4 opciones y sólo una de ellas será la correcta.
- Podrán ser preguntas nuestras y preguntas que vengan de https://opentdb.com/
- La aplicación tendrá que ser una **SPA** *(single-page application)*. Sólo una pregunta cada vez en pantalla.

**Requisitos para este proyecto**
- Manipulación dinámica del **DOM**
- Crear una página **SPA** para las preguntas
- Manejo de **ES6**
- **Asincronía**. Usar API de preguntas https://opentdb.com/
- APIs HTML5: Uso de **Local storage y gráficas**, etc...
- Sin frameworks ni librerias externas en la medida de lo posible
- Gestión del proyecto desde el inicio en un único repositorio compartido (como colaboradores) en **Github**
- Código limpio, **buenas prácticas**

**Opcional**
- Otras APIs, mix de preguntas de distinas fuentes...
- En general, cualquier extra será bien recibido para que investiguéis por vuestra cuenta, siempre y cuando tenga sentido

## FASES

### FASE 1: Diseño del front
- Diseño teniendo en cuenta la información que queremos mostrar y que se trata de una SPA


### FASE 2: Lógica de JavaScript
- Adaptar nuestra app acorde a lo que vimos en clase: buen uso de funciones, boolean, destructuring y todo lo que seas capaz de implementar.
- Conseguir con 10 preguntas nuestras, guardadas en un array de objetos, se pueda jugar a nuestro Quiz.

### FASE 3: Asincronía
- Javascript: Manejo de asincronía. Leer 10 preguntas random de la API de prenguntas para generar el Quiz

### FASE 4 (avanzado) - APIs HTML5
- Almacenar la puntuación de cada partida en un array de objetos `[{..},{..},{..}...{..}]` en Local Storage. Guardar puntuación y fecha en cada objeto del array

- Mostrar en la Home con una gráfica los resultados de las últimas partidas jugadas (leer puntuaciones de LocalStorage). Representar Fecha(eje X) vs Puntuación(eje Y)

### Páginas

- `home.html`. Página de bienvenida + gráfica de últimos resultados
- `question.html` SPA. Página para renderizar las 10 distintas preguntas 
- `results.html` Página para mostrar resultado del quiz
