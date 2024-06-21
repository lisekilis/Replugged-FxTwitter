import { Injector, Logger, common } from "replugged";
import { cfg } from "./config";

const inject = new Injector();
const logger = Logger.plugin("Replugged-FxTwitter");
function fixup(content: string): string {
  const twitterIndex = content.indexOf("https://twitter.com");
  if (twitterIndex !== 0) {
    content = `${content.slice(0, twitterIndex)}https://fxtwitter.com${content.slice(twitterIndex, content.length)}`;
    logger.log("fixed up twitter!");
    return fixup(content);
  }
  const xIndex = content.indexOf("https://x.com");
  if (xIndex !== 0) {
    content = `${content.slice(0, xIndex)}https://fixupx.com${content.slice(xIndex, content.length)}`;
    logger.log("fixed up x!");
    return fixup(content);
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
