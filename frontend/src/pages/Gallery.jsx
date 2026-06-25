import React from 'react';
import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:8000' : '/_/backend');

const mockImages = [
    { id: 1, title: 'Extrusion Machine', image: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?w=800&q=80' },
    { id: 2, title: 'Raw Granules', image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad1?w=800&q=80' },
    { id: 3, title: 'Factory Floor', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80' },
    { id: 4, title: 'Quality Testing', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80' },
    { id: 5, title: 'Industrial Storage', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80' },
    { id: 6, title: 'Robotic Automation', image: 'https://images.unsplash.com/photo-1565439387493-27cf905cb6b0?w=800&q=80' },
];

export default function Gallery() {
    useSEO({
        title: 'Factory Gallery | Industrial Showcase',
        description: 'Take a virtual tour inside our manufacturing unit in Rajkot, Gujarat. View our state-of-the-art machines, storage, and automated production lines.'
    });

    const [images, setImages] = React.useState(mockImages);

    React.useEffect(() => {
        fetch(`${API_URL}/api/gallery/`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) setImages(data);
            })
            .catch(err => console.log('Using mock data. API not up yet.'));
    }, []);

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold mb-6">Factory Gallery</h1>
                <p className="text-steel-400 max-w-2xl mx-auto">Take a glimpse inside our state-of-the-art manufacturing facility.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, i) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative h-80 overflow-hidden rounded-2xl glass-card cursor-pointer"
                    >
                        <img
                            src={img.image.startsWith('http') ? img.image : `${API_URL}${img.image}`}
                            alt={img.title}
                            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest">{img.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
