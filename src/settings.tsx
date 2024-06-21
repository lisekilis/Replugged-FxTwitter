import { components, settings, util } from "replugged";

const { Clickable, SwitchItem, Text } = components;

const cfg = await settings.init("dev.lisekilis.RepluggedFxTwitter");

export function Settings(): React.ReactElement {
  return (
    <>
      <Text.H1>Replace</Text.H1>
      <SwitchItem
        {...{
          note: "Replaces the twitter link on send.",
          ...util.useSetting(cfg, "send", true),
        }}>
        On send
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Replaces the twitter link on edit.",
          ...util.useSetting(cfg, "edit", true),
        }}>
        On edit
      </SwitchItem>
      <Clickable
        onClick={() =>
          window.open("https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html")
        }>
        {<Text.H2>♪(^∇^*)</Text.H2>}
      </Clickable>
    </>
  );
}
