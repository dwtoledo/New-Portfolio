# Portfolio Benchmarks
Yeah, **I analyzed 17 (SEVENTEEN!) Front End Developer portfolios** and created a presentation with many insights, tips, and **VALUABLE** information for you to excel in creating yours!

[Download the presentation](https://github.com/dwtoledo/portfolio/blob/e9a88b5a6595a472071e0151ef68de7e1049ebd7/Portfolio%20Benchmark%20-%20Douglas%20Toledo.pdf) or read the article below:

## Introduction:
🤩 Create an **impressive and relevant portfolio** for the recruiters;

🧑‍💻 **Key findings** from the analysis of 17 front-end developer portfolios;

💡Provide **valuable insights**.

## Favicon:
![image](https://github.com/dwtoledo/portfolio/assets/11148858/cbb02119-8d11-4042-b869-e5ced2e5463f)

Having a favicon is **a great way to start demonstrate your professionalism**!

Almost all analyzed portfolios doesn't have favicon, some of then have:
- The developer initials;
- The developer avatar;
- Default framework favicon;
- Some unrecognized icons, or;
- Some funny icons (like a cat or chameleon).

> **Warning**
> **Avoid using the developer's image as favicon!**
> I will explain with details on Profile Section.

> **Note**
> For me, **the simplest and most objective favicon is the developer's name initials!**.
> 
> ![favicon-32x32](https://github.com/dwtoledo/portfolio/assets/11148858/31b121c5-f226-4d5e-848f-0be35eb8ef9e) ... favicon
>
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/708d06eb-f211-43c2-b1d5-79102a622d68) ... result on browser



## Header:
```html
<header> Use semantic tags! </header>
```

🕵️ **Recruiters claims about the lack of ease of contact** with their candidates!

For this reason, **a floating header with the essential contacts sounds to be an excellent idea**, because it'll guarantee that your contacts will be available all the time on screen.

> **Warning**
> **🫠 Don't use transparency.**
> The portfolio content can confuse/mix with the header info.
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/12689fc8-6141-4383-975a-ec2130db04b0)

A **clean, minimal, and organized header is essential** since it will be floating on the recruiter's screen. It can have:
- Your **name** or **logo**;
- **LinkedIn link** as button/icon without the name;
- **GitHub link** as button/icon without the name;
- A highlighted **"Send me a mail" button**;
- (Optional) Switch **Light/Dark mode** icon.

> **Note**
> Result on Light Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/501257cf-6643-46dc-9681-fe65981b2283)
> 
> On Dark Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/d9dc0d46-ebd1-4002-ae27-f83dc76d83b0)
> 
> On Mobile was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/7bec22fb-96f9-4317-9640-81a861c2dff4)

## Profile:
```html
<header> Use semantic tags! </header>
<main>
  <section> Profile Section. </section>
</main>
```

Should be **simple and concise to give space for your projects**, which is the purpose when a recruiter visit your portfolio. It could have:
- The developer's **name**;
- The professional **headline**;
- The **main technologies** expertise.

> **Warning**
> **🤳 Don't add your picture.**
> 
> I have already received feedback that the candidate's picture is not relevant for companies, as they are looking for the best candidates regardless of their ethnic, racial, gender, and others.
>
> As an example, I have also heard that some companies' policies automatically reject resumes with pictures.
> 
> **Don't use technology icons only.**
>
> Some recruiters won't recognize technology just by icons, they must read instead;
>
>![image](https://github.com/dwtoledo/portfolio/assets/11148858/ad6f8217-0da0-478e-b6ce-934a8e85bc24)
>
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/6ffeef54-0d36-482e-bd8b-a9c203f577a3)
> 
> I don't recognize some icons above. Can you imagine a recruiter?


> **Important**
> ✅ **Save space** on your page for your projects!
> Be smart and think on every detail!

💡How can you **make your profile information dynamic**? Why not use the **GitHub API** to fetch your profile data?

[https://api.github.com/users/dwtoledo](https://api.github.com/users/dwtoledo)

Access your GitHub data replacing 'dwtoledo' with your username.

Data available on GitHub API:

Think! When **you change information on GitHub, it will be automatically changed in your portfolio**!

```json
{
  "login": "dwtoledo",
  "id": 11148858,
  "node_id": "MDQ6VXNlcjExMTQ4ODU4",
  "avatar_url": "https://avatars.githubusercontent.com/u/11148858?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/dwtoledo",
  "html_url": "https://github.com/dwtoledo",
  "followers_url": "https://api.github.com/users/dwtoledo/followers",
  "following_url": "https://api.github.com/users/dwtoledo/following{/other_user}",
  "gists_url": "https://api.github.com/users/dwtoledo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/dwtoledo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/dwtoledo/subscriptions",
  "organizations_url": "https://api.github.com/users/dwtoledo/orgs",
  "repos_url": "https://api.github.com/users/dwtoledo/repos",
  "events_url": "https://api.github.com/users/dwtoledo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/dwtoledo/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Douglas Toledo",
  "company": "N/A",
  "blog": "https://dwtoledo.github.io/portfolio/",
  "location": "Toronto, Canada",
  "email": null,
  "hireable": true,
  "bio": "Software Engineer | Front End Developer | Angular and React Web UI Development",
  "twitter_username": "dwtoledo",
  "public_repos": 12,
  "public_gists": 0,
  "followers": 34,
  "following": 17,
  "created_at": "2015-02-22T17:54:52Z",
  "updated_at": "2023-11-02T20:45:59Z"
}
```

For my profile...
- I used my **name and headline data from GitHub API**;
- I added an overview of my background in Software, Industry, and Entrepreneurship, and;
- I added my **technology and soft skills tags**.

> **Note**
> Result on Light Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/d4d49f43-270e-41a6-9e1d-9f7e39c3edde)
> 
> On Dark Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/86b7ee02-558c-44bd-a86a-3012476c177c)
> 
> On Mobile was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/60546e82-0870-4bfd-8acc-5a22723c237a)


