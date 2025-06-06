//kronverksky_chaikovskogo
const arr0 = [
  { start: "Кронверский пр. 49", end: "ул. Чайковского, 11/2" },
  {
    name: "2-й Дом городских учреждений (главный корпус ИТМО)",
    address: "Санкт-Петербург, Кронверкский проспект, 49",
    image: "0.jpg",
    info: "Здание начала XX века в стиле неоклассицизма, ныне главный корпус Университета ИТМО.",
  },
  {
    name: "Санкт-Петербургская соборная мечеть",
    address: "Санкт-Петербург, Кронверкский проспект, 7",
    image: "1.jpg",
    info: "Одна из крупнейших мечетей Европы с голубым куполом и высокими минаретами.",
  },
  {
    name: "Литейный мост",
    address: "Санкт-Петербургская соборная мечеть",
    image: "2.jpg",
    info: "Разводной мост 1879 года постройки. Соединяет Петроградскую сторону с центром города.",
  },
  {
    name: "Особняк В.П. Кельха",
    address: "Санкт-Петербург, улица Чайковского, 28",
    image: "3.jpg",
    info: "Роскошный особняк конца XIX века с готическим павильоном во дворе.",
  },
  {
    name: "Особняк князя П.Н. Трубецкого",
    address: "Санкт-Петербург, улица Чайковского, 29",
    image: "4.jpg",
    info: "Архитектурный памятник XIX века с богатым убранством и выставочными залами.",
  },
  {
    name: "Галерея Владимира Лубенко",
    address: "Санкт-Петербург, улица Чайковского, 2/7 лит В",
    image: "5.jpg",
    info: "Современная галерея с нестандартными выставками и арт-проектами.",
  },
  {
    name: "Театр-студия 'Курт'",
    address: "Санкт-Петербург, улица Чайковского, 16",
    image: "6.jpg",
    info: "Экспериментальный театр с интерактивными постановками и атмосферой полного погружения.",
  },
]

//chaikovskogo_lomonosova
const arr1 = [
  { start: "ул. Чайковского, 11/2", end: "ул. Ломоносова д.9" },
  {
    name: "Учебный корпус ИТМО (Чайковского)",
    address: "Санкт-Петербург, улица Чайковского, 11/2",
    image: "7.jpg",
    info: "Один из старейших учебных корпусов Университета ИТМО. Историческое здание в самом центре Петербурга, где сейчас располагаются кафедры и аудитории вуза.",
  },
  {
    name: "Сад Дружбы",
    address: "Санкт-Петербург, Литейный проспект, 15–17",
    image: "8.jpg",
    info: "Китайский сад с элементами традиционной архитектуры. Подарок Петербургу от Шанхая.",
  },
  {
    name: "Анненкирхе (лютеранская церковь Святой Анны)",
    address: "Санкт-Петербург, Кирочная улица, 8В",
    image: "9.jpg",
    info: "Неоготическая церковь XVIII века, ныне культурная площадка для концертов и выставок.",
  },
  {
    name: "Дом Бака",
    address: "Санкт-Петербург, Кирочная улица, 24",
    image: "10.jpg",
    info: "Доходный дом начала XX века в стиле модерн с двориком и воздушными галереями.",
  },
  {
    name: "Новая Голландия",
    address: "Санкт-Петербург, набережная Адмиралтейского канала, 2",
    image: "11.jpg",
    info: "Исторический остров, превращённый в современное арт-пространство и парк отдыха.",
  },
  {
    name: "Гранд Макет Россия",
    address: "Санкт-Петербург, Цветочная улица, 16",
    image: "12.jpg",
    info: "Огромная движущаяся модель России в миниатюре с поездами и сценами повседневной жизни.",
  },
  {
    name: "Музей железных дорог России",
    address: "Санкт-Петербург, Библиотечный переулок, 4, лит. А",
    image: "13.jpg",
    info: "Современный музей с коллекцией уникальных локомотивов и интерактивными экспозициями.",
  },
]

//lomonosova_grivtsova
const arr2 = [
  { start: "ул. Ломоносова д.9", end: "пер. Гривцова, 14-16" },
  {
    name: "Памятник А.С. Грибоедову",
    address: "Санкт-Петербург, улица Ломоносова, возле дома 5",
    image: "14.jpg",
    info: "Памятник русскому писателю и дипломату А.С. Грибоедову, расположенный недалеко от канала Грибоедова.",
  },
  {
    name: "Музей истории религии",
    address: "Санкт-Петербург, улица Почтамтская, 14/5",
    image: "15.jpg",
    info: "Один из крупнейших музеев мира, посвященных истории религий. Представлены различные конфессии и культы.",
  },
  {
    name: "Новая Голландия",
    address: "Санкт-Петербург, набережная Адмиралтейского канала, 2",
    image: "16.jpg",
    info: "Культурное пространство и парк на искусственном острове в центре Санкт-Петербурга. Историческое место с современной инфраструктурой.",
  },

  {
    name: "Дом культуры моряков",
    address: "Санкт-Петербург, улица Большая Морская, 41",
    image: "17.jpg",
    info: "Здание, построенное в стиле сталинского неоклассицизма, с элементами морской тематики.",
  },
  {
    name: "Памятник Н.А. Римскому-Корсакову",
    address: "Санкт-Петербург, Театральная площадь",
    image: "18.jpg",
    info: "Памятник выдающемуся русскому композитору Н.А. Римскому-Корсакову.",
  },
  {
    name: "Консерватория им. Н.А. Римского-Корсакова",
    address: "Санкт-Петербург, Театральная площадь, 3",
    image: "19.jpg",
    info: "Одна из старейших и престижных консерваторий России. Архитектурный памятник.",
  },
  {
    name: "Мариинский театр",
    address: "Санкт-Петербург, Театральная площадь, 1",
    image: "20.jpg",
    info: "Один из ведущих оперных и балетных театров мира. Историческое здание с богатой историей.",
  },
  {
    name: "Никольский морской собор",
    address: "Санкт-Петербург, Никольская площадь, 1/3",
    image: "21.jpg",
    info: "Величественный православный храм, посвященный памяти моряков. Один из символов Санкт-Петербурга.",
  },
  {
    name: "Памятник М.И. Глинке",
    address: "Санкт-Петербург, Театральная площадь, 2",
    image: "22.jpg",
    info: "Памятник русскому композитору, основоположнику русской классической музыки, Михаилу Ивановичу Глинке.",
  },
]

