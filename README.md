# StoreWebProject
Colaborative project from [Introduction to Web Development](https://uspdigital.usp.br/jupiterweb/obterDisciplina?nomdis=&sgldis=SCC0219) - Building a web store

Original file: https://docs.google.com/document/d/160_UcFtJu9pbvlwHxZntpPkyYJSht-EEaCqmZYELqEw/edit#

## Overview
You are a software developer and one of your clients hired you to create an online store. You can create the details for this store, such as the products and or services it sells. For instance, It may be an online:
Supermarket
PetShop (selling products/services)
Glasses
Real estate (Houses, apartments and land)

We chose: a cakery

## Contents:
1. File Milestone01: You can find our mock-up pages designed with Figma
2. File Milestone02: You can find our functional webpage boostraped with npx create-react-app

## How to use:
Follow these steps to get access to our application

### Cloning the repository:
Open your terminal, type and run the following command line:

```console
git clone https://github.com/jorgesalhani/StoreWebProject.git
```
Now you have our project!

### Go to the app directory:
After cloning thes repository, type and run the command:

```console
cd StoreWebProject
```
and, inside this file, type and run the command:

```console
cd Milestone02
```
Then, run

```console
cd milestone2-app
```
Now you are on our application repository!

### Install npm:
At the same repository (that is, the milestone2-app repository), run the following command:

```console
npm install
```
### Starting a react server:
After the installing process, run the following command line:

```console
npm start
```
And now, hopefully you are redirected to our homepage!!! :D

### What you can find:
1. At the first moment, you are at our homepage. You can scroll down and see the products on promotion and a list with the best-selling products
2. At the top, you can click at the logo and go back to our homepage anytime, check out your cart (a list of selected-to-buy products) and your profile
3. At the navigation bar, you can choose between: cakes, pies, cupcakes, vegan, diet products
4. Select any of them, and you will be redirect to a page with our products. At this point you can select all you want to buy and check your cart!
5. Also, you can click on every product. With this action you will be redirect to a page where you can find more detailed specifications about every product
6. After all, you can see on your cart every product you selected and, scrolling down, your purchases' total value

### What you cannot find (yet!)
1. A fully functional profile registration, with database integration,
2. A final step to definetelly buy your selected products, following by a message you've completed your current purchase
3. An update on your cart, zeroing the products bought

Hope you enjoy!! :D










====== PROJECTS SPECIFICATIONS ==============================

## Requirements
1. The system must have 2 types of users: Clients and Administrators
- Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
- Customers are users who access the system to buy products/services.
2. The admin record includes, at least: name, id, phone, email.
3. Each customer's record includes, at least: name, id, address, phone, email
4. Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
5. Your store may sell products, services or both (you decide)
6. Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
7. Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
8. Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.   
9. The system must provide accessibility requirements and provide good usability. The system must be responsive.


## Project Milestone 1: Store Mockups
The most common use of mockups in software development is to create user interfaces that show the end-user what the software will look like without having to build the software or the underlying functionality. UI mockups can range from very simple hand-drawn screen layouts, through realistic bitmaps, to semi-functional user interfaces developed in a software development tool.

### Objectives:
1. Develop a mockup (medium-high fidelity) of the Online Store application graphical user interface (client-side). It should be, based on the requirements listed in the following sections.
2. Practice mockup, HTML5 and CSS3 languages

### What should be ready (in your GitHub Project)
- GitHub’s README.md file with the Project Report (see below). The report should include the following items.
 
 - Navigation diagram for your application. You must use the Single-Page Application style. There is no need for fancy diagrams. You may even draw them on paper and photograph them using a cellphone. You can also use the Marvel tool to simulate the interaction between screens.
 
 - Mockups for all major system screens. Ideally, all mockups should be static HTML5/CSS3 files. At a minimum, create these files for the main app screen and 2 other screens. Mockups can be made using HTML5/CSS3 files, mockup tools (e.g. Figma).

### Project Report
The Project Report should begin with the group identification and the names and USP numbers of all students in the group. The Project Report has to have the following sections:
1. Requirements: The requirements are given in the assignment, but you have to add any new requirements needed by your particular store implementation.
2. Project Description: Describe how your project implements the functionality in the requirements. Diagrams can help a lot here.
3. Comments About the Code: Any comment you may want to add to help understand your code. This is good programming practice.
4. Test Plan: Text describing the tests that will be performed. If an automatic test tool/framework is used (ex: Selenium, jUnit, Spock), the code for the tests can be used.
5. Test Results: Text describing the test results. If an automatic test tool/framework is used, its output can be used.
6. Build Procedures: A step-by-step guide to run your code. You should start telling how to install whatever software you need, then how to download/build your program, and finally how to set up the environment to run it. Imagine that someone installing will just follow these commands (nothing more).
7. Problems: List any major problems you had.
8. Comments: Any comments you wish to add.

At this first milestone, you will probably only have material for the first two topics. But include the other topics, even if you leave them empty, and, if possible, write how you plan to implement them. For instance, for testing, you may say I intend to use the postman to test the back end, etc.

### Do not forget to include in the Project Description:
- The functionalities you are going to implement.
- Navigation diagram for your application linked to the screen mockups. This link can be just the name of the mockup (i.e. Mockup1, Mockup2, etc) or an HTML link.
- The information you are going to save in the server (no need to decide how that information will be saved).
At this stage, do not focus on producing beautiful user interfaces (UIs) but rather think about what kinds of interfaces you will need and what information each interface needs to show and to ask from the user. Also, think about how the users should navigate your app to accomplish their tasks (such as buying a product, register, etc).

### Layout Suggestions for Screens
These are just suggestions. Feel free to use other combinations:
- Homepage with a description of services/products offered and login area (any type of user) 
- If the user is a customer: 
- Screen with actions: buy a product, edit your account. 
- If you are an administrator
- Screen with actions: register administrators / customers / products / etc.) in a menu
- Product Inventory Management Screen (Add, Update, Delete, Consult)


