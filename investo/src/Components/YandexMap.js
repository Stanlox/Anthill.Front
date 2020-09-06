import React, { Component } from 'react';
import '../style/YandexMap.css';


export default class RenderGoogleMap extends Component {
    componentDidMount() {
        window.ymaps.ready(() => {
            this.myMap = new window.ymaps.Map("map", {
                center: [53.877852, 27.542990],
                zoom: 17
            });
        });
    }

    componentWillUnmount() {
        this.myMap.destroy();
    }

    render() {
        return (
            <div>
                <div className="flex-container">
                    <div className="first-block">
                        <h1><b>Контакты</b></h1>
                        <h4>220039, г.Минск, ул.Воронянского, д.10<bt /></h4>
                    </div>
                    <div className="second-block mb-2">
                        <h4><br /><br />Контактый телефон: +375 (44) 535-88-58</h4>
                    </div>
                </div>
                <div id="map" style={{ 'width': 800, 'height': 400 }} className="mt-4"></div>
            </div>
        );
    }
}
