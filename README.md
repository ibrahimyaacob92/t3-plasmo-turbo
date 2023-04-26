# T3 Plasmo Turbo

![plasmo](https://user-images.githubusercontent.com/58116068/234546253-7abb331b-905b-48f8-9f11-f5bfb0932eab.png)

This is a template for creating T3 apps and Plasmo browser extensions using Turborepo. With Turborepo + TRPC Api, you can easily manage web app and browser extension projects in one repository. It's obviously been derived from the `create-t3-turbo`. Styling is not yet configured.

## Folder Structure


```
apps
  ├─ plasmo
  |   ├─ Plasmo .69
  |   ├─ React 18 & /src
  |   ├─ Clerk Authentication (WIP)
  |   ├─ Navigation using Expo Router
  |   └─ Typesafe API calls using tRPC
  └─ next.js
      ├─ Next.js 13
      ├─ React 18
  |   ├─ Clerk Authentication (WIP)
      └─ E2E Typesafe API Server & Client
packages
 ├─ api
 |   └─ tRPC v10 router definition
 ├─ db
 |   └─ typesafe db-calls using Prisma
 ├─ ui
 |   └─ its been there by default (maybe we can add component library in this)
 ├─ eslint-config-custom
 |   └─ its been there by default
 └─ tsconfig
     └─ shared tsconfig (to be extended from)
```

## Quick Started

```
cp .env.example .env
yarn install
yarn dev
```

### View Chrome Extension

1. Head over to `chrome://extensions` and enable Developer Mode.
2. Click on "Load Unpacked" and navigate to your extension's `/apps/plasmo/build/chrome-mv3-dev` (or `/apps/plasmo/build/chrome-mv3-prod`) directory.

### Migrate Prisma

```
yarn workspace db db:migrate
```

## Deployment

TBC

## Contributing, Suggestions, Bug Reports and Feedback

I'm no expert and most of the stuff aren't finished, so, any contributions & feedbacks are welcomed! Just open an Issues or a PR!

If you encounter any bugs or issues while using this template, please report them in the Issues section of this repository.

## References

The stack originates from [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo).
