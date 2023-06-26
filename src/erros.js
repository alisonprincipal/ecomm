export class AppError extends Error {
  statusCode;

  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}
// para que o o express reconheça que o handleErros é um middleware
// , é necessario passar 4 parametros!
export const handleErros = (error, req, res, _) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof Error) {
    return res.status(409).json({ message: error.message });
  }
  return res.status(500).json({ message: error.message });
};
