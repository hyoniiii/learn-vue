<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <!-- <todo-input v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드명"></todo-input> -->
    <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem"
    v-on:toggleItem="toggleOneItem"></todo-list>
    <!-- <todo-list v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성"></todo-list> -->
    <todo-footer v-on:clearAll="clearAllItems"></todo-footer>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeadeer.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';


//default는 한개의 파일에서 하나밖에 사용 안됨
export default {
    data() {
      return {
        todoItems: []
      }
    },
    methods: {
      // 축약 전 코드 - ES6의 특징
      //   addOneItem: function(todoItem) {
      //   const obj = {completed: false,item: todoItem};
      //   localStorage.setItem(todoItem, JSON.stringify(obj));
      //   this.todoItems.push(obj);
      // },
      addOneItem(todoItem) {
        const obj = {completed: false,item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
      },
      removeOneItem(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index, 1);
      },
      toggleOneItem(todoItem, index) {
        this.todoItems[index].completed = !this.todoItems[index].completed;
        // todoItem.completed = ! todoItem.completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllItems() {
        localStorage.clear();
        this.todoItems = [];
      }
    },
    created() {
    if (localStorage.length > 0){
      //for문에서는 값이 계속 바뀌기 때문에 let으로 선언해줘야 함
      for (let i = 0; i < localStorage.length; i ++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        
        // this.todoItems.push(localStorage.key(i));
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    // 축약 전 코드
    // 'todo-footer': TodoFooter,
    TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>