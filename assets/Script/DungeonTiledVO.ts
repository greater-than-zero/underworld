export enum DungeonTiledType {
    None = 0,
    Wall = 1,
}

export default class DungeonTiledVO {
    type: DungeonTiledType = DungeonTiledType.None;
    x: number = 0;
    y: number = 0;

    public init() {
        //TODO: 初始化信息
    }

    public unInit() {

    }

    get Type(): DungeonTiledType {
        return this.type;
    }

    set Type(type: DungeonTiledType) {
        this.type = type;
    }

    public static create(x: number, y: number) {
        let r = new DungeonTiledVO();
        r.x = x;
        r.y = y;
        return r;
    }
}