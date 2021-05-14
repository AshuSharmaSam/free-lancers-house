import React from 'react';
const Address = ( props) =>{
  const data = 
  {
    "@context": "https://schema.org",
      "@type": "Address",
      "addressRegion": "Ramnagar",
      "postalCode": "244715",
      "streetAddress":props.streetAddress
   
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

  export default Address;