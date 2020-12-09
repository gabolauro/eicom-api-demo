import { Router } from 'express';

import alertasControllers from '../controllers/alertasControllers';


class AlertasRoutes {

	public router: Router = Router();

	constructor() {
		this.config();
	}

	config(): void {
		this.router.get('/', alertasControllers.list)
		this.router.get('/:id', alertasControllers.getone)
		this.router.post('/', alertasControllers.create)
		this.router.put('/:id', alertasControllers.update)
		this.router.delete('/:id', alertasControllers.delete)
	}

}

const alertasRoutes = new AlertasRoutes();
export default alertasRoutes.router;