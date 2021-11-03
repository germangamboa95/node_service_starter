import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller("")
export class HelloWorldController {
  @Get()
  private index(req: Request, res: Response) {
    const food = ["pizza", "cookies"];

    return res.render("home", { layout: "app", food, some_word: "Word" });
  }
}
