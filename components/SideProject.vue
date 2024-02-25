<template>
    <h2>Side project</h2>
    <hr>

    <blockquote>
        <div class="blockquote__left">
            <b>chess-web-app</b>
            <br>
            <code>Nuxt3</code> <code>TS</code> <code>tailwind</code> <code>pinia</code> <code>axios</code> <code>vue router</code> <code>vue-i18n</code> <code>jest</code>
            <br>
            <code>express</code> <code>mongoDB</code> <code>TS</code> <code>sockets</code>
            <br>
            <code>TS</code> <code>jest</code>
            <br>
            <p>
                Currently building a chess app to play against computer or connected users.
                Stockfish web assembly chess engine running on a web worker.
                Web sockets to play and chat with another connected user.
                Using the latest tools from the vue.js ecosystem on the frontend.
                Building a Typescript library to generate possible moves with the help of chess-programming-wiki
            </p>
            <ul>
                <li><a href="https://github.com/octodrome/chess-front">chess front</a> - Play vs computer</li>
                <li><a href="https://github.com/octodrome/chess-back">chess back</a> - Service to play against other users</li>
                <li><a href="https://github.com/octodrome/chess-legal-moves">chess legal moves</a> - Returns legal moves from current game position</li>
            </ul>
        </div>
        <div class="blockquote__right">
            <img src="~/assets/img/chess-app.png" alt="chess app" class="chess-app">
        </div>
    </blockquote>
</template>

<style>
.chess-app {
    width: 170px;
    height: 170px;
    /* https://codepen.io/sdthornton/pen/wBZdXq  */
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
</style>
