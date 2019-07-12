
export default class DungeonRoomVO {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    public static create(x: number, y: number, width: number, height: number) {
        let r = new DungeonRoomVO();
        r.x = x;
        r.y = y;
        r.width = width;
        r.height = height;
        return r;
    }
}