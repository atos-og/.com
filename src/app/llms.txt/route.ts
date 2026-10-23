import {about,projects} from '../../data/profile';
export const dynamic = 'force-static';
export function GET(){return new Response('# Atos Barros Almeida\n\n'+about.join('\n\n')+'\n\n## Projects\n'+projects.map(p=>'- ['+p.name+']('+p.url+'): '+p.description).join('\n')+'\n\nGitHub: https://github.com/atos-og\nLinkedIn: https://www.linkedin.com/in/atos-barros/\nX: https://x.com/atosbarros_s\nEmail: atosbarros23@icloud.com\n',{headers:{'content-type':'text/plain; charset=utf-8'}});}
