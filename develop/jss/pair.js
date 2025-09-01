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
}

