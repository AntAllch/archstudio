# **PROJECT TEMPLATE**
This project uses the following: 
 - SASS (SCSS)
 - Parcel


---------------------------------------------------------------------------------

<b style="color: greenyellow;">**NOTES**

YOU WILL NEED TO HAVE NODE.JS INSTALLED. TO CHECK IF YOU HAVE IT, TYPE "NODE -V" INTO TERMINAL AND IF IT SHOWS YOU A VERSION THEN GREAT. IF NOT, THEN INSTALLED IT FROM THE NODE.JS WEBSITE

This project uses a newer standard of SASS (Dart), so the way that sass is implemented is different. This project uses "@use" and "@forward" instead of "@import".</b>

---------------------------------------------------------------------------------
<b style="color: greenyellow;">"npm run dev"</b>

## **STARTING THE PROJECT WITH AUTO REFRESH**

To create a server which can auto-refresh your web page, open terminal (Ctrl + ') and enter <b style="color: greenyellow;">"npm run dev"</b>.  You will see something along the lines of: 

```
PS D:\Web Development\NewSass> npm run dev

> new-sass-template-ant@1.0.0 dev D:\Web Dev\new-sass-template-ant
> parcel src/index.html

Server running at http://localhost:1234 
√  Built in 7ms.
```

Now you will have another newly created folder called "dist". This is where all the files will be saved. However, you still need to edit files within the "src" folder.

## **WHEN YOU ARE READY TO GO TO PRODUCTION**

open terminal (ctrl + ') and enter <b style="color: greenyellow;">"npm run build"</b>. The final version of your site will be in the "dist" folder.

### **Using GITHUB** 
If using GitHub as version control then you will want to create a ".gitignore" file in the root directory and write "node_modules" inside, without the quote marks. 

If you download this project to another computer then you will not have the "node_modules" folder included so this is where you start the project with "npm install" to download the "node_modules" folder.
