(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[967],{2023:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testing/checklist",function(){return t(8714)}])},1001:function(e,n,t){"use strict";var i=t(5893),r=t(1664),l=t.n(r),s=t(7166),h=t.n(s),c=t(6574),o=t.n(c),g=h().bind(o()),a=function(e){var n=e.children,t=e.type,r=({frontend:[{link:"/frontend#structure",text:"Структура"},{link:"/frontend#naming",text:"Именование переменных"},{link:"/frontend#common",text:"Общее соглашение"},{link:"/frontend#react",text:"React"},{link:"/frontend#ts",text:"Typescript"},{link:"/linters",text:"Линтеры"},{link:"/frontend/testing_for_developer",text:"Тестирование"},],qa:[{link:"/testing",text:"Testing"},{link:"/testing/first_steps_for_tester",text:"First Steps For Tester"},{link:"/testing/bug_report",text:"Bug Report"},{link:"/testing/checklist",text:"Checklist"},{link:"/testing/test_design",text:"Test Design"},{link:"/testing/test_cases",text:"Test Cases"},{link:"/testing/api_testing",text:"API Testing"},],backend:[]})[void 0===t?"qa":t].map(function(e){var n=e.link,t=e.text;return(0,i.jsx)("li",{children:(0,i.jsx)(l(),{href:n,children:t})},n)});return(0,i.jsxs)("div",{className:g("layout"),children:[(0,i.jsx)("div",{className:g("layout__column","layout__column_left"),children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(l(),{href:"/",children:"Главная"})}),r]})}),(0,i.jsx)("div",{className:g("layout__column","layout__column_right"),children:n})]})};n.Z=a},8322:function(e,n,t){"use strict";var i=t(5893),r=t(7166),l=t.n(r),s=t(3832),h=t.n(s),c=l().bind(h()),o=function(e){var n=e.children,t=e.color;return(0,i.jsx)("div",{className:c("highlight",t),children:(0,i.jsx)("div",{className:"highlight__inner",children:n})})};n.Z=o},8714:function(e,n,t){"use strict";t.r(n),t.d(n,{meta:function(){return h}});var i=t(5893),r=t(1151),l=t(8322),s=t(1001),h={author:"DaniilBaranov"},c=function(e){var n=e.children;return(0,i.jsx)(s.Z,{meta:h,type:"qa",children:n})};function o(e){var n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",em:"em"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Использование чеклистов при тестировании задач"}),"\n",(0,i.jsx)(n.p,{children:'Чеклист - технический документ, который представляет собой набор проверок(грубо говоря "тест-кейсов") для проверки\nопределенной задачи.'}),"\n",(0,i.jsx)(n.h2,{children:"Составление чеклистов"}),"\n",(0,i.jsx)(n.p,{children:"Что должен включать в себя чеклист:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1. Дату создания чеклиста.\n2. Дату обновления чеклиста.\n3. Окружение(ОС, браузер, версия браузера) на котором проводится тестирование.\n4. Информация о том, кто проводил тестирование.\n5. Список проверок по конкретной задаче.\n6. Фактический результат(Pass, Fail, Skip) по каждому пункту в чеклисте.\n7. Время фактического прохода по ЧЛ.\n8. Дату фактического прохода по ЧЛ.\n9. Ссылка на тестируемую страницу/задачу.\n10*. Ссылка на макет.\n"})}),"\n",(0,i.jsx)(n.p,{children:"По итогу прохождения в чеклисте остается запись о фактическом проходе чеклиста, который включает в себя:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  1. Время и дата прохода.\n  2. Окружение на котором проходило тестирование.\n  3. Результат проверок по каждому пункту.\n  4. Указание, кто проводил тестирование по каждому пункту.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1BZsbTFtVGtS12YrQWrExF_NevnHnAKsIa3scuQ4RLr0/edit#gid=2019189375",target:"_blank",children:"Шаблон чеклиста"})})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1BZsbTFtVGtS12YrQWrExF_NevnHnAKsIa3scuQ4RLr0/edit#gid=1790220275",target:"_blank",children:"Шаблон чеклиста по верстке"})})}),"\n",(0,i.jsx)(l.Z,{color:"red",children:(0,i.jsx)(n.p,{children:"(!) Каждый новый проход по чеклисту добавляется отдельно не удаляя/редактируя прошлый проходы."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"К пунктам, которые были пропущены(статус Skip), нужно добавить комментарий с указанием причины пропуска.\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"К пунктам, по которым были ошибки(статус Fail), нужно добавить комментарий с указанием номера/ссылкой на карточку бага.\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(c,Object.assign({},e,{children:(0,i.jsx)(o,e)}))}},6574:function(e){e.exports={layout:"Layout_layout__3sqKB",layout__column:"Layout_layout__column__RP2Ig",layout__column_left:"Layout_layout__column_left__x_wOT",layout__column_right:"Layout_layout__column_right__q2i04"}},3832:function(e){e.exports={highlight:"HighLight_highlight__Ug3iF",red:"HighLight_red__mlLDm",pink:"HighLight_pink__aIP4d",purple:"HighLight_purple__XGWTv","deep-purple":"HighLight_deep-purple__e0MOx",indigo:"HighLight_indigo__Hn4cd",blue:"HighLight_blue__1LHpt","light-blue":"HighLight_light-blue__hKZI3",cyan:"HighLight_cyan__kFbdN",teal:"HighLight_teal__JyDAU",green:"HighLight_green__96DOg","light-green":"HighLight_light-green___A_7e",lime:"HighLight_lime__gkZXv",yellow:"HighLight_yellow__YJtR_",amber:"HighLight_amber__BLbz6",orange:"HighLight_orange__zYELz","deep-orange":"HighLight_deep-orange__fu5qH",brown:"HighLight_brown__MIRlv"}},1151:function(e,n,t){"use strict";t.d(n,{ah:function(){return l}});var i=t(7294);let r=i.createContext({});function l(e){let n=i.useContext(r);return i.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[146,774,888,179],function(){return e(e.s=2023)}),_N_E=e.O()}]);