import Card from "./card.js";

/playerクラス/
export default class Player {
/**プロパティ*/

#cards;
#nodes;

/**プレイヤーの手札
     */
    get cards() {
        return this.#cards;
    }

    /**手札のノード（リスト） */
    get nodes() {
        return this.#nodes;
    }


//選択しているノード（リスト）

get selectedNodes(){
//nodesの中から条件を満たす要素だけ集めた新しい配列
return this.nodes.filter((node) =>
    node.classList.contains("selected"));
}

/**コンストラクタ    */
constructor(selector){
    this.#nodes = Array.from(document.querySelectorAll(selector));
    this.#cards = [];
}

/**手札を描画する */
displayCard(front){
    this.cards.forEach((card,index) => {
        let name = String(card.index).padStart(2,"0")+".png";
//裏面を表示する場合は画像を変更
        if (!front) {
            name = "red.png";
        }
        //カードの画像をセット
        this.nodes[index].setAttribute("src","images/"+name);
    });
};

/*新しいカードを手札に追加する*/
addCard(newCard){
    this.cards.push(newCard);
    //最後尾のノードにカードのインデックス番号を書き込む    
    this.nodes[this.cards.length-1].dataset.index = newCard.index;
};

/*交換するカードを選択する*/
selectCard(node){
    //選択状態を表すCSSクラス名を切り替える
    node.classList.toggle("selected");
};

/*山札からカードを引いて交換する*/
drawCard(newCard){
    //選択しているノードを先頭から一つ取り出す
    const node = this.selectedNodes.shift();
    //このノードに書かれたインデックス番号を取得する
    const index = parseInt(node.dataset.index);
    //このノードに書かれた手札の位置を検索する
    const pos = this.cards.findIndex((card) => card.index === index);
    //この手札を複製して退避しておく
    const oldCard = this.cards.slice(pos,pos+1)[0];
    //この手札を新しいカードで置き換える
    this.cards[pos] = newCard;
    //このノードに新しいカードのインデックス番号を書き込む
    node.dataset.index = newCard.index;
    //このノードを未選択の状態に戻す
    node.classList.remove("selected");
    //退避したカードを返す
    return oldCard;
};
}