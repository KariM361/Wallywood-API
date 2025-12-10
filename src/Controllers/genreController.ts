import { Request, Response } from "express";
import { prisma } from "../prisma.js";
import { error } from "console";

/**
 * Method Get Records
 * @param req 
 * @param res 
 * @returns Array
 */

export const getRecords = async (req: Request, res: Response) => {
    try {
        const data = await prisma.genre.findMany({})
        return res.status(200).json(data)
    }catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch genres'})
    }
}
/**
 * Method Get Record
 * @param req 
 * @param res 
 * @returns Object
 */
export const getRecord = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    if(!id) {
        return res.status(400).json({error:'id is missing' })
    }
    try {
    const data = await prisma.genre.findUnique({
      where: { id },
    });
    return res.status(200).json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch genre' });
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

    const{title, slug} = req.body;

    if(!title||!slug){
        return res.status(400).json({ error: 'All data is required'})
    }
    try{
        const data = await prisma.genre.create({
            data: {
              title,
              slug  
            }
        })
        return res.status(201).json(data)
} catch (error){
    console.error.apply(error)
    return res.status(500).json({ error: 'Something is wrong' })
}
}
/**
 * Method Update Record
 * @param req 
 * @param res 
 * @returns Object
 */
export const updateRecord = async (req: Request, res: Response) => {
const id = Number(req.params.id)

if(!id){
    return res.status(400).json({error: 'Id is missing'})
}
const { title, slug } = req.body;
  
  if(!title||!slug) {
    return res.status(400).json({ error: 'All data is required' })
  }
  
  try {
    const data = await prisma.genre.update({
      where: { id },
     data: {
        title,
        slug
      }
    })
    return res.status(201).json(data)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong'})
    }
}

export const deleteRecord = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  if(!id) {
    return res.status(400).json({ error: 'Id is missing '})
  }
  
  try {
    const data = await prisma.genre.delete({
      where: { id }
    })
    res.status(200).json({ message: 'Record deleted',
      deletedId: id
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'failed to delete record' }) 
  }
  
}