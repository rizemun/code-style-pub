(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{7796:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testing",function(){return t(4363)}])},1001:function(n,e,t){"use strict";var i=t(5893),r=t(1664),l=t.n(r),h=t(7166),s=t.n(h),c=t(6574),o=t.n(c),d=s().bind(o()),g=function(n){var e=n.children,t=n.type,r=({frontend:[{link:"/frontend#structure",text:"Структура"},{link:"/frontend#naming",text:"Именование переменных"},{link:"/frontend#common",text:"Общее соглашение"},{link:"/frontend#react",text:"React"},{link:"/frontend#ts",text:"Typescript"},{link:"/linters",text:"Линтеры"},{link:"/frontend/testing_for_developer",text:"Тестирование"},],qa:[{link:"/testing",text:"Testing"},{link:"/testing/first_steps_for_tester",text:"First Steps For Tester"},{link:"/testing/bug_report",text:"Bug Report"},{link:"/testing/checklist",text:"Checklist"},{link:"/testing/test_design",text:"Test Design"},{link:"/testing/api_testing",text:"API Testing"},],backend:[]})[void 0===t?"qa":t].map(function(n){var e=n.link,t=n.text;return(0,i.jsx)("li",{children:(0,i.jsx)(l(),{href:e,children:t})},e)});return(0,i.jsxs)("div",{className:d("layout"),children:[(0,i.jsx)("div",{className:d("layout__column","layout__column_left"),children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(l(),{href:"/",children:"Главная"})}),r]})}),(0,i.jsx)("div",{className:d("layout__column","layout__column_right"),children:e})]})};e.Z=g},8322:function(n,e,t){"use strict";var i=t(5893),r=t(7166),l=t.n(r),h=t(3832),s=t.n(h),c=l().bind(s()),o=function(n){var e=n.children,t=n.color;return(0,i.jsx)("div",{className:c("highlight",t),children:(0,i.jsx)("div",{className:"highlight__inner",children:e})})};e.Z=o},4363:function(n,e,t){"use strict";t.r(e),t.d(e,{meta:function(){return h}});var i=t(5893),r=t(1151);t(8322);var l=t(1001),h={author:"DaniilBaranov"},s=function(n){var e=n.children;return(0,i.jsx)(l.Z,{meta:h,type:"qa",children:e})};function c(n){var e=Object.assign({h1:"h1",p:"p",h3:"h3",ol:"ol",li:"li",pre:"pre",code:"code",h2:"h2",em:"em"},(0,r.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{children:"Testing"}),"\n",(0,i.jsx)(e.p,{children:"Тестирование программного обеспечения — важный этап процесса разработки.\nСуществуют различные методы тестирования, позволяющие обнаружить ошибки и проблемы, прежде чем это сделает пользователь.\nВажно не только найти ошибки и проблемы в ПО, а и уметь правильно описать и донести эти проблемы до команды разработки,\nчтобы устранить дефекты качественно и вовремя. Далее рассмотрим несколько видов документов, которые будут использоваться при\nформировании отчетов о тестировании, и некоторые подходы к тестированию."}),"\n",(0,i.jsx)(e.h3,{children:"Работа с требованиями(дополнить)"}),"\n",(0,i.jsx)(e.p,{children:"Перед началом тестирования конкретной задачи нужно изучить требования на предмет:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Полноты"}),"\n",(0,i.jsx)(e.li,{children:"Однозначности"}),"\n",(0,i.jsx)(e.li,{children:"Корректности"}),"\n",(0,i.jsx)(e.li,{children:"Непротиворечивости"}),"\n",(0,i.jsx)(e.li,{children:"Проверяемости"}),"\n",(0,i.jsx)(e.li,{children:"Необходимости"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Если требования не соответствуют выше изложенным пунктам, то нужно вынести вопрос ПМу, чтобы, при необходимости, дополнительно уточнить у клиента и дополнить\nтребования.\n"})}),"\n",(0,i.jsx)(e.p,{children:"Часто в требованиях могут быть пропущены и не учтены негативные сценарии. Поэтому, если столкнулись со сценариями, где конечный результат не\nочевиден, стоит уточнить результаты еще до начала разработки или как можно раньше в ходе разработки."}),"\n",(0,i.jsx)(e.p,{children:"При тестировании важно понимать, что определенная функциональность, должна не просто работать, но и выполнять именно те функции,\nкоторые были описаны в требованиях."}),"\n",(0,i.jsx)(e.p,{children:"Например:"}),"\n",(0,i.jsx)(e.p,{children:'Если у нас есть кнопка "Оставить отзыв", то только лишь сообщения об успешной отправке отзыва\nнедостаточно, чтобы считать, что всё отработало верно. Нужно чтобы этот отзыв также отображался на странице и сохранялся в БД.'}),"\n",(0,i.jsx)(e.h2,{children:"Тест кейсы \uD83D\uDCE3todo(дополнить)"}),"\n",(0,i.jsx)(e.p,{children:"Тест-кейс - набор входных данных, условий выполнения и ожидаемых результатов, разработанный с целью проверки того или иного свойства,\nили поведения программного продукта."}),"\n",(0,i.jsx)(e.h3,{children:"Составление тест кейсов"}),"\n",(0,i.jsx)(e.p,{children:"Что должен включать в себя тест кейс:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"1. Дату создания тест кейса.\n2. Дату обновления тест кейса.\n3. Название тест кейса.\n4. Preconditions(предусловия).\n5. Expected result(ожидаемый результат).\n6. Test result(результат теста).\n7. Postconditions(постусловия).\n8. Фактический результат(Pass, Fail, Skip) по каждому пункту в тест кейсе.\n9. Время фактического прохода по тест кейсу.\n10. Дату фактического прохода по тест кейсу.\n"})}),"\n",(0,i.jsx)(e.p,{children:"По итогу прохождения в тест кейсе остается запись о фактическом проходе тест кейса, который включает в себя:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"1. Время и дата прохода.\n2. Результат проверок по каждому пункту.\n3. Указание, кто проводил тестирование по каждому пункту.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1BZsbTFtVGtS12YrQWrExF_NevnHnAKsIa3scuQ4RLr0/edit#gid=1284802605",target:"_blank",children:"Шаблон тест кейса в Google sheets"})})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)("a",{href:"https://share.getcloudapp.com/2Nu79qeL",target:"_blank",children:"Пример тест кейса в QASE"})})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)("a",{href:"https://share.getcloudapp.com/qGuxBR0A",target:"_blank",children:"Еще пример тест кейса в QASE"})})}),"\n",(0,i.jsx)(e.p,{children:"To be continued..."})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(s,Object.assign({},n,{children:(0,i.jsx)(c,n)}))}},6574:function(n){n.exports={layout:"Layout_layout__3sqKB",layout__column:"Layout_layout__column__RP2Ig",layout__column_left:"Layout_layout__column_left__x_wOT",layout__column_right:"Layout_layout__column_right__q2i04"}},3832:function(n){n.exports={highlight:"HighLight_highlight__Ug3iF",red:"HighLight_red__mlLDm",pink:"HighLight_pink__aIP4d",purple:"HighLight_purple__XGWTv","deep-purple":"HighLight_deep-purple__e0MOx",indigo:"HighLight_indigo__Hn4cd",blue:"HighLight_blue__1LHpt","light-blue":"HighLight_light-blue__hKZI3",cyan:"HighLight_cyan__kFbdN",teal:"HighLight_teal__JyDAU",green:"HighLight_green__96DOg","light-green":"HighLight_light-green___A_7e",lime:"HighLight_lime__gkZXv",yellow:"HighLight_yellow__YJtR_",amber:"HighLight_amber__BLbz6",orange:"HighLight_orange__zYELz","deep-orange":"HighLight_deep-orange__fu5qH",brown:"HighLight_brown__MIRlv"}},1151:function(n,e,t){"use strict";t.d(e,{ah:function(){return l}});var i=t(7294);let r=i.createContext({});function l(n){let e=i.useContext(r);return i.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}}},function(n){n.O(0,[146,774,888,179],function(){return n(n.s=7796)}),_N_E=n.O()}]);