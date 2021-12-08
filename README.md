# [My_Portfolio](https://whoamishubham.github.io/#/)

![](https://img.shields.io/badge/work%20-in%20progress%20-brightgreen) <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />

Generic Portfolio website built in React, hosted on github pages. where we can update the contents by updating json data.


## Fetched Data Format
I am fetching this JSON data from github and render it on my portfolio website. images url is also a raw github image.

```JSON
{
   "data":{
      "bio":"Web & Mobile App Developer",
      "exp":[
         {
            "title":"SDE",
            "org":"Rupeek",
            "duration":"Aug 2021 - present",
            "imgUrl":"<url>",
            "location":"Bangalore",
            "description":[
               "Working mostly on NextJs and SailsJs."
            ],
            "urls":[
               {
                  "label":"company website",
                  "src":"https://rupeek.com"
               }
            ],
            "type":"Work Experience"
         },
         {
            "title":"Fullstack Developer",
            "org":"Juakali.io",
            "duration":"Jun 2020 - July 2021",
            "imgUrl":"<url>",
            "location":"Remote",
            "description":[
               "Worked mostly on React web app and React Native mobile app and some other stuff.",
               "Worked on Juakali Mobile app for offline use from scratch to provide similar features as web app used and integrated realm, firebase, Sentry, internationalization using I18n.js etc in Mobile app"
            ],
            "urls":[
               {
                  "label":"company website",
                  "src":"https://www.juakali.io"
               }
            ],
            "type":"Work Experience"
         },
         {
            "title":"Software Engineering Intern",
            "org":"Hashedin Technologies",
            "duration":"Feb 2020-Apr 2020",
            "imgUrl":"<url>",
            "location":"Bengaluru",
            "description":[
               "Worked mostly on React, Python, golang, and React native",
               "Went through 1-month intensive Training Bootcamp hashedin University"
            ],
            "urls":[
               {
                  "label":"company website",
                  "src":"https://hashedin.com"
               }
            ],
            "type":"Work Experience"
         },
         {
            "title":"Product Engineering Intern",
            "org":"Appointy",
            "duration":"Sep 2019-Oct 2019",
            "imgUrl":"<url>",
            "location":"Bhopal",
            "description":[
               "Wrote and reviewed code for golang , dart using flutter,apused GRPC (proto 3)."
            ],
            "urls":[
               {
                  "label":"company website",
                  "src":"https://www.appointy.com/"
               }
            ],
            "type":"Work Experience"
         }
      ],
      "educations":[
         {
            "id":1,
            "img_url":"<url>",
            "content":"<li>&#9679;&nbsp; Graduated from <a href='http://www.uitrgpv.ac.in' target='_blank'>University Institute of Technology </a></li><li>&#9679;&nbsp; Information Technology Major</li>" // I am using dangerouslySetInnerHTML here, we can use html
         }
      ],
      "projects":[
         {
            "id":11,
            "name":"obfuscator-io-metro-plugin",
            "url":"https://github.com/whoami-shubham/obfuscator-io-metro-plugin",
            "demo":"https://www.npmjs.com/package/obfuscator-io-metro-plugin",
            "isdemo":true,
            "lib":true,
            "img_url":"<url>",
            "content":"Open-source Library to obfuscate React-Native bundle in APK to prevent code theft. it has 48k+ downloads, and 1k+ weekly downloads."
         },
         {
            "id":10,
            "name":"Vyomology",
            "url":"https://github.com/whoami-shubham/404",
            "demo":"https://vyomology.com",
            "isdemo":true,
            "react":true,
            "img_url":"<url>",
            "content":"Astrology site freelance work, created entire frontend from scratch using react they have modified some styles and text content now."
         },
         {
            "id":9,
            "name":"Web Terminal",
            "url":"https://github.com/whoami-shubham/web_terminal",
            "demo":"https://whoami-shubham.github.io/web_terminal",
            "isdemo":true,
            "img_url":"<url>",
            "content":"Unix like terminal"
         },
         {
            "id":0,
            "name":"Organization registration site",
            "url":"https://github.com/whoami-shubham/Vendor-Form",
            "demo":"https://whoami-shubham.github.io/Vendor-Form/",
            "isdemo":true,
            "img_url":"<url>",
            "content":"frontend task"
         },
         {
            "id":1,
            "name":"Find Falcone",
            "url":"https://github.com/whoami-shubham/find-falcone",
            "demo":"https://whoami-shubham.github.io/find-falcone/",
            "isdemo":true,
            "img_url":"<url>",
            "content":"frontend task"
         },
         {
            "id":2,
            "name":"BookRepo",
            "url":"https://github.com/whoami-shubham/BookRepo",
            "demo":"https://whoami-shubham.github.io/BookRepo/",
            "isdemo":true,
            "img_url":"<url>",
            "content":"frontend task"
         },
         {
            "id":3,
            "name":" Summer of Code",
            "url":"https://github.com/whoami-shubham/Summer_of_Code",
            "isdemo":true,
            "demo":"https://summerofcodeatuit.github.io/2019/",
            "img_url":"<url>",
            "content":"website for Open Source software development"
         },
         {
            "id":7,
            "name":" Web IDE ",
            "url":"https://github.com/whoami-shubham/codeadept_2.0_IDE",
            "isdemo":null,
            "demo":"https://github.com/whoami-shubham/codeadept_2.0_IDE",
            "img_url":"<url>",
            "content":"IDE for run programs in c,c++,java,python"
         },
         {
            "id":8,
            "name":"Real time chat app using flutter and go",
            "url":"https://github.com/whoami-shubham/chatapp",
            "demo":"<url>",
            "isdemo":true,
            "img_url":"<url>",
            "content":"Mobile App"
         }
      ],
      "articles":[
         {
            "id":1,
            "title":"How to Compare Two Algorithms",
            "url":"https://whoami-shubham.github.io/posts/how-to-compair-two-algorithms/",
            "img_url":"<url>",
            "content":""
         },
         {
            "id":2,
            "title":"how to preprocess data for regression model",
            "url":"https://whoami-shubham.github.io/posts/how-to-preprocess-data-for-regression-model/",
            "img_url":"<url>",
            "content":""
         }
      ]
   }
}

```
