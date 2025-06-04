import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductFilters = () => {
  const sizes = ["XL", "2XL", "3XL", "4XL", "5XL", "6XL"];
  const categories = [
    "Все товары",
    "Платья",
    "Блузки",
    "Брюки",
    "Юбки",
    "Кардиганы",
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Размеры</h4>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <Badge
                key={size}
                variant="outline"
                className="cursor-pointer hover:bg-purple-100 hover:border-purple-300"
              >
                {size}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Категории</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0 ? "bg-purple-600 hover:bg-purple-700" : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
