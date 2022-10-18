(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{3613:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testing",function(){return i(6538)}])},1001:function(n,e,i){"use strict";var r=i(5893),l=i(1664),s=i.n(l),c=i(7166),d=i.n(c),h=i(6574),x=i.n(h),t=d().bind(x()),$=function(n){var e=n.children;return(0,r.jsxs)("div",{className:t("layout"),children:[(0,r.jsx)("div",{className:t("layout__column","layout__column_left"),children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/",children:"Main"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/#structure",children:"Structure"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/#naming",children:"Именование переменных"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/#common",children:"Общее соглашение"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/#react",children:"React"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/#ts",children:"Typescript"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/linters",children:"Linters"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/testing",children:"Testing"})})]})}),(0,r.jsx)("div",{className:t("layout__column","layout__column_right"),children:e})]})};e.Z=$},8322:function(n,e,i){"use strict";var r=i(5893),l=i(7166),s=i.n(l),c=i(3832),d=i.n(c),h=s().bind(d()),x=function(n){var e=n.children,i=n.color;return(0,r.jsx)("div",{className:h("highlight",i),children:(0,r.jsx)("div",{className:"highlight__inner",children:e})})};e.Z=x},8119:function(n,e,i){"use strict";var r=i(5893),l=i(7166),s=i.n(l),c=i(8863),d=i.n(c),h=s().bind(d()),x=function(n){var e=n.data;return(0,r.jsx)("div",{className:h("table__cell"),children:e})},t=function(n){var e=n.data;return(0,r.jsx)("div",{className:h("table__row"),style:{"--columns":e.length},children:e.map(function(n,e){return(0,r.jsx)(x,{data:n},e)})})},$=function(n){var e=n.data;return(0,r.jsx)("div",{className:h("table"),children:e.map(function(n,e){return(0,r.jsx)(t,{data:n},e)})})};e.Z=$},6538:function(n,e,i){"use strict";i.r(e),i.d(e,{meta:function(){return h}});var r=i(5893),l=i(1151),s=i(8119),c=i(8322),d=i(1001),h={author:"DaniilBaranov"},x=function(n){var e=n.children;return(0,r.jsx)(d.Z,{meta:h,children:e})};function t(n){var e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",h4:"h4",ol:"ol",li:"li",em:"em",strong:"strong"},(0,l.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Testing"}),"\n",(0,r.jsx)(e.p,{children:"Тестирование программного обеспечения — важный этап процесса разработки.\nСуществуют различные методы тестирования, позволяющие обнаружить ошибки и проблемы, прежде чем это сделает пользователь.\nВажно не только найти ошибки и проблемы в ПО, а и уметь правильно описать и донести эти проблемы до команды разработки,\nчтобы устранить дефекты качественно и вовремя. Далее рассмотрим несколько видов документов, которые будут использоваться при\nформировании отчетов о тестировании, и некоторые подходы к тестированию."}),"\n",(0,r.jsx)(e.h2,{children:"Работа с баг репортом"}),"\n",(0,r.jsx)(e.p,{children:"Баг репорт (bug report) – это технический документ, который содержит в себе полное описание бага, включающее\nинформацию как о самом баге (краткое описание, критичность, приоритет и т.д.), так и об условиях возникновения данного бага."}),"\n",(0,r.jsx)(e.h3,{children:"Поля баг репорта"}),"\n",(0,r.jsx)(e.p,{children:"Баг должен содержать в себе:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"1. Summary(краткое описание)(что? где? при каких условиях?)\n2. Component(компонент приложения)\n3. Severity(серьёзность)\n4. Attachment(вложение)(cкриншот/видео)\n5*. Actual result(фактический результат)\n6*. Expected result(ожидаемый результат)\n  \nДругие характеристики опциональны.\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Если необходимо, то тестировщик должен указать ",(0,r.jsx)(e.code,{children:"окружение"})," на котором найден баг(ОС, браузер, конкретное разрешение или диапазон)"]}),"\n",(0,r.jsxs)(c.Z,{color:"yellow",children:[(0,r.jsxs)(e.p,{children:["В исключительных случаях поле ",(0,r.jsx)(e.code,{children:"Attachment(скриншот/видео)"})," может быть не заполнено при добавлении бага(баг указывает на проблему, которую\nне передать через видео или скриншот)."]}),(0,r.jsx)(e.p,{children:"Например, отсутствует sitemap на prod версии сайта."})]}),"\n",(0,r.jsxs)(e.p,{children:["Также могут быть добавлены ",(0,r.jsx)(e.code,{children:"Шаги для воспроизведения"})," бага, которые помогут разработчику воспроизвести описанный дефект.\nШаги представляют собой набор последовательных действий, которые оформлены в виде списка, и выполняются в заданной очередности."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Идентификатор(номер) бага зачастую прописывается автоматически(в зависимости от используемой баг трекинроговой системы).\n"})}),"\n",(0,r.jsx)(e.h3,{children:"Статусы в баг репорте"}),"\n",(0,r.jsx)(e.p,{children:"Все возможные статусы, которые могут быть использованы при работе с баг репортом:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"1. New\n2. In progress\n3. To test\n4. Not fixed\n5. Fixed on dev\n6. Fixed on prod\n7. Fixed\n8. Not bug\n9. Backlog\n"})}),"\n",(0,r.jsx)(e.h4,{children:"Порядок выставление статусов и их предназначение"}),"\n",(0,r.jsxs)(e.p,{children:["Каждый новый баг заносится в баг репорт соответствующего проекта со статусом ",(0,r.jsx)(e.code,{children:"New"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Когда разработчик берет в работу баг, то он ставит статус ",(0,r.jsx)(e.code,{children:"In Progress"})," для соответствующего бага в БР."]}),"\n",(0,r.jsxs)(e.p,{children:["Разработчик выставляет статус ",(0,r.jsx)(e.code,{children:"To test"})," в случае, если баг исправлен и разработчик убедился, что исправления находятся на\nтестовом сервере, на котором эти исправления будет проверять тестировщик."]}),"\n",(0,r.jsxs)(e.p,{children:["После проверки исправленного бага тестировщиком и в случае успешного фикса выставляется статус ",(0,r.jsx)(e.code,{children:"Fixen on dev"})," или ",(0,r.jsx)(e.code,{children:"Fixed"}),"\nв зависимости от того есть ли на проекте dev и prod серверы."]}),"\n",(0,r.jsxs)(e.p,{children:["Статус ",(0,r.jsx)(e.code,{children:"Fixed on dev"})," выставляется после статуса ",(0,r.jsx)(e.code,{children:"To test"})," и означает, что баг исправлен и проверен на dev сервере и ожидает\nдеплоя на prod. После деплоя на прод и в случае успешной починки бага выставляется статус ",(0,r.jsx)(e.code,{children:"Fixed on prod"}),". Если на проекте\nесть несколько dev серверов и stage, исправленные баги проверяются при каждом сливании веток на dev, а также на stage."]}),"\n",(0,r.jsxs)(e.p,{children:["Тестировщик выставляет статус ",(0,r.jsx)(e.code,{children:"Not fixed"})," для проверенного бага в случае, если проверенное исправление не решает проблему,\nуказанную в описании бага."]}),"\n",(0,r.jsxs)(e.p,{children:["В случае успешной починки бага и его проверке, тестировщик может выставить статус ",(0,r.jsx)(e.code,{children:"Fixed"}),". Такой статус выставляется,\nесли баг был исправлен при первоначальной разработке, когда основные изменения проходят на dev сервере или если баг исправлен\nна prod сервере в качестве хотфикса."]}),"\n",(0,r.jsxs)(e.p,{children:["Статус ",(0,r.jsx)(e.code,{children:"Not bug"})," выставляется разработчиком в случае, если найденный баг не является таковым и описание в баге\nявляется корректным поведением системы."]}),"\n",(0,r.jsxs)(e.p,{children:["Баг может быть добавлен в ",(0,r.jsx)(e.code,{children:"Backlog"}),". Статус ",(0,r.jsx)(e.code,{children:"Backlog"})," используется в случае:"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Если клиент решил отложить починку бага на неопределенный срок. Починка таких багов может производиться пачками в определенно\nотведенное время(после апрува клиента)"}),"\n",(0,r.jsx)(e.li,{children:"Если баг был отложен по каким либо причинам командой разработки(например, баги на девайсах, которые пока не релевантны, потому что приложение\nне ориентировано на мобайл, или какие-то редкие, специфичные баги, на которые нужно затратить большое количество\nвремени на их решение), согласовывается с ПМом."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"В случае, если баг многократно(три и больше) попадает в категорию Not fixed, то нужно вынести вопрос ПМу.\n"})}),"\n",(0,r.jsx)(e.h4,{children:"Описание бага"}),"\n",(0,r.jsx)(e.p,{children:"В описании бага тестировщик должен кратко и четко изложить проблему, которую он обнаружил."}),"\n",(0,r.jsx)(e.p,{children:"Описание должны быть:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Понятным"}),"\n",(0,r.jsx)(e.li,{children:"Однозначным"}),"\n",(0,r.jsx)(e.li,{children:"Включать в себя только один недостаток системы"}),"\n",(0,r.jsx)(e.li,{children:"Полным"}),"\n"]}),"\n",(0,r.jsx)(c.Z,{color:"green",children:(0,r.jsx)(e.p,{children:"Пример правильного описания: Приложение зависает, при попытке загрузки видео файла больше 50Мб."})}),"\n",(0,r.jsx)(c.Z,{color:"red",children:(0,r.jsx)(e.p,{children:'Пример неправильного описания: Плохо работает загрузка видео файла и загрузка картинок.(что значит "плохо"?; нет конкретики в каких\nслучаях не работает; попытка объединить несколько проблем в одну)'})}),"\n",(0,r.jsx)(e.p,{children:"В случае, если баг по верстке и какой-то элемент на странице не соответствует макету, то к багу нужно прикрепить ссылку на макет,\nна который ссылается тестировщик. Если макета нет, то можно сослаться на сайт пример или на здравый смысл, при этом в описании бага\nнужно добавить какие именно стили нужно применить для конкретного элемента на странице."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Если на проекте есть штатный дизайнер, то можно обратиться к нему с вопросом какие стили должны быть для того или иного элемента.\n"})}),"\n",(0,r.jsx)("a",{href:"https://ibb.co/swyFK9w",target:"_blank",children:"Пример описания бага"}),"\n",(0,r.jsx)(e.h4,{children:"Серьёзность бага"}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Blocker(блокирующий)"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Блокирующая ошибка, приводящая приложение в нерабочее состояние, в результате которого дальнейшая работа с тестируемой системой \nили ее ключевыми функциями становится невозможна. Решение проблемы необходимо для дальнейшего функционирования системы.\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Critical(критичный)"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Критическая ошибка, неправильно работающая ключевая бизнес логика, дыра в системе безопасности, проблема, приведшая к временному \nпадению сервера или приводящая в нерабочее состояние некоторую часть системы, без возможности решения проблемы, \nиспользуя другие входные точки. Решение проблемы необходимо для дальнейшей работы с ключевыми функциями тестируемой системой.\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Major(значительный)"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Значительная ошибка, часть основной бизнес логики работает некорректно. \nОшибка не критична или есть возможность для работы с тестируемой функцией, используя другие входные точки.\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Minor(не значительный)"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Незначительная ошибка, не нарушающая бизнес логику тестируемой части приложения, очевидная проблема пользовательского интерфейса.\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Trivial(тривиальный)"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Тривиальная ошибка, не касающаяся бизнес логики приложения, плохо воспроизводимая проблема, малозаметная посредствам \nпользовательского интерфейса, проблема сторонних библиотек или сервисов, проблема, не оказывающая никакого влияния \nна общее качество продукта.\n"})})]}),"\n",(0,r.jsx)(e.h4,{children:"Приоритетность бага"}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"High(высокий)"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Баг должен быть исправлен как можно быстрее, т.к. его наличие является критическим для проекта\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Medium(средний)"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Баг должен быть исправлен, его наличие не является критичным, но требует обязательного решения\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Low(низкий)"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Баг должен быть исправлен, его наличие не является критичным, и не требует срочного решения\n"})})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.em,{children:"Примеры"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'  Trivial/High: "Опечатка в названии компании на главной странице продукта". - не касается бизнес логики приложения, \n  исправить легко(поэтому Trivial), но нужно исправить как можно быстрее, т.к. серьёзно влияет на общее впечатление\n  о продукте(поэтому High приоритет).\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'  Major/Medium: "Выбранное новое фото на аватар не применяется на iOS, при попытке обновить\n  фото в личном кабинете". - ошибка не критична, но является частью основной бизнес логики приложения(поэтому Major), \n  должна быть обязательна исправлена(поэтому Medium приоритет).\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'  Blocker/High: "Зависает интерфейс приложения после нажатия на кнопку \xabкупить\xbb на старнице товара (кнопки перестают нажиматься, \n  приложение невозможно свернуть и т.п.)" - ошибка приводит приложение в нерабочее состояние(Blocker), нужно исправить как можно быстрее(High)\n'})}),"\n",(0,r.jsx)(e.h4,{children:"Каким должен быть Attachment к багу"}),"\n",(0,r.jsx)(e.p,{children:"Хороший Attachment имеет такие характеристики и включает в себя:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Показан url страницы на которой найден баг"}),"\n",(0,r.jsx)(e.li,{children:"Указателями(стрелки и т.д.) показано в какой части страницы баг"}),"\n",(0,r.jsx)(e.li,{children:"Добавлен текстовый блок с комментарием по найденному дефекту"}),"\n",(0,r.jsx)(e.li,{children:"Добавленные указатели не перекрывают и не мешают увидеть в чем дефект"}),"\n",(0,r.jsx)(e.li,{children:"На скриншоте/видео показан пример с которым сравнивает тестировщик(макет, в случае с версткой)"}),"\n",(0,r.jsx)(e.li,{children:"Желательно указывать на один дефект за раз(если указывать сразу на несколько дефектов в пределах одного скриншота можно\nчто-то пропустить при проверке исправлений)"}),"\n"]}),"\n",(0,r.jsx)(c.Z,{color:"green",children:(0,r.jsxs)(e.p,{children:["Пример ",(0,r.jsx)("a",{href:"https://share.getcloudapp.com/xQuxNrvl",target:"_blank",children:"хорошего скриншота"})," по дефекту. Видно url, показан и описан дефект"]})}),"\n",(0,r.jsx)(c.Z,{color:"red",children:(0,r.jsxs)(e.p,{children:["Пример ",(0,r.jsx)("a",{href:"https://ibb.co/4JrDvSb",target:"_blank",children:"плохого скриншота"})," по дефекту. Непонятно на какой странице находится пользователь и в каком элементе(-ах)\nна странице есть дефект"]})}),"\n",(0,r.jsx)(e.h2,{children:"Первые шаги на проекте"}),"\n",(0,r.jsx)(e.h3,{children:"Типичные действия, которые должен сделать тестировщик и какие вопросы задать, при добавлении его на проект"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Уточнить сроки сдачи проекта."}),"\n",(0,r.jsx)(e.li,{children:"Приоритетность поставленных задач на проекте."}),"\n",(0,r.jsx)(e.li,{children:"Есть ли техническая документация по проекту? Где её можно найти?"}),"\n",(0,r.jsx)(e.li,{children:"Есть ли макеты? Макеты для мобильной и таблет версии?"}),"\n",(0,r.jsx)(e.li,{children:"Поддерживаем ли мы мобильную версию приложения?"}),"\n",(0,r.jsx)(e.li,{children:"Какие браузеры мы поддерживаем на проекте?"}),"\n",(0,r.jsx)(e.li,{children:"Уточнить за доступы(будь то доступы к админ панеле, базе данных и т.д.), которые нужны для тестирования."}),"\n",(0,r.jsx)(e.li,{children:"Какую баг трекинговую систему используем?"}),"\n",(0,r.jsx)(e.li,{children:"На каком языке оформляется баг репорт и другая тестовая документация?"}),"\n",(0,r.jsx)(e.li,{children:"Есть ли API документация по проекту?(если нет, но тестировать API нужно, то нужно обращаться к разработчику лично)"}),"\n",(0,r.jsx)(e.li,{children:"Попросить добавить себя к проекту в Toggl и уточнить является ли потраченное время на проекте billable($)"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Затем спланировать работу на проекте исходя из полученных ответов. Подготовить тестовые данные, чеклисты, составить тест кейсы(если\nэто нужно на проекте и отведенное время на тестирование позволяет спокойно выполнить эти задачи)."}),"\n",(0,r.jsx)(e.h3,{children:"Инструменты тестировщика(дополнить)"}),"\n",(0,r.jsx)(e.p,{children:"Инструменты/приложения/расширения, которые помогут тестировщику при тестировании верстки:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Chrome DevTools"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://chrome.google.com/webstore/detail/tape/jmfleijdbicilompnnombcbkcgidbefb",target:"_blank",children:"Tape"})}),"\n(расширение для Google Chrome), аналог линейки, помогает мерить расстояния между блоками."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi",target:"_blank",children:"PerfectPixel"})})," (расширение для\nGoogle Chrome), позволяет накладывать макет на странице в браузере."]}),"\n"]}),"\n",(0,r.jsxs)(c.Z,{color:"yellow",children:[(0,r.jsx)(e.p,{children:"При тестировании верстки особенное внимание стоит уделять(!):"}),(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Тестированию верстки при ресайзе страницы"}),"\n",(0,r.jsx)(e.li,{children:"Тестированию верстки в разных браузерах(Chrome, Firefox, Safari)"}),"\n",(0,r.jsx)(e.li,{children:"Тестированию верстки на разных ОС(Windows, MacOS)"}),"\n",(0,r.jsx)(e.li,{children:"Тестирование на мобильных устройствах(Android, iOS)"}),"\n"]})]}),"\n",(0,r.jsx)(e.p,{children:"Инструменты/приложения/расширения, которые помогут тестировщику при составлении баг репорта"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://chrome.google.com/webstore/detail/bird-eats-bug-technical-s/mdplmiioglkpgkdblijgilgebpppgblm",target:"_blank",children:"Bird Eats Bug: Technical Screen Recording"})}),"\n(расширение для Google Chrome), позволяет записывать видео действий на странице.\n2??. ",(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://www.getcloudapp.com/",target:"_blank",children:"Cloudapp"})}),", позволяет делать скриншоты экрана, записывать видео и другое."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://app.prntscr.com/en/index.html",target:"_blank",children:"Lightshot"})}),"(приложение), позволяет делать скриншоты экрана и добавлять сопровождающую информацию на скриншот."]}),"\n"]}),"\n",(0,r.jsx)(c.Z,{color:"red",children:(0,r.jsx)(e.p,{children:"Примечание: скриншоты и видео в баг репорт лучше добавлять файлом, а не ссылкой!!!"})}),"\n",(0,r.jsxs)(e.ol,{start:"4",children:["\n",(0,r.jsx)(e.li,{children:"?text"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Инструменты/приложения/расширения, которые помогут тестировщику при тестировании API"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://www.postman.com/downloads/",target:"_blank",children:"Postman"})}),"(приложение), приложение для работы с запросами, позволяет отправлять запросы с тестовыми данными, получать ответы(и многое другое)."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://proxyman.io/",target:"_blank",children:"Proxyman"})}),"(приложение, MacOS), сниффер траффика, позволяет перехватывать запросы и подменять ответы(и многое другое)."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://proxyman.io/windows",target:"_blank",children:"Proxyman"})}),"(приложение, Windows(beta))."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{children:"Виды тестирования применяемые на проекты"}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Smoke тестирование"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Это короткий цикл тестов, который направлен на проверку только основных функций определенных бизнес логикой приложения.\nТакой вид тестирования обычно применяется после обновления production сервера и направлен на проверку только основных функций\nприложения. Такое тестирование должно занимать около 15 минут.\n\nКакие проверки будут входить в Smoke тест определяет тестировщик. Итоговый набор тестов согласовывается с ПМом на проекте.\nЧасто в такой набор тестов будет входить: регистрация, авторизация, оплата, создание сущностей в приложении и другие основные функции\nприложений, в зависимости от его назначения.\n\nSmoke тестирование проводится раньше, чем проверка добавленных задач на production сервер, это нужно для того, чтобы убедиться,\nчто основные функции приложения работают стабильно.\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Регресионное тестирование"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Это набор тестов, направленный на проверку всех компонентов приложения после крупных обновлений. Производится \nтакое тестирование после значительных изменений в приложении(например, добавлении новых компонент или крупную переработку старых) и проходит\nна dev/stage сервере. Основная цель такого вида тестирования - это проверить не сломалось ли что-то в приложении после обновления, при этом \nневажно вносились ли изменения в какой-то конкретный компонент, проверить нужно всё.\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Ретест"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Набор тестов, который направлен на проверку старый багов на предмет фикса. Проводится в случае, если фича/функциональность\nуже имела дефекты, и эти дефекты были недавно исправлены. \n\n(!)Ретест охватывает только тот функционал, который был исправлен\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Ad-hoc тестирование"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Это особый вид тестирования, не предполагающий никакой подготовки или планирования, здесь нет тестовых\nсценариев, как и какого-либо ожидания от результата. Интуитивное тестирование предполагает импровизацию тестировщика.\n"})})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Monkey testing"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Это методика испытания программных продуктов, основанная на имитации случайных действий пользователя, \nкоторые никак не связаны с реальными сценариями использования систем. Может производиться тестировщиком при первом осмотре\nсделанной задачи или при включении в новый проект, или при просьбе провести короткий тест по готовой задаче на\nне знакомом проекте. Такой вид тестирования занимает 5-10 минут.\n"})})]}),"\n",(0,r.jsx)(e.h2,{children:"Использование чеклистов при тестировании задач"}),"\n",(0,r.jsx)(e.p,{children:'Чеклист - технический документ, который представляет собой набор проверок(грубо говоря "тест-кейсов") для проверки\nопределенной задачи.'}),"\n",(0,r.jsx)(e.h3,{children:"Составление чеклистов"}),"\n",(0,r.jsx)(e.p,{children:"Что должен включать в себя чеклист:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"1. Дату создания чеклиста.\n2. Дату обновления чеклиста.\n3. Окружение(ОС, браузер, версия браузера) на котором проводится тестирование.\n4. Информация о том, кто проводил тестирование.\n5. Список проверок по конкретной задаче.\n6. Фактический результат(Pass, Fail, Skip) по каждому пункту в чеклисте.\n7. Время фактического прохода по ЧЛ.\n8. Дату фактического прохода по ЧЛ.\n9. Ссылка на тестируемую страницу/задачу.\n10*. Ссылка на макет.\n"})}),"\n",(0,r.jsx)(e.p,{children:"По итогу прохождения в чеклисте остается запись о фактическом проходе чеклиста, который включает в себя:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"  1. Время и дата прохода.\n  2. Окружение на котором проходило тестирование.\n  3. Результат проверок по каждому пункту.\n  4. Указание, кто проводил тестирование по каждому пункту.\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1BZsbTFtVGtS12YrQWrExF_NevnHnAKsIa3scuQ4RLr0/edit#gid=2019189375",target:"_blank",children:"Шаблон чеклиста"})})}),"\n",(0,r.jsx)(c.Z,{color:"red",children:(0,r.jsx)(e.p,{children:"(!) Каждый новый проход по чеклисту добавляется отдельно не удаляя/редактируя прошлый проходы"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"К пунктам, которые были пропущены(статус Skip), нужно добавить комментарий с указанием причины пропуска.\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"К пунктам, по которым были ошибки(статус Fail), нужно добавить комментарий с указанием номера/ссылкой на карточку бага.\n"})}),"\n",(0,r.jsx)(e.h2,{children:"Тест кейсы \uD83D\uDCE3todo"}),"\n",(0,r.jsx)(e.p,{children:"Тест-кейс - набор входных данных, условий выполнения и ожидаемых результатов, разработанный с целью проверки того или иного свойства\nили поведения программного средства."}),"\n",(0,r.jsx)(e.h3,{children:"Составление тест кейсов"}),"\n",(0,r.jsx)(e.p,{children:"Что должен включать в себя тест кейс:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"1. Дату создания тест кейса.\n2. Дату обновления тест кейса.\n3. Название тест кейса\n4. Preconditions(предусловия)\n5. Expected result(ожидаемый результат)\n6. Test result(результат теста)\n7. Postconditions(постусловия)\n8. Окружение(ОС, браузер, версия браузера) на котором проводится тестирование.\n9. Фактический результат(Pass, Fail, Skip) по каждому пункту в тест кейсе.\n10. Время фактического прохода по тест кейсу.\n11. Дату фактического прохода по тест кейсу.\n"})}),"\n",(0,r.jsx)(e.p,{children:"По итогу прохождения в тест кейсе остается запись о фактическом проходе тест кейса, который включает в себя:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"  1. Время и дата прохода.\n  2. Окружение на котором проходило тестирование.\n  3. Результат проверок по каждому пункту.\n  4. Указание, кто проводил тестирование по каждому пункту.\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.em,{children:(0,r.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1BZsbTFtVGtS12YrQWrExF_NevnHnAKsIa3scuQ4RLr0/edit#gid=1284802605",target:"_blank",children:"Шаблон тест кейса"})})}),"\n",(0,r.jsx)(e.h3,{children:"UX \uD83D\uDCE3todo"}),"\n",(0,r.jsx)(e.h3,{children:"UI \uD83D\uDCE3todo"}),"\n",(0,r.jsx)(s.Z,{data:[["","Формат входных данных"],["","","","TXT","HTML","MD"],["Код.","WIN","1251","Pass","Pass","Pass"],["вход.","CP","866","Fail","Fail","Pass"],["данн.","KOI","8R","Pass","Skip","Pass"]]})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(x,Object.assign({},n,{children:(0,r.jsx)(t,n)}))}},6574:function(n){n.exports={layout:"Layout_layout__3sqKB",layout__column:"Layout_layout__column__RP2Ig",layout__column_left:"Layout_layout__column_left__x_wOT",layout__column_right:"Layout_layout__column_right__q2i04"}},3832:function(n){n.exports={highlight:"HighLight_highlight__Ug3iF",red:"HighLight_red__mlLDm",pink:"HighLight_pink__aIP4d",purple:"HighLight_purple__XGWTv","deep-purple":"HighLight_deep-purple__e0MOx",indigo:"HighLight_indigo__Hn4cd",blue:"HighLight_blue__1LHpt","light-blue":"HighLight_light-blue__hKZI3",cyan:"HighLight_cyan__kFbdN",teal:"HighLight_teal__JyDAU",green:"HighLight_green__96DOg","light-green":"HighLight_light-green___A_7e",lime:"HighLight_lime__gkZXv",yellow:"HighLight_yellow__YJtR_",amber:"HighLight_amber__BLbz6",orange:"HighLight_orange__zYELz","deep-orange":"HighLight_deep-orange__fu5qH",brown:"HighLight_brown__MIRlv"}},8863:function(n){n.exports={table:"Table_table__RZHnb",table__row:"Table_table__row__ss4uj",table__cell:"Table_table__cell__WT1n6"}}},function(n){n.O(0,[573,774,888,179],function(){return n(n.s=3613)}),_N_E=n.O()}]);