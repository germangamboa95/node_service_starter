import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller("")
export class HelloWorldController {
  @Get()
  private index(req: Request, res: Response) {
    return res.send("Hello");
  }
}
