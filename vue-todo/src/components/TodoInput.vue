<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer addBtn" v-on:click="addTodo">
          <i class="fas fa-plus"></i>
      </span>

    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>경고!
            <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
        </h3>
      </template>
      <template #body>
          <h3>텍스트를 입력하세요.</h3>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            //newtodoItem이 공백이 아닐 때
            if (this.newTodoItem !== ''){
            // var obj = {completed: false,item: this.newTodoItem};
            // console.log(this.newTodoItem);

            // 저장하는 로직 API
            // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
            // this.$emit('이벤트 이름', 인자1, 인자2 , ....);
            this.$emit('addTodoItem', this.newTodoItem);
            this.clearInput();
            } else {
                this.showModal = !this.showModal;
                //true false값 변환
            }
        },
        clearInput() {
            //input 박스 내용 초기화 로직
            this.newTodoItem = ''; 
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn {
        color: #42b983;
    }
</style>