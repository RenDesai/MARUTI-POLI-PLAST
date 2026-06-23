import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Mock data to start with before hooking to API
const mockProducts = [
    { id: 1, title: 'Premium Plastic Granules', category: 'GRANULES', description: 'High-grade uniformity for injection molding.', image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad1?w=800&q=80' },
    { id: 2, title: 'HDPE Lumps', category: 'LUMPS', description: 'Durable, high-density polymer lumps.', image: 'https://images.unsplash.com/photo-1629853920786-9ac64b732dfa?w=800&q=80' },
    { id: 3, title: 'Color Masterbatch', category: 'GRANULES', description: 'Superior color dispersion granules.', image: 'https://images.unsplash.com/photo-1582735689369-acf80d85a114?w=800&q=80' },
];

export default function Products() {
    const [products, setProducts] = React.useState(mockProducts);

    React.useEffect(() => {
        // We will fetch from backend later using axios
        fetch('http://localhost:8000/api/products/')
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) setProducts(data);
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
                <h1 className="text-5xl font-bold mb-6">Our Products</h1>
                <p className="text-steel-400 max-w-2xl mx-auto">Explore our range of premium plastic lumps and granules designed for advanced manufacturing.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {products.map((product, i) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="group glass-card overflow-hidden hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={product.image.startsWith('http') ? product.image : `http://localhost:8000${product.image}`}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 z-20 bg-navy-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest text-gold-500">
                                {product.category}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                            <p className="text-steel-400 text-sm">{product.description}</p>
                            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-gold-500 transition-colors uppercase tracking-widest border-b border-white/20 group-hover:border-gold-500 pb-1 w-fit">
                                Request Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
