import { ProxyState } from "../AppState.js"
import Clock from "../Models/Clock.js"
import { api } from "./AxiosService.js";

class ClockService {

    runClock() {
        setInterval(() => clock(), 1000);


    //This lights up the dots to show the binary and I think does the addition underneath the dots
    var lighting = function (n, t) {
        let na = t + '-1';
        let n1a = document.getElementById(na)
        let nb = t + '-2';
        let n1b = document.getElementById(nb)
        let nc = t + '-4';
        let n1c = document.getElementById(nc)
        let nd = t + '-8';
        let n1d = document.getElementById(nd)

        //this adds/removes classes based on date/time

        if (n == 1) {
            // $('.' + t + '-1').addClass('on').removeClass('off');
            n1a.classList.add('on')
            n1a.classList.remove('off')
            n1b.classList.add('off')
            n1b.classList.remove('on')
            n1c.classList.add('off')
            n1c.classList.remove('on')
            n1d.classList.add('off')
            n1d.classList.remove('on')

        } else if (n == 2) {
            n1a.classList.add('off')
            n1a.classList.remove('on')
            n1b.classList.add('on')
            n1b.classList.remove('off')
            n1c.classList.add('off')
            n1c.classList.remove('on')
            n1d.classList.add('off')
            n1d.classList.remove('on')

        } else if (n == 3) {
            n1a.classList.add('on')
            n1a.classList.remove('off')
            n1b.classList.add('on')
            n1b.classList.remove('off')
            n1c.classList.add('off')
            n1c.classList.remove('on')
            n1d.classList.add('off')
            n1d.classList.remove('on')

        } else if (n == 4) {
            n1a.classList.add('off')
            n1a.classList.remove('on')
            n1b.classList.add('off')
            n1b.classList.remove('on')
            n1c.classList.add('on')
            n1c.classList.remove('off')
            n1d.classList.add('off')
            n1d.classList.remove('on')

        } else if (n == 5) {
            n1a.classList.add('on')
            n1a.classList.remove('off')
            n1b.classList.add('off')
            n1b.classList.remove('on')
            n1c.classList.add('on')
            n1c.classList.remove('off')
            n1d.classList.add('off')
            n1d.classList.remove('on')

        } else if (n == 6) {
            n1a.classList.add('off')
            n1a.classList.remove('on')
            n1b.classList.add('on')
            n1b.classList.remove('off')
            n1c.classList.add('on')
            n1c.classList.remove('off')
            n1d.classList.add('off')
            n1d.classList.remove('on')

        } else if (n == 7) {
            n1a.classList.add('on')
            n1a.classList.remove('off')
            n1b.classList.add('on')
            n1b.classList.remove('off')
            n1c.classList.add('on')
            n1c.classList.remove('off')
            n1d.classList.add('off')
            n1d.classList.remove('on')

        } else if (n == 8) {
            n1a.classList.add('off')
            n1a.classList.remove('on')
            n1b.classList.add('off')
            n1b.classList.remove('on')
            n1c.classList.add('off')
            n1c.classList.remove('on')
            n1d.classList.add('on')
            n1d.classList.remove('off')

        } else if (n == 9) {
            n1a.classList.add('on')
            n1a.classList.remove('off')
            n1b.classList.add('off')
            n1b.classList.remove('on')
            n1c.classList.add('off')
            n1c.classList.remove('on')
            n1d.classList.add('on')
            n1d.classList.remove('off')

        } else {
            n1a.classList.add('off')
            n1a.classList.remove('on')
            n1b.classList.add('off')
            n1b.classList.remove('on')
            n1c.classList.add('off')
            n1c.classList.remove('on')
            n1d.classList.add('off')
            n1d.classList.remove('on')

        };

    };

    //logic to run the clock
    let clock = function () {

        //getting current time
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        //reduces hour, minute, and second values single digit numbers to run through the lighting function.
        let s2 = seconds % 10;
        let s1 = (seconds - s2) / 10 % 10;
        let m2 = minutes % 10;
        let m1 = (minutes - m2) / 10 % 10;
        let h2 = hours % 10;
        let h1 = (hours - h2) / 10 % 10;

        //passing current time and class identifier to lighting function
        lighting(s2, 's-2');
        lighting(s1, 's-1');
        lighting(m2, 'm-2');
        lighting(m1, 'm-1');
        lighting(h2, 'h-2');
        lighting(h1, 'h-1');

        // //pushing the text for the standard clock under the binary
        // // @ts-ignore
        // document.getElementById('dec-hour1').innerText = h1
        // // @ts-ignore
        // document.getElementById('dec-hour2').innerText = h2
        // // @ts-ignore
        // document.getElementById('dec-minute1').innerText = m1
        // // @ts-ignore
        // document.getElementById('dec-minute2').innerText = m2
        // // @ts-ignore
        // document.getElementById('dec-second1').innerText = s1
        // // @ts-ignore
        // document.getElementById('dec-second2').innerText = s2

    };
  }


}

const clockService = new ClockService();
export default clockService;
