import './css/style.css';
import Icon from './assets/img/icon.png';
import printMe from './js/components/print';
import realIcon from './assets/img/mountains.png';

const link = document.querySelector('#Icon');

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML ='Hello webpack!!';
    element.classList.add('hello');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);


    return element;
}

const IconImage =()=>{
    link.rel = 'icon';
    link.type = "favicon/x-icon";
    link.href = realIcon;
    return link

}



document.body.appendChild(component());
document.head.appendChild(IconImage());
console.log(link);