## Project Milestone 2: Client Functionality
After developing the store client-side mockup, you should now implement it.
### Objectives: 
1. Develop the client-side of the application, based on the requirements outlined in the previous milestone
2. Apply the HTML5, CSS3, and JavaScript expertise learned in the course

### What should be ready (in your GitHub Project)
- All client program interfaces and features should be functional. Meaning that they should respond to user input, but not necessarily do something useful.
- HTML5, CSS3, and Javascript files with the client code. There must be an index.html file and the client should work by placing these files on an HTTP server and pointing the browser to that file.
- Test results (see below).

There is no need to develop a server-side. Server functionality can be implemented in the client through mock objects. Mock objects are “fake” objects that simulate the behavior of a “real” class or object so that we can focus the test on the code being tested. For example, application data can be saved locally (in memory or the browser local storage). This allows you to simulate (for a single client) all server database functionality.
The Test Plan and Test Results topics of your Project Report must include a test script of the program functionalities and the results of the tests performed by the team.
The allowed javascript frameworks are jQuery, materializecss, React, and Vue.
Tips: 
- Update all Project Report topics to reflect the current state of your project. 
- Make sure your Build Procedures are easily understandable to avoid problems with reviewers unable to run your program. 
- If you do not use testing tools, just describe the tests performed and their results.
- The Comments About the Code, Problems and Comments topics are not mandatory (just write No comments or No problems).

## Final Version: Fully Functional Application
### Objectives:
1. Fully develop the Online Store application, based on the requirements outlined in the previous tasks
2. Applying HTML5, CSS3, JavaScript, Node.js and NoSQL expertise learned in the course
After developing the client-side of the Online Store, now the full application should be deployed, including server and database sides.

### What should be ready (in your GitHub Project)
- All interfaces and features of the program must be ok (client and server). 
- Server functionality must be implemented using node.js and the NoSQL databases (CouchDB or MongoDB).
- The allowed javascript frameworks are Vue, jQuery, Vuetify, and React.
- The source code must be properly formatted and commented on. 
- The code should be compiled in a distributable form. There must be an index.html file.
- All Project Report topics must be finished.

### Tips: 
- Update all Project Report topics to reflect the current state of your project. 
- Check again your Build Procedures and make sure they work for the client and server-side. Do not forget to initialize the database. Avoid problems with reviewers unable to run your program. 
- If you do not use testing tools, just describe the tests performed and their results.
- The Comments About the Code, Problems and Comments topics are not mandatory (just write No comments or No problems).
