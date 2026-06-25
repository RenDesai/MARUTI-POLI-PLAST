import { useEffect } from 'react';

export default function useSEO({ title, description }) {
    useEffect(() => {
        document.title = `${title} | Maruti Poliplast`;
        
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description;
    }, [title, description]);
}
