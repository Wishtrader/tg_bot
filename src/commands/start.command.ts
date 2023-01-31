import {Command} from "./command.class";
import {IBotContext} from "../context/context.interface";
import {Markup, Telegraf} from "telegraf";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }
  handle(): void {
    this.bot.start((ctx) => {
      ctx.reply("Do you like our course?", Markup.inlineKeyboard([
        Markup.button.callback("Yes", "course_like"),
        Markup.button.callback("No", "course_dislike"),
      ])
     );
    });
    this.bot.action("course_like", (ctx) => {
      ctx.session.courseLike = true;
      ctx.editMessageText("COOL!");
    });

    this.bot.action("course_dislike", (ctx) => {
      ctx.session.courseLike = false;
      ctx.editMessageText(":(");
    });
  }
}
