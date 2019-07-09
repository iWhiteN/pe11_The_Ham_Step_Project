// Masonry plugin
window.addEventListener("load", function () {
  const elem = document.querySelector('.gallery_items');
  let msnry = new Masonry( elem, {
    // options
    itemSelector: '.gallery_items_item',
    columnWidth: 370,
    gutter: 9,
    horizontalOrder: true
  })
})

// Our Services
const getServices = () => {
  return [
    {
      id: 0,
      title: "Web Design",
      img: "img/services/web_design.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 1,
      title: "Graphic Design",
      img: "img/services/graphic_design.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "Online Support",
      img: "img/services/online_support.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      id: 3,
      title: "App Design",
      img: "img/services/app_design.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 4,
      title: "Online Marketing",
      img: "img/services/online_marketing.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      id: 5,
      title: "Seo Service",
      img: "img/services/seo_service.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
    }
  ]
}

// Our Amazing Work
const getWorks = () => {
  return [
    {
      id: 0,
      title: "Graphic Design",
      description: "Graphic 1",
      img: "img/works/graphic_design/1.jpg"
    },
    {
      id: 1,
      title: "Graphic Design",
      description: "Graphic 2",
      img: "img/works/graphic_design/2.jpg"
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "Graphic 3",
      img: "img/works/graphic_design/3.jpg"
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Graphic 4",
      img: "img/works/graphic_design/4.jpg"
    },
    {
      id: 4,
      title: "Graphic Design",
      description: "Graphic 5",
      img: "img/works/graphic_design/5.jpg"
    },
    {
      id: 5,
      title: "Graphic Design",
      description: "Graphic 6",
      img: "img/works/graphic_design/6.jpg"
    },
    {
      id: 6,
      title: "Graphic Design",
      description: "Graphic 7",
      img: "img/works/graphic_design/7.jpg"
    },
    {
      id: 7,
      title: "Graphic Design",
      description: "Graphic 8",
      img: "img/works/graphic_design/8.jpg"
    },
    {
      id: 8,
      title: "Graphic Design",
      description: "Graphic 9",
      img: "img/works/graphic_design/9.jpg"
    },
    {
      id: 9,
      title: "Graphic Design",
      description: "Graphic 10",
      img: "img/works/graphic_design/10.jpg"
    },
    {
      id: 10,
      title: "Graphic Design",
      description: "Graphic 11",
      img: "img/works/graphic_design/11.jpg"
    },
    {
      id: 11,
      title: "Graphic Design",
      description: "Graphic 12",
      img: "img/works/graphic_design/12.jpg"
    },
    {
      id: 12,
      title: "Web Design",
      description: "Web 1",
      img: "img/works/web_design/1.jpg"
    },
    {
      id: 13,
      title: "Web Design",
      description: "Web 2",
      img: "img/works/web_design/2.jpg"
    },
    {
      id: 14,
      title: "Web Design",
      description: "Web 3",
      img: "img/works/web_design/3.jpg"
    },
    {
      id: 15,
      title: "Web Design",
      description: "Web 4",
      img: "img/works/web_design/4.jpg"
    },
    {
      id: 16,
      title: "Web Design",
      description: "Web 5",
      img: "img/works/web_design/5.jpg"
    },
    {
      id: 17,
      title: "Web Design",
      description: "Web 6",
      img: "img/works/web_design/6.jpg"
    },
    {
      id: 18,
      title: "Web Design",
      description: "Web 7",
      img: "img/works/web_design/7.jpg"
    },
    {
      id: 19,
      title: "Landing Pages",
      description: "Landing 1",
      img: "img/works/landing_pages/1.jpg"
    },
    {
      id: 20,
      title: "Landing Pages",
      description: "Landing 2",
      img: "img/works/landing_pages/2.jpg"
    },
    {
      id: 21,
      title: "Landing Pages",
      description: "Landing 3",
      img: "img/works/landing_pages/3.jpg"
    },
    {
      id: 22,
      title: "Landing Pages",
      description: "Landing 4",
      img: "img/works/landing_pages/4.jpg"
    },
    {
      id: 23,
      title: "Landing Pages",
      description: "Landing 5",
      img: "img/works/landing_pages/5.jpg"
    },
    {
      id: 24,
      title: "Landing Pages",
      description: "Landing 6",
      img: "img/works/landing_pages/6.jpg"
    },
    {
      id: 25,
      title: "Landing Pages",
      description: "Landing 7",
      img: "img/works/landing_pages/7.jpg"
    },
    {
      id: 26,
      title: "Wordpress",
      description: "Wordpress 1",
      img: "img/works/wordpress/1.jpg"
    },
    {
      id: 27,
      title: "Wordpress",
      description: "Wordpress 2",
      img: "img/works/wordpress/2.jpg"
    },
    {
      id: 28,
      title: "Wordpress",
      description: "Wordpress 3",
      img: "img/works/wordpress/3.jpg"
    },
    {
      id: 29,
      title: "Wordpress",
      description: "Wordpress 4",
      img: "img/works/wordpress/4.jpg"
    },
    {
      id: 30,
      title: "Wordpress",
      description: "Wordpress 5",
      img: "img/works/wordpress/5.jpg"
    },
    {
      id: 31,
      title: "Wordpress",
      description: "Wordpress 6",
      img: "img/works/wordpress/6.jpg"
    },
    {
      id: 32,
      title: "Wordpress",
      description: "Wordpress 7",
      img: "img/works/wordpress/7.jpg"
    },
    {
      id: 33,
      title: "Wordpress",
      description: "Wordpress 8",
      img: "img/works/wordpress/8.jpg"
    },
    {
      id: 34,
      title: "Wordpress",
      description: "Wordpress 9",
      img: "img/works/wordpress/9.jpg"
    },
    {
      id: 35,
      title: "Wordpress",
      description: "Wordpress 10",
      img: "img/works/wordpress/10.jpg"
    }
  ];
}

