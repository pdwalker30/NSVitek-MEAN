## Welcome to the MEAN stack version of Dr. Natasha Vitek's website
This is the MEAN (Mongo, Express, Angular, NodeJS) stack version using all open source code.  The website actually has no database implementation, that has been offloaded to Orcid, which is a 3rd party tool used by academics to track all their publications from all kinds of different sources.  Since Dr. Vitek wished to keep that up to date, we simply used it as the access point for all publications.  

She keeps the research and outreach sections updated manually, and as such I've condensed them into a single location where she can add more entries quickly and easily.  It is also expandable in that more methods to help visibly differentiate between sections can be added, and using the same pattern and existing CSS, they can seemlessly become new sections in the website.

### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .    

### Installation 
``` 
git clone https://github.com/pdwalker30/NSVitek-MEAN
cd NSVitek-MEAN
cp .env.example .env
npm install
npm start (for development)


```
To view the website, visit https://www.nsvitek.com.

```
This project uses the boilerplate found at https://github.com/linnovate/mean.