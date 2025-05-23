if (localStorage.sadd) {
  add = Number(localStorage.getItem("sadd"));
} else {
  add = 1;
}

if (localStorage.sclick) {
  clicks = Number(localStorage.getItem("sclick"));
} else {
  clicks = 0;
}

if (localStorage.sclispersec) {
  clispersec = Number(localStorage.getItem("sclispersec"));
} else {
  clispersec = 0;
}

if (localStorage.sclick_cosc) {
  click_cosc = Number(localStorage.getItem("sclick_cosc"));
} else {
  click_cosc = 10;
}

if (localStorage.ssecond_cost) {
  second_cost = Number(localStorage.getItem("ssecond_cost"));
} else {
  second_cost = 10;
}

function refnum(){
  document.getElementById("text").innerHTML = clicks + "$";
  document.getElementById("perclick").innerHTML = add + "$ per click";
  document.getElementById("persecond").innerHTML = clispersec + "$ per second";
  document.getElementById("COSTpc").innerHTML = "COST - "+click_cosc+"$";
  document.getElementById("COSTsc").innerHTML = "COST - "+second_cost+"$";
  localStorage.setItem("sadd", add);
  localStorage.setItem("sclick", clicks);
  localStorage.setItem("sclispersec", clispersec);
  localStorage.setItem("sclick_cosc", click_cosc);
  localStorage.setItem("ssecond_cost", second_cost);
}

function clicked() {
  clicks += add;
  refnum();
}

function upgrade() {
  if (clicks >= click_cosc) {
      clicks -= click_cosc;
      add += 1;
	  click_cosc += parseInt(click_cosc/2)
      refnum();
  }
}

function upgradecps() {
  if (clicks >= second_cost) {
      clicks -= second_cost;
      clispersec += 1;
	  second_cost += parseInt(second_cost/2 + second_cost/10)
      refnum();
  }
}

function cps() {
  clicks += clispersec
  refnum();
}

refnum();
setInterval(cps, 1000);