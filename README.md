# Portfolio Benchmarks
I have made some notes after analyzing 17 portfolio webpages, which I am now sharing with you:

## Favicon:
![image](https://github.com/dwtoledo/portfolio/assets/11148858/cbb02119-8d11-4042-b869-e5ced2e5463f)

Almost all portfolios does't have favicon, some of then have:
- The developer initials;
- The developer avatar;
- Some unrecognized icons, or;
- Some funny icons (like a cat or chameleon).

> **Warning**
> The ***developer's avatar as favicon is not a good idea!***
>
> I will explain with details on Profile Section.

> **Note**
> For me, ***the simplest and most objective favicon is the developer's name initials!***.
> 
> ![favicon-32x32](https://github.com/dwtoledo/portfolio/assets/11148858/31b121c5-f226-4d5e-848f-0be35eb8ef9e)


## Header:
Recruiters claimed about the lack of ease of contact with their candidates. For this reason, ***a floating header with the essential contacts sounds to be a good idea!***, because it'll guarantee that the contacts will be available all the time on screen.

> **Warning**
> ***Don't use transparency.***
> 
> The portfolio content can confuse/mix with the header info.
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/12689fc8-6141-4383-975a-ec2130db04b0)

A ***clean, minimal, and organized header*** is essential since this component will be floating on the user's screen, example:
- My ***name***;
- ***LinkedIn icon*** without the social name;
- ***GitHub icon*** without the social name;
- A highlighted ***"Send me a mail" button***;
- (Optional) Switch ***Light/Dark mode icon***.

> **Note**
> Result on Light Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/501257cf-6643-46dc-9681-fe65981b2283)
> 
> Result on Dark Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/d9dc0d46-ebd1-4002-ae27-f83dc76d83b0)
> 
> Result on Mobile was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/7bec22fb-96f9-4317-9640-81a861c2dff4)

## Profile:

***Should be simple and concise to allow space for your projects/skills, which is the main purpose when a recruiter accesses your portfolio.*** Some portfolios have the complete "About Me" (with picture, complete work experience, and others) on a separate page, and this could be a great idea, because the recruiter will enter this page after they have liked and are interested in your skills.

A simple and concise profile info on my page could be:
- Developer's ***name***;
- Professional ***headline***;
- ***Main technologies*** expertise.
  
> **Warning**
> ***Don't use technology icons only.***
>
> Some recruiters won't recognize technology just by icons, they must read instead;
>
>![image](https://github.com/dwtoledo/portfolio/assets/11148858/ad6f8217-0da0-478e-b6ce-934a8e85bc24)
>
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/6ffeef54-0d36-482e-bd8b-a9c203f577a3)
> 
> *I'm a developer and I don't recognize some tech items above. Can you imagine a recruiter?*

> **Note**
> GitHub API can be used to retrieve data from a public profile.
>
> My data can be accessed from Url below. For yours, just replace 'dwtoledo' with your GitHub UserName.
> 
> ```
> https://api.github.com/users/dwtoledo
> ```
> 
> - I used my ***name and bio data from GitHub API***;
> 
> - added my Software, Industry, and Entrepreneurship ***background overview***, and;
> 
> - added my ***technology and soft skills tags***.
> 
> Result on Light Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/d4d49f43-270e-41a6-9e1d-9f7e39c3edde)
> 
> Result on Dark Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/86b7ee02-558c-44bd-a86a-3012476c177c)
> 
> Result on Mobile was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/60546e82-0870-4bfd-8acc-5a22723c237a)


## Projects:
Images can be more impressive than long texts, so consider using images or even GIFs as project banner. A good project presentation could include:
- A ***large banner***;
- A ***concise description***;
- a ***list of technologies used***;
- ***buttons to access*** it;
- Use ***mobile-first*** methodology;
- Try to use the best ***media compression technologies***, YouTube embed URLs, and more.

> **Warning**
> Again, ***don't use technology icons only;***
> 
> ***Don't hide your projects*** on slider or similar components;
> 
> ***Don't use large files/videos***, as this will increase page loading time. 

> **Important**
> New ***projects must be easily or automatically added to the portfolio*** as soon as the project is published.
>
> You could use a ***mocked JSON*** to provide the project data for your portfolio, because you just need to ***modify the JSON to add, remove, or update your project presentations***.

> **Note**
> ***GitHub API*** can be used to ***retrieve public repos data*** from a user.
>
> My data can be accessed from Url below. For yours, just replace 'dwtoledo' with your GitHub UserName.
>
> ```
> https://api.github.com/users/dwtoledo/repos
> ```
> Unfortunately, the repository's social preview image is not available on this API. For this reason, I saved my banners in the root folder of the project's repository with the name "social-banner.webp"; to access them, I use the following URL:
> ```
> https://raw.githubusercontent.com/dwtoledo/challenge-01-ignite/main/social-banner.webp
> ```
> *"challenge-01-ignite"* is the my repository name and *"main"* is the branch that I developed the project;
>
> I used the following data to develop my project cards:
> - ***Name*** for card titile;
> - ***Tags*** for card tags below titles;
> - ***Description*** for card description;
> - ***Github url*** for user click button;
> - ***Published url*** for user click button, and;
> - ***Github repository id*** to sort the projects from newest to oldest;
>
> Result on Light Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/be7f2004-e4dc-45b9-92c0-6e2034d1a166)
> 
> Result on Dark Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/84efdee9-3150-4b5b-a2e5-b1465675daec)
> 
> Result on Mobile was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/14d886bb-54b9-4e17-b08a-b1bece512b5b)

## Contacts:
The contacts are available on the floating header, so instead of repeating the contacts, ***consider adding a engaging and or breaking ice message to the recruiter***.
I used *ChatGPT to generate 5 inviting phrases* for the recruiter, and the results were:
1. "I'm open to challenging opportunities and eager to learn how I can contribute to your company's success. Let's talk!"
2. "I would be delighted to discuss how my experience and skills can be an asset to your team. Please feel free to reach out for an exploratory conversation."
3. "If you liked what you saw in my portfolio, I'm available to delve deeper into the conversation and explore how I can help meet your needs."
4. "I would love to share more about my work and discover how my skills can align with your company's requirements. Let's schedule a conversation?"
5. "My portfolio is just a small glimpse of what I can do. I'm excited to discuss collaboration opportunities. Get in touch, and let's start a conversation about what we can achieve together."

> **Note**
> Result on Light Mode was:
>
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/3dc11cca-168b-401d-b1ce-d73678d945c7)
>
> Result on Dark Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/3f64df7f-7bd1-4353-962b-d4c14932f927)
>
> Result on Mobile was:
>
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/0f2cbafe-3e74-4b73-9fb1-9046823f9bb6)


## Footer:
***Simple and professional*** to avoid distracting the user from the above convidative contact message.
- ***Currently year***;
- ***"Developed by"*** message, and;
- ***Technology used***.

> **Note**
> Result on Light Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/e620b6b1-033c-4073-8071-8287e2d02ec0)
> 
> Result on Dark Mode was:
> 
>![image](https://github.com/dwtoledo/portfolio/assets/11148858/017d5397-14e9-4643-a7ef-85f7d44d92a8)
> 
> Result on Mobile was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/b94b1318-a062-4bbd-ba0e-3f3a805653ae)