## Projects:
```html
<header> Use semantic tags! </header>
<main>
  <section> Profile Section. </section>
  <section> Projects Section. </section>
</main>
```

😲 **Images are more impressive than long texts**, so use them as beautiful banners for your projects. A good project presentation could include:

- A **large and beautiful banner**;
- A **concise description**;
- a **list of technologies used**;
- **buttons to access** it;

> **Warning**
> **🔦 Don't hide relevant contents** on sliders, pagination, accordions, or similar elements, as relying on **recruiter interaction cannot be guaranteed**.;
> 
> **⏱️ Don't use large files/videos**, as this will **increase page loading time**. A good page loading time is less than 2.5 seconds.
>
> **🪤 Avoid animations!** I once encountered a portfolio where the names of the technologies were presented moving in and out of the screen so quickly. I was **unable to read them, especially on smartphones**.

🚀 New projects must be **easily or automatically added to the portfolio** as soon as the project is published. Some options could be:

1. Use a **mocked JSON** to provide the project’s data for your portfolio, updating the JSON will automatically update your projects on screen;
2. Use the **GitHub API** to fetch data from your public repositories:

   [https://api.github.com/users/dwtoledo/repos](https://api.github.com/users/dwtoledo/repos)
   Access your GitHub data replacing 'dwtoledo' with your username.

   🤯 **Be careful!**

   There is a lot of data that can be used. I used:
   - **Name**, **Description**, and **Tags**;
   - **GitHub URL** (for GitHub button);
   - **Published URL** (for live demo button);
   - **Repository id** (for sorting);
   - Development **branch name**.
   
   🤓 **Be creative!**

   What I did?
   - In my code, I created an array with all the **repository names that I want to ignore**, such as the portfolio itself.
   - I manually **upload a banner image to all my repository root folders**. To access them, I used the following URL template:

     [https://raw.githubusercontent.com/dwtoledo/challenge-01-ignite/main/social-banner.webp](https://raw.githubusercontent.com/dwtoledo/challenge-01-ignite/main/social-banner.webp)
     where "challenge-01-ignite" is the repository name and "main" is the branch that I developed the project;
     
> **Note**
> Result on Light Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/be7f2004-e4dc-45b9-92c0-6e2034d1a166)
> 
> On Dark Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/84efdee9-3150-4b5b-a2e5-b1465675daec)
> 
> On Mobile was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/14d886bb-54b9-4e17-b08a-b1bece512b5b)

## Contacts:
```html
<header> Use semantic tags! </header>
<main>
  <section> Profile Section. </section>
  <section> Projects Section. </section>
  <section> Contacts Section. </section>
</main>
```
🧊 Consider adding **an engaging ice-breaking message** to the recruiter and your main contact!

I **used ChatGPT to generate 3** phrases for recruiters:
1. "I'm open to challenging opportunities and eager to learn how I can contribute to your company's success. Let's talk!"
2. "I would be delighted to discuss how my experience and skills can be an asset to your team. Please feel free to reach out for an exploratory conversation."
3. "If you liked what you saw in my portfolio, I'm available to delve deeper into the conversation and explore how I can help meet your needs."


> **Note**
> Result* on Light Mode was:
>
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/3dc11cca-168b-401d-b1ce-d73678d945c7)
>
> On Dark Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/3f64df7f-7bd1-4353-962b-d4c14932f927)
>
> On Mobile was:
>
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/0f2cbafe-3e74-4b73-9fb1-9046823f9bb6)

*I also **created a typewriter effect** on "Let's create something amazing together?" **to get the recruiter's attention**!


## Footer:
```html
<header> Use semantic tags! </header>
<main>
  <section> Profile Section. </section>
  <section> Projects Section. </section>
  <section> Contacts Section. </section>
</main>
<footer> Do not forget me! </footer>
```

**Simple and professional** to avoid distracting the recruiter. It can have:
- **"Developed by"**;
- Currently **year**, and;
- **Technology** used.

> **Note**
> Result on Light Mode was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/e620b6b1-033c-4073-8071-8287e2d02ec0)
> 
> On Dark Mode was:
> 
>![image](https://github.com/dwtoledo/portfolio/assets/11148858/017d5397-14e9-4643-a7ef-85f7d44d92a8)
> 
> On Mobile was:
> 
> ![image](https://github.com/dwtoledo/portfolio/assets/11148858/b94b1318-a062-4bbd-ba0e-3f3a805653ae)

## Thank you!
Feel free to contact me with any questions, suggestions, or other inquiries.

**Douglas Toledo**
- Front End Developer
- E-mail: [dwtoledo@outlook.com](mailto:dwtoledo@outlook.com)
- LinkedIn: [https://www.linkedin.com/in/dwtoledo/](https://www.linkedin.com/in/dwtoledo/)
- GitHub: [https://github.com/dwtoledo](https://github.com/dwtoledo)
