import {Component} from '@angular/core';
import {Phones} from './shared/phones';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent{
    title = 'Catalog of phone';
    phones = PHONES;
}

const PHONES: Phones[] = [
    { img: './app/imgPhones/Xiaomi_Redmi_4X_2_16Gb.jpg',
        name: 'Xiaomi Redmi 4X 2 16Gb',
        typephone: 'Смартфон',
        system: 'Android 6.0',
        memory: '2 Гб, 16 Гб встроенной',
        screen: '5"',
        camera: 'тыловая 13 Мп, со вспышкой, фронтальная 7 Мп'},
    { img: './app/imgPhones/Apple_iPhone_7_32Gb.jpg',
        name: 'Apple iPhone 7 32Gb',
        typephone: 'Смартфон',
        system: 'iOS 10',
        memory: '32 Гб встроенной',
        screen: '4.7"',
        camera: 'тыловая 12 Мп, со вспышкой, фронтальная 7 Мп'},
    { img: './app/imgPhones/Samsung_Galaxy_J7_(2017)_16Gb.jpg',
        name: 'Samsung Galaxy J7 16Gb',
        typephone: 'Смартфон',
        system: 'Android 7.0',
        memory: '3 Гб, 16 Гб встроенной',
        screen: '5.5"',
        camera: 'тыловая 13 Мп, со вспышкой, фронтальная 13 Мп'},
];