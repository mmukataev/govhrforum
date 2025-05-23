import Registration from "@/[lang]/registration/page";

const translations = {
    Header: {
        about: {
            en: "About",
            ru: "О конференции",
            kz: "Конференция туралы"
        },
        sections: {
            en: "Sections",
            ru: "Разделы",
            kz: "Бөлімдер"
        },
        speakers: {
            en: "Speakers",
            ru: "Спикеры",
            kz: "Спикерлер"
        },
        news: {
            en: "News",
            ru: "Новости",
            kz: "Новости"
        },
        registration: {
            en: "Register",
            ru: "Зарегистрироваться",
            kz: "Тіркелу"
        },
        footer: {
            en: "2025 All rights reserved.",
            ru: "2025 Все права защищены.",
            kz: "2025 Барлық құқықтар қорғалған."
        }
    },

    Main: {
        title: {
            en: "New Systems\nModern Services\nNovel Solutions",
            ru: "Новые системы\nСовременные сервисы\nИнновационные решения",
            kz: "Жаңа жүйелер\nҚазіргі қызметтер\nИнновациялық шешімдер"
        },
        description: {
            en: "STARTS\nJUNE 20TH, 2025\nAstana",
            ru: "СТАРТ\n20 ИЮНЯ 2025\nАстана",
            kz: "БАСТАЛАДЫ\n2025 ЖЫЛДЫҢ 20 МАУСЫМЫНДА\nАстана"
        },
        button: {
            en: "Program",
            ru: "Программа",
            kz: "Бағдарлама"
        },
        buttonLink: {
            en: "/programs/En.pdf",
            ru: "/programs/Ru.pdf",
            kz: "/programs/Kz.pdf"
        },
    },

    About: {
        title: {
            en: "About the Conference", 
            ru: "О конференции",
            kz: "Конференция туралы"
        },
        description: {
            en: "GovHR Forum — It is a unique platform for the exchange of experience, discussion of advanced technologies and the formation of new approaches in the field of human resource management in the public sector.\n\nBringing together managers, IT specialists, HR specialists and experts in the field of digitalization, the forum opens a dialogue on how modern technologies and innovative services are transforming HR processes in the public sector.\n\nThe Forum will become a point of attraction for everyone who is interested in the development of government HR services, strives to implement advanced solutions and build an effective, transparent and flexible HR management system.\n\nnnGovHR Forum is more than an event. This is a movement towards modern public administration.",
            ru: "Форум GovHR — это уникальная платформа для обмена опытом, обсуждения передовых технологий и формирования новых подходов в области управления человеческими ресурсами в государственном секторе.\n\nОбъединяя руководителей, IT-специалистов, HR-экспертов и специалистов по цифровизации, форум открывает диалог о том, как современные технологии и инновационные сервисы трансформируют HR-процессы в государственном управлении.\n\nФорум станет точкой притяжения для всех, кто заинтересован в развитии государственных HR-сервисов, стремится внедрять передовые решения и строить эффективную, прозрачную и гибкую систему управления персоналом.\n\nGovHR Forum — это больше, чем просто событие. Это движение к современному государственному управлению.",
            kz: "GovHR форумы — бұл мемлекеттік сектордағы адами ресурстарды басқару саласындағы тәжірибе алмасу, озық технологияларды талқылау және жаңа тәсілдерді қалыптастыруға арналған бірегей платформа.\n\nБасшыларды, IT мамандарын, HR саласының мамандарын және цифрландыру сарапшыларын біріктіре отырып, форум заманауи технологиялар мен инновациялық қызметтер мемлекеттік HR процестерін қалай өзгертетінін талқылауға мүмкіндік береді.\n\nФорум мемлекеттік HR қызметтерін дамытуға қызығушылық танытқан, озық шешімдерді енгізуге және тиімді, ашық әрі икемді кадрларды басқару жүйесін құруға ұмтылатындардың басын қосатын орталыққа айналады.\n\nGovHR форумы — бұл жай ғана іс-шара емес. Бұл — заманауи мемлекеттік басқаруға қадам."
        },
    },

    Sections: {
        ection: "Sections",
        title: {
            en: "Sections",
            ru: "Разделы",
            kz: "Бөлімдер"
        },
        items: [
            {
                id: 1,
                title: {
                    en: "AI in Gov",
                    ru: "Искусственный интеллект в госуправлении",
                    kz: "Жасанды интеллект"
                },
                description: {
                    en: "Providing Quality Services",
                    ru: "Providing Quality Services",
                    kz: "Сапалы мемлекеттік қызмет "
                },
                hovertext: {
                    en: "The integration of AI into civil service (selection process, performance evaluation of civil servants, analytics, recruitment, planning, etc.).",
                    ru: "The integration of AI into civil service (selection process, performance evaluation of civil servants, analytics, recruitment, planning, etc.).",
                    kz: "Мемлекеттік қызметке іріктеу процесінде және мемлекеттік қызметшілердің тиімділігін бағалау кезінде AI енгізу"
                },
                image: "/sections/1.jpg",
            },
            {
                id: 2,
                title: {
                    en: "Unified HR Systems",
                    ru: "Единые системы управления персоналом",
                    kz: "Біртұтас кадр жүйелері "
                },
                description: {
                    en: "Human Resource Management",
                    ru: "Human Resource Management",
                    kz: "Адам ресурстарын басқару"
                },
                hovertext: {
                    en: "Formation of the architecture of human resource management; Automation of HR processes to enable strategic decision-making.",
                    ru: "Formation of the architecture of human resource management; Automation of HR processes to enable strategic decision-making.",
                    kz: "Адами ресурстарды басқарудың архитектурасын қалыптастыру;\n\nСтратегиялық шешімдер қабылдауға мүмкіндік беретін, HR процестерін автоматтандыру."
                },
                image: "/sections/2.jpg",
            },
            {
                id: 3,
                title: {
                    en: "HR Analytics",
                    ru: "HR аналитика",
                    kz: "HR аналитика"
                },
                description: {
                    en: "Data Management",
                    ru: "Data Management",
                    kz: "Деректерді өңдеу"
                },
                hovertext: {
                    en: "Strategic planning, analytics and forecasting of HR; Formation of Proactive, Data-Driven HR.",
                    ru: "Strategic planning, analytics and forecasting of HR; Formation of Proactive, Data-Driven HR.",
                    kz: "Адам ресурстарын стратегиялық жоспарлау мен болжауды жақсарту;\n\nДеректерге негізделген проактивті HR қалыптастыру"
                },
                image: "/sections/3.jpg",
            },
            {
                id: 4,
                title: {
                    en: "Advanced Training System",
                    ru: "Advanced Training System",
                    kz: "Оқытудың озық жүйесі"
                },
                description: {
                    en: "Training and Development",
                    ru: "Training and Development",
                    kz: "Оқыту және дамыту"
                },
                hovertext: {
                    en: "Advancing the knowledge and skills of HR; Ensuring the necessary qualifications for the future workforce.",
                    ru: "Advancing the knowledge and skills of HR; Ensuring the necessary qualifications for the future workforce.",
                    kz: "HR мамандарының, қызметкерлердің білімі мен дағдыларын жетілдіру және болашақ жұмыс күшіне қажетті біліктілікпен қамтамасыз ету."
                },
                image: "/sections/4.jpg",
            }
        ]
    },

    Speakers: {
        title: {
            en: "Speakers",
            ru: "Спикеры",
            kz: "Спикерлер"
        }
    },

    News: {
        title: {
            en: "News",
            ru: "Новости",
            kz: "Новости"
        },
        items: [
            {
                id: 1,
                title: "GovHR Forum 2023",
                date: {
                    en: "October 10, 2023",
                    ru: "10 октября 2023",
                    kz: "10 қазан 2023"
                },
                description: "The Imperative of Diversifying Green Energy Sources: Is Kazakhstan the Key to Europe’s Sustainable Future?",
                url: "https://www.govhrforum.com",
                image: "/news/1.jpg",
            }
        ]
    },
    
    Partners: {
        title: {
            en: "Partners",
            ru: "Партнеры",
            kz: "Партнеры"
        },
        items: [
            {
                id: 1,
                url: {
                    en: "https://www.gov.kz/memleket/entities/qyzmet?lang=en",
                    ru: "https://www.gov.kz/memleket/entities/qyzmet?lang=ru",
                    kz: "https://www.gov.kz/memleket/entities/qyzmet?lang=kk"
                },
                image: "/АДГС.png",
            },
            {
                id: 2,
                url: {
                    en: "https://www.apa.kz/en/",
                    ru: "https://www.apa.kz/ru/",
                    kz: "https://www.apa.kz/kz/"
                },
                image: "/АГУ.png",
            },
            {
                id: 3,
                url: {
                    en: "https://www.astanacivilservicehub.org/en",
                    ru: "https://www.astanacivilservicehub.org/ru",
                    kz: "https://www.astanacivilservicehub.org/kk"
                },
                image: "/ACSH.png",
            }
        ]
    },

    Registration: {
        title: {
            en: "New Systems, Modern Services, Novel Solutions",
            ru: "Новые системы, современные сервисы, инновационные решения",
            kz: "Жаңа жүйелер, заманауи сервистер, тың шешімдер"
        },
        description: {
            en: "June 20, 2025 | Astana, Abay 33A",
            ru: "20 июня 2025 | Астана, Абая 33А",
            kz: "2025 жылғы 20 маусым | Астана, Абай 33А"
        },
        name: {
            en: "Name",
            ru: "Имя",
            kz: "Аты"
        },
        surname: {
            en: "Surname",
            ru: "Фамилия",
            kz: "Тегі"
        },
        patronymic: {
            en: "Patronymic",
            ru: "Отчество",
            kz: "Әкесінің аты"
        },
        organiztion: {
            en: "Organization",
            ru: "Организация",
            kz: "Ұйым"
        },
        position: {
            en: "Position",
            ru: "Должность",
            kz: "Лауазымы"
        },
        country: {
            en: "Country",
            ru: "Страна",
            kz: "Ел"
        },
        email: {
            en: "Email",
            ru: "Электронная почта",
            kz: "Электрондық пошта"
        },
        phone: {
            en: "Phone",
            ru: "Телефон",
            kz: "Телефон"
        },
        section: {
            en: "Forum Interest Areas:",
            ru: "Интересующие направления форума:",
            kz: "Форумның қызықты бағыттары:"
        },
        s1: {
            en: "Integration of Artificial Intelligence in Public Service",
            ru: "Интеграция Искусственного Интеллекта в Госслужбу",
            kz: "Мемлекеттік қызметте жасанды интеллектті интеграциялау"
        },

        s2: {
            en: "Fishbowl Session - Development of Unified Personnel Management Systems",
            ru: "Fishbowl Session - Развитие Единой системы управления персоналом",
            kz: "Fishbowl Session - Біртұтас кадрларды басқару жүйесін дамыту"
        },

        s3: {
            en: "Foresight Session - Proactive, Data-Driven HR Strategies and Strategic Workforce Planning",
            ru: "Foresight Session - Проактивные, основанные на данных HR стратегии и стратегическое планирование рабочей силы",
            kz: "Foresight Session - Проактивті, деректерге негізделген HR стратегиялары және стратегиялық жұмыс күшін жоспарлау"
        },

        s4: {
            en: "Training and Competency Development for Civil Servants",
            ru: "Обучение и развитие компетенций госслужащих",
            kz: "Мемлекеттік қызметшілерді оқыту және біліктілігін арттыру"
        },

        confirm: {
            en: "I consent to the use of my data for organizational purposes and the use of photos/videos taken during the event.",
            ru: "Я даю согласие на использование моих данных в организационных целях и на использование фото/видео, сделанных во время мероприятия.",
            kz: "Мен деректерімді ұйымдастыру мақсатында және іс-шара кезінде түсірілген фото/бейнемазмұнды пайдалануға келісім беремін."
        },

        button: {
            en: "Register",
            ru: "Зарегистрироваться",
            kz: "Тіркелу"
        },
            
    },

ForesightTopics: {
  title: {
    en: "Foresight Topics",
    ru: "Форсайт-темы",
    kz: "Форсайт тақырыптары"
  },
  topics: [
    {
      id: "skillsMap",
      en: {
        title: "Future Skills Map (Skill Map 2030):",
        text: "The skill map that will guide the workforce development in 2030, focusing on skills needed for the future workforce."
      },
      ru: {
        title: "Карта навыков будущего (Skill Map 2030):",
        text: "Карта навыков, которая определит развитие кадров к 2030 году, с акцентом на навыки будущего."
      },
      kz: {
        title: "Болашақ дағдылар картасы (Skill Map 2030):",
        text: "2030 жылға дейін кадрларды дамытуға бағытталған болашақ дағдылар картасы."
      }
    },
    {
      id: "digitalTwin",
      en: {
        title: "The Digital Twin of a Civil Servant: Opportunities and Risks:",
        text: "Exploring the concept of digital twins for civil servants, and the potential risks and benefits in public service."
      },
      ru: {
        title: "Цифровой двойник госслужащего: возможности и риски:",
        text: "Изучение концепции цифровых двойников для госслужащих, а также возможные риски и преимущества."
      },
      kz: {
        title: "Мемлекеттік қызметшінің цифрлық егізі: мүмкіндіктер мен қауіптер:",
        text: "Мемлекеттік қызметшілер үшін цифрлық егіздер ұғымын зерттеу және оның артықшылықтары мен тәуекелдері."
      }
    },
    {
      id: "hrModel",
      en: {
        title: "Decision-Making Model of Future HR:",
        text: "Examining the decision-making process in Human Resources as it evolves to meet future needs and challenges."
      },
      ru: {
        title: "Модель принятия решений HR будущего:",
        text: "Анализ процесса принятия решений в HR в контексте его эволюции для решения будущих задач."
      },
      kz: {
        title: "Болашақ HR шешім қабылдау моделі:",
        text: "Болашақ қажеттіліктер мен мәселелерге бейімделу барысындағы HR шешім қабылдау үдерісін талдау."
      }
    },
    {
      id: "futureMorning",
      en: {
        title: "A Morning in the Life of a Future Civil Servant:",
        text: "Imagining the daily routine of a civil servant in the future, and how technology will influence their workday."
      },
      ru: {
        title: "Утро будущего госслужащего:",
        text: "Воображаемый распорядок дня госслужащего будущего и влияние технологий на его рабочий день."
      },
      kz: {
        title: "Болашақ мемлекеттік қызметшінің таңы:",
        text: "Болашақ мемлекеттік қызметшінің күн тәртібі және технологиялардың оның жұмыс күніне әсері."
      }
    },
    {
      id: "digitalEthics",
      en: {
        title: "Digital Ethics in HR Analytics:",
        text: "Addressing ethical considerations when using data and analytics in human resources, ensuring fairness and privacy."
      },
      ru: {
        title: "Цифровая этика в HR-аналитике:",
        text: "Этические аспекты использования данных и аналитики в HR: обеспечение справедливости и конфиденциальности."
      },
      kz: {
        title: "HR аналитикасындағы цифрлық этика:",
        text: "HR саласындағы деректер мен аналитиканы қолданудағы этикалық мәселелер — әділеттілік пен құпиялылықты сақтау."
      }
    },
    {
      id: "hrArchetypes",
      en: {
        title: "Archetypes of the HR Function in 2035:",
        text: "Investigating the potential transformations in Human Resources by 2035 and how HR roles and responsibilities might evolve."
      },
      ru: {
        title: "Архетипы HR-функции в 2035 году:",
        text: "Исследование возможных трансформаций HR-функции к 2035 году и эволюция ролей и обязанностей HR."
      },
      kz: {
        title: "2035 жылғы HR функциясының архетиптері:",
        text: "2035 жылға қарай HR функцияларының ықтимал өзгерістерін және HR рөлдері мен міндеттерінің дамуын зерттеу."
      }
    }
  ]
}


};
export default translations;