// Breaking News
const getNews = () => {
  return [
    {
      id: 0,
      date: '12-15-2019',
      img: "img/news/1.png",
      title: "Amazing Image Pos",
      lastComment: "admin",
      qtyComments: 2
    },
    {
      id: 1,
      date: '12-15-2019',
      img: "img/news/2.png",
      title: "Amazing Image Pos",
      lastComment: "John",
      qtyComments: 34
    },
    {
      id: 2,
      date: '12-15-2019',
      img: "img/news/3.png",
      title: "Amazing Image Pos",
      lastComment: "Vita",
      qtyComments: 17
    },
    {
      id: 3,
      date: '08-15-2019',
      img: "img/news/4.png",
      title: "Amazing Image Pos",
      lastComment: "Stephan",
      qtyComments: 22
    },
    {
      id: 4,
      date: '04-11-2019',
      img: "img/news/5.png",
      title: "Amazing Image Pos",
      lastComment: "Lori",
      qtyComments: 6
    },
    {
      id: 5,
      date: '06-23-2019',
      img: "img/news/6.png",
      title: "Amazing Image Pos",
      lastComment: "admin",
      qtyComments: 8
    },
    {
      id: 6,
      date: '04-03-2019',
      img: "img/news/7.png",
      title: "Amazing Image Pos",
      lastComment: "Dan",
      qtyComments: 4
    },
    {
      id: 7,
      date: '12-28-2019',
      img: "img/news/8.png",
      title: "Amazing Image Pos",
      lastComment: "Kate",
      qtyComments: 12
    }
  ]
}

// Gallery of best images
const getGallery = () => {
  return [
    {
      id: 0,
      imgs: ["img/gallery/1.png"]
    },
    {
      id: 2,
      imgs: ["img/gallery/2.png"]
    },
    {
      id: 3,
      imgs: [
        "img/gallery/8_1.png",
        "img/gallery/8_2.png",
        "img/gallery/8_3.png",
        "img/gallery/8_4.png",
        "img/gallery/8_5.png",
        "img/gallery/8_6.png",
        "img/gallery/8_7.png",
        "img/gallery/8_8.png",
        "img/gallery/8_9.png",
        "img/gallery/8_10.png",
        "img/gallery/8_11.png"
      ]
    },
    {
      id: 4,
      imgs: ["img/gallery/3.png"]
    },
    {
      id: 5,
      imgs: ["img/gallery/4.png"]
    },
    {
      id: 6,
      imgs: ["img/gallery/5.png"]
    },
    {
      id: 7,
      imgs: ["img/gallery/6.png"]
    },
    {
      id: 8,
      imgs: ["img/gallery/7.png"]
    },
    {
      id: 8,
      imgs: ["img/gallery/7.png"]
    },
    {
      id: 8,
      imgs: ["img/gallery/7.png"]
    },
  ];
}

