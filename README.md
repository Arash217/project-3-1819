# project-3-1819

## Summary
This readme contains my proof of concept for the tag system of CERN's Jiskefet webapp.
![Tags](../master/docs/new-tags.jpg)

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
![Tags](../master/docs/current-tags.jpg)

The current tag system of the webapp:
- Has a select field to add existing tags to the log
- An input field to add new tags to the log
- A button to save an existing tag or new tag to the log
- And finally an unordered list to display all the tags of the logs

The disadvantages of the current tag system are:
- That it takes a lot of space
- There's no way to delete a tag
- There's also no way to update a tag
- There's also no dark theme to lessen the strain on the user's eyes in the dark.

### Proof of concept
![Tags](../master/docs/new-tags.jpg)

Advantages of the proof of concept:
- All the functionalities are added to a single component to reduce the space.
- Tags can be deleted by either:
- Clicking on the delete icon of the tag 
- Or by entering backspace in the input field if the input field is empty. Delete by backspace is forgiving, meaning that you should enter backspace twice in order to delete a tag. This is done in order to prevent mistakes.
- Tags can be updated by clicking on a tag to change the value. Saving the value is done by pressing the enter key. An undo button will be added in the edit mode to restore the original value.
- Light and dark theme to lessen the strain on the user's eyes.

