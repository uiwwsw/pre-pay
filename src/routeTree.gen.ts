/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignUpImport } from './routes/sign-up'
import { Route as SignInImport } from './routes/sign-in'
import { Route as OauthImport } from './routes/oauth'
import { Route as ManagerImport } from './routes/manager'
import { Route as AuthImport } from './routes/auth'
import { Route as AdminImport } from './routes/admin'
import { Route as IndexImport } from './routes/index'
import { Route as StoreStoreIdImport } from './routes/store.$storeId'
import { Route as AuthMyImport } from './routes/auth/my'
import { Route as AdminStoreImport } from './routes/admin/store'
import { Route as AdminNoticeImport } from './routes/admin/notice'
import { Route as AuthStoreIndexImport } from './routes/auth/store/index'
import { Route as AuthHistoryIndexImport } from './routes/auth/history/index'
import { Route as AuthStoreRequestImport } from './routes/auth/store/request'
import { Route as AuthOrderStoreIdImport } from './routes/auth/order.$storeId'
import { Route as AuthStoreSubStoreIdImport } from './routes/auth/store/sub.$storeId'
import { Route as AuthHistoryDetailIdImport } from './routes/auth/history/detail/$id'

// Create/Update Routes

const SignUpRoute = SignUpImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => rootRoute,
} as any)

const SignInRoute = SignInImport.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => rootRoute,
} as any)

const OauthRoute = OauthImport.update({
  id: '/oauth',
  path: '/oauth',
  getParentRoute: () => rootRoute,
} as any)

