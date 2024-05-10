import { lazy } from 'react'
 
const routes = [
    {
        path:"/article",
        component: lazy(()=>import('../views/Projects')),
        meta: {
            title:"项目",
        },
        exact: true,
        routes: []
    },
    {
        path:"/user",
        component: lazy(()=>import('../views/Stastics')),
        meta: {
            title:"统计",
        },
        child: []
    },
    {
        path:"/",
        component: lazy(()=>import('../views/Today')),
        meta: {
            title:"今日任务",
        },
        child: []
    },
]
export default routes;