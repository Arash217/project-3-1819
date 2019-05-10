# project-3-1819

## Summary
This readme contains my proof of concept for the tag system of CERN's Jiskefet webapp.
![Overview](../master/docs/new-tags.jpg)

## Project setup
Install dependencies
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

## Design
This section compares the differences and improvements between the current tag system of the Jiskefet webapp and my proof of concept.

### Current tag system
![Overview](../master/docs/current-tags.jpg)

The current tag system of the webapp:
- Has a select field to add existing tags to the log
- An input field to add new tags to the log
- A button to save an existing tag or new tag to the log
- And finally an unordered list to display all the tags of the logs

