'use client';

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Jenifer Gold, DVM",
    "image": "/images/dr-gold-caring.JPG",
    "description": "Board-certified specialist in equine internal medicine and emergency/critical care. Providing exceptional care for horses and large animals in Montana.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "MT",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.8721",
      "longitude": "-113.9940"
    },
    "url": "https://drgoldequine.com",
    "telephone": "",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "46.8721",
        "longitude": "-113.9940"
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Veterinary Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equine Internal Medicine",
            "description": "Specialized care for horses with internal medical conditions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency & Critical Care",
            "description": "Immediate intervention and ongoing monitoring for critical equine patients"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Large Animal Care",
            "description": "Veterinary care for cattle, camelids, and small ruminants"
          }
        }
      ]
    },
    "employee": {
      "@type": "Person",
      "name": "Dr. Jenifer Gold",
      "jobTitle": "Equine Internal Medicine & Emergency/Critical Care Specialist",
      "description": "Board-certified specialist with extensive experience in equine internal medicine and critical care",
      "image": "/images/dr-gold-caring.JPG",
      "knowsAbout": [
        "Equine Internal Medicine",
        "Emergency & Critical Care",
        "Neonatology & Sepsis",
        "Respiratory Physiology",
        "Exercise Induced Pulmonary Hemorrhage",
        "Equine Pain Management",
        "Endocrine & Metabolic Disease"
      ],
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Washington State University/Oregon State University",
          "description": "Doctorate of Veterinary Medicine, Magna Cum Laude (2002)"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Mid-Atlantic Equine Medical Center",
          "description": "Rotating Internship in Equine Medicine and Surgery (2003)"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Cornell University",
          "description": "Residency, Large Animal Internal Medicine (2004-2007)"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Texas A&M University",
          "description": "Fellowship, Emergency Medicine & Critical Care (2008-2010)"
        }
      ],
      "award": [
        {
          "@type": "Award",
          "name": "Diplomate, American College of Veterinary Internal Medicine",
          "description": "Board certification in Large Animal Internal Medicine (2007)"
        },
        {
          "@type": "Award",
          "name": "Diplomate, American College of Veterinary Emergency and Critical Care",
          "description": "Board certification in Large Animal Emergency and Critical Care (2010)"
        }
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "Havemeyer Septic Foal Project",
          "description": "Active research member"
        }
      ],
      "hasCredential": [
        {
          "@type": "Credential",
          "credentialCategory": "Professional Certification",
          "name": "Diplomate ACVIM (Large Animal)",
          "description": "American College of Veterinary Internal Medicine"
        },
        {
          "@type": "Credential",
          "credentialCategory": "Professional Certification",
          "name": "Diplomate ACVECC (Large Animal)",
          "description": "American College of Veterinary Emergency and Critical Care"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 