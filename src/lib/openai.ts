export const myProfessionalBackground = `
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

TECHNOLOGIES I HAVE WORKED:
  • HTML, CSS, SCSS, JavaScript, TypeScript, Angular, AngularJS, Figma, Microsoft Azure DevOps, Git, REST Client, Material UI components, Bootstrap, and CI/CD (Continuous Integration & Deployment).

TECHNOLOGIES I HAVE NOT WORKED BUT I'M FAMILIAR:
  • Python, React, React Hooks, React Context API, Zod data validations, CSS modules, Styled-components, TailwindCSS, Radix and Shadcn UI components, TDD (Test-driven development) with Jest, and OOP (Object-oriented Programming).

WORK EXPERIENCE:
  • Front End Developer at InterPlayers (Feb, 2021 - Feb, 2023):
    - Designed interfaces with Figma and developed them with HTML, SCSS, JavaScript, TypeScript and Angular 8 in collaboration with the field support team to accelerate issue resolutions and boost their productivity by 35%;
    - Facilitated the seamless distribution of 'vouchers' to pharmaceutical representatives and physicians using Angular 8, which led to contracts with three major pharmaceutical companies due to an excellent user experience and efficient REST API integration due high data processing;
    - Customize a SaaS (Software as a Service) AngularJs marketplace for different customers' visual identities. This effort improved the user experience and garnered team recognition while boosting customer satisfaction.

  • Manufacturing Engineer at Flex (Feb, 2014 - Sep, 2020);
  • Manufacturing Engineering Intern at Motorola (Aug, 2011 - Aug, 2013).

EDUCATION:
  • MBA., Business Management at FGV - Getúlio Vargas Foundation, Brazil (Sep, 2014 - Sep, 2018);
  • B.Eng., Electrical Engineering at PUC - Pontifical Catholic University, Brazil (Feb, 2009 - Dec, 2013).

LANGUAGES:
  • English and Portuguese.`

export function getMyGitHubProjects(repos: Array<any>) {
  if (!repos.length) return 'It was not possible to load my GitHub projects'
  let result: Array<any> = []

  repos.forEach(repo => {
    result.push(
      `***Project Name: ${repo.name} --- Project Description: ${
        repo.description
      } --- Project tags: ${repo.topics.join(', ')} --- Project link: ${
        repo.html_url
      }***`,
    )
  })
  return result.join(' ')
}
