<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- v-for를 사용할 때는 v-bind:key 넣어주기-->
      <!-- 갯수에 상관없이 해당 리스트에 순서를 부여해주는 index -->
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  // data: function() {
  //   return {
  //     todoItems: []
  //   }
  // },
  props: ['propsdata']
  ,
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
      // localStorage.removeItem(todoItem);
      //removeItem API
      // this.todoItems.splice(index, 1);
      //splice API : 특정 index에서 하나를 지울 수 있음 / 지운 후에 새로운 배열 반영

    },
    toggleComplete(todoItem, index) {
      this.$emit('toggleItem', todoItem, index);
    }
  },
  //화면이 시작하자마자 실행되는 함수(window.open 같은 느낌인 듯)
  // created: function() {
  //   if (localStorage.length > 0){
  //     for (var i = 0; i < localStorage.length; i ++) {
  //       if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //         // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       }
        
  //       // this.todoItems.push(localStorage.key(i));
  //     }
  //   }
  // }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0px;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }

  /* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>