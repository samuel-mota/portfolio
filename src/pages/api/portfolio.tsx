// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    { name: "This Portfolio", repo: "portfolio", projectLink: "", githubLink: "" },
    { name: "Biblicamentes", repo: "Biblicamentes", projectLink: "", githubLink: "" },
    { name: "Happy", repo: "happy-project", projectLink: "", githubLink: "" },
    { name: "MoveIt", repo: "moveit-project", projectLink: "", githubLink: "" },
  ]);
};
