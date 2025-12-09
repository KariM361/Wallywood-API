import{ Request, Response } from 'express'
import { prisma } from '../prisma.js'


/**
 * Metod Get Records
 * @param req
 * @param res
 * @returns Array
 */
export const getRecords = async (req: Request, res: Response) => {
    try{
        const data = await prisma.cartline.findMany({});
        return res.status(200).json(data) 
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'failed to fetch cartline'})
    }
};
/**
 * Method Get Record
 * @param req
 * @param res
 * Object
 */
export const getRecord = async (req: Request, res: Response) =>{
    const id = Number(req.params.id)

    if(!id){
        return res.status(400).json({error: 'id is missing'})
}
try {
    const data = await prisma.cartline.findUnique({
        where: { id },
    });
    return res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'failed toi fetch cartline'}) 
    }
}
/**
 * Method Create Record
 * @param req 
 * @param res 
 * @returns Object
 */
export const createRecord = async (req: Request, res: Response) => {
    console.log(req.body)

    const {userId,posterId, quantity} = req.body;

    if(!userId||!posterId||!quantity){
        return res.status(400).json({error: 'All data is requried'})
    }

    try {
     const data = await prisma.cartline.create({
      data: {
       userId: Number(userId),
       posterId: Number(posterId),
       quantity
      }
    })
    return res.status(201).json(data)
} catch (error) {
    console.error(error);
    return res.status(500).json({error: 'something went wrong'})
}
}
/**
 * Method Update Record
 * @param req 
 * @param res 
 * @returns Object
 */
export const updateRecord = async (req: Request, res: Response)=> {
    const id = Number(req.params.id);
 if(!id){
    return res.status(400).json({error:'id is missing'})
 }   
 const{ userId, posterId, quantity } = req.body;

 if(!userId||!posterId||!quantity){
return res.status(400).json({ error: 'All data is reqired'})
}
try {
    const data = await prisma.cartline.update({
        where: { id },
        data: {
            userId,
            posterId,
            quantity
        }
    })
    return res.status(201).json(data)
}catch(error){
    console.error(error);
    return res.status(500).json({error: 'something is wrong'})
}
}
export const deletedRecord = async (req: Request, res: Response)=> {
    const id = Number (req.params.id)
    if(!id) {
        return res.status(400).json({error :'Id is missing'})
    }
    try{
        const data = await prisma.cartline.delete({
            where: { id }
        })
        res.status(200).json({message: 'Record deleted', deletedId:id})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error:'failed to delete record' })
    }
}