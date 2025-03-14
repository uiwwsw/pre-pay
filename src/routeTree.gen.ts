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
import { Route as StoreStoreIdImport } from './routes/store/$storeId'
import { Route as AuthRequestImport } from './routes/auth/request'
import { Route as AuthNotificationImport } from './routes/auth/notification'
import { Route as AuthMyImport } from './routes/auth/my'
import { Route as AdminStoreImport } from './routes/admin/store'
import { Route as AuthOrderStoreIdImport } from './routes/auth/order/$storeId'

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

const AuthRequestRoute = AuthRequestImport.update({
  id: '/request',
  path: '/request',
  getParentRoute: () => AuthRoute,
} as any)

const AuthNotificationRoute = AuthNotificationImport.update({
  id: '/notification',
  path: '/notification',
  getParentRoute: () => AuthRoute,
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

const AuthOrderStoreIdRoute = AuthOrderStoreIdImport.update({
  id: '/order/$storeId',
  path: '/order/$storeId',
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
    '/auth/notification': {
      id: '/auth/notification'
      path: '/notification'
      fullPath: '/auth/notification'
      preLoaderRoute: typeof AuthNotificationImport
      parentRoute: typeof AuthImport
    }
    '/auth/request': {
      id: '/auth/request'
      path: '/request'
      fullPath: '/auth/request'
      preLoaderRoute: typeof AuthRequestImport
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
  }
}

// Create and export the route tree

interface AdminRouteChildren {
  AdminStoreRoute: typeof AdminStoreRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminStoreRoute: AdminStoreRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

interface AuthRouteChildren {
  AuthMyRoute: typeof AuthMyRoute
  AuthNotificationRoute: typeof AuthNotificationRoute
  AuthRequestRoute: typeof AuthRequestRoute
  AuthOrderStoreIdRoute: typeof AuthOrderStoreIdRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthMyRoute: AuthMyRoute,
  AuthNotificationRoute: AuthNotificationRoute,
  AuthRequestRoute: AuthRequestRoute,
  AuthOrderStoreIdRoute: AuthOrderStoreIdRoute,
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
  '/admin/store': typeof AdminStoreRoute
  '/auth/my': typeof AuthMyRoute
  '/auth/notification': typeof AuthNotificationRoute
  '/auth/request': typeof AuthRequestRoute
  '/store/$storeId': typeof StoreStoreIdRoute
  '/auth/order/$storeId': typeof AuthOrderStoreIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/auth': typeof AuthRouteWithChildren
  '/manager': typeof ManagerRoute
  '/oauth': typeof OauthRoute
  '/sign-in': typeof SignInRoute
  '/sign-up': typeof SignUpRoute
  '/admin/store': typeof AdminStoreRoute
  '/auth/my': typeof AuthMyRoute
  '/auth/notification': typeof AuthNotificationRoute
  '/auth/request': typeof AuthRequestRoute
  '/store/$storeId': typeof StoreStoreIdRoute
  '/auth/order/$storeId': typeof AuthOrderStoreIdRoute
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
  '/admin/store': typeof AdminStoreRoute
  '/auth/my': typeof AuthMyRoute
  '/auth/notification': typeof AuthNotificationRoute
  '/auth/request': typeof AuthRequestRoute
  '/store/$storeId': typeof StoreStoreIdRoute
  '/auth/order/$storeId': typeof AuthOrderStoreIdRoute
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
    | '/admin/store'
    | '/auth/my'
    | '/auth/notification'
    | '/auth/request'
    | '/store/$storeId'
    | '/auth/order/$storeId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/admin'
    | '/auth'
    | '/manager'
    | '/oauth'
    | '/sign-in'
    | '/sign-up'
    | '/admin/store'
    | '/auth/my'
    | '/auth/notification'
    | '/auth/request'
    | '/store/$storeId'
    | '/auth/order/$storeId'
  id:
    | '__root__'
    | '/'
    | '/admin'
    | '/auth'
    | '/manager'
    | '/oauth'
    | '/sign-in'
    | '/sign-up'
    | '/admin/store'
    | '/auth/my'
    | '/auth/notification'
    | '/auth/request'
    | '/store/$storeId'
    | '/auth/order/$storeId'
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
        "/admin/store"
      ]
    },
    "/auth": {
      "filePath": "auth.tsx",
      "children": [
        "/auth/my",
        "/auth/notification",
        "/auth/request",
        "/auth/order/$storeId"
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
    "/admin/store": {
      "filePath": "admin/store.tsx",
      "parent": "/admin"
    },
    "/auth/my": {
      "filePath": "auth/my.tsx",
      "parent": "/auth"
    },
    "/auth/notification": {
      "filePath": "auth/notification.tsx",
      "parent": "/auth"
    },
    "/auth/request": {
      "filePath": "auth/request.tsx",
      "parent": "/auth"
    },
    "/store/$storeId": {
      "filePath": "store/$storeId.tsx"
    },
    "/auth/order/$storeId": {
      "filePath": "auth/order/$storeId.tsx",
      "parent": "/auth"
    }
  }
}
ROUTE_MANIFEST_END */
