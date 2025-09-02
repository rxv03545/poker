import Util from "./util.js";

/**
 * Gameクラス
 */

export default class Game {
    /**
     * コンストラクタ
     */
    constructor() {

        //イベントハンドラを登録する
        this.#setupEvents();
    }

    /**
     * イベントハンドラを登録する
     */
    #setupEvents() {
        //手札のクリックイベント
        Util.addEventListener(".card.you", "click", this.#onClickCard.bind(this));
        // Drawボタンのクリックイベント
        Util.addEventListener("#draw", "click", this.#onDraw.bind(this));
        // Replayボタンのクリックイベント
        Util.addEventListener("#replay", "click", this.#onReplay.bind(this));
    }

    /**
     * ゲームを開始する
     */
    run() {
        // ゲーム開始処理
    };


    /**
     * 手札のクリックイベントハンドラ
     */
    #onClickCard(event) {
        console.log("手札がクリックされました");
    };

    /**
     * Drawボタンのクリックイベントハンドラ
     */
    #onDraw(event) {
        // Drawボタンがクリックされたときの処理
        console.log("Drawボタンがクリックされました");
    };

    /**
     * Replayボタンのクリックイベントハンドラ
     */
    #onReplay(event) {
        // Replayボタンがクリックされたときの処理
        console.log("Replayボタンがクリックされました");
    };

}
