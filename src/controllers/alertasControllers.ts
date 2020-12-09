import { Request, Response } from 'express';

import pool from '../database';

class AlertasController {


	//Metodo GET
	public async list (req: Request, res: Response) {
		const alertas = await pool.query('SELECT * FROM adv ORDER BY fecha DESC LIMIT 0,10')
		res.json(alertas)
	}

	//Metodo GET
	public async getone (req: Request, res: Response) {
		const id = req.params.id
		const alerta = await pool.query(`SELECT * FROM adv WHERE id_adv = ${ id }`)
		if (alerta.length > 0) {
			res.json(alerta[0])
		} else {
			res.status(400).json({text: 'Registro no encontrado'})
		}
		// res.json(alerta)
		console.log(alerta)
	}

	//Metodo  POST
	public create (req: Request, res: Response) {
		res.json({text: 'Alerta cargada'})
	}

	//Metodo  PUT
	public update (req: Request, res: Response) {
		res.json({text: 'Alerta actualizada ' + req.params.id})
	}

	//Metodo  DELETE
	public delete (req: Request, res: Response) {
		res.json({text: 'Alerta borrada ' + req.params.id}})
	}




}

const alertasControler = new AlertasController();
export default alertasControler;