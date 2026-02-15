import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { slideUp, staggerContainer } from "@/lib/animations";
import { fetchLandingProducts, type CategoryWithProducts, BASE_URL } from "@/lib/api";

interface ProductListProps {
    searchQuery: string;
}

const ProductList = ({ searchQuery }: ProductListProps) => {
    const [categories, setCategories] = useState<CategoryWithProducts[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchLandingProducts();
            setCategories(data);
            setLoading(false);
        };
        getProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
        );
    }

    // Filter products based on search query
    const filteredCategories = categories.map(cat => ({
        ...cat,
        Products: cat.Products.filter(p =>
            p.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cat.Category.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.Products.length > 0);

    return (
        <div className="mt-16 space-y-16 px-4 md:px-0">
            {filteredCategories.map((category) => (
                <motion.div
                    key={category.CategoryId}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white font-['Impact'] uppercase tracking-wider">
                            {category.Category}
                        </h2>
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {category.Products.map((product) => {
                            const imageUrl = product.CoverPhoto?.startsWith("/")
                                ? `${BASE_URL}${product.CoverPhoto}`
                                : product.CoverPhoto || "";

                            return (
                                <motion.div
                                    key={product.ProductId}
                                    variants={slideUp}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-800 p-5 flex flex-col h-full group transition-all duration-300 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]"
                                >
                                    {/* Product Image */}
                                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-800/50">
                                        <img
                                            src={imageUrl}
                                            alt={product.Name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {product.IsOutOfStock && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                                <span className="text-white font-bold px-3 py-1 bg-red-600 rounded-full text-xs">OUT OF STOCK</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex flex-col flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 leading-snug group-hover:text-yellow-400 transition-colors">
                                            {product.Name}
                                        </h3>

                                        <div className="mt-auto space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-2xl font-bold text_gold_gradient">
                                                    ${product.Price.toFixed(2)}
                                                </span>
                                                {product.MedicineType && (
                                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 bg-gray-800 px-2 py-1 rounded">
                                                        {product.MedicineType}
                                                    </span>
                                                )}
                                            </div>

                                            {product.HealthBenefits && (
                                                <div className="flex flex-wrap gap-1">
                                                    {product.HealthBenefits.split(",").slice(0, 2).map((benefit, i) => (
                                                        <span key={i} className="text-[10px] text-yellow-500/70 border border-yellow-500/20 px-2 py-0.5 rounded-full">
                                                            {benefit.trim()}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <button
                                                disabled={product.IsOutOfStock}
                                                className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${product.IsOutOfStock
                                                    ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                                                    : "bg-gradient-to-r from-yellow-600 to-yellow-400 text-gray-900 hover:from-yellow-500 hover:to-yellow-300 shadow-lg shadow-yellow-500/20"
                                                    }`}
                                            >
                                                VIEW TREATMENT
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            ))}

            {filteredCategories.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <p className="text-gray-400 text-lg">No products found matching your search.</p>
                </motion.div>
            )}
        </div>
    );
};

export default ProductList;
