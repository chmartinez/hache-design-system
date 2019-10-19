# hache-design-system
An attempt of doing a design system.

# Why this?
Check [the challenge](src/THE_CHALLENGE.md).

# Design System
The implementation to be done here will be based on https://ant.design, a Chinese product.
Style guide at https://www.figma.com/file/JltJT3Uda92nX1yiiCYBOG/Ant-Design-System-UI-Kit-(1.0)-(Preview)?node-id=322%3A22090.

## Components 
- [Alert](src/components/Alert/index.md)
- [Icon](src/components/Icon/index.md)


## Notes
* Check https://github.com/proksh/atomize. They have a cool way of setting default style values (kinda complicated but aligned with my thought process).
* Check https://www.figma.com/file/rdhptX8DCRT4Vx3h5G2ehI/Eggplore-Style-Guide---Freebie-(Copy)?node-id=0%3A1. Another design system worth trying :).

## How to?

### Start this project
This is based on create-react-app so just follow [their instructions](https://github.com/facebook/create-react-app#npm-start-or-yarn-start).

`npm install && npm start`

### Run tests

`npm run test`

### Setup my IDE (in case you're using one)
#### Configs for VSCode
Create a `jsconfig.json` file at root level and put this:

```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": [
    "src"
  ]
}
```
That should allow VSCode to detect the folders inside `src` as "aliases" (so you can avoid the `../../mystuff` imports).

# Todo
- [x] Add tests to the new component.
- [x] Add dismissable alert functionality.
- [x] Try to fix the issue with author's name in git commits
- [x] Add styles to alert.
- [x] Add `onDismiss` callback. No need to: if the alert needs it, then I'll add it. Not before.
- [x] (Alert) Add support for custom content
- [x] Find out how to setup aliases within a create-react-app (probably will imply VSCode changes) .
- [x] Add documentation for `Alert` component.
- [x] Set color palette based on ant.design.
- [ ] Set Icons.
- [ ] Adapt `Alert` to new design system.

