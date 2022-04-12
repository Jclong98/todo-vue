# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](https://i.imgur.com/q8fUB3x.png)

### Links

- Solution URL: [https://github.com/jclong98/todo-vue](https://github.com/jclong98/todo-vue)
- Live Site URL: [https://gleaming-alpaca-bd8b47.netlify.app/](https://gleaming-alpaca-bd8b47.netlify.app/)

## My process

1. make a useTodo composable to handle all of the todo logic
1. create most of the functionality in the App.vue file
1. separate pieces logically as they appear, like the Todo component, Header component, and AddTodoForm component
1. make sure the MVP is working
1. style it by creating the main.css file to contain general classes/variables and do more specific styling within each component

### Built with

- [Vite](https://vitejs.dev/)
- [Vue 3](https://vuejs.org/)
- [VueUse](https://vueuse.org/)
- [Unocss Style Reset](https://github.com/unocss/unocss/tree/main/packages/reset)
- [Vue Draggable](https://github.com/SortableJS/vue.draggable.next)
- Deployed with Netlify

### What I learned

While working on this project I got a chance to really practice my Vue 3 skills. Most of the work that I've done with vue in the past was with Vue 2 and some plugins to make it more similar to vue 3, but this project was natively written with Vue 3. This comes with some benefits like speed and built in composition api, but I had to learn about some of the caveats like the new way to two-way bind props with v-model.

However, the new way to v-model is pretty good once you learn how to use it because it allows for modeling of multiple props on one component. I haven't done that in this project, but i thought it was neat 🙂

### Continued development

After this project, I will return to writing [the exact same project, but in react](https://github.com/jclong98/todo-react).

### Useful resources

- [Vueuse Docs](https://vueuse.org/) - very intuitive composables to use in any project, great docs too
- [Vue Draggable Examples](https://sortablejs.github.io/vue.draggable.next/#/simple) - a great resource to check out all the ways you can use vue draggable with examples

## Author

- Website - [Jacob Long](https://jacoblong.dev)
- Frontend Mentor - [@jclong98](https://www.frontendmentor.io/profile/jclong98)
