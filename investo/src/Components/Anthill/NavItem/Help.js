import aboutCrow from '../../../img/aboutCrow.jpg';
import React, { Component } from 'react';;


export default class Help extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <img src={aboutCrow} className="img-fluid" />
                <h3><b>Так что же такое "Муравейник", и почему мы не имеем отношения к муравьям?</b></h3>
                <p>Сейчас Муравейник это наша (и если вы это читаете, то и ваша) Вселенная краудфандинга. Это целое сообщество, которое объединяет музыкантов, актеров, дизайнеров, писателей, спортсменов, фотографов, предпринимателей, режиссеров, программистов и мечтателей. Все вместе мы создаем условия для тех, кто хочет реализовать свою идею, показать потенциальным покупателям свой продукт, получить первые предзаказы и средства для дальнейшего масштабирования и развития своих проектов.</p>
                <h3><b>Зачем всё это нам или какова наша выгода?</b></h3>
                <p>Размещение на площадке Муравейника бесплатное. Мы взимаем комиссию только при успешном завершении проекта в размере 10% (комиссия Муравейника- 9,5%, комиссия банка - 0,5%)</p>
                <h3><b>Кто и зачем поддерживает проекты</b></h3>
                <p>Обычно люди поддерживают проекты потому что:<br /></p>
                <p>- хотят быть причастными к реализации важной идеи или инициативы<br /></p>
                <p>- хотят поддержать талантливого автора в его начинании и не только<br /></p>
                <p>- хотят получить уникальные вознаграждения по выгодной цене или с определенным бонусом.<br /></p>
                <h3><b>Что бэкеры получают взамен?</b></h3>
                <p>Бэкеры за поддержку проекта получают различные вознаграждения, предлагаемые автором проекта, начиная от открытки и заканчивая продуктом, создаваемым в результате реализации проекта. Как создать отличные лоты для своей кампании, вы можете почитать в нашем Учебнике.</p>
                <h3><b>Как долго проект храниться на муравейнике?</b></h3>
                <p>Проекты не удаляются с сайта Муравейнька после их завершения. В финансировании проекта принимает участие много людей, и он перестает быть собственностью одного автора, а становится результатом работы сообщества.</p>
            </>
        );
    }
}