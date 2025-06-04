import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  sizes: string[];
  isNew: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-purple-600 hover:bg-purple-700">Новинка</Badge>
          )}
          {discount > 0 && <Badge variant="destructive">-{discount}%</Badge>}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white"
        >
          <Icon name="Heart" size={18} />
        </Button>
      </div>

      <CardContent className="p-6">
        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h4>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="px-2 py-1 bg-gray-100 text-xs rounded-md text-gray-700"
            >
              {size}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-purple-600">
              {product.price.toLocaleString()} ₽
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
