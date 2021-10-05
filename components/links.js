import React, { Fragment } from 'react'

const links = [
    { 
         id: 1,
  	     icon: <i className="fi-xwsuxl-envelope-solid"></i>, 
  	     url: 'https://jumarjuaton.typeform.com/to/Su4GfO', 
  	     info: 'Let us collaborate!' 
    },
    { 
         id: 2,
  	     icon: <i className="fi-swluxl-linkedin"></i>,
  	     url: 'https://ph.linkedin.com/in/jumarjuaton', 
  	     info: 'Check out my Linkedin!' 
    },
    { 
         id: 3,
  	     icon: <i className="fi-snsuxl-github"></i>,
  	     url: 'https://github.com/jumarjuaton', 
  	     info: 'Check out my GitHub!' 
    },
    { 
         id: 4,
         icon: <i className="fi-xtluxl-file-pdf"></i>,
         url: '/files/pdf/Resume-Jumar-James-Juaton.pdf', 
         info: 'View my CV!' 
    },
]

const Links = () => (
	<Fragment>
   		<ul className="links-wrap flex p-1">
	       {links.map(({ id, url, info, icon }) => (
	       <li key={id} className="p-2">
	           <a href={url} title={info} className="link" target="_blank">{icon}</a>
	       </li>
	      ))}
	   	</ul>
	</Fragment>
)

export default Links
