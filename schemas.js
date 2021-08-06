textbookSchema = Schema({
    filepath: {
        Type: String,
        unique: true,
        required: true
    },
    name: {
        Type: String,
        required: true
    },
    description: {
        Type: String,
        default: ""
    }
})

// Coordinates are stored as ratios of x/totalWidth and y/totalHeight.

Coordinate = {
    x: Number,
    y: Number
}

// Points are clockwise starting from top left.
Quad = {
    p1 = Coordinate,
    p2 = Coordinate,
    p3 = Coordinate,
    p4 = Coordinate
}

sectionSchema = Schema({
    textbook: {
        type: ObjectId,
        ref: 'Textbook'
    },
    quad: {
        type: Quad,
        required: true
    },
    pageNumber: {
        type: Number, 
        required: true
    }
})

questionSchema = Schema({
    textbook: {
        type: ObjectId,
        ref: 'Textbook'
    },
    section: {
        type: ObjectId,
        ref: 'Section'
    },
    pageNumber: {
        type: Number, 
        required: true
    },
    decks: {
        type: [{
            type: ObjectId,
            ref: 'Deck'
        }],
        default: []
    },
    subQuestions: {
        type: [{
            type: 'ObjectId',
            ref: 'Question'
        }],
        default: []
    }
})

deckSchema = Schema({
    name: {
        Type: String,
        required: true
    },
    description: {
        Type: String,
        default: ""
    },
    questions: {
        Type: [{
            type: 'ObjectId',
            ref: 'Question'
        }],
        default: []
    }
})

deckCollectionSchema = Schema({
    name: {
        Type: String,
        required: true
    },
    description: {
        Type: String,
        default: ""
    },
    decks: {
        Type: [{
            type: 'ObjectId',
            ref: 'Deck'
        }],
        default: []
    }
})

// Navigation schema