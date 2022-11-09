(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[442],{517:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testing/mobile_app_testing",function(){return t(8303)}])},1001:function(n,e,t){"use strict";var i=t(5893),s=t(1664),r=t.n(s),l=t(7166),c=t.n(l),o=t(6574),h=t.n(o),a=c().bind(h()),u=function(n){var e=n.children,t=n.type,s=({frontend:[{link:"/frontend#structure",text:"Структура"},{link:"/frontend#naming",text:"Именование переменных"},{link:"/frontend#common",text:"Общее соглашение"},{link:"/frontend#react",text:"React"},{link:"/frontend#ts",text:"Typescript"},{link:"/linters",text:"Линтеры"},{link:"/frontend/testing_for_developer",text:"Тестирование"},],qa:[{link:"/testing",text:"Testing"},{link:"/testing/first_steps_for_tester",text:"First Steps For Tester"},{link:"/testing/bug_report",text:"Bug Report"},{link:"/testing/checklist",text:"Checklist"},{link:"/testing/test_design",text:"Test Design"},{link:"/testing/test_cases",text:"Test Cases"},{link:"/testing/api_testing",text:"API Testing"},{link:"/testing/mobile_app_testing",text:"Mobile App Testing"},],backend:[]})[void 0===t?"qa":t].map(function(n){var e=n.link,t=n.text;return(0,i.jsx)("li",{children:(0,i.jsx)(r(),{href:e,children:t})},e)});return(0,i.jsxs)("div",{className:a("layout"),children:[(0,i.jsx)("div",{className:a("layout__column","layout__column_left"),children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(r(),{href:"/",children:"Главная"})}),s]})}),(0,i.jsx)("div",{className:a("layout__column","layout__column_right"),children:e})]})};e.Z=u},8303:function(n,e,t){"use strict";t.r(e),t.d(e,{meta:function(){return l}});var i=t(5893),s=t(1151),r=t(1001),l={author:"DaniilBaranov"},c=function(n){var e=n.children;return(0,i.jsx)(r.Z,{meta:l,type:"qa",children:e})};function o(n){var e=Object.assign({h1:"h1",p:"p",h2:"h2",em:"em",pre:"pre",code:"code",h3:"h3",h4:"h4"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{children:"Тестирование мобильных приложений"}),"\n",(0,i.jsx)(e.p,{children:"Тестирование мобильных приложений – это процесс, с помощью которого прикладное ПО, разработанное для портативных мобильных устройств,\nпроверяется на его функциональность, удобство использования и совместимость."}),"\n",(0,i.jsx)(e.h2,{children:"Чек-лист тестирования мобильного приложения"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)("a",{href:"https://drive.google.com/file/d/195kGuw1ueFx23ywruLlNwjC6i84Oa6Qk/view",target:"_blank",children:"Общий чек-лист по тестированию моб. приложений"})})}),"\n",(0,i.jsx)(e.h2,{children:"Виды тестирования мобильных приложений(дополнить)"}),"\n",(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Тестирование совместимости"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Мобильные устройства различаются в зависимости от платформы, модели и версии их операционной системы. Важно выбрать такое подмножество \nустройств, которое будет соответствовать вашему приложению.\n"})})]}),"\n",(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Тестирование пользовательского интерфейса"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Пользовательский опыт является ключевым элементом, при тестировании приложения. Ведь наше приложение разрабатывается именно для \nконечных пользователей. Вам следует качественно проверить удобство использования приложения, навигацию по его элементам и контент. \nТестируйте меню, опции, кнопки, закладки, историю, настройки и навигацию приложения.\n"})})]}),"\n",(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Тестирование внешних факторов"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Приложения для мобильных устройств не будут единственными приложениями на устройстве пользователя, вместе с вашим приложением \nбудут установлены приложения от сторонних разработчиков. Возможно десятки таких приложений. Следовательно, вашему приложению \nпридётся взаимодействовать с этими сторонними приложениями и прерывать работу различных функций устройства, таких как различные \nтипы сетевых подключений, обращение к SD-карте, телефонные звонки и другие функции устройства.\n"})})]}),"\n",(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Тестирование доступности"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Мобильными устройствами могут пользоваться различные люди с ограниченными возможностями. По этой причине важно  протестировать \nвозможность работы с приложением людей с дальтонизмом, нарушениями слуха, проблемами пожилого возраста и другими возможными проблемами.  \nТакое тестирование является важной частью общего тестирования юзабилити.\n"})})]}),"\n",(0,i.jsx)(e.h3,{children:"Использование снифферов трафика при тестировании мобильных приложений"}),"\n",(0,i.jsx)(e.p,{children:"Для тестирования взаимодействия с бэкенд частью приложения, работающей на сервере, — применяют снифферы. Сниффер — это анализатор трафика,\nто есть всей информации, которая проходит через компьютерные сети. С его помощью можно проверять http-запросы, различные коды ответов и реакцию\nприложения на них. Один из самых популярных снифферов — Charles."}),"\n",(0,i.jsx)(e.p,{children:"Charles — инструмент для мониторинга HTTP/HTTPS трафика. Программа работает как прокси-сервер между мобильным приложением (в нашем случае)\nи сервером этого приложения. Charles записывает и сохраняет все запросы, которые проходят через подключенный к нему телефон и позволяет их редактировать."}),"\n",(0,i.jsx)(e.h4,{children:"Rewrite settings (дополнить)"}),"\n",(0,i.jsx)(e.p,{children:"Для подмены серверных данных открываем Tools > Rewrite."}),"\n",(0,i.jsx)(e.p,{children:"Следующий шаг — создать правило подмены. К сожалению, Charles не умеет подменять информацию по ключу.\nНужно вручную прописывать ключ и значение, а затем писать то, что мы ходим увидеть."}),"\n",(0,i.jsx)(e.h4,{children:"Breakpoints(дополнить)"}),"\n",(0,i.jsx)(e.p,{children:"При подмене запросов с помощью Rewrite settings в Charles невозможно редактировать кириллицу. При изменении любой информации на\nкириллицу ваши логи будут состоять из множества вопросительных знаков."}),"\n",(0,i.jsx)(e.p,{children:"Этот недостаток можно обойти с помощью другой функции Charles — breakpoints. Идея похожая, но только ответы останавливаются\nпрямо перед передачей в приложение, и их можно редактировать своими руками в реальном времени."})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(c,Object.assign({},n,{children:(0,i.jsx)(o,n)}))}},6574:function(n){n.exports={layout:"Layout_layout__3sqKB",layout__column:"Layout_layout__column__RP2Ig",layout__column_left:"Layout_layout__column_left__x_wOT",layout__column_right:"Layout_layout__column_right__q2i04"}},1151:function(n,e,t){"use strict";t.d(e,{ah:function(){return r}});var i=t(7294);let s=i.createContext({});function r(n){let e=i.useContext(s);return i.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}}},function(n){n.O(0,[146,774,888,179],function(){return n(n.s=517)}),_N_E=n.O()}]);