import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  epoch: number;
  iso: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ epoch: Date.now(), iso: new Date().toISOString() });
};
