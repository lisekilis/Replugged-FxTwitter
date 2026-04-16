import { Injector, Logger, common } from "replugged";
import { cfg } from "./config";

export * from "./settings";

const inject = new Injector();
const logger = Logger.plugin("Replugged-FxTwitter");

const exTwitterRegex =
  /(\\?)(http(s)?:\/\/)(www\.)?(x|twitter)(\.com\/@?[a-zA-Z0-9_]+\/status\/[0-9]{19})\??/gi;

function fixup(content: string): string {
  const exTwitter = /(twitter|x).com/.exec(content);
  const https = cfg.get("https");
  const service = cfg.get("service");
  if (!exTwitter) return content;
  logger.verbose("fixed up exTwitter!");
  return content.replaceAll(
    exTwitterRegex,
    (_string, escape, link, protocol, _secure, _www, _service, suffix) =>
      escape ? link : `${https ? "https://" : protocol}${service}${suffix}`,
  );
}

export function start(): void {
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
