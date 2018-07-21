# EvolentHealth

## Getting Started

Please install Node.js first, then simply run

```
npm i
```

to install the dependencies in the local node_modules folder.

```
npm run build
```

to build

```
npm start
```

to start the server

Open [localhost:3000](http://localhost:3000/) to see the application

If you are using 3000, simply open [server.js](https://github.com/potatozerg/EvolentHealth/blob/master/server.js) and change it to an unused port

To run unit test:

```
npm test
```

## Application Details

This single page application contains 3 views, main(table), list and detail.

The main(table) view contains a table of contacts. You can access and edit details of each contacts by clicking the contact you want to edit. However, you are not allowed to delete any of them here.

The list views also contains a table of contacts, you can't edit details on this view, but you can delete the selected contact by clicking Delete icon. You can also activate or deactivate an account on this view.

You can enter detail view by either clicking a contact on main view or by adding a new contact. The Save button is disabled unless you have enter valid data on all the fields. When you are entering invalid data, the color of text will turn to red.

All data in this application is stored in LocalStorage once you initialize them.

## Folder Structure

The folder structure is really simple. In the root, the [server.js](https://github.com/potatozerg/EvolentHealth/blob/master/server.js) is the one starts the server, [package.json](https://github.com/potatozerg/EvolentHealth/blob/master/package.json) is to manage all the info about this project, [karma.conf.js](https://github.com/potatozerg/EvolentHealth/blob/master/karma.conf.js) is the unit testing config file, [gulpfile.js](https://github.com/potatozerg/EvolentHealth/blob/master/gulpfile.js) is the build config file.

In the src folder, it contains 3 folders, css folder that contains css files, js folder that contains js source files and template folder contains html file and controller(js) for each view. In the root of src folder, there is the main controller and the base view. For each controller, there is a spec.js file for its unit testing.
