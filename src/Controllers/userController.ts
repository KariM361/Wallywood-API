import { Request, Response } from 'express';
import { prisma } from '../prisma.js';
import bcrypt from 'bcrypt';


/**
 * Method Get Records
 * @param req 
 * @param res 
 * @returns Array
 */
export const getRecords = async (req: Request, res: Response) => {
  try {
    const data = await prisma.users.findMany();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
/**
 * Method Get Record
 * @param req 
 * @param res 
 * @returns Object
 */
export const getRecord = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!id) {
    return res.status(400).json({ error: 'id is missing' });
  }
  try {
    const data = await prisma.users.findUnique({
      where: { id },
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch user' });
  }
};/**
 * Method Create Record
 * @param req 
 * @param res 
 * @returns Object
 */

export const createRecord = async (req: Request, res: Response) => {
  console.log(req.body);

  const { firstname, lastname, email, password, role, isActive } = req.body;
  if (!firstname || !lastname || !email || !password || !role || !isActive) {
    return res.status(400).json({ error: 'All data is required' })
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await prisma.users.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role,
        isActive: Boolean(isActive),
      }
    })
    return res.status(201).json(data)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
/**
 * Method Update Record
 * @param req 
 * @param res 
 * @returns Object
 */
export const updateRecord = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({ error: 'id is missing' });
  }
 const { firstname, lastname, email, password, role, isActive } = req.body;

 if{ !firstname || !lastname || !email || !password || !role || !isActive } {
  return res.status(400).json({ error: 'All data is required' })
  }
  try {
    const data =