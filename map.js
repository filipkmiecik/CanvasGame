class Map {
    constructor(canvasId) {
        this.tiles = []
        this.tileSize = 50
        this.tileRows = 12
        this.tilesInRow = 50
        this.tilesCount = this.tileRows * this.tileInRow

        this.initializeCanvas(canvasId)
        this.generateTiles()
        this.drawTilesToCanvas()
    }

    drawTilesToCanvas() {
        for(let y = 0; y < this.tileRows; y++){
            for(let x = 0; x < this.tilesInRow; x++){
                this.drawTilesToCanvas(x,y)
            }
        }
    }

    drawTile(x, y) {
        const tileColor = this.tiles[y][x].color
        this.ctx.fillStyle = tileColor
        const xPos = x * this.tileSize
        const yPos = y * this.tileSize
        this.ctx.fillRect(xPos, yPos, this.tileSize, this.tileSize)
    }

    generateTiles(){
        for(let y = 0; y < this.tileRows; y++){
            this.tile[y] = []
            for(let x = 0; x < this.tilesInRow; x++) {
                const tileNumber = Math.floor(Math.random() * 4)
                let tile
                switch (tileNumber) {
                    case 0:
                        tile = tileTypes.empty
                        break
                    case 1:
                        tile = tileTypes.diamond
                        break  
                    case 2:
                        tile = tileTypes.boulder
                         break
                    case 3:
                        tile = tileTypes.dirt
                        break   
                    case 4:
                        tile = tileTypes.wall
                        break             
                }
                this.tile[y][x] = new Tile(tile)
        }
    }
    initializeCanvas(canvasId){
        if(!canvasId){
            throw new Error('Could not find a canvas element')
            }

        this.canvas = document.querySelector(`#${canvasId}`)
        this.ctx = this.canvas.getContext('2d')
        }
    }
}
