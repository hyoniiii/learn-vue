<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  methods: { //store.js의 mutations와 같은 역할
    // addOneItem(todoItem) {
    //   const obj = {completed: false, item: todoItem};
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },

    //두개를 한꺽번에 가지고 올 땐(todoItem, index) 객체화 시켜서 가지고 올 수 있음
    // removeOneItem(todoItem, index) {
    //   this.todoItems.splice(index, 1);
    //   localStorage.removeItem(todoItem.item);
    // },

    // toggleOneItem(todoItem, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
  //   clearAllItems() {
  //     this.todoItems = [];
  //     localStorage.clear();
  //   }
  },
  // created() {
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       }
  //     }
  //   }
  // }, store.js의 fetch 쪽에 중복 내용 포함
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
