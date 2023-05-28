// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/user","layout":false,"id":"1"},"2":{"name":"login","path":"/user/login","parentId":"1","id":"2"},"3":{"path":"/welcome","name":"welcome","icon":"smile","parentId":"ant-design-pro-layout","id":"3"},"4":{"path":"/admin","name":"系统管理","icon":"crown","access":"canAdmin","parentId":"ant-design-pro-layout","id":"4"},"5":{"path":"/admin/beacon","name":"信标管理","parentId":"4","id":"5"},"6":{"path":"/checkin","name":"签到管理","icon":"crown","access":"canAdmin","parentId":"ant-design-pro-layout","id":"6"},"7":{"path":"/checkin/detail","name":"签到明细","parentId":"6","id":"7"},"8":{"path":"/checkin/summary","name":"签到统计","parentId":"6","id":"8"},"9":{"path":"/checkin/classroom/detail","name":"教室详情","parentId":"6","id":"9"},"10":{"path":"/","redirect":"/welcome","parentId":"ant-design-pro-layout","id":"10"},"11":{"path":"*","layout":false,"id":"11"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__Welcome" */'@/pages/Welcome.tsx')),
'4': React.lazy(() => import( './EmptyRoute')),
'5': React.lazy(() => import(/* webpackChunkName: "p__Admin__Beacon__Index" */'@/pages/Admin/Beacon/Index.tsx')),
'6': React.lazy(() => import( './EmptyRoute')),
'7': React.lazy(() => import(/* webpackChunkName: "p__Checkin__Index" */'@/pages/Checkin/Index.tsx')),
'8': React.lazy(() => import(/* webpackChunkName: "p__Checkin__components__Statistics" */'@/pages/Checkin/components/Statistics.tsx')),
'9': React.lazy(() => import(/* webpackChunkName: "p__Checkin__Classroom__Index" */'@/pages/Checkin/Classroom/Index.tsx')),
'10': React.lazy(() => import( './EmptyRoute')),
'11': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/Users/tmac.luo/work/Project/sjtu-checkin/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'/Users/tmac.luo/work/Project/sjtu-checkin/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}