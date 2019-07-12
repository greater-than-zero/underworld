import DungeonMgr from "./DungeonMgr";
import DungeonVO from "./DungeonVO";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;
        this.initDungeon();
    }

    initDungeon() {
        let dvo = DungeonVO.create(300, 300);
        let dmgr = new DungeonMgr();
        dmgr.generate(dvo);
    }
}