// What People Say About theHam
const getFeedbacks = () => {
  return [
    {
      id: 0,
      fullName: 'Hasan Ali',
      posit: 'UX/UI Designer',
      photo: 'img/feedback/hasan_ali.png',
      message: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    },
    {
      id: 1,
      fullName: 'Batty Neison',
      posit: 'Web Deweloper',
      photo: 'img/feedback/batty_neison.png',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus mollitia dicta necessitatibus hic praesentium harum velit quam esse consectetur illum, nostrum omnis non iusto sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    },
    {
      id: 2,
      fullName: 'Keily Pris',
      posit: 'QA Engineer',
      photo: 'img/feedback/keily_pris.png',
      message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magnam qui cum aut reiciendis quibusdam quidem repudiandae iste ducimus eaque sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis repudiandae iste ducimus?'
    },
    {
      id: 3,
      fullName: 'Josev Robinson',
      posit: 'Java Developer',
      photo: 'img/feedback/josev_robinson.png',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis repudiandae, quidem repellendus mollitia doloribus, dolor obcaecati iste tempore accusantium dolore nemo reiciendis repellat quo possimus eos exercitationem iure iusto.'
    }
  ]
}

// Spinner
const spinner = () => {
  let wrapper =  document.createElement('div');
  wrapper.innerHTML = `
  <div class="cssload-loader">
    <div class='cssload-inner cssload-one'></div>
    <div class='cssload-inner cssload-two'></div>
    <div class='cssload-inner cssload-three'></div>
  </div>`
  return wrapper.children[0];
}

// Animation
const fade = (el) => { 
  let opac = 0.1;
  let timerFade = setInterval(e => { 
      if (opac >= 1) clearInterval(timerFade); 
      el.style.opacity = opac; 
      // Скорость анимации
      opac += opac * 0.3; 
  }, 50); 
} 

// Унифицированная функция загрузки картинок с сервера
const btnLoadMore = (cntBtn, qtyImg, arrImg = [], btn, callback) => {

  // Добавляем спинер / скрываем кнопку на время спинера
  load = spinner();
  btn.before(load);
  btn.style.display = 'none';

  result = [];

  setTimeout(function(){
    load.remove();

    if (arrImg.length >= qtyImg && cntBtn[0]) {
      // Проверка, к-во картинок по умолчанию было не больше к-ва полученных картинок
      let currentCount = arrImg.length >= (qtyImg + qtyImg) ? (qtyImg + qtyImg) : arrImg.length;
      for (let i = qtyImg[0]; i < currentCount; i++) {
         result.push(arrImg[i])
        }
      }
      qtyImg[0] += qtyImg[0];

      btn.style.display =  arrImg.length >= qtyImg && --cntBtn ? 'flex' : 'none';;

      // Что делаем после того как получили данные, так как стоит таймаут, нужно выполнять синхронно - делаем колбек
      callback(result)
  }, 2000)
}



// ---------------------------------------------------------------------------------
/* OUR SERVICES */
const servicesTabs = document.querySelector('.our-services_tabs_items');
const servicesTabsInfo = document.querySelector('.our-services_tabs_info');

// Получаем с БД данные
const services = getServices();

