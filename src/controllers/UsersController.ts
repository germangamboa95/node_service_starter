import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import { User } from "../models/User";

@Controller("users")
export class UsersController {
  @Get()
  private async index(req: Request, res: Response) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (error) {
      console.log(error);
    }
  }
}
