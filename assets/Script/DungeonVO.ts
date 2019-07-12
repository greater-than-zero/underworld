import DungeonTiledVO from "./DungeonTiledVO";
import { randomInt } from "./Utils";

export default class DungeonVO {
    private width: number = 0;
    private height: number = 0;
    private dungeons: DungeonTiledVO[][] = [];

    /** 最大房间数量 */
    private numRoomMax: number = 1;

    /** 额外的房间大小 */
    private roomExtraSize: number = 0;

    get Height(): number {
        return this.height;
    }

    get Width(): number {
        return this.width;
    }

    set Height(value: number) {
        this.height = value;
    }

    set Width(value: number) {
        this.width = value;
    }

    get NumRoomMax(): number {
        return this.numRoomMax;
    }

    set NumRoomMax(value: number) {
        this.numRoomMax = value;
    }

    public createRoom() {
        let size = randomInt(1, 3 + this.roomExtraSize) * 2 + 1;
        let rectangularity = randomInt(0, 1 + Math.floor(size / 2)) * 2;
    }

    public static create(width: number, height: number): DungeonVO {
        let r = new DungeonVO();
        r.dungeons = [];
        for (let wi = 0; wi < width; wi++) {
            if (!r.dungeons[wi]) {
                r.dungeons[wi] = [];
            }

            for (let hi = 0; hi < height; hi++) {
                let dungeonVO = new DungeonTiledVO();
                dungeonVO.x = wi;
                dungeonVO.y = height;
                r.dungeons[wi].push(dungeonVO);
            }
        }
        return r;
    }

    public setTile(x: number, y: number, vo: DungeonTiledVO) {
        this.dungeons[x][y] = vo;
    }

    public getTile(x: number, y: number) {
        return this.dungeons[x][y];
    }
}