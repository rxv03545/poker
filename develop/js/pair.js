import Util from "./util.js";

/**pairクラス    */
export default class Pair {
  /**プロパティ */
  static #rank = 0;

  /**ロイヤルストレートフラッシュの成否判定  */
  static isRoyalStraightFlush = (cards) => {
    let isPair = false;
    if (
        cards[0].suit===cards[1].suit &&
        cards[0].suit===cards[2].suit &&
        cards[0].suit===cards[3].suit &&
        cards[0].suit===cards[4].suit &&
        cards[0].rank===10 &&
        cards[1].rank===11 &&
        cards[2].rank===12 &&
        cards[3].rank===13 &&
        cards[4].rank===14
    ) {
      isPair = true;

      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isPair;
  };
}

/**ストレートフラッシュの成否判定    */
static isStraightFlush = (cards) => {
  let isPair = false;
  if (
    cards[0].suit === cards[1].suit &&
    cards[0].suit === cards[2].suit &&
    cards[0].suit === cards[3].suit &&
    cards[0].suit === cards[4].suit &&
    cards[0].rank + 1 === cards[1].rank &&
    cards[1].rank + 1 === cards[2].rank &&
    cards[2].rank + 1 === cards[3].rank &&
    cards[3].rank + 1 === cards[4].rank
  ) {
    isPair = true;

    this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
  }
  return isPair;
};

/** フォーカードの成否判定   */ 
static isFourCard = (cards) => {    
    let isPair = false;
    if (
        cards[0].rank === cards[1].rank &&
        cards[0].rank === cards[2].rank &&
        cards[0].rank === cards[3].rank &&
        cards[0].rank !== cards[4].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank);
    }

    else if (
        cards[0].rank !== cards[1].rank &&
        cards[1].rank === cards[2].rank &&
        cards[1].rank === cards[3].rank &&
        cards[1].rank === cards[4].rank 
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[1].rank, cards[2].rank, cards[3].rank);
    }
    return isPair;
};

/**フルハウスの成否判定 */
static isFullHouse = (cards) => {
    let isPair = false;
    if (
        cards[0].rank === cards[1].rank &&
        cards[0].rank === cards[2].rank &&
        cards[3].rank === cards[4].rank &&
        cards[0].rank !== cards[3].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }

    else if (
        cards[0].rank === cards[1].rank &&
        cards[2].rank === cards[3].rank &&
        cards[2].rank === cards[4].rank &&
        cards[0].rank !== cards[2].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
};

/**フラッシュの成否判定     */
static isFlush = (cards) => {
    let isPair = false;
    if (
        cards[0].suit === cards[1].suit &&
        cards[0].suit === cards[2].suit &&
        cards[0].suit === cards[3].suit &&
        cards[0].suit === cards[4].suit
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isPair;
};

/**ストレートの成否判定   */
static isStraight = (cards) => {
    let isPair = false;
    if (
        cards[0].rank + 1 === cards[1].rank &&
        cards[1].rank + 1 === cards[2].rank &&
        cards[2].rank + 1 === cards[3].rank &&
        cards[3].rank + 1 === cards[4].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isPair;
};

/**スリーカードの成否判定        */
static isThreeCard = (cards) => {
    let isPair = false;
    if (
        cards[0].rank === cards[1].rank &&
        cards[0].rank === cards[2].rank 
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank);
    }
    else if (
        cards[1].rank === cards[2].rank &&
        cards[1].rank === cards[3].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[1].rank, cards[2].rank, cards[3].rank);
    }
    else if (
        cards[2].rank === cards[3].rank &&
        cards[2].rank === cards[4].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
};


/**ツーペアの成否判定    */
static isTwoPair = (cards) => {
    let isPair = false;
    if (
        cards[0].rank === cards[1].rank &&
        cards[2].rank === cards[3].rank &&
        cards[0].rank !== cards[2].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank);
    }

    else if (
        cards[0].rank === cards[1].rank &&
        cards[3].rank === cards[4].rank &&
        cards[0].rank !== cards[3].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[3].rank, cards[4].rank);
    }

    else if (
        cards[2].rank === cards[3].rank &&
        cards[2].rank === cards[4].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
};


/**ワンペアの成否判定 */
static isOnePair = (cards) => {
    let isPair = false;
    if (
        cards[0].rank === cards[1].rank &&
        cards[0].rank !== cards[2].rank &&
        cards[0].rank !== cards[3].rank &&
        cards[0].rank !== cards[4].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[0].rank, cards[1].rank);
    }

    else if (
        cards[1].rank === cards[2].rank &&
        cards[1].rank !== cards[0].rank &&
        cards[1].rank !== cards[3].rank &&
        cards[1].rank !== cards[4].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[1].rank, cards[2].rank);
    }

    else if (
        cards[2].rank === cards[3].rank &&
        cards[2].rank !== cards[0].rank &&
        cards[2].rank !== cards[1].rank &&
        cards[2].rank !== cards[4].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[2].rank, cards[3].rank);
    }

    else if (
        cards[3].rank === cards[4].rank &&
        cards[3].rank !== cards[0].rank &&
        cards[3].rank !== cards[1].rank &&
        cards[3].rank !== cards[2].rank
    ) {
        isPair = true;

        this.#rank = Util.sum(cards[3].rank, cards[4].rank);
    }

    return isPair;
};


/** 成立条件を満たす最も強い役を判定する     */
static judge = (cards) => {
    let result = null;

//カード配列のコピーを作成する
    const _cards = [...cards];
    //ランクが小さい順にカードをソートする
    _cards.sort((a,b) => a.rank - b.rank);


    /**役が強い順に判定する  */

    if (this.isRoyalStraightFlush(_cards)) {
        result ={
            strength:9,rank:this.rank,hand:"ロイヤルストレートフラッシュ",
        };
    }

    if (this.isStraightFlush(_cards)) {
        result ={
            strength:8,rank:this.rank,hand:"ストレートフラッシュ",
        };
    }

    if (this.isFourCard(_cards)) {
        result ={
            strength:7,rank:this.rank,hand:"フォーカード",
        };
    }

    if (this.isFullHouse(_cards)) {
        result ={
            strength:6,rank:this.rank,hand:"フルハウス",
        };
    }

    if (this.isFlush(_cards)) {
        result ={
            strength:5,rank:this.rank,hand:"フラッシュ",
        };
    }

    if (this.isStraight(_cards)) {
        result ={
            strength:4,rank:this.rank,hand:"ストレート",
        };
    }

    if (this.isThreeCard(_cards)) {
        result ={
            strength:3,rank:this.rank,hand:"スリーカード",
        };
    }

    if (this.isTwoPair(_cards)) {
        result ={
            strength:2,rank:this.rank,hand:"ツーペア",
        };
    }

    if (this.isOnePair(_cards)) {
        result ={
            strength:1,rank:this.rank,hand:"ワンペア",
        };
    }
//役が成立していない場合 */
else {
    result ={
        strength:0,rank:0,hand:"ノーペア",
    };
}


    return result;
};