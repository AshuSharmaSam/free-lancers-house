import React from 'react';
const Images = ( props) =>{
  const data = 
  {
     "@context": "https://schema.org/",
      "@type": "ImageObject",
      "image": props.image,
      "url":props.url
 
   
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

  export default Images;