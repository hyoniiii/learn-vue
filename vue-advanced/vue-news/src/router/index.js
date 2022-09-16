import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsViews from '../views/NewsViews.vue'
import AskViews from '../views/AskViews.vue'
import JobsViews from '../views/JobsViews.vue'


Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            //path : url 주소
            path:'/news',
            //component : url 주소로 갔을 때 표시 될 컴포넌트(페이지)
            component: NewsViews,
        },
        {
            path:'/ask',
            component: AskViews,
        },
        {
            path:'/jobs',
            component: JobsViews,
        }
    ]
})