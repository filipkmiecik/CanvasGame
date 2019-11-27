class Tile {
    constructor(type) {
        if(!type) {
            throw new Error('Invalid tile size')
        }
        this.type = type
        this.setColor(type)
    }
    setColor(type){
        this.color = this.colors[type]
    }

    initializeColors() {
        this.colors = {
            [tileTypes.empty]: '#222',
            [tileTypes.diamond]: '#000',
            [tileTypes.dirt]: '#111',
            [tileTypes.boulder]: '#120',
            [tileTypes.wall]: '#170'
        }
    }
}