import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-purple-400 mb-4 font-montserrat">
              Belle Plus
            </h4>
            <p className="text-gray-300 mb-4">
              Стильная одежда больших размеров для современных женщин. Красота
              не имеет размера.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={20}
                className="text-gray-400 hover:text-purple-400 cursor-pointer"
              />
              <Icon
                name="Facebook"
                size={20}
                className="text-gray-400 hover:text-purple-400 cursor-pointer"
              />
              <Icon
                name="Twitter"
                size={20}
                className="text-gray-400 hover:text-purple-400 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Каталог</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Платья
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Блузки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Брюки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Юбки
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Помощь</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Таблица размеров
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Контакты</h5>
            <div className="space-y-2 text-gray-300">
              <p>+7 (495) 123-45-67</p>
              <p>info@belleplus.ru</p>
              <p>
                Пн-Пт: 9:00-20:00
                <br />
                Сб-Вс: 10:00-18:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Belle Plus. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
