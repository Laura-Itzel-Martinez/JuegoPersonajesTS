"use strict";
var dragonBall = /** @class */ (function () {
    function dragonBall(nombre) {
        this.vida = 100;
        this.patear = 100;
        this.SuperSayajinBlue = 100;
        this.nombre = "";
        this.nombre = nombre;
    }
    dragonBall.prototype.ataque = function (jugador) {
        this.patear -= 10;
        this.SuperSayajinBlue -= 50;
        this.estado(jugador);
    };
    dragonBall.prototype.curar = function (jugador) {
        this.vida += 20;
        this.patear -= 10;
        this.SuperSayajinBlue -= 50;
        this.estado(jugador);
    };
    dragonBall.prototype.defender = function (jugador) {
        this.patear -= 10;
        this.SuperSayajinBlue -= 50;
        this.estado(jugador);
    };
    dragonBall.prototype.revivir = function (jugador) {
        this.vida += 23;
        this.patear -= 10;
        this.SuperSayajinBlue -= 50;
        this.estado(jugador);
    };
    dragonBall.prototype.recuperarEnergia = function (jugador) {
        this.vida += 20;
        this.patear -= 10;
        this.SuperSayajinBlue -= 50;
        this.estado(jugador);
    };
    dragonBall.prototype.estado = function (jugador) {
        console.log(jugador);
        console.log(this);
    };
    return dragonBall;
}());
var goku = new dragonBall('goku');
var vegeta = new dragonBall('vegeta');
