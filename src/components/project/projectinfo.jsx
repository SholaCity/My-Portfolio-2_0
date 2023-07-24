import ChatApp from '../../assets/chat-App.png';
import Sbc from '../../assets/sbc.png'
import Space from '../../assets/space.png'
import Tipcalc from '../../assets/tipCalc.png'
import Shortly from '../../assets/short.png'
import EaziBank from '../../assets/eazibank.png'
import Gpt3 from '../../assets/gpt3.png'
import Hoobank from '../../assets/hoobank.png'
import {TbBrandNextjs} from 'react-icons/tb';
import {RiReactjsLine, RiHtml5Line} from 'react-icons/ri';
import {IoLogoJavascript, IoLogoCss3} from 'react-icons/io'
import { TbBrandTailwind } from 'react-icons/tb';

const html=  <RiHtml5Line className='tech-icon html' /> 
const css=  <IoLogoCss3 className='tech-icon css' /> 
const js=  <IoLogoJavascript className='tech-icon js' /> 
const tailwind=  <TbBrandTailwind className='tech-icon tw' /> 
const react=  <RiReactjsLine className='tech-icon react' /> 
const next=  <TbBrandNextjs className='tech-icon next' /> 



const data = [
    {
        id:1,
        name:'Shortly',
        image: Shortly,
        desc:` 
        This app allows you to shorten long valid links. it keeps track of your last shortened link.  `,
        site: "https://shortlyshola.netlify.app",
        techuse: [html, css,js, react]
    }
    ,{
        id:2,
        name:'SBC ',
        image:Sbc,
        desc:` 
        A minimal e-commerce app which perform fundamental e-commerce functionality , it also keeps  the items 
        your cart into storage . The design of this app is greatly inspired by ossai precious, a design friend of mine.`,
        site: "https://sbcolls.netlify.app",
        techuse: [html, css,js, react]

    },{
        id:3,

        name:'Space Web',
        image:Space,
        desc:` 
        A Multi-page website which gives you the feel of a space explorationist in seconds.
        Design was by frontend mentor as i picked up the challenge to flex my skills on vanilla code`,
        site: "https://space-sh.netlify.app",
        techuse: [html, css,js]

   },{
        id:4,
        name:'HooBank',
        image:Hoobank,
        desc:` 
        A Modern Web3-like landing page with gradient backgrounds. 
        I built this stunning layout with React-JS utilizing tailwind css`,
        site: "https://hoobank.netlify.app",
        techuse: [html, css,js,tailwind, react]
    },{
        id:5,
        name:'GPT-3',
        image: Gpt3,
        desc:` 
        A landing page with a futuristi look, i built this with React-JS.`,
        site: "https://gpt3-sh.netlify.app",
        techuse: [html, css,js, react]
    }
    ,{
        id:6,
        name:'Phone mockup',
        image:ChatApp,
        desc:` 
        Building a phone mockup with CSS? yeah! that was how i felt after i stumbled on this 
        challenge from Frontendmentor.io on the lookout for projects i can practice with to help improve on my new acquired css layout skill.
        The design was achievable thanks to my undestanding of flex, position property and the box model.
         I also added some js, to see that in play, continue the chat`,
        site: "https://chat-sh.netlify.app",

        techuse: [html, css,js]

    },{
        id:7,
        name:'Tip calculator',
        image:Tipcalc,
        desc:` 
         `,
        site: "https://tipcalc-sh.netlify.app",
        techuse: [html, css,js]

    },{
        id:8,
        name:'EasyBank',
        image:EaziBank,
        desc:` 
        A simple landing page which is a junior level coding challenge by frontend mentor. 
        I built this with react regardless of  
        its simple layout as it helped me understand how to render data by mapping through each individual data `,
        site: "https://eazibank-sh.netlify.app",
        techuse: [html, css,js, react]

    }
]

export default data
