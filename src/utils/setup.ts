import { CustomError } from '@n0bodysec/ts-utils';
import { redBright } from 'colorette';

process.on('unhandledRejection', (reason: Error, promise: Promise<unknown>) =>
{
	if (reason.name === 'CustomError') CustomError.print(reason as CustomError);
	else console.log(redBright('Unhandled Rejection at:'), promise, redBright('reason:'), reason);

	process.exit(1);
});

process.on('uncaughtException', (err: Error, origin: string) =>
{
	if (err.name === 'CustomError') CustomError.print(err as CustomError);
	else console.log(redBright('Uncaught Exception:'), err, origin);

	process.exit(1);
});
