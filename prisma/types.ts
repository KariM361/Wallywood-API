import { create } from "domain";

export const fieldTypes: Record<string, Record<string, 'string'|'number'|'boolean'|'date'>> = {
    Users: {
        id: 'number',
        firstname: 'string',
        lastname: 'string',
        email: 'string',
        password: 'string',
        role: 'string',
        isActive: 'boolean'
    },
    
    Cartlines: {
        id: 'number',
        userId: 'number',
        posterId: 'number',
        quantity: 'number',
       createdAt: 'date',
        },

    Poster: {
        id: 'number',
        name: 'string',
        slug: 'string',
        description: 'string',
        image: 'string',
        width: 'number',
        height: 'number',
        price: 'number',
        stock: 'number',
        createdAt: 'date',
        updatedAt: 'date'
    },

    UserRatings: {
        id: 'number',
        userId: 'number',
        posterId: 'number',
        numStars: 'number',
        createdAt: 'date',
    },

    Genres: {
        id: 'number',
        title:'string',
        slug: 'string',
        createdAt: 'date',
        updateAt: 'date',
    },
    
    GenrePosterRel: {
        id: 'number',
        genreId: 'number',
        posterId: 'number',
    }
        
}
