const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hey Ruud",
  "description":
    "Personal website of Ruud van Engelenhoven - Engineering leadership and technology insights",
  "url": "https://heyruud.com",
  "publisher": {
    "@type": "Person",
    "name": "Ruud van Engelenhoven",
    "url": "https://heyruud.com",
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://heyruud.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default websiteSchema;
