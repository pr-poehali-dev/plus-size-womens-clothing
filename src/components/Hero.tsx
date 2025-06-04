import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
              Красивая одежда <br />
              <span className="text-purple-600">для каждой женщины</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Стильная и качественная одежда больших размеров от XL до 6XL.
              Подчеркните свою красоту с нашей эксклюзивной коллекцией.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg">
                Таблица размеров
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/files/819482e4-b661-44ef-b9a7-a393b4eadd04.jpg"
              alt="Туника больших размеров 56-78"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
              <p className="text-sm font-semibold text-purple-600">Размеры</p>
              <p className="text-2xl font-bold text-gray-900">XL - 6XL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
