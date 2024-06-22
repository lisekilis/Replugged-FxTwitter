import { Injector, Logger, common } from "replugged";
import { cfg } from "./config";

export * from "./settings";

const inject = new Injector();
const logger = Logger.plugin("Replugged-FxTwitter");
function fixup(content: string): string {
  const twitterRegex =
    /(https:\/\/)(www\.)?(?:twitter\.com\/|twitter\.com\/@)([a-zA-Z0-9_]+)\/status\/([0-9]{19})\??/i;
  const twitter = twitterRegex.exec(content);
  if (twitter) {
    if (content[twitter.index - 1] == "\\") {
      return content.slice(0, twitter.index - 2) + content.slice(twitter.index, content.length);
    }
    const twitterIndex = twitter.index + twitter[1].length + (twitter[2] ? twitter[2].length : 0);
    logger.log("fixed up twitter!");
    content = `${content.slice(0, twitterIndex)}fx${content.slice(twitterIndex)}`;
    return `${content.slice(0, twitterIndex + twitter[0].length)}${fixup(content.slice(twitterIndex + twitter[0].length, content.length))}`;
  }
  const xRegex =
    /(https:\/\/)(www\.)?(?:x\.com\/|x\.com\/@)([a-zA-Z0-9_]+)\/status\/([0-9]{19})\??/i;
  const x = xRegex.exec(content);
  if (x) {
    if (content[x.index - 1] == "\\") {
      return content.slice(0, x.index - 1) + content.slice(x.index, content.length);
    }
    const xIndex = x.index + x[1].length + (x[2] ? x[2].length : 0);
    content = `${content.slice(0, xIndex)}fixup${content.slice(xIndex)}`;
    logger.log("fixed up x!");
    return `${content.slice(0, xIndex + x[0].length)}${fixup(content.slice(xIndex + x[0].length, content.length))}`;
  }
  return content;
}
// eslint-disable-next-line @typescript-eslint/require-await
export async function start(): Promise<void> {
  inject.before(common.messages, "sendMessage", (args) => {
    if (cfg.get("send", true)) args[1].content = fixup(args[1].content);
    return args;
  });
  inject.before(common.messages, "editMessage", (args) => {
    if (cfg.get("edit", true)) args[2].content = fixup(args[2].content);
    return args;
  });
}

export function stop(): void {
  inject.uninjectAll();
}
