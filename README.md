VueJS with VueFire and Firestore
--------------------------------

This repo builds something similar to [this](https://dist-coznlbzabj.now.sh/) but with data persistence.

This example uses Google Firestore as a database back-end. For this you need to set up a project in the [Google console](https://firebase.google.com/docs/firestore/) and create your own `creds.json` file in the project root, something like:

```
{
    "projectId": "your-project-id",
    "databaseURL": "your-database-url"
}
```

Usage Steps:

1. git clone https://github.com/lcarbonaro/vue-firestore-example.git
2. cd vue-firestore-example
3. npm install
4. set up a Firestore database in Google Console
5. create `creds.json` file with your own credentials
4. npm run serve


References:
- [Article: VueJS with Firestore](https://medium.com/vue-mastery/full-stack-vue-js-with-firestore-62e2fe2ec1f3)
- [Vuefire on NPM](https://www.npmjs.com/package/vuefire/v/2.0.0-alpha.11)
- [Google Firestore Docs](https://firebase.google.com/docs/firestore/)

