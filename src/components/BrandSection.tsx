import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Truck",
    title: "Бесплатная доставка",
    description: "При заказе от 3000 рублей",
  },
  {
    icon: "RotateCcw",
    title: "Легкий возврат",
    description: "30 дней на возврат товара",
  },
  {
    icon: "Shield",
    title: "Гарантия качества",
    description: "Проверенные производители",
  },
  {
    icon: "Heart",
    title: "Персональный подход",
    description: "Консультация по размерам",
  },
];

const BrandSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Почему выбирают Belle Plus
          </h3>
          <p className="text-lg text-gray-600">
            Мы создаем красивую одежду для женщин всех размеров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-md bg-white/80"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
