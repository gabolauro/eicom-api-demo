import { Request, Response } from 'express';

class IndexController {


	public index (req: Request, res: Response) {

		// res.send('Hello')
		res.json({text: 'API esta en /api/v1/alertas'})

	}	

}

const indexControler = new IndexController();
export default indexControler;