// Генерация ДОМ
for (let i = 0; i < services.length; i++) {

  // Создаем табы
  let itemTab = document.createElement('a');
  itemTab.setAttribute('href', '#');
  itemTab.setAttribute('id', services[i].title.toLocaleLowerCase().replace(' ', '_'));
  itemTab.classList.add('our-services_tabs_items_item');
  itemTab.innerText = services[i].title;

  // Загружаем элементы в блок
  let servicesTabsInfoItem = document.createElement('div');
  servicesTabsInfoItem.classList.add('our-services_tabs_info_item');
  servicesTabsInfoItem.setAttribute('data-type', services[i].title.toLocaleLowerCase().replace(' ', '_'));

  let servicesTabsInfoImg = document.createElement('img');
  servicesTabsInfoImg.setAttribute('src', services[i].img);
  servicesTabsInfoImg.setAttribute('alt', services[i].title);
  servicesTabsInfoImg.classList.add('our-services_tabs_info_item_icon');
  servicesTabsInfoItem.appendChild(servicesTabsInfoImg);

  let servicesTabsInfoDesc = document.createElement('div');
  servicesTabsInfoDesc.classList.add('our-services_tabs_info_item_desc');
  servicesTabsInfoDesc.innerText = services[i].desc;
  servicesTabsInfoItem.appendChild(servicesTabsInfoDesc);

    // Пол умолчанию выбран первый элемент
    if (i === 0) {
      itemTab.classList.add('our-services_tabs_items_active');
      fade(itemTab);
      servicesTabsInfoItem.classList.add('our-services_tabs_info_item_active');
      fade(servicesTabsInfoItem);
   }

    servicesTabs.appendChild(itemTab);
    servicesTabsInfo.appendChild(servicesTabsInfoItem);
  }

// Переключение табов
servicesTabs.addEventListener('click', e => {
  e.preventDefault();

  // Toogle tab
  document.querySelector('.our-services_tabs_items_active').classList.remove('our-services_tabs_items_active');
  e.target.classList.add('our-services_tabs_items_active');
  fade(e.target);

  // toogle info tab
  document.querySelector('.our-services_tabs_info_item_active').classList.remove('our-services_tabs_info_item_active');
  fade(document.querySelector(`[data-type="${e.target.getAttribute('id')}"]`));
  document.querySelector(`[data-type="${e.target.getAttribute('id')}"]`).classList.add('our-services_tabs_info_item_active');
})



// ---------------------------------------------------------------------------------
/* OUR AMAZING WORK */
const worksTabs = document.querySelector('.amazing_tabs');
const worksTabsInfo = document.querySelector('.amazing_works');
const worksBtn = document.getElementById('amazing_btn');

// Создание блока с картинкой для Our Amazing Work
const createImgWorks = (title, description, src) => {
  let a = document.createElement('a');
  a.setAttribute('href', '#');
  a.setAttribute('data-title', title);
  a.setAttribute('data-desc', description);
  a.classList.add('amazing_works_item');

  let img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', title);

  a.appendChild(img);

    // Добавление функционального ховера на каждый блок
    a.addEventListener('mouseenter', e => {
      let title = e.target.getAttribute('data-title');
      let desc = e.target.getAttribute('data-desc');
    
      e.target.appendChild(hoverItemWorks(title,desc));
    })
  
    // Удаляем ховер
    a.addEventListener('mouseleave', () => {
      const delHov = document.querySelector('.amazing_works_hover');
      delHov ? delHov.remove() : null;
    })

  return a;
}
// Блок с ховером WORKS
function hoverItemWorks (title, desc) {
  const div = document.createElement('div');
  div.classList.add('amazing_works_hover');

  let icons = document.createElement('div');
  icons.classList.add('amazing_works_hover_icons');
  div.appendChild(icons);

  let iconLink = document.createElement('a');
  iconLink.setAttribute('href', '#');
  let iconLinkImg = document.createElement('i');
  iconLinkImg.classList.add('fas', 'fa-link');
  iconLink.appendChild(iconLinkImg);
  icons.appendChild(iconLink);

  let iconSearch = document.createElement('a');
  iconSearch.setAttribute('href', '#');
  let iconSearchImg = document.createElement('i');
  iconSearchImg.classList.add('fas', 'fa-search');
  iconSearch.appendChild(iconSearchImg);
  icons.appendChild(iconSearch);

  let titleDiv = document.createElement('div');
  titleDiv.classList.add('amazing_works_hover_title');
  titleDiv.innerText = title;
  div.appendChild(titleDiv);

  let descDiv = document.createElement('div');
  descDiv.classList.add('amazing_works_hover_subtitle');
  descDiv.innerText = desc;
  div.appendChild(descDiv);

  return div
}

