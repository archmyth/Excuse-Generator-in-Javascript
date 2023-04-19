/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let when = ['before the class', 'when I finished', 'during my lunch', 'while I was praying'];
  let who = ['The dog', 'My grandma', 'His turtle', 'My bird', 'Crazy ', 'old driver'];
  let action = ['ate', 'took my', 'crushed', 'yelled at my', 'kicked my', 'stole my', 'broke my'];
  let what = ['my homework', 'the keys', 'the car', 'shirt', 'computer', 'phone', 'shoe'];
  let where = ['on the road', 'in my house', 'at the office', 'in my driveway', 'near the mall', 'near the toilet', 'at the bus station'];
  let rdm1 = Math.floor((Math.random() * when.length));
  let rdm2 = Math.floor((Math.random() * who.length));
  let rdm3 = Math.floor((Math.random() * action.length));
  let rdm4 = Math.floor((Math.random() * what.length));
  let rdm5 = Math.floor((Math.random() * where.length));

  document.querySelector('#theexcuse').innerHTML = when[rdm1]+who[rdm2]+action[rdm3]+what[rdm4]+where[rdm5]
};
