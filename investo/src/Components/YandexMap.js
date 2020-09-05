import React, {Component} from 'react';


export default class RenderGoogleMap extends Component{
    componentDidMount(){
        const script = document.createElement("script");    
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5c646b1b72c5b5f495d84f42e09035d21936513905c918480b6875af38cef75a&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
        script.async = true;
        document.body.append(script);
    }

    componentWillUnmount(){
        const script = document.createElement("script");    
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5c646b1b72c5b5f495d84f42e09035d21936513905c918480b6875af38cef75a&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
        script.async = true;
        document.body.replaceChild(script);
    }

    render(){
        return(<p></p>);
    }
}
