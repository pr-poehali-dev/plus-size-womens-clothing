import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Элегантное платье с цветочным принтом",
    price: 4990,
    originalPrice: 6990,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    isNew: true,
  },
  {
    id: 2,
    name: "Классическая блузка из шелка",
    price: 3490,
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    sizes: ["XL", "2XL", "3XL", "4XL", "5XL"],
    isNew: false,
  },
  {
    id: 3,
    name: "Удобные брюки палаццо",
    price: 2990,
    originalPrice: 3990,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    sizes: ["XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    isNew: false,
  },
  {
    id: 4,
    name: "Нарядная юбка макси",
    price: 3890,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    isNew: true,
  },
  {
    id: 5,
    name: "Кардиган из мягкого трикотажа",
    price: 2490,
    image:
      "https://images.unsplash.com/photo-1571513722275-4b3b4d96b3c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    sizes: ["XL", "2XL", "3XL", "4XL", "5XL"],
    isNew: false,
  },
  {
    id: 6,
    name: "Праздничное платье с пайетками",
    price: 7990,
    originalPrice: 9990,
    image:
      "https://images.unsplash.com/photo-1566479179817-c0ae6f79b85c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    sizes: ["XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    isNew: true,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Наша коллекция
          </h3>
          <p className="text-lg text-gray-600">
            Стильная одежда больших размеров для любого случая
          </p>
        </div>

        <ProductFilters />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Показать еще товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
