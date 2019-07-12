import DungeonVO from "./DungeonVO";
import DungeonDoor from "./DungeonDoor";
import DungeonRoomVO from "./DungeonRoomVO";
import DungeonWall from "./DungeonWall";
import DungeonTiledVO, { DungeonTiledType } from "./DungeonTiledVO";


export default class DungeonMgr {
    private dungeon: DungeonVO;

    private _addRooms() {
    }

    public generate(dungeon: DungeonVO) {
        if (!dungeon) {
            return;
        }

        if (dungeon.Height % 2 === 0 || dungeon.Width % 2 === 0) {
            return;
        }

        this.dungeon = dungeon;
        this.fill(DungeonTiledType.Wall, true);
    }

    /**
     * 设置Tile
     * @param x 坐标X
     * @param y 坐标Y
     * @param vo 需要替换的地牢对象
     */
    public setTile(x: number, y: number, vo: DungeonTiledVO) {
        this.dungeon.setTile(x, y, vo);
    }

    /**
     * 用某个type 填充整个地牢
     * @param type 地牢组件类型
     * @param immInit 是否立即初始化
     */
    public fill(type: DungeonTiledType, immInit: boolean) {
        for (var y = 0; y < this.dungeon.Height; y++) {
            for (var x = 0; x < this.dungeon.Width; x++) {
                this.setTile(x, y, DungeonMgr.createDungeonOfType(x, y, type, immInit));
            }
        }
    }

    /**
     * 地牢对象的简单工厂 创建地牢对象
     * @param x 坐标X
     * @param y 坐标Y
     * @param type 地牢组件类型
     * @param immInit 是否立即初始化
     */
    public static createDungeonOfType(x: number, y: number, type: DungeonTiledType, immInit: boolean): DungeonTiledVO {
        let r = null;
        switch (type) {
            case DungeonTiledType.Wall:
                r = DungeonWall.create(x, y);
                break;
            default:
                r = DungeonTiledVO.create(x, y);
        }

        if (immInit) {
            r.init();
        }
        return r;
    }
} 