class HttpRequestError extends Error {

    public static ERROR_TYPE: string = "Ocurrió un error en el servidor";
  
    constructor(public message: string) {
      super(message);
      this.name = "HttpRequestError";
      this.stack = (<any> new Error()).stack;
    }

  }

  export default HttpRequestError;