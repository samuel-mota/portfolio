// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    { name: "John Doe", age: 20 },
    { name: "Samuel Mota", age: 37 },
    { name: "Samuel Mota", age: 37 },
    { name: "Samuel Mota", age: 37 },
    { name: "Samuel Mota", age: 37 },
  ]);
};
