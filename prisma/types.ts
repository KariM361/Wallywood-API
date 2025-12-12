import { create } from "domain";

export const fieldTypes: Record<string, Record<string, 'string'|'number'|'boolean'|'date'>> = {
    user: {
        id: 'number',
        firstname: 'string',
        lastname: 'string',
        email: 'string',
        password: 'string',
        role: 'string',
        isActive: 'boolean'
    },
    cartline: {
        id: 'number',
        userId: 'number',
        posterId: 'number',
        quantity: 'number',
       createdAt: 'date',
    },
    poster: {
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
    userrating: {
        id: 'number',
        userId: 'number',
        posterId: 'number',
        numStars: 'number',
        createdAt: 'date',
    },
    genre: {
        id: 'number',
        title:'string',
        slug: 'string',
        createdAt: 'date',
        updatedAt: 'date',
    },
    genrePosterRel: {
        genreId: 'number',
        posterId: 'number',
    }
}