// Получаем с БД данные (перемешиваем)
const works = getWorks().sort(e => 0.5 - Math.random());

// Получаем уникальные записи для табов
const uniqueTabsWorks = Array.from(new Set(works.map(item => item.title)))

// Генерация ДОМ - табы
uniqueTabsWorks.forEach( e => {
  let itemTab = document.createElement('a');
  itemTab.setAttribute('href', '#');
  itemTab.setAttribute('id', e.toLocaleLowerCase().replace(' ', '_'));
  itemTab.classList.add('amazing_tabs_item');
  itemTab.innerText = e;

  worksTabs.appendChild(itemTab);
})

  // По умолчанию первые 12 картинок с All
  for (let i = 0; i < 12; i++) {
    worksTabsInfo.appendChild(createImgWorks(works[i].title, works[i].description, works[i].img));
  }
  // Скрываем кнопку загрузки
  worksBtn.style.display = works.length <= 12 ? 'none' : 'flex';

  // Добавляем картинки по табам
  worksTabs.addEventListener('click', e => {
  e.preventDefault();
  if (e.target !== e.currentTarget) {
    worksTabsInfo.innerHTML = '';
    document.querySelector('.amazing_tabs_item_active').classList.remove('amazing_tabs_item_active');
    e.target.classList.add('amazing_tabs_item_active');

    // В зависимости от типа картинок делаем проверку
    if (e.target.getAttribute('id') === 'all') {
      typeArr = works;
    } else {
      let currentType = works.filter(item => item.title.toLocaleLowerCase().replace(' ', '_') === e.target.getAttribute('id'));
      typeArr = currentType;
    }

    for (let i = 0; i < (typeArr.length >= 12 ? 12 : typeArr.length); i++) {
      worksTabsInfo.appendChild(createImgWorks(typeArr[i].title, typeArr[i].description, typeArr[i].img));
    }
    // Скрываем кнопку загрузки
     worksBtn.style.display = typeArr.length <= 12 ? 'none' : 'flex';
  }

  // Обнуляем значение загрузки (используем ссылочный тип данных, для постоянного обращения через фукнцию)
  cntBtnWorks = [2];
  qtyImgWorks = [12];
})


let cntBtnWorks = [2];
let qtyImgWorks = [12];

// Загрузка с сервера
worksBtn.addEventListener('click', e => {
  e.preventDefault();

  let currentTab = document.querySelector('.amazing_tabs_item_active').getAttribute('id');
  arrImg = currentTab === 'all' ? works : works.filter(item => item.title.toLocaleLowerCase().replace(' ', '_') === currentTab);
  
  btnLoadMore(cntBtnWorks, qtyImgWorks, arrImg, e.currentTarget, e => {
    e.forEach(e => {
      worksTabsInfo.appendChild(createImgWorks(e.title, e.description, e.img));
    })
  });
})



// ---------------------------------------------------------------------------------
/* BREAKING NEWS */
const newsItems = document.querySelector('.news_items');

// получаем с БД данные
const news = getNews();

// Генерация ДОМ
news.forEach( e => {
  let a = document.createElement('a');
  a.setAttribute('href', '#');
  newsItems.appendChild(a);

  let img = document.createElement('img');
  img.setAttribute('src', e.img);
  img.setAttribute('alt', e.title);
  a.appendChild(img);

  let date = document.createElement('div');
  date.classList.add('news_items_date');
  date.innerText = new Date(e.date).getDate() + ' ' + new Date(e.date).toLocaleString('en', {month: 'short'});
  a.appendChild(date);

  let title = document.createElement('div');
  title.classList.add('news_items_title');
  title.innerText = e.title;
  a.appendChild(title);

  let info = document.createElement('div');
  info.classList.add('news_items_info');
  a.appendChild(info);


  let infoUser = document.createElement('div');
  infoUser.classList.add('news_items_info_user');
  infoUser.innerText = 'by ' + e.lastComment;
  info.appendChild(infoUser);

  let infoComments = document.createElement('div');
  infoComments.classList.add('news_items_info_comments');
  infoComments.innerText = e.qtyComments + ' comment';
  info.appendChild(infoComments);
})



