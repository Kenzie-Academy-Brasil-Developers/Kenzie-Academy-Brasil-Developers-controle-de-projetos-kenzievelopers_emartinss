export class AppError extends Error {
  public status: number;
  options: any;

  constructor(message: string, status: number = 400) {
    super(message);
    this.status = status;
    
  }
}
