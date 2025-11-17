"use client";

import { useEffect, useState } from 'react';

const Schema = () => {
    const [origin, setOrigin] = useState('');

    useEffect(() => {
        setOrigin(location.origin);
    }, []);

    return (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["Church", "LocalBusiness"],
                "name": "RCCG The Praise House Baltimore",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "806 Reisterstown Rd",
                    "addressLocality": "Pikesville",
                    "addressRegion": "MD",
                    "postalCode": "21208",
                    "addressCountry": "USA"
                },
                "description": "A vibrant Christian community dedicated to worship, fellowship, and spiritual growth in Baltimore.",
                "openingHours": [
                    "Su 09:00-11:00",
                    "We 09:00-10:00",
                    "Th 09:00-10:00"
                ],
                "url": origin
            })}
        </script>
    );
};

export default Schema;