const ManagerRoute = ManagerImport.update({
  id: '/manager',
  path: '/manager',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const AdminRoute = AdminImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const StoreStoreIdRoute = StoreStoreIdImport.update({
  id: '/store/$storeId',
  path: '/store/$storeId',
  getParentRoute: () => rootRoute,
} as any)

const AuthMyRoute = AuthMyImport.update({
  id: '/my',
  path: '/my',
  getParentRoute: () => AuthRoute,
} as any)

const AdminStoreRoute = AdminStoreImport.update({
  id: '/store',
  path: '/store',
  getParentRoute: () => AdminRoute,
} as any)

const AdminNoticeRoute = AdminNoticeImport.update({
  id: '/notice',
  path: '/notice',
  getParentRoute: () => AdminRoute,
} as any)

const AuthStoreIndexRoute = AuthStoreIndexImport.update({
  id: '/store/',
  path: '/store/',
  getParentRoute: () => AuthRoute,
} as any)

const AuthHistoryIndexRoute = AuthHistoryIndexImport.update({
  id: '/history/',
  path: '/history/',
  getParentRoute: () => AuthRoute,
} as any)

const AuthStoreRequestRoute = AuthStoreRequestImport.update({
  id: '/store/request',
  path: '/store/request',
  getParentRoute: () => AuthRoute,
} as any)

const AuthOrderStoreIdRoute = AuthOrderStoreIdImport.update({
  id: '/order/$storeId',
  path: '/order/$storeId',
  getParentRoute: () => AuthRoute,
} as any)

const AuthStoreSubStoreIdRoute = AuthStoreSubStoreIdImport.update({
  id: '/store/sub/$storeId',
  path: '/store/sub/$storeId',
  getParentRoute: () => AuthRoute,
} as any)

const AuthHistoryDetailIdRoute = AuthHistoryDetailIdImport.update({
  id: '/history/detail/$id',
  path: '/history/detail/$id',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/manager': {
      id: '/manager'
      path: '/manager'
      fullPath: '/manager'
      preLoaderRoute: typeof ManagerImport
      parentRoute: typeof rootRoute
    }
    '/oauth': {
      id: '/oauth'
      path: '/oauth'
      fullPath: '/oauth'
      preLoaderRoute: typeof OauthImport
      parentRoute: typeof rootRoute
    }
    '/sign-in': {
      id: '/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof SignInImport
      parentRoute: typeof rootRoute
    }
    '/sign-up': {
      id: '/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof SignUpImport
      parentRoute: typeof rootRoute
    }
    '/admin/notice': {
      id: '/admin/notice'
      path: '/notice'
      fullPath: '/admin/notice'
      preLoaderRoute: typeof AdminNoticeImport
      parentRoute: typeof AdminImport
    }
    '/admin/store': {
      id: '/admin/store'
      path: '/store'
      fullPath: '/admin/store'
      preLoaderRoute: typeof AdminStoreImport
      parentRoute: typeof AdminImport
    }
    '/auth/my': {
      id: '/auth/my'
      path: '/my'
      fullPath: '/auth/my'
      preLoaderRoute: typeof AuthMyImport
      parentRoute: typeof AuthImport
    }
    '/store/$storeId': {
      id: '/store/$storeId'
      path: '/store/$storeId'
      fullPath: '/store/$storeId'
      preLoaderRoute: typeof StoreStoreIdImport
      parentRoute: typeof rootRoute
    }
    '/auth/order/$storeId': {
      id: '/auth/order/$storeId'
      path: '/order/$storeId'
      fullPath: '/auth/order/$storeId'
      preLoaderRoute: typeof AuthOrderStoreIdImport
      parentRoute: typeof AuthImport
    }
    '/auth/store/request': {
      id: '/auth/store/request'
      path: '/store/request'
      fullPath: '/auth/store/request'
      preLoaderRoute: typeof AuthStoreRequestImport
      parentRoute: typeof AuthImport
    }
    '/auth/history/': {
      id: '/auth/history/'
      path: '/history'
      fullPath: '/auth/history'
      preLoaderRoute: typeof AuthHistoryIndexImport
      parentRoute: typeof AuthImport
    }
    '/auth/store/': {
      id: '/auth/store/'
      path: '/store'
      fullPath: '/auth/store'
      preLoaderRoute: typeof AuthStoreIndexImport
      parentRoute: typeof AuthImport
    }
    '/auth/history/detail/$id': {
      id: '/auth/history/detail/$id'
      path: '/history/detail/$id'
      fullPath: '/auth/history/detail/$id'
      preLoaderRoute: typeof AuthHistoryDetailIdImport
      parentRoute: typeof AuthImport
    }
    '/auth/store/sub/$storeId': {
      id: '/auth/store/sub/$storeId'
      path: '/store/sub/$storeId'
      fullPath: '/auth/store/sub/$storeId'
      preLoaderRoute: typeof AuthStoreSubStoreIdImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

interface AdminRouteChildren {
  AdminNoticeRoute: typeof AdminNoticeRoute
  AdminStoreRoute: typeof AdminStoreRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminNoticeRoute: AdminNoticeRoute,
  AdminStoreRoute: AdminStoreRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

interface AuthRouteChildren {
  AuthMyRoute: typeof AuthMyRoute
  AuthOrderStoreIdRoute: typeof AuthOrderStoreIdRoute
  AuthStoreRequestRoute: typeof AuthStoreRequestRoute
  AuthHistoryIndexRoute: typeof AuthHistoryIndexRoute
  AuthStoreIndexRoute: typeof AuthStoreIndexRoute
  AuthHistoryDetailIdRoute: typeof AuthHistoryDetailIdRoute
  AuthStoreSubStoreIdRoute: typeof AuthStoreSubStoreIdRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthMyRoute: AuthMyRoute,
  AuthOrderStoreIdRoute: AuthOrderStoreIdRoute,
  AuthStoreRequestRoute: AuthStoreRequestRoute,
  AuthHistoryIndexRoute: AuthHistoryIndexRoute,
  AuthStoreIndexRoute: AuthStoreIndexRoute,
  AuthHistoryDetailIdRoute: AuthHistoryDetailIdRoute,
  AuthStoreSubStoreIdRoute: AuthStoreSubStoreIdRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/auth': typeof AuthRouteWithChildren
  '/manager': typeof ManagerRoute
  '/oauth': typeof OauthRoute
  '/sign-in': typeof SignInRoute
  '/sign-up': typeof SignUpRoute
  '/admin/notice': typeof AdminNoticeRoute
  '/admin/store': typeof AdminStoreRoute
  '/auth/my': typeof AuthMyRoute
  '/store/$storeId': typeof StoreStoreIdRoute
  '/auth/order/$storeId': typeof AuthOrderStoreIdRoute
  '/auth/store/request': typeof AuthStoreRequestRoute
  '/auth/history': typeof AuthHistoryIndexRoute
  '/auth/store': typeof AuthStoreIndexRoute
  '/auth/history/detail/$id': typeof AuthHistoryDetailIdRoute
  '/auth/store/sub/$storeId': typeof AuthStoreSubStoreIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/auth': typeof AuthRouteWithChildren
  '/manager': typeof ManagerRoute
  '/oauth': typeof OauthRoute
  '/sign-in': typeof SignInRoute
  '/sign-up': typeof SignUpRoute
  '/admin/notice': typeof AdminNoticeRoute
  '/admin/store': typeof AdminStoreRoute
  '/auth/my': typeof AuthMyRoute
  '/store/$storeId': typeof StoreStoreIdRoute
  '/auth/order/$storeId': typeof AuthOrderStoreIdRoute
  '/auth/store/request': typeof AuthStoreRequestRoute
  '/auth/history': typeof AuthHistoryIndexRoute
  '/auth/store': typeof AuthStoreIndexRoute
  '/auth/history/detail/$id': typeof AuthHistoryDetailIdRoute
  '/auth/store/sub/$storeId': typeof AuthStoreSubStoreIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/auth': typeof AuthRouteWithChildren
  '/manager': typeof ManagerRoute
  '/oauth': typeof OauthRoute
  '/sign-in': typeof SignInRoute
  '/sign-up': typeof SignUpRoute
  '/admin/notice': typeof AdminNoticeRoute
  '/admin/store': typeof AdminStoreRoute
  '/auth/my': typeof AuthMyRoute
  '/store/$storeId': typeof StoreStoreIdRoute
  '/auth/order/$storeId': typeof AuthOrderStoreIdRoute
  '/auth/store/request': typeof AuthStoreRequestRoute
  '/auth/history/': typeof AuthHistoryIndexRoute
  '/auth/store/': typeof AuthStoreIndexRoute
  '/auth/history/detail/$id': typeof AuthHistoryDetailIdRoute
  '/auth/store/sub/$storeId': typeof AuthStoreSubStoreIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/admin'
    | '/auth'
    | '/manager'
    | '/oauth'
    | '/sign-in'
    | '/sign-up'
    | '/admin/notice'
    | '/admin/store'
    | '/auth/my'
    | '/store/$storeId'
    | '/auth/order/$storeId'
    | '/auth/store/request'
    | '/auth/history'
    | '/auth/store'
    | '/auth/history/detail/$id'
    | '/auth/store/sub/$storeId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/admin'
    | '/auth'
    | '/manager'
    | '/oauth'
    | '/sign-in'
    | '/sign-up'
    | '/admin/notice'
    | '/admin/store'
    | '/auth/my'
    | '/store/$storeId'
    | '/auth/order/$storeId'
    | '/auth/store/request'
    | '/auth/history'
    | '/auth/store'
    | '/auth/history/detail/$id'
    | '/auth/store/sub/$storeId'
  id:
    | '__root__'
    | '/'
    | '/admin'
    | '/auth'
    | '/manager'
    | '/oauth'
    | '/sign-in'
    | '/sign-up'
    | '/admin/notice'
    | '/admin/store'
    | '/auth/my'
    | '/store/$storeId'
    | '/auth/order/$storeId'
    | '/auth/store/request'
    | '/auth/history/'
    | '/auth/store/'
    | '/auth/history/detail/$id'
    | '/auth/store/sub/$storeId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AdminRoute: typeof AdminRouteWithChildren
  AuthRoute: typeof AuthRouteWithChildren
  ManagerRoute: typeof ManagerRoute
  OauthRoute: typeof OauthRoute
  SignInRoute: typeof SignInRoute
  SignUpRoute: typeof SignUpRoute
  StoreStoreIdRoute: typeof StoreStoreIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  AuthRoute: AuthRouteWithChildren,
  ManagerRoute: ManagerRoute,
  OauthRoute: OauthRoute,
  SignInRoute: SignInRoute,
  SignUpRoute: SignUpRoute,
  StoreStoreIdRoute: StoreStoreIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/admin",
        "/auth",
        "/manager",
        "/oauth",
        "/sign-in",
        "/sign-up",
        "/store/$storeId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/admin": {
      "filePath": "admin.tsx",
      "children": [
        "/admin/notice",
        "/admin/store"
      ]
    },
    "/auth": {
      "filePath": "auth.tsx",
      "children": [
        "/auth/my",
        "/auth/order/$storeId",
        "/auth/store/request",
        "/auth/history/",
        "/auth/store/",
        "/auth/history/detail/$id",
        "/auth/store/sub/$storeId"
      ]
    },
    "/manager": {
      "filePath": "manager.tsx"
    },
    "/oauth": {
      "filePath": "oauth.tsx"
    },
    "/sign-in": {
      "filePath": "sign-in.tsx"
    },
    "/sign-up": {
      "filePath": "sign-up.tsx"
    },
    "/admin/notice": {
      "filePath": "admin/notice.tsx",
      "parent": "/admin"
    },
    "/admin/store": {
      "filePath": "admin/store.tsx",
      "parent": "/admin"
    },
    "/auth/my": {
      "filePath": "auth/my.tsx",
      "parent": "/auth"
    },
    "/store/$storeId": {
      "filePath": "store.$storeId.tsx"
    },
    "/auth/order/$storeId": {
      "filePath": "auth/order.$storeId.tsx",
      "parent": "/auth"
    },
    "/auth/store/request": {
      "filePath": "auth/store/request.tsx",
      "parent": "/auth"
    },
    "/auth/history/": {
      "filePath": "auth/history/index.tsx",
      "parent": "/auth"
    },
    "/auth/store/": {
      "filePath": "auth/store/index.tsx",
      "parent": "/auth"
    },
    "/auth/history/detail/$id": {
      "filePath": "auth/history/detail/$id.tsx",
      "parent": "/auth"
    },
    "/auth/store/sub/$storeId": {
      "filePath": "auth/store/sub.$storeId.tsx",
      "parent": "/auth"
    }
  }
}
ROUTE_MANIFEST_END */
