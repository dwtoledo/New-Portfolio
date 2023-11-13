import { OpenAI } from 'openai'

const myProfessionalBackground = `
Douglas Toledo
Address: Toronto, Ontario - Canada
Phone: +1(437)299-1471
E-mail: dwtoledo@outlook.com
Portfolio: https://dwtoledo.github.io/portfolio
GitHub: https://github.com/dwtoledo
LinkedIn: https://www.linkedin.com/in/dwtoledo

SUMMARY:
  • Experienced in developing accessible and user-friendly interfaces for responsive web applications;
  • Skilled in Agile/Scrum methodologies, collaborating with cross-functional teams, and efficiently managing the development life cycle.
  • Enhanced adaptability, communication, resilience, and teamwork through seven years as a Manufacturing Engineer and four as an Entrepreneur, resulting in high-quality work and analytical process-driven thinking.

TECHNOLOGIES I WORKED:
  • HTML, CSS, SCSS, JavaScript, TypeScript, Angular, AngularJS, Figma, Microsoft Azure DevOps, Git, REST Client, Material UI components, Bootstrap, and CI/CD (Continuous Integration & Deployment).

TECHNOLOGIES I DIDN'T WORK BUT I'M FAMILIAR:
  • Python, React, React Hooks, React Context API, Zod data validations, CSS modules, Styled-components, TailwindCSS, Radix and Shadcn UI components, TDD (Test-driven development) with Jest, and OOP (Object-oriented Programming).

WORK EXPERIENCE:
  • Front End Developer at InterPlayers (Feb, 2021 - Feb, 2023):
    - Designed interfaces with Figma and developed them with HTML, SCSS, JavaScript, TypeScript and Angular 8 in collaboration with the field support team to accelerate issue resolutions and boost their productivity by 35%;
    - Facilitated the seamless distribution of 'vouchers' to pharmaceutical representatives and physicians using Angular 8, which led to contracts with three major pharmaceutical companies due to an excellent user experience and efficient REST API integration due high data processing;
    - Customize a SaaS (Software as a Service) AngularJs marketplace for different customers' visual identities. This effort improved the user experience and garnered team recognition while boosting customer satisfaction.

  • Manufacturing Engineer at Flex (2014 - 2020);
  • Manufacturing Engineering Intern at Motorola (2011 - 2013).

EDUCATION:
  • MBA., Business Management at FGV - Getúlio Vargas Foundation, Brazil (2014 - 2018);
  • B.Eng., Electrical Engineering at PUC - Pontifical Catholic University, Brazil (2009 - 2013).

LANGUAGES:
  • English and Portuguese.`

let myGitHubProjects = ''

function createMyGitHubProjects(repos: Array<any>) {
  if (!repos.length) return 'It was not possible to load my GitHub projects'
  let result: Array<any> = []

  repos.forEach(repo => {
    result.push(
      `***Project Name: ${repo.name} --- Project Description: ${
        repo.description
      } --- Technologies used: ${repo.topics.join()} --- Project link: ${
        repo.html_url
      }***`,
    )
  })
  myGitHubProjects = result.join()
}

async function generateOpenAiResult(
  temperature: number = 0.5,
  promptUserMessage: string = `What are Douglas's strengths?`,
) {
  const openAI = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  })

  return await openAI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    temperature,
    messages: [
      {
        role: 'user',
        content: `With my resume here '''${myProfessionalBackground}''' and my GitHub projects here '''${myGitHubProjects}''', using first-person answer the following recruiter's question here '''${promptUserMessage}''' providing a concise, professional, short, without generic placeholders, and English answer. If the question is not related to a recruiter process, or to my professional background or to my projects, reply inform that you do not have the necessary information to answer the question. If the recruiter asks if I have ever professional worked with a specific technology, and I haven't worked with it but have completed some projects on GitHub using it,  respond by saying that I haven't professional worked with it but have knowledge, citing examples of the GitHub projects I have worked on and their links.`,
      },
    ],
  })
}

export async function getOpenAiData(repos: Array<any>) {
  createMyGitHubProjects(repos)
  await generateOpenAiResult()
    .then(response => {
      console.log(response.choices[0].message.content)
    })
    .catch(error => {
      console.error(error)
    })
}
