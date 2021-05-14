import React from 'react';
const Service = ( props) =>{
  const data = 
  {
    "@context": "https://schema.org",
      "@type": "Service",
      "name":props.name,
      "description":props.description,
      
   
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

  export default Service;