// ---------------------------------------------------------------------------------
/* GALLERY OF BEST IMAGES */
const galleryItems = document.querySelector('.gallery_items');
const galleryBtn = document.getElementById('gallery_btn');

// Создание ДОМ
const createImgGallery = (img, title = 'gallery') => {
  
  let aMain = document.createElement('a');
  aMain.setAttribute('href', '#');

  // Если блок картинок
  if (img.length > 1) {
    aMain.classList.add('gallery_items_item', 'gallery_items_summ',);
    img.forEach(i => {
      let a = document.createElement('a');
      a.setAttribute('href', '#');
      
      let imgBlock = document.createElement('img');
      imgBlock.setAttribute('src', i)
      imgBlock.setAttribute('alt', title);
      a.appendChild(imgBlock);
      a.style.position = 'relative';

      aMain.appendChild(a)
      initialHover(a)
    })

    // Если одна картинка
  } else {
    initialHover(aMain);
    aMain.classList.add('gallery_items_item')
    
    let imgBlock = document.createElement('img');
    imgBlock.setAttribute('src', img[0])
    imgBlock.setAttribute('alt', title);
    aMain.appendChild(imgBlock);
  }
      return aMain;
}

// Вызов ховера
const initialHover = (elem) => {
  // Добавление функционального ховера на каждый блок
  elem.addEventListener('mouseenter', e => {
    e.target.appendChild(hoverItemGallery());
  })
      
  // Удаляем ховер
  elem.addEventListener('mouseleave', () => {
    const delHov = document.querySelector('.gallery_items_item_hover');
    delHov ? delHov.remove() : null;
  })
}

// Создание ДОМ ховера
function hoverItemGallery (title, desc) {
  const div = document.createElement('div');
  div.classList.add('gallery_items_item_hover');

  let iconSearch = document.createElement('a');
  iconSearch.setAttribute('href', '#');
  let iconSearchImg = document.createElement('i');
  iconSearchImg.classList.add('fas', 'fa-search');
  iconSearch.appendChild(iconSearchImg);
  div.appendChild(iconSearch);

  let iconOpen = document.createElement('a');
  iconOpen.setAttribute('href', '#');
  let iconOpenImg = document.createElement('i');
  iconOpenImg.classList.add('fas', 'fa-expand-arrows-alt');
  iconOpen.appendChild(iconOpenImg);
  div.appendChild(iconOpen);

  return div
}

// Получаем с БД данные
const galleries = getGallery();

// Скрываем кнопку загрузки
galleryBtn.style.display = galleries.length <= 8 ? 'none' : 'flex';

// Загрузить первые 8 картинок
for (let i = 0; i < (galleries.length >= 8 ? 8 : galleries.length); i++) {
  galleryItems.appendChild(createImgGallery(galleries[i].imgs));
}

// Максимльное к-во загрузок картинок в блок
cntBtnGallery = [2];
qtyImgGallery = [8];

galleryBtn.addEventListener('click', e => {
  e.preventDefault();

  btnLoadMore(cntBtnGallery, qtyImgGallery, galleries, e.currentTarget, e => {
    e.forEach(e => {
            // Masonry plugin
            let newElem = createImgGallery([e.imgs]);
            let msnry = new Masonry(galleryItems, {
              // options
              itemSelector: '.gallery_items_item',
              columnWidth: 370,
              gutter: 9,
              horizontalOrder: true
            });

            galleryItems.appendChild(newElem);
            msnry.appended(newElem);
            msnry.layout(); 
    })
  });
})



// ---------------------------------------------------------------------------------
/* What People Say About theHam */
const feedbackSliderDesc = document.querySelector('.feedback_slider_desc');
const feedbackSliderTabs = document.querySelector('.feedback_slider_tabs');