//grivtsova_birga
const arr3 = [
  { start: "пер. Гривцова, 14-16", end: "Кронверский пр. 49" },
  {
    name: "Дом с башней на пересечении канала Грибоедова и пер. Гривцова",
    address: "СПб, переулок Гривцова, 14–16",
    image: "23.jpg",
    info: "Необычное здание с историей и интересной архитектурой на пересечении канала Грибоедова и пер. Гривцова.",
  },
  {
    name: "Дом Заемного банка",
    address: "СПб, переулок Гривцова, 14–16",
    image: "24.jpg",
    info: "Построен в 1790-х годах. Историческое здание с мемориальной табличкой уровня воды во время наводнения 1824 года. Сейчас часть Университета ИТМО.",
  },
  {
    name: "Демидов мост",
    address: "СПб, через канал Грибоедова у пер. Гривцова",
    image: "25.jpg",
    info: "Мост через канал Грибоедова, построенный в 1835 году. Украшен чугунными решетками с трезубцами Нептуна.",
  },
  {
    name: "Музей оптики ИТМО",
    address: "СПб, Биржевая линия, 14–16",
    image: "26.jpg",
    info: "Интерактивный музей с экспонатами по оптике, оптическим иллюзиям и технологиям.",
  },
  {
    name: "Биржевой мост",
    address: "СПб, через Малую Неву",
    image: "27.jpg",
    info: "Разводной мост 1894 года постройки. Соединяет Васильевский и Петроградский острова.",
  },
  {
    name: "Стрелка Васильевского острова",
    address: "СПб, Биржевая площадь",
    image: "28.jpg",
    info: "Живописное место на слиянии Большой и Малой Невы. Ростральные колонны, отличный вид на город.",
  },
]

//birga_kronverksky
const arr4 = [
  { start: "Биржевая линия, 14", end: "Кронверский пр. 49" },
  {
    name: "Памятник Василию Корчмину",
    address: "Санкт-Петербург, Биржевая площадь",
    image: "29.jpg",
    info: "Памятник основателю Санкт-Петербургского монетного двора, расположенный недалеко от Биржевой площади.",
  },
  {
    name: "Меншиковский дворец",
    image: "30.jpg",
    info: "Один из первых каменных домов Санкт-Петербурга, построенный для князя А.Д. Меншикова.",
  },
  {
    name: "Музей-аптека доктора Пеля и сыновей",
    address: "Санкт-Петербург, 7-я линия В.О., 16-18",
    image: "31.jpg",
    info: "Историческая аптека, сохранившая интерьер XIX века. Здесь можно узнать об истории фармации и увидеть старинное оборудование.",
  },
  {
    name: "Андреевский собор",
    address: "Санкт-Петербург, 6-я линия В.О., 11",
    image: "32.jpg",
    info: "Действующий православный храм на Васильевском острове. Архитектурный памятник.",
  },
  {
    name: "Памятник трамваю",
    address:
      "Санкт-Петербург, Васильевский остров, угол Среднего проспекта и 8-й линии",
    image: "33.jpg",
    info: "Установлен в память о трамвайном движении на Васильевском острове.",
  },
  {
    name: "Сад «Василеостровец»",
    address: "Санкт-Петербург, Большой проспект В.О., 55",
    image: "34.jpg",
    info: "Небольшой, но уютный сад, где можно отдохнуть от городской суеты.",
  },
  {
    name: "Часовня Ксении Петербургской",
    address: "Санкт-Петербург, Камская улица, 24",
    image: "35.jpg",
    info: "Одна из самых почитаемых святынь Санкт-Петербурга. Место паломничества верующих.",
  },

  {
    name: "Особняк Кочубея",
    address: "Санкт-Петербург, Таракановская улица, 11А",
    image: "36.jpg",
    info: "Здание в стиле необарокко, принадлежавшее представителям знатного рода Кочубеев.",
  },
  {
    name: "Лютеранская церковь святой Екатерины",
    address: "Санкт-Петербург, Большой проспект П.С., 1",
    image: "37.jpg",
    info: "Действующая лютеранская церковь на Петроградской стороне. Архитектурный памятник.",
  },
  {
    name: "Дом с башнями",
    address: "Санкт-Петербург, ул. Льва Толстого, 1-3",
    image: "38.jpg",
    info: "Здание в стиле северного модерна. Выделяется своими двумя башнями.",
  },
  {
    name: "Ботанический сад БИН РАН",
    address: "Санкт-Петербург, улица Профессора Попова, 2",
    image: "39.jpg",
    info: "Старейший ботанический сад России. Коллекция растений со всего мира.",
  },
]

const array = [arr0, arr1, arr2, arr3, arr4]
export default array
