import{ Request, Response } from 'express'
import { prisma } from '../prisma.js'

/**
 * Method Get Records
 * @param req 
 * @param res 
 * @returns Array
 */
export const getRecords = async (req: Request, res: Response)=> {
    try{
        const data = await prisma.poster.findMany({});
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'failed til fetch poster'});
    }
};
/**
 * Method Get Record
 * @param req 
 * @param res 
 * @returns Object
 */
export const getRecord = async (req: Request, res:Response)=> {
    const id = Number(req.params.id)

    if(!id) {
        return res.status(400).json({error: 'id is missing'})
    }
    try {
        const data = await prisma.poster.findUnique({
        where: { id },    
        })
        return res.status(200).json(data)
    }catch (error){
        console.error(error)
        res.status(500).json({error: 'Failed to fetch poster'})

    }
}
/**
 * Method Create Record
 * @param req 
 * @param res 
 * @returns Object
 */
export const createRecord = async (req: Request, res: Response)=>{

    console.log(req.body)

    const{ name, slug, description, image, width, height, price, stock,} = req.body;

    if(!name|| !slug|| !description|| !image|| !width|| !height|| !price|| !stock){
        return res.status(400).json({ error: 'All data is required' })
    }

    try{
        const data = await prisma.poster.create({
            data: {
            name,
            slug,
            description,
            image,
            width:Number(width),
            height: Number(height),
            price: Number(price),
            stock: Number(stock),
}
    })
    return res.status(201).json(data)
    } catch (error) {
       console.error(error)
       return res.status(500).json({ error: 'something went wrong'}) 
    }

}
/**
 * Method Update Record
 * @param req 
 * @param res 
 * @returns Object
 */
export const updateRecord = async (req: Request, res: Response) => {
    const id = Number (req.params.id)
    if(!id){
        return res.status(400).json({error: 'Id is missing'})
    }
    const{name, slug, description, image, width, height, price, stock,} = req.body;

    if(!name|| !slug|| !description|| !image|| !width|| !height|| !price|| !stock){
        return res.status(400).json({ error: 'All data is required' })
    }
try{
        const data = await prisma.poster.update({
            where:{ id },
            data: {
            name,
            slug,
            description,
            image,
            width: Number(width),
            height: Number(height),
            price: Number(price),
            stock: Number(stock),
}
    })
    return res.status(201).json(data)
    } catch (error) {
       console.error(error)
       return res.status(500).json({ error: 'something went wrong'}) 
    }

}
export const deleteRecord = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    if(!id) {
        return res.status(400).json({error:'id is missing'})
}
try{
    const data = await prisma.poster.delete({
        where: { id }
    })
    res.status(200).json({ messege: 'Record deleted', deletedId:id })
}catch (error){
    console.error(error);
    return res.status(500).json({error: 'failed delete record'})
}
}