# District Eleven Website Redesign

Hello! I've begun converting this React app into a Next.js 13 app. See the most up to date version [here](https://github.com/kaseyvee/district-eleven).

## Before:

### Desktop

<div>
  <img src="https://i.imgur.com/fU2F7cT.png" alt="Homepage hero view desktop" width="500">
  <img src="https://i.imgur.com/4MgYHhQ.png" alt="Menu page view desktop" width="500">
</div>

### Mobile

<div>
  <img src="https://i.imgur.com/ePdK40D.png" alt="Homepage hero view mobile" width="250">
  <img src="https://i.imgur.com/vI24etg.png" alt="Menu page view mobile" width="250">
</div>

## After:

### Desktop

<div>
  <img src="https://i.imgur.com/u5XHw2T.png" alt="Homepage hero view desktop" width="500">
  <img src="https://i.imgur.com/gCQ4NgS.png" alt="Menu page view desktop" width="500">
</div>

### Mobile

<div>
  <img src="https://i.imgur.com/aECSJAK.png" alt="Homepage hero view mobile" width="250">
  <img src="https://i.imgur.com/dX37nS2.png" alt="Menu page view mobile" width="250">
</div>

## Original website frustrations & solutions:

1. **Frustration**: Updating menu items is a repetitive task that must be changed manually on all menu pages (all day menu, happy hour, and take-out). <br>
   **Solution**: Request all menu item entries from Contentful at initial visit and use boolean values to dynamically render associated menu items to each menu page. User only needs to update item once on Contentful and publish changes.

2. **Frustration**: Longer customer interactions due to sold out menu items that are not reflected on online menu. Servers do not have access to make quick menu updates during service. Can probably change on server iPads, but UI allows the website to be vulnerable to mistaken layout changes (ie. accidentally adding things where they shouldn't be, accidentally deleting other content, etc.). <br>
   **Solution**: Contentful UI allows to make swift menu changes on server iPads with ease, without the website being vulnerable to layout shifts/mistakes. This change is made by simply toggling a boolean value and publishing these changes.

3. **Frustration**: Seasonal or rotating menu items that should be removed completely from customer view must be manually typed back onto the menu when a menu item is back in season/rotation. <br>
   **Solution**: Contentful allows for menu items to be unpublished, removing items from customer view, but retaining the data to be republished at a later time. Staff do not need to remember menu item names, descriptions, and prices, nor do they have to wait for management to make these changes.

4. **Frustration**: Longer menu navigation for customers on mobile due to having to manually scroll to each section. <br>
   **Solution**: Implement menu section navigation bar that remains at the top of the screen, so customers can jump from food to drinks, for example.

## To do:

- change drink category names
- check if vietnamese categories are correct lol
- convert project to nextjs app for ssg and implement contentful webhooks

## Furthur development:

- get better restaurant/food photos
- implement 3rd party map in footer
- make menu section navigation more obvious it is scrollable on mobile
