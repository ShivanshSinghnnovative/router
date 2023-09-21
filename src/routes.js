import {createWebHashHistory,createRouter} from 'vue-router'
const HomePage = () => import('./views/HomePage.vue')
const AboutPage = () => import('./views/AboutPage.vue')
const JobPage =() => import('./views/JobPage.vue')
const JobDetails=() => import('./components/JobDetails.vue')
const NotFound=() => import( './components/PageNotfound.vue')

const routes=[
    {
        name:'HomePage',
        path:'/',
        component:HomePage
    },
    {
        name:'AboutPage',
        path:'/about',
        component:AboutPage
    },
    {
        name:'JobPage',
        path:'/jobs',
        component:JobPage
    },
    {
        name:'JobDetails',
        path:'/jobs/:id',
        component:JobDetails
    },
    {
        name:'NotFound',
        path:'/:pathMatch(.*)',
        component:NotFound
    }
  
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;