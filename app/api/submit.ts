import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
 
const schema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string(),
    imgUrl: z.string(),
})
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const parsed = schema.parse(req.body)

}