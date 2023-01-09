"use strict";
const info = document.getElementById("info");
const submit = document.getElementById("submit");
const email = document.getElementById("email");
const form = document.getElementById("form");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const input = email.value;
  if (!input.match(regex)) {
    alert("Please enter email");
  } else {
    form.classList.add("hidden");
    info.classList.remove("hidden");
  }
});
// 1 thằng kinh nghiệm
// View-more cho 1 phan (kinh nghiem)
const exd = document.getElementById("exd");
const btMoreExd = document.getElementById("bt-more-exd");
const btLessExd = document.getElementById("bt-less-exd");
const mainExd = document.getElementById("main-exd");
//

function mouseOnExd() {
  btMoreExd.classList.remove("hidden");
}
function mouseOutExd() {
  btMoreExd.classList.add("hidden");
}

// Kinh Nghiem
exd.addEventListener("mouseenter", mouseOnExd);
exd.addEventListener("mouseleave", mouseOutExd);
// Click more
btMoreExd.addEventListener("click", function () {
  mainExd.classList.remove("hidden");
  exd.removeEventListener("mouseenter", mouseOnExd);
  btMoreExd.classList.add("hidden");
});
// Click less
btLessExd.addEventListener("click", function () {
  exd.addEventListener("mouseenter", mouseOnExd);
  mainExd.classList.add("hidden");
});

// ky nang
const ski = document.getElementById("skill");
const btMoreSkill = document.getElementById("bt-more-skill");
const btLessSkill = document.getElementById("bt-less-skill");
const mainSkill = document.getElementById("main-skill");

function mouseOnSkill() {
  btMoreSkill.classList.remove("hidden");
}
function mouseOutSkill() {
  btMoreSkill.classList.add("hidden");
}
ski.addEventListener("mouseenter", mouseOnSkill);
ski.addEventListener("mouseleave", mouseOutSkill);
// Click more
btMoreSkill.addEventListener("click", function () {
  mainSkill.classList.remove("hidden");
  ski.removeEventListener("mouseenter", mouseOnSkill);
  btMoreSkill.classList.add("hidden");
});
// Click less
btLessSkill.addEventListener("click", function () {
  ski.addEventListener("mouseenter", mouseOnSkill);
  mainSkill.classList.add("hidden");
});

// Hoạt động
const act = document.getElementById("act");
const btMoreAct = document.getElementById("bt-more-act");
const btLessAct = document.getElementById("bt-less-act");
const mainAct = document.getElementById("main-act");
// Chức năng đưa hiện

function mouseOnAct() {
  btMoreAct.classList.remove("hidden");
}
function mouseOutAct() {
  btMoreAct.classList.add("hidden");
}
act.addEventListener("mouseenter", mouseOnAct);
act.addEventListener("mouseleave", mouseOutAct);
//click more
btMoreAct.addEventListener("click", function () {
  mainAct.classList.remove("hidden");
  act.removeEventListener("mouseenter", mouseOnAct);
  btMoreAct.classList.add("hidden");
});
// Click less
btLessAct.addEventListener("click", function () {
  act.addEventListener("mouseenter", mouseOnAct);
  mainAct.classList.add("hidden");
});

//So thich
const hab = document.getElementById("hab");
const btMoreHab = document.getElementById("bt-more-hab");
const btLessHab = document.getElementById("bt-less-hab");
const mainHab = document.getElementById("main-hab");

function mouseOnHab() {
  btMoreHab.classList.remove("hidden");
}
function mouseOutHab() {
  btMoreHab.classList.add("hidden");
}
// Chức năng đưa hiện
hab.addEventListener("mouseenter", mouseOnHab);
hab.addEventListener("mouseleave", mouseOutHab);
//
btMoreHab.addEventListener("click", function () {
  mainHab.classList.remove("hidden");
  hab.removeEventListener("mouseenter", mouseOnHab);
  btMoreHab.classList.add("hidden");
});
// Click less
btLessHab.addEventListener("click", function () {
  hab.addEventListener("mouseenter", mouseOnHab);
  mainHab.classList.add("hidden");
});

//
// Ngon Ngu
const lan = document.getElementById("language");
const btMoreLan = document.getElementById("bt-more-lan");
const btLessLan = document.getElementById("bt-less-lan");
const mainLan = document.getElementById("main-lan");

function mouseOnLan() {
  btMoreLan.classList.remove("hidden");
}
function mouseOutlan() {
  btMoreLan.classList.add("hidden");
}

// Chức năng đưa hiện
lan.addEventListener("mouseenter", mouseOnLan);
lan.addEventListener("mouseleave", mouseOutlan);
//click more
btMoreLan.addEventListener("click", function () {
  mainLan.classList.remove("hidden");
  lan.removeEventListener("mouseenter", mouseOnLan);
  btMoreLan.classList.add("hidden");
});
// Click less
btLessLan.addEventListener("click", function () {
  lan.addEventListener("mouseenter", mouseOnLan);
  mainLan.classList.add("hidden");
});
//Hoc van
const knowledge = document.getElementById("knowledge");
const btMoreLearn = document.getElementById("bt-more-learn");
const btLessLearn = document.getElementById("bt-less-learn");
const mainLearn = document.getElementById("main-learn");
// Chức năng đưa hiện

function mouseOnKno() {
  btMoreLearn.classList.remove("hidden");
}
function mouseOutKno() {
  btMoreLearn.classList.add("hidden");
}
knowledge.addEventListener("mouseenter", mouseOnKno);
knowledge.addEventListener("mouseleave", mouseOutKno);
//click more
btMoreLearn.addEventListener("click", function () {
  knowledge.removeEventListener("mouseenter", mouseOnKno);
  mainLearn.classList.remove("hidden");
  btMoreLearn.classList.add("hidden");
});
// Click less
btLessLearn.addEventListener("click", function () {
  knowledge.addEventListener("mouseenter", mouseOnKno);
  mainLearn.classList.add("hidden");
});