// Создание елементов фидбека в слайдере
const createFeedbackDesc = (fullName, posit, photo, message) => {
  let descItem = document.createElement('div');
  descItem.classList.add('feedback_slider_desc_item');
  descItem.setAttribute('data-type', fullName.toLocaleLowerCase().replace(' ', '_'));

  let answerUser = document.createElement('div');
  answerUser.classList.add('feedback_slider_desc_answer');
  answerUser.innerText = message;
  descItem.appendChild(answerUser);

  let nameUser = document.createElement('div');
  nameUser.classList.add('feedback_slider_desc_fio');
  nameUser.innerText = fullName;
  descItem.appendChild(nameUser);

  let positUser = document.createElement('div');
  positUser.classList.add('feedback_slider_desc_posit');
  positUser.innerText = posit;
  descItem.appendChild(positUser);

  let photoUser = document.createElement('div');
  photoUser.classList.add('feedback_slider_desc_photo');
  let imgUser = document.createElement('img');
  imgUser.setAttribute('src', photo);
  imgUser.setAttribute('alt', fullName);
  photoUser.appendChild(imgUser);
  descItem.appendChild(photoUser);

  return descItem
}

// Создание табов в слайдере
const createFeedbackTabs = (fullName, photo) => {
  let tabsItem = document.createElement('a');
  tabsItem.setAttribute('href', '#');
  tabsItem.classList.add('feedback_slider_tabs_item');
  let tabsItemImg = document.createElement('img');
  tabsItemImg.setAttribute('src', photo);
  tabsItemImg.setAttribute('alt', fullName);
  tabsItemImg.setAttribute('data-type', fullName.toLocaleLowerCase().replace(' ', '_'));
  tabsItem.appendChild(tabsItemImg);

  return tabsItem
}

// Получение данных с БД
const feedbacks = getFeedbacks();

// Генерация ДОМ
feedbacks.forEach( e => {
  feedbackSliderDesc.appendChild(createFeedbackDesc(e.fullName, e.posit, e.photo, e.message));
  feedbackSliderTabs.appendChild(createFeedbackTabs(e.fullName, e.photo));
})

/* SLIDER */
// По уиолчанию выбран первый элемент
let activeDesc = document.querySelector('.feedback_slider_desc_item');
let activeTab = document.querySelector('.feedback_slider_tabs_item');
activeDesc.classList.add('feedback_slider_desc_item_active');
activeTab.classList.add('feedback_slider_tabs_item_active');
fade(activeDesc);
fade(activeTab);

// Табы
feedbackSliderTabs.addEventListener('click', e => {
  e.preventDefault();

  if (e.target !== e.currentTarget) {
    activeDesc.classList.remove('feedback_slider_desc_item_active');
    activeTab.classList.remove('feedback_slider_tabs_item_active');

    let currItem = e.target.getAttribute('data-type');
    activeDesc = document.querySelector(`[data-type="${currItem}"]`);
    activeDesc.classList.add('feedback_slider_desc_item_active');
    fade(activeDesc);
    
    activeTab = e.target.parentElement;
    activeTab.classList.add('feedback_slider_tabs_item_active');  
    fade(activeTab);  
  }
})

// Стрелки
const prevSlider = document.getElementById('prev');
const newxSlider = document.getElementById('next');

const showSlideArrows = currIndex => {
  activeDesc.classList.remove('feedback_slider_desc_item_active');
  activeTab.classList.remove('feedback_slider_tabs_item_active');
 
  activeDesc = feedbackSliderDesc.children[currIndex];
  activeDesc.classList.add('feedback_slider_desc_item_active');
  fade(activeDesc);
  
  activeTab = feedbackSliderTabs.children[currIndex];
  activeTab.classList.add('feedback_slider_tabs_item_active');  
  fade(activeTab);
}

prevSlider.addEventListener('click', e => {
 let currIndex = [].indexOf.call(feedbackSliderTabs.children, activeTab);

//  Показываем с конца, если перый элемент
 currIndex = currIndex === 0 ? feedbackSliderTabs.children.length-1 : --currIndex;
 showSlideArrows(currIndex); 
})

newxSlider.addEventListener('click', e => {
  let currIndex = [].indexOf.call(feedbackSliderTabs.children, activeTab);
 
 //  Показываем сначала, если последний элемент
  currIndex = currIndex === feedbackSliderTabs.children.length-1 ? 0 : ++currIndex;
  showSlideArrows(currIndex);   
 })