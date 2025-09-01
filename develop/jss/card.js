/** カードクラス */

export default class Card {

/**プロパティ */
#rank;
#suit;
#index;

/**カードの数字          */
get rank() {return this.#rank;}
set rank(rank) {this.#rank = rank;}

/**カードのマーク      */
get suit() {return this.#suit;}
set suit(suit) {this.#suit = suit;}

/**カードのインデックス*/
get index() {return this.#index;}
set index(index) {this.#index = index;}

/**コンストラクタ    */
constructor(index){
  this.rank = ((index-1) % 13) + 1;
  //Aのカードは14として扱う
    if(this.rank === 1) {
        this.rank=14;
    }
    this.suit= Math.floor((index-1) /13) +1;
    this.index = index;

}
}