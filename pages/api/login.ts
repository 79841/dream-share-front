import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    data: { jwt },
  } = await axios.post(`${process.env.SERVER}/api/v1/auth/login`, req.body);
  const token = encodeURIComponent(`Bearer ${jwt}`);
  res.setHeader("Set-Cookie", `Authorization=${token}; Path=/; HttpOnly`);
  res.status(200).json({ jwt });
}
